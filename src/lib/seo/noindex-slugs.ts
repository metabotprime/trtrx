import { getBlogPostBySlug, isBlogPostPublic } from "@/content/blog";

/** Clinical publication and public indexing are independent release gates. */
export function isNoindexBlogSlug(slug: string): boolean {
  const post = getBlogPostBySlug(slug);
  return !post || !isBlogPostPublic(post);
}
