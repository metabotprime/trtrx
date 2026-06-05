import type { GetStaticProps } from 'next';
import Link from 'next/link';
import { PageShell } from '@/components/layout/PageShell';
import { SEOHead } from '@/components/seo/SEOHead';
import { EntityGraphSchema } from '@/components/seo/schemas/EntityGraphSchema';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { PolicyContent } from '@/components/sections/PolicyContent';

export default function PrivacyPage() {
  return (
    <>
      <SEOHead
        title="Privacy Policy"
        description="How trtrx collects, uses, shares, and protects your personal and health information — and the choices and rights you have over it."
        path="/privacy"
      />
      <EntityGraphSchema
        title="Privacy Policy"
        description="How trtrx collects, uses, shares, and protects your personal and health information — and the choices and rights you have over it."
        url="/privacy"
        pageType="WebPage"
      />
      <PageShell>
        <Breadcrumbs
          items={[
            { name: 'Home', href: '/' },
            { name: 'Privacy Policy', href: '/privacy' },
          ]}
        />
        <PolicyContent
          eyebrow="Legal"
          title="Privacy policy"
          lastUpdated="June 2026"
          intro={[
            'Your health information is some of the most personal data you have. This policy explains what trtrx collects, why, who we share it with, and the control you keep over it. We collect the minimum we need to provide care and run the service — and we never sell your personal information.',
          ]}
          sections={[
            {
              heading: 'Information we collect',
              blocks: [
                { subhead: 'Information you give us' },
                {
                  list: [
                    'Contact details — name, email, phone, shipping address.',
                    'Health information you provide at intake — symptoms, medical history, medications, and the lab results used to evaluate your eligibility and set a protocol.',
                    'Payment information — processed by our third-party payment processor; we do not store full card numbers on our servers.',
                  ],
                },
                { subhead: 'Information collected automatically' },
                {
                  list: [
                    'Device and usage data — browser type, pages viewed, and similar analytics, used to operate and improve the site.',
                    'Cookies and similar technologies (see “Cookies and analytics” below).',
                  ],
                },
              ],
            },
            {
              heading: 'How we use your information',
              blocks: [
                {
                  list: [
                    'To evaluate your eligibility and provide clinical care through licensed physicians.',
                    'To fulfill and ship prescriptions through licensed pharmacies and coordinate lab work.',
                    'To process payments and manage your subscription.',
                    'To communicate with you about your care, orders, and account.',
                    'To operate, secure, and improve the service.',
                    'To comply with legal, regulatory, and recordkeeping obligations.',
                  ],
                },
              ],
            },
            {
              heading: 'How we share your information',
              blocks: [
                {
                  p: 'We share your information only as needed to provide the service or as required by law:',
                },
                {
                  list: [
                    'With the licensed physicians who evaluate and treat you.',
                    'With the licensed pharmacy that prepares and ships your prescription.',
                    'With the diagnostic labs (such as Quest and Labcorp) that run your panels.',
                    'With service providers — payment processors, shipping, infrastructure, and analytics — under contracts that limit their use of your data to providing services to us.',
                    'When required by law, subpoena, or to protect the rights, safety, and security of patients and the public.',
                  ],
                },
                {
                  p: 'We do not sell your personal information, and we do not share your health information for third-party advertising.',
                },
              ],
            },
            {
              heading: 'How we protect your information',
              blocks: [
                {
                  p: 'We use administrative, technical, and physical safeguards designed to protect your information, including encryption in transit, access controls, and limiting access to personnel who need it to provide your care. No method of transmission or storage is perfectly secure, but we work to protect your data and to respond promptly if an issue arises.',
                },
              ],
            },
            {
              heading: 'Cookies and analytics',
              blocks: [
                {
                  p: 'We use cookies and similar technologies to keep the site working, remember preferences, and understand how the site is used so we can improve it. You can control cookies through your browser settings; disabling some cookies may affect how parts of the site function.',
                },
              ],
            },
            {
              heading: 'Your choices and rights',
              blocks: [
                {
                  list: [
                    'Access, correct, or request deletion of your personal information, subject to legal and medical-record retention requirements.',
                    'Opt out of marketing emails at any time using the unsubscribe link; we will still send essential messages about your care and account.',
                    'Residents of certain states (such as California) have additional rights over their personal information; contact us to exercise them.',
                  ],
                },
              ],
            },
            {
              heading: 'Data retention',
              blocks: [
                {
                  p: 'We keep your information for as long as needed to provide care, operate the service, and meet our legal, tax, and medical-recordkeeping obligations, after which we delete or de-identify it.',
                },
              ],
            },
            {
              heading: 'Children',
              blocks: [
                {
                  p: 'trtrx is intended for adults 18 and older. We do not knowingly collect information from anyone under 18.',
                },
              ],
            },
            {
              heading: 'Changes to this policy',
              blocks: [
                {
                  p: 'We may update this policy as our service evolves or as the law requires. When we do, we will revise the “last updated” date above and, for material changes, provide additional notice.',
                },
              ],
            },
          ]}
          footnote={
            <>
              Privacy questions or requests? Email{' '}
              <Link
                href="mailto:privacy@trtrx.com"
                className="text-primary underline-offset-4 hover:text-accent-strong"
              >
                privacy@trtrx.com
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
