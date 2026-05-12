# trtrx — Handoff Brief

> Paste the next session a link to this file (or the file contents). Everything below is what a fresh agent needs to know to continue the project without re-litigating decisions.

**Date of handoff:** 2026-05-04
**Live site:** https://trtrx.vercel.app
**Repo:** https://github.com/metabotprime/trtrx
**Main local worktree:** `/Users/christosi/Desktop/trtrx`
**Vercel project:** team `trimi1`, project `trtrx`

---

## What this is

trtrx is a direct-to-consumer testosterone replacement therapy (TRT) marketing site. Frontend-only at this stage; backend (intake, payments, real portal) is a separate workstream. Goal: become the #1 player in the category through clarity, trust, design polish, and pricing transparency.

The site already ships in production-ready state for the marketing layer. What remains is content (legal, real bios, real authors), domain config, and operational decisions documented at the bottom of this brief.

---

## Stack (locked — do not re-invent)

- **Next.js 14.2.35** Pages Router (not App Router — cleaner ISR semantics)
- **TypeScript** strict + `noUncheckedIndexedAccess`
- **Tailwind CSS** with HSL theme tokens (never `[hsl(...)]` arbitrary values in JSX)
- **shadcn/ui** primitives — only `Button`, `Accordion` installed; add only what's used
- **react-helmet-async** for `<meta>` / `<title>` ONLY. NEVER for JSON-LD (head dedup collapses multiple LD tags)
- **All JSON-LD inline** via dedicated React components emitting `<script type="application/ld+json" dangerouslySetInnerHTML={...}>`
- **web-vitals** wired in `_app.tsx` via `usePagePerformance()`
- **Vercel** deploy with ISR

## Reference docs (in repo)

- [`docs/superpowers/specs/2026-05-04-trtrx-frontend-design.md`](superpowers/specs/2026-05-04-trtrx-frontend-design.md) — full design spec
- [`docs/superpowers/plans/2026-05-04-trtrx-fullsite-buildout.md`](superpowers/plans/2026-05-04-trtrx-fullsite-buildout.md) — implementation plan (executed across ~50 commits)
- [`docs/superpowers/plans/2026-05-04-trtrx-long-term-seo-strategy.md`](superpowers/plans/2026-05-04-trtrx-long-term-seo-strategy.md) — 36-month SEO strategy

---

## Design system (locked)

### Palette
HSL tokens in `src/styles/globals.css`. After comparing 12 preview directions the locked palette is **modern-amber — ocean blue + warm amber on light cream**:

| Token | HSL | Hex | Use |
|---|---|---|---|
| `--primary` | `215 60% 28%` | `#1D4173` | ocean blue — headlines, primary buttons, footer band, "trt" in logo |
| `--accent` | `35 95% 55%` | `#F5A623` | bright marigold — **solid fills only** (CTA backgrounds, footer band, dividers, borders) and amber **text on DARK surfaces** (Footer link hover, FooterCTABand italic emphasis, Logo italic-rx on `tone="on-dark"`). Never use as text on cream/light surfaces — `text-accent-strong` is the token for that. |
| `--accent-strong` | `30 88% 33%` | `#9D5208` | dark amber — **text-only token for amber text on LIGHT surfaces**. Used by `.eyebrow`, blog category labels, Logo italic-rx on `tone="on-light"`, QuickAnswerBox label. Passes WCAG AA on both `--surface` (5.41:1) and `--surface-alt` (4.86:1). |
| `--surface` | `210 20% 99%` | `#FBFCFD` | cool white — default page background |
| `--surface-alt` | `220 15% 96%` | `#F0F3F6` | cool light gray — banded sections |
| `--text` | `220 25% 14%` | `#1B2233` | dark text body |
| `--muted` | `220 10% 42%` | `#6A727C` | cool gray — subheads, captions |
| `--border` | `220 15% 91%` | `#E2E6EC` | cool light border — hairlines, card edges |

Mobile chrome theme-color: `#1D4173` (set in `src/pages/_document.tsx`).
Never use pure white or pure black. Avoid `[hsl(...)]` arbitrary classes — always tokens.

### Typography
Loaded via `next/font/google` in `_app.tsx`:
- **Display:** Fraunces (variable serif, italic-capable, opsz axis 144)
- **Body / UI:** Inter (variable sans)
- **Accent:** JetBrains Mono — data, eyebrows, "01/02/03" step numbers

### Headline pattern
Italic span on the power word(s):
```tsx
<h1 className="font-serif text-display-xl font-medium text-primary">
  TRT,{' '}
  <span className="display-italic text-primary">finally.</span>
</h1>
```

The "display-italic" class is defined in globals.css with `'opsz' 144` font variation.

### Section header pattern
1. Eyebrow — small uppercase Inter, rust, tracked-out letter-spacing (`tracking-tracked` = 0.16em)
2. Headline — Fraunces large, italic on 1–2 power words
3. Subhead — Inter muted, max 2 lines, ~640px max-width
4. CTAs — rust solid (primary) / navy outline (secondary)

Use `<SectionHeader eyebrow title subtitle align size />` — title takes `*emphasis*` markers for italic spans.

### Standard rhythm
`py-20 md:py-28` for major sections. Don't randomize.

### Brand voice
Confident, plain-spoken, no clinical hedging ("may help certain individuals" is banned), no bro slang. Sentences default short. Italicize 1–2 emotional/identity words per headline. Subheads ~20 words. Body paragraphs ~50–70 words.

### Brand bookend (locked)
- Hero headline opens: **TRT, *finally.***
- Footer band default closes: **The standard *for TRT.***

Pages with custom FooterCTABand props keep their custom copy; the default change cascades to homepage + blog.

### Logo
Text-mark placeholder: lowercase `trt` + italic `rx` in Fraunces. Real logo design is a pre-launch task.

---

## Product & pricing (locked)

### Five products
| Slug | Form | Frequency | Fertility-preserving | FDA | Monthly |
|---|---|---|---|---|---|
| `cypionate` | Injectable | 1×/week | No | FDA + compounded | **$219/mo** |
| `enanthate` | Injectable | 1×/week | No | FDA + compounded | **$219/mo** |
| `enclomiphene` | Oral tablet | Daily | **Yes** | Compounded | **$179/mo** |
| `cream` | Topical | Daily | No | Compounded | **$199/mo** |
| `hcg` | Adjunct injection | 2–3×/week | **Yes** (adjunct) | Compounded | **+$89/mo** (requires base TRT) |

### Pricing structure (locked — DO NOT add tiers or commitment discounts)
**Flat monthly, all-inclusive.** First month = ongoing month. Same number every cycle.

What's bundled:
- Medication
- Ongoing physician supervision (MD-led, not NP/PA-led)
- 24/7 patient portal — message your doctor anytime
- Two lab panels per year (Quest / Labcorp)
- Free shipping (always)
- Cancel anytime
- 60-day satisfaction guarantee

### The moat line
> *$219 first month. $219 every month. No setup fee. No hidden membership.*

Exported as `PRICING_STRUCTURE.flatPromise` in `src/content/pricing.ts`. Referenced on the homepage pricing transparency block.

### Why we don't add tiers / GLP-1 / peptides
3 of 4 competitors bundle adjacent men's-health categories (GLP-1, ED, hair, peptides) and use commitment-based pricing. Adding tiers breaks the flat-pricing moat. Adding GLP-1 dilutes the brand (trtrx, not "men's health rx"). Stay narrow, win the category.

---

## Pages live (24 total)

### Marketing core
- `/` homepage — 13 sections (hero, trust strip, pricing transparency, treatment grid, treatment table, **why different**, medical director, how-it-works steps, testimonials, compounded explainer, FAQ, home blog section, footer CTA band)
- `/treatments` — hub with comparison
- `/treatments/[slug]` — 5 product detail pages (cypionate, enanthate, enclomiphene, hcg, cream)
- `/how-it-works` — full 5-step process with expanded sections for labs, consult, shipping, and support
- `/pricing` — flat-monthly breakdown + per-product strip + pricing FAQ subset
- `/about` — company narrative + medical director + physician network
- `/faq` — 25 questions across 10 categories
- `/contact` — `mailto:hello@trtrx.com` form
- `/blog` — index with featured strip + chronological grid
- `/blog/[slug]` — 6 placeholder posts with BlogPosting + MedicalWebPage schemas, reviewer credentials, Quick Answer callout, related posts
- `/sign-in` — pre-launch placeholder with email capture, noindex

### Legal (currently ComingSoon — need lawyer-drafted copy)
- `/privacy`, `/terms`, `/accessibility`, `/medical-disclaimer`

### Errors
- `/404`, `/500` — custom branded

---

## SEO infrastructure shipped

- `/sitemap.xml` + `/image-sitemap.xml` — auto-generated from `src/lib/seo/routes.ts` registry
- `/robots.txt` — 17-agent AI bot allowlist (GPTBot, ClaudeBot, PerplexityBot, etc.)
- `/llms.txt` + `/llms-full.txt` — AI engine context
- `middleware.ts` — blocks 14 parasitic SEO scrapers (Ahrefs, Semrush, MJ12, etc.) with 403. Note: bypassed by Vercel CDN cache for SSG pages (documented Vercel behavior).

### Schemas in production (inline JSON-LD)
- `Organization`, `WebSite` — homepage and most pages
- `FAQPage` — homepage (top 6) and /faq (full set)
- `BreadcrumbList` — internal pages
- `ItemList` — /treatments hub
- `MedicalTherapy` — /treatments/[slug]
- `Person` — /about (medical director)
- `BlogPosting` + `MedicalWebPage` — /blog/[slug] with `reviewedBy` field

### Cache strategy
`Cache-Control: public, max-age=0, s-maxage=60, stale-while-revalidate=86400` set in `next.config.mjs`. Per-page ISR `revalidate: 3600` (home/pricing) or `86400` (others).

---

## Repository structure

```
trtrx/
├── public/
│   ├── robots.txt
│   ├── llms.txt
│   ├── llms-full.txt
│   ├── images/        ← product macros, portraits (not yet generated)
│   └── og/            ← OG share images (paths plumbed; PNGs not generated)
├── src/
│   ├── content/       ← typed data modules — NO imports from outside src/content/
│   │   ├── treatments.ts
│   │   ├── faqs.ts (26 entries)
│   │   ├── physician.ts
│   │   ├── testimonials.ts
│   │   ├── pricing.ts
│   │   └── blog.ts
│   ├── components/
│   │   ├── layout/    ← Navigation, Footer, PageShell, StickyMobileCTA, Logo
│   │   ├── sections/  ← 30+ section blocks (homepage + pricing + treatments + process + blog)
│   │   ├── ui/        ← shadcn primitives (Button, Accordion)
│   │   ├── seo/       ← SEOHead, Breadcrumbs, schemas/
│   │   ├── perf/      ← OptimizedImage, LazySection
│   │   └── forms/     ← EmailCapture, ContactForm
│   ├── pages/         ← 24 routes
│   ├── hooks/         ← usePagePerformance
│   ├── lib/
│   │   ├── seo/       ← routes.ts (registry), sitemap.ts
│   │   ├── utils.ts   ← cn(), formatUSD(), SITE_URL/SITE_NAME constants
│   │   └── deferScripts.ts
│   └── styles/
│       └── globals.css  ← HSL theme tokens, display-italic class, focus styles
├── middleware.ts        ← bot blocker (Edge runtime)
├── next.config.mjs      ← cache headers, image config
├── tailwind.config.ts   ← theme tokens, keyframes
└── docs/
    ├── HANDOFF.md       ← this file
    └── superpowers/
        ├── specs/2026-05-04-trtrx-frontend-design.md
        └── plans/
            ├── 2026-05-04-trtrx-fullsite-buildout.md
            └── 2026-05-04-trtrx-long-term-seo-strategy.md
```

---

## Design direction (locked 2026-05-11)

Winner: **`preview/modern-amber`** — ocean blue + warm amber on light cream. Merged into `main`. All 12 preview branches (9 original visual explorations + 3 blue/white/orange variations) deleted.

The decision flow that landed here:
1. Compared 9 original directions (dark-engineered, editorial-magazine, brutalist-clinic, sand-sage, sage-modern, coastal-clinic, forest-bronze, burgundy-cream, charcoal-sage)
2. User picked the blue/orange feel from `preview/dark-engineered` but on white instead of dark navy, keeping main's Fraunces `trt` + italic `rx` logo
3. Three light-mode variations spun up: `engineered-precision` (cool/electric), `heritage-editorial` (warm/deep), `modern-amber` (balanced)
4. `modern-amber` chosen as the locked direction

---

## What's NOT shipped (open punch list)

### Blocks public launch

1. **Legal copy** — `/privacy`, `/terms`, `/accessibility`, `/medical-disclaimer` are ComingSoon stubs. Need lawyer-drafted. Plus HIPAA Notice of Privacy Practices for when intake ships.

2. **Real medical director identity** — name, real bio, photo, credentials. Schema (Person) + UI cards reference this. Placeholder is `Dr. [Name Placeholder]` in `src/content/physician.ts` with `// PRELAUNCH:` comments.

3. **Real authors for blog posts** — currently all attributed to "trtrx Editorial Team" in `src/content/blog.ts`. For YMYL medical content this is an E-E-A-T penalty. Either hire content lead with credentials or attribute everything to the medical director initially.

4. **`trtrx.com` domain** — purchase, point at Vercel, DNS + SSL configured. Currently lives at `trtrx-trimi1.vercel.app`.

5. **`hello@trtrx.com` mailbox** — the contact form `mailto:` targets this; needs to actually receive mail.

### Marketing claims need verification before launch
- Free shipping economics — is "always free" actually viable?
- Same-day shipping — feasibility with dispensary partner
- 60-day satisfaction guarantee — policy text drafted
- FSA-eligible per product (compounded vs FDA)
- Two labs/year included at $219 — is this operationally feasible?
- "No insurance hoops" copy — legally OK?

### SEO setup (~1 day total work, gated on domain)
- Google Search Console domain verification
- Bing Webmaster Tools
- Google Analytics 4 OR Vercel Analytics (recommendation: Vercel Analytics for simplicity)
- Google Indexing API service account + GitHub Actions cron (200 URLs/day)
- Bing IndexNow workflow (fires on every publish)
- Google Business Profile (when registered address exists)

### Quality assurance pass (~half-day)
- Lighthouse on all 24 pages — confirm Performance ≥95, A11y ≥95, BP ≥95, SEO ≥100
- Schema validator clean sweep on every public URL
- Real-device mobile testing (iOS Safari + Android Chrome)
- Cross-browser (Firefox, Edge desktop)
- Accessibility audit (WCAG AA, keyboard nav, screen reader)
- Error monitoring (Sentry free tier)
- Uptime monitoring

### Favicon set
The site references `/favicon.ico` but no file exists. Need: `favicon.ico`, `apple-touch-icon.png`, `android-chrome-192x192.png`, `manifest.json`.

### Backend (out of scope for frontend session)
- Intake flow / symptom quiz
- Patient portal (24/7 messaging, lab view, Rx tracking)
- Payment processing
- Email capture wired to Resend (currently optimistic-only client-side)
- Authentication for `/sign-in`
- Pharmacy/fulfillment integration — see Bask vs OpenLoop decision below

---

## Open decisions

### 1. Fulfillment platform: Bask Health vs OpenLoop

**Recommendation: OpenLoop + custom portal.**

| | Bask Health | OpenLoop |
|---|---|---|
| Scope | Full stack: portal + intake + EHR + Rx routing + visits | Physician network: 50-state MDs, clinical workflow, lab orders |
| Used by | **Trimi** (the reference brand) | **Hone Health**, many DTC clinics |
| Engineering | Minimal — they provide the portal UX | Significant — you build a portal calling their API |
| Time to launch | ~6–8 weeks | ~12–16 weeks |
| Brand control | Limited — their UX is what customers see | Total — your design system end-to-end |
| Cost | Higher (full-stack SaaS) | Lower per-visit + your engineering |

**Why OpenLoop wins for trtrx:**
1. The site copy on `/how-it-works` says **"No off-brand third-party tools"**. A Bask-hosted portal contradicts that.
2. The "24/7 patient portal" is surfaced 7+ times across the site as a brand promise. Having that portal look like our brand reinforces every page.
3. Premium positioning earns its price tag from moats competitors don't have. An in-house portal IS a moat — Bask's portal is the same one Trimi has.
4. OpenLoop's API is documented; building a portal on top is engineering-tractable.

**Pick Bask if:** launch pressure under 8 weeks, OR no in-house engineering capacity.

### 2. Final design direction
Current site uses navy/rust/bone Option 1. 9 preview branches available for comparison (table above). Need to lock one and merge to main + delete losing branches.

### 3. Logo / brand mark
Text-mark `trt` + italic `rx` is a placeholder. Real wordmark design needed pre-launch.

### 4. Email capture provider
`<EmailCapture>` component currently does optimistic UI only (TODO comment in code). Provision Resend Audiences (or Beehiiv / ConvertKit) and wire when ready — single env-var change.

---

## Important gotchas learned the hard way

### Vercel-specific

- **Vercel CDN bypasses middleware for cached SSG responses.** Bot block fires on cache misses only. Documented behavior, not a bug.
- **Vercel project framework preset must be "Next.js", not "Other".** Default for empty repos is sometimes wrong; fix via Settings → General → Framework Preset → Next.js → redeploy.
- **Vercel Authentication (deployment protection) is ON by default.** Gates all deployments behind SSO. Disable for production via Settings → Deployment Protection → Vercel Authentication → "Only Preview Deployments" or "Disabled".
- **Middleware path-to-regexp matcher chokes on multiple file extensions** in one negative lookahead. Keep matcher simple: `'/((?!_next/static|_next/image|favicon.ico).*)'`.

### Build-system

- **Cache-Control MUST be `max-age=0, s-maxage=60, stale-while-revalidate=86400`.** Using `max-age=86400` causes pages cached before a deploy to keep serving stale HTML for 24h. The `s-maxage=60` lets the CDN refresh quickly on deploys.
- **Content modules must have zero imports from outside `src/content/`** — keep them pure data. `pricing.ts` imports `TREATMENTS` for derivation — that's the only allowed cross-content import.
- **Always inline JSON-LD via `<script type="application/ld+json" dangerouslySetInnerHTML>`.** NEVER via react-helmet-async. Helmet's head dedup collapses multiple LD tags into one and breaks structured data.
- **Tailwind theme tokens are HSL strings in CSS vars.** Use `text-primary`, `bg-surface-alt`, etc. Never `[hsl(...)]` arbitrary classes.

### Content

- **Italic-on-power-word headline pattern.** Every section header uses `<span className="display-italic text-primary">…</span>` for the emphasized word(s). `SectionHeader` accepts `*emphasis*` markers in the title prop.
- **Brand voice rules.** Confident, plain-spoken, no clinical hedging, no bro slang. Default short sentences. Headlines italicize 1–2 power words.
- **The transparent flat-pricing line** "$219 first month. $219 every month. No setup fee. No hidden membership." is `PRICING_STRUCTURE.flatPromise` — referenced on the homepage pricing transparency block.
- **All PRELAUNCH placeholders** are flagged with `// PRELAUNCH:` comments. Grep the codebase for them to find content that needs real replacements.

### Git / repo

- Local git author is set as `metabotprime <ctsabbagh@gmail.com>` for this repo only.
- 9 preview branches + worktree dirs exist; clean up when a direction is locked.
- Vercel auto-deploys every branch push, so be intentional about pushing.

---

## What to do in a new session

1. Read this brief.
2. Read the three reference docs in `docs/superpowers/`.
3. Walk through the live site at https://trtrx.vercel.app to understand current state.
4. Optionally compare preview branches if visual direction is up for change.
5. Pick the most impactful work item from the open punch list:
   - If user wants polish: pick a preview branch, audit Lighthouse, generate favicon
   - If user wants content: real medical director bio, real blog posts, lawyer-drafted legal copy
   - If user wants infrastructure: GSC + Indexing API + analytics setup
   - If user wants backend: start the OpenLoop integration + portal build
6. Use existing patterns — section components, content modules, theme tokens.
7. Don't change locked design system or pricing structure without explicit user permission.
8. Always run `npm run build` before committing. Always push after committing (Vercel auto-deploys main).

---

## Summary in one paragraph

trtrx is a premium-positioned DTC TRT marketing site living at https://trtrx.vercel.app, built on Next.js 14 Pages Router + TypeScript + Tailwind with locked navy/rust/bone color tokens, Fraunces + Inter + JetBrains Mono typography, and an Aesop-quiet brand voice. Pricing is flat $219/mo all-inclusive (5 products: cypionate $219, enanthate $219, enclomiphene $179, cream $199, HCG +$89 adjunct), positioned mid-higher tier against Hone, Maximus, Marek, and TRT Nation. 24 pages live including blog infrastructure with BlogPosting + MedicalWebPage schemas. Hero opens with "TRT, *finally.*" and footer band closes with "The standard *for TRT.*" — bookending the brand promise that the page proves via pricing transparency, comparison grid, named medical director, 60-day guarantee, 24/7 patient portal, and a "Why we're different" 4-panel section calling out specific competitor pain points. Backend (intake, portal, payments) is a separate workstream; recommendation is OpenLoop for physician network + custom in-house portal. Pre-launch blockers are legal copy, real medical director identity, real blog authors, trtrx.com domain config, and `hello@trtrx.com` mailbox. 9 preview branches available for visual direction exploration. Full repo structure, gotchas, and open decisions documented here.
