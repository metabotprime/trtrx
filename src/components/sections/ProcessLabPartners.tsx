import Image from 'next/image';
import { FlaskConical, MapPin, Clock } from 'lucide-react';
import { SectionHeader } from './SectionHeader';

const TESTS = [
  'Total testosterone',
  'Free testosterone',
  'Estradiol (E2)',
  'SHBG',
  'Hematocrit',
  'Lipid panel',
  'PSA (men 40+)',
  'Comprehensive metabolic panel',
];

const STATS = [
  { Icon: MapPin, value: '4,400+', label: 'Quest & Labcorp locations' },
  { Icon: Clock, value: '24-72h', label: 'Lab turnaround' },
  { Icon: FlaskConical, value: '8 markers', label: 'Standard panel' },
];

export function ProcessLabPartners() {
  return (
    <section className="bg-surface">
      <div className="container py-20 md:py-28">
        <SectionHeader
          eyebrow="Step Two — Labs"
          title="A real lab panel. *Not a finger prick guess.*"
          subtitle="We work with Quest and Labcorp because that's where the diagnostic-grade data is. No mail-in fingerstick that misses estradiol."
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
              <Icon size={24} strokeWidth={1.5} className="text-accent-strong" aria-hidden />
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

        <div className="mx-auto mt-14 max-w-3xl rounded-2xl border border-border bg-surface-alt p-8 md:p-10">
          <p className="font-mono text-[11px] uppercase tracking-tracked text-accent-strong">
            What we test
          </p>
          <ul className="mt-5 grid grid-cols-1 gap-y-3 sm:grid-cols-2">
            {TESTS.map((t) => (
              <li key={t} className="flex items-center gap-3 text-sm text-text">
                <span aria-hidden className="h-1 w-1 shrink-0 rounded-full bg-accent" />
                {t}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
