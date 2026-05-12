import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { TREATMENTS } from '@/content/treatments';
import { formatUSD } from '@/lib/utils';
import { SectionHeader } from './SectionHeader';

const FDA_LABEL: Record<string, string> = {
  'FDA-approved': 'FDA Approved',
  Compounded: 'Compounded',
  'Both available': 'FDA + Compounded',
};

type Props = { showHeader?: boolean };

export function TreatmentGrid({ showHeader = true }: Props = {}) {
  return (
    <section className="bg-surface">
      <div className="container py-20 md:py-28">
        {showHeader && (
          <SectionHeader
            eyebrow="Five Evidence-Based Options"
            title="Find the right *treatment.*"
            subtitle="Choose by lifestyle, fertility goals, and how you want to dose."
            align="center"
          />
        )}

        <ul
          className={`mx-auto ${showHeader ? 'mt-14' : ''} grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3`}
        >
          {TREATMENTS.map((t) => (
            <li key={t.slug}>
              <Link
                href={`/treatments/${t.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface transition-all duration-200 hover:-translate-y-px hover:border-accent/40 hover:shadow-md"
              >
                {/* Product macro placeholder */}
                <div className="relative aspect-[4/3] w-full bg-surface-alt">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-serif text-2xl text-muted/40">
                      {t.shortName}
                    </span>
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  {/* Eyebrow badges */}
                  <p className="mb-3 font-mono text-[11px] uppercase tracking-tracked text-accent-strong">
                    {t.formFactor} · {FDA_LABEL[t.fdaStatus] ?? t.fdaStatus}
                  </p>

                  {/* Name */}
                  <h3
                    className="font-serif text-[22px] font-medium leading-[1.15] text-primary"
                    style={{ fontVariationSettings: "'opsz' 144" }}
                  >
                    {t.name}
                  </h3>

                  <hr className="my-5 border-border" />

                  {/* Spec strip */}
                  <dl className="space-y-2.5 text-sm">
                    <SpecRow label="Frequency" value={t.frequency} />
                    <SpecRow label="Route" value={t.route} />
                    <SpecRow
                      label="Fertility"
                      value={t.fertilityPreserving ? 'Preserving' : 'Not preserving'}
                      valueClass={t.fertilityPreserving ? 'text-accent-strong' : ''}
                    />
                    <SpecRow
                      label="Status"
                      value={FDA_LABEL[t.fdaStatus] ?? t.fdaStatus}
                    />
                  </dl>

                  <hr className="my-5 border-border" />

                  {/* Price — flat monthly. Adjunct treatments show "+" prefix. */}
                  <div className="flex items-baseline gap-1">
                    <span
                      className="font-serif text-3xl font-medium text-primary"
                      style={{ fontVariationSettings: "'opsz' 144" }}
                    >
                      {t.formFactor === 'Adjunct' ? '+' : ''}
                      {formatUSD(t.monthlyPriceFrom)}
                    </span>
                    <span className="text-sm text-muted">/mo</span>
                    {t.formFactor === 'Adjunct' && (
                      <span className="ml-2 font-mono text-[11px] uppercase tracking-tracked text-muted">
                        adjunct
                      </span>
                    )}
                  </div>

                  {/* Spacer pushes the link to bottom */}
                  <div className="mt-auto pt-6">
                    <span className="inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-colors group-hover:text-accent-strong">
                      Learn more
                      <ArrowRight
                        size={14}
                        className="transition-transform duration-150 group-hover:translate-x-0.5"
                      />
                    </span>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function SpecRow({
  label,
  value,
  valueClass = '',
}: {
  label: string;
  value: string;
  valueClass?: string;
}) {
  return (
    <div className="flex items-baseline justify-between gap-3">
      <dt className="text-muted">{label}</dt>
      <dd className={`text-right font-mono text-text ${valueClass}`}>{value}</dd>
    </div>
  );
}
