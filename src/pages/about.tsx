import { CLINICAL_CONTENT_RELEASED } from "@/content/launch";
import { OperationalPage } from "@/components/availability/OperationalContent";
import type { GetStaticProps } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { SEOHead } from "@/components/seo/SEOHead";
import { EntityGraphSchema } from "@/components/seo/schemas/EntityGraphSchema";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { MedicalDirector } from "@/components/sections/MedicalDirector";
import { CompanyNarrative } from "@/components/sections/CompanyNarrative";
import { PhysicianNetwork } from "@/components/sections/PhysicianNetwork";
import { FooterCTABand } from "@/components/sections/FooterCTABand";

export default function AboutPage() {
  if (!CLINICAL_CONTENT_RELEASED) return <OperationalPage kind="about" />;
  return (
    <>
      <SEOHead
        title="About"
        description="TRTrx is preparing a physician-led testosterone care model with transparent planned pricing. Intake and clinical services are not open yet."
        path="/about"
        ogImage="/og/about.png"
      />
      <EntityGraphSchema
        title="About"
        description="TRTrx is preparing a physician-led testosterone care model with transparent planned pricing. Intake and clinical services are not open yet."
        url="/about"
        pageType="AboutPage"
      />
      {/* Verified clinician profiles can be added after roster confirmation. */}

      <PageShell>
        <Breadcrumbs
          items={[
            { name: "Home", href: "/" },
            { name: "About", href: "/about" },
          ]}
        />
        {/* Hero */}
        <section className="bg-surface">
          <div className="container max-w-hero px-5 pb-12 pt-20 text-center md:pb-16 md:pt-28 lg:pt-32">
            <p className="eyebrow mb-7 inline-flex flex-wrap justify-center gap-x-3 gap-y-1">
              <span>About trtrx</span>
              <span aria-hidden className="text-muted/60">
                ·
              </span>
              <span>Planned physician-led care</span>
              <span aria-hidden className="text-muted/60">
                ·
              </span>
              <span>No Surprises</span>
            </p>

            <h1
              className="font-serif text-display-xl font-medium text-primary"
              style={{ fontVariationSettings: "'opsz' 144" }}
            >
              Built for men who{" "}
              <span className="display-italic text-primary">
                won&apos;t settle.
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-xl text-lg leading-[1.55] text-muted md:text-xl">
              We are building a physician-led care model with clear pricing and
              useful education. Clinical intake, verified clinician details and
              state coverage are still in preparation.
            </p>
          </div>
        </section>

        <CompanyNarrative />
        <MedicalDirector />
        <PhysicianNetwork />
        <FooterCTABand headline="Start with" italic="clear information." />
      </PageShell>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  return { props: {}, revalidate: 86400 };
};
