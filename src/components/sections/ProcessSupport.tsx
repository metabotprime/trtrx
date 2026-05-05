import { MessageCircle, FileText, Truck, BadgeCheck } from 'lucide-react';
import { SectionHeader } from './SectionHeader';

type Capability = {
  Icon: typeof MessageCircle;
  title: string;
  body: string;
};

const CAPABILITIES: Capability[] = [
  {
    Icon: MessageCircle,
    title: 'Message your doctor',
    body: 'Anytime, any reason. Most replies within one business day, often the same day.',
  },
  {
    Icon: FileText,
    title: 'See your labs',
    body: 'Every panel, every trend, every annotation from your physician — all in one place.',
  },
  {
    Icon: Truck,
    title: 'Track your shipments',
    body: 'Order status, tracking, and refill schedule. Pause or skip without a phone call.',
  },
  {
    Icon: BadgeCheck,
    title: 'Manage your protocol',
    body: 'Dose adjustments, prescription history, and intake records — all visible to you.',
  },
];

export function ProcessSupport() {
  return (
    <section className="bg-surface-alt">
      <div className="container py-20 md:py-28">
        <SectionHeader
          eyebrow="Step Five — Ongoing Care"
          title="Your doctor, *one message away.*"
          subtitle="Every patient gets a 24/7 portal — message your physician, view labs, manage shipments. No phone tag, no scheduling a visit just to ask a question."
          align="center"
        />

        <ul className="mx-auto mt-14 grid max-w-5xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {CAPABILITIES.map(({ Icon, title, body }) => (
            <li key={title} className="flex flex-col">
              <Icon size={28} strokeWidth={1.5} className="text-accent" aria-hidden />
              <h3
                className="mt-5 font-serif text-lg font-medium leading-tight text-primary"
                style={{ fontVariationSettings: "'opsz' 144" }}
              >
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
