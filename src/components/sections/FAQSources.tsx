import Link from 'next/link';

export function FAQSources() {
  return (
    <p className="mx-auto mt-10 max-w-3xl text-sm leading-relaxed text-muted">
      General education; clinical review has not been completed. Read the{" "}
      <a
        className="text-primary underline underline-offset-4"
        href="https://www.endocrine.org/clinical-practice-guidelines/testosterone-therapy"
      >
        Endocrine Society guideline
      </a>{" "}
      and{" "}
      <a
        className="text-primary underline underline-offset-4"
        href="https://www.fda.gov/drugs/human-drug-compounding/compounding-and-fda-questions-and-answers"
      >
        FDA compounding information
      </a>
      , or explore our{" "}
      <Link className="text-primary underline underline-offset-4" href="/blog">
        sourced TRT guides
      </Link>{" "}
      for more context.
    </p>
  );
}
