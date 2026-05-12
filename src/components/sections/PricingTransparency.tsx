import Link from 'next/link';
import { ArrowRight, Check } from 'lucide-react';
import { PRICING_STRUCTURE } from '@/content/pricing';
import { formatUSD } from '@/lib/utils';

export function PricingTransparency() {
  const { headlineMonthly, monthlyRange, flatPromise, whatsIncluded } = PRICING_STRUCTURE;

  return (
    <section className="bg-surface-alt">
      <div className="container py-20 md:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow mb-5">Transparent Pricing</p>

          <h2
            className="font-serif text-display-lg font-medium leading-[1.05] text-primary"
            style={{ fontVariationSettings: "'opsz' 144" }}
          >
            Your monthly price,{' '}
            <span className="display-italic text-primary">all in.</span>
          </h2>

          <p className="mx-auto mt-5 max-w-md text-base leading-[1.6] text-muted md:text-lg">
            One flat number. The price you see is the price you pay — first month and every month after.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-xl rounded-2xl border border-border bg-surface p-8 text-center shadow-sm md:p-10">
          <div className="flex items-baseline justify-center gap-2">
            <span
              className="font-serif text-[clamp(3rem,6vw+1rem,4.5rem)] font-medium leading-none text-accent-strong"
              style={{ fontVariationSettings: "'opsz' 144" }}
            >
              {formatUSD(headlineMonthly)}
            </span>
            <span className="font-mono text-eyebrow uppercase tracking-tracked text-muted">
              / month
            </span>
          </div>

          <p className="mt-3 font-mono text-[11px] uppercase tracking-tracked text-muted">
            From {formatUSD(monthlyRange.low)} (HCG adjunct) to {formatUSD(monthlyRange.high)} (standard TRT)
          </p>

          <hr className="my-7 border-border" />

          <ul className="space-y-3 text-left text-sm text-text">
            {whatsIncluded.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <Check
                  size={16}
                  strokeWidth={2.5}
                  className="mt-[3px] shrink-0 text-accent-strong"
                  aria-hidden
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <hr className="my-7 border-border" />

          <p className="font-serif text-base italic leading-snug text-primary md:text-lg">
            {flatPromise}
          </p>
        </div>

        <div className="mt-8 flex justify-center">
          <Link
            href="/pricing"
            className="group inline-flex items-center gap-2 text-sm font-medium text-primary underline-offset-4 transition-colors hover:text-accent-strong"
          >
            See per-product pricing
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
