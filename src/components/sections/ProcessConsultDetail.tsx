import { Check } from 'lucide-react';
import { SectionHeader } from './SectionHeader';

const COVERED = [
  'Your symptom profile and goals',
  'Lab results, in plain language',
  'Which protocol fits — injectable, oral, topical, or adjunct',
  'Starting dose, frequency, and what to expect by week',
  'Monitoring schedule and follow-up cadence',
  'Side effects to watch for',
];

export function ProcessConsultDetail() {
  return (
    <section className="bg-surface-alt">
      <div className="container py-20 md:py-28">
        <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <p className="eyebrow mb-5">Step Three — Consult</p>
            <h2
              className="font-serif text-display-md font-medium leading-[1.1] text-primary"
              style={{ fontVariationSettings: "'opsz' 144" }}
            >
              15 minutes with a{' '}
              <span className="display-italic text-primary">real physician.</span>
            </h2>
            <p className="mt-5 text-base leading-[1.7] text-muted md:text-lg">
              Not a chatbot, not a "health coach." A board-certified physician who specializes in men's hormone health, with your labs in front of them.
            </p>
          </div>

          <div className="lg:col-span-7">
            <p className="font-mono text-[11px] uppercase tracking-tracked text-muted">
              What we cover
            </p>
            <ul className="mt-5 space-y-3 text-sm text-text md:text-base">
              {COVERED.map((item) => (
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
          </div>
        </div>
      </div>
    </section>
  );
}
