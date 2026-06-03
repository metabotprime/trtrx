import Link from 'next/link';
import { ArrowRight, Check, ShieldCheck } from 'lucide-react';
import { MEDICAL_STANDARD } from '@/content/physician';

export function MedicalDirector() {
  const { eyebrow, body, standards, principle } = MEDICAL_STANDARD;

  return (
    <section className="bg-surface">
      <div className="container py-20 md:py-28">
        <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Physician sign-off card — intentional trust artifact, no placeholder identity */}
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-border bg-surface-alt">
              {/* soft warm wash */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    'radial-gradient(120% 80% at 50% 0%, hsl(45 95% 55% / 0.08), transparent 60%)',
                }}
              />
              <div className="relative flex h-full flex-col items-center justify-center px-8 text-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-full border border-accent/30 bg-surface shadow-sm">
                  <ShieldCheck size={32} strokeWidth={1.75} className="text-accent-strong" aria-hidden />
                </div>

                <p
                  className="mt-7 font-serif text-2xl font-medium leading-snug text-primary"
                  style={{ fontVariationSettings: "'opsz' 144" }}
                >
                  Every protocol,
                  <br />
                  physician-signed.
                </p>
                <p className="mt-3 font-mono text-[11px] uppercase tracking-tracked text-muted">
                  Board-certified medical oversight
                </p>

                {/* signature motif — evokes a doctor's sign-off without naming one */}
                <div className="mt-9 w-full max-w-[220px]">
                  <svg
                    viewBox="0 0 220 28"
                    fill="none"
                    className="mx-auto h-7 w-full text-primary/55"
                    aria-hidden
                  >
                    <path
                      d="M4 18c10-9 16-9 18-4s-4 12 1 12 10-16 16-16 4 12 9 12 9-12 15-12 5 10 10 10 8-8 14-10 11 2 17 0 9-8 14-8 10 6 18 4 14-10 22-8 12 7 22 2"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                  <div className="mt-2 h-px w-full bg-border" />
                  <p className="mt-2 font-mono text-[10px] uppercase tracking-tracked text-muted/70">
                    Reviewed &amp; signed · trtrx Medical
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="lg:col-span-7">
            <p className="eyebrow mb-5">{eyebrow}</p>

            <h2
              className="font-serif text-display-md font-medium leading-[1.1] text-primary"
              style={{ fontVariationSettings: "'opsz' 144" }}
            >
              Care from physicians who specialize in{' '}
              <span className="display-italic text-primary">men&apos;s hormone health.</span>
            </h2>

            <div className="mt-8 space-y-5 text-base leading-[1.7] text-text md:text-lg">
              {body.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>

            <hr className="my-8 border-border" />

            <ul className="grid gap-2.5 text-sm sm:grid-cols-2">
              {standards.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Check
                    size={16}
                    strokeWidth={2.5}
                    className="mt-1 shrink-0 text-accent-strong"
                    aria-hidden
                  />
                  <span className="text-text">{item}</span>
                </li>
              ))}
            </ul>

            <hr className="my-8 border-border" />

            <blockquote className="border-l-2 border-accent pl-5">
              <p
                className="font-serif text-xl italic leading-snug text-primary md:text-[22px]"
                style={{ fontVariationSettings: "'opsz' 144" }}
              >
                {`“${principle}”`}
              </p>
              <footer className="mt-3 font-mono text-[11px] uppercase tracking-tracked text-muted">
                The trtrx medical standard
              </footer>
            </blockquote>

            <div className="mt-8">
              <Link
                href="/about"
                className="group inline-flex items-center gap-1.5 text-sm font-medium text-primary underline-offset-4 transition-colors hover:text-accent-strong"
              >
                How our medical model works
                <ArrowRight
                  size={14}
                  className="transition-transform duration-150 group-hover:translate-x-0.5"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
