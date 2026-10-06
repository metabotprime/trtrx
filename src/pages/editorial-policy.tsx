import type { GetStaticProps } from 'next';
import Link from 'next/link';
import { PageShell } from '@/components/layout/PageShell';
import { SEOHead } from '@/components/seo/SEOHead';
import { EntityGraphSchema } from '@/components/seo/schemas/EntityGraphSchema';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { PolicyContent } from '@/components/sections/PolicyContent';

export default function EditorialPolicyPage() {
  return (
    <>
      <SEOHead
        title="Editorial Policy"
        description="How trtrx researches, writes, sources, reviews, and corrects its content, including the distinction between an editorial update and clinical review."
        path="/editorial-policy"
      />
      <EntityGraphSchema
        title="Editorial Policy"
        description="How trtrx researches, writes, sources, reviews, and corrects its content, including the distinction between an editorial update and clinical review."
        url="/editorial-policy"
        pageType="WebPage"
      />
      <PageShell>
        <Breadcrumbs
          items={[
            { name: 'Home', href: '/' },
            { name: 'Editorial Policy', href: '/editorial-policy' },
          ]}
        />
        <PolicyContent
          eyebrow="Trust"
          title="Editorial policy"
          lastUpdated="October 6, 2026"
          intro={[
            'Men make real health decisions based on what they read about testosterone. We treat that responsibility seriously. This policy describes how trtrx content is researched, sourced, reviewed, and corrected.',
          ]}
          sections={[
            {
              heading: 'Our standard',
              blocks: [
                {
                  p: 'Every article aims to be accurate, current, balanced, and useful, written in plain English without hype. We explain trade-offs honestly, including when a treatment is not the right fit, and we avoid sensational or exaggerated claims about results.',
                },
              ],
            },
            {
              heading: 'Sourcing',
              blocks: [
                {
                  p: 'We base clinical statements on high-quality evidence and cite primary sources where possible:',
                },
                {
                  list: [
                    'Peer-reviewed research and randomized trials (for example, the TRAVERSE cardiovascular safety trial).',
                    'Clinical practice guidelines, including the Endocrine Society’s guidance on testosterone therapy.',
                    'FDA labeling and prescribing information, and other government and professional sources.',
                  ],
                },
                {
                  p: 'When an article makes a specific clinical claim, we link the study or guideline behind it rather than asking you to take our word for it.',
                },
              ],
            },
            {
              heading: 'Medical review',
              blocks: [
                {
                  p: (
                    <>
                      TRTrx is preparing to launch. Clinical review of the current
                      articles has not yet been completed. Source checking and
                      editorial updates do not constitute physician review. Our
                      intended clinical review process is described in the{' '}
                      <Link
                        href="/medical-review-policy"
                        className="text-primary underline-offset-4 hover:text-accent-strong"
                      >
                        medical review policy
                      </Link>
                      .
                    </>
                  ),
                },
              ],
            },
            {
              heading: 'Independence',
              blocks: [
                {
                  p: 'TRTrx is a commercial health brand preparing to launch. Our articles should help readers understand a question, including limitations, alternatives, and reasons treatment may not be appropriate. Planned offerings do not determine the evidence we include. We do not accept payment for favorable conclusions or present promotional content as independent medical advice.',
                },
              ],
            },
            {
              heading: 'Updates and corrections',
              blocks: [
                {
                  p: 'An editorial update date records a substantive content revision. A clinical review date is separate and appears only after a verified reviewer has completed a review of that article version. We do not change dates simply to make an article appear fresh. Material evidence changes and confirmed errors require reassessment of affected content.',
                },
              ],
            },
            {
              heading: 'Authorship',
              blocks: [
                {
                  p: 'Current articles are credited to the TRTrx Editorial Team. They are source-based editorial materials, not first-person clinician accounts or patient stories. We do not claim clinical authorship, invent identities, or add reviewer credentials before the identity and completed review are verified.',
                },
              ],
            },
          ]}
          footnote={
            <>
              For current contact information and launch status, see our{' '}
              <Link
                href="/contact"
                className="text-primary underline-offset-4 hover:text-accent-strong"
              >
                contact page
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
