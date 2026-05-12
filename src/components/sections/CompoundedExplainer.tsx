import { Check } from 'lucide-react';
import { SectionHeader } from './SectionHeader';

type Side = {
  eyebrow: string;
  headline: string;
  italicWord: string;
  body: string;
  bestFor: string[];
  examples: string;
};

const SIDES: [Side, Side] = [
  {
    eyebrow: 'FDA-Approved',
    headline: 'Standardized.',
    italicWord: 'Reimbursable.',
    body: 'Identical in every batch, made in registered manufacturing facilities, and FSA/HSA-friendly when applicable. The right call when predictability and standardization matter most.',
    bestFor: [
      'Predictable, repeatable baseline',
      'FSA/HSA reimbursement',
      'Brand-name continuity',
    ],
    examples: 'Testosterone Cypionate (brand) · Testosterone Enanthate (brand)',
  },
  {
    eyebrow: 'Compounded',
    headline: 'Tailored.',
    italicWord: 'Flexible.',
    body: 'Custom-formulated for you by licensed 503A pharmacies. Lower cost, more delivery options (cream, troche, alt-ester injectables), and dose flexibility that off-the-shelf products can’t match.',
    bestFor: [
      'Lifestyle fit (cream, troche, oral)',
      'Lower out-of-pocket cost',
      'Custom dosing or alt esters',
    ],
    examples: 'Topical cream · Enclomiphene · HCG · Compounded injectables',
  },
];

export function CompoundedExplainer() {
  return (
    <section className="bg-surface-alt">
      <div className="container py-20 md:py-28">
        <SectionHeader
          eyebrow="Education"
          title="FDA-approved or *compounded?* Both have their place."
          align="center"
        />

        <div className="mx-auto mt-14 grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
          {SIDES.map((side) => (
            <article
              key={side.eyebrow}
              className="flex flex-col rounded-2xl border border-border bg-surface p-8 md:p-10"
            >
              <p className="font-mono text-[11px] uppercase tracking-tracked text-accent-strong">
                {side.eyebrow}
              </p>

              <h3
                className="mt-4 font-serif text-[26px] font-medium leading-[1.15] text-primary"
                style={{ fontVariationSettings: "'opsz' 144" }}
              >
                {side.headline}{' '}
                <span className="display-italic text-primary">{side.italicWord}</span>
              </h3>

              <p className="mt-5 text-[15px] leading-[1.65] text-text md:text-base">
                {side.body}
              </p>

              <hr className="my-7 border-border" />

              <ul className="space-y-2.5 text-sm text-text">
                {side.bestFor.map((item) => (
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

              <hr className="my-7 border-border" />

              <p className="font-mono text-[11px] uppercase tracking-tracked text-muted">
                Examples
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {side.examples}
              </p>
            </article>
          ))}
        </div>

        <p className="mx-auto mt-10 max-w-md text-center text-sm leading-relaxed text-muted">
          Your physician helps you choose during the intake consult based on your goals, budget, and lifestyle.
        </p>
      </div>
    </section>
  );
}
