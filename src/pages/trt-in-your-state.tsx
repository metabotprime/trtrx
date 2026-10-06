import type { GetStaticProps } from 'next';
import Link from 'next/link';
import { PageShell } from '@/components/layout/PageShell';
import { SEOHead } from '@/components/seo/SEOHead';
import { EntityGraphSchema } from '@/components/seo/schemas/EntityGraphSchema';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { StateReadiness } from '@/components/availability/StateReadiness';

const TITLE = 'TRTrx State Availability and Launch Planning';
const DESCRIPTION = 'Check TRTrx state availability, launch status and planning information. Intake is closed in every state and future coverage is not confirmed.';
const CHECKS = [
  {
    title: 'Check current availability with the provider',
    body: 'Ask whether the service is currently accepting people in your state and request the answer in writing. Distinguish a planned service area from an open program. TRTrx has not confirmed future state coverage and is not accepting patients in any state.',
  },
  {
    title: 'Identify the organizations behind the service',
    body: 'Ask for the names, public contact details and applicable license information of the organizations involved. The official state-board resources below provide places to check those details. A logo or a list of service options is not proof of a partnership or state availability.',
  },
  {
    title: 'Compare the full cost and cancellation terms',
    body: 'Request a written explanation of medication, consultation, lab, shipping and follow-up costs. Ask whether any payment renews automatically, whether a minimum commitment applies and what happens if treatment is not prescribed. A quoted monthly price alone does not answer those questions.',
  },
];

export default function StateAvailabilityPage() {
  return (
    <>
      <SEOHead title={TITLE} description={DESCRIPTION} path="/trt-in-your-state" />
      <EntityGraphSchema title={TITLE} description={DESCRIPTION} url="/trt-in-your-state" pageType="WebPage" />
      <PageShell>
        <Breadcrumbs items={[{ name: 'Home', href: '/' }, { name: 'TRT in your state', href: '/trt-in-your-state' }]} />
        <section className="container max-w-5xl py-12 md:py-20">
          <p className="eyebrow">Availability and planning</p>
          <h1 className="mt-4 font-serif text-display-lg font-medium leading-tight text-primary">
            Online TRT <span className="display-italic">in your state.</span>
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted">
            TRTrx is preparing to launch. Intake is not open, and we have not confirmed a list
            of states where care will be available. We will publish that information before
            accepting patients. In the meantime, these operational questions can help you check a provider’s availability and service terms.
          </p>
          <div className="mt-10 max-w-2xl"><StateReadiness /></div>
        </section>
        <section className="bg-surface-alt">
          <div className="container max-w-5xl py-16 md:py-20">
            <h2 className="font-serif text-3xl font-medium text-primary">What to check before choosing online care</h2>
            <p className="mt-4 max-w-3xl leading-relaxed text-muted">
              Online TRT involves more than shipping medication. The clinician, prescription,
              pharmacy and testing arrangements all need to fit your location and your clinical situation.
              Use this checklist to ask specific questions, rather than relying on a blanket coverage claim.
            </p>
            <ol className="mt-8 space-y-6">
              {CHECKS.map((check, index) => (
                <li key={check.title} className="rounded-2xl border border-border bg-surface p-6">
                  <h3 className="font-serif text-xl font-medium text-primary">{index + 1}. {check.title}</h3>
                  <p className="mt-3 leading-relaxed text-text">{check.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>
        <section className="container max-w-5xl py-16 md:py-20">
          <h2 className="font-serif text-3xl font-medium text-primary">Start with official verification resources</h2>
          <p className="mt-4 max-w-3xl leading-relaxed text-muted">
            The Federation of State Medical Boards directory links to state medical boards.
            The FDA explains how to check an online pharmacy. These resources help you verify
            a provider’s claims; listing them here does not imply that TRTrx has established a clinical network or pharmacy partnership.
          </p>
          <ul className="mt-6 space-y-3 text-primary underline underline-offset-4">
            <li><a href="https://www.fsmb.org/contact-a-state-medical-board/" target="_blank" rel="noopener noreferrer">Find your state medical board through FSMB</a></li>
            <li><a href="https://www.fda.gov/drugs/besaferx-your-source-online-pharmacy-information/locate-state-licensed-online-pharmacy" target="_blank" rel="noopener noreferrer">FDA BeSafeRx: check an online pharmacy</a></li>
          </ul>
          <h2 className="mt-12 font-serif text-3xl font-medium text-primary">Explore the current public information</h2>
          <p className="mt-4 max-w-3xl leading-relaxed text-muted">
            Compare service estimates and planning prices, or check launch status.
            Clinical articles and treatment guidance remain unpublished while qualified review is pending.
          </p>
          <ul className="mt-6 flex flex-wrap gap-3">
            {[
              ['Compare the complete care bill', '/blog/how-trt-pricing-works'],
              ['Planned TRTrx pricing', '/pricing'],
              ['Publication review policy', '/medical-review-policy'],
              ['TRTrx launch status', '/launch'],
            ].map(([label, href]) => (
              <li key={href}><Link href={href!} className="inline-flex rounded-full border border-border px-5 py-3 text-sm font-medium text-primary hover:border-primary">{label}</Link></li>
            ))}
          </ul>
          <p className="mt-8 text-sm leading-relaxed text-muted">
            Educational information, updated October 6, 2026. This page is not a state-law determination,
            a diagnosis or confirmation that a particular clinician or medication is available to you.
          </p>
        </section>
      </PageShell>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => ({ props: {}, revalidate: 86400 });
