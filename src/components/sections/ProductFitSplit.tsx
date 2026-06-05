import { Check, Minus } from 'lucide-react';
import { type Treatment } from '@/content/treatments';
import { SectionHeader } from './SectionHeader';

type Props = { treatment: Treatment };

export function ProductFitSplit({ treatment }: Props) {
  return (
    <section className="bg-surface-alt">
      <div className="container py-16 md:py-20">
        <SectionHeader
          eyebrow="The Fit"
          title="Who it's *built for.*"
          align="center"
          size="md"
        />

        <div className="mx-auto mt-12 grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
          <article className="rounded-2xl border border-border bg-surface p-7 md:p-8">
            <p className="font-mono text-[11px] uppercase tracking-tracked text-accent-strong">
              Best fit if
            </p>
            <ul className="mt-5 space-y-3 text-sm text-text md:text-base">
              {treatment.whoIsThisFor.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <Check
                    size={16}
                    strokeWidth={2.5}
                    className="mt-[3px] shrink-0 text-accent-strong"
                    aria-hidden
                  />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-2xl border border-border bg-surface p-7 md:p-8">
            <p className="font-mono text-[11px] uppercase tracking-tracked text-muted">
              Not the best fit if
            </p>
            <ul className="mt-5 space-y-3 text-sm text-text md:text-base">
              {treatment.whoIsThisNotFor.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <Minus
                    size={16}
                    strokeWidth={2}
                    className="mt-[3px] shrink-0 text-muted/60"
                    aria-hidden
                  />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}
