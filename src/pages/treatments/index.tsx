import type { GetStaticProps } from 'next';
import { PageShell } from '@/components/layout/PageShell';
import { SEOHead } from '@/components/seo/SEOHead';
import { OrganizationSchema } from '@/components/seo/schemas/OrganizationSchema';
import { TreatmentGrid } from '@/components/sections/TreatmentGrid';
import { TreatmentTable } from '@/components/sections/TreatmentTable';
import { CompoundedExplainer } from '@/components/sections/CompoundedExplainer';
import { FooterCTABand } from '@/components/sections/FooterCTABand';
import { SectionHeader } from '@/components/sections/SectionHeader';

export default function TreatmentsHubPage() {
  return (
    <>
      <SEOHead
        title="Treatments"
        description="Five evidence-based testosterone therapy options. Cypionate, enanthate, enclomiphene, HCG, and topical cream — compared side-by-side."
        path="/treatments"
      />
      <OrganizationSchema />

      <PageShell>
        <section className="bg-surface">
          <div className="container max-w-hero pb-12 pt-20 text-center md:pb-16 md:pt-28 lg:pt-32">
            <SectionHeader
              eyebrow="Five Evidence-Based Options"
              title="The right treatment, *the right way.*"
              subtitle="Choose by lifestyle, fertility goals, and how you want to dose. Every protocol is set by a board-certified physician — not a quiz."
              align="center"
              size="lg"
            />
          </div>
        </section>

        <TreatmentGrid showHeader={false} />
        <TreatmentTable />
        <CompoundedExplainer />
        <FooterCTABand
          headline="Pick the one that"
          italic="fits your life."
          caption="Doctor-supervised · Free shipping · Cancel anytime"
        />
      </PageShell>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  return { props: {}, revalidate: 86400 };
};
