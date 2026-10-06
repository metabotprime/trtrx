import { Check } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

type Difference = {
  title: string;
  body: string;
};

const DIFFERENCES: Difference[] = [
  {
    title: "Transparent planned pricing",
    body: "The planned standard injectable price is $219 per month, with no setup fee or separate membership. Review the full plan before comparing costs.",
  },
  {
    title: "Visible inclusions",
    body: "The planned bundle includes medication, physician supervision, two lab panels per year and shipping. Final service details must be confirmed before purchase.",
  },
  {
    title: "Individual assessment",
    body: "The intended model is physician-led. A diagnosis, testing and clinical judgment would come before any treatment decision.",
  },
  {
    title: "Clear launch status",
    body: "Intake is not open. Verified clinician details, state coverage and care arrangements will be published before patients can begin.",
  },
];

export function WhyDifferent() {
  return (
    <section className="bg-surface">
      <div className="container py-20 md:py-28">
        <SectionHeader
          eyebrow="Why trtrx"
          title="What we are *building.*"
          subtitle="The planned service starts with clear information about cost, clinical decisions and availability."
          align="center"
        />

        <ul className="mx-auto mt-14 grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
          {DIFFERENCES.map((d) => (
            <li
              key={d.title}
              className="flex flex-col rounded-2xl border border-border bg-surface-alt p-7 md:p-8"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/10">
                  <Check
                    size={18}
                    strokeWidth={2.5}
                    className="text-accent-strong"
                    aria-hidden
                  />
                </div>
                <h3
                  className="mt-1 font-serif text-xl font-medium leading-tight text-primary md:text-[22px]"
                  style={{ fontVariationSettings: "'opsz' 144" }}
                >
                  {d.title}
                </h3>
              </div>
              <p className="mt-4 text-[15px] leading-[1.65] text-text md:text-base">
                {d.body}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
