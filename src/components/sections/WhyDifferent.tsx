import { Check } from 'lucide-react';
import { SectionHeader } from './SectionHeader';

type Difference = {
  title: string;
  body: string;
};

const DIFFERENCES: Difference[] = [
  {
    title: 'No hidden minimums',
    body:
      'Pay one number every month. No surprise 2.5-month commitments, no setup fees, no membership stacked on top of your medication.',
  },
  {
    title: 'One bill, not two',
    body:
      'Medication, ongoing physician supervision, two annual lab panels, and shipping — all in your monthly number. One charge, every cycle.',
  },
  {
    title: 'MD-led, not NP-led',
    body:
      'Your protocol is set by a board-certified physician — not routed to a nurse practitioner for cost reasons. Real MD oversight from intake through refill.',
  },
  {
    title: 'Live video consult',
    body:
      'A real 15-minute video visit with your physician to set your protocol — not async chat. The 24/7 portal handles every question between visits.',
  },
];

export function WhyDifferent() {
  return (
    <section className="bg-surface">
      <div className="container py-20 md:py-28">
        <SectionHeader
          eyebrow="Why trtrx"
          title="Four ways we're *different.*"
          subtitle="The category was built on hidden minimums, split bills, NP-only care, and async chat. We built the opposite."
          align="center"
        />

        <ul className="mx-auto mt-14 grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
          {DIFFERENCES.map((d) => (
            <li
              key={d.title}
              className="flex flex-col rounded-2xl border border-border bg-surface-alt p-7 md:p-8"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/10">
                  <Check
                    size={18}
                    strokeWidth={2.5}
                    className="text-accent-strong"
                    aria-hidden
                  />
                </div>
                <h3
                  className="mt-1 font-serif text-xl font-medium leading-tight text-primary md:text-[22px]"
                  style={{ fontVariationSettings: "'opsz' 144" }}
                >
                  {d.title}
                </h3>
              </div>
              <p className="mt-4 text-[15px] leading-[1.65] text-text md:text-base">
                {d.body}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
