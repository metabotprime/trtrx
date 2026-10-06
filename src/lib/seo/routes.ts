/**
 * Single source of truth for sitemap + nav generation.
 * Adding/removing a route here updates sitemap.xml automatically.
 */

import { BLOG_POSTS, getPublicBlogCategories } from "@/content/blog";
import { CLINICAL_CONTENT_RELEASED } from "@/content/launch";
import { isNoindexBlogSlug } from "./noindex-slugs";

export type RouteEntry = {
  path: string;
  changeFreq: "daily" | "weekly" | "monthly" | "yearly";
  priority: number;
  inSitemap: boolean;
  lastModified?: string;
};

export const TREATMENT_SLUGS = [
  "cypionate",
  "enanthate",
  "enclomiphene",
  "hcg",
  "cream",
] as const;

export type TreatmentSlug = (typeof TREATMENT_SLUGS)[number];

export const ROUTES: RouteEntry[] = [
  { path: "/", changeFreq: "weekly", priority: 1.0, inSitemap: true },
  {
    path: "/treatments",
    changeFreq: "weekly",
    priority: 0.95,
    inSitemap: CLINICAL_CONTENT_RELEASED,
  },
  ...TREATMENT_SLUGS.map((slug) => ({
    path: `/treatments/${slug}`,
    changeFreq: "monthly" as const,
    priority: 0.9,
    inSitemap: CLINICAL_CONTENT_RELEASED,
  })),
  {
    path: "/how-it-works",
    changeFreq: "monthly",
    priority: 0.85,
    inSitemap: true,
  },
  { path: "/pricing", changeFreq: "weekly", priority: 0.95, inSitemap: true },
  { path: "/about", changeFreq: "monthly", priority: 0.7, inSitemap: true },
  { path: "/faq", changeFreq: "monthly", priority: 0.75, inSitemap: true },
  { path: "/blog", changeFreq: "weekly", priority: 0.8, inSitemap: true },
  { path: "/launch", changeFreq: "monthly", priority: 0.5, inSitemap: false },
  {
    path: "/trt-in-your-state",
    changeFreq: "monthly",
    priority: 0.7,
    inSitemap: true,
  },
  ...getPublicBlogCategories().map((category) => ({
    path: `/blog/category/${category}`,
    changeFreq: "monthly" as const,
    priority: 0.6,
    inSitemap: true,
  })),
  ...BLOG_POSTS.map((p) => ({
    path: `/blog/${p.slug}`,
    changeFreq: "monthly" as const,
    priority: 0.7,
    lastModified: p.updatedAt,
    // Held articles render a status page, never their clinical source.
    inSitemap: !isNoindexBlogSlug(p.slug),
  })),
  { path: "/contact", changeFreq: "yearly", priority: 0.5, inSitemap: true },
  { path: "/privacy", changeFreq: "yearly", priority: 0.3, inSitemap: true },
  { path: "/terms", changeFreq: "yearly", priority: 0.3, inSitemap: true },
  {
    path: "/accessibility",
    changeFreq: "yearly",
    priority: 0.3,
    inSitemap: true,
  },
  {
    path: "/medical-disclaimer",
    changeFreq: "yearly",
    priority: 0.3,
    inSitemap: true,
  },
  {
    path: "/editorial-policy",
    changeFreq: "yearly",
    priority: 0.4,
    inSitemap: true,
  },
  {
    path: "/medical-review-policy",
    changeFreq: "yearly",
    priority: 0.4,
    inSitemap: true,
  },
];
