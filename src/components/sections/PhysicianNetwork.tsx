import { SectionHeader } from './SectionHeader';

type NetworkPhysician = {
  name: string;
  credentials: string;
  states: string;
};

// PRELAUNCH: replace with real network roster before launch.
const NETWORK: NetworkPhysician[] = [
  {
    name: 'Dr. [Network Physician 1]',
    credentials: 'MD · Board-Certified',
    states: 'Licensed in CA, NY, TX, FL, IL',
  },
  {
    name: 'Dr. [Network Physician 2]',
    credentials: 'DO · Men’s Hormone Health',
    states: 'Licensed in WA, OR, AZ, CO, NV',
  },
  {
    name: 'Dr. [Network Physician 3]',
    credentials: 'MD · Endocrinology',
    states: 'Licensed in MA, PA, OH, GA, NC',
  },
];

export function PhysicianNetwork() {
  return (
    <section className="bg-surface">
      <div className="container py-20 md:py-28">
        <SectionHeader
          eyebrow="Physician Network"
          title="Multi-state. *Board-certified.*"
          subtitle="Every physician in our network is board-certified, multi-state licensed, and specializes in men's hormone health."
          align="center"
        />

        <ul className="mx-auto mt-14 grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {NETWORK.map((doc) => (
            <li
              key={doc.name}
              className="flex flex-col rounded-2xl border border-border bg-surface p-6"
            >
              {/* Portrait placeholder */}
              <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-surface-alt">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span
                    className="font-serif text-3xl font-medium text-muted/40"
                    style={{ fontVariationSettings: "'opsz' 144" }}
                  >
                    {doc.name.replace('Dr. ', '').charAt(0)}
                  </span>
                </div>
              </div>

              <p
                className="mt-5 font-serif text-lg font-medium text-primary"
                style={{ fontVariationSettings: "'opsz' 144" }}
              >
                {doc.name}
              </p>
              <p className="mt-1 font-mono text-[11px] uppercase tracking-tracked text-muted">
                {doc.credentials}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-text">
                {doc.states}
              </p>
            </li>
          ))}
        </ul>

        <p className="mx-auto mt-10 max-w-md text-center text-sm leading-relaxed text-muted">
          Network roster expands pre-launch. Names and licensing details above are placeholders.
        </p>
      </div>
    </section>
  );
}
