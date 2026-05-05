import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { type Treatment } from '@/content/treatments';
import { formatUSD } from '@/lib/utils';

type Props = { treatment: Treatment };

const FDA_LABEL: Record<string, string> = {
  'FDA-approved': 'FDA-Approved',
  'Compounded': 'Compounded',
  'Both available': 'FDA + Compounded',
};

export function ProductHero({ treatment }: Props) {
  const heading = treatment.headline ?? treatment.name;
  const headingParts = heading.split(' ');
  const lastWord = headingParts.pop() ?? heading;
  const leading = headingParts.join(' ');

  return (
    <section className="bg-surface">
      <div className="container py-16 md:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Text */}
          <div className="lg:col-span-7">
            <p className="font-mono text-[11px] uppercase tracking-tracked text-accent">
              {treatment.formFactor} · {treatment.frequency} · {FDA_LABEL[treatment.fdaStatus] ?? treatment.fdaStatus}
            </p>

            <h1
              className="mt-5 font-serif text-display-lg font-medium leading-[1.05] text-primary"
              style={{ fontVariationSettings: "'opsz' 144" }}
            >
              {leading ? (
                <>
                  {leading}{' '}
                  <span className="display-italic text-primary">{lastWord}</span>
                </>
              ) : (
                <span className="display-italic text-primary">{lastWord}</span>
              )}
            </h1>

            <p className="mt-6 max-w-prose text-lg leading-[1.55] text-muted md:text-xl">
              {treatment.summary}
            </p>

            <div className="mt-8 flex flex-wrap items-baseline gap-x-6 gap-y-2">
              <div className="flex items-baseline gap-2">
                <span
                  className="font-serif text-3xl font-medium text-primary"
                  style={{ fontVariationSettings: "'opsz' 144" }}
                >
                  {treatment.formFactor === 'Adjunct' ? '+' : ''}
                  {formatUSD(treatment.monthlyPriceFrom)}
                </span>
                <span className="text-sm text-muted">/mo</span>
                {treatment.formFactor === 'Adjunct' && (
                  <span className="font-mono text-[11px] uppercase tracking-tracked text-muted">
                    adjunct to base TRT
                  </span>
                )}
              </div>
              {treatment.fertilityPreserving && (
                <span className="font-mono text-[11px] uppercase tracking-tracked text-accent">
                  Fertility-preserving
                </span>
              )}
            </div>

            <div className="mt-10 flex flex-col items-start gap-3 sm:flex-row sm:gap-4">
              <Link href="/how-it-works">
                <Button size="md">Get Started</Button>
              </Link>
              <Link href="/pricing">
                <Button size="md" variant="outline">
                  See pricing
                </Button>
              </Link>
            </div>
          </div>

          {/* Product macro placeholder */}
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-surface-alt">
              <div className="absolute inset-0 flex items-center justify-center">
                <span
                  className="font-serif text-4xl text-muted/40"
                  style={{ fontVariationSettings: "'opsz' 144" }}
                >
                  {treatment.shortName}
                </span>
              </div>
              {/* Replace with <Image> in Phase 8 once product photography lands */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
