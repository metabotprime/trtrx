import { CLINICAL_CONTENT_RELEASED } from "@/content/launch";
import { ClinicalContentHold } from "@/components/availability/ClinicalContentHold";
import type { GetStaticPaths, GetStaticProps } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { SEOHead } from "@/components/seo/SEOHead";
import { EntityGraphSchema } from "@/components/seo/schemas/EntityGraphSchema";
import { MedicalTherapySchema } from "@/components/seo/schemas/MedicalTherapySchema";
import { TREATMENT_ENTITIES } from "@/lib/seo/entities";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { ProductHero } from "@/components/sections/ProductHero";
import { ProductOverview } from "@/components/sections/ProductOverview";
import { DosingProtocol } from "@/components/sections/DosingProtocol";
import { ProductFitSplit } from "@/components/sections/ProductFitSplit";
import { TreatmentDisclosures } from "@/components/sections/TreatmentDisclosures";
import { RelatedTreatments } from "@/components/sections/RelatedTreatments";
import { FooterCTABand } from "@/components/sections/FooterCTABand";
import {
  TREATMENTS,
  getTreatmentBySlug,
  type Treatment,
} from "@/content/treatments";
import { type TreatmentSlug } from "@/lib/seo/routes";

type Props =
  { treatment: Treatment } | { held: true; title: string; slug: string };

export default function TreatmentDetailPage(props: Props) {
  if ("held" in props)
    return (
      <ClinicalContentHold
        title={props.title}
        path={`/treatments/${props.slug}`}
      />
    );
  const { treatment } = props;
  if (!CLINICAL_CONTENT_RELEASED)
    return (
      <ClinicalContentHold
        title={treatment.name}
        path={`/treatments/${treatment.slug}`}
      />
    );
  return (
    <>
      <SEOHead
        title={treatment.name}
        description={treatment.summary}
        path={`/treatments/${treatment.slug}`}
        ogImage={`/og/treatment-${treatment.slug}.png`}
      />
      <EntityGraphSchema
        title={treatment.name}
        description={treatment.summary}
        url={`/treatments/${treatment.slug}`}
        pageType="MedicalWebPage"
        aboutEntityIds={[TREATMENT_ENTITIES[treatment.slug]!.id]}
      />
      <MedicalTherapySchema treatment={treatment} />

      <PageShell>
        <Breadcrumbs
          items={[
            { name: "Home", href: "/" },
            { name: "Treatments", href: "/treatments" },
            { name: treatment.name, href: `/treatments/${treatment.slug}` },
          ]}
        />
        <ProductHero treatment={treatment} />
        <ProductOverview treatment={treatment} />
        <DosingProtocol treatment={treatment} />
        <ProductFitSplit treatment={treatment} />
        <TreatmentDisclosures treatment={treatment} />
        <RelatedTreatments currentSlug={treatment.slug} />
        <FooterCTABand
          headline="Learn about"
          italic={`${treatment.shortName.toLowerCase()}.`}
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
  if (!CLINICAL_CONTENT_RELEASED) {
    return {
      props: { held: true, title: treatment.name, slug: treatment.slug },
      revalidate: 86400,
    };
  }
  return { props: { treatment }, revalidate: 86400 };
};
