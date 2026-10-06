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
        description="TRTrx provides educational and planned-service information. Patient intake is closed. This website does not provide medical advice or clinical care."
        path="/medical-disclaimer"
      />
      <EntityGraphSchema
        title="Medical Disclaimer"
        description="TRTrx provides educational and planned-service information. Patient intake is closed. This website does not provide medical advice or clinical care."
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
            "TRTrx publishes educational and planned-service information. Patient intake is not open, and this information is not a substitute for professional medical care.",
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
                  p: "Reading this website does not create a clinician-patient relationship. TRTrx does not currently provide intake, appointments, prescriptions or clinical care.",
                },
              ],
            },
            {
              heading: "Prescriptions and clinical decisions",
              blocks: [
                {
                  p: "No prescription or clinical decision is available through this website. Any future treatment would require an individual assessment by an appropriately licensed clinician. Interest in the service, a displayed price or reading an article does not establish eligibility for care.",
                },
                {
                  p: "Clinical guidance and treatment details remain subject to completed clinical review before publication. Source checking is not a substitute for that review. The medical review policy explains how verified reviewer credits will be recorded; no completed clinical review is claimed for the prepared drafts.",
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
              Support contact details will be published before intake opens. Check our{" "}
              <Link
                href="/contact"
                className="text-primary underline-offset-4 hover:text-accent-strong"
              >
                contact status
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
