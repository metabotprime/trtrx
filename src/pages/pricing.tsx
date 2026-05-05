import type { GetStaticProps } from 'next';
import { PageShell } from '@/components/layout/PageShell';
import { SEOHead } from '@/components/seo/SEOHead';
import { OrganizationSchema } from '@/components/seo/schemas/OrganizationSchema';
import { PricingHero } from '@/components/sections/PricingHero';
import { FooterCTABand } from '@/components/sections/FooterCTABand';

export default function PricingPage() {
  return (
    <>
      <SEOHead
        title="Pricing"
        description="Transparent monthly pricing — no hidden fees, no insurance hoops. See your real first-month cost up front."
        path="/pricing"
      />
      <OrganizationSchema />
      <PageShell>
        <PricingHero />
        <FooterCTABand />
      </PageShell>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  return { props: {}, revalidate: 3600 };
};
