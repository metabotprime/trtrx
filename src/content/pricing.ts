import { TREATMENTS, type Treatment } from "./treatments";

export type PricingTier = {
  productSlug: Treatment["slug"];
  productName: string;
  monthlyPrice: number;
};

export const PRICING_STRUCTURE = {
  // Headline price for the homepage moat block — anchor to the standard TRT (cypionate).
  headlineMonthly: 219,
  // Range for "from $X" copy.
  monthlyRange: { low: 179, high: 219 },
  // Planned standard injectable pricing, not an available purchase offer.
  flatPromise:
    "Planned: $219 first month. $219 every month. No setup fee. No separate membership.",
  monthlyTiers: TREATMENTS.map((t) => ({
    productSlug: t.slug,
    productName: t.name,
    monthlyPrice: t.monthlyPriceFrom,
  })) satisfies PricingTier[],
  whatsIncluded: [
    "Medication",
    "Ongoing physician supervision",
    "Patient portal and messaging (planned)",
    "Two lab panels per year (partners to be confirmed)",
    "Shipping",
    "Cancel anytime",
  ],
} as const;
