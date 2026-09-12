import Link from 'next/link';
import { ArrowRight, ClipboardList, FlaskConical, HeartPulse } from 'lucide-react';
import { buttonVariants } from '@/components/ui/button';
import { PRICING_STRUCTURE } from '@/content/pricing';
import { cn, formatUSD } from '@/lib/utils';

const CARE_STEPS = [
  {
    number: '01',
    icon: ClipboardList,
    title: 'Start with your story.',
    description: 'Your symptoms, health history and goals come first.',
  },
  {
    number: '02',
    icon: FlaskConical,
    title: 'Labs. Then a physician.',
    description: 'A physician reviews your results and whether treatment is appropriate.',
  },
  {
    number: '03',
    icon: HeartPulse,
    title: 'A plan, with follow-through.',
    description: 'If prescribed, care includes medication, follow-up and monitoring.',
  },
] as const;

export function HeroCentered() {
  return (
    <section aria-labelledby="home-hero-title" className="overflow-hidden border-b border-border bg-surface">
      <div className="container py-10 sm:py-14 lg:py-20">
        <div className="grid items-center gap-9 lg:grid-cols-[1.15fr_1fr] lg:gap-14">
          <div>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-[11px] font-medium uppercase tracking-tracked">
              <span className="text-primary">Physician-led TRT</span>
              <span className="inline-flex items-center gap-2 rounded-full bg-accent/15 px-3 py-1.5 text-accent-strong">
                <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-accent-strong" />
                Pre-launch
              </span>
            </div>

            <h1
              id="home-hero-title"
              className="mt-6 font-serif text-[clamp(3.1rem,7vw,5.5rem)] font-medium leading-[1.04] tracking-[-0.03em] text-primary"
            >
              TRT, <span className="display-italic">finally.</span>
            </h1>

            <p className="mt-5 max-w-lg text-lg leading-relaxed text-muted sm:text-xl">
              A clearer path to testosterone care. Physician oversight,
              medication and lab testing in one monthly plan.
            </p>

            <div className="mt-7 border-l-[3px] border-accent pl-4 sm:mt-8 sm:pl-5">
              <p className="text-[11px] font-medium uppercase tracking-tracked text-muted">
                Planned standard injectable TRT
              </p>
              <p className="mt-1.5 flex flex-wrap items-baseline gap-x-2 text-primary">
                <span className="font-serif text-[2.5rem] font-medium leading-none sm:text-5xl">
                  {formatUSD(PRICING_STRUCTURE.headlineMonthly)}
                </span>
                <span className="text-base">/ month</span>
                <span className="ml-1 text-sm font-medium">All in.</span>
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                No setup fee. Cancel anytime.
              </p>
            </div>

            <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:items-center sm:gap-6">
              <Link
                href="/treatments"
                className={cn(
                  buttonVariants({ size: 'lg' }),
                  'group gap-3 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4 focus-visible:ring-offset-surface',
                )}
              >
                Explore treatments
                <ArrowRight size={18} aria-hidden className="transition-transform group-hover:translate-x-1 motion-reduce:transform-none" />
              </Link>
              <Link
                href="/how-it-works"
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-sm text-sm font-medium text-primary underline-offset-4 hover:underline focus-visible:outline-primary"
              >
                How care works
                <ArrowRight size={15} aria-hidden />
              </Link>
            </div>
            <p className="mt-3 text-xs leading-relaxed text-muted">
              Intake is not open yet. Explore your options before launch.
            </p>
          </div>

          <div className="relative rounded-[1.75rem] bg-primary p-6 text-surface sm:p-8 lg:p-9">
            <p className="font-mono text-[11px] uppercase tracking-tracked text-accent">
              How care will work
            </p>
            <h2 className="mt-3 max-w-sm font-serif text-[1.85rem] font-medium leading-tight sm:text-[2.25rem]">
              A clear plan.<br />
              <span className="display-italic text-accent">At every step.</span>
            </h2>

            <ol className="mt-7 space-y-0 sm:mt-8">
              {CARE_STEPS.map(({ number, icon: Icon, title, description }, index) => (
                <li key={number} className="relative flex gap-4 pb-6 last:pb-0 sm:gap-5">
                  {index < CARE_STEPS.length - 1 && (
                    <span aria-hidden className="absolute bottom-0 left-5 top-10 w-px bg-surface/20" />
                  )}
                  <div className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-surface/20 bg-surface/5 text-accent">
                    <Icon size={19} strokeWidth={1.6} aria-hidden />
                  </div>
                  <div className="pt-0.5">
                    <h3 className="text-[15px] font-medium leading-snug">{title}</h3>
                    <p className="mt-1.5 max-w-xs text-sm leading-relaxed text-surface/85">
                      {description}
                    </p>
                  </div>
                </li>
              ))}
            </ol>

          </div>
        </div>
      </div>
    </section>
  );
}
