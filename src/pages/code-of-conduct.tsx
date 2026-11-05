import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { SEOHead } from "@/components/seo/SEOHead";
import { PolicyContent } from "@/components/sections/PolicyContent";
import { POLICY_UPDATED } from "@/content/policies";

const linkClass = "text-primary underline underline-offset-4";

export default function CodeOfConductPage() {
  return (
    <PageShell>
      <SEOHead
        title="Provider code of conduct"
        description="Provider standards for TRTrx's planned service: patient communication, clinical independence, documentation, privacy and professional conduct. Intake is closed."
        path="/code-of-conduct"
      />
      <PolicyContent
        eyebrow="Legal"
        title="Provider code of conduct"
        lastUpdated={POLICY_UPDATED}
        intro={[
          "This code sets expectations for healthcare providers participating in TRTrx's planned service. Patient intake is not open, and this page does not represent a working patient portal, clinical service or support operation.",
          "Our aim is accessible care, clear communication and independent clinical judgment. These expectations complement applicable professional duties and the arrangements in place when care begins.",
        ]}
        sections={[
          {
            heading: "Best practices",
            blocks: [
              { list: [
                "Be patient. Explain telemedicine and answer questions respectfully, including when no prescription is appropriate.",
                "Explain decisions. Help patients understand the reason for a recommendation, its limits and the next steps.",
                "Follow up. Arrange follow-up appropriate to the individual patient through the approved care channels when the service opens. Do not assume an automated system has completed a clinical task.",
                "Document. Record assessments, decisions, relevant patient communications and responses to identified concerns.",
                "Maintain continuity. Follow agreed communication and coverage arrangements, and arrange appropriate coverage before an absence.",
              ] },
            ],
          },
          {
            heading: "Professional conduct",
            blocks: [
              { list: [
                "Verify patient identity through the approved process before care.",
                "Follow state requirements for licensure and establishing a patient-provider relationship. Confirm the patient's location and availability of care.",
                "Respond to consultations and patient messages according to the applicable care arrangements.",
                "Give each consultation appropriate attention and coordinate responsibly with other treating clinicians.",
              ] },
            ],
          },
          {
            heading: "Safety, security and privacy",
            blocks: [
              { list: [
                "Review relevant history and medications, and escalate uncertainty through the responsible clinical team.",
                "Use independent clinical judgment. Do not prescribe when an assessment does not support treatment; arrange appropriate referral or in-person evaluation when needed.",
                "Follow applicable protocols and standards of care, including appropriate responses to emergencies.",
                "Protect credentials and restrict access to authorized people. Do not share patient information outside permitted care and operational purposes.",
                "Use approved secure systems for health information and follow applicable privacy and security requirements. Protect information from being seen or heard by unauthorized people.",
              ] },
            ],
          },
          {
            heading: "Ethical expectations",
            blocks: [
              { list: [
                "Prioritize patient safety. Compensation must not influence whether a patient receives a prescription or which treatment is recommended.",
                "Avoid conflicts of interest and inappropriate self-referrals. Direct patients to suitable care based on their needs.",
                "Do not practice while impaired by a substance or condition that affects judgment.",
                "Promptly disclose relevant disciplinary actions, restrictions or changes in professional licensure to the responsible clinical organization.",
              ] },
            ],
          },
          {
            heading: "Updates and questions",
            blocks: [
              { p: <>This code may be updated as service arrangements and professional requirements develop. A working contact channel must be published before intake opens. See our <Link href="/contact" className={linkClass}>contact status</Link>, <Link href="/terms" className={linkClass}>Terms of Service</Link> and <Link href="/medical-review-policy" className={linkClass}>medical review policy</Link>.</> },
            ],
          },
        ]}
      />
    </PageShell>
  );
}
