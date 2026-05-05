import type { GetStaticProps } from 'next';
import { PageShell } from '@/components/layout/PageShell';
import { SEOHead } from '@/components/seo/SEOHead';
import { OrganizationSchema } from '@/components/seo/schemas/OrganizationSchema';
import { WebSiteSchema } from '@/components/seo/schemas/WebSiteSchema';
import { FAQSchema } from '@/components/seo/schemas/FAQSchema';
import { getHomepageFAQs } from '@/content/faqs';
import { HeroCentered } from '@/components/sections/HeroCentered';
import { TrustStrip } from '@/components/sections/TrustStrip';
import { PricingTransparency } from '@/components/sections/PricingTransparency';
import { TreatmentGrid } from '@/components/sections/TreatmentGrid';
import { TreatmentTable } from '@/components/sections/TreatmentTable';
import { WhyDifferent } from '@/components/sections/WhyDifferent';
import { MedicalDirector } from '@/components/sections/MedicalDirector';
import { HowItWorksSteps } from '@/components/sections/HowItWorksSteps';
import { TestimonialCards } from '@/components/sections/TestimonialCards';
import { CompoundedExplainer } from '@/components/sections/CompoundedExplainer';
import { FAQAccordion } from '@/components/sections/FAQAccordion';
import { HomeBlogSection } from '@/components/sections/HomeBlogSection';
import { FooterCTABand } from '@/components/sections/FooterCTABand';

export default function HomePage() {
  return (
    <>
      <SEOHead
        title="Doctor-supervised testosterone therapy"
        description="Doctor-supervised TRT with transparent pricing and same-day shipping. No memberships you can't cancel. No hidden math."
        path="/"
      />
      <OrganizationSchema />
      <WebSiteSchema />
      <FAQSchema faqs={getHomepageFAQs()} />

      <PageShell>
        <HeroCentered />
        <TrustStrip />
        <PricingTransparency />
        <TreatmentGrid />
        <TreatmentTable />
        <WhyDifferent />
        <MedicalDirector />
        <HowItWorksSteps />
        <TestimonialCards />
        <CompoundedExplainer />
        <FAQAccordion />
        <HomeBlogSection />
        <FooterCTABand />
      </PageShell>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  return { props: {}, revalidate: 3600 };
};
