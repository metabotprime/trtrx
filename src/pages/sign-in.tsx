import type { GetStaticProps } from 'next';
import Link from 'next/link';
import { ArrowRight, Lock } from 'lucide-react';
import { PageShell } from '@/components/layout/PageShell';
import { SEOHead } from '@/components/seo/SEOHead';
import { OrganizationSchema } from '@/components/seo/schemas/OrganizationSchema';
import { EmailCapture } from '@/components/forms/EmailCapture';

export default function SignInPage() {
  return (
    <>
      <SEOHead
        title="Sign in"
        description="Sign in to your trtrx patient portal."
        path="/sign-in"
        noindex
      />
      <OrganizationSchema />

      <PageShell hideMobileCTA>
        <section className="bg-surface">
          <div className="container flex min-h-[70vh] items-center justify-center px-5 py-16 md:py-24">
            <div className="w-full max-w-md">
              <div className="rounded-2xl border border-border bg-surface-alt p-8 md:p-10">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/10">
                    <Lock
                      size={18}
                      strokeWidth={2}
                      className="text-accent"
                      aria-hidden
                    />
                  </div>
                  <p className="font-mono text-[11px] uppercase tracking-tracked text-accent">
                    Patient Portal
                  </p>
                </div>

                <h1
                  className="mt-6 font-serif text-3xl font-medium leading-tight text-primary md:text-4xl"
                  style={{ fontVariationSettings: "'opsz' 144" }}
                >
                  The portal{' '}
                  <span className="display-italic text-primary">opens with us.</span>
                </h1>

                <p className="mt-4 text-[15px] leading-relaxed text-muted">
                  Your 24/7 patient portal — physician messaging, lab history, prescription tracking, and refill control — launches when our clinic does. If you&apos;re in our pilot cohort, you&apos;ll receive credentials by email.
                </p>

                <div className="mt-8">
                  <p className="font-mono text-[11px] uppercase tracking-tracked text-muted">
                    Get launch updates
                  </p>
                  <div className="mt-3">
                    <EmailCapture variant="card" />
                  </div>
                </div>
              </div>

              <div className="mt-6 text-center">
                <Link
                  href="/how-it-works"
                  className="group inline-flex items-center gap-1.5 text-sm font-medium text-primary underline-offset-4 transition-colors hover:text-accent"
                >
                  New here? See how trtrx works
                  <ArrowRight
                    size={14}
                    className="transition-transform duration-150 group-hover:translate-x-0.5"
                  />
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
