import type { GetStaticProps } from 'next';
import { PageShell } from '@/components/layout/PageShell';
import { SEOHead } from '@/components/seo/SEOHead';
import { OrganizationSchema } from '@/components/seo/schemas/OrganizationSchema';
import { ComingSoon } from '@/components/sections/ComingSoon';

export default function MedicalReviewPolicyPage() {
  return (
    <>
      <SEOHead
        title="Medical Review Policy"
        description="How trtrx medically reviews every page of clinical content. Reviewer credentials, frequency, and update cadence. Full policy ships pre-launch."
        path="/medical-review-policy"
      />
      <OrganizationSchema />
      <PageShell>
        <ComingSoon
          eyebrow="Medical Review Policy"
          title="Every clinical claim, *MD-reviewed.*"
          subtitle="Every blog post, treatment page, and FAQ on trtrx is reviewed by a board-certified physician before publication and re-reviewed on an annual cadence. The full policy — including reviewer credentials, sourcing standards, and update workflow — ships before public launch."
        />
      </PageShell>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  return { props: {}, revalidate: 86400 };
};
