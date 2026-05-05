import type { GetStaticProps } from 'next';
import { PageShell } from '@/components/layout/PageShell';
import { SEOHead } from '@/components/seo/SEOHead';
import { OrganizationSchema } from '@/components/seo/schemas/OrganizationSchema';
import { FAQSchema } from '@/components/seo/schemas/FAQSchema';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { FooterCTABand } from '@/components/sections/FooterCTABand';
import { FAQByCategory } from '@/components/sections/FAQByCategory';
import { FAQS } from '@/content/faqs';

export default function FAQPage() {
  return (
    <>
      <SEOHead
        title="Frequently Asked Questions"
        description="Plain answers about testosterone therapy, fertility, insurance, state legality, side effects, and more. No medical hand-waving."
        path="/faq"
      />
      <OrganizationSchema />
      <FAQSchema faqs={FAQS} />

      <PageShell>
        <Breadcrumbs
          items={[
            { name: 'Home', href: '/' },
            { name: 'FAQ', href: '/faq' },
          ]}
        />
        {/* Hero */}
        <section className="bg-surface">
          <div className="container max-w-hero px-5 pb-12 pt-20 text-center md:pb-16 md:pt-28 lg:pt-32">
            <p className="eyebrow mb-7 inline-flex flex-wrap justify-center gap-x-3 gap-y-1">
              <span>Questions Men Ask</span>
              <span aria-hidden className="text-muted/60">·</span>
              <span>Plain Answers</span>
            </p>

            <h1
              className="font-serif text-display-xl font-medium text-primary"
              style={{ fontVariationSettings: "'opsz' 144" }}
            >
              No medical{' '}
              <span className="display-italic text-primary">hand-waving.</span>
            </h1>

            <p className="mx-auto mt-6 max-w-xl text-lg leading-[1.55] text-muted md:text-xl">
              Twenty-five questions, ten categories. Use the jumps below or just scroll.
            </p>
          </div>
        </section>

        <FAQByCategory />

        <FooterCTABand
          headline="More questions?"
          italic="We're here."
          caption="hello@trtrx.com · Or get started below"
        />
      </PageShell>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  return { props: {}, revalidate: 86400 };
};
