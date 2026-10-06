import type { GetStaticProps } from "next";
import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { SEOHead } from "@/components/seo/SEOHead";
import { EntityGraphSchema } from "@/components/seo/schemas/EntityGraphSchema";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { SectionHeader } from "@/components/sections/SectionHeader";

const SUBJECT = encodeURIComponent("TRTrx general inquiry");
const BODY = encodeURIComponent(
  "Hi trtrx team,\n\n[Your message here]\n\nThanks,\n",
);
const MAILTO = `mailto:hello@trtrx.com?subject=${SUBJECT}&body=${BODY}`;

export default function ContactPage() {
  return (
    <>
      <SEOHead
        title="Contact"
        description="Contact hello@trtrx.com for general inquiries. Patient intake and consultations are not open. Do not send sensitive health information."
        path="/contact"
        ogImage="/og/contact.png"
      />
      <EntityGraphSchema
        title="Contact"
        description="Contact hello@trtrx.com for general inquiries. Patient intake and consultations are not open. Do not send sensitive health information."
        url="/contact"
        pageType="ContactPage"
      />
      <PageShell hideMobileCTA>
        <Breadcrumbs
          items={[
            { name: "Home", href: "/" },
            { name: "Contact", href: "/contact" },
          ]}
        />
        <section className="bg-surface">
          <div className="container py-24 md:py-32">
            <SectionHeader
              as="h1"
              eyebrow="Get In Touch"
              title="Talk to *us.*"
              subtitle="General inquiries only. Intake and consultations are not open. Please do not email medical records or other sensitive health information."
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
                This link opens your own email app; the website does not submit
                a form. For medical concerns, contact your existing licensed
                healthcare provider.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
                <a
                  href={MAILTO}
                  className="inline-flex h-12 items-center justify-center rounded-full bg-accent px-7 text-[15px] font-medium text-accent-foreground transition-all hover:-translate-y-px hover:bg-accent/90"
                >
                  Compose email
                </a>
                <Link
                  href="/launch"
                  className="inline-flex h-12 items-center justify-center rounded-full border border-primary bg-transparent px-7 text-[15px] font-medium text-primary transition-all hover:-translate-y-px hover:bg-primary hover:text-primary-foreground"
                >
                  Launch status
                </Link>
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
