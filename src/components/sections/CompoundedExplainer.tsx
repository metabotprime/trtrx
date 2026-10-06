import { SectionHeader } from "./SectionHeader";
export function CompoundedExplainer() {
  return (
    <section className="bg-surface-alt">
      <div className="container py-20 md:py-28">
        <SectionHeader
          eyebrow="Education"
          title="Understand *the medication.*"
          subtitle="FDA approval and compounding are different. Ask about the exact product before making a decision."
        />
        <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-2">
          <article className="rounded-2xl border border-border bg-surface p-8">
            <h3 className="font-serif text-2xl text-primary">
              FDA-approved products
            </h3>
            <p className="mt-5 leading-relaxed text-muted">
              FDA reviews an approved drug for safety, effectiveness and quality
              for its labeled uses. Approval belongs to a specific product. It
              does not extend to every preparation containing the same active
              ingredient.
            </p>
            <p className="mt-4 leading-relaxed text-muted">
              Ask for the product name, labeled indication, administration
              instructions and relevant risks. A clinician should explain any
              proposed use outside the approved label.
            </p>
          </article>
          <article className="rounded-2xl border border-border bg-surface p-8">
            <h3 className="font-serif text-2xl text-primary">
              Compounded preparations
            </h3>
            <p className="mt-5 leading-relaxed text-muted">
              Compounded drugs are not FDA-approved. FDA does not review their
              safety, effectiveness or quality before marketing. A clinician and
              pharmacist should explain the individual medical need, risks and
              approved alternatives.
            </p>
            <p className="mt-4 leading-relaxed text-muted">
              A compounded preparation should not be assumed equivalent to an
              approved product. TRTrx has not confirmed its dispensing products
              or pharmacy arrangements.
            </p>
          </article>
        </div>
        <p className="mx-auto mt-8 max-w-3xl text-center text-sm text-muted">
          Source:{" "}
          <a
            href="https://www.fda.gov/drugs/human-drug-compounding/compounding-and-fda-questions-and-answers"
            className="text-primary underline underline-offset-4"
          >
            FDA: Compounding questions and answers
          </a>
          . General education, not a treatment recommendation.
        </p>
      </div>
    </section>
  );
}
