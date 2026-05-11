import {
  ClipboardList,
  FlaskConical,
  Video,
  Truck,
  MessageCircle,
  type LucideIcon,
} from 'lucide-react';
import { SectionHeader } from './SectionHeader';

type Step = {
  number: string;
  Icon: LucideIcon;
  title: string;
  body: string;
};

const STEPS: Step[] = [
  {
    number: '01',
    Icon: ClipboardList,
    title: "Tell us what's off",
    body: '2-minute symptom checklist. No upfront fees.',
  },
  {
    number: '02',
    Icon: FlaskConical,
    title: 'Order at-home labs',
    body: 'Quest & Labcorp partners — 4,400+ locations or fingerstick.',
  },
  {
    number: '03',
    Icon: Video,
    title: 'Meet your physician',
    body: '15-minute video consult to set your protocol.',
  },
  {
    number: '04',
    Icon: Truck,
    title: 'Receive your therapy',
    body: 'Free, fast, discreet shipping. Refills automated.',
  },
  {
    number: '05',
    Icon: MessageCircle,
    title: 'Stay in touch, 24/7',
    body: 'Message your doctor anytime in your patient portal.',
  },
];

type Props = { showHeader?: boolean };

export function HowItWorksSteps({ showHeader = true }: Props = {}) {
  return (
    <section className="bg-surface-alt">
      <div className="container py-20 md:py-28">
        {showHeader && (
          <SectionHeader
            eyebrow="The Process"
            title="How it *works.*"
            subtitle="From symptoms to your first vial in under 14 days."
            align="center"
          />
        )}

        <ol
          className={`mx-auto ${showHeader ? 'mt-16' : ''} grid max-w-6xl grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-5 lg:gap-7`}
        >
          {STEPS.map(({ number, Icon, title, body }) => (
            <li key={number} className="flex flex-col">
              <span
                className="font-mono text-5xl font-medium leading-none text-accent"
                aria-hidden
              >
                {number}
              </span>

              <Icon
                size={32}
                strokeWidth={1.5}
                className="mt-6 text-primary"
                aria-hidden
              />

              <h2
                className="mt-5 font-serif text-[22px] font-medium leading-tight text-primary"
                style={{ fontVariationSettings: "'opsz' 144" }}
              >
                {title}
              </h2>

              <p className="mt-3 text-[15px] leading-relaxed text-muted">
                {body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
