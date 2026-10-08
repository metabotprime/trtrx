import assert from 'node:assert/strict';
import { readFileSync, writeFileSync } from 'node:fs';
import { createRequire } from 'node:module';
import { execFileSync } from 'node:child_process';
import { resolve } from 'node:path';
import { createHash } from 'node:crypto';
import vm from 'node:vm';

const require = createRequire(import.meta.url);
const [moduleFile, componentFile, baselineFile, reportFile] = process.argv.slice(2);
assert(moduleFile && componentFile && baselineFile && reportFile, 'Pass compiled GA4, compiled component, provider baseline and report paths.');
const analytics = require(resolve(moduleFile));
assert(/^G-[A-Z0-9]+$/.test(analytics.GA4_MEASUREMENT_ID), 'Provision the actual measurement ID before final verification.');
const baselineCommit = process.env.GA4_BASELINE_COMMIT ?? '8fc5f0061e72f4245abad58eee05132a26af3d1b';
const oldApp = execFileSync('git', ['show', `${baselineCommit}:src/pages/_app.tsx`], { encoding: 'utf8' });
const newApp = readFileSync('src/pages/_app.tsx', 'utf8');
const stripped = newApp.replace("import { PublicGa4 } from '@/components/analytics/PublicGa4';\n", '').replace('      <PublicGa4 />\n', '');
assert.equal(stripped, oldApp, 'All existing App/Vercel bytes must remain unchanged.');

function vercelFunction(source) {
  const match = source.match(/function publicPageView\(event: BeforeSendEvent\) \{([\s\S]*?)\n\}/);
  assert(match);
  return new Function('isPublicIndexingAllowed', `return function(event) {${match[1]}}`)(
    (hostname) => ['trtrx.com', 'www.trtrx.com'].includes(hostname.toLowerCase().replace(/:\d+$/, '')),
  );
}
const oldCapture = vercelFunction(oldApp);
const newCapture = vercelFunction(newApp);
const fixturePaths = ['/', '/pricing', '/launch', '/treatments', '/treatments/cypionate', '/blog/testosterone-blood-tests', '/api/og', '/sign-in', '/intake', '/intake/step', '/portal', '/account/profile', '/404', '/not-found'];
const fixtureHosts = ['https://trtrx.com', 'https://www.trtrx.com', 'https://trtrx.vercel.app', 'http://localhost:3000'];
const channelQueries = ['', '?utm_source=google&gclid=old-google', '?utm_source=meta&fbclid=old-meta', '?utm_source=tiktok&ttclid=old-tiktok', '?utm_source=snapchat&ScCid=old-snap', '?im_ref=old-katalys', '?email=private-example&answer=health-example'];
let fixtureCount = 0;
for (const host of fixtureHosts) for (const path of fixturePaths) for (const query of channelQueries) {
  const event = { type: 'pageview', url: `${host}${path}${query}#private-fragment`, route: path, metadata: { existing: 'unchanged' } };
  assert.equal(JSON.stringify(newCapture(structuredClone(event))), JSON.stringify(oldCapture(structuredClone(event))));
  fixtureCount++;
}

const native = JSON.parse(readFileSync(baselineFile, 'utf8'));
const nativeBefore = JSON.stringify(native);
function replayRows(capture, rows) {
  return rows.map((row) => ({ ...row, capture: capture({ type: 'pageview', url: `https://trtrx.com${row.route}?utm_source=legacy&private=example#private`, route: row.route }) }));
}
const oldRows = replayRows(oldCapture, native.response.data);
const newRows = replayRows(newCapture, native.response.data);
assert.equal(JSON.stringify(newRows), JSON.stringify(oldRows));
assert.equal(JSON.stringify(native), nativeBefore, 'Native report rows and nulls must not be changed.');
assert(newRows.some((row) => row.route === '/treatments/[slug]' && row.vercel_analytics_page_view_count_count === 5 && row.capture), 'Old clinical route counts must survive independently of the GA4 gate.');
const interferingCapture = vercelFunction(newApp.replace("  url.search = '';", '  // Mutation: shared query sanitizer was removed.'));
assert.notEqual(JSON.stringify(interferingCapture({ url: 'https://trtrx.com/?email=private-example' })), JSON.stringify(oldCapture({ url: 'https://trtrx.com/?email=private-example' })), 'Fixture must reject the interfering shared-normalizer version.');

const acceptedPaths = ['/', '/how-it-works', '/pricing', '/about', '/faq', '/blog', '/trt-in-your-state', '/blog/category/pricing', '/blog/how-trt-pricing-works', '/contact', '/privacy', '/terms', '/accessibility', '/medical-disclaimer', '/editorial-policy', '/medical-review-policy'];
for (const path of acceptedPaths) assert.equal(analytics.publicGa4Url(`https://trtrx.com${path}?email=private#answer`), `https://trtrx.com${path}`);
for (const url of ['http://trtrx.com/', 'https://www.trtrx.com/', 'https://trtrx.vercel.app/', 'https://user:password@trtrx.com/', 'https://trtrx.com/intake', 'https://trtrx.com/treatments/cypionate', 'https://trtrx.com/blog/testosterone-blood-tests', 'https://trtrx.com/launch', 'https://trtrx.com/not-found']) assert.equal(analytics.publicGa4Url(url), null);
assert.equal(analytics.publicGa4Referrer('https://google.com/search?q=private#private'), 'https://google.com/');
assert.equal(analytics.publicGa4Referrer('https://trtrx.com/intake?answer=private'), '');
assert.equal(analytics.publicGa4Referrer('https://user:password@example.com/private?answer=private'), 'https://example.com/');

const commands = [];
const transitions = [];
let disabled = true;
let loads = 0;
const controller = analytics.createGa4Controller({
  measurementId: 'G-TESTABC123', referrer: 'https://google.com/search?q=private',
  push: (...command) => { commands.push(command); transitions.push({ kind: 'command', command: command[0], disabled }); },
  setDisabled: (value) => { disabled = value; transitions.push({ kind: 'disabled', value }); },
  loadScript: () => { loads++; },
});
controller.view('https://trtrx.vercel.app/');
assert.equal(commands.length, 0); assert.equal(loads, 0); assert.equal(disabled, true);
controller.view('https://trtrx.com/?email=private#private');
controller.view('https://trtrx.com/?email=changed#changed');
controller.suspend(); assert.equal(disabled, true);
controller.view('https://trtrx.com/pricing?answer=private');
controller.suspend(); assert.equal(disabled, true);
const beforeUnsafe = commands.length;
controller.view('https://trtrx.com/intake?answer=private');
assert.equal(disabled, true); assert.equal(commands.length, beforeUnsafe);
controller.view('https://trtrx.com/pricing');
assert.equal(disabled, false);
const pageviews = commands.filter((command) => command[0] === 'event');
assert.equal(pageviews.length, 3, 'Initial view, real public navigation and return from excluded route, with query/hash/remount dedup.');
assert.equal(loads, 1);
for (const command of commands.filter((item) => item[0] === 'config')) {
  const parameters = command[2];
  assert.equal(parameters.send_page_view, false);
  assert.equal(parameters.allow_google_signals, false);
  assert.equal(parameters.allow_ad_personalization_signals, false);
  assert.equal(parameters.cookie_prefix, 'trtrx_ga4');
  assert(!JSON.stringify(parameters).match(/private|email|answer|user_id|user_properties/));
}
assert.equal(transitions.find((item) => item.command === 'config').disabled, true, 'Set clean GA4 context before enabling collection.');

const compiledModule = readFileSync(moduleFile, 'utf8').replace(/(var|const) GA4_MEASUREMENT_ID = ["'][^"']*["'];/, 'var GA4_MEASUREMENT_ID = "G-TESTABC123";');
function browserFixture(code) {
  const legacyLayer = [{ event: 'existing-platform' }];
  const legacyGtag = function existingGtag() {};
  const scripts = [];
  const context = { module: { exports: {} }, exports: {}, URL, Date, window: { dataLayer: legacyLayer, gtag: legacyGtag, localStorage: { old: 'unchanged' } }, document: { referrer: 'https://example.com/private?q=private', getElementById: () => null, createElement: () => ({}), head: { appendChild: (script) => scripts.push(script) } } };
  Object.defineProperty(context.document, 'cookie', { get() { throw Error('Module must not read existing cookies'); }, set() { throw Error('Module must not write existing cookies'); } });
  vm.runInNewContext(code, context);
  context.module.exports.getBrowserGa4Controller().view('https://trtrx.com/?email=private');
  assert.equal(context.window.dataLayer, legacyLayer);
  assert.equal(context.window.gtag, legacyGtag);
  assert.equal(JSON.stringify(context.window.localStorage), '{"old":"unchanged"}');
  assert.equal(scripts.length, 1);
  assert.equal(scripts[0].referrerPolicy, 'no-referrer');
  assert(scripts[0].src.endsWith('&l=trtrxGa4Layer'));
  return context;
}
browserFixture(compiledModule);
assert.throws(() => browserFixture(compiledModule.replace('ga4Window.trtrxGa4Layer ??= [];', 'ga4Window.dataLayer = []; ga4Window.trtrxGa4Layer ??= [];')), /reference-equal|same reference|strictly equal|Expected/, 'Fixture must reject overwriting the existing shared queue.');

const handlers = new Map();
const router = { isReady: true, pathname: '/', events: { on: (name, handler) => handlers.set(name, handler), off: (name, handler) => { if (handlers.get(name) === handler) handlers.delete(name); } } };
let cleanup;
const componentContext = { module: { exports: {} }, exports: {}, window: { location: { href: 'https://trtrx.com/' } }, require: (name) => {
  if (name === 'react') return { useEffect: (callback) => { cleanup = callback(); } };
  if (name === 'next/router') return { __esModule: true, default: router, useRouter: () => router };
  if (name.endsWith('/content/launch')) return { PUBLIC_LAUNCH_ENABLED: true };
  if (name.endsWith('/analytics/ga4')) return { getBrowserGa4Controller: () => controller };
  throw Error(`Unexpected module ${name}`);
} };
vm.runInNewContext(readFileSync(componentFile, 'utf8'), componentContext);
componentContext.module.exports.PublicGa4();
assert.equal(handlers.size, 5);
handlers.get('routeChangeStart')(); assert.equal(disabled, true);
router.pathname = '/_error'; componentContext.window.location.href = 'https://trtrx.com/pricing';
handlers.get('routeChangeComplete')(); assert.equal(disabled, true);
router.pathname = '/pricing'; handlers.get('routeChangeComplete')(); assert.equal(disabled, false);
const beforeHash = commands.filter((item) => item[0] === 'event').length;
handlers.get('hashChangeStart')(); assert.equal(disabled, true);
componentContext.window.location.href = 'https://trtrx.com/pricing#private';
handlers.get('hashChangeComplete')();
assert.equal(commands.filter((item) => item[0] === 'event').length, beforeHash);
handlers.get('routeChangeStart')(); handlers.get('routeChangeError')(); assert.equal(disabled, false);
cleanup(); assert.equal(handlers.size, 0); assert.equal(disabled, true);

const hash = (value) => createHash('sha256').update(value).digest('hex');
const report = {
  observedAt: new Date().toISOString(), status: 'PASS', baselineCommit,
  oldAppSha256: hash(oldApp), oldBytesAfterRemovingOnlyTwoAdditionsSha256: hash(stripped),
  existingPlatform: 'Vercel Web Analytics', oldNewUrlFixtures: fixtureCount, existingChannelDifferences: 0,
  providerBaselineFile: resolve(baselineFile), providerBaselineSha256: hash(readFileSync(baselineFile)),
  providerRows: native.response.data.length, providerSummaryGroups: native.response.summary.length,
  nativeMeasuredPageviews: native.response.summary.reduce((total, row) => total + row.vercel_analytics_page_view_count_count, 0),
  nullProviderCountRowsPreserved: native.response.data.filter((row) => row.vercel_analytics_page_view_count_count === null).length,
  realAggregateReplayDifferences: 0, oldTreatmentFivePageviewsPreserved: true,
  classifierReplay: { status: 'NOT_APPLICABLE', reason: 'No production attribution database, report classifiers or server postbacks exist in this repository. Source-preserving capture replay uses native provider aggregate rows, not fabricated per-visitor rows.' },
  mutationFixturesDetected: ['shared Vercel query sanitizer removed', 'existing global dataLayer overwritten'],
  ga4: { measurementId: analytics.GA4_MEASUREMENT_ID, allowedPaths: acceptedPaths.length, initialAndRouteDedup: true, sensitivePreviewClinicalUnknownUrlsExcluded: true, transitionDisableBeforeUrlChange: true, cleanConfigBeforeEnable: true, errorPageExcluded: true, hashAndCancelledRouteNoDuplicates: true, layerAndCookieNamespaceIsolated: true, existingCookiesAndStorageUntouchedByModule: true, enhancedMeasurementMustBeDisabledInProvider: true },
  limits: ['Offline deterministic replay does not prove live Google receipt or Realtime visibility.', 'Google library cookie behavior and automatic events require live-provider/browser verification; new cookie namespace is configured, not asserted from this fake environment.'],
};
writeFileSync(reportFile, JSON.stringify(report, null, 2) + '\n');
console.log(JSON.stringify(report, null, 2));
