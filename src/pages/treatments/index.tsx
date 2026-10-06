import type { GetStaticProps } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { SEOHead } from "@/components/seo/SEOHead";
import { EntityGraphSchema } from "@/components/seo/schemas/EntityGraphSchema";
import { ItemListSchema } from "@/components/seo/schemas/ItemListSchema";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { TREATMENT_ENTITIES } from "@/lib/seo/entities";
import { TreatmentGrid } from "@/components/sections/TreatmentGrid";
import { TreatmentTable } from "@/components/sections/TreatmentTable";
import { CompoundedExplainer } from "@/components/sections/CompoundedExplainer";
import { FooterCTABand } from "@/components/sections/FooterCTABand";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { TREATMENTS } from "@/content/treatments";

export default function TreatmentsHubPage() {
  return (
    <>
      <SEOHead
        title="Treatments"
        description="Learn about testosterone formulations, enclomiphene and HCG. Review planned TRTrx prices, regulatory distinctions and questions for a clinician."
        path="/treatments"
        ogImage="/og/treatments.png"
      />
      <EntityGraphSchema
        title="Treatments"
        description="Learn about testosterone formulations, enclomiphene and HCG. Review planned TRTrx prices, regulatory distinctions and questions for a clinician."
        url="/treatments"
        pageType="CollectionPage"
        aboutEntityIds={Object.values(TREATMENT_ENTITIES).map((t) => t.id)}
      />
      <ItemListSchema
        name="trtrx Treatments"
        items={TREATMENTS.map((t) => ({
          name: t.name,
          url: `/treatments/${t.slug}`,
          description: t.summary,
        }))}
      />

      <PageShell>
        <Breadcrumbs
          items={[
            { name: "Home", href: "/" },
            { name: "Treatments", href: "/treatments" },
          ]}
        />
        <section className="bg-surface">
          <div className="container max-w-hero pb-12 pt-20 text-center md:pb-16 md:pt-28 lg:pt-32">
            <SectionHeader
              as="h1"
              eyebrow="Treatment education"
              title="The right treatment, *the right way.*"
              subtitle="Understand the differences before a clinical discussion. Treatment requires individual assessment; TRTrx intake is not open."
              align="center"
              size="lg"
            />
          </div>
        </section>

        <TreatmentGrid showHeader={false} />
        <TreatmentTable />
        <CompoundedExplainer />
        <FooterCTABand
          headline="Questions first."
          italic="Clinical decisions next."
        />
      </PageShell>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  return { props: {}, revalidate: 86400 };
};
