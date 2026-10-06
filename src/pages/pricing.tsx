import { CLINICAL_CONTENT_RELEASED } from "@/content/launch";
import { OperationalPage } from "@/components/availability/OperationalContent";
import type { GetStaticProps } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { SEOHead } from "@/components/seo/SEOHead";
import { EntityGraphSchema } from "@/components/seo/schemas/EntityGraphSchema";
import { FAQSchema } from "@/components/seo/schemas/FAQSchema";
import { TREATMENT_ENTITIES } from "@/lib/seo/entities";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { PricingHero } from "@/components/sections/PricingHero";
import { PricingBreakdown } from "@/components/sections/PricingBreakdown";
import { PricingPerProduct } from "@/components/sections/PricingPerProduct";
import { PricingFAQs } from "@/components/sections/PricingFAQs";
import { FooterCTABand } from "@/components/sections/FooterCTABand";
import { FAQS } from "@/content/faqs";

const PRICING_CATEGORIES = new Set(["insurance", "refund", "legality"]);
const pricingFaqs = FAQS.filter((f) => PRICING_CATEGORIES.has(f.category));

export default function PricingPage() {
  if (!CLINICAL_CONTENT_RELEASED) return <OperationalPage kind="pricing" />;
  return (
    <>
      <SEOHead
        title="Pricing"
        description="Review planned TRTrx monthly pricing: standard injectable plans at $219, enclomiphene at $179, cream at $199 and HCG adjunct at an additional $89. Intake is not open."
        path="/pricing"
        ogImage="/og/pricing.png"
      />
      <EntityGraphSchema
        title="Pricing"
        description="Review planned TRTrx monthly pricing: standard injectable plans at $219, enclomiphene at $179, cream at $199 and HCG adjunct at an additional $89. Intake is not open."
        url="/pricing"
        aboutEntityIds={Object.values(TREATMENT_ENTITIES).map((t) => t.id)}
      />
      <FAQSchema faqs={pricingFaqs} />
      <PageShell>
        <Breadcrumbs
          items={[
            { name: "Home", href: "/" },
            { name: "Pricing", href: "/pricing" },
          ]}
        />
        <PricingHero />
        <PricingBreakdown />
        <PricingPerProduct />
        <PricingFAQs />
        <FooterCTABand headline="Clear pricing." italic="Before you decide." />
      </PageShell>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  return { props: {}, revalidate: 3600 };
};
