import Image from "next/image";
import Link from "next/link";
import { FlaskConical, MapPin, Clock } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const TESTS = [
  "Total testosterone",
  "Free testosterone",
  "Estradiol (E2)",
  "SHBG",
  "Hematocrit",
  "Lipid panel",
  "Prostate assessment where appropriate",
  "Comprehensive metabolic panel",
];

const STATS = [
  { Icon: MapPin, value: "Locations", label: "Partners to be confirmed" },
  {
    Icon: Clock,
    value: "Timing",
    label: "Confirmed when ordering is available",
  },
  {
    Icon: FlaskConical,
    value: "Testing",
    label: "Individual clinical assessment",
  },
];

export function ProcessLabPartners() {
  return (
    <section className="bg-surface">
      <div className="container py-20 md:py-28">
        <SectionHeader
          eyebrow="Step Two: Labs"
          title="Testing starts with *the clinical question.*"
          subtitle="The planned program includes two lab panels per year. Lab partners, ordering and test details are not finalized. A commercial inclusion does not replace a clinician’s monitoring plan."
          align="center"
        />

        <div className="mx-auto mt-12 max-w-4xl overflow-hidden rounded-2xl border border-border">
          <div className="relative aspect-[16/9] w-full">
            <Image
              src="/images/products/lab-panels.jpg"
              alt="Diagnostic blood-panel collection tubes in a laboratory rack"
              fill
              sizes="(min-width: 1024px) 56rem, 100vw"
              className="object-cover"
            />
          </div>
        </div>

        <div className="mx-auto mt-12 grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-3">
          {STATS.map(({ Icon, value, label }) => (
            <div key={label} className="flex flex-col items-center text-center">
              <Icon
                size={24}
                strokeWidth={1.5}
                className="text-accent-strong"
                aria-hidden
              />
              <p
                className="mt-3 font-serif text-3xl font-medium text-primary"
                style={{ fontVariationSettings: "'opsz' 144" }}
              >
                {value}
              </p>
              <p className="mt-1 font-mono text-[11px] uppercase tracking-tracked text-muted">
                {label}
              </p>
            </div>
          ))}
        </div>

        <p className="mx-auto mt-8 max-w-3xl text-center text-sm text-muted">
          These are discussion topics, not an ordered panel.{" "}
          <Link
            className="text-primary underline"
            href="/blog/testosterone-blood-tests"
          >
            Read the testosterone blood-test guide
          </Link>
          .
        </p>
        <div className="mx-auto mt-14 max-w-3xl rounded-2xl border border-border bg-surface-alt p-8 md:p-10">
          <p className="font-mono text-[11px] uppercase tracking-tracked text-accent-strong">
            Examples to discuss with your clinician
          </p>
          <ul className="mt-5 grid grid-cols-1 gap-y-3 sm:grid-cols-2">
            {TESTS.map((t) => (
              <li key={t} className="flex items-center gap-3 text-sm text-text">
                <span
                  aria-hidden
                  className="h-1 w-1 shrink-0 rounded-full bg-accent"
                />
                {t}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
