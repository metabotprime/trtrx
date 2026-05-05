import { Truck, Package, RotateCw, ShieldCheck } from 'lucide-react';
import { SectionHeader } from './SectionHeader';

const FEATURES = [
  {
    Icon: Truck,
    title: 'Same-day shipping',
    body: 'Orders verified before noon ship the same business day. Free, always.',
  },
  {
    Icon: Package,
    title: 'Discreet packaging',
    body: 'Plain outer packaging. No labels announcing what is inside.',
  },
  {
    Icon: RotateCw,
    title: 'Auto-refills',
    body: 'Refills ship before you run out. Pause or cancel from your account.',
  },
  {
    Icon: ShieldCheck,
    title: 'Cold-chain when needed',
    body: 'Refrigerated medications ship in temperature-controlled mailers.',
  },
];

export function ProcessShipping() {
  return (
    <section className="bg-surface">
      <div className="container py-20 md:py-28">
        <SectionHeader
          eyebrow="Step Four — Delivery"
          title="At your door. *Quietly.*"
          subtitle="Free shipping, discreet packaging, automatic refills. The only thing that should be visible is the result."
          align="center"
        />

        <ul className="mx-auto mt-14 grid max-w-5xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {FEATURES.map(({ Icon, title, body }) => (
            <li key={title} className="flex flex-col">
              <Icon size={28} strokeWidth={1.5} className="text-accent" aria-hidden />
              <h3
                className="mt-5 font-serif text-lg font-medium leading-tight text-primary"
                style={{ fontVariationSettings: "'opsz' 144" }}
              >
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {body}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
