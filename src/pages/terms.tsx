import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { SEOHead } from "@/components/seo/SEOHead";
import { PolicyContent } from "@/components/sections/PolicyContent";
import {
  PLAN_PRICE_POLICY,
  POLICY_UPDATED,
  SERVICE_POLICY_NOTICE,
} from "@/content/policies";

const linkClass = "text-primary underline underline-offset-4";

export default function TermsPage() {
  return (
    <PageShell>
      <SEOHead
        title="Terms of service"
        description="TRTrx website terms and planned-service policies covering billing, renewals, cancellations, refunds and responsible use. Patient intake is not open."
        path="/terms"
      />
      <PolicyContent
        eyebrow="Legal"
        title="Terms of service"
        lastUpdated={POLICY_UPDATED}
        intro={[
          <>These Terms of Service are an agreement between you and TRTrx. References to we, us or our mean TRTrx. Together with our <Link href="/privacy" className={linkClass}>Privacy Policy</Link>, <Link href="/code-of-conduct" className={linkClass}>Provider Code of Conduct</Link> and <Link href="/refund-policy" className={linkClass}>Refund and Cancellation Policy</Link>, they govern access to this website and the applicable services described below. Please read them carefully. By using this website, you agree to the website terms.</>,
          SERVICE_POLICY_NOTICE,
          "THE FUTURE-SERVICE TERMS INCLUDE A MANDATORY ARBITRATION CLAUSE AND WAIVER OF CLASS ACTION RIGHTS. The notice and opt-out requirements are explained below.",
        ]}
        sections={[
          {
            heading: "What these terms cover",
            blocks: [
              { p: "These terms cover the TRTrx educational website and its planned testosterone and related hormone-care service. Terms for another brand or treatment program do not apply to a TRTrx plan. Displayed prices describe planned services, not active purchase offers." },
              { p: <>TRTrx has identified Arora Health as its planned provider network. This does not open intake or confirm care in any state. Clinical decisions belong to appropriately licensed clinicians. Pharmacy, laboratory, state availability and final service arrangements must be confirmed before intake opens. See our <Link href="/about#provider-network" className={linkClass}>provider network information</Link> and <Link href="/launch" className={linkClass}>launch status</Link>.</> },
            ],
          },
          {
            heading: "Eligibility",
            blocks: [
              { p: "Any future clinical service requires that you are at least 18, are located in a state where the service is available and agree to the applicable terms. These requirements do not establish clinical eligibility or promise a prescription. A licensed clinician must assess your individual circumstances." },
            ],
          },
          {
            heading: "Billing, plans and renewals",
            blocks: [
              { p: "TRTrx is planning flat monthly pricing without a setup fee, separate membership or long-term commitment. Final prices, included services, laboratory charges, shipping arrangements and the billing schedule must be disclosed before purchase. No payment method is collected or charged through this website." },
              { p: "For a monthly plan, the plan price and renewal terms shown and accepted at checkout control. Any automatic renewal and authorization to charge a payment method must be disclosed before enrollment. Renewal can be turned off before the next billing date. Turning off renewal stops future terms; it does not by itself refund the current term." },
              { p: "If a payment fails, we may retry the charge and pause fulfillment until payment succeeds. Prices may change for future terms, but the price of a term already purchased does not change." },
            ],
          },
          PLAN_PRICE_POLICY,
          {
            heading: "Cancellations and refunds",
            blocks: [
              { p: <>The full rules and documentation requirements are in our <Link href="/refund-policy" className={linkClass}>Refund and Cancellation Policy</Link>, which forms part of these terms. In summary:</> },
              { list: [
                "Before a prescription is issued, an order can be canceled for a full refund, including any amount paid toward the consultation.",
                "If a clinician determines you are not a candidate for treatment, all charges on that order are refunded.",
                "Once a prescription is issued, the prescription order is final, subject to the exceptions in the refund policy and applicable law. Patient-specific compounded medication cannot be returned for reuse or resale.",
                "If a licensed clinician advises you in writing to discontinue treatment, we will review a refund of the unused portion of your paid term.",
                "Report damaged or missing shipments within 24 hours of the delivery scan. A replacement, refund or carrier claim is reviewed according to the circumstances.",
                "Approved refunds return to the original payment method. Banks typically post the credit within 5 to 10 business days.",
              ] },
              { p: "No treatment-results, weight-loss or satisfaction-based money-back promise is offered by TRTrx. The cancellation and refund rights expressly described in the refund policy remain applicable to any future purchase under these terms." },
            ],
          },
          {
            heading: "Medical disclosures",
            blocks: [
              { p: <>Website information is general education, not medical advice, diagnosis or treatment. Reading it does not establish a clinician-patient relationship. Any prescription requires an individual assessment by a licensed clinician. No particular outcome is promised. See the <Link href="/medical-disclaimer" className={linkClass}>medical disclaimer</Link> and <Link href="/medical-review-policy" className={linkClass}>medical review policy</Link>.</> },
              { p: "Compounded medications are not FDA-approved. FDA does not review compounded drugs for safety, effectiveness or quality before marketing. Any future treatment must include the disclosures and counseling appropriate to the actual prescribed medication." },
              { p: "TRTrx is not an emergency service. Call 911 or seek emergency care if you think you have a medical emergency." },
            ],
          },
          {
            heading: "Requirements for use",
            blocks: [
              { p: "You must have compatible computing or mobile devices, internet access and the necessary software to use the website or any future online service. Your internet or mobile provider may charge fees." },
            ],
          },
          {
            heading: "Telehealth services",
            blocks: [
              { p: "Telemedicine uses electronic communications between a healthcare provider and a patient in different locations. It may include transmitting medical records and health information, audio or video interactions, and information from medical devices." },
              { p: "No telehealth visit is available through the current website. Applicable clinical privacy notices and informed consent must be provided before a future clinical service begins. Browsing this website is not consent to treatment." },
            ],
          },
          {
            heading: "Privacy and your relationship with TRTrx",
            blocks: [
              { p: <>Our <Link href="/privacy" className={linkClass}>Privacy Policy</Link> explains the data practices of the current website. Future clinical, pharmacy and laboratory services require notices reflecting their actual arrangements. A technology platform does not replace in-person care in every situation; diagnosis and treatment decisions rest with you and a licensed clinician.</> },
            ],
          },
          {
            heading: "Communications by text and email",
            blocks: [
              { p: "The website currently has no active support mailbox, signup form or patient messaging service. Do not send sensitive health information to an unverified address. Service communications and any separate marketing choices must be disclosed before a future messaging program begins." },
              { p: "If you opt into a future text-message program, you must be the authorized user of the device. Message and data rates may apply, messages may not be encrypted, and carriers are not responsible for delayed or undelivered messages. You can opt out by replying STOP and request help by replying HELP. No text-message enrollment is offered on this website." },
            ],
          },
          {
            heading: "Registration and user accounts",
            blocks: [
              { p: "Patient accounts are not currently available. If accounts become available, you must provide accurate, complete and current information, protect your login credentials, take responsibility for activity under your account and promptly report unauthorized use through the published support channel." },
            ],
          },
          {
            heading: "Prohibited use",
            blocks: [
              { p: "You agree not to:" },
              { list: [
                "Impersonate another person or entity, or use the website to violate any law.",
                "Reverse engineer or disassemble software, distribute harmful code or bypass security measures.",
                "Infringe another person's rights, interfere with the website or harm its operation.",
                "Use the services to create competing products or access information you are not authorized to access.",
              ] },
            ],
          },
          {
            heading: "Intellectual property",
            blocks: [
              { p: "The TRTrx name, logo, website design and original content are protected by applicable intellectual-property laws. You receive a limited license to access and use the website for personal, non-commercial purposes. Third-party materials and references remain attributable to their owners." },
            ],
          },
          {
            heading: "Disclaimer of warranties",
            blocks: [
              { p: "THE WEBSITE AND SERVICES ARE PROVIDED AS IS WITHOUT WARRANTIES OF ANY KIND, TO THE EXTENT PERMITTED BY LAW. WE DO NOT WARRANT THAT THEY WILL BE UNINTERRUPTED, ERROR-FREE OR FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS." },
            ],
          },
          {
            heading: "Limitation of liability",
            blocks: [
              { p: "TO THE FULLEST EXTENT PERMITTED BY LAW, TRTRX SHALL NOT BE LIABLE FOR INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL OR PUNITIVE DAMAGES ARISING FROM YOUR USE OF THE WEBSITE OR SERVICES. THESE TERMS DO NOT EXCLUDE RIGHTS OR LIABILITY THAT APPLICABLE LAW DOES NOT ALLOW TO BE EXCLUDED." },
            ],
          },
          {
            heading: "Arbitration agreement for future services",
            blocks: [
              { p: "The terms for future paid services provide that disputes arising from those terms or services will be resolved by binding arbitration rather than in court, with a waiver of jury trial and class-action participation, to the extent permitted by law. You may opt out by sending written notice within 30 days of first accepting those service terms." },
              { p: "This future-service arbitration provision does not take effect, and no opt-out deadline begins, merely by browsing the current prelaunch website. A working address or channel for written notices and opt-outs must be provided with the service terms before acceptance." },
            ],
          },
          {
            heading: "Changes to these terms",
            blocks: [
              { p: "We may update these terms and will post material changes on this page. The date above identifies this version. Continued use of the website after changes take effect constitutes acceptance of the updated website terms, subject to applicable law. Future clinical-service terms must be provided before enrollment." },
            ],
          },
        ]}
        footnote={<>Support contact details will be published before intake opens. Check our <Link href="/contact" className={linkClass}>contact status</Link>. See also the <Link href="/refund-policy" className={linkClass}>refund and cancellation policy</Link>.</>}
      />
    </PageShell>
  );
}
