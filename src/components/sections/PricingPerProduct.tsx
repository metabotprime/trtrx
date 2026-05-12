import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { PRICING_STRUCTURE } from '@/content/pricing';
import { TREATMENTS } from '@/content/treatments';
import { formatUSD } from '@/lib/utils';
import { SectionHeader } from './SectionHeader';

export function PricingPerProduct() {
  const tiers = PRICING_STRUCTURE.monthlyTiers;

  return (
    <section className="bg-surface">
      <div className="container py-20 md:py-28">
        <SectionHeader
          eyebrow="By Treatment"
          title="What each *protocol costs.*"
          subtitle="HCG is an adjunct — added on top of a base TRT subscription, not used alone."
          align="center"
        />

        <ul className="mx-auto mt-12 max-w-3xl divide-y divide-border border-y border-border">
          {tiers.map((tier) => {
            const treatment = TREATMENTS.find((t) => t.slug === tier.productSlug);
            return (
              <li key={tier.productSlug}>
                <Link
                  href={`/treatments/${tier.productSlug}`}
                  className="group flex items-center justify-between gap-6 py-6 transition-colors"
                >
                  <div>
                    <p
                      className="font-serif text-xl font-medium text-primary group-hover:text-accent-strong transition-colors"
                      style={{ fontVariationSettings: "'opsz' 144" }}
                    >
                      {tier.productName}
                    </p>
                    {treatment && (
                      <p className="mt-1 font-mono text-[11px] uppercase tracking-tracked text-muted">
                        {treatment.formFactor} · {treatment.frequency}
                      </p>
                    )}
                  </div>
                  <div className="flex items-center gap-4">
                    <span
                      className="font-serif text-2xl font-medium text-accent-strong tabular-nums"
                      style={{ fontVariationSettings: "'opsz' 144" }}
                    >
                      {formatUSD(tier.monthlyPrice)}
                    </span>
                    <ArrowRight
                      size={16}
                      strokeWidth={2}
                      className="text-muted transition-all duration-150 group-hover:translate-x-0.5 group-hover:text-accent-strong"
                      aria-hidden
                    />
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
