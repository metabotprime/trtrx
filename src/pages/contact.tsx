import type { GetStaticProps } from "next";
import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { SEOHead } from "@/components/seo/SEOHead";
import { EntityGraphSchema } from "@/components/seo/schemas/EntityGraphSchema";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { SectionHeader } from "@/components/sections/SectionHeader";

export default function ContactPage() {
  return (
    <>
      <SEOHead
        title="Contact"
        description="Email care@trtrx.com for general website and launch questions. Patient intake and consultations are not available yet."
        path="/contact"
        ogImage="/og/contact.png"
      />
      <EntityGraphSchema
        title="Contact"
        description="Email care@trtrx.com for general website and launch questions. Patient intake and consultations are not available yet."
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
              eyebrow="Contact TRTrx"
              title="Questions about *TRTrx?*"
              subtitle="Email care@trtrx.com for general questions about the website and launch plans. Patient intake remains closed."
            />

            <div className="mx-auto mt-12 max-w-xl rounded-2xl border border-border bg-surface-alt p-8 text-center md:p-10">
              <p className="font-mono text-[11px] uppercase tracking-tracked text-muted">
                Current availability
              </p>
              <p
                className="mt-3 font-serif text-2xl font-medium text-primary md:text-3xl"
                style={{ fontVariationSettings: "'opsz' 144" }}
              >
                Patient intake is not open.
              </p>
              <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-muted">
                Please do not email medical records, laboratory results, payment
                information or identification. We are not booking consultations. For medical
                concerns, contact your existing licensed healthcare provider.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
                <a href="mailto:care@trtrx.com" data-trtrx-cta="email" data-trtrx-surface="contact"
                  className="inline-flex min-h-12 items-center justify-center rounded-full bg-primary px-7 py-3 text-[15px] font-medium text-primary-foreground">
                  care@trtrx.com
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
