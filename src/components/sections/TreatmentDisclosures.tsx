import { type Treatment } from "@/content/treatments";
import { PLANNED_CARE_NOTICE } from "@/content/launch";
export function TreatmentDisclosures({ treatment }: { treatment: Treatment }) {
  const items = [
    PLANNED_CARE_NOTICE,
    "Any clinical use requires assessment of the diagnosis, medical history, benefits, risks and alternatives. Do not use this page to select a dose or change an existing prescription.",
    "Testosterone can suppress sperm production and requires appropriate screening and monitoring. Discuss fertility goals and relevant health conditions before treatment.",
    treatment.slug === "enclomiphene"
      ? "Enclomiphene is not FDA-approved. It is not an approved medicine being used for another indication; describing it simply as off-label would obscure that distinction."
      : treatment.slug === "hcg"
        ? "FDA-approved HCG products have specific indications. TRTrx has not confirmed the product or formulation for its planned adjunct. A price does not establish availability or clinical suitability."
        : treatment.slug === "cream"
          ? "Compounded testosterone cream is not FDA-approved. It should not be assumed equivalent to an approved gel. Ask about product-specific application and transfer precautions."
          : "FDA-approved testosterone products exist. Approval does not extend to compounded preparations, which are not FDA-approved. The exact product for any future TRTrx service is not confirmed.",
    "No clinical services are available in any state. This is general education, not medical advice or a clinician-patient relationship.",
  ];
  return (
    <section className="bg-surface-alt">
      <div className="container py-14 md:py-16">
        <div className="mx-auto max-w-3xl rounded-2xl border border-border bg-surface p-7 md:p-9">
          <h2 className="font-serif text-2xl text-primary">
            Safety, regulation and current availability
          </h2>
          <ul className="mt-5 list-disc space-y-4 pl-5 text-sm leading-relaxed text-muted">
            {items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-muted">
            Clinical review of this educational page has not been completed.
            Sources for further reading:
          </p>
          <ul className="mt-3 space-y-2 text-sm text-primary underline underline-offset-4">
            <li>
              <a href="https://www.endocrine.org/clinical-practice-guidelines/testosterone-therapy">
                Endocrine Society testosterone therapy guideline
              </a>
            </li>
            <li>
              <a href="https://www.fda.gov/drugs/human-drug-compounding/compounding-and-fda-questions-and-answers">
                FDA compounding questions and answers
              </a>
            </li>
            {treatment.slug === "enclomiphene" && (
              <li>
                <a href="https://www.fda.gov/media/158541/download">
                  FDA advisory committee briefing on enclomiphene
                </a>
              </li>
            )}
            {treatment.slug === "hcg" && (
              <li>
                <a href="https://www.fda.gov/drugs/medication-health-fraud/questions-and-answers-hcg-products-weight-loss">
                  FDA information on approved HCG products and uses
                </a>
              </li>
            )}
          </ul>
        </div>
      </div>
    </section>
  );
}
