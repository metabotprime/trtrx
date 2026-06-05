import type { GetStaticProps } from 'next';
import { PageShell } from '@/components/layout/PageShell';
import { SEOHead } from '@/components/seo/SEOHead';
import { EntityGraphSchema } from '@/components/seo/schemas/EntityGraphSchema';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { SectionHeader } from '@/components/sections/SectionHeader';

const SUBJECT = encodeURIComponent('trtrx — general inquiry');
const BODY = encodeURIComponent(
  "Hi trtrx team,\n\n[Your message here]\n\nThanks,\n",
);
const MAILTO = `mailto:hello@trtrx.com?subject=${SUBJECT}&body=${BODY}`;

export default function ContactPage() {
  return (
    <>
      <SEOHead
        title="Contact"
        description="General inquiries: hello@trtrx.com. For medical questions, please get started with a consult."
        path="/contact"
        ogImage="/og/contact.png"
      />
      <EntityGraphSchema
        title="Contact"
        description="General inquiries: hello@trtrx.com. For medical questions, please get started with a consult."
        url="/contact"
        pageType="ContactPage"
      />
      <PageShell hideMobileCTA>
        <Breadcrumbs
          items={[
            { name: 'Home', href: '/' },
            { name: 'Contact', href: '/contact' },
          ]}
        />
        <section className="bg-surface">
          <div className="container py-24 md:py-32">
            <SectionHeader
              as="h1"
              eyebrow="Get In Touch"
              title="Talk to *us.*"
              subtitle="General inquiries only. For medical questions, please start a consult through the Get Started flow."
            />

            <div className="mx-auto mt-12 max-w-xl rounded-2xl border border-border bg-surface-alt p-8 text-center md:p-10">
              <p className="font-mono text-[11px] uppercase tracking-tracked text-muted">
                Email
              </p>
              <p
                className="mt-3 font-serif text-2xl font-medium text-primary md:text-3xl"
                style={{ fontVariationSettings: "'opsz' 144" }}
              >
                hello@trtrx.com
              </p>
              <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-muted">
                Replies within one business day, often same-day. For medical
                questions please get started with a consult instead.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
                <a
                  href={MAILTO}
                  className="inline-flex h-12 items-center justify-center rounded-full bg-accent px-7 text-[15px] font-medium text-accent-foreground transition-all hover:-translate-y-px hover:bg-accent/90"
                >
                  Compose email
                </a>
                <a
                  href="/how-it-works"
                  className="inline-flex h-12 items-center justify-center rounded-full border border-primary bg-transparent px-7 text-[15px] font-medium text-primary transition-all hover:-translate-y-px hover:bg-primary hover:text-primary-foreground"
                >
                  Start a consult
                </a>
              </div>
            </div>
          </div>
        </section>
      </PageShell>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  return { props: {}, revalidate: 86400 };
};
