import { TREATMENTS, type Treatment } from './treatments';

export type PricingTier = {
  productSlug: Treatment['slug'];
  productName: string;
  monthlyPrice: number;
};

export const PRICING_STRUCTURE = {
  // Headline price for the homepage moat block — anchor to the standard TRT (cypionate).
  headlineMonthly: 219,
  // Range for "from $X" copy.
  monthlyRange: { low: 89, high: 219 },
  // The promise that beats Hone's hidden split and TRTNation's bait-and-switch.
  flatPromise: '$219 first month. $219 every month. No setup fee. No hidden membership.',
  monthlyTiers: TREATMENTS.map((t) => ({
    productSlug: t.slug,
    productName: t.name,
    monthlyPrice: t.monthlyPriceFrom,
  })) satisfies PricingTier[],
  whatsIncluded: [
    'Medication',
    'Ongoing physician supervision',
    '24/7 patient portal — message your doctor anytime',
    'Two lab panels per year (Quest / Labcorp)',
    'Free shipping (always)',
    'Cancel anytime',
    '30-day satisfaction guarantee',
  ],
} as const;
