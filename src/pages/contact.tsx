import type { GetStaticProps } from 'next';
import { PageShell } from '@/components/layout/PageShell';
import { SEOHead } from '@/components/seo/SEOHead';
import { OrganizationSchema } from '@/components/seo/schemas/OrganizationSchema';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { SectionHeader } from '@/components/sections/SectionHeader';

export default function ContactPage() {
  return (
    <>
      <SEOHead
        title="Contact"
        description="General inquiries: hello@trtrx.com. For medical questions, please get started with a consult."
        path="/contact"
      />
      <OrganizationSchema />
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
              eyebrow="Get In Touch"
              title="Talk to *us.*"
              subtitle="General inquiries only. For medical questions, please start a consult through the Get Started flow."
            />

            <form
              action="mailto:hello@trtrx.com"
              method="post"
              encType="text/plain"
              className="mx-auto mt-12 grid max-w-xl gap-5"
            >
              <Field label="Name" name="name" type="text" required />
              <Field label="Email" name="email" type="email" required />
              <Field label="Phone (optional)" name="phone" type="tel" />
              <div>
                <label
                  htmlFor="message"
                  className="block font-mono text-eyebrow uppercase tracking-tracked text-muted"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="mt-2 w-full resize-none rounded-2xl border border-border bg-surface px-4 py-3 text-base text-text shadow-sm placeholder:text-muted/60 focus:border-accent focus:outline-none"
                />
              </div>

              <p className="text-xs leading-relaxed text-muted">
                This form is for general inquiries. For medical questions, please get started with a consult.
              </p>

              <div className="pt-2">
                <button
                  type="submit"
                  className="inline-flex h-12 items-center justify-center rounded-full bg-accent px-7 text-[15px] font-medium text-accent-foreground transition-all hover:-translate-y-px hover:bg-accent/90"
                >
                  Send message
                </button>
              </div>
            </form>
          </div>
        </section>
      </PageShell>
    </>
  );
}

function Field({
  label,
  name,
  type,
  required,
}: {
  label: string;
  name: string;
  type: string;
  required?: boolean;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="block font-mono text-eyebrow uppercase tracking-tracked text-muted"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="mt-2 h-12 w-full rounded-full border border-border bg-surface px-5 text-base text-text shadow-sm placeholder:text-muted/60 focus:border-accent focus:outline-none"
      />
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  return { props: {}, revalidate: 86400 };
};
