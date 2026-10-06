import type { GetStaticProps } from "next";
import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { SEOHead } from "@/components/seo/SEOHead";
import { EntityGraphSchema } from "@/components/seo/schemas/EntityGraphSchema";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { HowItWorksSteps } from "@/components/sections/HowItWorksSteps";
import { ProcessLabPartners } from "@/components/sections/ProcessLabPartners";
import { ProcessConsultDetail } from "@/components/sections/ProcessConsultDetail";
import { ProcessShipping } from "@/components/sections/ProcessShipping";
import { ProcessSupport } from "@/components/sections/ProcessSupport";
import { FooterCTABand } from "@/components/sections/FooterCTABand";
import { buttonVariants } from "@/components/ui/button";

export default function HowItWorksPage() {
  return (
    <>
      <SEOHead
        title="How It Works"
        description="Learn about the planned TRTrx assessment, testing, consultation and follow-up process. Patient intake is not open yet."
        path="/how-it-works"
        ogImage="/og/how-it-works.png"
      />
      <EntityGraphSchema
        title="How It Works"
        description="Learn about the planned TRTrx assessment, testing, consultation and follow-up process. Patient intake is not open yet."
        url="/how-it-works"
      />

      <PageShell>
        <Breadcrumbs
          items={[
            { name: "Home", href: "/" },
            { name: "How It Works", href: "/how-it-works" },
          ]}
        />
        {/* Hero */}
        <section className="bg-surface">
          <div className="container max-w-hero px-5 pb-12 pt-20 text-center md:pb-16 md:pt-28 lg:pt-32">
            <p className="eyebrow mb-7 inline-flex flex-wrap justify-center gap-x-3 gap-y-1">
              <span>The Process</span>
              <span aria-hidden className="text-muted/60">
                ·
              </span>
              <span>Planned care</span>
              <span aria-hidden className="text-muted/60">
                ·
              </span>
              <span>Intake not open</span>
            </p>

            <h1
              className="font-serif text-display-xl font-medium text-primary"
              style={{ fontVariationSettings: "'opsz' 144" }}
            >
              Understand the path to{" "}
              <span className="display-italic text-primary">
                informed care.
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-xl text-lg leading-[1.55] text-muted md:text-xl">
              The intended process brings medical history, appropriate testing
              and physician-led assessment together. Clinical, pharmacy and lab
              arrangements are still being finalized.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
              <Link href="/pricing" className={buttonVariants({ size: "md" })}>
                Planned pricing
              </Link>
              <Link
                href="/treatments"
                className={buttonVariants({ size: "md", variant: "outline" })}
              >
                Explore treatments
              </Link>
            </div>

            <p className="mt-8 text-eyebrow uppercase tracking-tracked text-muted">
              Patient intake is not open in any state
            </p>
          </div>
        </section>

        <HowItWorksSteps showHeader={false} />
        <ProcessLabPartners />
        <ProcessConsultDetail />
        <ProcessShipping />
        <ProcessSupport />
        <FooterCTABand headline="Know what" italic="comes next." />
      </PageShell>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  return { props: {}, revalidate: 86400 };
};
