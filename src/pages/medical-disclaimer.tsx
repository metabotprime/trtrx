import type { GetStaticProps } from "next";
import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { SEOHead } from "@/components/seo/SEOHead";
import { EntityGraphSchema } from "@/components/seo/schemas/EntityGraphSchema";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { PolicyContent } from "@/components/sections/PolicyContent";

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
            { name: "Home", href: "/" },
            { name: "Medical Disclaimer", href: "/medical-disclaimer" },
          ]}
        />
        <PolicyContent
          eyebrow="Legal"
          title="Medical disclaimer"
          lastUpdated="October 6, 2026"
          intro={[
            "trtrx publishes general educational information about testosterone and men’s hormone health. Patient intake is not open, and this information is not a substitute for professional medical care.",
          ]}
          sections={[
            {
              heading: "This is information, not medical advice",
              blocks: [
                {
                  p: "The content on this site is for general educational purposes only. It is not medical advice, diagnosis, or treatment, and it should not be relied on as a substitute for the judgment of a licensed clinician who knows your individual situation. Always seek the advice of your physician or another qualified health provider with any questions about a medical condition. Never disregard professional medical advice, or delay seeking it, because of something you read here.",
                },
              ],
            },
            {
              heading:
                "Using this site does not create a doctor–patient relationship",
              blocks: [
                {
                  p: "Reading this website, browsing treatment pages or sending a general inquiry does not create a clinician-patient relationship. TRTrx does not currently provide intake, appointments, prescriptions or clinical care.",
                },
              ],
            },
            {
              heading: "Prescriptions and clinical decisions",
              blocks: [
                {
                  p: "Any prescription is at the sole discretion of a licensed physician based on your individual evaluation. Completing an intake does not guarantee that you will be prescribed any medication. Testosterone is a Schedule III controlled substance and is prescribed only after a physician reviews your labs and history.",
                },
                {
                  p: "Some treatments discussed on this site are compounded preparations. Compounded drugs are not FDA-approved, and FDA does not review them for safety, effectiveness or quality before marketing. Enclomiphene is not an FDA-approved drug; it is not simply an approved medicine used for another indication. Off-label use refers to an approved drug used outside its approved labeling. HCG has approved products with specific indications, but a proposed adjunct use and the exact product require individual clinical and regulatory assessment.",
                },
              ],
            },
            {
              heading: "Individual results vary",
              blocks: [
                {
                  p: "No treatment outcome, fertility result or recovery timeline is promised. A clinician should discuss the evidence, its limits and the risks relevant to your individual situation. Educational information is not evidence of a patient outcome at TRTrx.",
                },
              ],
            },
            {
              heading: "Not for emergencies",
              blocks: [
                {
                  p: "trtrx is not for medical emergencies. If you think you may have a medical emergency, call 911 or go to the nearest emergency room immediately.",
                },
              ],
            },
            {
              heading: "Where we operate",
              blocks: [
                {
                  p: "TRTrx is not accepting patients in any state. Coverage, clinical arrangements and the opening date have not been confirmed.",
                },
              ],
            },
          ]}
          footnote={
            <>
              Questions about this disclaimer? Email{" "}
              <Link
                href="mailto:hello@trtrx.com"
                className="text-primary underline-offset-4 hover:text-accent-strong"
              >
                hello@trtrx.com
              </Link>
              . See also our{" "}
              <Link
                href="/medical-review-policy"
                className="text-primary underline-offset-4 hover:text-accent-strong"
              >
                medical review policy
              </Link>{" "}
              and{" "}
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
