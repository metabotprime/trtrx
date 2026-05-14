import type { GetStaticProps } from 'next';
import { PageShell } from '@/components/layout/PageShell';
import { SEOHead } from '@/components/seo/SEOHead';
import { OrganizationSchema } from '@/components/seo/schemas/OrganizationSchema';
import { ComingSoon } from '@/components/sections/ComingSoon';

export default function EditorialPolicyPage() {
  return (
    <>
      <SEOHead
        title="Editorial Policy"
        description="trtrx editorial standards, fact-checking, sourcing, and correction policy. The full policy publishes before public launch; this page exists so cross-site references resolve."
        path="/editorial-policy"
      />
      <OrganizationSchema />
      <PageShell>
        <ComingSoon
          eyebrow="Editorial Policy"
          title="Standards for *every page.*"
          subtitle="Our editorial policy covers sourcing, fact-checking, medical review, conflicts of interest, and corrections. The full policy ships before public launch. For editorial questions in the meantime, email editorial@trtrx.com."
        />
      </PageShell>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  return { props: {}, revalidate: 86400 };
};
