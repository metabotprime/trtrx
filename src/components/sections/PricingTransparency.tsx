import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { PRICING_STRUCTURE } from '@/content/pricing';
import { formatUSD } from '@/lib/utils';

export function PricingTransparency() {
  const { initialMonth } = PRICING_STRUCTURE;

  return (
    <section className="bg-surface-alt">
      <div className="container py-20 md:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow mb-5">Transparent Pricing</p>

          <h2
            className="font-serif text-display-lg font-medium leading-[1.05] text-primary"
            style={{ fontVariationSettings: "'opsz' 144" }}
          >
            Your first month,{' '}
            <span className="display-italic text-primary">all in.</span>
          </h2>

          <p className="mx-auto mt-5 max-w-md text-base leading-[1.6] text-muted md:text-lg">
            One number. No hidden upcharges. No insurance hoops.
          </p>
        </div>

        {/* The card */}
        <div className="mx-auto mt-12 max-w-xl rounded-2xl border border-border bg-surface p-8 shadow-sm md:p-10">
          {/* Big total */}
          <div className="flex items-baseline gap-3">
            <span
              className="font-serif text-[clamp(3rem,6vw+1rem,4.5rem)] font-medium leading-none text-accent"
              style={{ fontVariationSettings: "'opsz' 144" }}
            >
              {formatUSD(initialMonth.total)}
            </span>
            <span className="font-mono text-eyebrow uppercase tracking-tracked text-muted">
              / first month
            </span>
          </div>

          <hr className="my-6 border-border" />

          {/* Line items */}
          <ul className="space-y-3 font-mono text-sm">
            {initialMonth.lineItems.map((item) => (
              <li
                key={item.label}
                className="flex items-baseline justify-between gap-4 text-text"
              >
                <span className="text-text">{item.label}</span>
                <span className="tabular-nums text-text">
                  {item.amount === 0 ? 'Free' : formatUSD(item.amount)}
                </span>
              </li>
            ))}
          </ul>

          <hr className="my-6 border-border" />

          {/* Billed today */}
          <div className="flex items-baseline justify-between gap-4">
            <span className="font-mono text-sm uppercase tracking-tracked text-muted">
              Billed today
            </span>
            <span className="font-serif text-2xl font-medium text-primary tabular-nums">
              {formatUSD(initialMonth.total)}
            </span>
          </div>
        </div>

        {/* Caption + CTA */}
        <p className="mx-auto mt-8 max-w-md text-center text-sm leading-relaxed text-muted">
          After month one, {formatUSD(129)}&ndash;{formatUSD(149)}/mo all-inclusive depending on your protocol. Cancel anytime. FSA-eligible.
        </p>

        <div className="mt-6 flex justify-center">
          <Link
            href="/pricing"
            className="group inline-flex items-center gap-2 text-sm font-medium text-primary underline-offset-4 transition-colors hover:text-accent"
          >
            See full pricing
            <ArrowRight
              size={14}
              className="transition-transform duration-150 group-hover:translate-x-0.5"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
