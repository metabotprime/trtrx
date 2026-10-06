import { type Treatment } from "@/content/treatments";
import { SectionHeader } from "./SectionHeader";

type Props = { treatment: Treatment };

export function DosingProtocol({ treatment }: Props) {
  const rows = [
    { label: "Form factor", value: treatment.formFactor },
    { label: "Route", value: treatment.route },
    { label: "Frequency", value: treatment.frequency },
    { label: "Fertility", value: treatment.fertilityNote },
    { label: "Regulatory status", value: treatment.fdaStatus },
  ];

  return (
    <section className="bg-surface">
      <div className="container py-16 md:py-20">
        <SectionHeader
          eyebrow="Protocol"
          title="Details to *discuss.*"
          subtitle="These are general formulation details. Dosing and suitability require individual assessment. No treatment can currently be prescribed through TRTrx."
          align="center"
          size="md"
        />

        <div className="mx-auto mt-10 max-w-3xl divide-y divide-border border-y border-border">
          {rows.map((row) => (
            <div
              key={row.label}
              className="flex items-baseline justify-between gap-6 py-5"
            >
              <p className="font-mono text-[11px] uppercase tracking-tracked text-muted">
                {row.label}
              </p>
              <p className="text-right font-serif text-base font-medium text-primary md:text-lg">
                {row.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
