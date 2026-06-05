import { ShieldCheck, MapPin, Stethoscope } from 'lucide-react';
import { SectionHeader } from './SectionHeader';

type Credential = {
  icon: typeof ShieldCheck;
  title: string;
  body: string;
};

// Person-agnostic by design. We do not show named/placeholder physicians
// (an E-E-A-T red flag); every line below is true at pre-launch. When a real,
// vetted roster is locked, this can become a named-physician layout.
const CREDENTIALS: Credential[] = [
  {
    icon: ShieldCheck,
    title: 'Board-certified',
    body: 'Every prescribing physician is board-certified — MD or DO. Protocols are set by a doctor, not a nurse practitioner routed to you for cost reasons.',
  },
  {
    icon: MapPin,
    title: 'Licensed in 47 states',
    body: 'Care available across the country, with new states added as licensing clears. Not yet available in Hawaii, Alaska, or Puerto Rico.',
  },
  {
    icon: Stethoscope,
    title: 'Hormone-health focused',
    body: 'Physicians who concentrate on men’s testosterone and endocrine care — not a general-practice call center handling everything at once.',
  },
];

export function PhysicianNetwork() {
  return (
    <section className="bg-surface">
      <div className="container py-20 md:py-28">
        <SectionHeader
          eyebrow="Physician Network"
          title="Board-certified, *coast to coast.*"
          subtitle="Care is delivered by a network of board-certified physicians, licensed across 47 states and focused on men's hormone health."
          align="center"
        />

        <ul className="mx-auto mt-14 grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {CREDENTIALS.map(({ icon: Icon, title, body }) => (
            <li
              key={title}
              className="flex flex-col rounded-2xl border border-border bg-surface p-7"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full border border-accent/30 bg-surface-alt">
                <Icon size={24} strokeWidth={1.75} className="text-accent-strong" aria-hidden />
              </div>
              <p
                className="mt-5 font-serif text-lg font-medium text-primary"
                style={{ fontVariationSettings: "'opsz' 144" }}
              >
                {title}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-text">{body}</p>
            </li>
          ))}
        </ul>

        <p className="mx-auto mt-10 max-w-lg text-center text-sm leading-relaxed text-muted">
          Individual physician profiles publish as the network roster is
          finalized ahead of launch.
        </p>
      </div>
    </section>
  );
}
