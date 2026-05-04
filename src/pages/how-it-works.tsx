import type { GetStaticProps } from 'next';
import { PageShell } from '@/components/layout/PageShell';
import { SEOHead } from '@/components/seo/SEOHead';
import { OrganizationSchema } from '@/components/seo/schemas/OrganizationSchema';
import { ComingSoon } from '@/components/sections/ComingSoon';

export default function HowItWorksPage() {
  return (
    <>
      <SEOHead
        title="How it works"
        description="From symptom assessment to your first vial in under 14 days. Doctor-supervised TRT delivered to your door."
        path="/how-it-works"
      />
      <OrganizationSchema />
      <PageShell>
        <ComingSoon
          eyebrow="The Process"
          title="From symptoms to your first vial in *under 14 days.*"
          subtitle="Symptom assessment, at-home labs through Quest and Labcorp partners, a 15-minute physician video consult, and free, fast, discreet shipping. Full step-by-step ships before launch."
        />
      </PageShell>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  return { props: {}, revalidate: 86400 };
};
