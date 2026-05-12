import { ArrowRight } from 'lucide-react';
import { getHomepageTestimonials } from '@/content/testimonials';
import { SectionHeader } from './SectionHeader';

export function TestimonialCards() {
  const testimonials = getHomepageTestimonials();

  return (
    <section className="bg-surface">
      <div className="container py-20 md:py-28">
        <SectionHeader
          eyebrow="From Men We Serve"
          title="Stories, not *slogans.*"
          align="center"
        />

        {/* Mobile: horizontal scroll-snap. Desktop: 3-col grid. */}
        <ul className="mx-auto mt-14 flex max-w-6xl snap-x snap-mandatory gap-5 overflow-x-auto pb-4 lg:grid lg:snap-none lg:grid-cols-3 lg:gap-6 lg:overflow-visible lg:pb-0">
          {testimonials.map((t) => (
            <li
              key={t.id}
              className="flex w-[88%] shrink-0 snap-start flex-col rounded-2xl border border-border bg-surface p-7 sm:w-[70%] lg:w-auto"
            >
              {/* Header: portrait + name */}
              <div className="flex items-center gap-4">
                {/* Placeholder portrait until commissioned shoot lands */}
                <div className="flex h-[72px] w-[72px] shrink-0 items-center justify-center overflow-hidden rounded-full bg-surface-alt">
                  <span
                    className="font-serif text-2xl font-medium text-muted/40"
                    style={{ fontVariationSettings: "'opsz' 144" }}
                  >
                    {t.name.charAt(0)}
                  </span>
                  {/* When real photos land:
                      <Image src={t.photo} alt={t.name} fill className="object-cover" sizes="72px" />
                  */}
                </div>
                <div>
                  <p className="font-serif text-base font-medium text-primary">
                    {t.name}
                  </p>
                  <p className="mt-0.5 font-mono text-[11px] uppercase tracking-tracked text-muted">
                    {t.age} · {t.city}
                  </p>
                </div>
              </div>

              {/* Quote */}
              <blockquote className="mt-6 flex-1">
                <p
                  className="font-serif text-[21px] italic leading-snug text-text"
                  style={{ fontVariationSettings: "'opsz' 144" }}
                >
                  {`“${t.quote}”`}
                </p>
              </blockquote>

              <hr className="my-6 border-border" />

              {/* Outcome stat */}
              <div>
                <p className="font-mono text-[10px] uppercase tracking-tracked text-muted">
                  T-Level
                </p>
                <p className="mt-1.5 flex items-baseline gap-2 font-serif">
                  <span className="text-xl text-muted/70 tabular-nums">
                    {t.statBefore}
                  </span>
                  <ArrowRight
                    size={16}
                    strokeWidth={2}
                    className="text-accent-strong"
                    aria-hidden
                  />
                  <span
                    className="text-2xl font-medium text-primary tabular-nums"
                    style={{ fontVariationSettings: "'opsz' 144" }}
                  >
                    {t.statAfter}
                  </span>
                  <span className="font-sans text-xs text-muted">ng/dL</span>
                </p>
                <p className="mt-1 text-xs text-muted">in {t.statTimeframe}</p>
              </div>
            </li>
          ))}
        </ul>

        <p className="mx-auto mt-10 max-w-md text-center text-sm leading-relaxed text-muted">
          Real members. Real outcomes. Stories coming as our pilot completes. Names and stats above are illustrative until the first cohort wraps.
        </p>
      </div>
    </section>
  );
}
