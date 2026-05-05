import type { GetStaticProps } from 'next';
import Link from 'next/link';
import { PageShell } from '@/components/layout/PageShell';
import { SEOHead } from '@/components/seo/SEOHead';
import { OrganizationSchema } from '@/components/seo/schemas/OrganizationSchema';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { HowItWorksSteps } from '@/components/sections/HowItWorksSteps';
import { ProcessLabPartners } from '@/components/sections/ProcessLabPartners';
import { ProcessConsultDetail } from '@/components/sections/ProcessConsultDetail';
import { ProcessShipping } from '@/components/sections/ProcessShipping';
import { ProcessSupport } from '@/components/sections/ProcessSupport';
import { FooterCTABand } from '@/components/sections/FooterCTABand';
import { Button } from '@/components/ui/button';

export default function HowItWorksPage() {
  return (
    <>
      <SEOHead
        title="How It Works"
        description="From symptom assessment to your first vial in under 14 days. Doctor-supervised TRT delivered to your door."
        path="/how-it-works"
        ogImage="/og/how-it-works.png"
      />
      <OrganizationSchema />

      <PageShell>
        <Breadcrumbs
          items={[
            { name: 'Home', href: '/' },
            { name: 'How It Works', href: '/how-it-works' },
          ]}
        />
        {/* Hero */}
        <section className="bg-surface">
          <div className="container max-w-hero px-5 pb-12 pt-20 text-center md:pb-16 md:pt-28 lg:pt-32">
            <p className="eyebrow mb-7 inline-flex flex-wrap justify-center gap-x-3 gap-y-1">
              <span>The Process</span>
              <span aria-hidden className="text-muted/60">·</span>
              <span>Under 14 Days</span>
              <span aria-hidden className="text-muted/60">·</span>
              <span>No Office Visit</span>
            </p>

            <h1
              className="font-serif text-display-xl font-medium text-primary"
              style={{ fontVariationSettings: "'opsz' 144" }}
            >
              From symptoms to your first vial in{' '}
              <span className="display-italic text-primary">under 14 days.</span>
            </h1>

            <p className="mx-auto mt-6 max-w-xl text-lg leading-[1.55] text-muted md:text-xl">
              Symptom checklist, at-home labs, a 15-minute video consult, free shipping, and your own 24/7 patient portal. No office visits. No off-brand third-party tools. No insurance hassles.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
              <Link href="/pricing">
                <Button size="md">See Pricing</Button>
              </Link>
              <Link href="/treatments">
                <Button size="md" variant="outline">
                  Browse Treatments
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <HowItWorksSteps showHeader={false} />
        <ProcessLabPartners />
        <ProcessConsultDetail />
        <ProcessShipping />
        <ProcessSupport />
        <FooterCTABand
          headline="Ready when"
          italic="you are."
          caption="Doctor-supervised · Cancel anytime · 60-day guarantee"
        />
      </PageShell>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  return { props: {}, revalidate: 86400 };
};
