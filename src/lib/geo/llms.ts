import {
  BLOG_POSTS,
  CATEGORY_LABELS,
  getPopulatedBlogCategories,
} from "@/content/blog";
import { FAQS } from "@/content/faqs";
import { TREATMENTS } from "@/content/treatments";
import {
  LAUNCH_MESSAGE,
  PLANNED_CARE_NOTICE,
  PUBLIC_LAUNCH_ENABLED,
  INTAKE_ENABLED,
} from "@/content/launch";
import { SITE_URL, toAbsoluteUrl } from "@/lib/seo/site";
import { buildPricingMd } from "./pricing-md";
import { isNoindexBlogSlug } from "@/lib/seo/noindex-slugs";

const publicPosts = () =>
  BLOG_POSTS.filter((post) => !isNoindexBlogSlug(post.slug));

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
    "Articles use linked primary sources. Clinical review has not been completed. Editorial update dates are not physician review dates. No named clinicians, credentials, testimonials, state coverage, certification or clinical outcomes should be inferred.",
    "This is general education, not personalized medical advice. Pricing is planned, not a purchasable offer. Compounded drugs are not FDA-approved and should not be assumed equivalent to approved products.",
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
    ...getPopulatedBlogCategories().map(
      (category) =>
        `- [${CATEGORY_LABELS[category]}](${toAbsoluteUrl(`/blog/category/${category}`)})`,
    ),
    "",
    "## Articles",
    "",
    ...publicPosts().map(
      (post) =>
        `- [${post.title}](${toAbsoluteUrl(`/blog/${post.slug}`)}): ${post.excerpt} Editorial update: ${post.updatedAt}; clinical review pending.`,
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
    ...TREATMENTS.flatMap((t) => [
      `## ${t.name}`,
      toAbsoluteUrl(`/treatments/${t.slug}`),
      t.summary,
      `Form: ${t.formFactor}. Administration: individual prescription. Regulatory context: ${t.fdaStatus}.`,
      `Fertility: ${t.fertilityNote}. No fertility outcome is guaranteed.`,
      "",
    ]),
    "# Frequently asked questions",
    "",
    ...FAQS.flatMap((faq) => [`## ${faq.question}`, faq.answer, ""]),
    "# Educational articles",
    "",
    ...publicPosts().flatMap((post) => [
      `## ${post.title}`,
      toAbsoluteUrl(`/blog/${post.slug}`),
      `Editorial update: ${post.updatedAt}. Clinical review has not been completed.`,
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
