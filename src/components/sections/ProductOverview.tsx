import { Check } from 'lucide-react';
import { type Treatment } from '@/content/treatments';

type Props = { treatment: Treatment };

export function ProductOverview({ treatment }: Props) {
  return (
    <section className="bg-surface-alt">
      <div className="container py-16 md:py-20">
        <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <p className="eyebrow mb-5">Overview</p>
            <p className="text-lg leading-[1.7] text-text md:text-xl">
              {treatment.summary}
            </p>
          </div>
          <div className="lg:col-span-5">
            <p className="font-mono text-[11px] uppercase tracking-tracked text-muted">
              At a glance
            </p>
            <ul className="mt-4 space-y-3 text-sm">
              {treatment.bullets.map((b) => (
                <li key={b} className="flex items-start gap-3 text-text">
                  <Check
                    size={16}
                    strokeWidth={2.5}
                    className="mt-1 shrink-0 text-accent"
                    aria-hidden
                  />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
