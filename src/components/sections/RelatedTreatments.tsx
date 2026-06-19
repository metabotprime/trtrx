import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { TREATMENTS } from '@/content/treatments';
import { formatUSD } from '@/lib/utils';
import { SectionHeader } from './SectionHeader';
import { TreatmentVisual } from '@/components/treatments/TreatmentVisual';
import { ProductMedia } from '@/components/treatments/ProductMedia';

type Props = { currentSlug: string };

export function RelatedTreatments({ currentSlug }: Props) {
  const others = TREATMENTS.filter((t) => t.slug !== currentSlug).slice(0, 3);

  return (
    <section className="bg-surface">
      <div className="container py-16 md:py-20">
        <SectionHeader
          eyebrow="Other Options"
          title="Compare other *treatments.*"
          align="center"
          size="md"
        />

        <ul className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-5 sm:grid-cols-3">
          {others.map((t) => (
            <li key={t.slug}>
              <Link
                href={`/treatments/${t.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface transition-all duration-200 hover:-translate-y-px hover:border-accent/40 hover:shadow-md"
              >
                {t.heroImage ? (
                  <ProductMedia
                    image={t.heroImage}
                    video={t.heroVideo}
                    alt={`${t.name} — representative product photograph`}
                    className="aspect-[4/3]"
                    hoverZoom
                    sizes="(min-width: 640px) 33vw, 100vw"
                  />
                ) : (
                  <TreatmentVisual formFactor={t.formFactor} className="aspect-[5/2] w-full" />
                )}
                <div className="flex flex-1 flex-col p-6">
                  <p className="font-mono text-[11px] uppercase tracking-tracked text-accent-strong">
                    {t.formFactor}
                  </p>
                  <h3
                    className="mt-3 font-serif text-xl font-medium text-primary"
                    style={{ fontVariationSettings: "'opsz' 144" }}
                  >
                    {t.name}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {t.summary.split('.').slice(0, 1).join('.') + '.'}
                  </p>
                  <div className="mt-auto pt-5 flex items-baseline justify-between">
                    <span className="font-mono text-xs text-muted">
                      {t.formFactor === 'Adjunct' ? '+' : ''}
                      {formatUSD(t.monthlyPriceFrom)}/mo
                      {t.formFactor === 'Adjunct' && ' adjunct'}
                    </span>
                    <ArrowRight
                      size={14}
                      className="text-primary transition-all duration-150 group-hover:translate-x-0.5 group-hover:text-accent-strong"
                      aria-hidden
                    />
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-10 flex justify-center">
          <Link
            href="/treatments"
            className="group inline-flex items-center gap-1.5 text-sm font-medium text-primary underline-offset-4 transition-colors hover:text-accent-strong"
          >
            See all treatments
            <ArrowRight
              size={14}
              className="transition-transform duration-150 group-hover:translate-x-0.5"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
