import { Check } from 'lucide-react';
import { PRICING_STRUCTURE } from '@/content/pricing';
import { formatUSD } from '@/lib/utils';
import { SectionHeader } from './SectionHeader';

export function PricingBreakdown() {
  const { initialMonth, monthlyTiers, whatsIncluded } = PRICING_STRUCTURE;
  const lowestTier = Math.min(...monthlyTiers.map((t) => t.monthlyPrice));
  const highestTier = Math.max(...monthlyTiers.map((t) => t.monthlyPrice));
  const annualLow = initialMonth.total + lowestTier * 11;
  const annualHigh = initialMonth.total + highestTier * 11;

  return (
    <section className="bg-surface-alt">
      <div className="container py-20 md:py-28">
        <SectionHeader
          eyebrow="The Math"
          title="Three views. *Same numbers.*"
          subtitle="Whether you’re looking at month one, ongoing supply, or your year-one total — every line is itemized below."
          align="center"
        />

        <div className="mx-auto mt-14 grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-3 md:gap-7">
          {/* First month */}
          <article className="flex flex-col rounded-2xl border border-border bg-surface p-8">
            <p className="font-mono text-[11px] uppercase tracking-tracked text-accent">
              First Month
            </p>
            <p
              className="mt-3 font-serif text-5xl font-medium text-primary"
              style={{ fontVariationSettings: "'opsz' 144" }}
            >
              {formatUSD(initialMonth.total)}
            </p>
            <p className="mt-1 text-xs text-muted">{initialMonth.note}</p>
            <hr className="my-6 border-border" />
            <ul className="space-y-3 font-mono text-sm text-text">
              {initialMonth.lineItems.map((item) => (
                <li key={item.label} className="flex items-baseline justify-between gap-3">
                  <span className="text-muted">{item.label}</span>
                  <span className="tabular-nums">
                    {item.amount === 0 ? 'Free' : formatUSD(item.amount)}
                  </span>
                </li>
              ))}
            </ul>
          </article>

          {/* Standard monthly */}
          <article className="flex flex-col rounded-2xl border border-border bg-surface p-8">
            <p className="font-mono text-[11px] uppercase tracking-tracked text-accent">
              Standard Monthly
            </p>
            <p
              className="mt-3 font-serif text-5xl font-medium text-primary"
              style={{ fontVariationSettings: "'opsz' 144" }}
            >
              {formatUSD(lowestTier)}–{formatUSD(highestTier)}
            </p>
            <p className="mt-1 text-xs text-muted">Depends on your protocol.</p>
            <hr className="my-6 border-border" />
            <ul className="space-y-3 font-mono text-sm text-text">
              {monthlyTiers.map((tier) => (
                <li key={tier.productSlug} className="flex items-baseline justify-between gap-3">
                  <span className="text-muted">{tier.productName}</span>
                  <span className="tabular-nums">{formatUSD(tier.monthlyPrice)}</span>
                </li>
              ))}
            </ul>
          </article>

          {/* Annual view */}
          <article className="flex flex-col rounded-2xl border border-border bg-surface p-8">
            <p className="font-mono text-[11px] uppercase tracking-tracked text-accent">
              Year One
            </p>
            <p
              className="mt-3 font-serif text-5xl font-medium text-primary"
              style={{ fontVariationSettings: "'opsz' 144" }}
            >
              {formatUSD(annualLow)}–{formatUSD(annualHigh)}
            </p>
            <p className="mt-1 text-xs text-muted">First month + 11 ongoing months.</p>
            <hr className="my-6 border-border" />
            <ul className="space-y-3 text-sm text-text">
              {whatsIncluded.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Check
                    size={16}
                    strokeWidth={2.5}
                    className="mt-[3px] shrink-0 text-accent"
                    aria-hidden
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>

        <p className="mx-auto mt-10 max-w-md text-center text-sm leading-relaxed text-muted">
          FSA-eligible where applicable. No insurance required. Cancel anytime.
        </p>
      </div>
    </section>
  );
}
