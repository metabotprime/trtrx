import type { GetStaticProps } from 'next';
import Link from 'next/link';
import { PageShell } from '@/components/layout/PageShell';
import { SEOHead } from '@/components/seo/SEOHead';
import { EntityGraphSchema } from '@/components/seo/schemas/EntityGraphSchema';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { PolicyContent } from '@/components/sections/PolicyContent';

export default function MedicalReviewPolicyPage() {
  return (
    <>
      <SEOHead
        title="Medical Review Policy"
        description="How trtrx clinical content is reviewed: who reviews it, what the review covers, how often it happens, and the standards we hold it to."
        path="/medical-review-policy"
      />
      <EntityGraphSchema
        title="Medical Review Policy"
        description="How trtrx clinical content is reviewed: who reviews it, what the review covers, how often it happens, and the standards we hold it to."
        url="/medical-review-policy"
        pageType="WebPage"
      />
      <PageShell>
        <Breadcrumbs
          items={[
            { name: 'Home', href: '/' },
            { name: 'Medical Review Policy', href: '/medical-review-policy' },
          ]}
        />
        <PolicyContent
          eyebrow="Trust"
          title="Medical review policy"
          lastUpdated="June 2026"
          intro={[
            'Clinical content carries weight, so it has to clear a clinical bar. This policy describes how trtrx reviews patient-facing medical content — who reviews it, what the review covers, and how often it happens.',
          ]}
          sections={[
            {
              heading: 'What gets reviewed',
              blocks: [
                {
                  p: 'Our medical review standard applies to all patient-facing clinical content — blog posts, treatment pages, FAQs, and any page that makes a medical claim. Operational content that makes no clinical claim (such as pricing mechanics) does not require medical review.',
                },
              ],
            },
            {
              heading: 'Who reviews it',
              blocks: [
                {
                  p: 'Clinical content is reviewed by board-certified physicians with experience in men’s hormone health. Reviewers evaluate content independently of marketing goals; their job is accuracy and patient safety, not persuasion.',
                },
              ],
            },
            {
              heading: 'What the review covers',
              blocks: [
                {
                  list: [
                    'Factual accuracy and alignment with current clinical guidelines and FDA labeling.',
                    'A balanced presentation of benefits, risks, and alternatives — no overstated efficacy or minimized risk.',
                    'Correct framing of compounded and off-label treatments.',
                    'Appropriate sourcing, so specific clinical claims are backed by primary literature or guidelines.',
                  ],
                },
              ],
            },
            {
              heading: 'How often',
              blocks: [
                {
                  p: 'Content is reviewed before it is published for patients and re-reviewed on a regular cadence — at least annually, and sooner when the evidence or guidelines change. Each clinical article displays the date it was last reviewed.',
                },
              ],
            },
            {
              heading: 'Pre-launch transparency',
              blocks: [
                {
                  p: 'trtrx is preparing for launch. The articles currently shown are illustrative drafts written to this standard; every clinical page is brought through full physician review under this policy before public launch, and named reviewer attribution is added as our medical team is finalized.',
                },
              ],
            },
            {
              heading: 'Flagging a concern',
              blocks: [
                {
                  p: 'If you believe something in our content is inaccurate or out of date, tell us. We investigate flagged concerns and correct confirmed errors promptly.',
                },
              ],
            },
          ]}
          footnote={
            <>
              Flag a medical-accuracy concern at{' '}
              <Link
                href="mailto:editorial@trtrx.com"
                className="text-primary underline-offset-4 hover:text-accent-strong"
              >
                editorial@trtrx.com
              </Link>
              . See also our{' '}
              <Link
                href="/editorial-policy"
                className="text-primary underline-offset-4 hover:text-accent-strong"
              >
                editorial policy
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
