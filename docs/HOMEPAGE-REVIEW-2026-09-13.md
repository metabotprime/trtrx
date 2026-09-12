# trtrx homepage and conversion review

Observed 2026-09-13. Baseline commit: `715cd297488b60b589fdcccd979c15f4acd18bcd`. Scope: homepage source, live desktop/mobile browser behavior, Lighthouse lab checks, primary CTA destinations, metadata/schema, and official competitor pages. No actual patient information, signup, checkout or purchase was submitted. No conversion rate is available; recommendations are hypotheses until measured.

## Decision

Keep the selected navy/yellow identity and locked headline bookends. The first conversion priority is a real, accurately labeled next step. Every prominent “Get Started” currently routes to a marketing explainer, while the launch-email component claims success without saving anything. A higher click-through rate on that flow would still produce no saved leads through this component.

## Implemented with this review

- Approved modern sans logo rebuilt as compact, self-contained vector outlines, with a yellow inset behind navy `rx`. Header, footer, favicon family and dynamic social/publisher artwork share this design. Existing product photos/videos still carry their original baked-in labels.
- Removed all invented testimonial records and made the testimonial section disappear when no real records exist. This follows the owner's standing prohibition on fabricated patients and outcomes. Future testimonials require documented consent and verified claims.
- No provider, domain, billing or intake settings were changed. The wider CRO redesign is the prioritized next implementation, not a claimed result of this logo release.

## Findings and priorities

| Priority | Finding | Recommended action and acceptance evidence |
|---|---|---|
| P0 | `EmailCapture.tsx` waits 450ms then reports success, without a request or storage. | Connect the existing intended Resend audience or an authorized store. Success only after server acceptance; verify the saved record. Handle failure, validation, abuse and duplicate submissions. Until then, remove or disable the misleading form. |
| P0 | “Get Started” repeatedly targets `/how-it-works`, whose own actions return to marketing pages. | Centralize one real next-step destination. For prelaunch, use a functioning “Get launch updates” flow. At clinic launch use a physician-gated intake, with an accurate CTA and expected effort. |
| P1 | No production analytics/CTA transport found. Web-vitals hook logs only in development. | Add homepage view, CTA click, form start, accepted signup, and eventual intake start/complete. Count accepted records separately from clicks; no health answers, email or other PII in event properties. |
| P1 | `trtrx.com` is parked, while canonical, OG, schema, robots and sitemap advertise it. Its advertised `/api/og?...` returns 404; the same endpoint on `.vercel.app` works. | Connect the intended domain and verify routes, SSL, canonical, both sitemaps and share images. Preserve intended brand canonical rather than silently migrating every schema ID to the temporary hostname. |
| P1 | Hero numeric outcome graphic implies restoration from 231 to 842 ng/dL in 12 weeks. The disclaimer is tiny and low contrast. | Replace with a care-process or price/inclusions visual. Do not imply a typical numeric outcome without substantiation. |
| P1 | Broad safety/fertility answers, shipping timing, partner/coverage claims and the drawn “Reviewed & signed” motif need readiness/substantiation review. Schema says `isAcceptingNewPatients: true` during prelaunch. | Align visible copy and schema with actual operating status, real clinical sign-off, provider workflow and product-specific evidence. Certification and counsel review remain launch dependencies. |
| P1 | Mobile performance was 56 then 68; LCP 11.5s then 7.6s in lab runs. | Optimize/defer product media before adding more scripts. Compare equivalent mobile lab runs and later field data; do not present lab scores as conversion lift. |
| P2 | Closed mobile menu links remain tabbable. Open menu ignores Escape and allows focus behind it. Several CTAs are nested anchors/buttons with two keyboard stops. | Use an accessible drawer, correct open/close labels, focus management and one interactive element per CTA. Verify Tab/Shift+Tab/Escape. |
| P2 | About 21 mobile screens; cards and comparison repeat information. Price and true launch action appear below the first mobile screen. | Promote the offer and real next step into the hero, move concise process earlier, and keep detailed comparisons on treatment pages. |
| P2 | $89 adjunct establishes the apparent lower price range although it requires a base plan. | Keep agreed pricing, but separate standalone $179–$219 therapies from the +$89 add-on. Show actual combined totals where applicable. |
| P2 | Lab collection copy conflicts: at-home/fingerstick versus “No mail-in fingerstick.” “47 states” is not reconciled by excluding only HI/AK and PR. | Confirm provider collection method and actual coverage list; do not invent a missing state or capability. |
| P2 | Contrast failures, prohibited Mastercard `aria-label`, missing skip link and unlabeled table check/minus icons. | Fix focus/fine-print contrast, accessible names/roles, skip navigation and screen-reader values. |

## Desktop, mobile and performance evidence

Desktop browser viewport was 1440×900 CSS pixels; mobile was 391×844. At baseline, hero Get Started was visible at y=471–519 desktop and y=422–470 mobile. The separate launch-updates link began at y=1028 mobile. Page height was 11,805px desktop and 17,849px mobile before testimonial removal. Product cards occupied 3,744px on mobile. No page-level horizontal overflow was observed; the table confines horizontal scrolling.

| Lighthouse 13.4.1 lab metric | Desktop | Mobile initial | Mobile isolated repeat |
|---|---:|---:|---:|
| Performance | 91 | 56 | 68 |
| Accessibility | 92 | 92 | Not rerun |
| Best practices / SEO | 100 / 100 | 100 / 100 | Not rerun |
| LCP | 1.8s | 11.5s | 7.6s |
| FCP | 0.8s | 4.5s | 2.3s |
| Total blocking time | 0ms | 110ms | 40ms |
| CLS | 0 | 0 | 0 |
| Transfer | 2,421KiB | 2,470KiB | 2,437KiB |

A Lighthouse SEO score of 100 does not establish indexing or validate the parked canonical destination. The two mobile runs show lab variability; they are not field Core Web Vitals. The sample transfers included about 1.1MiB JPG posters and about 1MiB media. Estimated image savings were about 988KiB. Other flags included unused/legacy JavaScript, CSS/network dependency chains and forced reflow. Ten contrast failures included the illustrative disclaimer at 2.96:1 and footer fine print at 4.24:1. No site-origin console errors were observed; MetaMask warnings belonged to the extension.

## Competitor observations

Official homepages and first conversion screens were inspected at 1280×720, without submitting forms. No competitor conversion rates are known.

| Competitor | Observed tactic | Applicable lesson |
|---|---|---|
| [Hone Health](https://honehealth.com/) | “Get Started” reaches a [real entry flow](https://start.honehealth.com/hermes/landing). Initial testing and memberships are separated; process and physician links are visible. | Explain the next step and separate complete cost components. Use verified trust and clear dark text on yellow. |
| [TRT Nation](https://trtnation.com/) | “Start TRT” leads to [treatments](https://trtnation.com/testosterone-therapy/), then a [brief assessment introduction](https://trtnation.com/trtlw/). Price/minimum commitment and reviews are prominent. | Put price and commitment terms near the decision; explain actual effort before intake. Its carousel pushes the hero action below a 720px view, which is not a pattern to copy. |
| [Maximus](https://www.maximustribe.com/) | “Get Started” enters [protocol selection](https://app.maximustribe.com/protocols-start). [TRT entry](https://app.maximustribe.com/testosterone-start) explains the next step; named medical advisors and research support trust. | Guide visitors by their goal and present verifiable expertise before asking for commitment. |
| [Marek Health](https://marekhealth.com/) | Service-area/IP restriction blocked the homepage in this environment. | Not assessed; restriction was not bypassed. |

## Proposed homepage order

| Order | Content | Purpose |
|---|---|---|
| 1 | Locked “TRT, finally.” headline, plain product explanation, complete planned price/inclusions, one real primary action and quiet pricing link | Establish relevance, cost and next step in the first screen. |
| 2 | Three concise care steps: evaluation, labs/clinician decision, ongoing monitoring | Explain how care begins and that treatment requires clinician approval. |
| 3 | Verified clinical/company evidence and practical support | Answer who is responsible and how to reach them. |
| 4 | Compact treatment overview with detailed comparisons on `/treatments` | Support exploration without making the homepage a full catalog twice. |
| 5 | Short price/cancellation/lab/eligibility FAQ and direct compounded disclosure | Resolve common objections with reviewed, accurate claims. |
| 6 | Locked “The standard for TRT.” closing band with the same real primary action | Offer a clear final next step. |

Prelaunch primary action recommendation: **Get launch updates**, only after persistence works. This intentionally revisits the old design-spec rule against a primary newsletter signup because clinic intake is not operating and a launch waitlist is a different task. Do not use false scarcity, popups, fictional ratings or fabricated outcomes. Once intake is operational, **Start my assessment** is a candidate CTA; only show “2 minutes,” “free,” or “no commitment” if verified for the real flow.

## Measurement and rollout

Measure server-confirmed signup rate as accepted unique signup records divided by unique homepage visitors in the same time window, with source/device splits and bot/duplicate rules documented. Measure CTA clicks, form errors and abandonment separately. Later use intake completion as a downstream metric. Establish a baseline before testing one major change at a time. No arbitrary uplift percentage or A/B-test duration is claimed without traffic data.

First implementation batch: truthful working signup/destination and measurement; mobile drawer/CTA accessibility; lighter media; concise hero price/process and supported trust content. Domain/provider/clinical facts must be resolved against authoritative accounts and documents. Keep backend/clinical requirements intact.

## Validation and limitations

Logo release: TypeScript, production build and four touched TSX esbuild parses pass. Local homepage contains two shared vector marks, both JSON-LD blocks parse, fabricated testimonial names are absent, and both OG variants return valid PNGs. Header and favicon artwork visually inspected. Deployment/live verification is recorded separately after push.

During this review the Vercel API returned 403; GitHub's Vercel status is used for deployment readiness. A GitHub web fetch failed but the official font source and license downloaded successfully. Cairo lacked its native library; bundled Sharp rendered the SVG exports successfully. Initial esbuild invocation used Node on a native executable and failed; direct executable parsing passed. Lighthouse initially failed under shell Node 19; bundled Node completed all reported runs. The build emitted a webpack cache serialization performance warning but completed successfully.

Remaining limits: real devices, screen-reader coverage, provider contracts/readiness, clinical/counsel approval, inbox delivery, Search Console indexing and conversion lift are not established by this review. Current generated product media still includes older logo labels. Medical copy findings require qualified review; see [FDA testosterone information](https://www.fda.gov/drugs/postmarket-drug-safety-information-patients-and-providers/testosterone-information) and [FDA labeling changes](https://www.fda.gov/drugs/drug-alerts-and-statements/fda-issues-class-wide-labeling-changes-testosterone-products) for primary-source review context.

## Hero follow-up, 13 September 2026

The subsequent hero refresh addresses the first-screen price, numeric-outcome visual and hero CTA findings above. It preserves the approved logo, palette and headline, promotes the planned $219 standard injectable program from the shared pricing data, and replaces the lab result with three conditional care steps in a compact navy card. The primary action is now **Explore treatments** (`/treatments`), with **How care works** (`/how-it-works`) secondary and explicit prelaunch status. Each action is a single anchor with visible keyboard focus styling.

The non-saving hero email capture and repeated homepage TrustStrip are removed. The homepage meta description and graph description now reflect prelaunch status. Existing signup behavior on `/sign-in`, global Get Started destinations, other schema readiness issues, product media and lower-page audit findings remain open.

Validation: TypeScript, both touched TSX esbuild parses and the production build pass. Local production HTML returns 200 with one H1, two valid JSON-LD blocks, the expected hero destinations and $219 price. The numeric outcome and signup form are absent from the hero. This is a layout and action-clarity improvement; no conversion uplift is established.

Browser QA at 1440×900, 390×844 and 320×844 CSS pixels finds no horizontal overflow. Price, both hero actions and the intake status are visible in the first screen at each size. The primary action is at y=561–617, 469–525 and 539–595 respectively. The desktop care card is 493px tall; at 390px wide it is 472px. Keyboard focus visits each anchor once with visible focus; both destinations load and no page console errors were observed.
