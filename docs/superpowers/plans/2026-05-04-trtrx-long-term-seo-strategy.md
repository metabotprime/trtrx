# trtrx Long-Term SEO Strategy

**Date:** 2026-05-04
**Status:** Living strategy doc — review quarterly
**Horizon:** 36 months
**Audience:** founders, content lead, future SEO hires, agency partners

> trtrx is a YMYL ("Your Money or Your Life") medical site. Google holds these to the highest E-E-A-T bar. Every decision in this doc is filtered through that lens — short-term ranking gimmicks that work for B2B SaaS or affiliate sites do not work here, and the brand carries the regulatory cost of getting it wrong.

---

## 1. Goals

### 12-month targets
- **Organic visits:** 50K/mo by month 12
- **Indexed pages:** 200+ (homepage + 17 marketing + 50 blog posts + ~130 programmatic)
- **Branded queries:** "trtrx" returns canonical results, knowledge-panel triggered
- **Top-3 rankings:** "trt with transparent pricing", "trt all-inclusive monthly", "trt no membership", "[trt + state]" for top 10 metros
- **Featured snippets:** 5+ owned (typically pricing FAQ + symptom checklists)
- **AI citations:** appear in answers from ChatGPT, Perplexity, Google AI Overviews for top-of-funnel TRT questions

### 36-month targets
- **Organic visits:** 500K+ /mo
- **Indexed pages:** 2,000+
- **Category leadership:** rank in top-3 vs Hone, TRTNation, Maximus, Roman for the broad "trt online" cluster
- **Domain Rating** (Ahrefs): 50+
- **Branded search volume:** 10K+ /mo for "trtrx" and variants
- **Press tier:** featured in Men's Health, GQ, Forbes Health (one or more per year)

---

## 2. Current state (what's already shipped)

This isn't aspiration — it exists at https://trtrx.vercel.app today.

- **Tech foundation:** Next.js 14 SSG + ISR, sub-100KB First Load JS, Cache-Control tuned (`s-maxage=60, swr=86400`), Lighthouse-ready
- **17 launch pages:** homepage, 5 product details, treatments hub, pricing, how-it-works, about, faq, contact, 4 legal stubs, 404/500
- **Schema in production:** Organization, WebSite, FAQPage, BreadcrumbList, ItemList, MedicalTherapy, Person — all inline JSON-LD, never via Helmet
- **Sitemaps:** `/sitemap.xml` + `/image-sitemap.xml` — both auto-generated from route registry
- **AI files:** `/llms.txt` + `/llms-full.txt` for AI engine context
- **Robots:** explicit allowlist for 17 AI agents (GPTBot, ClaudeBot, PerplexityBot, etc.)
- **Edge middleware:** blocks 14 parasitic SEO scrapers (Ahrefs, Semrush, MJ12, etc.) to keep keyword strategy private
- **Pricing transparency moat:** $219/mo flat all-inclusive vs Hone's hidden bundle — uniquely linkable angle
- **Performance components:** OptimizedImage, LazySection, web-vitals reporting all wired

This foundation is the runway. Strategy below sits on top of it.

---

## 3. Content strategy

The shape of our SERP presence in 36 months should be: pillar pages anchor topical authority, supporting articles funnel internal link equity into pillars, programmatic content captures long-tail volume, and original research/data earns external links.

### 3.1 Pillar pages (1–3/year, highest-investment)

Pillars are 4,000–8,000-word definitive guides. Each anchors a topical cluster. Each gets a custom page template (not the standard blog template), updated quarterly.

**Year-1 pillars (in priority order):**
1. **The complete guide to testosterone replacement therapy** — anchor pillar covering symptoms, diagnosis, protocols, side effects, monitoring, lifestyle, cost. Internal links to every cluster.
2. **Cypionate vs enanthate vs every other TRT option** — comparison pillar. Linked from each `/treatments/[slug]` detail page.
3. **TRT and fertility: the complete protocol** — fertility pillar, anchors enclomiphene + HCG cluster.

**Year-2 pillars:**
4. **TRT side effects: every concern, addressed** — counters the FUD cluster
5. **TRT pricing: what it actually costs (and why)** — anchors the pricing-comparison cluster, leans into our moat

**Year-3 pillars:**
6. **TRT for men over 50 (vs HRT for women)** — niche but high-intent
7. **TRT and longevity: separating signal from snake oil** — positions us against Hone's longevity blur

### 3.2 Supporting articles (10–20 per pillar)

Standard `/blog/[slug]` template. Each is 1,200–2,500 words, written and reviewed by named authors (E-E-A-T below). Topics:

- **Symptom guides:** "Signs of low testosterone in men 35–55", "When fatigue is actually low T"
- **Lab interpretation:** "How to read your testosterone results", "What is SHBG and why does it matter?"
- **Side-effect explainers:** "TRT and hematocrit: the only honest explainer", "TRT and estradiol management"
- **Protocol deep-dives:** "Cypionate weekly vs twice-weekly: real-world tradeoffs"
- **Lifestyle:** "Strength training while on TRT", "Sleep, recovery, and testosterone"
- **Comparisons:** "TRT vs HRT in men: terminology that confuses everyone"
- **State-specific:** "Is TRT legal in [state]?" (year 1 — top 10 states)

### 3.3 Programmatic content (year 2+)

Templated pages generated from structured data. Each has unique on-page copy interpolation, never duplicate content.

**`/trt/[state]` and `/trt/[state]/[city]` (50 + ~150 cities)**
- State legality summary
- Local lab partner locations (Quest/Labcorp data)
- State-specific physician notes
- Average TRT cost in [city] vs trtrx
- Local schema (LocalBusiness with ServiceArea)
- Powered by a `content/states.ts` registry, each state file ~200 lines of structured data

**`/compare/[product-a]-vs-[product-b]` (~25 pages)**
- Cypionate vs Enanthate
- TRT vs Enclomiphene
- Cypionate vs Cream
- trtrx vs Hone Health, trtrx vs TRT Nation (the brand-comparison pages — high commercial intent)
- Schema: Comparison + ItemList + Product

**`/symptom/[symptom]` (~15 pages)**
- "Low energy and testosterone"
- "Erectile dysfunction and testosterone"
- "Brain fog and testosterone"
- Each with a symptom-specific CTA path to /quiz (when intake ships)

### 3.4 Topical clusters (hub-and-spoke linking)

Each pillar is the hub. Supporting articles link UP to the pillar (with exact-match anchor on the pillar's primary keyword). Pillar links DOWN to supporting articles in a contextual section.

Example cluster around the cypionate-vs-enanthate pillar:
- Hub: "Cypionate vs enanthate vs every other TRT option"
- Spokes: pharmacology comparison, cost comparison, dosing schedule comparison, side-effect comparison, who-should-pick-which guide, real-world switching protocols
- Each spoke uses `Cypionate vs enanthate` as exact-match anchor to the hub

**Internal link budget:**
- Every page: 3–5 contextual internal links minimum
- Pillars get 50+ inbound internal links from cluster spokes
- Avoid sitewide footer links to pillars (over-optimization signal in Google's eyes)

---

## 4. Technical SEO

### 4.1 Schema strategy (extending what's shipped)

Already in production: Organization, WebSite, FAQPage, BreadcrumbList, ItemList, MedicalTherapy, Person.

**Add (months 2–6):**
- **`BlogPosting`** on every blog post — author (Person with sameAs to LinkedIn / publications), reviewer (Person with credentials), datePublished, dateModified, articleBody snippet
- **`MedicalWebPage`** — wrap every medical-content page (blog + treatment + faq subset) as `MedicalWebPage` with `aspect: TreatmentAspect` for protocol pages
- **`HowTo`** — for procedural content (e.g., "How to inject cypionate" — when we eventually publish such a guide with proper supervision disclaimers)
- **`Drug`** — on each `/treatments/[slug]` detail page, alongside MedicalTherapy, with activeIngredient, prescriptionStatus, drugClass

**Add (year 2):**
- **`Review`** — when real reviews land
- **`AggregateRating`** — when we have 50+ reviews
- **`MedicalAudience`** — "men 35+" audience targeting

**Schema discipline (already enforced, must not break):**
- Always inline JSON-LD via dedicated React component, never via Helmet (head-dedup collapses multiple LD tags)
- Validate every page on https://validator.schema.org/ as part of CI before launch
- Test Rich Results in Google Search Console after deploy

### 4.2 Site architecture

**3-click rule:** every page reachable from homepage in ≤3 clicks. Today's site has this. As we scale to 2,000 pages, maintain via:
- Pillar hubs link down to all cluster spokes
- Programmatic state pages indexed via a parent `/trt/states` directory page
- Blog category pages (`/blog/category/[name]`) act as hubs

**URL structure:**
- `/blog/[slug]` for editorial posts (slug is the post topic, not date-stamped)
- `/trt/[state]` for state landing pages
- `/trt/[state]/[city]` for city-specific
- `/compare/[a]-vs-[b]` for comparisons
- `/symptom/[symptom]` for symptom-driven
- `/treatments/[slug]` for product detail (already shipped)

**No dates in URLs** for blog posts — content gets updated, dates rot. Use `dateModified` schema instead.

### 4.3 Sitemap chunking

Current sitemap is fine for <500 URLs. When we cross 1K URLs, chunk into:
- `/sitemap-pages.xml` (marketing + treatments)
- `/sitemap-blog.xml` (editorial)
- `/sitemap-trt-states.xml` (programmatic state pages)
- `/sitemap-compare.xml` (programmatic comparisons)
- `/sitemap-symptom.xml`
- `/sitemap-index.xml` master pointing to all of the above

Each sub-sitemap stays under 50K URLs (Google's hard limit).

### 4.4 Crawl budget management

- **`noindex`** for thin / utility pages: `/contact` thank-you, internal search results, filter-state URLs, paginated `/blog/page/N` past page 5
- **Canonical URLs** on every page — already implemented via `<SEOHead>`
- **`robots.txt` Disallow`** for any URL with `?utm=` or session-state query strings (when we add these)
- **Anti-duplicate:** never publish a TL;DR summary at a different URL — internal duplicate content tanks the original

### 4.5 Performance budget (already enforced)

- Lighthouse ≥95 (Performance / Accessibility / Best Practices / SEO) on every page, every deploy
- LCP <1.8s on 4G
- CLS <0.05
- INP <200ms
- Tailwind production CSS <50KB
- First Load JS <120KB shared

CI gates these starting month 4 (when we have 50+ pages and human review can't catch every regression).

---

## 5. AI engine optimization (GEO)

ChatGPT, Perplexity, Google AI Overviews, Claude, and similar are increasingly the entry point for TRT research. Optimizing for them differs from classic SEO.

### 5.1 Why AI engines cite us (or don't)

AI engines cite content that is:
1. **Factual and verifiable** (clear claims, sources, no hedging)
2. **Structured** (tables, lists, headed sections, comparison data)
3. **Authority-signaled** (named author with credentials, reviewer credit, publication date, last-reviewed date)
4. **Direct in answering the query** (answer-first paragraphs)
5. **Not behind aggressive paywalls or auth walls**

trtrx must be all five.

### 5.2 Content patterns that get cited

- **Comparison tables** with explicit attributes (cypionate frequency, route, half-life, cost)
- **Definitive answer paragraphs** — start each post with a 2–3-sentence direct answer to the post's title
- **Numbered lists** for procedural or factual content
- **Stat callouts** with sources (e.g., "73% of men with low T also report sleep issues — JAMA 2024")
- **Author + reviewer credentials** visible on the page (AI engines parse Person schema)

### 5.3 `llms.txt` and `llms-full.txt` evolution

- **Refresh quarterly** with new content summaries
- **Include comparison data** in scannable format (cypionate dosing, prices, fertility status)
- **Reference key URLs** for each topic so engines know where to crawl for more
- **Prune outdated** info aggressively

### 5.4 Indexing & freshness

- **Google Indexing API** — daily cron, 200 URLs/day quota, prioritize new posts and updated pillars
- **Bing IndexNow** — fire on every publish/update, no quota
- **GSC `URL Inspection` → Request Indexing`** — manually for new pillar pages within 1 hour of publish
- **`dateModified` schema** — bump whenever content materially changes (not just typo fixes)

### 5.5 Content structure for AI parsing

Every blog post should have:
- H1 = exact post title (matches Google query)
- 2–3 sentence definitive answer in opening paragraph
- H2 sections that map 1:1 to FAQ schema entities
- Author + reviewer block at top OR bottom (AI engines find both)
- Last-reviewed date prominently displayed
- Internal cross-links to authoritative pillars (signals knowledge graph)

---

## 6. E-E-A-T (Experience, Expertise, Authoritativeness, Trust)

YMYL content lives or dies on E-E-A-T. Google's quality raters are explicitly trained to deprecate medical content from non-credentialed sources.

### 6.1 Experience (E1)

- Real member outcome stories with consent (when pilot completes)
- First-person physician notes ("In my 12 years prescribing TRT, the most common mistake I see is...")
- Lab-result walk-throughs with real (anonymized) data

### 6.2 Expertise (E2)

- Every blog post: named author. Authors are physicians, board-certified, with public credentials and links to peer-reviewed work
- Author bio block: photo, full credentials, sameAs links to LinkedIn, Doximity, ORCID, PubMed
- Reviewer credit on every medical post: "Medically reviewed by Dr. [X], MD"
- "About the author" page per author — schema as Person with all credentials

### 6.3 Authoritativeness (A)

- Cite primary sources (peer-reviewed journals, FDA documents, NIH) — never aggregator sites
- Link to authoritative external sources for every factual claim
- Get cited by health publications (year 1–2 PR push)
- Maintain Google Knowledge Panel by month 12

### 6.4 Trust (T)

- HTTPS (already)
- Clear privacy policy (lawyer-drafted pre-launch)
- Clear refund policy
- Real physical address in footer (when established)
- Verified Google Business Profile (when ops are real)
- Transparent pricing (already a moat)
- Visible compliance badges (HIPAA, LegitScript when applicable, FSA-eligible)

### 6.5 Editorial overrides map (build pre-launch)

A `src/content/editorial-overrides.ts` module keyed by blog slug, providing per-post:
- `reviewedBy` — which physician reviewed this post
- `lastReviewedDate` — for the visible badge
- `experienceLevel` — for E1 surfacing on procedural posts
- `relatedPillar` — for canonical linking up

This is referenced by the `<BlogPostHeader>` and `<AuthorBlock>` components.

---

## 7. Local / Geographic SEO

TRT availability is state-specific by law. This makes local SEO unusually high-leverage in this category.

### 7.1 State landing pages

Year 1 priorities (top 10 states by TRT search volume):
California, Texas, Florida, New York, Illinois, Pennsylvania, Ohio, Georgia, North Carolina, Michigan.

Each `/trt/[state]` page includes:
- "TRT in [state]: legality and how it works"
- State-specific licensing summary (we work with state-licensed physicians)
- Quest/Labcorp lab locations in [state] (programmatic from a static dataset)
- State-specific protocols if any (rare)
- Pricing (same flat $219, but localized FSA-eligibility note if applicable)
- Schema: `LocalBusiness` with `ServiceArea` set to [state]

### 7.2 City pages (year 2)

Top-100 metros (by TRT-related search volume) get `/trt/[state]/[city]` pages. Same template, drilled to:
- Top 5 Quest/Labcorp draw stations in that city with addresses
- Local TRT cost averages (research data)
- "Why men in [city] choose telehealth TRT" — short, evidence-based
- Schema: `LocalBusiness` with city in ServiceArea

### 7.3 Google Business Profile

When the clinic is operational with a registered address, claim Google Business Profile, populate:
- Hours, services, photos, reviews
- Posts (weekly)
- Q&A (proactively answer top questions)

GBP is a force multiplier for branded "trtrx near me" queries.

---

## 8. Backlinks and PR

Domain authority is the single biggest correlate of long-term SEO success in YMYL. We earn it through real PR, not link buying.

### 8.1 Year 1 plan

**Q2:** Founder profile pitch → Men's Health, Inverse, GQ Health, Forbes Health. Angle: "The TRT clinic that made pricing transparent."

**Q3:** Medical director pitch → Endocrinology / men's health pubs (Andrology, JCEM). Angle: "Hormone health expert speaks on transparent telehealth."

**Q4:** Original research release → "trtrx 2026 Men's Hormone Health Report." Survey our member base (when we have one), publish findings, embargo to top 5 pubs. This is the single highest-leverage PR move available.

### 8.2 Strategic partnerships

- Co-marketing with adjacent men's-health brands (sleep, fitness, gut health)
- Guest content on respected health blogs (carefully vetted; avoid SEO link farms)
- Podcast appearances: founder + medical director on health/longevity podcasts (Huberman tier when accessible, Tier 2 podcasts in year 1)

### 8.3 Earned coverage triggers

- New treatment launch
- Pricing structure reveal (transparent pricing is genuinely newsworthy in this category)
- Founder/director media moments
- Annual research release

### 8.4 Link building tactics we deliberately don't use

- Paid links / link networks
- Guest posts on low-quality blogs
- Comment spam
- Excessive directory submissions
- Reciprocal link schemes
- PBNs (private blog networks)

These get sites penalized. The medical category has zero tolerance for link spam.

---

## 9. Tracking & iteration

### 9.1 Tools

- **Google Search Console** — free, mandatory, set up day 1. Property verified via Vercel domain
- **Google Analytics 4** — privacy-first config, server-side via Vercel/PostHog when we want PII-safer
- **Bing Webmaster Tools** — IndexNow + crawl monitoring
- **Ahrefs** (paid, year 1 onward) — backlinks, competitor monitoring, content gap analysis
- **Schema.org Validator + Google Rich Results Test** — validate every new template
- **PageSpeed Insights / Lighthouse CI** — performance regression catching

### 9.2 KPIs

| KPI | Target month 6 | Target month 12 | Target month 36 |
|---|---|---|---|
| Organic visits | 5K/mo | 50K/mo | 500K/mo |
| Indexed pages | 50 | 200 | 2,000+ |
| Top-10 keyword rankings | 30 | 200 | 1,500 |
| Domain Rating (Ahrefs) | 15 | 30 | 50+ |
| Featured snippets owned | 1 | 5 | 25 |
| Branded search volume (Google Trends) | minimal | 1K/mo | 10K/mo |
| AI engine citations (sample query set) | 5% | 20% | 50%+ |

### 9.3 Cadence

- **Weekly:** rank checks on top 50 keywords, traffic anomalies in GSC, Web Vitals regression check
- **Monthly:** content performance review, gap analysis vs Hone/TRTNation/Maximus, internal link audit
- **Quarterly:** strategy review (this doc gets updated), pillar page refresh, schema validator clean sweep
- **Annually:** full audit, new pillar planning, programmatic expansion review

### 9.4 In-house automation

Build (year 1) the audit scripts the original spec mentioned:
- **Cannibalization detector** — shingle clustering on titles/H1s, flags pairs >0.7 similarity
- **E-E-A-T audit** — flags top-50 pages missing reviewer credentials
- **CTR audit** — GSC queries with high impressions but low CTR → rewrite candidates
- **GEO audit** — geo-targeted page coverage gaps (top 10 metros without a city page = priority)

Run these monthly. Output goes to a Notion doc the content lead reviews.

---

## 10. Year-by-year roadmap

### Year 1 (months 1–12)

**Q1 (months 1–3) — Foundation**
- Frontend infrastructure ✅ shipped
- 17 launch pages ✅ shipped
- Schema base + sitemap + llms.txt ✅ shipped
- Pricing transparency moat ✅ shipped
- GSC + Bing Webmaster verified
- Indexing API service account configured
- Google Business Profile claimed (when ops are real)
- First 5 blog posts (cypionate basics, cyp vs enan, low-T symptoms guide, fertility primer, "How TRT pricing actually works")

**Q2 (months 4–6) — Editorial cadence**
- Pillar #1 published ("The complete guide to TRT")
- 15 supporting articles clustered around pillar #1
- Editorial overrides system live
- Author bios + Person schema rolled out
- First press push (Men's Health profile)
- Backlinks acquired: 30+ from real publications
- AI engine citation tracking starts

**Q3 (months 7–9) — Programmatic launch**
- State pages: top 10 states live (`/trt/[state]`)
- Comparison pages: cypionate vs enanthate, trtrx vs hone, trtrx vs trt nation
- 30+ more blog posts
- Pillar #2 published (Cypionate vs every other TRT option)
- Internal linking audit, fix gaps

**Q4 (months 10–12) — Authority push**
- Original research release ("trtrx 2026 Men's Hormone Health Report")
- Pillar #3 published (TRT and fertility)
- Editorial calendar reaches 50+ posts total
- Lighthouse CI gating new deploys
- Cannibalization audit script in place
- Year-1 review: hit 50K organic, top-3 for 5 priority keywords

### Year 2 (months 13–24)

- City pages (top 100 metros)
- Symptom pages (15 + )
- Programmatic comparison expansion (25+ pages)
- 100+ blog posts cumulative
- Press push: GQ feature, podcast appearances, Forbes Health
- Pillar refreshes (quarterly)
- Domain Rating crosses 30
- AI engine citation rate crosses 20%

### Year 3 (months 25–36)

- 2,000+ indexed pages
- Pillar #6 + #7 published
- Authority links from health pubs (>100 referring domains)
- Category leadership claim verified by SERP rankings
- Branded search volume 10K+ /mo
- Domain Rating 50+
- 500K+ organic visits/mo

---

## 11. Annual content calendar discipline

To hit volume targets, we need predictable cadence. Planning blocks:

- **January:** annual content audit, pillar refresh planning
- **Quarterly editorial calendar locked:** topics + assignees + due dates
- **Weekly editorial standup** (when team is large enough): what shipped, what's blocked, what's next

Per year:
- 3 pillars (refreshed quarterly)
- 50 blog posts (year 1) → 100 (year 2) → 100 (year 3)
- 50 programmatic pages (year 1) → 200 (year 2) → 500+ (year 3)
- 1 major research release per year
- 4 PR pushes per year

---

## 12. What we're deliberately NOT doing

Listing this so future us doesn't get talked into it.

- **Affiliate / SEO marketplace links** — torch trust in YMYL
- **Link buying / PBNs** — Google penalty risk
- **Doorway pages** — pages built to rank but not serve users
- **Excessive AI-generated content** — small ratio is fine if heavily edited; bulk AI content is a quality-hit risk
- **Fake reviews / testimonials** — brand-killing if exposed
- **Keyword stuffing** — modern Google deprioritizes; users hate
- **"Best TRT clinic" comparison farms** that obviously favor us — readers smell it, and Google catches it
- **Hidden text** (white-on-white keyword stuffing) — automatic penalty
- **Sitewide footer links to pillars** — over-optimization signal
- **Reciprocal link schemes** — wasted effort
- **Buying expired domains for redirects** — risky, often penalized
- **Comment spam on health blogs** — destroys reputation
- **Aggressive interstitials / popups** — harms Core Web Vitals + UX
- **Generic press release distribution** — noise, no link value, sometimes penalized

---

## 13. Owner / accountability

- **Founder:** strategy, PR, partnerships, original research
- **Content lead** (year 1 hire): editorial calendar, blog cadence, pillar maintenance
- **Medical director:** content review, author bios, peer-review credit
- **Engineer (current):** infrastructure, schema, performance, automation scripts
- **SEO consultant** (year 2 add): audit, link building strategy, GSC interpretation

---

## 14. Open questions / decisions needed

- **GA4 vs PostHog vs Vercel Analytics** — pick one privacy-respectful analytics. Default recommendation: Vercel Analytics + GSC.
- **Real medical director name + bio** for Person schema (placeholder in `physician.ts` until then)
- **First 5 author profiles** to populate `Person` schema for blog posts
- **Authoring tool** — Notion + manual MDX import? Sanity? Contentful? — pick year-1
- **Original research data source** — will we run member surveys? Aggregate anonymized lab data?
- **PR partner / agency** — Q2 hire decision

---

## 15. Companion documents

- Frontend buildout plan: [`docs/superpowers/plans/2026-05-04-trtrx-fullsite-buildout.md`](2026-05-04-trtrx-fullsite-buildout.md)
- Frontend design spec: [`docs/superpowers/specs/2026-05-04-trtrx-frontend-design.md`](../specs/2026-05-04-trtrx-frontend-design.md)

This SEO strategy is the long-arc plan. The buildout plan executed the foundation. Next plan to write: **content production playbook** — how a single blog post moves from idea → draft → physician review → published, with templates, schemas, and approval gates.
