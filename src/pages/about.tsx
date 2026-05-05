import type { GetStaticProps } from 'next';
import { PageShell } from '@/components/layout/PageShell';
import { SEOHead } from '@/components/seo/SEOHead';
import { OrganizationSchema } from '@/components/seo/schemas/OrganizationSchema';
import { PersonSchema } from '@/components/seo/schemas/PersonSchema';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { MedicalDirector } from '@/components/sections/MedicalDirector';
import { CompanyNarrative } from '@/components/sections/CompanyNarrative';
import { PhysicianNetwork } from '@/components/sections/PhysicianNetwork';
import { FooterCTABand } from '@/components/sections/FooterCTABand';
import { MEDICAL_DIRECTOR } from '@/content/physician';

export default function AboutPage() {
  return (
    <>
      <SEOHead
        title="About"
        description="Doctor-supervised testosterone therapy built around transparent pricing, board-certified physicians, and a refusal to play the legacy-clinic game."
        path="/about"
        ogImage="/og/about.png"
      />
      <OrganizationSchema />
      <PersonSchema
        name={MEDICAL_DIRECTOR.name}
        jobTitle={MEDICAL_DIRECTOR.title}
        credentials={MEDICAL_DIRECTOR.credentials}
        image={MEDICAL_DIRECTOR.photo}
      />

      <PageShell>
        <Breadcrumbs
          items={[
            { name: 'Home', href: '/' },
            { name: 'About', href: '/about' },
          ]}
        />
        {/* Hero */}
        <section className="bg-surface">
          <div className="container max-w-hero px-5 pb-12 pt-20 text-center md:pb-16 md:pt-28 lg:pt-32">
            <p className="eyebrow mb-7 inline-flex flex-wrap justify-center gap-x-3 gap-y-1">
              <span>About trtrx</span>
              <span aria-hidden className="text-muted/60">·</span>
              <span>Doctor-Led</span>
              <span aria-hidden className="text-muted/60">·</span>
              <span>No Surprises</span>
            </p>

            <h1
              className="font-serif text-display-xl font-medium text-primary"
              style={{ fontVariationSettings: "'opsz' 144" }}
            >
              Built for men who{' '}
              <span className="display-italic text-primary">won&apos;t settle.</span>
            </h1>

            <p className="mx-auto mt-6 max-w-xl text-lg leading-[1.55] text-muted md:text-xl">
              A board-certified physician network, transparent pricing, and a refusal to play the legacy-clinic game.
            </p>
          </div>
        </section>

        <CompanyNarrative />
        <MedicalDirector />
        <PhysicianNetwork />
        <FooterCTABand
          headline="Bring your concerns."
          italic="We'll listen."
          caption="Doctor-supervised · Cancel anytime · 60-day guarantee"
        />
      </PageShell>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  return { props: {}, revalidate: 86400 };
};
