import type { BlogCategory, BlogAuthor, BlogReviewer } from './blog';

/** Only this operational guide is approved for publication without a
 * clinical-content release. New articles default to the clinical hold. */
export const OPERATIONAL_BLOG_SLUGS = ['how-trt-pricing-works'] as const;
export function isClinicalBlogSlug(slug: string): boolean {
  return !OPERATIONAL_BLOG_SLUGS.some((operationalSlug) => operationalSlug === slug);
}

export const CATEGORY_LABELS: Record<BlogCategory, string> = {
  'getting-started': 'Getting Started', protocols: 'Treatment Planning',
  comparisons: 'Treatment Comparisons', 'side-effects': 'Safety & Monitoring',
  fertility: 'Fertility', pricing: 'Cost & Care', science: 'Science', lifestyle: 'Lifestyle', 'state-guides': 'State Guides',
};
export const CATEGORY_DESCRIPTIONS: Record<BlogCategory, string> = {
  'getting-started': 'Understand symptoms, blood tests, diagnosis, and the questions to ask before considering testosterone treatment.',
  protocols: 'Understand how a prescriber approaches treatment plans, follow-up, and changes. These guides do not provide dosing instructions.',
  comparisons: 'Compare formulations by their practical differences, product labeling, and questions for your prescriber.',
  'side-effects': 'Learn why care includes symptom review, blood tests, blood pressure, and an individualized monitoring plan.',
  fertility: 'Explore how testosterone treatment can affect sperm production and why family-building plans belong in the first clinical conversation.',
  pricing: 'Compare written estimates, included services, payment terms, and the care behind a monthly price.',
  science: 'Understand testosterone research and the limits of the available evidence.',
  lifestyle: 'Understand the wider health context around testosterone and symptoms.',
  'state-guides': 'Find resources about state-specific requirements and how to check availability.',
};
export const AUTHORS: BlogAuthor[] = [{ id: 'editorial-team', name: 'TRTrx Editorial Team', title: 'Editorial', credentials: '', photo: '', bio: 'TRTrx prepares educational articles using linked medical and government sources. An editorial update is not a clinical review. Each article shows its review status.' }];
// Never add a reviewer without verified credentials and a completed review
// of the specific article version. No placeholder names or organizations.
export const REVIEWERS: BlogReviewer[] = [];
export function getAuthor(id: string) { return AUTHORS.find((author) => author.id === id); }
export function getReviewer(id?: string) { return id ? REVIEWERS.find((reviewer) => reviewer.id === id) : undefined; }
export function formatEditorialDate(date: string): string {
  return new Date(`${date}T12:00:00Z`).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric', timeZone: 'UTC' });
}
