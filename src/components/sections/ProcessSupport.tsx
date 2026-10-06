import { MessageCircle, FileText, Truck, BadgeCheck } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

type Capability = {
  Icon: typeof MessageCircle;
  title: string;
  body: string;
};

const CAPABILITIES: Capability[] = [
  {
    Icon: MessageCircle,
    title: "Clinical communication",
    body: "A secure way to contact the care team is planned. Response times and support arrangements are not yet confirmed.",
  },
  {
    Icon: FileText,
    title: "Lab history",
    body: "Access to results and clinician explanations is part of the planned portal.",
  },
  {
    Icon: Truck,
    title: "Prescription information",
    body: "The planned account would make prescription and shipment details available when services open.",
  },
  {
    Icon: BadgeCheck,
    title: "Ongoing review",
    body: "Any dose change would require clinical direction. The portal will not replace urgent or emergency care.",
  },
];

export function ProcessSupport() {
  return (
    <section className="bg-surface-alt">
      <div className="container py-20 md:py-28">
        <SectionHeader
          eyebrow="Step Five: Ongoing Care"
          title="A plan for *ongoing care.*"
          subtitle="The patient portal is in preparation. Accounts, clinical messaging and prescription tracking are not available yet."
          align="center"
        />

        <ul className="mx-auto mt-14 grid max-w-5xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {CAPABILITIES.map(({ Icon, title, body }) => (
            <li key={title} className="flex flex-col">
              <Icon
                size={28}
                strokeWidth={1.5}
                className="text-accent-strong"
                aria-hidden
              />
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
