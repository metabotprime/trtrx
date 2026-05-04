import type { GetStaticProps } from 'next';
import { PageShell } from '@/components/layout/PageShell';
import { SEOHead } from '@/components/seo/SEOHead';
import { OrganizationSchema } from '@/components/seo/schemas/OrganizationSchema';
import { ComingSoon } from '@/components/sections/ComingSoon';

export default function MedicalDisclaimerPage() {
  return (
    <>
      <SEOHead
        title="Medical Disclaimer"
        description="Educational content notice and the limits of online TRT information."
        path="/medical-disclaimer"
      />
      <OrganizationSchema />
      <PageShell>
        <ComingSoon
          eyebrow="Medical Disclaimer"
          title="Educational, *not prescriptive.*"
          subtitle="Information on this site is for educational purposes only and is not a substitute for advice from a licensed clinician. Full disclaimer ships before launch."
        />
      </PageShell>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  return { props: {}, revalidate: 86400 };
};
