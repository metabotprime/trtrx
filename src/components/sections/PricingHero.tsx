import Link from 'next/link';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { formatUSD } from '@/lib/utils';
import { PRICING_STRUCTURE } from '@/content/pricing';

const RECEIPT_LINES = PRICING_STRUCTURE.whatsIncluded.slice(0, 5);

export function PricingHero() {
  return (
    <section className="relative overflow-hidden bg-surface">
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent"
      />
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div
          className="absolute right-[6%] top-1/2 -translate-y-1/2"
          style={{
            width: 580,
            height: 580,
            background:
              'radial-gradient(closest-side, hsl(45 95% 55% / 0.10), transparent 70%)',
          }}
        />
      </div>

      <div className="container max-w-6xl px-5 py-16 md:py-20 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* LEFT — copy */}
          <div className="text-center lg:text-left">
            <p className="eyebrow mb-7 inline-flex flex-wrap justify-center gap-x-3 gap-y-1 lg:justify-start">
              <span>Transparent Pricing</span>
              <span aria-hidden className="text-muted/60">·</span>
              <span>No Insurance Required</span>
              <span aria-hidden className="text-muted/60">·</span>
              <span>FSA-Eligible</span>
            </p>

            <h1
              className="font-serif text-display-xl font-medium leading-[1.02] text-primary"
              style={{ fontVariationSettings: "'opsz' 144" }}
            >
              One price.{' '}
              <span className="display-italic text-primary">No surprises.</span>
            </h1>

            <p className="mx-auto mt-6 max-w-xl text-lg leading-[1.55] text-muted md:text-xl lg:mx-0">
              Flat monthly billing. The number you see is the number you pay — no
              hidden membership fees stacked on top of medication.
            </p>

            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4 lg:justify-start">
              <Link href="/how-it-works">
                <Button size="md">Get Started</Button>
              </Link>
              <Link href="/treatments">
                <Button size="md" variant="outline">
                  Compare Treatments
                </Button>
              </Link>
            </div>
          </div>

          {/* RIGHT — all-in receipt artifact */}
          <div className="relative">
            <div className="mx-auto max-w-md rounded-3xl border border-border bg-surface p-7 shadow-[0_24px_70px_-24px_hsl(215_60%_28%/0.22)] md:p-8">
              <div className="flex items-center justify-between">
                <p className="font-mono text-[11px] uppercase tracking-tracked text-muted">
                  Standard TRT
                </p>
                <span className="inline-flex items-center rounded-full bg-accent/15 px-2.5 py-1 text-[10px] font-medium uppercase tracking-tracked text-accent-strong">
                  All-inclusive
                </span>
              </div>

              <div className="mt-5 flex items-end gap-2">
                <span
                  className="font-serif text-[64px] leading-none text-primary"
                  style={{ fontVariationSettings: "'opsz' 144" }}
                >
                  {formatUSD(PRICING_STRUCTURE.headlineMonthly)}
                </span>
                <span className="mb-2 font-mono text-xs uppercase tracking-tracked text-muted">
                  / month
                </span>
              </div>

              <ul className="mt-6 space-y-3 border-t border-border pt-5 text-sm">
                {RECEIPT_LINES.map((line) => (
                  <li key={line} className="flex items-center justify-between gap-4">
                    <span className="flex items-center gap-2.5 text-text">
                      <Check size={15} strokeWidth={2.5} className="shrink-0 text-accent-strong" aria-hidden />
                      {line.split(' — ')[0]}
                    </span>
                    <span className="font-mono text-[11px] uppercase tracking-tracked text-muted">
                      Included
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-5 space-y-2 border-t border-border pt-5 font-mono text-[11px] uppercase tracking-tracked">
                <div className="flex items-center justify-between">
                  <span className="text-muted">Setup fee</span>
                  <span className="text-primary">$0</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted">Membership</span>
                  <span className="text-primary">$0</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted">Hidden fees</span>
                  <span className="text-primary">$0</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
