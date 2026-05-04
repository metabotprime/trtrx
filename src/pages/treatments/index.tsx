import type { GetStaticProps } from 'next';
import { PageShell } from '@/components/layout/PageShell';
import { SEOHead } from '@/components/seo/SEOHead';
import { OrganizationSchema } from '@/components/seo/schemas/OrganizationSchema';
import { ComingSoon } from '@/components/sections/ComingSoon';

export default function TreatmentsHubPage() {
  return (
    <>
      <SEOHead
        title="Treatments"
        description="Five evidence-based testosterone therapy options. Cypionate, enanthate, enclomiphene, HCG, and topical cream — compared side by side."
        path="/treatments"
      />
      <OrganizationSchema />
      <PageShell>
        <ComingSoon
          eyebrow="Five Evidence-Based Options"
          title="Find the right *treatment.*"
          subtitle="Cypionate, enanthate, enclomiphene, HCG, and topical cream. Choose by lifestyle, fertility goals, and how you want to dose. Full comparison ships before launch."
        />
      </PageShell>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  return { props: {}, revalidate: 86400 };
};
