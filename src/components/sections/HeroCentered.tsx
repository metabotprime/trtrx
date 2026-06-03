import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { EmailCapture } from '@/components/forms/EmailCapture';

export function HeroCentered() {
  return (
    <section className="relative overflow-hidden bg-surface">
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent"
      />
      {/* Warm glow anchored behind the lab card */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div
          className="absolute right-[6%] top-1/2 -translate-y-1/2"
          style={{
            width: 640,
            height: 640,
            background:
              'radial-gradient(closest-side, hsl(45 95% 55% / 0.10), transparent 70%)',
          }}
        />
      </div>

      <div className="container max-w-6xl px-5 py-20 md:py-24 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* LEFT — copy */}
          <div className="text-center lg:text-left">
            <div className="mb-7 flex justify-center lg:justify-start animate-fade-up">
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/70 px-3.5 py-1.5 text-eyebrow uppercase tracking-tracked text-accent-strong backdrop-blur-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                Physician-led TRT
              </span>
            </div>

            <h1
              className="font-serif text-display-xl font-medium leading-[1.02] text-primary animate-fade-up [animation-delay:80ms]"
              style={{ fontVariationSettings: "'opsz' 144" }}
            >
              TRT, <span className="display-italic text-primary">finally.</span>
            </h1>

            <p className="mx-auto mt-6 max-w-xl text-lg leading-[1.55] text-muted md:text-xl lg:mx-0 animate-fade-up [animation-delay:140ms]">
              Doctor-supervised testosterone therapy with transparent pricing
              and same-day shipping. No memberships you can&apos;t cancel. No
              hidden math.
            </p>

            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4 lg:justify-start animate-fade-up [animation-delay:200ms]">
              <Link href="/how-it-works">
                <Button size="md">Get Started</Button>
              </Link>
              <Link href="/pricing">
                <Button size="md" variant="outline">
                  See Pricing
                </Button>
              </Link>
            </div>

            <p className="mt-7 text-eyebrow uppercase tracking-tracked text-muted animate-fade-up [animation-delay:260ms]">
              Quest &amp; Labcorp partners · FSA-eligible · 60-day guarantee
            </p>
          </div>

          {/* RIGHT — lab-result visual anchor */}
          <div className="relative animate-fade-up [animation-delay:160ms]">
            <div className="mx-auto max-w-md rounded-3xl border border-border bg-surface p-7 shadow-[0_24px_70px_-24px_hsl(215_60%_28%/0.22)] md:p-8">
              <div className="flex items-center justify-between">
                <p className="font-mono text-[11px] uppercase tracking-tracked text-muted">
                  Total Testosterone
                </p>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-accent/15 px-2.5 py-1 text-[10px] font-medium uppercase tracking-tracked text-accent-strong">
                  Restored
                </span>
              </div>

              <div className="mt-5 flex items-end gap-3">
                <span
                  className="font-serif text-[64px] leading-none text-primary"
                  style={{ fontVariationSettings: "'opsz' 144" }}
                >
                  842
                </span>
                <span className="mb-2 font-mono text-xs uppercase tracking-tracked text-muted">
                  ng/dL
                </span>
              </div>

              <div className="mt-6">
                <div className="relative h-2 rounded-full bg-surface-alt">
                  <div className="absolute inset-y-0 left-[12%] right-[20%] rounded-full bg-accent/35" />
                  <div className="absolute left-[76%] top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-surface bg-primary shadow-[0_2px_6px_hsl(215_60%_28%/0.4)]" />
                </div>
                <div className="mt-2 flex justify-between font-mono text-[10px] uppercase tracking-tracked text-muted">
                  <span>Low</span>
                  <span className="text-accent-strong">Optimal</span>
                  <span>High</span>
                </div>
              </div>

              <div className="mt-7 flex items-center justify-between border-t border-border pt-5">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-tracked text-muted">
                    Baseline
                  </p>
                  <p className="mt-1 font-serif text-xl text-muted">231</p>
                </div>
                <ArrowRight size={18} className="text-accent-strong" />
                <div className="text-right">
                  <p className="font-mono text-[10px] uppercase tracking-tracked text-muted">
                    Week 12
                  </p>
                  <p className="mt-1 font-serif text-xl text-primary">842</p>
                </div>
              </div>

              <p className="mt-5 font-mono text-[10px] uppercase tracking-tracked text-muted/70">
                Illustrative — individual results vary
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 flex justify-center animate-fade-up [animation-delay:320ms]">
          <EmailCapture />
        </div>
      </div>
    </section>
  );
}
