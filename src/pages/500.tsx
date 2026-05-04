import Link from 'next/link';
import { PageShell } from '@/components/layout/PageShell';
import { SEOHead } from '@/components/seo/SEOHead';
import { Button } from '@/components/ui/button';

export default function ServerErrorPage() {
  return (
    <>
      <SEOHead
        title="Something broke"
        description="An unexpected error occurred."
        path="/500"
        noindex
      />
      <PageShell hideMobileCTA>
        <section className="bg-surface">
          <div className="container flex flex-col items-center py-32 text-center md:py-40">
            <p className="eyebrow mb-6">500</p>
            <h1
              className="font-serif text-display-lg font-medium text-primary"
              style={{ fontVariationSettings: "'opsz' 144" }}
            >
              Something <span className="display-italic text-primary">broke.</span>
            </h1>
            <p className="mt-6 max-w-md text-base text-muted md:text-lg">
              We&apos;ve logged it. Try again in a moment, or head home.
            </p>

            <div className="mt-10">
              <Link href="/">
                <Button size="md">Go home</Button>
              </Link>
            </div>
          </div>
        </section>
      </PageShell>
    </>
  );
}
