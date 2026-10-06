import {
  ClipboardList,
  FlaskConical,
  Video,
  Truck,
  MessageCircle,
  type LucideIcon,
} from "lucide-react";
import { SectionHeader } from "./SectionHeader";

type Step = {
  number: string;
  Icon: LucideIcon;
  title: string;
  body: string;
};

type Props = { showHeader?: boolean };

const STEPS: Step[] = [
  {
    number: "01",
    Icon: ClipboardList,
    title: "Review your history",
    body: "The planned intake would gather symptoms, medications and health goals for clinical review.",
  },
  {
    number: "02",
    Icon: FlaskConical,
    title: "Confirm the evaluation",
    body: "A clinician would decide which tests and additional assessment are appropriate.",
  },
  {
    number: "03",
    Icon: Video,
    title: "Discuss your options",
    body: "A physician would explain benefits, risks and alternatives. A prescription is not automatic.",
  },
  {
    number: "04",
    Icon: Truck,
    title: "Plan treatment, if appropriate",
    body: "Only an approved prescription could proceed to a verified pharmacy. Product and delivery details remain unconfirmed.",
  },
  {
    number: "05",
    Icon: MessageCircle,
    title: "Agree on follow-up",
    body: "Monitoring and communication should be arranged before treatment starts. The TRTrx portal is not available yet.",
  },
];

export function HowItWorksSteps({ showHeader = true }: Props = {}) {
  return (
    <section className="bg-surface-alt">
      <div className="container py-20 md:py-28">
        {showHeader && (
          <SectionHeader
            eyebrow="The Process"
            title="How care is *planned.*"
            subtitle="The intended care journey, subject to individual clinical assessment. Intake is not open yet."
            align="center"
          />
        )}

        <ol
          className={`mx-auto ${showHeader ? "mt-16" : ""} grid max-w-6xl grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-5 lg:gap-7`}
        >
          {STEPS.map(({ number, Icon, title, body }) => (
            <li key={number} className="flex flex-col">
              <span
                className="font-mono text-5xl font-medium leading-none text-accent-strong"
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
