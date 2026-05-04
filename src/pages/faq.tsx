import type { GetStaticProps } from 'next';
import { PageShell } from '@/components/layout/PageShell';
import { SEOHead } from '@/components/seo/SEOHead';
import { OrganizationSchema } from '@/components/seo/schemas/OrganizationSchema';
import { ComingSoon } from '@/components/sections/ComingSoon';

export default function FAQPage() {
  return (
    <>
      <SEOHead
        title="Frequently Asked Questions"
        description="Plain answers about testosterone therapy, fertility, insurance, state legality, and more. No medical hand-waving."
        path="/faq"
      />
      <OrganizationSchema />
      <PageShell>
        <ComingSoon
          eyebrow="Questions Men Ask"
          title="Plain answers. No *hand-waving.*"
          subtitle="From results timelines to fertility, FSA reimbursement to state legality. Full FAQ ships before launch."
        />
      </PageShell>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  return { props: {}, revalidate: 86400 };
};
