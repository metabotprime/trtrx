import type { GetStaticProps } from 'next';
import { PageShell } from '@/components/layout/PageShell';
import { SEOHead } from '@/components/seo/SEOHead';
import { OrganizationSchema } from '@/components/seo/schemas/OrganizationSchema';
import { ComingSoon } from '@/components/sections/ComingSoon';

export default function PricingPage() {
  return (
    <>
      <SEOHead
        title="Pricing"
        description="Transparent monthly pricing. Initial labs, physician consult, and your first vial — no hidden fees, no insurance hoops."
        path="/pricing"
      />
      <OrganizationSchema />
      <PageShell>
        <ComingSoon
          eyebrow="Transparent Pricing"
          title="Your first month, *all in.*"
          subtitle="Initial labs, physician consult, first vial, and free shipping — itemized so you see exactly what you're paying for. Full pricing page ships before launch."
        />
      </PageShell>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  return { props: {}, revalidate: 3600 };
};
