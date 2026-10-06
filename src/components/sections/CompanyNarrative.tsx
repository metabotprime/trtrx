import { SectionHeader } from "./SectionHeader";

const PARAGRAPHS = [
  "TRTrx is being developed for people who want clearer information about testosterone care and its costs. The site brings educational guides, treatment comparisons and planned pricing together before clinical intake opens.",
  "The planned standard injectable program is $219 per month, with no setup fee or separate membership. Pricing is a plan for the service, not an available purchase. Final clinical, pharmacy, laboratory and billing arrangements still need to be confirmed.",
  "Our priority before accepting patients is to make the essentials visible: verified clinician details, state availability, medication information and service terms. We will not present an unconfirmed roster or a patient story as proof.",
];

export function CompanyNarrative() {
  return (
    <section className="bg-surface-alt">
      <div className="container py-20 md:py-28">
        <SectionHeader
          eyebrow="Our Story"
          title="Clear information. *Clear expectations.*"
          align="center"
        />

        <div className="mx-auto mt-12 max-w-3xl space-y-6 text-lg leading-[1.7] text-text">
          {PARAGRAPHS.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
