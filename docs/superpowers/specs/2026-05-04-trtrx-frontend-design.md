# trtrx Frontend Design Spec

**Date:** 2026-05-04
**Status:** Draft — awaiting user approval
**Repo:** github.com/metabotprime/trtrx
**Stack:** Next.js 14 (Pages Router) + TypeScript strict + Tailwind + shadcn/ui + Vercel

---

## 1. Context & objectives

trtrx is a direct-to-consumer testosterone replacement therapy (TRT) site competing with Hone Health and TRT Nation. Goal: become the #1 player in the category through superior clarity, trust, and design polish.

This spec covers the **frontend marketing site only**. No backend, no intake, no e-commerce, no auth. Backend ships post-launch (timeline: launch in a couple of months). The site goes live before the clinic operates; a quiet pre-launch waitlist captures intent.

### Core moats (where competitors leave gaps)

1. **Honest pricing math, up front.** Hone hides their ~$222 first-month total ($129 membership + $28+ med + $65 lab); TRT Nation has Trustpilot complaints documenting $99 advertised → $325 charged. Our pricing block is the single biggest reason a price-shopper picks us.
2. **Unified treatment comparison grid.** Neither competitor offers a side-by-side. Cypionate / Enanthate / Enclomiphene / HCG / Cream — frequency, route, fertility-preserving, FDA-vs-compounded, monthly cost.
3. **Compounded vs FDA-approved explained as adults.** Both bury the distinction. We surface it on the homepage.
4. **Branded on-domain experience.** TRT Nation's IntakeQ portal break is fixed by design (when intake is built, it ships on `trtrx.com`).
5. **Real trust stack.** Named medical director with portrait + credentials, lab-partner logos, FSA-eligible badge, 30-day guarantee, board-cert claims with specifics.
6. **Modern aesthetic.** Beats TRT Nation's WordPress-blocky/patriotic-bro feel and Hone's editorial slowness. Premium positioning supports above-TRTNation pricing.

### Design direction

**Option 1 — *The Statement*** (centered editorial restraint, light mode). Apple/Aesop energy: confidence by silence. Restraint = luxury. Quiet hero, decisive footer band.

---

## 2. Decisions ledger

| # | Decision | Rationale |
|---|---|---|
| 1 | Next.js 14 Pages Router, not App Router | Cleaner ISR semantics for thousands of static pages later |
| 2 | Light-mode-primary with selective dark sections | Restraint = luxury; navy footer earns the brand whiplash |
| 3 | Fraunces + Inter + JetBrains Mono | Editorial warmth + workhorse + engineered accent, all free |
| 4 | Rust accent (`#B85C3A`) over orange-amber | Differentiates from Hone; reads masculine without going red |
| 5 | 17 routes at launch, blog deferred | Simple to start; chunked registry comes when content does |
| 6 | Symptom-quiz route dropped | Frontend-only scope; CTAs link to internal informational pages |
| 7 | Pre-launch email waitlist via Resend | Quiet capture replaces popup interruptions; quality over volume |
| 8 | Inline JSON-LD, not via Helmet | Helmet's head-dedup collapses multiple LD+JSON tags |
| 9 | `Cache-Control: max-age=0, s-maxage=60, swr=86400` | Avoids 24h staleness after deploy (brief gotcha) |
| 10 | Organization schema, not MedicalOrganization | Not yet operating as a clinic; upgrade post-launch |
| 11 | Edge middleware blocks parasitic SEO scrapers | Saves bandwidth, stops keyword profiling |

---

## 3. Visual identity

### Palette (HSL theme tokens — never hardcoded inline in JSX)

| Token | Hex | Use |
|---|---|---|
| `--primary` (deep navy) | `#0E1F3A` | dark sections, headings on light, navy outline buttons |
| `--accent` (rust) | `#B85C3A` | CTAs, italic emphasis words, eyebrow text, key stats |
| `--surface` (warm bone) | `#F6F1E9` | default page background |
| `--surface-alt` (deeper cream) | `#EFE7D8` | banded sections |
| `--text` (warm charcoal) | `#1A1A22` | body text |
| `--muted` (warm gray) | `#6B6056` | subheads, captions |
| `--border` | `#E8DFD3` | hairlines, card edges |

Avoid pure white and pure black entirely — temperature stays warm-consistent across the system.

### Typography

- **Display:** Fraunces (variable serif, italic-capable, high contrast) — hero headlines, section headers, italic on power words ("their edge", "all in", "works")
- **Body / UI:** Inter (variable sans) — body, nav, buttons, captions
- **Mono accent:** JetBrains Mono — dose tables, price callouts, mono step numbers

Loaded via `<link>` (not `@import`) in `_document.tsx`. Preconnect to `fonts.gstatic.com`. `display=swap`.

### Photography direction

- Real lifestyle of confident men 35–55 in warm natural light
- Source from editorial libraries (Stocksy, not Shutterstock); commission shoots pre-launch
- **Avoid:** gym-selfie energy, doctor-with-stethoscope cliché, syringes-in-hand, bottle-on-marble countertop
- **Use:** early-morning routines, restrained training, ambient work/family moments
- Grading: warm, slightly desaturated, late-afternoon golden hour

### Recurring section header pattern

- **Eyebrow:** small uppercase Inter, rust, tracked-out letter-spacing 0.16em, mid-dot separators
- **Headline:** Fraunces large, weight 400–500, italic span on 1–2 power words
- **Subhead:** Inter muted, max 2 lines, ~640px max-width
- **CTA:** rust solid (primary) or navy outline (secondary)

### Standard rhythm

`py-16 md:py-24` for major sections. Don't randomize.

### Logo / brand mark

Text-mark for v1: `trt` regular + `rx` italic in Fraunces. Placeholder until commissioned brand mark exists.

---

## 4. Information architecture

### Launch routes (17)

**Marketing core:**
- `/` Home — *the Statement*
- `/treatments` — comparison hub with anchored sections
- `/treatments/cypionate` — per-product detail
- `/treatments/enanthate`
- `/treatments/enclomiphene`
- `/treatments/hcg`
- `/treatments/cream`
- `/how-it-works` — process detail (lab → consult → ship → follow-up)
- `/pricing` — explicit pricing breakdown (the moat)
- `/about` — physician network, named medical director, company
- `/faq` — full FAQ (top ~6 also embedded on home)
- `/contact` — basic form + email/social

**Legal / utility:**
- `/privacy`, `/terms`, `/accessibility`, `/medical-disclaimer`
- `/404`, `/500`

**Deferred (post-launch SEO push):**
- `/blog` + `/blog/[slug]` — chunked registry per the brief
- `/reviews` — Google reviews aggregator
- `/science` — research-backed long-form
- `/[state]` — per-state landing pages

### Top nav

```
trtrx     Treatments    How It Works    Pricing    About     [ Get Started ]
```

- Logo links home; `Treatments` goes to `/treatments` hub (no mega menu — restraint)
- 4 links + 1 rust solid CTA
- Sticky on scroll with bone-blurred background (80% opacity + 12px backdrop-blur), hairline border bottom
- 2px hairline scroll-progress bar at top of viewport, fills rust as you scroll
- Mobile: hamburger drawer (shadcn Sheet) + persistent rust sticky bottom CTA

### Footer (navy primary background — the brand whiplash)

Trust strip above columns:
```
─── Quest · Labcorp · FSA-eligible · 30-day guarantee ───
```

4 columns:
- **Treatments** — Cypionate, Enanthate, Enclomiphene, HCG, Cream, Compare all
- **Resources** — How It Works, Pricing, FAQ
- **Company** — About, Contact, Press, Careers
- **Legal** — Privacy, Terms, Accessibility, Medical disclaimer, HIPAA

Legal strip below: `© 2026 trtrx · regulatory disclaimer · IG / X / YT`.

---

## 5. Homepage section system

Top-to-bottom scroll order:

### 5.1 Hero (centered, light, bone surface)

- Vertical padding: 96–128px top, 80px bottom desktop / 64–96 mobile
- Content max-width: 880px centered
- **Eyebrow:** `TESTOSTERONE THERAPY · DELIVERED · DOCTOR-SUPERVISED`
- **Headline** (Fraunces 92px desktop / 48–56 mobile, weight 400–500): `The way men reclaim *their edge.*` — italic span on "their edge"
- **Subhead** (Inter 18–20px, muted, max ~640px wide): `Doctor-supervised testosterone therapy with transparent pricing and same-day shipping. No memberships you can't cancel. No hidden math.`
- **Primary CTA:** rust solid 48px tall, Inter medium 15px — `Get Started` → `/how-it-works`
- **Secondary CTA:** navy outline 48px — `See Pricing` → `/pricing`
- **Mini trust strip:** `Quest & Labcorp partners · FSA-eligible · 30-day guarantee`
- **Tertiary email capture trigger:** `Get launch updates →` reveals inline email input + rust submit (waitlist)

No imagery in the hero — typography carries the weight.

### 5.2 Trust strip

Single horizontal band, surface-alt cream, ~80px tall, hairlines top + bottom. Logos: Quest, Labcorp, FSA-Eligible badge, 30-Day Guarantee badge, Free Shipping badge. Logos in muted gray, mono labels where applicable.

### 5.3 *The math, up front* (the moat)

- Eyebrow: `TRANSPARENT PRICING`
- Headline: `Your first month, *all in.*`
- Subhead: one line stating that nothing's hidden
- Card centered (~640px max-width, bone in surface-alt section, hairline navy border):
  - `$XXX / first month` (Fraunces large rust)
  - Itemized lines (JetBrains Mono right-aligned): Initial labs, Physician consult, First vial + supplies, Free shipping
  - `Billed today $XXX` (Fraunces large rust)
- Caption: `After month one, $XX/mo for ongoing supply. No surprise upcharges. No insurance hoops. Cancel anytime.`
- CTA: `See full pricing →`

### 5.4 Comparison grid (the second moat)

- Eyebrow: `FIVE EVIDENCE-BASED OPTIONS`
- Headline: `Find the right *treatment.*`
- Subhead: `Choose by lifestyle, fertility goals, and how you want to dose.`
- Card grid (3 cols desktop / 2 tablet / 1 mobile), one per modality. Each card:
  - Product macro photo (clean, on bone)
  - Product name (Fraunces medium) + form-factor badge + FDA/compounded badge (mono)
  - Spec strip: frequency, route, fertility-preserving (yes/no), FDA-approved or compounded
  - `from $XX/mo` (Fraunces big number + Inter small)
  - `Learn more →` (navy text, rust hover) → `/treatments/[slug]`
- Below grid: full comparison **table** (mono numbers, hairline borders) with all attributes side-by-side; mobile becomes horizontally scrolling

### 5.5 Medical director

Two-column on desktop, stacked mobile.
- **Left** (40–50% width): full-bleed editorial portrait, ~16:9 ratio, warm natural light
- **Right:**
  - Eyebrow `MEDICAL DIRECTION`
  - Headline `Care from physicians who specialize in *men's hormone health.*`
  - 2–3 paragraphs about Dr. [Name], MD, with credentials
  - Credentials list (board cert, fellowship, papers)
  - Pull-quote in Fraunces italic
  - Link `Meet our physician network →`

### 5.6 How it works

- Headline: `How it *works.*`
- Subhead: `From symptoms to your first vial in under 14 days.`
- 4-step row desktop, vertical stack mobile. Each step:
  - Mono number `01 / 02 / 03 / 04` rust large
  - Lucide outline icon ~32px navy
  - Step title Fraunces medium 22px
  - Body Inter 15px muted, 2 lines max
- Steps:
  1. Tell us what's off — 2 min · symptom checklist
  2. Order at-home labs — Quest & Labcorp partners
  3. Meet your physician — 15-min video consult to set your protocol
  4. Receive your therapy — free, fast shipping in discreet packaging

### 5.7 Member outcomes / testimonials

- Eyebrow: `FROM MEN WE SERVE`
- Headline: `Stories, not slogans.`
- 3 cards horizontal desktop / swipeable carousel mobile. Each card:
  - Portrait 120px square
  - Name + age + city (Inter small)
  - Quote (Fraunces italic ~22px, ~30 words max)
  - Outcome stat in mono (e.g., `T-level: 314 → 712 in 12 weeks`)
- For launch (no real testimonials yet): placeholder portraits + caption `Real members. Real outcomes. Stories coming as our pilot completes.`

### 5.8 Compounded vs FDA explainer

Banded section on surface-alt deeper cream — the "we explain things like adults" moat.
- Headline: `FDA-approved or *compounded?* Both have their place.`
- Two-column comparison:
  - **Left — FDA-approved:** standardized, identical every batch, higher cost, insurance/FSA-friendly. Best for: predictable baseline. Examples: Cypionate, Enanthate (brand name).
  - **Right — Compounded:** custom-formulated, lower cost, more options (cream, troche, alt esters), licensed 503A pharmacies. Best for: lifestyle fit, budget, alternative routes. Examples: cream, troches, alt-ester injectables.
- Caption: `Your physician helps you choose in your intake consult.`

### 5.9 FAQ (top 6 on home, full set on `/faq`)

- Headline: `Questions men ask.`
- Subhead: `Plain answers. No medical hand-waving.`
- shadcn Accordion with hairline dividers, navy text, rust expand-icon
- Top 6 for home: speed of results, long-term safety, fertility, insurance, cypionate vs enanthate, state legality
- Below: `See all FAQs →` link to `/faq` (full ~25 questions)

### 5.10 Footer CTA band (closing punctuation)

Full-bleed navy primary background, before footer columns.
- Headline (Fraunces ~64px bone, italic span): `Your edge is *waiting.*`
- CTA: rust solid `Get Started`
- Caption (small bone/muted): `Free shipping · 30-day guarantee · Cancel anytime`

---

## 6. Conversion architecture

### CTA hierarchy

- **Primary:** `Get Started` → `/how-it-works`. Rust solid pill, 48px desktop / 52px mobile, Inter medium 15px.
- **Secondary:** `See Pricing` → `/pricing`. Navy outline pill, same dims.
- **Tertiary:** Inline navy text links with rust hairline-underline-on-hover.

No third button color. No gradient buttons. Drop-shadow only as 2px translateY hover lift.

### Placement rule

Every ~2–3 screen-heights of scroll, a primary CTA is in view. Not pushy — never forgotten.

### Sticky top nav behavior

- At top of page: transparent, navy text on bone
- After 80px scroll: bone background at 80% opacity + 12px backdrop-blur, hairline border bottom, navy text persists, rust CTA stays rust
- 2px hairline scroll-progress bar at top of viewport, fills rust as you scroll

### Mobile sticky CTA bar

- Pinned to bottom of viewport on all pages except homepage hero region (don't compete with hero CTAs in the first viewport)
- Reveals after 30% scroll past hero
- bone background 95% opacity + backdrop-blur, hairline top
- Rust pill, full-width-with-margin, 52px tall
- Hides on scroll-up, reveals on scroll-down or pause
- 16px safe-area-inset-bottom for iOS home indicator

### Trust signal layering (5 layers, quietest to loudest)

1. **Ambient** — hero mini trust strip
2. **Logos** — full trust strip below hero
3. **Specific** — guarantee callout adjacent to pricing block
4. **Human** — named medical director with portrait + credentials
5. **Educational** — compounded vs FDA explainer

Plus footer repeat of layer 2.

### Per-page CTA pattern

| Page | Primary CTA | Secondary CTA | End-of-page band? |
|---|---|---|---|
| `/` | Get Started | See Pricing | Yes (rust band) |
| `/treatments` | Get Started | (cards have own) | Yes |
| `/treatments/[slug]` | Get Started | Compare all treatments | Yes |
| `/how-it-works` | See Pricing | Browse Treatments | Yes |
| `/pricing` | Get Started | Compare Treatments | Yes |
| `/about` | Get Started | Read FAQs | No |
| `/faq` | Get Started | See Pricing | Yes |
| `/contact` | (form below) | — | No |
| Legal pages | — | — | No |

Circular flow: every informational page funnels back to `/how-it-works` or `/pricing`. No dead-ends.

### Contact form

Fields: name, email, phone (optional), message. Submit via `mailto:hello@trtrx.com` for v1 (no backend) — opens user's email client pre-filled. Swappable to Formspree/Resend with one-line change. Disclaimer above form: `This form is for general inquiries. For medical questions, please get started with a consult.`

### Email capture (waitlist)

`<EmailCapture>` component beneath hero CTAs. Tertiary `Get launch updates →` link reveals single Inter input + rust submit. Posts to **Resend Audiences** via env-var'd endpoint. Success: rust check + `You're on the list` replaces form. Never popup. Never interruption.

### NOT building for v1

- Exit-intent popups
- Email capture popups
- Live chat bubble
- Loud cookie banner
- Scroll-interrupting modals
- Toast notifications
- Newsletter signup as a primary CTA
- "As seen in" press strip (no real press; faking it would torch trust)

---

## 7. Tech infrastructure

### Stack (final)

- **Next.js 14** Pages Router (not App Router)
- **TypeScript** strict mode
- **Tailwind CSS** with HSL theme tokens
- **shadcn/ui** — six primitives only: `button`, `card`, `accordion`, `sheet`, `separator`, `badge`
- **lucide-react** — outline icon set
- **react-helmet-async** (with compat shim) — for `<meta>` and `<title>` only, NOT for JSON-LD
- **web-vitals** — LCP/CLS/INP reporting
- **Resend** — email capture provider (free tier, supports audiences, swappable behind env var)
- **Vercel** — deploy target

Skip: react-query/SWR (no data fetching), framer-motion (CSS handles all motion), date-fns, zod.

### Cache strategy

In `next.config.mjs`:

```
Cache-Control: public, max-age=0, s-maxage=60, stale-while-revalidate=86400
```

Browser doesn't cache; CDN caches 60s; serves stale up to 24h while revalidating. Pages cached *before* a deploy refresh within 60 seconds — never the 24h staleness bug.

Per-page `revalidate`:
- `/`, `/pricing`: `3600` (1 hour)
- All others (`/treatments` + slugs, `/how-it-works`, `/about`, `/faq`, `/contact`, legal): `86400` (24 hours)

All pages SSG via `getStaticProps` (+ `getStaticPaths` with `fallback: 'blocking'` for treatment slugs). Never SSR.

### SEO files

- **`/sitemap.xml`** — dynamic Next route, generated from `lib/seo/routes.ts` registry. Auto-includes the 5 treatment slugs.
- **`/image-sitemap.xml`** — for product macro photos (and physician portrait when added)
- **`/robots.txt`** (static in `/public`) — allow-all by default + 17-agent AI bot allowlist + `Sitemap:` line
  - AI allowlist: `GPTBot`, `ClaudeBot`, `ChatGPT-User`, `PerplexityBot`, `Google-Extended`, `OAI-SearchBot`, `Anthropic-AI`, `Applebot-Extended`, `CCBot`, `Bytespider`, `FacebookBot`, `Diffbot`, `MistralAI-User`, `Cohere-AI`, `Meta-ExternalAgent`, `Amazonbot`, `cohere-training-data-crawler`
- **`/llms.txt`** + **`/llms-full.txt`** — structured site context for AI engines (top-level summary + condensed home/pricing/treatments/FAQ content)
- **`middleware.ts`** — Edge middleware returns **403** for parasitic SEO scrapers: `AhrefsBot`, `SemrushBot`, `MJ12bot`, `DotBot`, `DataForSeoBot`, `BLEXBot`, `MegaIndex`, `Mauibot`, `PetalBot`, `ZmEu`, `masscan`, `nmap`, `sqlmap`, `nikto`

### Schema strategy (inline JSON-LD, never via Helmet)

Every schema is a dumb React component emitting one inline `<script type="application/ld+json" dangerouslySetInnerHTML={...}>` directly in the page tree.

| Page | Schemas |
|---|---|
| `/` | Organization + FAQPage (top-6 questions) + WebSite |
| `/treatments` | Organization + BreadcrumbList + ItemList (5 products) |
| `/treatments/[slug]` | Organization + BreadcrumbList + MedicalTherapy |
| `/faq` | Organization + FAQPage (full set) + BreadcrumbList |
| `/about` | Organization + Person (medical director) + BreadcrumbList |
| `/pricing`, `/how-it-works`, `/contact`, legal | Organization + BreadcrumbList |

**Entity choice:** `Organization` for v1 (marketing site, not yet operating as clinic). Upgrade to `MedicalBusiness` (a `LocalBusiness` subtype) when intake is live and the clinic is real.

### Performance components

- **`<OptimizedImage>`** — wraps `next/image`, sets `priority` only on hero/above-fold, defaults `loading="lazy"`, enforces explicit `width`/`height` for CLS, WebP output
- **`<LazySection>`** — IntersectionObserver-driven, mounts children once near viewport (50% rootMargin); used for everything below the trust strip
- **`usePagePerformance()`** hook — reports LCP/CLS/INP via `web-vitals`; v1 logs to console + sends to Vercel Analytics (one-line drop-in)
- Google Fonts: `<link rel="preconnect">` to `fonts.gstatic.com` + font CSS via `<link>` in `_document.tsx` (NOT `@import`)
- Helper to defer 3rd-party scripts (TikTok, IG, GTM) via `setTimeout(3000)` + DOM existence check — none ship at v1, but pattern is built

---

## 8. Project structure

```
trtrx/
├── public/
│   ├── robots.txt               # static, AI bot allowlist
│   ├── llms.txt
│   ├── llms-full.txt
│   ├── images/                  # product macros, portraits
│   ├── og/                      # OG share images (1200×630)
│   └── favicon.ico
├── src/
│   ├── pages/
│   │   ├── _app.tsx             # HelmetProvider, global CSS
│   │   ├── _document.tsx        # font preconnect + Google Fonts
│   │   ├── index.tsx            # Home
│   │   ├── treatments/
│   │   │   ├── index.tsx        # comparison hub
│   │   │   └── [slug].tsx       # per-product detail (5 products)
│   │   ├── how-it-works.tsx
│   │   ├── pricing.tsx
│   │   ├── about.tsx
│   │   ├── faq.tsx
│   │   ├── contact.tsx
│   │   ├── privacy.tsx
│   │   ├── terms.tsx
│   │   ├── accessibility.tsx
│   │   ├── medical-disclaimer.tsx
│   │   ├── sitemap.xml.ts       # dynamic sitemap
│   │   ├── image-sitemap.xml.ts # dynamic image sitemap
│   │   ├── 404.tsx
│   │   └── 500.tsx
│   ├── components/
│   │   ├── layout/              # Navigation, Footer, PageShell
│   │   ├── sections/            # 11 homepage sections
│   │   ├── ui/                  # shadcn primitives (6)
│   │   ├── seo/
│   │   │   ├── SEOHead.tsx
│   │   │   ├── Breadcrumbs.tsx
│   │   │   └── schemas/         # Organization, FAQ, Breadcrumb, ItemList, MedicalTherapy, Person
│   │   ├── perf/                # OptimizedImage, LazySection
│   │   └── forms/               # EmailCapture, ContactForm
│   ├── content/
│   │   ├── treatments.ts        # 5-product data (typed)
│   │   ├── faqs.ts              # full FAQ set (~25)
│   │   ├── testimonials.ts      # placeholder cards
│   │   └── physician.ts         # medical director data
│   ├── hooks/
│   │   └── usePagePerformance.ts
│   ├── lib/
│   │   ├── seo/
│   │   │   ├── sitemap.ts       # generates sitemap entries
│   │   │   └── routes.ts        # route registry (single source of truth)
│   │   └── utils.ts             # cn() helper
│   └── styles/globals.css       # Tailwind + HSL tokens
├── middleware.ts                # parasitic-bot blocker
├── next.config.mjs              # cache headers, image domains
├── tailwind.config.ts           # theme tokens
├── components.json              # shadcn config
├── tsconfig.json                # strict mode
├── package.json
└── README.md
```

---

## 9. Component inventory (build list, 34 total)

- **Layout** (4): Navigation, Footer, PageShell, StickyMobileCTA
- **Sections** (11): HeroCentered, TrustStrip, PricingTransparency, TreatmentGrid, TreatmentTable, MedicalDirector, HowItWorksSteps, TestimonialCards, CompoundedExplainer, FAQAccordion, FooterCTABand
- **UI primitives** (6 shadcn): Button, Card, Accordion, Sheet, Separator, Badge
- **SEO** (8): SEOHead, Breadcrumbs, OrganizationSchema, FAQSchema, BreadcrumbSchema, ItemListSchema, MedicalTherapySchema, PersonSchema
- **Performance** (2): OptimizedImage, LazySection
- **Forms** (2): EmailCapture, ContactForm
- **Hooks** (1): usePagePerformance

---

## 10. Out of scope (deferred)

- Blog registry / chunked blog files (no posts at launch)
- Editorial overrides map
- noindex slugs registry
- Audit scripts (cannibalization, E-E-A-T, CTR, GEO)
- Google Indexing API service account + GitHub Actions cron — set up after domain verified in GSC
- Bing IndexNow workflow — same gating
- `/reviews`, `/science`, `/blog` routes — wired in `lib/seo/routes.ts` as future entries, not built
- "As seen in" press strip (no real press)
- Symptom-quiz UI (no backend)
- Patient portal links / sign-in (no auth)
- E-commerce / checkout
- LegitScript badge (Trimi-specific to that vertical, not relevant here)
- Bask Health iframe (Trimi-specific)
- HIPAA-compliance language drafted by lawyer (placeholder copy only at launch; lawyer engagement is a separate workstream)
- shadcn primitives we don't use (`slider`, `dialog`, `popover`, `dropdown-menu`, `toast`, etc.)

---

## 11. Open questions / decisions needed before launch

These are content/legal/branding decisions that don't block frontend dev — placeholders go in until they're filled:

- Medical director's name, photo, credentials, bio
- Real testimonials and outcome stats (pilot output)
- Final pricing numbers for the math block
- Real product macro photography (commissioned shoot pre-launch)
- Hero portrait direction confirmed (or stay text-only — current spec is text-only)
- Legal copy: refund policy, medical disclaimer, HIPAA notice, ToS, privacy — lawyer-drafted
- FSA / HSA eligibility verification per product
- Final brand mark (vs `trt` + italic `rx` text-mark placeholder)
- Email-capture provider (Resend assumed; ConvertKit / Beehiiv / MailerLite swappable)
- `hello@trtrx.com` email address provisioned
- Marketing claims pending verification before launch: free shipping economics, 30-day guarantee policy text, same-day-shipping feasibility, FSA/HSA eligibility per product, "no insurance hoops" copy
- Per-product fertility-preservation claims confirmed by medical director (Cypionate / Enanthate suppress; Enclomiphene preserves; HCG can preserve as adjunct)
- 12 OG share images designed and exported (1200×630, one per indexable page)

---

## 12. Acceptance criteria

The frontend is complete when:

1. All 17 launch routes render with content, navigation, and design tokens applied
2. Lighthouse scores: Performance ≥ 95, Accessibility ≥ 95, Best Practices ≥ 95, SEO ≥ 100 (mobile + desktop)
3. Core Web Vitals: LCP < 1.8s on 4G, CLS < 0.05, INP < 200ms
4. JSON-LD validates on Schema.org validator for every page
5. `/robots.txt`, `/sitemap.xml`, `/image-sitemap.xml`, `/llms.txt`, `/llms-full.txt` all serve correctly
6. Edge middleware blocks 14+ parasitic-bot user-agents (returns 403 verified via curl with `User-Agent: AhrefsBot`)
7. Cache-Control headers verified via `curl -I` after Vercel deploy (`s-maxage=60, stale-while-revalidate=86400`)
8. Email capture posts successfully to Resend audience (verified test submission)
9. All meta tags + OG images render correctly in Twitter Card validator + Facebook Sharing Debugger
10. Mobile sticky CTA + sticky nav behaviors verified on iOS Safari + Android Chrome
11. No `[hsl(...)]` arbitrary values in JSX — all colors via theme tokens (verified by grep)
12. No JSON-LD via Helmet — all schemas inline (verified by grep on `react-helmet-async` imports vs schema components)
13. Tailwind production CSS bundle < 50KB
14. No lint errors; TypeScript strict passes; build succeeds on Vercel
