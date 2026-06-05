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
        description="How trtrx researches, writes, sources, reviews, and corrects its content — and how we keep editorial independent from commerce."
        path="/editorial-policy"
      />
      <EntityGraphSchema
        title="Editorial Policy"
        description="How trtrx researches, writes, sources, reviews, and corrects its content — and how we keep editorial independent from commerce."
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
          lastUpdated="June 2026"
          intro={[
            'Men make real health decisions based on what they read about testosterone. We treat that responsibility seriously. This policy describes how trtrx content is researched, sourced, reviewed, and corrected.',
          ]}
          sections={[
            {
              heading: 'Our standard',
              blocks: [
                {
                  p: 'Every article aims to be accurate, current, balanced, and genuinely useful — written in plain English without hype. We explain trade-offs honestly, including when a treatment is not the right fit, and we avoid sensational or exaggerated claims about results.',
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
                      Clinical content is reviewed by a board-certified physician
                      before it publishes and is re-reviewed on a regular cadence.
                      The details are described in our{' '}
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
                  p: 'Our educational content is written to inform, not to sell. We do not publish undisclosed sponsored content, and the fact that we offer a treatment does not change how we describe its risks, limitations, or alternatives. Where we mention competitors, we aim to be fair and factual.',
                },
              ],
            },
            {
              heading: 'Updates and corrections',
              blocks: [
                {
                  p: 'Medicine changes, and so does our content. We review articles periodically and update them as evidence evolves; each clinical article shows when it was last reviewed. If we get something wrong, we correct it promptly. If you spot an error, please tell us.',
                },
              ],
            },
            {
              heading: 'Authorship',
              blocks: [
                {
                  p: 'Content is produced by the trtrx editorial team and reviewed by board-certified physicians. As our content program grows, we will attribute articles to named authors and reviewers.',
                },
              ],
            },
          ]}
          footnote={
            <>
              Editorial questions or corrections? Email{' '}
              <Link
                href="mailto:editorial@trtrx.com"
                className="text-primary underline-offset-4 hover:text-accent-strong"
              >
                editorial@trtrx.com
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
