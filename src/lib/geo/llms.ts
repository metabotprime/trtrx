import {
  getPublicBlogPosts,
  CATEGORY_LABELS,
  getPublicBlogCategories,
  getReviewer,
  hasPublicClinicalArticles,
} from "@/content/blog";
import { FAQS } from "@/content/faqs";
import { TREATMENTS } from "@/content/treatments";
import {
  LAUNCH_MESSAGE,
  PLANNED_CARE_NOTICE,
  PUBLIC_LAUNCH_ENABLED,
  INTAKE_ENABLED,
  CLINICAL_CONTENT_RELEASED,
} from "@/content/launch";
import { SITE_URL, toAbsoluteUrl } from "@/lib/seo/site";
import { buildPricingMd } from "./pricing-md";
import type { BlogPost } from "@/content/blog";

function articleStatus(post: BlogPost): string {
  const reviewer = getReviewer(post.reviewerId);
  return reviewer && post.lastReviewedAt
    ? `Medically reviewed by ${reviewer.name}, ${reviewer.credentials}, on ${post.lastReviewedAt}.`
    : "This is an operational guide.";
}

export function buildLlmsTxt(): string {
  return [
    "# TRTrx",
    "",
    `> ${LAUNCH_MESSAGE}`,
    "",
    PLANNED_CARE_NOTICE,
    "",
    "TRTrx provides educational guides and planned service information. It is not currently accepting patients, providing consultations, prescribing, dispensing or collecting payments in any state.",
    `Public educational launch enabled: ${PUBLIC_LAUNCH_ENABLED}. Clinical intake enabled: ${INTAKE_ENABLED}. These are separate release decisions.`,
    "",
    "## Content status",
    "",
    hasPublicClinicalArticles()
      ? "Operational guides use linked primary sources. Published clinical articles list their reviewer and review date. Treatment guidance outside those articles remains subject to separate review. Editorial update dates are not physician review dates."
      : "Operational guides use linked primary sources. Clinical guidance is withheld pending a completed clinical review. Editorial update dates are not physician review dates. No named clinicians, credentials, testimonials, state coverage, certification or clinical outcomes should be inferred.",
    "This is general information, not personalized medical advice. Pricing is planned, not a purchasable offer.",
    "",
    "## Website information",
    "",
    `- [Launch status](${toAbsoluteUrl("/launch")}): current limits and next steps`,
    `- [Planned pricing](${toAbsoluteUrl("/pricing")}): agreed planning figures and inclusions`,
    `- [State availability guide](${toAbsoluteUrl("/trt-in-your-state")}): coverage unconfirmed; official licensing resources`,
    `- [How care is planned](${toAbsoluteUrl("/how-it-works")})`,
    `- [Editorial policy](${toAbsoluteUrl("/editorial-policy")})`,
    `- [Medical review status](${toAbsoluteUrl("/medical-review-policy")})`,
    `- [Medical disclaimer](${toAbsoluteUrl("/medical-disclaimer")})`,
    "",
    "## Educational topics",
    "",
    ...getPublicBlogCategories().map(
      (category) =>
        `- [${CATEGORY_LABELS[category]}](${toAbsoluteUrl(`/blog/category/${category}`)})`,
    ),
    "",
    "## Articles",
    "",
    ...getPublicBlogPosts().map(
      (post) =>
        `- [${post.title}](${toAbsoluteUrl(`/blog/${post.slug}`)}): ${post.excerpt} Editorial update: ${post.updatedAt}.`,
    ),
    "",
    "## Reference formats",
    "",
    `- [Planned pricing in Markdown](${SITE_URL}/pricing.md)`,
    `- [Full educational reference](${SITE_URL}/llms-full.txt)`,
    `- [Sitemap](${SITE_URL}/sitemap.xml)`,
    "",
  ].join("\n");
}

export function buildLlmsFullTxt(): string {
  return [
    buildLlmsTxt(),
    buildPricingMd(),
    "# Treatment education",
    "",
    ...(CLINICAL_CONTENT_RELEASED ? TREATMENTS.flatMap((t) => [
      `## ${t.name}`,
      toAbsoluteUrl(`/treatments/${t.slug}`),
      t.summary,
      `Form: ${t.formFactor}. Administration: individual prescription. Regulatory context: ${t.fdaStatus}.`,
      `Fertility: ${t.fertilityNote}. No fertility outcome is guaranteed.`,
      "",
    ]) : ["Clinical treatment guidance is withheld pending review.", ""]),
    "# Frequently asked questions",
    "",
    ...(CLINICAL_CONTENT_RELEASED ? FAQS.flatMap((faq) => [`## ${faq.question}`, faq.answer, ""]) : ["Patient intake is closed. State coverage, final services and support contacts are not confirmed.", ""]),
    "# Educational articles",
    "",
    ...getPublicBlogPosts().flatMap((post) => [
      `## ${post.title}`,
      toAbsoluteUrl(`/blog/${post.slug}`),
      `Editorial update: ${post.updatedAt}. ${articleStatus(post)}`,
      "",
      post.body,
      "",
      "Sources:",
      ...post.citations.map(
        (citation) => `- ${citation.headline}: ${citation.url}`,
      ),
      "",
    ]),
  ].join("\n");
}
