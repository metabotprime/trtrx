import type { GetStaticPaths, GetStaticProps } from 'next';
import { PageShell } from '@/components/layout/PageShell';
import { SEOHead } from '@/components/seo/SEOHead';
import { OrganizationSchema } from '@/components/seo/schemas/OrganizationSchema';
import { MedicalTherapySchema } from '@/components/seo/schemas/MedicalTherapySchema';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { ProductHero } from '@/components/sections/ProductHero';
import { ProductOverview } from '@/components/sections/ProductOverview';
import { DosingProtocol } from '@/components/sections/DosingProtocol';
import { ProductFitSplit } from '@/components/sections/ProductFitSplit';
import { RelatedTreatments } from '@/components/sections/RelatedTreatments';
import { FooterCTABand } from '@/components/sections/FooterCTABand';
import { TREATMENTS, getTreatmentBySlug, type Treatment } from '@/content/treatments';
import { type TreatmentSlug } from '@/lib/seo/routes';

type Props = { treatment: Treatment };

export default function TreatmentDetailPage({ treatment }: Props) {
  return (
    <>
      <SEOHead
        title={treatment.name}
        description={treatment.summary}
        path={`/treatments/${treatment.slug}`}
      />
      <OrganizationSchema />
      <MedicalTherapySchema treatment={treatment} />

      <PageShell>
        <Breadcrumbs
          items={[
            { name: 'Home', href: '/' },
            { name: 'Treatments', href: '/treatments' },
            { name: treatment.name, href: `/treatments/${treatment.slug}` },
          ]}
        />
        <ProductHero treatment={treatment} />
        <ProductOverview treatment={treatment} />
        <DosingProtocol treatment={treatment} />
        <ProductFitSplit treatment={treatment} />
        <RelatedTreatments currentSlug={treatment.slug} />
        <FooterCTABand
          headline="Start with"
          italic={`${treatment.shortName.toLowerCase()}.`}
          caption="Doctor-supervised · Cancel anytime · 30-day guarantee"
        />
      </PageShell>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: TREATMENTS.map((t) => ({ params: { slug: t.slug } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const slug = params?.slug as TreatmentSlug;
  const treatment = getTreatmentBySlug(slug);
  if (!treatment) {
    return { notFound: true };
  }
  return { props: { treatment }, revalidate: 86400 };
};
