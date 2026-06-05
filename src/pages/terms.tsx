import type { GetStaticProps } from 'next';
import Link from 'next/link';
import { PageShell } from '@/components/layout/PageShell';
import { SEOHead } from '@/components/seo/SEOHead';
import { EntityGraphSchema } from '@/components/seo/schemas/EntityGraphSchema';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { PolicyContent } from '@/components/sections/PolicyContent';

export default function TermsPage() {
  return (
    <>
      <SEOHead
        title="Terms of Service"
        description="The terms that govern your use of trtrx, including eligibility, the role of licensed physicians and pharmacies, billing and cancellation, and your responsibilities."
        path="/terms"
      />
      <EntityGraphSchema
        title="Terms of Service"
        description="The terms that govern your use of trtrx, including eligibility, the role of licensed physicians and pharmacies, billing and cancellation, and your responsibilities."
        url="/terms"
        pageType="WebPage"
      />
      <PageShell>
        <Breadcrumbs
          items={[
            { name: 'Home', href: '/' },
            { name: 'Terms of Service', href: '/terms' },
          ]}
        />
        <PolicyContent
          eyebrow="Legal"
          title="Terms of service"
          lastUpdated="June 2026"
          intro={[
            'These terms govern your use of the trtrx website and services. Please read them carefully. By using trtrx, you agree to these terms.',
          ]}
          sections={[
            {
              heading: 'Eligibility',
              blocks: [
                {
                  p: 'You must be at least 18 years old and a resident of a U.S. state where our services are available to use trtrx. Clinical services are available in 47 states and are not yet available in Hawaii, Alaska, or Puerto Rico.',
                },
              ],
            },
            {
              heading: 'What trtrx is — and isn’t',
              blocks: [
                {
                  p: 'trtrx is a technology platform that connects you with independent, licensed physicians and licensed pharmacies. trtrx is not itself a medical practice or a pharmacy. The decision to evaluate, prescribe, or treat is made solely by a licensed physician based on your individual case. trtrx does not practice medicine and does not influence clinical judgment.',
                },
                {
                  p: 'trtrx is not for medical emergencies. If you think you may have a medical emergency, call 911.',
                },
              ],
            },
            {
              heading: 'Medical services and prescriptions',
              blocks: [
                {
                  p: 'Completing an intake does not guarantee a prescription. A physician may determine that treatment is not appropriate for you. Testosterone is a Schedule III controlled substance and is prescribed only after a physician reviews your labs and history. Some treatments are compounded preparations, which are prepared per individual prescription and are not FDA-approved as finished drugs, and some uses (such as enclomiphene or HCG for testosterone support) are off-label and prescribed at a clinician’s discretion. See our',
                },
                {
                  p: (
                    <Link
                      href="/medical-disclaimer"
                      className="text-primary underline-offset-4 hover:text-accent-strong"
                    >
                      medical disclaimer
                    </Link>
                  ),
                },
              ],
            },
            {
              heading: 'Pricing, billing, and cancellation',
              blocks: [
                {
                  list: [
                    'Plans are billed as a flat monthly amount, charged after a physician approves your treatment — not before.',
                    'You may cancel at any time; cancellation stops future billing and shipments.',
                    'We offer a 60-day satisfaction guarantee on your first prescription, with a refund of unused medication if you cancel within that window. The guarantee does not cover completed lab work or physician consultations.',
                    'Prices are subject to change with notice; changes do not affect a cycle you have already been billed for.',
                  ],
                },
              ],
            },
            {
              heading: 'Your responsibilities',
              blocks: [
                {
                  p: 'You agree to provide accurate and complete information, to complete required lab work, to follow the protocol your physician sets, and to use any medication only as prescribed. Providing inaccurate health information can affect your safety and the appropriateness of treatment.',
                },
              ],
            },
            {
              heading: 'Intellectual property',
              blocks: [
                {
                  p: 'The trtrx name, logo, site content, and design are owned by trtrx and protected by intellectual-property laws. You may not copy, reproduce, or use them without permission.',
                },
              ],
            },
            {
              heading: 'Disclaimers and limitation of liability',
              blocks: [
                {
                  p: 'The website and its educational content are provided “as is,” without warranties of any kind, and are not a substitute for professional medical advice. To the fullest extent permitted by law, trtrx is not liable for indirect, incidental, or consequential damages arising from your use of the website. Nothing in these terms limits liability that cannot be limited under applicable law.',
                },
              ],
            },
            {
              heading: 'Changes and governing law',
              blocks: [
                {
                  p: 'We may update these terms from time to time; the “last updated” date above reflects the current version, and continued use after changes means you accept them. These terms are governed by the laws of the United States and the state in which trtrx is organized, without regard to conflict-of-laws rules.',
                },
              ],
            },
          ]}
          footnote={
            <>
              Questions about these terms? Email{' '}
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
