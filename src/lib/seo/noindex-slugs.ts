import { CLINICAL_CONTENT_RELEASED } from "@/content/launch";
import { isClinicalBlogSlug } from "@/content/blog-metadata";

/** Clinical publication and public indexing are independent release gates. */
export function isNoindexBlogSlug(slug: string): boolean {
  return !CLINICAL_CONTENT_RELEASED && isClinicalBlogSlug(slug);
}
