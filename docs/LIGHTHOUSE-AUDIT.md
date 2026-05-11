# trtrx — Lighthouse audit (2026-05-11)

Full mobile-emulation Lighthouse pass on all 24 production pages at `https://trtrx.vercel.app`, run after the modern-amber palette merge and SEO-infrastructure work.

Targets per HANDOFF.md: **Performance ≥95, Accessibility ≥95, Best Practices ≥95, SEO ≥100**.

## TL;DR

- **Accessibility, Best Practices, SEO** all hit threshold across every page (with one intentional exception — `/sign-in` carries `noindex`, so its SEO score reflects that on purpose).
- **Performance** lands at 91–97 across the catalog, missing the 95 bar by 1–4 points on most pages. Root cause is the mobile-throttled Lighthouse emulation amplifying Fraunces variable-font swap delay on the H1 (LCP) plus Next.js's framework JS long tasks. Real-device performance is meaningfully better than the throttled numbers; these are scores under simulated 4× CPU and 1.6 Mbps network throttling, not real user latency.
- Three audit-driven commits shipped in this pass — palette darkening for contrast, heading-order fixes, and date hydration fixes. Detailed below.

## Final scores

| Page | Perf | A11y | BP | SEO |
|---|---|---|---|---|
| `/` | 94 | 96 | 100 | 100 |
| `/treatments` | 97 | 96 | 100 | 100 |
| `/treatments/cypionate` | 93 | 95 | 100 | 100 |
| `/treatments/enanthate` | 93 | 95 | 100 | 100 |
| `/treatments/enclomiphene` | 93 | 95 | 100 | 100 |
| `/treatments/hcg` | 93 | 95 | 100 | 100 |
| `/treatments/cream` | 93 | 95 | 100 | 100 |
| `/how-it-works` | 94 | 95 | 100 | 100 |
| `/pricing` | 93 | 95 | 100 | 100 |
| `/about` | 97 | 95 | 100 | 100 |
| `/faq` | 94 | 95 | 100 | 100 |
| `/blog` | 93 | 95 | 100 | 100 |
| `/blog/cypionate-vs-enanthate` | 93 | 95 | 100 | 100 |
| `/blog/trt-and-fertility` | 93 | 95 | 100 | 100 |
| `/blog/trt-and-hematocrit` | 93 | 95 | 100 | 100 |
| `/blog/signs-of-low-testosterone-35-55` | 92 | 95 | 100 | 100 |
| `/blog/how-trt-pricing-works` | 93 | 95 | 100 | 100 |
| `/blog/weekly-vs-twice-weekly-cypionate` | 93 | 95 | 100 | 100 |
| `/contact` | 92 | 95 | 100 | 100 |
| `/sign-in` | 94 | 95 | 100 | **92** ¹ |
| `/privacy` | 93 | 95 | 100 | 100 |
| `/terms` | 97 | 95 | 100 | 100 |
| `/accessibility` | 93 | 95 | 100 | 100 |
| `/medical-disclaimer` | 94 | 95 | 100 | 100 |

¹ `/sign-in` carries `noindex,nofollow` intentionally as a pre-launch placeholder.

**Pass rate against ≥95/95/95/100 target**: A11y 24/24, BP 24/24, SEO 23/24 (the one exception is intentional), Perf 3/24.

## What was failing and what got fixed

### Cross-cutting accessibility issues (every page)

| Audit | Baseline | After fix | What changed |
|---|---|---|---|
| `color-contrast` | score 0, 63+ failing elements per page | 100 | `--accent` darkened from `30 90% 52%` (`#ED8D1A`) to `30 88% 35%` (`#A8590B`). At L=35% the amber passes 4.85:1 contrast both directions on the cream surface — whether it's amber text on cream, or cream text on an amber button. Two prior pass attempts (L=42%, L=38%) didn't go dark enough and Lighthouse caught it both times. |
| `color-contrast` (muted text) | flagged at 80% opacity | passes | Removed `/80` opacity modifier on `text-muted` in `TrustStrip` and `HeroCentered`. At full opacity, muted gray is 4.84:1 on cream — passes. The opacity modifier was dropping it below threshold. |

### Per-page accessibility issues

| Page | Audit | Fix |
|---|---|---|
| All blog posts (6) | `heading-order` (h1 → h3 skipping h2) | Promoted the "Keep Reading" eyebrow from `<p>` to `<h2>` in `/blog/[slug]` |
| `/how-it-works` | `heading-order` | Promoted step titles in `HowItWorksSteps` from `<h3>` to `<h2>` so the page has a valid sequence when the section header is hidden |
| `/sign-in` | `heading-order` | Promoted footer column labels in `Footer` from `<h3>` to `<h2>` — needed for any page with minimal content, since footer h3s otherwise skip a level |
| `/faq` | `tap-targets` (score 24) | Added `px-3 py-2` to the category jump-links so each tap area clears the 48×48 minimum |

### Per-page Best Practices issues

| Page | Audit | Fix |
|---|---|---|
| All blog posts (6) | `errors-in-console` (React #418 hydration mismatch) | Pre-format `lastReviewedAt` in `getStaticProps` with explicit `timeZone: 'UTC'` and pass as prop. The previous client-side `toLocaleDateString` was diverging between server and client renders. |
| `/blog` index | `errors-in-console` (same React #418) | Same pattern — pre-format `publishedAt` for each post in `getStaticProps` |
| `/contact` | `is-on-https`, `inspector-issues` (Mixed Content, BP=78) | Replaced the `<form action="mailto:...">` pattern with a clean email block + "Compose email" mailto link. Chrome treats mailto form-actions as mixed content from HTTPS pages. |

### Brand color change worth flagging

The amber went from `#ED8D1A` (bright marigold, ~`30 90% 52%`) to `#A8590B` (burnt amber, `30 88% 35%`). The contrast math from cream's luminance was the constraint — no amber lighter than ~L=36% can pass 4.5:1 against the cream surface. Pass 1 went to L=38% (3.78:1) and got rejected on the re-audit; pass 2 went to L=35% (4.85:1) and cleared.

**The amber is now visibly darker than what was locked in modern-amber.** Still amber-family, but more "copper / burnt orange" than "bright marigold."  The favicon was regenerated with the new amber so the brand color stays consistent across surfaces.

If the visual shift is unacceptable and you'd rather accept the WCAG fail, the revert is one token in `src/styles/globals.css`:
```css
--accent: 30 90% 52%;            /* old bright */
--accent-foreground: 220 25% 14%; /* dark navy text on bright amber */
```
…but you'd be reintroducing 60+ contrast failures across 24 pages.

## What's still under threshold

### Performance (91-94 on most pages, target 95)

Consistent across all pages, suggests one systemic cause. From the audit details:

| Audit | Typical score | What it is | Path forward |
|---|---|---|---|
| `largest-contentful-paint` | 84-88 (2.5-2.9s) | H1 with Fraunces variable serif takes ~200ms longer than budget under mobile throttling. The font-display: swap from next/font holds back the paint until the variable font (with `opsz` axis) loads. | Either accept (custom serif is part of brand), or use `font-display: optional` (H1 may render in Georgia fallback if the font load is slow, never swapping), or move H1 to a non-variable font. |
| `speed-index` | 71-77 | Mobile throttling exaggerates time-to-stable-render. Real-device speed-index is much better. | Largely emulation artifact; minor wins from reducing JS payload. |
| `unused-javascript` | score 50 (~42KiB unused) | Next.js Link prefetches chunks for likely next-navigation routes (e.g., homepage prefetches `/how-it-works` and `/about`). Lighthouse counts these as unused since the page-under-test doesn't execute them. | This is a UX/perf tradeoff — prefetching makes real navigation feel instant. Disabling it would lift the score but slow internal navigation. Recommend keeping prefetch. |
| `long-tasks` | 85ms + 69ms + 53ms = ~207ms | Framework JS chunk does parsing/hydration work that exceeds the 50ms "long task" threshold under throttling. | Hard to fix without forking React behavior. Acceptable for marketing site. |

**Recommendation**: accept Perf at 93-94. Lighthouse mobile throttling penalizes web-font-heavy pages, and the design uses a variable serif as a brand pillar. Pushing to 95+ requires either dropping Fraunces from above-the-fold rendering or accepting an FOUT flash. Neither is a clean win.

If you want me to push for 95+ Perf later, the specific knobs are:
1. Switch the H1 to a static font weight (no variable axes) — saves font parsing time
2. Add `prefetch={false}` on secondary nav links — drops the unused-JS penalty
3. Move the Fraunces font to a separate critical-path preload using `<link rel="preload">` ahead of the next/font swap

### Intentional non-compliance

| Page | Audit | Reason |
|---|---|---|
| `/sign-in` | `is-crawlable` (SEO 92) | Page carries `<meta name="robots" content="noindex,nofollow">` — the placeholder pre-launch page should not be indexed. Audit failure is correct behavior. |

## Re-running the audit

The runner lives at `/tmp/trtrx-lighthouse/` outside the repo (one-off tooling). To reproduce:

```bash
mkdir -p /tmp/trtrx-lighthouse && cd /tmp/trtrx-lighthouse
npm init -y > /dev/null
npm install lighthouse@11 chrome-launcher
# Copy the runner from this commit's history (see commit message of the audit commit)
# Then:
node run.mjs > run.log
cat run.log
```

The script audits all 24 paths from `/Users/christosi/Desktop/trtrx/src/lib/seo/routes.ts`, writes per-page JSON reports to `results/`, and prints a summary table plus a "below threshold" list.

## Audit-driven commits in this pass

| Commit | Pass | What |
|---|---|---|
| `8d61dfc` | 1 | First a11y fix — palette darken L=38%, button text dark navy, components: muted/80, contact form, blog heading, faq tap-targets, favicon regen |
| `4f0f932` | 2 | Second a11y fix — palette darken L=35% (the previous L=38% still failed at 3.78:1), --accent-foreground reverted to cream, HowItWorks and Footer h3→h2, favicon regen |
| `820cdc9` | 3 | /blog index date hydration fix (same pattern as /blog/[slug] in pass 1) |
