export type PricingLineItem = {
  label: string;
  amount: number; // 0 means "Free"
};

export type PricingTier = {
  productSlug: string; // matches Treatment.slug
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
    ] as PricingLineItem[],
    note: 'Billed once after your video consult.',
  },
  monthlyTiers: [
    { productSlug: 'cypionate', productName: 'Testosterone Cypionate', monthlyPrice: 129 },
    { productSlug: 'enanthate', productName: 'Testosterone Enanthate', monthlyPrice: 129 },
    { productSlug: 'enclomiphene', productName: 'Enclomiphene', monthlyPrice: 99 },
    { productSlug: 'hcg', productName: 'HCG (adjunct)', monthlyPrice: 109 },
    { productSlug: 'cream', productName: 'Topical Cream', monthlyPrice: 129 },
  ] as PricingTier[],
  whatsIncluded: [
    'Medication',
    'Ongoing physician supervision',
    'Two labs per year',
    'Free shipping (always)',
    'Cancel anytime',
  ],
} as const;

export function formatPrice(n: number): string {
  return `$${Math.round(n).toLocaleString('en-US')}`;
}
