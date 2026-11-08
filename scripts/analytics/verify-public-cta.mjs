import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { execFileSync } from 'node:child_process';
import ts from 'typescript';

const base = process.argv[2] ?? '3db16eec61cc16006448c8303d946cece7ac2a2d';
const baseline = JSON.parse(fs.readFileSync(process.argv[3] ?? 'scripts/analytics/fixtures/production-routes-20261104.json', 'utf8'));
const old = (file) => execFileSync('git', ['show', `${base}:${file}`], { encoding: 'utf8' });
const current = (file) => fs.readFileSync(file, 'utf8');
function evaluate(source, requireFn = () => { throw new Error('Unexpected import'); }, globals = {}) {
  const exports = {};
  const code = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.CommonJS, jsx: ts.JsxEmit.ReactJSX } }).outputText;
  vm.runInNewContext(code, { exports, require: requireFn, URL, Date, ...globals });
  return exports;
}
function load(file, overrides = {}) {
  return evaluate(current(file), (name) => {
    if (Object.hasOwn(overrides, name)) return overrides[name];
    const target = name.startsWith('@/') ? `src/${name.slice(2)}` : path.join(path.dirname(file), name);
    return load(`${target}.ts`, overrides);
  }, overrides.globals);
}
const plain = (value) => JSON.parse(JSON.stringify(value));
const cta = load('src/lib/analytics/public-cta.ts');
const valid = cta.publicCtaEvent('https://trtrx.com/?private=secret#secret', 'cost_guide', 'hero', '/blog/how-trt-pricing-works');
assert.deepEqual(plain(valid), { action: 'cost_guide', surface: 'hero', page_path: '/' });
const blockedPages = ['/intake', '/portal', '/account', '/sign-in', '/api/test', '/launch', '/blog/choosing-online-trt-provider', '/blog/trt-and-fertility', '/treatments', '/missing'];
for (const page of blockedPages) assert.equal(cta.publicCtaEvent(`https://trtrx.com${page}`, 'email', 'footer', 'mailto:care@trtrx.com'), null);
for (const url of ['https://preview.vercel.app/', 'http://trtrx.com/', 'https://trtrx.com.evil.test/', 'https://user:secret@trtrx.com/', 'invalid']) {
  assert.equal(cta.publicCtaEvent(url, 'email', 'footer', 'mailto:care@trtrx.com'), null);
}
for (const [action, surface, href] of [
  ['secret', 'hero', '/pricing'], ['planned_pricing', 'secret', '/pricing'],
  ['planned_pricing', 'hero', '/pricing?secret=1'], ['email', 'footer', 'mailto:care@trtrx.com?body=secret'],
  ['__proto__', 'hero', '/pricing'], ['cost_guide', 'hero', 'https://evil.test/'],
]) assert.equal(cta.publicCtaEvent('https://trtrx.com/', action, surface, href), null);

// Exercise the actual React listener with provider and DOM boundaries substituted.
const listeners = new Set();
const sent = [];
let cleanup;
class LinkElement {
  dataset = { trtrxCta: 'cost_guide', trtrxSurface: 'hero' };
  closest() { return this; }
  getAttribute() { return '/blog/how-trt-pricing-works'; }
}
const globals = {
  Element: LinkElement, window: { location: { href: 'https://trtrx.com/?secret=1#private' } },
  document: { addEventListener: (_, fn) => listeners.add(fn), removeEventListener: (_, fn) => listeners.delete(fn) },
};
const component = load('src/components/analytics/PublicCtaTracking.tsx', {
  react: { useEffect: (effect) => { cleanup = effect(); } },
  '@vercel/analytics': { track: (...args) => sent.push(plain(args)) }, globals,
});
component.PublicCtaTracking();
assert.equal(listeners.size, 1);
const listener = [...listeners][0];
const click = { button: 0, target: new LinkElement(), preventDefault: () => { throw new Error('Navigation changed'); } };
listener(click);
assert.deepEqual(sent, [['trtrx_cta_click', { action: 'cost_guide', surface: 'hero', page_path: '/' }]]);
listener({ ...click, button: 1 });
assert.equal(sent.length, 1);
globals.window.location.href = 'https://trtrx.com/portal';
listener(click);
assert.equal(sent.length, 1);
cleanup();
assert.equal(listeners.size, 0);
component.PublicCtaTracking();
assert.equal(listeners.size, 1);
cleanup();

// Existing tracking and the clinical release inputs must remain byte-identical.
const preserved = ['src/pages/_app.tsx', 'src/lib/analytics/ga4.ts', 'src/components/analytics/PublicGa4.tsx',
  'src/content/launch.ts', 'src/content/blog-content.ts', 'src/content/blog-metadata.ts', 'src/content/clinical-article-reviews.json'];
for (const file of preserved) assert.equal(current(file), old(file), `${file} changed`);
function normalizer(source) {
  const file = ts.createSourceFile('_app.tsx', source, ts.ScriptTarget.Latest, true, ts.ScriptKind.TSX);
  const fn = file.statements.find((entry) => ts.isFunctionDeclaration(entry) && entry.name?.text === 'publicPageView');
  assert.ok(fn);
  return evaluate(`export ${fn.getText(file)}`, undefined, { isPublicIndexingAllowed: load('src/content/launch.ts').isPublicIndexingAllowed }).publicPageView;
}
const before = normalizer(old('src/pages/_app.tsx'));
const after = normalizer(current('src/pages/_app.tsx'));
assert.ok(baseline.rows.length >= 1, 'Production baseline is required');
const fixtures = [...baseline.rows.map((row) => ({ type: 'pageview', url: `https://trtrx.com${row.requestPath}`, ...row })),
  ...blockedPages.map((route) => ({ type: 'pageview', url: `https://trtrx.com${route}?secret=1#private` })),
  { type: 'event', name: 'existing_event', data: { sentinel: true }, url: 'https://trtrx.com/?secret=1#private' },
  { type: 'pageview', url: 'https://preview.vercel.app/' }];
for (const fixture of fixtures) assert.deepEqual(plain(after(fixture)), plain(before(fixture)));

const oldGa4 = evaluate(old('src/lib/analytics/ga4.ts'));
const newGa4 = load('src/lib/analytics/ga4.ts');
function replayGa4(module) {
  const output = [];
  const controller = module.createGa4Controller({ measurementId: 'G-JJY4SBLEFS', referrer: 'https://example.org/private?secret=1',
    push: (...command) => output.push(command[0] === 'js' ? ['js', 'clock'] : plain(command)),
    setDisabled: (value) => output.push(['disabled', value]), loadScript: () => output.push(['load']) });
  for (const fixture of fixtures) controller.view(fixture.url);
  return output;
}
assert.deepEqual(replayGa4(newGa4), replayGa4(oldGa4));
// Negative controls prove the replay detects leakage and interference.
assert.throws(() => assert.deepEqual(plain({ ...after(fixtures[0]), url: 'https://trtrx.com/?leak=1' }), plain(before(fixtures[0]))));
assert.throws(() => assert.deepEqual([...replayGa4(newGa4), ['new_shared_write']], replayGa4(oldGa4)));
assert.throws(() => assert.deepEqual({ ...plain(valid), page_path: '/?private=secret' }, plain(valid)));
console.log(JSON.stringify({ status: 'PASS', productionRows: baseline.rows.length, replayFixtures: fixtures.length, nonNewDifferences: 0,
  negativeControls: 3, listenerLifecycle: 'PASS', clinicalAndIntakePreserved: true, eventDelivery: 'NOT_MEASURED' }, null, 2));
