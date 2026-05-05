import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function PricingHero() {
  return (
    <section className="bg-surface">
      <div className="container max-w-hero px-5 pb-12 pt-20 text-center md:pb-16 md:pt-28 lg:pt-32">
        <p className="eyebrow mb-7 inline-flex flex-wrap justify-center gap-x-3 gap-y-1">
          <span>Transparent Pricing</span>
          <span aria-hidden className="text-muted/60">·</span>
          <span>No Insurance Required</span>
          <span aria-hidden className="text-muted/60">·</span>
          <span>FSA-Eligible</span>
        </p>

        <h1
          className="font-serif text-display-xl font-medium text-primary"
          style={{ fontVariationSettings: "'opsz' 144" }}
        >
          One price.{' '}
          <span className="display-italic text-primary">No surprises.</span>
        </h1>

        <p className="mx-auto mt-6 max-w-xl text-lg leading-[1.55] text-muted md:text-xl">
          Flat monthly billing. The number you see is the number you pay. No hidden membership fees stacked on top of medication.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
          <Link href="/how-it-works">
            <Button size="md">Get Started</Button>
          </Link>
          <Link href="/treatments">
            <Button size="md" variant="outline">
              Compare treatments
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
