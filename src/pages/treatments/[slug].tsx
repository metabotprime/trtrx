import type { GetStaticPaths, GetStaticProps } from 'next';
import { PageShell } from '@/components/layout/PageShell';
import { SEOHead } from '@/components/seo/SEOHead';
import { OrganizationSchema } from '@/components/seo/schemas/OrganizationSchema';
import { ComingSoon } from '@/components/sections/ComingSoon';
import { TREATMENT_SLUGS, type TreatmentSlug } from '@/lib/seo/routes';

const COPY: Record<TreatmentSlug, { title: string; description: string; eyebrow: string; subtitle: string }> = {
  cypionate: {
    title: 'Testosterone Cypionate',
    description:
      'Long-acting injectable testosterone, weekly dosing. FDA-approved generic and compounded options.',
    eyebrow: 'Injectable · FDA-Approved',
    subtitle:
      'Long-acting injectable testosterone with weekly subcutaneous or intramuscular dosing. Detail page ships before launch.',
  },
  enanthate: {
    title: 'Testosterone Enanthate',
    description:
      'Long-acting injectable testosterone, weekly dosing. FDA-approved brand and generic.',
    eyebrow: 'Injectable · FDA-Approved',
    subtitle:
      'Long-acting injectable testosterone, pharmacokinetically near-identical to cypionate. Detail page ships before launch.',
  },
  enclomiphene: {
    title: 'Enclomiphene',
    description:
      'Daily oral SERM that boosts endogenous testosterone production. Fertility-preserving.',
    eyebrow: 'Oral · Fertility-Preserving',
    subtitle:
      'Daily oral SERM that increases natural testosterone production while preserving fertility. Detail page ships before launch.',
  },
  hcg: {
    title: 'HCG Therapy',
    description:
      'Maintains testicular function and fertility while on TRT. Subcutaneous injection.',
    eyebrow: 'Adjunct · Fertility-Preserving',
    subtitle:
      'Used adjunctively with TRT to maintain testicular function and fertility. Detail page ships before launch.',
  },
  cream: {
    title: 'Topical Cream',
    description:
      'Daily topical testosterone. Steady-state, no needles.',
    eyebrow: 'Topical · Daily',
    subtitle:
      'Daily topical testosterone application — steady-state delivery without injection peaks and valleys. Detail page ships before launch.',
  },
};

type Props = {
  slug: TreatmentSlug;
};

export default function TreatmentDetailPage({ slug }: Props) {
  const copy = COPY[slug];

  return (
    <>
      <SEOHead
        title={copy.title}
        description={copy.description}
        path={`/treatments/${slug}`}
      />
      <OrganizationSchema />
      <PageShell>
        <ComingSoon
          eyebrow={copy.eyebrow}
          title={`${copy.title.split(' ').slice(0, -1).join(' ')} *${copy.title.split(' ').slice(-1)}.*`}
          subtitle={copy.subtitle}
        />
      </PageShell>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: TREATMENT_SLUGS.map((slug) => ({ params: { slug } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const slug = params?.slug as TreatmentSlug;
  if (!slug || !TREATMENT_SLUGS.includes(slug)) {
    return { notFound: true };
  }
  return { props: { slug }, revalidate: 86400 };
};
