import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { SEOHead } from "@/components/seo/SEOHead";
import { EmailCapture } from "@/components/forms/EmailCapture";
import {
  CLINICAL_CONTENT_RELEASED,
  LAUNCH_MESSAGE,
  PLANNED_CARE_NOTICE,
} from "@/content/launch";

export default function LaunchPage() {
  return (
    <PageShell hideMobileCTA>
      <SEOHead
        title="Launch status"
        description={LAUNCH_MESSAGE}
        path="/launch"
        noindex
      />
      <section className="container py-20 md:py-28">
        <div className="mx-auto max-w-3xl">
          <p className="eyebrow">Preparing to launch</p>
          <h1 className="mt-4 font-serif text-display-lg text-primary">
            Care starts with{" "}
            <span className="display-italic">clear expectations.</span>
          </h1>
          <p className="mt-6 text-xl text-text">{LAUNCH_MESSAGE}</p>
          <p className="mt-4 leading-relaxed text-muted">
            {PLANNED_CARE_NOTICE} We are not accepting patients in any state,
            booking consultations, collecting intake information or taking
            payments. A confirmed opening date has not been announced.
          </p>
          <div className="mt-8 rounded-2xl border border-border bg-surface-alt p-6">
            <h2 className="font-serif text-2xl text-primary">
              What you can do now
            </h2>
            <ul className="mt-4 space-y-3 text-muted">
              <li>
                <Link
                  className="text-primary underline underline-offset-4"
                  href="/blog"
                >
                  {CLINICAL_CONTENT_RELEASED
                    ? "Read TRT guides"
                    : "See guide publication status"}
                </Link>{" "}
                {CLINICAL_CONTENT_RELEASED
                  ? "and prepare questions for your own clinician."
                  : "while clinical information awaits qualified review."}
              </li>
              <li>
                <Link
                  className="text-primary underline underline-offset-4"
                  href="/pricing"
                >
                  Review planned pricing
                </Link>
                , including the planned $219 monthly injectable plan. Prices are
                for planning, not an offer to purchase care.
              </li>
              <li>
                <Link
                  className="text-primary underline underline-offset-4"
                  href="/trt-in-your-state"
                >
                  Understand state availability
                </Link>
                . Coverage and clinical arrangements are still being finalized.
              </li>
            </ul>
          </div>
          <div className="mt-8">
            <EmailCapture variant="card" />
          </div>
          <p className="mt-6 text-sm text-muted">
            This website provides general education. It does not establish a
            clinician-patient relationship. If you need care now, contact your
            existing licensed healthcare provider.
          </p>
        </div>
      </section>
    </PageShell>
  );
}
