import { ShieldCheck, MapPin, Stethoscope } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

type Credential = {
  icon: typeof ShieldCheck;
  title: string;
  body: string;
};

// Publish verified roster and availability records before clinical intake opens.
const CREDENTIALS: Credential[] = [
  {
    icon: ShieldCheck,
    title: "Credentials to verify",
    body: "Named clinicians and their verified qualifications will be published once participation is confirmed.",
  },
  {
    icon: MapPin,
    title: "Coverage to confirm",
    body: "TRTrx is not accepting patients in any state. The state guide explains how to check a clinician’s license.",
  },
  {
    icon: Stethoscope,
    title: "Physician-led model",
    body: "The planned model puts individual assessment and clinical judgment before a prescription.",
  },
];

export function PhysicianNetwork() {
  return (
    <section className="bg-surface">
      <div className="container py-20 md:py-28">
        <SectionHeader
          eyebrow="Physician Network"
          title="The team comes with *verified details.*"
          subtitle="Clinical arrangements are still being finalized. We do not have an announced physician roster or confirmed state coverage."
          align="center"
        />

        <ul className="mx-auto mt-14 grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {CREDENTIALS.map(({ icon: Icon, title, body }) => (
            <li
              key={title}
              className="flex flex-col rounded-2xl border border-border bg-surface p-7"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full border border-accent/30 bg-surface-alt">
                <Icon
                  size={24}
                  strokeWidth={1.75}
                  className="text-accent-strong"
                  aria-hidden
                />
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
