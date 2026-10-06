import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { SEOHead } from "@/components/seo/SEOHead";
import { PolicyContent } from "@/components/sections/PolicyContent";
export default function PolicyPage() {
  return (
    <PageShell>
      <SEOHead
        title={"Terms of service"}
        description={
          "Terms for the TRTrx educational website and planned pricing information. Patient intake and purchases are not available."
        }
        path={"/terms"}
      />
      <PolicyContent
        eyebrow="Website information"
        title={"Terms of service"}
        lastUpdated="October 6, 2026"
        intro={[
          "These terms apply to this educational website. TRTrx is preparing its clinical service and is not providing clinical services, prescriptions or purchases through this site.",
        ]}
        sections={[
          {
            heading: "Current availability",
            blocks: [
              {
                p: "Patient intake is not open in any state. There are no appointments to book, patient accounts to access, subscriptions to purchase or payments to submit. State coverage, clinician participation and final service arrangements have not been confirmed.",
              },
            ],
          },
          {
            heading: "Educational information",
            blocks: [
              {
                p: "The information is general education and is not medical advice, diagnosis or treatment. Reading the site does not establish a clinician-patient relationship. Decisions about care belong with an appropriately licensed clinician who can assess your individual circumstances.",
              },
            ],
          },
          {
            heading: "Planned pricing and billing",
            blocks: [
              {
                p: "Any displayed prices describe a planned program and are not active purchase offers. Product selection, clinical availability and final inclusions have not been confirmed. No purchase or prescription can be made through this website.",
              },
              {
                p: "The planned model has no setup fee or separate membership and allows cancellation. Final billing, cancellation, testing and pharmacy terms must be published before clinical intake opens. No treatment-results or refund guarantee is currently offered.",
              },
            ],
          },
          {
              heading: "Clinical decisions and review status",
            blocks: [
              {
                p: "No prescription is issued through the current website. Any future treatment would require individual clinical assessment; interest in the service does not establish eligibility. Clinical guidance requires completed review before publication. See the medical disclaimer and medical review policy for the current limits of this website.",
              },
            ],
          },
          {
            heading: "Responsible use",
            blocks: [
              {
                p: "This website has no active support mailbox or form for sensitive health information. Do not rely on this site to change an existing prescription, select a dose or delay appropriate medical care. TRTrx is not an emergency service; call 911 for a medical emergency.",
              },
            ],
          },
          {
            heading: "Intellectual property",
            blocks: [
              {
                p: "The TRTrx name, logo, website design and original content are protected by applicable intellectual-property laws. Third-party materials and references remain attributable to their respective owners.",
              },
            ],
          },
          {
            heading: "Changes",
            blocks: [
              {
                p: "Website information and these terms may be updated. The date above identifies this version. Terms for any future clinical service must be reviewed when that service becomes available.",
              },
            ],
          },
        ]}
        footnote={
          <>
            Support contact details will be published before intake opens. Check our{" "}
            <Link
              className="text-primary underline underline-offset-4"
              href="/contact"
            >
              contact status
            </Link>
            .
          </>
        }
      />
    </PageShell>
  );
}
