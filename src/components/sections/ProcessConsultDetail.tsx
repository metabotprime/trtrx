import { Check } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const COVERED = [
  "Your symptoms, medical history and current medications",
  "What test results can and cannot establish",
  "Benefits, risks and alternatives to treatment",
  "Fertility goals and relevant specialist referrals",
  "Monitoring and follow-up needs",
  "Whether treatment is appropriate at all",
];

export function ProcessConsultDetail() {
  return (
    <section className="bg-surface-alt">
      <div className="container py-20 md:py-28">
        <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <p className="eyebrow mb-5">Step Three: Consult</p>
            <h2
              className="font-serif text-display-md font-medium leading-[1.1] text-primary"
              style={{ fontVariationSettings: "'opsz' 144" }}
            >
              A conversation with a{" "}
              <span className="display-italic text-primary">
                licensed physician.
              </span>
            </h2>
            <p className="mt-5 text-base leading-[1.7] text-muted md:text-lg">
              The planned model includes physician-led assessment. Consultations
              cannot currently be booked, and the clinician roster has not been
              finalized.
            </p>
          </div>

          <div className="lg:col-span-7">
            <p className="font-mono text-[11px] uppercase tracking-tracked text-muted">
              Questions for a consultation
            </p>
            <ul className="mt-5 space-y-3 text-sm text-text md:text-base">
              {COVERED.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Check
                    size={16}
                    strokeWidth={2.5}
                    className="mt-[3px] shrink-0 text-accent-strong"
                    aria-hidden
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
