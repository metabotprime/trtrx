import { TREATMENTS, type Treatment } from './treatments';

export type PricingLineItem = {
  label: string;
  amount: number;
};

export type PricingTier = {
  productSlug: Treatment['slug'];
  productName: string;
  monthlyPrice: number;
};

export const PRICING_STRUCTURE = {
  initialMonth: {
    total: 189,
    lineItems: [
      { label: 'Initial labs', amount: 65 },
      { label: 'Physician consult', amount: 25 },
      { label: 'First vial + supplies', amount: 99 },
      { label: 'Free shipping', amount: 0 },
    ] satisfies readonly PricingLineItem[],
    note: 'Billed once after your video consult.',
  },
  monthlyTiers: TREATMENTS.map((t) => ({
    productSlug: t.slug,
    productName: t.name,
    monthlyPrice: t.monthlyPriceFrom,
  })) satisfies PricingTier[],
  whatsIncluded: [
    'Medication',
    'Ongoing physician supervision',
    'Two labs per year',
    'Free shipping (always)',
    'Cancel anytime',
  ],
} as const;
