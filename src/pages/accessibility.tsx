import type { GetStaticProps } from 'next';
import { PageShell } from '@/components/layout/PageShell';
import { SEOHead } from '@/components/seo/SEOHead';
import { OrganizationSchema } from '@/components/seo/schemas/OrganizationSchema';
import { ComingSoon } from '@/components/sections/ComingSoon';

export default function AccessibilityPage() {
  return (
    <>
      <SEOHead
        title="Accessibility"
        description="trtrx's accessibility commitments and conformance efforts."
        path="/accessibility"
      />
      <OrganizationSchema />
      <PageShell>
        <ComingSoon
          eyebrow="Accessibility"
          title="Built to be *usable.*"
          subtitle="Full accessibility statement and WCAG 2.1 AA conformance details ship before launch."
        />
      </PageShell>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  return { props: {}, revalidate: 86400 };
};
