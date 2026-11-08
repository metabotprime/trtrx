import { createHash } from 'node:crypto';
import { ARTICLE_CONTENT } from './blog-content';
import { CATEGORY_LABELS, getReviewer, isClinicalBlogSlug } from './blog-metadata';
import clinicalArticleReviews from './clinical-article-reviews.json';
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
export type ArticleInput = Omit<BlogPost, 'body' | 'readMinutes' | 'authorId' | 'updatedAt' | 'reviewerId' | 'lastReviewedAt'> & {
  updatedAt?: string;
};
type ClinicalArticleReview = { slug: string; contentSha256: string; reviewerId: string; reviewedAt: string };
const reviews: readonly ClinicalArticleReview[] = clinicalArticleReviews;
const reviewsBySlug = new Map(reviews.map((review) => [review.slug, review]));
if (reviewsBySlug.size !== reviews.length) throw new Error('Duplicate clinical article review');

const approvedClinicalSlugs = new Set<string>();
export const BLOG_POSTS: BlogPost[] = ARTICLE_CONTENT.map((post): BlogPost => {
  const body = [post.quickAnswer, ...post.sections.flatMap((section) => [section.title, ...section.paragraphs, ...(section.bullets ?? []), ...(section.table ? [section.table.columns.join(' '), ...section.table.rows.map((row) => row.join(' '))] : [])])].join('\n\n');
  const article = { ...post, body, authorId: 'editorial-team', updatedAt: post.updatedAt ?? '2026-10-06', readMinutes: Math.max(1, Math.ceil(body.split(/\s+/).filter(Boolean).length / 200)) };
  const review = reviewsBySlug.get(article.slug);
  if (!review) return article;

  const date = new Date(`${review.reviewedAt}T00:00:00Z`);
  const reviewer = getReviewer(review.reviewerId);
  const sha256 = createHash('sha256').update(JSON.stringify(article)).digest('hex');
  if (!isClinicalBlogSlug(article.slug) || !reviewer?.credentials ||
      !/^\d{4}-\d{2}-\d{2}$/.test(review.reviewedAt) || Number.isNaN(date.valueOf()) ||
      date.toISOString().slice(0, 10) !== review.reviewedAt || sha256 !== review.contentSha256) {
    throw new Error(`Invalid or stale clinical review for ${article.slug}`);
  }
  approvedClinicalSlugs.add(article.slug);
  return { ...article, reviewerId: review.reviewerId, lastReviewedAt: review.reviewedAt };
});
if (approvedClinicalSlugs.size !== reviews.length) throw new Error('Clinical review references an unknown article');

export function getBlogPostBySlug(slug: string) { return BLOG_POSTS.find((post) => post.slug === slug); }
export function isBlogPostPublic(post: Pick<BlogPost, 'slug'>): boolean {
  return !isClinicalBlogSlug(post.slug) || approvedClinicalSlugs.has(post.slug);
}
export function hasPublicClinicalArticles(): boolean { return approvedClinicalSlugs.size > 0; }
/** These publication helpers must also drive sitemaps and machine feeds. */
export function getPublicBlogPosts(): BlogPost[] { return BLOG_POSTS.filter(isBlogPostPublic); }
export function getHomepageBlogPosts() {
  const slugs = ['how-trt-pricing-works', 'choosing-online-trt-provider', 'testosterone-replacement-therapy-guide'];
  const publicPosts = getPublicBlogPosts();
  return slugs.flatMap((slug) => {
    const post = publicPosts.find((entry) => entry.slug === slug);
    return post ? [summarizeBlogPost(post)] : [];
  });
}
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
  for (const category of Object.keys(grouped) as BlogCategory[]) {
    // Category introductions are separate clinical surfaces with their own hold.
    grouped[category] = CLINICAL_CONTENT_RELEASED || category === 'pricing'
      ? grouped[category].filter(isBlogPostPublic)
      : [];
  }
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
