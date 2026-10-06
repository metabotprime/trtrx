import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { SEOHead } from "@/components/seo/SEOHead";
import { buttonVariants } from "@/components/ui/button";

/** A held clinical route serves status only, without article content or medical schema. */
export function ClinicalContentHold({
  title,
  path,
}: {
  title: string;
  path: string;
}) {
  const description =
    "This clinical information is awaiting qualified review and is not published yet. TRTrx patient intake remains closed.";
  return (
    <PageShell hideMobileCTA>
      <SEOHead
        title={`${title}: review pending`}
        description={description}
        path={path}
        noindex
      />
      <section
        data-publication-status="clinical-review-pending"
        className="container py-20 md:py-28"
      >
        <div className="mx-auto max-w-3xl rounded-3xl border border-border bg-surface-alt p-7 sm:p-10 md:p-12">
          <p className="eyebrow">Clinical content pending review</p>
          <h1 className="mt-5 font-serif text-display-md font-medium text-primary">
            {title}
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted">
            This information is being prepared for qualified clinical review.
            The clinical content is not published yet, and no completed medical
            review is being claimed.
          </p>
          <p className="mt-4 leading-relaxed text-muted">
            Patient intake is not open. This page cannot be used to book care,
            request a prescription or purchase treatment.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/launch" className={buttonVariants({ size: "md" })}>
              See launch status
            </Link>
            <Link
              href="/pricing"
              className={buttonVariants({ size: "md", variant: "outline" })}
            >
              View planned pricing
            </Link>
          </div>
          <Link
            href="/medical-review-policy"
            className="mt-6 inline-block text-sm font-medium text-primary underline underline-offset-4"
          >
            How clinical review will be recorded
          </Link>
        </div>
      </section>
    </PageShell>
  );
}
