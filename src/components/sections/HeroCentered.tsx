import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { EmailCapture } from '@/components/forms/EmailCapture';

export function HeroCentered() {
  return (
    <section className="relative overflow-hidden bg-surface">
      <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="container max-w-hero px-5 pb-20 pt-24 text-center md:pb-28 md:pt-32 lg:pt-36">
        <p className="eyebrow mb-7 inline-flex flex-wrap justify-center gap-x-3 gap-y-1 animate-fade-up">
          <span>Testosterone Therapy</span>
          <span aria-hidden className="text-muted/60">·</span>
          <span>Delivered</span>
          <span aria-hidden className="text-muted/60">·</span>
          <span>Doctor-Supervised</span>
        </p>

        <h1
          className="font-serif text-display-xl font-medium text-primary animate-fade-up [animation-delay:60ms]"
          style={{ fontVariationSettings: "'opsz' 144" }}
        >
          TRT,{' '}
          <span className="display-italic text-primary">finally.</span>
        </h1>

        <p className="mx-auto mt-6 max-w-xl text-lg leading-[1.55] text-muted md:text-xl animate-fade-up [animation-delay:120ms]">
          Doctor-supervised testosterone therapy with transparent pricing and same-day shipping. No memberships you can&apos;t cancel. No hidden math.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4 animate-fade-up [animation-delay:180ms]">
          <Link href="/how-it-works">
            <Button size="md">Get Started</Button>
          </Link>
          <Link href="/pricing">
            <Button size="md" variant="outline">
              See Pricing
            </Button>
          </Link>
        </div>

        <p className="mt-8 text-eyebrow uppercase tracking-tracked text-muted animate-fade-up [animation-delay:240ms]">
          Quest &amp; Labcorp partners · FSA-eligible · 60-day guarantee
        </p>

        <div className="mt-10 flex justify-center animate-fade-up [animation-delay:300ms]">
          <EmailCapture />
        </div>
      </div>
    </section>
  );
}
