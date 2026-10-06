import type { GetStaticProps } from 'next';
import Link from 'next/link';
import { PageShell } from '@/components/layout/PageShell';
import { SEOHead } from '@/components/seo/SEOHead';
import { EntityGraphSchema } from '@/components/seo/schemas/EntityGraphSchema';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { StateReadiness } from '@/components/availability/StateReadiness';

const TITLE = 'Online TRT by State: Availability and Provider Checks';
const DESCRIPTION = 'Check TRTrx launch availability and learn what to verify about clinician licensing, pharmacy access, lab testing and online testosterone care in your state.';
const CHECKS = [
  {
    title: 'Confirm the clinician can treat you where you are',
    body: 'Ask for the treating clinician’s full name and license information before choosing care. Verify that information with the appropriate state licensing board. A website advertising nationwide care does not establish that a particular clinician can treat you during a visit in your location.',
  },
  {
    title: 'Ask which pharmacy would dispense your prescription',
    body: 'Get the dispensing pharmacy’s name, contact information and relevant license details. Ask whether it can serve your state and whether the proposed medication is FDA-approved or compounded. Compounded medications are not FDA-approved, and availability cannot be inferred from a list of treatment options.',
  },
  {
    title: 'Understand the visit and prescribing requirements',
    body: 'Ask the provider which visits and examinations are required for the medication under discussion, including whether an in-person visit is necessary. Requirements can change. An online questionnaire, symptoms or a single laboratory result do not establish a diagnosis or guarantee a prescription.',
  },
  {
    title: 'Plan for local testing and follow-up',
    body: 'Confirm where blood tests can be performed, which tests the clinician requests, how results are reviewed and who arranges follow-up. Check the actual laboratory’s appointment options rather than assuming every location offers the same service. Ask how clinical concerns and urgent symptoms are handled.',
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
            accepting patients. In the meantime, these questions can help you evaluate any online TRT provider.
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
          <h2 className="mt-12 font-serif text-3xl font-medium text-primary">Prepare for a conversation about TRT</h2>
          <p className="mt-4 max-w-3xl leading-relaxed text-muted">
            A licensed clinician determines whether testing or treatment is appropriate.
            Gather your medication list, symptoms, previous lab reports and questions about fertility or future family plans.
            Our educational guides explain the questions to discuss without diagnosing you or recommending a dose.
          </p>
          <ul className="mt-6 flex flex-wrap gap-3">
            {[
              ['Understanding TRT', '/blog/testosterone-replacement-therapy-guide'],
              ['Testosterone blood tests', '/blog/testosterone-blood-tests'],
              ['Choosing an online provider', '/blog/choosing-online-trt-provider'],
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
