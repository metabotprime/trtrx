/**
 * Blog slugs that should render with `<meta name="robots" content="noindex, nofollow">`
 * AND be excluded from the sitemap.
 *
 * Mirrors the pattern in trytrimi-ref. Use this registry whenever a post:
 *
 * - Is an editorial outline / scratch draft that escaped to main accidentally
 * - Contains TBD / placeholder data in tables or body sections
 * - Is referenced in BLOG_POSTS but missing its corresponding rendered content
 * - Has been auto-flagged by a cannibalization audit as a templated cluster
 *   competing with stronger pages for the same SERP
 * - Is suffering content decay (low GSC impressions over 28+ days) and is being
 *   actively pruned to free crawl budget for the rest of the site
 *
 * Pages on this list stay accessible to direct visitors (PPC, internal links,
 * email) but Google is told not to index them. Re-run the relevant audit
 * monthly to refresh.
 *
 * For now the registry is empty — none of the 6 launch posts qualify. The
 * infrastructure exists so when content scale grows past ~30 posts and the
 * audits start surfacing pages, we have one place to flag them.
 */

export const NOINDEX_BLOG_SLUGS: ReadonlySet<string> = new Set([
  // Example shapes for future entries:
  // 'editorial-outline-slug',
  // 'tbd-placeholder-slug',
  // 'dead-thin-content-slug',
]);

export function isNoindexBlogSlug(slug: string): boolean {
  return NOINDEX_BLOG_SLUGS.has(slug);
}
