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
        description="TRTrx clinical review requirements, the current pending-review status, and how verified reviewer credits will be shown."
        path="/medical-review-policy"
      />
      <EntityGraphSchema
        title="Medical Review Policy"
        description="TRTrx clinical review requirements, the current pending-review status, and how verified reviewer credits will be shown."
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
          lastUpdated="October 6, 2026"
          intro={[
            'Clinical review of the current TRTrx articles has not yet been completed. This policy describes the review required before the planned public launch and how completed reviews will be recorded. Source-based editorial work does not replace clinical review.',
          ]}
          sections={[
            {
              heading: 'What gets reviewed',
              blocks: [
                {
                  p: 'The review requirement covers patient-facing clinical claims in articles, treatment pages, FAQs, and related site content. Purely operational content has a separate factual verification process. A pricing article that also makes a medical claim still requires review of that claim.',
                },
              ],
            },
            {
              heading: 'Who reviews it',
              blocks: [
                {
                  p: 'The planned process requires an appropriately qualified clinician with relevant experience. The reviewer’s identity and credentials must be verified, and the review must cover the specific content version. No reviewer has been credited for the current articles because completed clinical review has not been established.',
                },
              ],
            },
            {
              heading: 'What the review covers',
              blocks: [
                {
                  list: [
                    'Factual accuracy and the differences between current guidelines, agency announcements, and the applicable product labeling.',
                    'A balanced presentation of benefits, risks, and alternatives, without overstated efficacy or minimized risk.',
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
                  p: 'Completed review will be recorded separately from an editorial update, with the reviewer and review date attached to the reviewed version. Substantive clinical changes require a new review. The planned review cadence is at least annually, with earlier reassessment when evidence, labeling, or guidelines materially change.',
                },
              ],
            },
            {
              heading: 'Pre-launch transparency',
              blocks: [
                {
                  p: 'TRTrx is preparing to launch and patient intake is closed. Current articles contain substantive, sourced educational material, but clinical review remains pending. The visible notice and absence of reviewer metadata reflect that status. Preparing an article or linking a guideline does not establish that a physician reviewed it.',
                },
              ],
            },
            {
              heading: 'Flagging a concern',
              blocks: [
                {
                  p: 'If content is found to be inaccurate or outdated, the affected claim must be corrected or removed and any previous clinical review reassessed. Current contact arrangements are described on the contact page; a correction channel is not a route for urgent medical care.',
                },
              ],
            },
          ]}
          footnote={
            <>
              See current contact arrangements on our{' '}
              <Link
                href="/contact"
                className="text-primary underline-offset-4 hover:text-accent-strong"
              >
                contact page
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
