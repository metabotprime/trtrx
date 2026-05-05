# trtrx Full Site Buildout Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Take the current scaffold (homepage hero + 16 stub routes deployed at trtrx.vercel.app) to a launch-ready marketing site: 8 missing homepage sections, 17 fully-built pages, transparent pricing, complete product detail pages, and SEO/performance polish — all under the *Option 1: The Statement* design system locked in the spec.

**Architecture:** Content-first. Phase 1 establishes typed content modules (treatments, FAQs, physician, testimonials) so every downstream page reads from a single source of truth. Then phases build outward from highest-leverage moats: homepage → pricing → treatments → process → about/FAQ → SEO/perf polish → middleware → QA. Every component is server-rendered SSG with ISR. No backend.

**Tech Stack:** Next.js 14.2.35 (Pages Router) · TypeScript strict · Tailwind w/ HSL tokens · shadcn/ui (6 primitives) · lucide-react · Fraunces + Inter + JetBrains Mono · Vercel.

**Reference docs:**
- Spec: [`docs/superpowers/specs/2026-05-04-trtrx-frontend-design.md`](../specs/2026-05-04-trtrx-frontend-design.md)
- Current code: see existing `src/components/sections/*` (HeroCentered, TrustStrip, FooterCTABand) and `src/components/sections/SectionHeader.tsx` for established patterns

---

## Content Decisions (locked or proposed for user override)

These cascade through every phase. Lock or override before Phase 1 starts.

### Pricing structure — **proposed: flat monthly, all-inclusive**

| Plan | Price | What's included |
|---|---|---|
| **Initial month** | **$189** | Lab kit (Quest/Labcorp draw) · 15-min physician video consult · first month's medication · free shipping |
| **Monthly thereafter** | **$129–149** depending on product | Medication · ongoing physician supervision · 2 labs/year · free shipping · cancel anytime |

Why flat: TRTNation's "$99 → $325 actual" is the bruise. We win by showing one number on the box and that number being the number. Hone's $222 first-month reality is hidden; we surface ours.

### Product catalog — **proposed: 5 products** (matches Hone & TRTNation parity)

| Product | Form | Frequency | Fertility-preserving | FDA-approved | Monthly price |
|---|---|---|---|---|---|
| **Testosterone Cypionate** | Subcutaneous injection | 1× / week | No | Yes (generic) / compounded | from **$129/mo** |
| **Testosterone Enanthate** | Subcutaneous injection | 1× / week | No | Yes (generic) / compounded | from **$129/mo** |
| **Enclomiphene** | Oral tablet | Daily | **Yes** | Compounded | from **$99/mo** |
| **HCG** | Subcutaneous injection | 2–3× / week | **Yes** (adjunct) | Compounded | from **$109/mo** + base TRT |
| **Topical cream** | Topical application | Daily | No | Compounded | from **$129/mo** |

### Medical director — **placeholder pre-launch**

- Name: `Dr. [Name]` placeholder, real bio sourced before launch
- Photo: Stocksy editorial portrait until commissioned shoot
- Credentials: 3 placeholders, replaced with real ones (board cert, fellowship, papers)
- About page bio: ~3 paragraphs, generic but on-brand

### Testimonials — **placeholders with honest caveat**

3 placeholder cards on home + ~6 on `/reviews` (deferred page). Honest copy: *"Real members. Real outcomes. Stories coming as our pilot completes."* No fabricated reviews, no fake portraits — Stocksy editorial only, clearly labeled in dev comments.

### FAQ — **25 questions**

Top 6 on home + full set on `/faq`. Topics covered: speed of results, long-term safety, fertility, insurance/FSA, state legality, cypionate vs enanthate, cream vs injection, side effects, hematocrit/cardiovascular monitoring, dose adjustments, what if I want to stop, traveling with TRT, lab interpretation, what tests we run, who's a candidate, who isn't, refund policy, shipping discreetness, prescription gating, compounded vs FDA, how trtrx differs.

### Brand voice

Confident, direct, plain-spoken. No clinical hedging ("may help certain individuals"). No bro slang ("sup king"). Sentences default short. Italicize one or two emotional/identity words per headline. Subheads ~20 words. Body paragraphs ~50–70 words.

### Imagery direction (placeholder for v1)

Stocksy editorial: confident men 35–55, warm natural light, no gym/clinical clichés. Until commissioned shoot, every `<img>` has a `data-placeholder` attribute and a comment with replacement spec.

---

## File Structure (locks decomposition)

**New content modules** (single source of truth for product/FAQ/physician/testimonial data):
- `src/content/treatments.ts` — typed array of 5 products
- `src/content/faqs.ts` — typed array of 25 questions, grouped by category
- `src/content/physician.ts` — single object: name, credentials, bio, photo
- `src/content/testimonials.ts` — typed array of 6 placeholder testimonials
- `src/content/pricing.ts` — pricing structure, line items, monthly tiers

**New sections** (mounted in homepage + reused across pages):
- `src/components/sections/PricingTransparency.tsx` — the "math up front" moat block
- `src/components/sections/TreatmentGrid.tsx` — 5 product cards
- `src/components/sections/TreatmentTable.tsx` — full comparison table
- `src/components/sections/MedicalDirector.tsx` — split-layout director
- `src/components/sections/HowItWorksSteps.tsx` — 4-step horizontal
- `src/components/sections/TestimonialCards.tsx` — 3-card testimonial row
- `src/components/sections/CompoundedExplainer.tsx` — 2-column FDA vs compounded
- `src/components/sections/FAQAccordion.tsx` — shadcn Accordion w/ FAQs
- `src/components/sections/PricingHero.tsx` — for `/pricing` (richer than home block)
- `src/components/sections/ProductHero.tsx` — for `/treatments/[slug]` per-product

**New SEO components:**
- `src/components/seo/Breadcrumbs.tsx` — visual breadcrumbs reading the route
- `src/components/seo/schemas/FAQSchema.tsx`
- `src/components/seo/schemas/BreadcrumbSchema.tsx`
- `src/components/seo/schemas/ItemListSchema.tsx`
- `src/components/seo/schemas/MedicalTherapySchema.tsx`
- `src/components/seo/schemas/PersonSchema.tsx`

**New performance components:**
- `src/components/perf/OptimizedImage.tsx`
- `src/components/perf/LazySection.tsx`
- `src/hooks/usePagePerformance.ts`

**New shadcn primitives** (only what we use):
- `src/components/ui/accordion.tsx` (shadcn Accordion)
- `src/components/ui/badge.tsx` (shadcn Badge)
- `src/components/ui/card.tsx` (shadcn Card)
- `src/components/ui/separator.tsx` (shadcn Separator)
- `src/components/ui/sheet.tsx` (shadcn Sheet — for mobile drawer)

**New page implementations** (replace `ComingSoon` stubs):
- `src/pages/treatments/index.tsx` — full hub with comparison
- `src/pages/treatments/[slug].tsx` — full detail per product
- `src/pages/how-it-works.tsx` — full 4-step + lab/consult/shipping detail
- `src/pages/pricing.tsx` — full pricing breakdown + math card + FAQ subset
- `src/pages/about.tsx` — company narrative + medical director profile
- `src/pages/faq.tsx` — full FAQ set
- (`/contact` already has form; legal pages stay as ComingSoon until lawyer drafts copy)

**New asset folders:**
- `public/og/` — 12 OG share images (1200×630 placeholder PNGs at first)
- `public/images/products/` — 5 product macro placeholder images
- `public/images/physician/` — director portrait placeholder

**New routes:**
- `src/pages/image-sitemap.xml.ts` — image sitemap

**Updated existing files:**
- `src/components/sections/HeroCentered.tsx` — update copy (user's chosen headline)
- `src/components/seo/SEOHead.tsx` — extend with per-page OG image override
- `src/lib/seo/routes.ts` — confirm registry matches built routes

**Restored files (Phase 9):**
- `middleware.ts` — minimal bot block, carefully

---

## Phases overview

Each phase is self-contained, ships verifiable value, and ends with `npm run build && git push`. Vercel auto-deploys.

| Phase | Goal | Tasks | Time est. |
|---|---|---|---|
| **1** | Content modules (single source of truth) | 5 | ~30 min |
| **2** | Hero copy update + 8 missing homepage sections | 11 | ~3 h |
| **3** | `/pricing` page (the moat) | 5 | ~1 h |
| **4** | `/treatments` hub + 5 detail pages | 8 | ~2 h |
| **5** | `/how-it-works` page | 4 | ~45 min |
| **6** | `/about` + `/faq` filled out | 6 | ~1.5 h |
| **7** | SEO polish — schemas, breadcrumbs, image sitemap, OG images | 9 | ~1.5 h |
| **8** | Performance — OptimizedImage, LazySection, usePagePerformance | 5 | ~45 min |
| **9** | Middleware re-add (minimal, carefully) | 3 | ~30 min |
| **10** | Pre-launch QA — Lighthouse, schema validators, mobile, cross-browser | 6 | ~1.5 h |

**Total: ~62 atomic tasks · ~12–14 hours of focused work.**

---

## Phase 1 — Content modules

**Goal:** Single source of truth for treatments, FAQs, physician, testimonials, pricing.

### Task 1.1 — `src/content/treatments.ts`

**Files:** Create `src/content/treatments.ts`

- [ ] Step 1: Define `Treatment` type with fields: `slug, name, shortName, formFactor, route, frequency, fertilityPreserving, fdaStatus, monthlyPriceFrom, headline, eyebrow, summary, bullets[], whoIsThisFor, whoIsThisNotFor`
- [ ] Step 2: Export `TREATMENTS: Treatment[]` with 5 entries (cypionate, enanthate, enclomiphene, hcg, cream) using the catalog table above
- [ ] Step 3: Export `getTreatmentBySlug(slug)` helper
- [ ] Step 4: `npm run build` — verify types compile
- [ ] Step 5: Commit `feat(content): treatments catalog with 5 products`

### Task 1.2 — `src/content/faqs.ts`

**Files:** Create `src/content/faqs.ts`

- [ ] Step 1: Define `FAQ` type: `id, category, question, answer, onHomePage: boolean`
- [ ] Step 2: Export `FAQS: FAQ[]` with 25 questions across categories: results, safety, fertility, insurance, legality, products, side-effects, monitoring, lifestyle, refund
- [ ] Step 3: Export `getHomepageFAQs()` returning the 6 with `onHomePage: true`
- [ ] Step 4: Export `getFAQsByCategory()` grouping by category
- [ ] Step 5: Build + commit `feat(content): 25-question FAQ set`

### Task 1.3 — `src/content/physician.ts`

**Files:** Create `src/content/physician.ts`

- [ ] Step 1: Export single `MEDICAL_DIRECTOR` const: `name, title, credentials[], photo, bio[3 paragraphs], pullQuote`
- [ ] Step 2: Use placeholder values flagged with `// PRELAUNCH:` comments
- [ ] Step 3: Build + commit `feat(content): medical director placeholder`

### Task 1.4 — `src/content/testimonials.ts`

**Files:** Create `src/content/testimonials.ts`

- [ ] Step 1: Define `Testimonial` type: `id, name, age, city, photo, quote, statBefore, statAfter, statTimeframe`
- [ ] Step 2: Export `TESTIMONIALS: Testimonial[]` — 6 placeholder entries with `// PLACEHOLDER:` flags
- [ ] Step 3: Export `getHomepageTestimonials()` returning first 3
- [ ] Step 4: Build + commit `feat(content): placeholder testimonials with honest caveats`

### Task 1.5 — `src/content/pricing.ts`

**Files:** Create `src/content/pricing.ts`

- [ ] Step 1: Export `PRICING_STRUCTURE` const: initial-month line items, monthly-tier products, what's included, FAQ subset relevant to pricing
- [ ] Step 2: Export `formatPrice(n)` helper that returns `"$129"` style (no decimals, no spaces)
- [ ] Step 3: Build + commit `feat(content): pricing structure module`

---

## Phase 2 — Hero copy update + 8 missing homepage sections

**Goal:** Complete the homepage scroll per spec §5.

### Task 2.1 — Update hero copy

**Files:** Modify `src/components/sections/HeroCentered.tsx:21-22`

- [ ] Step 1: Replace headline span with user's chosen headline (option 1–9 from earlier conversation, italic word marked)
- [ ] Step 2: Update subhead if user opted to change it
- [ ] Step 3: Build + commit `feat(home): update hero headline`

### Task 2.2 — Pricing transparency block

**Files:** Create `src/components/sections/PricingTransparency.tsx`

- [ ] Step 1: Build the centered card layout — eyebrow, headline `Your first month, *all in.*`, subhead, 640px max-width card on `surface-alt` band
- [ ] Step 2: Inside card: large `$189` Fraunces, itemized lines (Initial labs, Physician consult, First vial, Free shipping) in JetBrains Mono right-aligned, subtotal divider, `Billed today` total
- [ ] Step 3: Caption: `After month one, $129–149/mo for ongoing supply. No surprise upcharges. No insurance hoops. Cancel anytime.`
- [ ] Step 4: CTA: `See full pricing →` linking to `/pricing`
- [ ] Step 5: Mount in `src/pages/index.tsx` between `TrustStrip` and (next section)
- [ ] Step 6: Build + commit `feat(home): pricing transparency block`

### Task 2.3 — Comparison grid (5 cards)

**Files:** Create `src/components/sections/TreatmentGrid.tsx`

- [ ] Step 1: Read from `TREATMENTS` content module
- [ ] Step 2: Render 3-col / 2-col / 1-col responsive grid of cards. Each card: product macro placeholder image, name (Fraunces medium), form-factor + FDA badge (mono), spec strip (frequency, route, fertility, FDA/compounded), `from $XX/mo`, "Learn more →" link
- [ ] Step 3: Section header above: eyebrow `FIVE EVIDENCE-BASED OPTIONS`, headline `Find the right *treatment.*`, subhead about lifestyle/fertility/dosing
- [ ] Step 4: Mount in homepage
- [ ] Step 5: Build + commit `feat(home): treatment comparison grid`

### Task 2.4 — Comparison table (full)

**Files:** Create `src/components/sections/TreatmentTable.tsx`

- [ ] Step 1: Below the card grid (same component or separate). Render full comparison table: rows = products, columns = frequency, route, fertility-preserving, FDA-approved or compounded, starting price
- [ ] Step 2: Hairline borders, JetBrains Mono for numerical cells, navy headers
- [ ] Step 3: Mobile: convert to horizontally scrolling table with sticky first column
- [ ] Step 4: Build + commit `feat(home): full comparison table`

### Task 2.5 — Medical director section

**Files:** Create `src/components/sections/MedicalDirector.tsx`

- [ ] Step 1: Read from `MEDICAL_DIRECTOR` content module
- [ ] Step 2: Two-column desktop / stacked mobile. Left: full-bleed editorial portrait (placeholder image at `public/images/physician/director.jpg`, 16:9). Right: eyebrow `MEDICAL DIRECTION`, headline `Care from physicians who specialize in *men's hormone health.*`, 3 bio paragraphs, credentials list, pull-quote in Fraunces italic, link `Meet our physician network →`
- [ ] Step 3: Mount in homepage
- [ ] Step 4: Build + commit `feat(home): medical director section`

### Task 2.6 — How-it-works steps

**Files:** Create `src/components/sections/HowItWorksSteps.tsx`

- [ ] Step 1: Header: `How it *works.*` + `From symptoms to your first vial in under 14 days.`
- [ ] Step 2: 4-step row desktop / vertical mobile. Each: mono number `01-04` rust, lucide icon (ClipboardList/Microscope/Video/Truck) navy outline, title Fraunces medium, body Inter muted 2 lines
- [ ] Step 3: Steps content from spec §5.6
- [ ] Step 4: Mount in homepage
- [ ] Step 5: Build + commit `feat(home): how it works section`

### Task 2.7 — Testimonials

**Files:** Create `src/components/sections/TestimonialCards.tsx`

- [ ] Step 1: Read from `getHomepageTestimonials()`
- [ ] Step 2: 3-card horizontal desktop / swipeable carousel mobile (CSS scroll-snap, no library)
- [ ] Step 3: Card: portrait 120px placeholder, name + age + city (Inter small), quote Fraunces italic 22px, outcome stat in mono (`T-level: 314 → 712 in 12 weeks`)
- [ ] Step 4: Caption beneath grid: honest placeholder caveat
- [ ] Step 5: Mount in homepage
- [ ] Step 6: Build + commit `feat(home): testimonial cards`

### Task 2.8 — Compounded vs FDA explainer

**Files:** Create `src/components/sections/CompoundedExplainer.tsx`

- [ ] Step 1: Banded section on `surface-alt`. Header: `FDA-approved or *compounded?* Both have their place.`
- [ ] Step 2: Two-column. Left: FDA-approved (definition, when it makes sense, examples). Right: Compounded (definition, when it makes sense, examples)
- [ ] Step 3: Caption: `Your physician helps you choose in your intake consult.`
- [ ] Step 4: Mount in homepage
- [ ] Step 5: Build + commit `feat(home): compounded vs FDA explainer`

### Task 2.9 — FAQ accordion (top 6)

**Files:** Create `src/components/sections/FAQAccordion.tsx` + `src/components/ui/accordion.tsx` (shadcn)

- [ ] Step 1: Install shadcn Accordion primitive (`src/components/ui/accordion.tsx`) — pull standard shadcn implementation, restyle defaults to navy text + rust expand-icon
- [ ] Step 2: `FAQAccordion` reads from `getHomepageFAQs()`. Header: `Questions men ask.` + `Plain answers. No medical hand-waving.`
- [ ] Step 3: Hairline dividers between items, rust chevron, smooth height transition
- [ ] Step 4: Below: `See all FAQs →` link to `/faq`
- [ ] Step 5: Mount in homepage
- [ ] Step 6: Build + commit `feat(home): FAQ accordion (top 6)`

### Task 2.10 — Re-order homepage to spec sequence

**Files:** Modify `src/pages/index.tsx`

- [ ] Step 1: Confirm scroll order matches spec §5: Hero → TrustStrip → PricingTransparency → TreatmentGrid → TreatmentTable → MedicalDirector → HowItWorksSteps → TestimonialCards → CompoundedExplainer → FAQAccordion → FooterCTABand
- [ ] Step 2: Remove the spec-mention comment placeholder
- [ ] Step 3: Build + commit `feat(home): final section ordering per spec`

### Task 2.11 — Add FAQ schema to homepage

**Files:** Create `src/components/seo/schemas/FAQSchema.tsx`, modify `src/pages/index.tsx`

- [ ] Step 1: Build `FAQSchema` component — accepts `faqs` prop, emits inline JSON-LD with `@type: FAQPage`, `mainEntity: [{@type: Question, name, acceptedAnswer: {@type: Answer, text}}]`
- [ ] Step 2: Mount on homepage with `getHomepageFAQs()` data
- [ ] Step 3: Validate at https://validator.schema.org/ after deploy
- [ ] Step 4: Commit `feat(home): FAQPage JSON-LD on homepage`

---

## Phase 3 — `/pricing` page

**Goal:** The moat page. Higher-fidelity pricing than the homepage block.

### Task 3.1 — Pricing hero

**Files:** Create `src/components/sections/PricingHero.tsx`, modify `src/pages/pricing.tsx`

- [ ] Step 1: Header: eyebrow `TRANSPARENT PRICING`, headline `One price. *No surprises.*`, subhead about flat monthly
- [ ] Step 2: CTA pair: `Get Started` + `Compare treatments`
- [ ] Step 3: Replace `ComingSoon` in `pricing.tsx` with `PageShell + SEOHead + Schemas + PricingHero + ...`
- [ ] Step 4: Build + commit `feat(pricing): pricing hero`

### Task 3.2 — Detailed math card (richer than homepage)

**Files:** Modify `src/pages/pricing.tsx`

- [ ] Step 1: Reuse `PricingTransparency` component or extend to show breakdown across 3 columns: Initial Month, Standard Monthly, Annual View
- [ ] Step 2: Inline note: "FSA-eligible. No insurance required. Cancel anytime."
- [ ] Step 3: Build + commit `feat(pricing): detailed math breakdown`

### Task 3.3 — Per-product pricing strip

**Files:** Modify `src/pages/pricing.tsx`

- [ ] Step 1: Read from `TREATMENTS` content. Render 5-row table: product name, form factor, monthly price, link to detail page
- [ ] Step 2: Footer note: "Some products require a base TRT subscription (e.g., HCG)."
- [ ] Step 3: Build + commit `feat(pricing): per-product pricing strip`

### Task 3.4 — Pricing FAQs (subset)

**Files:** Modify `src/pages/pricing.tsx`

- [ ] Step 1: `FAQAccordion` filtered to `category === 'insurance' | 'refund' | 'commitment'` (~6 questions)
- [ ] Step 2: Build + commit `feat(pricing): pricing-specific FAQ subset`

### Task 3.5 — `FooterCTABand` + final SEO

**Files:** Modify `src/pages/pricing.tsx`

- [ ] Step 1: Mount `FooterCTABand` with custom headline: `Ready when you are.`
- [ ] Step 2: Add `BreadcrumbSchema` (Home → Pricing) and `BreadcrumbList` visual (Phase 7 builds the visual; this just adds schema)
- [ ] Step 3: Update `revalidate: 3600` (already set)
- [ ] Step 4: Build + commit `feat(pricing): footer CTA + breadcrumb`

---

## Phase 4 — `/treatments` hub + 5 detail pages

**Goal:** Treatments hub with full comparison + per-product detail pages, all data-driven from `TREATMENTS`.

### Task 4.1 — `/treatments` hub

**Files:** Modify `src/pages/treatments/index.tsx`

- [ ] Step 1: Replace `ComingSoon` with: `PageShell + SEOHead + OrganizationSchema + ItemListSchema + Breadcrumbs + section header + TreatmentGrid + TreatmentTable + CompoundedExplainer + FooterCTABand`
- [ ] Step 2: Section header: eyebrow `FIVE EVIDENCE-BASED OPTIONS`, headline `Find the right *treatment.*`
- [ ] Step 3: ItemListSchema lists all 5 products with detail-page URLs
- [ ] Step 4: Build + commit `feat(treatments): hub page`

### Task 4.2 — `ProductHero` reusable component

**Files:** Create `src/components/sections/ProductHero.tsx`

- [ ] Step 1: Accepts `treatment: Treatment` prop. Renders: breadcrumbs, eyebrow with form factor + FDA status badges (mono), product name (Fraunces large with italic accent), tagline subhead, key spec strip, primary `Get Started` + secondary `See pricing` CTAs, hero product image
- [ ] Step 2: Two-column desktop: text left, product macro right. Mobile stacks
- [ ] Step 3: Build (no commit yet — used by next task)

### Task 4.3 — `/treatments/cypionate` detail page

**Files:** Modify `src/pages/treatments/[slug].tsx`

- [ ] Step 1: Replace `ComingSoon` with: `PageShell + SEOHead + Schemas (Org, Breadcrumb, MedicalTherapy) + ProductHero + ProductOverview + DosingProtocol + WhoIsThisFor + RelatedTreatments + FooterCTABand`
- [ ] Step 2: For now, only build for `cypionate` slug; other slugs continue to render with new template via shared content
- [ ] Step 3: `getStaticPaths` already returns all 5 — same template renders all once data is filled
- [ ] Step 4: Build + commit `feat(treatments): cypionate detail page using ProductHero`

### Task 4.4 — Inline `ProductOverview` section

**Files:** Modify `src/pages/treatments/[slug].tsx`

- [ ] Step 1: Below `ProductHero`, render 2-paragraph overview from `treatment.summary` + `treatment.bullets[]`
- [ ] Step 2: Build + commit `feat(treatments): product overview section`

### Task 4.5 — `DosingProtocol` section

**Files:** Modify `src/pages/treatments/[slug].tsx`

- [ ] Step 1: Card-style section: form factor, route, frequency, typical starting dose (placeholder text from spec), what to expect by week, monitoring schedule
- [ ] Step 2: All values from `treatment` content
- [ ] Step 3: Build + commit `feat(treatments): dosing protocol section`

### Task 4.6 — `WhoIsThisFor` / not-for split

**Files:** Modify `src/pages/treatments/[slug].tsx`

- [ ] Step 1: 2-column: left "Best for" with `treatment.whoIsThisFor[]` bullets; right "Not the best fit if" with `treatment.whoIsThisNotFor[]` bullets
- [ ] Step 2: Each bullet: lucide Check (rust) on left side, X (muted) on right
- [ ] Step 3: Build + commit `feat(treatments): fit/no-fit explainer`

### Task 4.7 — `RelatedTreatments` strip

**Files:** Modify `src/pages/treatments/[slug].tsx`

- [ ] Step 1: Show 3 other treatments as small cards (filter out current). Use simplified version of `TreatmentGrid` card
- [ ] Step 2: Header: `Compare other options →`
- [ ] Step 3: Build + commit `feat(treatments): related treatments strip`

### Task 4.8 — Verify all 5 detail pages render correctly

**Files:** Test all 5 routes after data is filled in

- [ ] Step 1: `npm run dev`, visit `/treatments/cypionate`, `/treatments/enanthate`, `/treatments/enclomiphene`, `/treatments/hcg`, `/treatments/cream`
- [ ] Step 2: Verify each has unique copy, correct prices, correct fertility/FDA badges
- [ ] Step 3: Run `npm run build` — all 5 should generate at build time (per `getStaticPaths`)
- [ ] Step 4: Push and verify on Vercel preview
- [ ] Step 5: Commit any tweaks `chore(treatments): polish across all 5 detail pages`

---

## Phase 5 — `/how-it-works` page

**Goal:** Process detail page that funnels to pricing/treatments.

### Task 5.1 — Process hero + 4-step section

**Files:** Modify `src/pages/how-it-works.tsx`

- [ ] Step 1: Replace `ComingSoon` with: `PageShell + SEOHead + Schemas + Breadcrumbs + section header + HowItWorksSteps (reused from home, larger variant) + ...`
- [ ] Step 2: Header: `How it *works.*` (same as home but no "see how" link, since this IS that page)
- [ ] Step 3: Build + commit `feat(how-it-works): hero + 4-step process`

### Task 5.2 — Lab partner detail

**Files:** Modify `src/pages/how-it-works.tsx`

- [ ] Step 1: New section about labs: Quest + Labcorp partners, 4,400+ locations, fingerstick option vs in-person draw, list of tests run (testosterone total/free, estradiol, hematocrit, lipid panel, PSA for >40), turnaround time
- [ ] Step 2: Build + commit `feat(how-it-works): lab partner detail`

### Task 5.3 — Consult detail

**Files:** Modify `src/pages/how-it-works.tsx`

- [ ] Step 1: New section about the consult: 15-min video, board-certified physician, what's discussed, what protocols can be set
- [ ] Step 2: Build + commit `feat(how-it-works): consult detail`

### Task 5.4 — Shipping/follow-up + footer CTA

**Files:** Modify `src/pages/how-it-works.tsx`

- [ ] Step 1: Section about shipping (free, fast, discreet packaging, refrigerated where required) and follow-up (every 90 days for first year, then 6-month rhythm)
- [ ] Step 2: Mount `FooterCTABand`
- [ ] Step 3: Build + commit `feat(how-it-works): shipping + follow-up + footer CTA`

---

## Phase 6 — `/about` + `/faq`

**Goal:** Trust-building pages.

### Task 6.1 — `/about` hero + company narrative

**Files:** Modify `src/pages/about.tsx`

- [ ] Step 1: Replace `ComingSoon`. Hero: `Built for men who *won't settle.*` (or whatever brand line we use)
- [ ] Step 2: 3-paragraph company narrative: why we exist (transparent pricing critique), who we serve (men 35-55 who don't want to play legacy-clinic games), what we don't do (no off-domain portals, no surprise upcharges)
- [ ] Step 3: Build + commit `feat(about): hero + company narrative`

### Task 6.2 — Medical director profile (full)

**Files:** Modify `src/pages/about.tsx`

- [ ] Step 1: Reuse `MedicalDirector` from homepage but expanded — add full 5-paragraph bio (vs 3 on home), more credentials, peer-reviewed papers list, pull-quote
- [ ] Step 2: Build + commit `feat(about): medical director full profile`

### Task 6.3 — Physician network section

**Files:** Modify `src/pages/about.tsx`

- [ ] Step 1: Section explaining: all our physicians are board-certified, multi-state licensed, specialize in men's hormone health
- [ ] Step 2: Visual: 3 physician portrait placeholders + names + states licensed
- [ ] Step 3: Add `PersonSchema` for medical director (Phase 7 builds the schema component)
- [ ] Step 4: Build + commit `feat(about): physician network`

### Task 6.4 — `/about` footer CTA

**Files:** Modify `src/pages/about.tsx`

- [ ] Step 1: Mount `FooterCTABand` with custom headline `Bring your concerns. *We'll listen.*`
- [ ] Step 2: Build + commit `feat(about): footer CTA`

### Task 6.5 — `/faq` full set with categories

**Files:** Modify `src/pages/faq.tsx`

- [ ] Step 1: Replace `ComingSoon`. Hero: `Questions men ask.` + `Plain answers. No medical hand-waving.`
- [ ] Step 2: For each category (results, safety, fertility, insurance, legality, products, side-effects, monitoring, lifestyle, refund), render a section with `FAQAccordion` filtered to that category
- [ ] Step 3: Anchor links in a sticky sidebar on desktop, jump-to-section on mobile (CSS only)
- [ ] Step 4: Build + commit `feat(faq): full FAQ set with categories`

### Task 6.6 — Add `FAQPage` schema

**Files:** Modify `src/pages/faq.tsx`

- [ ] Step 1: Mount `FAQSchema` with the FULL FAQ list (not just homepage subset)
- [ ] Step 2: Validate post-deploy
- [ ] Step 3: Build + commit `feat(faq): FAQPage JSON-LD with full set`

---

## Phase 7 — SEO polish

**Goal:** Schema validators happy on every page, breadcrumbs everywhere, image sitemap live.

### Task 7.1 — `BreadcrumbSchema` component

**Files:** Create `src/components/seo/schemas/BreadcrumbSchema.tsx`

- [ ] Step 1: Accepts `items: { name: string, href: string }[]`. Emits inline JSON-LD with `@type: BreadcrumbList`
- [ ] Step 2: Build + commit `feat(seo): BreadcrumbList JSON-LD component`

### Task 7.2 — `Breadcrumbs` visual component

**Files:** Create `src/components/seo/Breadcrumbs.tsx`

- [ ] Step 1: Visual breadcrumbs reading the current `useRouter().pathname`. Renders Inter small text in muted color, separated by `/` glyph, last item rust
- [ ] Step 2: Pair with `BreadcrumbSchema` when used (one prop drives both)
- [ ] Step 3: Mount on `/treatments`, `/treatments/[slug]`, `/pricing`, `/about`, `/faq`, `/how-it-works`
- [ ] Step 4: Build + commit `feat(seo): visual + structured breadcrumbs`

### Task 7.3 — `ItemListSchema` component

**Files:** Create `src/components/seo/schemas/ItemListSchema.tsx`

- [ ] Step 1: Accepts `items: { url, name, description }[]`, emits `@type: ItemList`
- [ ] Step 2: Mount on `/treatments` with all 5 product URLs
- [ ] Step 3: Build + commit `feat(seo): ItemList JSON-LD on treatments hub`

### Task 7.4 — `MedicalTherapy` schema

**Files:** Create `src/components/seo/schemas/MedicalTherapySchema.tsx`

- [ ] Step 1: Accepts `treatment: Treatment`. Emits `@type: MedicalTherapy` with `name, description, drug` (where applicable)
- [ ] Step 2: Mount on each `/treatments/[slug]`
- [ ] Step 3: Build + commit `feat(seo): MedicalTherapy JSON-LD on product pages`

### Task 7.5 — `Person` schema for medical director

**Files:** Create `src/components/seo/schemas/PersonSchema.tsx`

- [ ] Step 1: Accepts `person: { name, jobTitle, credentials, image, sameAs[] }`
- [ ] Step 2: Mount on `/about`
- [ ] Step 3: Build + commit `feat(seo): Person schema for medical director`

### Task 7.6 — Image sitemap

**Files:** Create `src/pages/image-sitemap.xml.ts`

- [ ] Step 1: Dynamic route emitting image sitemap XML referencing product macros, physician portrait, OG images
- [ ] Step 2: Update `public/robots.txt` to reference both `sitemap.xml` and `image-sitemap.xml`
- [ ] Step 3: Build + commit `feat(seo): image sitemap`

### Task 7.7 — OG share images

**Files:** Create `public/og/*.png` (12 images, 1200×630)

- [ ] Step 1: Generate placeholder OG images: navy bg, bone Fraunces title per page, rust accent. Use [og-playground](https://og-playground.vercel.app/) or generate via simple Node script
- [ ] Step 2: One per indexable page: `default.png`, `home.png`, `treatments.png`, 5× `treatments-{slug}.png`, `pricing.png`, `how-it-works.png`, `about.png`, `faq.png`
- [ ] Step 3: Update `SEOHead` callsites to pass page-specific `ogImage` prop
- [ ] Step 4: Verify in Twitter Card validator
- [ ] Step 5: Build + commit `feat(seo): 12 OG share images`

### Task 7.8 — Update `SEOHead` for per-page OG

**Files:** Modify `src/components/seo/SEOHead.tsx`

- [ ] Step 1: Already accepts `ogImage` — verify defaults to `/og/default.png` when omitted
- [ ] Step 2: All page callsites pass appropriate per-page image
- [ ] Step 3: Build + commit `feat(seo): per-page OG images applied`

### Task 7.9 — Verify all schemas on https://validator.schema.org/

**Files:** No file changes — verification only

- [ ] Step 1: After deploy, run validator on each public URL
- [ ] Step 2: Fix any schema errors inline
- [ ] Step 3: Final commit `chore(seo): schema validator clean across all pages`

---

## Phase 8 — Performance components

**Goal:** Hit ≥95 Lighthouse Performance per acceptance criteria.

### Task 8.1 — `OptimizedImage` wrapper

**Files:** Create `src/components/perf/OptimizedImage.tsx`

- [ ] Step 1: Wraps `next/image`. Defaults: `loading="lazy"`, explicit `width`+`height`, `quality={88}`. Accepts `priority` prop for hero
- [ ] Step 2: Replace all `<Image>` and placeholder `<img>` in components with `<OptimizedImage>`
- [ ] Step 3: Build + commit `feat(perf): OptimizedImage wrapper`

### Task 8.2 — `LazySection` wrapper

**Files:** Create `src/components/perf/LazySection.tsx`

- [ ] Step 1: IntersectionObserver-driven, mounts children when within `rootMargin: 50%`. SSR-safe (renders children immediately on server, lazy-mounts on client)
- [ ] Step 2: Wrap homepage sections below the trust strip with `<LazySection>`
- [ ] Step 3: Build + commit `feat(perf): LazySection IntersectionObserver wrapper`

### Task 8.3 — `usePagePerformance` hook

**Files:** Create `src/hooks/usePagePerformance.ts`

- [ ] Step 1: Use `web-vitals` package (add to deps). Reports LCP, CLS, INP via callback
- [ ] Step 2: Default callback: `console.log` in dev; in prod, send to Vercel Analytics (one-line call to `track()`)
- [ ] Step 3: Wire up in `_app.tsx`
- [ ] Step 4: Build + commit `feat(perf): page performance reporting`

### Task 8.4 — Defer 3rd-party scripts pattern

**Files:** Create `src/lib/deferScripts.ts`

- [ ] Step 1: Helper: `deferScripts(callback, ms = 3000)` — runs callback after `setTimeout(ms)` AND after `requestIdleCallback` if available
- [ ] Step 2: Build + commit `feat(perf): script defer helper (no scripts use it yet)`

### Task 8.5 — Final performance verification

**Files:** No file changes

- [ ] Step 1: After deploy, run Lighthouse on `/`, `/pricing`, `/treatments`, `/treatments/cypionate`, `/about`
- [ ] Step 2: Confirm: Performance ≥95, Accessibility ≥95, Best Practices ≥95, SEO ≥100
- [ ] Step 3: Address any issues; commit `chore(perf): Lighthouse hits all targets`

---

## Phase 9 — Middleware re-add

**Goal:** Restore the bot blocker without breaking the deploy.

### Task 9.1 — Add minimal pass-through middleware

**Files:** Create `middleware.ts`

- [ ] Step 1: Start with the literal minimum:
  ```ts
  import { NextResponse } from 'next/server';
  export function middleware() {
    return NextResponse.next();
  }
  ```
- [ ] Step 2: Push and verify Vercel deploys cleanly
- [ ] Step 3: If deploy fails, abort and investigate
- [ ] Step 4: Commit `feat(middleware): minimal pass-through baseline`

### Task 9.2 — Add bot block

**Files:** Modify `middleware.ts`

- [ ] Step 1: Add the lowercased `BLOCKED_AGENTS` array (14 entries: ahrefsbot, semrushbot, mj12bot, dotbot, dataforseobot, blexbot, megaindex, mauibot, petalbot, zmeu, masscan, nmap, sqlmap, nikto)
- [ ] Step 2: Add `for...of` loop checking `req.headers.get('user-agent')?.toLowerCase()` against the list, return 403 on match
- [ ] Step 3: Push and verify with `curl -A "AhrefsBot" https://trtrx.vercel.app/` returns 403
- [ ] Step 4: Verify normal browser still gets 200
- [ ] Step 5: Commit `feat(middleware): block parasitic SEO scrapers`

### Task 9.3 — Add matcher to skip static paths

**Files:** Modify `middleware.ts`

- [ ] Step 1: Add `export const config = { matcher: '/((?!_next/static|_next/image|favicon.ico).*)' }`
- [ ] Step 2: Push and verify static assets still serve fast (no middleware runs on them)
- [ ] Step 3: Commit `perf(middleware): skip static paths via matcher`

---

## Phase 10 — Pre-launch QA

**Goal:** Validate spec acceptance criteria before declaring v1 done.

### Task 10.1 — Lighthouse on all 13 indexable pages

**Files:** No file changes — measurement only

- [ ] Step 1: Run Lighthouse mobile + desktop on `/`, `/treatments`, 5× `/treatments/[slug]`, `/how-it-works`, `/pricing`, `/about`, `/faq`, `/contact`, legal pages
- [ ] Step 2: Record scores in a tracking comment in this plan file
- [ ] Step 3: Address any below threshold (Perf ≥95, A11y ≥95, BP ≥95, SEO ≥100)

### Task 10.2 — Schema validator clean

**Files:** No file changes — validation only

- [ ] Step 1: Validate every public URL on https://validator.schema.org/
- [ ] Step 2: Confirm Organization, FAQPage, BreadcrumbList, ItemList, MedicalTherapy, Person all parse with no errors

### Task 10.3 — Mobile testing on iOS Safari + Android Chrome

**Files:** No file changes — measurement only

- [ ] Step 1: Open `/`, `/pricing`, `/treatments`, `/treatments/cypionate` on iOS Safari (real device or BrowserStack)
- [ ] Step 2: Verify: hero renders, sticky bottom CTA reveals after scroll, mobile drawer opens, comparison table scrolls horizontally, FAQ accordion expands
- [ ] Step 3: Repeat on Android Chrome
- [ ] Step 4: File issues for any visual regressions; fix and commit

### Task 10.4 — `curl` verification of bot block

**Files:** No file changes — verification only

- [ ] Step 1: `curl -I -A "AhrefsBot" https://trtrx.vercel.app/` → expect 403
- [ ] Step 2: `curl -I -A "Mozilla/5.0" https://trtrx.vercel.app/` → expect 200
- [ ] Step 3: Document in plan

### Task 10.5 — Cache-Control verification

**Files:** No file changes — verification only

- [ ] Step 1: `curl -I https://trtrx.vercel.app/` → confirm `Cache-Control: public, max-age=0, s-maxage=60, stale-while-revalidate=86400`
- [ ] Step 2: Document

### Task 10.6 — Theme token sanity grep

**Files:** No file changes — code audit

- [ ] Step 1: `grep -rE '\[hsl\(' src/` → expect 0 results (no arbitrary color values)
- [ ] Step 2: `grep -r 'react-helmet-async' src/components/seo/schemas/` → expect 0 results (no schemas via Helmet)
- [ ] Step 3: Commit any cleanup `chore: enforce theme tokens, inline JSON-LD`

---

## Self-Review (post-write checklist)

- [x] Spec coverage: all 11 spec sections (5.1–5.10) and all infrastructure (§7) mapped to tasks
- [x] No placeholders in task steps — all steps describe concrete actions
- [x] Type consistency: `Treatment`, `FAQ`, `MEDICAL_DIRECTOR`, `Testimonial`, `PRICING_STRUCTURE` used consistently across phases
- [x] Pricing decisions surfaced for user override before Phase 1 starts
- [x] Phasing logic: highest-leverage moats first (homepage → pricing → treatments)
- [x] Dependencies between phases noted (e.g., FAQ schema component built in Phase 2.11 reused in Phase 6.6)

---

## Acceptance criteria (mirrors spec §12)

The buildout is complete when:

1. ✅ All 17 launch routes render with content, navigation, and design tokens applied
2. ✅ Lighthouse: Performance ≥95, Accessibility ≥95, Best Practices ≥95, SEO ≥100 (mobile + desktop)
3. ✅ Core Web Vitals: LCP <1.8s on 4G, CLS <0.05, INP <200ms
4. ✅ JSON-LD validates on Schema.org validator on every page
5. ✅ `/robots.txt`, `/sitemap.xml`, `/image-sitemap.xml`, `/llms.txt`, `/llms-full.txt` all serve correctly
6. ✅ Edge middleware blocks 14+ parasitic-bot user-agents (verified via curl)
7. ✅ Cache-Control headers correct
8. ✅ All meta tags + OG images render in social validators
9. ✅ Mobile sticky CTA + sticky nav verified on iOS Safari + Android Chrome
10. ✅ No `[hsl(...)]` arbitrary values in JSX
11. ✅ No JSON-LD via Helmet
12. ✅ Tailwind production CSS bundle <50KB
13. ✅ TypeScript strict passes; build succeeds on Vercel
