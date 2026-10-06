import { ARTICLE_CONTENT } from './blog-content';
import { CATEGORY_LABELS, isClinicalBlogSlug } from './blog-metadata';
import { CLINICAL_CONTENT_RELEASED } from './launch';
export { CATEGORY_LABELS, CATEGORY_DESCRIPTIONS, AUTHORS, REVIEWERS, getAuthor, getReviewer, formatEditorialDate } from './blog-metadata';

export type BlogCategory = 'getting-started' | 'protocols' | 'comparisons' | 'side-effects' | 'fertility' | 'pricing' | 'science' | 'lifestyle' | 'state-guides';
export type BlogAuthor = { id: string; name: string; title: string; credentials: string; bio: string; photo: string; sameAs?: string[] };
export type BlogReviewer = { id: string; name: string; title: string; credentials: string; photo: string };
export type BlogPostCitation = {
  id: string; type: 'ScholarlyArticle' | 'MedicalScholarlyArticle' | 'WebPage';
  headline: string; url: string; publisher: string;
  author?: string[]; datePublished?: string; publicationType?: string;
};
export type BlogSection = {
  id: string; title: string; paragraphs: string[]; bullets?: string[];
  table?: { columns: string[]; rows: string[][] }; sourceIds?: string[];
};
export type BlogPost = {
  slug: string; category: BlogCategory; title: string; excerpt: string;
  quickAnswer: string; sections: BlogSection[]; body: string;
  authorId: string; updatedAt: string; readMinutes: number;
  /** Populate only after actual publication or a documented clinical review. */
  publishedAt?: string; reviewerId?: string; lastReviewedAt?: string;
  ogImage?: string; featured?: boolean; onHomePage?: boolean;
  citations: BlogPostCitation[]; relatedSlugs: string[];
  relatedLinks: { label: string; href: string }[];
};
export type BlogPostSummary = Pick<BlogPost, 'slug' | 'category' | 'title' | 'excerpt' | 'readMinutes' | 'updatedAt'>;
export function summarizeBlogPost(post: BlogPost): BlogPostSummary {
  const { slug, category, title, excerpt, readMinutes, updatedAt } = post;
  return { slug, category, title, excerpt, readMinutes, updatedAt };
}
export type ArticleInput = Omit<BlogPost, 'body' | 'readMinutes' | 'authorId' | 'updatedAt'>;
export const BLOG_POSTS: BlogPost[] = ARTICLE_CONTENT.map((post) => {
  const body = [post.quickAnswer, ...post.sections.flatMap((section) => [section.title, ...section.paragraphs, ...(section.bullets ?? []), ...(section.table ? [section.table.columns.join(' '), ...section.table.rows.map((row) => row.join(' '))] : [])])].join('\n\n');
  return { ...post, body, authorId: 'editorial-team', updatedAt: '2026-10-06', readMinutes: Math.max(1, Math.ceil(body.split(/\s+/).filter(Boolean).length / 200)) };
});
export function getBlogPostBySlug(slug: string) { return BLOG_POSTS.find((post) => post.slug === slug); }
export function isBlogPostPublic(post: Pick<BlogPost, 'slug'>): boolean {
  return CLINICAL_CONTENT_RELEASED || !isClinicalBlogSlug(post.slug);
}
/** These publication helpers must also drive sitemaps and machine feeds. */
export function getPublicBlogPosts(): BlogPost[] { return BLOG_POSTS.filter(isBlogPostPublic); }
export function getHomepageBlogPosts() { return getPublicBlogPosts().filter((post) => post.onHomePage).slice(0, 3).map(summarizeBlogPost); }
export function getFeaturedBlogPosts() { return getPublicBlogPosts().filter((post) => post.featured); }
export function getBlogPostsByCategory(): Record<BlogCategory, BlogPost[]> {
  const result = (Object.keys(CATEGORY_LABELS) as BlogCategory[]).reduce((groups, category) => { groups[category] = []; return groups; }, {} as Record<BlogCategory, BlogPost[]>);
  for (const post of BLOG_POSTS) result[post.category].push(post);
  return result;
}
export function getPopulatedBlogCategories(): BlogCategory[] {
  const grouped = getBlogPostsByCategory();
  return (Object.keys(CATEGORY_LABELS) as BlogCategory[]).filter((category) => grouped[category].length > 0);
}
export function getPublicBlogPostsByCategory(): Record<BlogCategory, BlogPost[]> {
  const grouped = getBlogPostsByCategory();
  for (const category of Object.keys(grouped) as BlogCategory[]) grouped[category] = grouped[category].filter(isBlogPostPublic);
  return grouped;
}
export function getPublicBlogCategories(): BlogCategory[] {
  const grouped = getPublicBlogPostsByCategory();
  return (Object.keys(CATEGORY_LABELS) as BlogCategory[]).filter((category) => grouped[category].length > 0);
}
export function getRelatedBlogPosts(slug: string, limit = 3): BlogPost[] {
  const post = getBlogPostBySlug(slug);
  if (!post || !isBlogPostPublic(post)) return [];
  const selected = post.relatedSlugs.map(getBlogPostBySlug).filter((entry): entry is BlogPost => !!entry && isBlogPostPublic(entry));
  const fallback = getPublicBlogPosts().filter((entry) => entry.slug !== slug && !selected.some((item) => item.slug === entry.slug));
  return [...selected, ...fallback].slice(0, limit);
}
