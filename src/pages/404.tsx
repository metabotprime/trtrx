import Link from 'next/link';
import { PageShell } from '@/components/layout/PageShell';
import { SEOHead } from '@/components/seo/SEOHead';
import { Button } from '@/components/ui/button';

export default function NotFoundPage() {
  return (
    <>
      <SEOHead
        title="Page not found"
        description="The page you're looking for couldn't be found."
        path="/404"
        noindex
      />
      <PageShell hideMobileCTA>
        <section className="bg-surface">
          <div className="container flex flex-col items-center py-32 text-center md:py-40">
            <p className="eyebrow mb-6">404</p>
            <h1
              className="font-serif text-display-lg font-medium text-primary"
              style={{ fontVariationSettings: "'opsz' 144" }}
            >
              The page wandered <span className="display-italic text-primary">off.</span>
            </h1>
            <p className="mt-6 max-w-md text-base text-muted md:text-lg">
              Try the homepage or one of the pages below.
            </p>

            <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:gap-4">
              <Link href="/">
                <Button size="md">Go home</Button>
              </Link>
              <Link href="/treatments">
                <Button size="md" variant="outline">
                  Browse treatments
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </PageShell>
    </>
  );
}
