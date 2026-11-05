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

export default function RefundPolicyPage() {
  return (
    <PageShell>
      <SEOHead
        title="Refund and cancellation policy"
        description="TRTrx's planned-service policy for cancellations, refunds, billing errors, shipment problems and price changes. No payments are currently accepted."
        path="/refund-policy"
      />
      <PolicyContent
        eyebrow="Legal"
        title="Refunds and cancellations"
        lastUpdated={POLICY_UPDATED}
        intro={[
          "When an order can be canceled, which charges can be refunded and how a refund is reviewed.",
          SERVICE_POLICY_NOTICE,
        ]}
        sections={[
          {
            heading: "The short version",
            blocks: [
              { list: [
                "Cancel before a clinician issues your prescription for a full refund, including any amount paid toward the consultation. No cancellation fees apply.",
                "If a clinician determines you are not a candidate for treatment, every charge on that order is refunded.",
                "Once a prescription is issued, the prescription order is final, subject to the exceptions below and applicable law. Patient-specific compounded medication cannot be returned for reuse or resale, even if it has not shipped.",
                "Report damaged or missing shipments within 24 hours of the delivery scan. Depending on the circumstances, we review a replacement, refund or carrier claim.",
                "A later price reduction or promotion does not qualify a paid term for a refund or credit. Other refund rights remain subject to this policy.",
              ] },
            ],
          },
          PLAN_PRICE_POLICY,
          {
            heading: "Cancellation windows",
            blocks: [
              { subhead: "Before a prescription is issued" },
              { p: "If you have paid and submitted an intake but a clinician has not yet issued your prescription, the order can be canceled for a full refund with no fees. The cutoff is prescription issuance, rather than the shipping date." },
              { subhead: "After a prescription is issued" },
              { p: "Once a clinician issues the prescription, that prescription order cannot be canceled or refunded solely because you change your mind. This applies while medication is being prepared and after shipment. It does not remove the clinical, quality, shipment or billing-error exceptions below, or rights required by law." },
            ],
          },
          {
            heading: "If you are not approved for treatment",
            blocks: [
              { p: "If the evaluating clinician decides you are not a candidate for treatment, you receive a full refund of every charge on that order to the original payment method. Clinical eligibility is determined individually; payment or interest in a treatment does not establish approval." },
            ],
          },
          {
            heading: "Clinician-directed discontinuation",
            blocks: [
              { p: "If a licensed clinician advises you in writing to stop treatment, provide that letter through the designated support channel. We will review a refund of the unused portion of your paid term. This is a review of the specific circumstances, not an automatic refund of all previous treatment." },
            ],
          },
          {
            heading: "Refundable charges and exceptions",
            blocks: [
              { p: "Refunds or replacements are reviewed for:" },
              { list: [
                "Cancellation before prescription issuance or clinical ineligibility.",
                "Clinician-directed discontinuation supported by a written letter.",
                "Medication that arrives visibly damaged, documented with photographs.",
                "Medication whose integrity the dispensing pharmacy confirms is compromised.",
                "Duplicate charges or an actual billing error that exceeds the amount agreed at purchase.",
              ] },
              { p: "Changing your mind after prescription issuance, dissatisfaction alone, an incorrect delivery address you supplied or a later lower price does not qualify for a refund. Confirmed delivery to the address on file is handled through the carrier-claim process described below. Packaging appearance alone does not establish that medication quality is compromised." },
              { p: "TRTrx offers no treatment-results, weight-loss or satisfaction-based money-back promise. Treatment outcomes vary. Nothing in this policy requires you to continue a treatment against your clinician's advice." },
            ],
          },
          {
            heading: "When a package has a problem",
            blocks: [
              { subhead: "Damaged on arrival" },
              { p: "Report the problem within 24 hours of the delivery scan. Photograph the damage and retain the packaging for review. Once damage is verified, you may choose a free replacement or a refund. The dispensing pharmacy may need to review the medication and packaging." },
              { subhead: "Tracking says delivered, but the package is missing" },
              { p: "Contact the designated support channel within 24 hours so a carrier trace can be opened. We may request a missing-package claim with the courier and, if theft is suspected, a police-report number. If the carrier confirms delivery to the address you supplied, we will help with the carrier's claim process; confirmed delivery alone does not establish eligibility for a TRTrx refund. Applicable consumer rights remain in place." },
              { subhead: "Storage or medication-quality concerns" },
              { p: "Follow the storage instructions provided by the dispensing pharmacy. If you suspect a storage or shipping problem, contact that pharmacy for guidance before using the medication and notify the designated support channel. Quality-related replacements are reviewed with the pharmacy for the actual preparation, rather than packaging appearance alone." },
            ],
          },
          {
            heading: "Pausing or ending a plan",
            blocks: [
              { p: "TRTrx's planned model is monthly, without a long-term commitment. Before enrollment, the available cancellation method, renewal date and any automatic-renewal authorization must be disclosed. The current website has no subscription or renewal to cancel." },
              { p: "For a future plan, use the cancellation or support channel provided at enrollment before the next billing date. Obtain confirmation that renewal is turned off; a request to change a plan or price does not by itself confirm cancellation. Once renewal is turned off, the current paid term finishes and no new term is charged." },
              { p: "Turning off renewal does not by itself refund or prorate a term already purchased. Early-exit requests are reviewed under this policy's exceptions and the terms accepted at purchase. A lower price or promotion alone does not qualify for an early refund or a switch during a paid term. Pausing billing is separate from any clinical decision to stop medication." },
            ],
          },
          {
            heading: "How to request a refund",
            blocks: [
              { p: <>A working support channel and any patient-portal instructions must be published before purchases begin. The current <Link href="/contact" className={linkClass}>contact page</Link> describes availability; it does not receive refund requests. Do not send medical records, payment details or identification to an unverified address.</> },
              { p: "Once the service opens, use the designated support channel and include:" },
              { list: [
                "Your full name and the email associated with your account.",
                "The order number and the date you were charged.",
                "A description of what happened, with relevant photos or screenshots.",
                "A clinician's written discontinuation advice when requesting review on that basis, sent through the designated secure channel.",
              ] },
              { p: "The review target is two to four business days after complete information is received. Approved refunds return to the card or bank account that paid. Banks typically post the credit in 5 to 10 business days. If it has not appeared after 10 business days, contact support with the order number so it can be traced. These are processing estimates, not treatment or refund-outcome promises." },
            ],
          },
          {
            heading: "Duplicate charges and billing errors",
            blocks: [
              { p: "Report a duplicate charge or a charge above the amount you agreed to at purchase with the order number and transaction dates. Verified errors are corrected through the original payment method. A later discount is not a billing error." },
            ],
          },
          {
            heading: "Requests on someone else's behalf",
            blocks: [
              { p: "General policy questions may be asked by another person. Account-specific information and refund instructions require verification of the patient's identity or appropriate authorization through the designated secure channel. Do not send another person's health information through an unverified channel." },
            ],
          },
          {
            heading: "Your rights and policy updates",
            blocks: [
              { p: <>This policy forms part of the <Link href="/terms" className={linkClass}>Terms of Service</Link>. The terms accepted at purchase and applicable law control your rights. Updates do not remove rights attached to an existing purchase. The date above identifies this version.</> },
            ],
          },
        ]}
        footnote={<>Patient intake and payments are not open. Check <Link href="/launch" className={linkClass}>launch status</Link> and <Link href="/contact" className={linkClass}>contact availability</Link> for updates.</>}
      />
    </PageShell>
  );
}
