import type { GetStaticProps } from 'next';
import { PageShell } from '@/components/layout/PageShell';
import { SEOHead } from '@/components/seo/SEOHead';
import { OrganizationSchema } from '@/components/seo/schemas/OrganizationSchema';
import { ComingSoon } from '@/components/sections/ComingSoon';

export default function PrivacyPage() {
  return (
    <>
      <SEOHead
        title="Privacy Policy"
        description="How trtrx collects, uses, and protects your information."
        path="/privacy"
      />
      <OrganizationSchema />
      <PageShell>
        <ComingSoon
          eyebrow="Privacy Policy"
          title="Drafted by *counsel.*"
          subtitle="Lawyer-drafted privacy policy ships before launch."
        />
      </PageShell>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  return { props: {}, revalidate: 86400 };
};
