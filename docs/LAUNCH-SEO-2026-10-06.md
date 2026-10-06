# TRTrx: prelaunch SEO audit and release plan

Observed October 6, 2026. This document supersedes the May 2026 SEO roadmap and handoff wherever they describe current operations, publication, indexing, or launch readiness.

## Recommendation

Launch a useful, transparent education site before patient intake opens. Keep public indexing and clinical intake as separate releases. Build depth around testing, safety, cost and choosing care, then add state pages when there are verified differences that help the reader. Volume alone is not the goal.

The approved brand direction is **1, Crisp literary**: uppercase `TRT` and italic `rx` in the yellow tile. The chosen Higgsfield artwork is reconstructed as scalable outlines used by the header, footer, social images and icons. See `public/brand/README.md` for provenance and rebuilding.

## What the audit found and changed

| Area | Before | Prepared in this release |
|---|---|---|
| Articles | Six short placeholder posts, with unsupported physician-review credits and estimated reading times unrelated to content length. | Six substantive refreshes and four new guides, primary-source references, section navigation, actual reading-time calculation and honest editorial/review status. No invented medical reviewer. |
| Topic navigation | One blog archive, no category pages. | Six populated category hubs, curated related articles, links between articles, treatment information, cost and availability. Empty categories are not published. |
| State information | No useful state destination, despite unverified broad coverage claims elsewhere. | One state-readiness guide with all 50 states and DC, local-only selection, explicit unconfirmed availability, official clinician/pharmacy verification links. No invented clinics or 51 near-identical landing pages. |
| Prelaunch actions | Clinical/service claims exceeded verified readiness; email capture simulated a saved signup. | Shared prelaunch status, truthful /launch destination, no intake or checkout, no simulated subscription success. Planned prices remain clearly provisional. |
| Machine-readable facts | Active healthcare business, offers, search and review assertions were not supported by actual functionality. | Organization/website/page facts reflect the prelaunch site. No unsupported accepting-patients, reviewer, search, guarantee or active offer assertions. llms/pricing references follow the same content. |
| Indexing control | Canonicals pointed to the intended domain without a single explicit publication gate. | Separate public-launch and intake flags, crawl-visible noindex while held, preview-host protections, shared sitemap registry and meaningful article modification dates. |
| Measurement | No demonstrated traffic or saved-lead baseline. | Public page-view analytics prepared with query/fragment removal and sensitive route exclusions, disabled before public launch. Dashboard enablement and real collection still require verification. |

## Trimi comparison

Read-only source and live-HTML comparison used current Trimi origin commit `b558920e7e9c08abde1d8c27e806d453df0c9f5f`. Its sitemap returned **1,327 unique URLs**, including **51 state/DC pages**. These are sitemap inventory counts, not proof of submission, an index census or evidence of traffic. The shared Trimi checkout had existing unrelated edits and was not modified.

Useful patterns to adapt: topic hubs, links from commercial pages to explanatory articles, full billing explanations, identifiable operating entities, honest editorial policies, source references and compact server-rendered article metadata. Trimi's pharmacy, clinicians, coverage, certification and commercial terms are not TRTrx facts.

Sampled California, New York and Alaska pages shared much of their process/pricing template, with relatively limited local differences. For TRTrx, a state page needs verified coverage plus useful state-specific information, such as appointment requirements or fulfillment restrictions, with a dated authoritative source and review owner. A different state name is insufficient. Do not add local-business schema or an office address without a real qualifying location.

Detailed evidence is saved in `/Users/christosi/Documents/Codex/trtrx-launch-2026-10-06/trimi-reference-audit.md` and its adjacent source snapshots. This was an architecture/content audit, not a full Trimi conversion or Core Web Vitals study.

## Search priorities

Ahrefs US estimates retrieved October 6, 2026. Monthly search estimates describe the keyword market, not expected TRTrx visits; difficulty is a vendor metric, not a promise of easy ranking. Missing values remain unknown. Raw evidence: `/Users/christosi/Documents/Codex/trtrx-launch-2026-10-06/keyword-research.json`.

| Intent | Keyword | Estimated monthly searches | Difficulty | Prepared destination |
|---|---|---:|---:|---|
| Compare full care costs | trt cost | 1,600 | 0 | `/blog/how-trt-pricing-works`, linked to planned `/pricing` |
| Evaluate a provider | online trt | 1,500 | 37 | `/blog/choosing-online-trt-provider` |
| Understand symptoms | low testosterone symptoms | 23,000 | 62 | `/blog/signs-of-low-testosterone-35-55` |
| Understand testing | testosterone blood test | 5,200 | 46 | `/blog/testosterone-blood-tests` |
| Understand risks | trt side effects | 9,400 | 0 | `/blog/trt-side-effects-and-monitoring` |
| Compare products | cypionate vs enanthate | 600 | 43 | Existing comparison URL refreshed |
| Discuss fertility | trt and fertility | 450 | 31 | Existing fertility URL refreshed |
| Understand monitoring | trt hematocrit | 50 | 33 | Existing hematocrit URL refreshed |
| Understand follow-up | trt monitoring | 20 | Unknown | Safety/monitoring guide, avoid a duplicative separate page |

Do not publish a second article for a close keyword variant when the existing page answers the same intent. Add new work based on actual query coverage and reader gaps after launch. No paid research, ad platform or link purchase is needed for this plan.

## Public-launch checklist, intake remains closed

Both flags in `src/content/launch.ts` are **false** in this review release. Turning on public indexing does not turn on intake.

| Gate | Evidence needed immediately before release |
|---|---|
| Domain | Confirm control of `trtrx.com`, connect it to this Vercel project, HTTPS ready, chosen apex host serves this exact release and www redirects to it. The audit saw a parked domain, not the site. Vercel CLI also reported that this domain was not found under the `trimi1` team on October 6. That is not proof that the user does not own it; its current account/registrar connection must be established. |
| Identity and contact | Confirm the legal operating name and usable contact mailbox. Mailto links open an email composer; they do not prove delivery or a monitored inbox. |
| Publication review | Review the exact clinical article versions and patient-facing copy against the compliance canon. Clinical review is not completed by an AI/source check. Record real reviewer identity, credentials, version and date only after completed review. Keep any unfinished page individually noindex and out of sitemap. |
| Policies | Confirm privacy/terms/contact accurately describe the public site's actual data use and operating entity. Do not claim a clinical HIPAA relationship before it exists. |
| Indexable URL set | Finalize intentionally publishable pages; remove utility or unfinished routes from sitemap. Check HTTP status, one H1, title/description, self-canonical, visible content and JSON-LD truth on the served production build. |
| Public switch | Set `PUBLIC_LAUNCH_ENABLED=true`, leave `INTAKE_ENABLED=false`. Confirm public HTML has index/follow and no noindex header; preview URLs remain noindex. |
| Measurement | Enable/verify included Vercel Analytics, check an actual public page view, document its limitations. Verify Search Console domain property and Bing Webmaster Tools for TRTrx independently. |
| Submission owner | Choose one owner for sitemap/changed-URL submissions; do not duplicate Trimi routines or create another schedule without a request. |

After the authorized release is READY and serving the canonical domain: submit the sitemap in Search Console and Bing, inspect the home page and a small sample of priority pages, request crawling where appropriate and record receipts. If IndexNow is configured, submit only changed canonical URLs through the single owner. Google Indexing API does not support ordinary TRT articles. Submission does not establish indexing.

Do not use a robots Disallow blanket to hide noindex from crawlers. A crawler needs to fetch the page to see the noindex instruction. The review sitemap can be inspected now, but no URL submission or public-indexing release was performed for this batch.

## The next eight weeks

| Window after public launch | Work | Evidence to retain |
|---|---|---|
| Week 1 | Verify sitemap ingestion, crawl/index status on a fixed sample, analytics collection, internal links and 404s. | Canonical URL set, served release, submission receipts, indexed/not-indexed reasons. Unknown results are `NOT_MEASURED`. |
| Weeks 2–3 | Review actual Search Console queries and impressions. Improve titles, explanations and internal links where the evidence shows a gap. | Completed comparable windows, page/query pairs, impressions and clicks separately. No traffic forecasts presented as results. |
| Weeks 3–5 | Expand the best-supported topic cluster with one distinct answer at a time. Add real provider/trust details when verified. | Source checks, review version, meaningful update dates, overlap check with existing content. |
| Weeks 5–8 | Add the first state pages only for confirmed service states with unique useful facts. Prepare real intake/lead measurement. | Verified coverage/requirements with dates, no fake local entity, server-confirmed lead/intake events. |
| Before intake opens | Confirm providers/pharmacies, product/legal status, pricing terms, states, lab/fulfillment arrangements, final policies and actual backend behavior. | End-to-end clinical/operational signoff. Enable intake separately and verify actual service availability. |

For an optional launch waitlist, implement real persistence, privacy/consent and confirmation first. Count a lead only after a server-confirmed save. Currently there is no collected waitlist; the disabled state is intentional.

## Measurement boundaries

Indexing, impressions, organic clicks, analytics page views, CTA clicks, saved leads, intake starts and captured payments are different measures. None of the last four are established by this release. No ranking gain, indexed URL total, traffic uplift or conversion improvement has been measured. A sitemap entry, HTTP 200, successful deploy, llms.txt file or IndexNow receipt does not prove those outcomes.

## Verification for this batch

TypeScript, esbuild TSX parsing, Next.js lint and production build passed. The first checks caught type integration errors and three internal-link lint errors; those were corrected before release. The build reports an older Browserslist database, a tooling warning rather than a compile failure; no dependency-upgrade batch was mixed into this release.

The local served-site check covered 38 pages, 36 sitemap URLs and 107 parsed JSON-LD scripts, with no detected broken internal paths/anchors, missing descriptions, non-self canonicals, indexing-state mismatches or missing H1s. Unknown article/category slugs and the empty science category returned 404. Logo icons and dynamic share-image routes returned content. Responsive browser inspection covered desktop/tablet navigation, the mobile hero/logo/menu, state selection and an article with visible review status; no browser console error was observed. This is not a full accessibility certification or field Core Web Vitals result.

Repeat the served checks against the exact READY deployment before claiming release verification. For a future canonical public release, use `--public` only after the public flag, domain and indexable set are approved:

```bash
python3 scripts/seo/verify-served-site.py https://trtrx.vercel.app
```

The Vercel MCP connector returned team-scope 403; the existing authenticated CLI works. Firecrawl credits were unavailable, so primary-source/live-HTML checks used free alternatives. One existing Chrome analytics tab could not be read, so dashboard enablement remains unverified. No service upgrade or indexing submission was performed.

## Authoritative guidance

- [Google: helpful, reliable, people-first content](https://developers.google.com/search/docs/fundamentals/creating-helpful-content)
- [Google: doorway and scaled-content abuse](https://developers.google.com/search/docs/essentials/spam-policies)
- [Google: crawl-visible noindex](https://developers.google.com/search/docs/crawling-indexing/block-indexing)
- [Google: meaningful sitemap modification dates](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap)
- [Google: request recrawling and its limitations](https://developers.google.com/search/docs/crawling-indexing/ask-google-to-recrawl)
- [Google Indexing API: supported use cases](https://developers.google.com/search/apis/indexing-api/v3/using-api)

The older May plan's daily Google Indexing API article submission, automatic city expansion, assumed LocalBusiness entities, invented publication/review credits and numerical growth targets are superseded. Do not implement them from that historical document.
