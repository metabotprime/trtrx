/** Individually withheld routes are excluded from sitemap and emit noindex,follow.
 * Global prelaunch noindex is controlled separately in content/launch.ts.
 * Substantive educational articles remain served and in the review sitemap.
 */
export const NOINDEX_BLOG_SLUGS: ReadonlySet<string> = new Set();
export function isNoindexBlogSlug(slug: string): boolean {
  return NOINDEX_BLOG_SLUGS.has(slug);
}
