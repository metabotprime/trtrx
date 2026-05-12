import Link from 'next/link';
import { ArrowRight, Check } from 'lucide-react';
import { MEDICAL_DIRECTOR } from '@/content/physician';

export function MedicalDirector() {
  const { name, title, credentials, bio, pullQuote } = MEDICAL_DIRECTOR;

  return (
    <section className="bg-surface">
      <div className="container py-20 md:py-28">
        <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Portrait */}
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-surface-alt">
              {/* Placeholder until commissioned shoot lands */}
              <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
                <span
                  className="font-serif text-3xl font-medium text-muted/40"
                  style={{ fontVariationSettings: "'opsz' 144" }}
                >
                  {name}
                </span>
                <span className="mt-3 font-mono text-[11px] uppercase tracking-tracked text-muted/40">
                  {title}
                </span>
              </div>
              {/* When the real photo is added, replace this with:
                  <Image src={photo} alt={`${name}, ${title}`} fill className="object-cover" sizes="(min-width: 1024px) 40vw, 100vw" priority={false} />
              */}
            </div>
          </div>

          {/* Text */}
          <div className="lg:col-span-7">
            <p className="eyebrow mb-5">Medical Direction</p>

            <h2
              className="font-serif text-display-md font-medium leading-[1.1] text-primary"
              style={{ fontVariationSettings: "'opsz' 144" }}
            >
              Care from physicians who specialize in{' '}
              <span className="display-italic text-primary">men&apos;s hormone health.</span>
            </h2>

            <div className="mt-8 space-y-5 text-base leading-[1.7] text-text md:text-lg">
              {bio.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>

            <hr className="my-8 border-border" />

            <ul className="space-y-2.5 text-sm">
              {credentials.map((credential) => (
                <li key={credential} className="flex items-start gap-3">
                  <Check
                    size={16}
                    strokeWidth={2.5}
                    className="mt-1 shrink-0 text-accent-strong"
                    aria-hidden
                  />
                  <span className="text-text">{credential}</span>
                </li>
              ))}
            </ul>

            <hr className="my-8 border-border" />

            <blockquote className="border-l-2 border-accent pl-5">
              <p
                className="font-serif text-xl italic leading-snug text-primary md:text-[22px]"
                style={{ fontVariationSettings: "'opsz' 144" }}
              >
                {`“${pullQuote}”`}
              </p>
            </blockquote>

            <div className="mt-8">
              <Link
                href="/about"
                className="group inline-flex items-center gap-1.5 text-sm font-medium text-primary underline-offset-4 transition-colors hover:text-accent-strong"
              >
                Meet our physician network
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
