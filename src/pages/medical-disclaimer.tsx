import type { GetStaticProps } from 'next';
import Link from 'next/link';
import { PageShell } from '@/components/layout/PageShell';
import { SEOHead } from '@/components/seo/SEOHead';
import { EntityGraphSchema } from '@/components/seo/schemas/EntityGraphSchema';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { PolicyContent } from '@/components/sections/PolicyContent';

export default function MedicalDisclaimerPage() {
  return (
    <>
      <SEOHead
        title="Medical Disclaimer"
        description="trtrx provides general educational information about testosterone therapy. It is not medical advice and does not replace consultation with a licensed clinician."
        path="/medical-disclaimer"
      />
      <EntityGraphSchema
        title="Medical Disclaimer"
        description="trtrx provides general educational information about testosterone therapy. It is not medical advice and does not replace consultation with a licensed clinician."
        url="/medical-disclaimer"
        pageType="WebPage"
      />
      <PageShell>
        <Breadcrumbs
          items={[
            { name: 'Home', href: '/' },
            { name: 'Medical Disclaimer', href: '/medical-disclaimer' },
          ]}
        />
        <PolicyContent
          eyebrow="Legal"
          title="Medical disclaimer"
          lastUpdated="June 2026"
          intro={[
            'trtrx publishes general educational information about testosterone and men’s hormone health. We want it to be genuinely useful — but it is not a substitute for professional medical care.',
          ]}
          sections={[
            {
              heading: 'This is information, not medical advice',
              blocks: [
                {
                  p: 'The content on this site is for general educational purposes only. It is not medical advice, diagnosis, or treatment, and it should not be relied on as a substitute for the judgment of a licensed clinician who knows your individual situation. Always seek the advice of your physician or another qualified health provider with any questions about a medical condition. Never disregard professional medical advice, or delay seeking it, because of something you read here.',
                },
              ],
            },
            {
              heading: 'Using this site does not create a doctor–patient relationship',
              blocks: [
                {
                  p: 'Reading this website, browsing treatment pages, or joining our launch list does not create a physician–patient relationship. That relationship is established only after you complete a clinical intake, a licensed physician reviews your medical history and laboratory results, and the physician accepts you as a patient and issues a treatment plan.',
                },
              ],
            },
            {
              heading: 'Prescriptions and clinical decisions',
              blocks: [
                {
                  p: 'Any prescription is at the sole discretion of a licensed physician based on your individual evaluation. Completing an intake does not guarantee that you will be prescribed any medication. Testosterone is a Schedule III controlled substance and is prescribed only after a physician reviews your labs and history.',
                },
                {
                  p: 'Some treatments discussed on this site are compounded preparations. Compounded medications are prepared per individual prescription by a licensed pharmacy and are not FDA-approved as finished drugs. Where a medication is used to support testosterone outside its FDA-approved indication (for example, enclomiphene or HCG), that is an off-label use, which a licensed clinician may prescribe at their clinical discretion.',
                },
              ],
            },
            {
              heading: 'Individual results vary',
              blocks: [
                {
                  p: 'Any lab values, timelines, or outcomes shown on this site are illustrative and provided for context only. They are not a prediction or guarantee of the results any individual will experience. Response to therapy depends on your physiology, adherence, baseline labs, and other factors your physician will discuss with you.',
                },
              ],
            },
            {
              heading: 'Not for emergencies',
              blocks: [
                {
                  p: 'trtrx is not for medical emergencies. If you think you may have a medical emergency, call 911 or go to the nearest emergency room immediately.',
                },
              ],
            },
            {
              heading: 'Where we operate',
              blocks: [
                {
                  p: 'Clinical services are available in 47 states. They are not yet available in Hawaii, Alaska, or Puerto Rico. Eligibility is confirmed during intake.',
                },
              ],
            },
          ]}
          footnote={
            <>
              Questions about this disclaimer? Email{' '}
              <Link
                href="mailto:hello@trtrx.com"
                className="text-primary underline-offset-4 hover:text-accent-strong"
              >
                hello@trtrx.com
              </Link>
              . See also our{' '}
              <Link
                href="/medical-review-policy"
                className="text-primary underline-offset-4 hover:text-accent-strong"
              >
                medical review policy
              </Link>{' '}
              and{' '}
              <Link
                href="/terms"
                className="text-primary underline-offset-4 hover:text-accent-strong"
              >
                terms of service
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
