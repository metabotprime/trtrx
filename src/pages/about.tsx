import type { GetStaticProps } from 'next';
import { PageShell } from '@/components/layout/PageShell';
import { SEOHead } from '@/components/seo/SEOHead';
import { OrganizationSchema } from '@/components/seo/schemas/OrganizationSchema';
import { ComingSoon } from '@/components/sections/ComingSoon';

export default function AboutPage() {
  return (
    <>
      <SEOHead
        title="About trtrx"
        description="Doctor-supervised testosterone therapy, built around transparent pricing and a board-certified physician network."
        path="/about"
      />
      <OrganizationSchema />
      <PageShell>
        <ComingSoon
          eyebrow="Our Story"
          title="Built for men who *won't settle.*"
          subtitle="A board-certified physician network, transparent pricing, and a refusal to play the legacy-clinic game. Full team and medical-director profile ship before launch."
        />
      </PageShell>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  return { props: {}, revalidate: 86400 };
};
