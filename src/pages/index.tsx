import type { GetStaticProps } from 'next';
import { PageShell } from '@/components/layout/PageShell';
import { SEOHead } from '@/components/seo/SEOHead';
import { EntityGraphSchema } from '@/components/seo/schemas/EntityGraphSchema';
import { FAQSchema } from '@/components/seo/schemas/FAQSchema';
import { TREATMENT_ENTITIES } from '@/lib/seo/entities';
import { getHomepageFAQs } from '@/content/faqs';
import { HeroCentered } from '@/components/sections/HeroCentered';
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
        description="Explore trtrx's planned physician-led testosterone care, monthly pricing and treatment options. Intake is not open yet."
        path="/"
      />
      <EntityGraphSchema
        title="Doctor-supervised testosterone therapy"
        description="Explore trtrx's planned physician-led testosterone care, monthly pricing and treatment options. Intake is not open yet."
        url="/"
        aboutEntityIds={Object.values(TREATMENT_ENTITIES).map((t) => t.id)}
      />
      <FAQSchema faqs={getHomepageFAQs()} />

      <PageShell>
        <HeroCentered />
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
