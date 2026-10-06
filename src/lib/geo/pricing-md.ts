import { PRICING_STRUCTURE } from "@/content/pricing";
import { TREATMENTS } from "@/content/treatments";
import { LAUNCH_MESSAGE, PLANNED_CARE_NOTICE, CLINICAL_CONTENT_RELEASED } from "@/content/launch";
import { toAbsoluteUrl } from "@/lib/seo/site";

/** Generated from the same planned price records as the visible pages. */
export function buildPricingMd(): string {
  if (!CLINICAL_CONTENT_RELEASED) return [
    "# TRTrx planned pricing", "", `> ${LAUNCH_MESSAGE} ${PLANNED_CARE_NOTICE}`, "",
    "Standalone plans are being planned at $179 to $219 per month. A separately billed adjunct is planned at an additional $89 per month. Final services, product availability, lab arrangements and payment terms are not confirmed.", "",
    "These figures are planning information, not an active offer. No purchases, subscriptions, prescriptions or payments are available. Patient intake is closed and no state coverage is confirmed.", "",
    "Read the final written estimate, inclusions, extra charges and cancellation terms before purchasing any future service.", "",
    `Visible pricing page: ${toAbsoluteUrl("/pricing")}`,
    `Cost comparison guide: ${toAbsoluteUrl("/blog/how-trt-pricing-works")}`,
    `Current status: ${toAbsoluteUrl("/launch")}`, "",
  ].join("\n");
  return [
    "# TRTrx planned pricing",
    "",
    `> ${LAUNCH_MESSAGE} ${PLANNED_CARE_NOTICE}`,
    "",
    "No purchases, subscriptions, prescriptions or payments are currently available. No state coverage is confirmed. These figures describe plans, not an active offer.",
    "",
    "## Planned monthly amounts",
    "",
    "| Treatment | Planned monthly amount | Basis |",
    "| --- | --- | --- |",
    ...TREATMENTS.map(
      (t) =>
        `| [${t.name}](${toAbsoluteUrl(`/treatments/${t.slug}`)}) | ${t.formFactor === "Adjunct" ? "+" : ""}$${t.monthlyPriceFrom} | ${t.formFactor === "Adjunct" ? "Additional to a base TRT plan; product and availability not confirmed" : "Standalone planned program; clinical suitability required"} |`,
    ),
    "",
    "Standalone plans range from $179 to $219 per month. The planned $89 HCG adjunct is an additional charge, not a standalone plan. An injectable plan plus the adjunct would total $308 per month if clinically appropriate and available.",
    "",
    "## Planned inclusions",
    "",
    ...PRICING_STRUCTURE.whatsIncluded.map((item) => `- ${item}`),
    "",
    "Final clinical, pharmacy, lab and billing arrangements are still being finalized. Two included lab panels per year do not define the monitoring schedule an individual patient may need. Any additional testing and its cost must be clarified before care.",
    "",
    PRICING_STRUCTURE.flatPromise,
    "",
    "The planned model allows cancellation. No refund or treatment-results guarantee is offered. Payment methods, insurance documentation and HSA/FSA eligibility are not confirmed.",
    "",
    `Visible pricing page: ${toAbsoluteUrl("/pricing")}`,
    `Current status: ${toAbsoluteUrl("/launch")}`,
    "",
  ].join("\n");
}
