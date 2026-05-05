/**
 * Single source of truth for sitemap + nav generation.
 * Adding/removing a route here updates sitemap.xml automatically.
 */

import { BLOG_POSTS } from '@/content/blog';

export type RouteEntry = {
  path: string;
  changeFreq: 'daily' | 'weekly' | 'monthly' | 'yearly';
  priority: number;
  inSitemap: boolean;
};

export const TREATMENT_SLUGS = [
  'cypionate',
  'enanthate',
  'enclomiphene',
  'hcg',
  'cream',
] as const;

export type TreatmentSlug = (typeof TREATMENT_SLUGS)[number];

export const ROUTES: RouteEntry[] = [
  { path: '/', changeFreq: 'weekly', priority: 1.0, inSitemap: true },
  { path: '/treatments', changeFreq: 'weekly', priority: 0.95, inSitemap: true },
  ...TREATMENT_SLUGS.map((slug) => ({
    path: `/treatments/${slug}`,
    changeFreq: 'monthly' as const,
    priority: 0.9,
    inSitemap: true,
  })),
  { path: '/how-it-works', changeFreq: 'monthly', priority: 0.85, inSitemap: true },
  { path: '/pricing', changeFreq: 'weekly', priority: 0.95, inSitemap: true },
  { path: '/about', changeFreq: 'monthly', priority: 0.7, inSitemap: true },
  { path: '/faq', changeFreq: 'monthly', priority: 0.75, inSitemap: true },
  { path: '/blog', changeFreq: 'daily', priority: 0.8, inSitemap: true },
  ...BLOG_POSTS.map((p) => ({
    path: `/blog/${p.slug}`,
    changeFreq: 'monthly' as const,
    priority: 0.7,
    inSitemap: true,
  })),
  { path: '/contact', changeFreq: 'yearly', priority: 0.5, inSitemap: true },
  { path: '/privacy', changeFreq: 'yearly', priority: 0.3, inSitemap: true },
  { path: '/terms', changeFreq: 'yearly', priority: 0.3, inSitemap: true },
  { path: '/accessibility', changeFreq: 'yearly', priority: 0.3, inSitemap: true },
  { path: '/medical-disclaimer', changeFreq: 'yearly', priority: 0.3, inSitemap: true },
];

export const NAV_ITEMS: { label: string; href: string }[] = [
  { label: 'Treatments', href: '/treatments' },
  { label: 'How It Works', href: '/how-it-works' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'About', href: '/about' },
];
