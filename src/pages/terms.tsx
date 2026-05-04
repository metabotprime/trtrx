import type { GetStaticProps } from 'next';
import { PageShell } from '@/components/layout/PageShell';
import { SEOHead } from '@/components/seo/SEOHead';
import { OrganizationSchema } from '@/components/seo/schemas/OrganizationSchema';
import { ComingSoon } from '@/components/sections/ComingSoon';

export default function TermsPage() {
  return (
    <>
      <SEOHead
        title="Terms of Service"
        description="Terms governing the use of trtrx services."
        path="/terms"
      />
      <OrganizationSchema />
      <PageShell>
        <ComingSoon
          eyebrow="Terms of Service"
          title="Drafted by *counsel.*"
          subtitle="Lawyer-drafted terms of service ship before launch."
        />
      </PageShell>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  return { props: {}, revalidate: 86400 };
};
