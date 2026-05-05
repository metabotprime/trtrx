import type { GetStaticProps } from 'next';
import { PageShell } from '@/components/layout/PageShell';
import { SEOHead } from '@/components/seo/SEOHead';
import { OrganizationSchema } from '@/components/seo/schemas/OrganizationSchema';
import { FAQSchema } from '@/components/seo/schemas/FAQSchema';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { PricingHero } from '@/components/sections/PricingHero';
import { PricingBreakdown } from '@/components/sections/PricingBreakdown';
import { PricingPerProduct } from '@/components/sections/PricingPerProduct';
import { PricingFAQs } from '@/components/sections/PricingFAQs';
import { FooterCTABand } from '@/components/sections/FooterCTABand';
import { FAQS } from '@/content/faqs';

const PRICING_CATEGORIES = new Set(['insurance', 'refund', 'legality']);
const pricingFaqs = FAQS.filter((f) => PRICING_CATEGORIES.has(f.category));

export default function PricingPage() {
  return (
    <>
      <SEOHead
        title="Pricing"
        description="Transparent monthly pricing — no hidden fees, no insurance hoops. See your real first-month cost up front."
        path="/pricing"
        ogImage="/og/pricing.png"
      />
      <OrganizationSchema />
      <FAQSchema faqs={pricingFaqs} />
      <PageShell>
        <Breadcrumbs
          items={[
            { name: 'Home', href: '/' },
            { name: 'Pricing', href: '/pricing' },
          ]}
        />
        <PricingHero />
        <PricingBreakdown />
        <PricingPerProduct />
        <PricingFAQs />
        <FooterCTABand
          headline="Ready when"
          italic="you are."
          caption="Free shipping · 60-day guarantee · Cancel anytime"
        />
      </PageShell>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  return { props: {}, revalidate: 3600 };
};
