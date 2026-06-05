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
          lastUpdated="June 2026"
          intro={[
            'Good healthcare should be reachable by everyone. We are committed to making trtrx usable for all visitors, including people who rely on assistive technology, and we treat accessibility as an ongoing responsibility rather than a one-time checkbox.',
          ]}
          sections={[
            {
              heading: 'Our standard',
              blocks: [
                {
                  p: 'We design and build trtrx to conform with the Web Content Accessibility Guidelines (WCAG) 2.1 at Level AA, the widely recognized standard for accessible web experiences.',
                },
              ],
            },
            {
              heading: 'What we do',
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
                  p: 'Accessibility is never finished. We test as we build and fix issues as we find them. Some third-party or embedded content may not yet fully conform; where that is the case, we work with our providers toward a fix or an accessible alternative.',
                },
              ],
            },
            {
              heading: 'Tell us if something isn’t working',
              blocks: [
                {
                  p: 'If you encounter a barrier on this site or need information in a different format, we want to hear from you. We treat accessibility feedback as a priority and aim to respond and remediate promptly.',
                },
              ],
            },
          ]}
          footnote={
            <>
              Report an accessibility issue at{' '}
              <Link
                href="mailto:hello@trtrx.com"
                className="text-primary underline-offset-4 hover:text-accent-strong"
              >
                hello@trtrx.com
              </Link>
              .
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
