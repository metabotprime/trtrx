import type { GetStaticProps } from 'next';
import Link from 'next/link';
import { PageShell } from '@/components/layout/PageShell';
import { SEOHead } from '@/components/seo/SEOHead';
import { EntityGraphSchema } from '@/components/seo/schemas/EntityGraphSchema';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { PolicyContent } from '@/components/sections/PolicyContent';

export default function AccessibilityPage() {
  return (
    <>
      <SEOHead
        title="Accessibility"
        description="trtrx is committed to making its website usable for everyone, including people with disabilities, and targets WCAG 2.1 Level AA conformance."
        path="/accessibility"
      />
      <EntityGraphSchema
        title="Accessibility"
        description="trtrx is committed to making its website usable for everyone, including people with disabilities, and targets WCAG 2.1 Level AA conformance."
        url="/accessibility"
        pageType="WebPage"
      />
      <PageShell>
        <Breadcrumbs
          items={[
            { name: 'Home', href: '/' },
            { name: 'Accessibility', href: '/accessibility' },
          ]}
        />
        <PolicyContent
          eyebrow="Trust"
          title="Accessibility"
          lastUpdated="October 6, 2026"
          intro={[
            'Good healthcare should be reachable by everyone. We are committed to making trtrx usable for all visitors, including people who rely on assistive technology, and we treat accessibility as an ongoing responsibility rather than a one-time checkbox.',
          ]}
          sections={[
            {
              heading: 'Our standard',
              blocks: [
                {
                  p: 'Our target is the Web Content Accessibility Guidelines (WCAG) 2.1 at Level AA. This is a design goal, not a claim that the full website has received an independent accessibility audit or certification.',
                },
              ],
            },
            {
              heading: 'What we build for',
              blocks: [
                {
                  list: [
                    'Use semantic HTML and a logical heading structure so screen readers can navigate the page.',
                    'Maintain color-contrast ratios that meet AA thresholds for text and interactive elements.',
                    'Support full keyboard navigation with visible focus states.',
                    'Provide descriptive text alternatives for meaningful images and icons.',
                    'Build responsively so the site works across screen sizes and zoom levels.',
                    'Respect the “reduced motion” setting for visitors who prefer minimal animation.',
                  ],
                },
              ],
            },
            {
              heading: 'Ongoing work and known limitations',
              blocks: [
                {
                  p: 'We test as we build and address issues as we find them. A complete audit across assistive technologies and browser combinations has not been completed. The public support channel is also not yet available, so the website cannot currently receive accessibility reports.',
                },
              ],
            },
            {
              heading: 'Accessibility contact status',
              blocks: [
                {
                  p: 'Support contact details, including a route for accessibility feedback, will be published before intake opens. There is no active support mailbox or feedback form on this website. We are not promising a response time before that channel is available.',
                },
              ],
            },
          ]}
          footnote={
            <>
              Check our{' '}
              <Link
                href="/contact"
                className="text-primary underline-offset-4 hover:text-accent-strong"
              >
                contact status
              </Link>
              {' '}for support availability.
            </>
          }
        />
      </PageShell>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  return { props: {}, revalidate: 86400 };
};
