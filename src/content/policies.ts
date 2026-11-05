/**
 * Adapted from Trimi's Terms, Refund Policy and PlanPriceChanges as of
 * November 5, 2026. TRTRx retains its monthly model and intake status;
 * Trimi's GLP-1 outcomes, pharmacy and multi-month plans do not transfer.
 */
export const POLICY_UPDATED = "November 5, 2026";

export const SERVICE_POLICY_NOTICE =
  "Patient intake is not open. TRTrx does not currently accept payments, issue prescriptions, ship medication or provide patient accounts. The service provisions below describe the policy for the planned service; they do not make a service available. The applicable terms and a working support channel must be provided before any purchase.";

export const PLAN_PRICE_POLICY = {
  heading: "Price changes and existing plans",
  blocks: [
    {
      p: "Your existing plan keeps the price and term you agreed to at purchase. If TRTrx later lowers its prices, introduces a promotion or offers a new plan, that change does not reduce the price of a term already purchased. A later lower price is not a billing error.",
    },
    {
      p: "We do not provide refunds, partial or prorated refunds, credits or retroactive price adjustments solely because a lower price or new offer becomes available. You cannot end an existing paid term early and receive a refund of the remaining balance in order to purchase the same treatment at the new price.",
    },
    {
      p: "To switch to new pricing, you must first complete your current plan term. TRTrx's planned model is monthly, without a long-term commitment. Turning off renewal or requesting a pause does not shorten the term already purchased. After that term ends, you may choose an available plan at the price then offered, subject to any required clinician check-in. A request alone does not confirm a plan change or turn off renewal.",
    },
    {
      p: "This price-change rule does not remove refund or cancellation rights under the terms accepted at purchase or applicable law. Pre-prescription cancellation, clinical ineligibility, clinician-directed discontinuation, qualifying shipment problems and actual billing errors remain subject to the refund policy.",
    },
  ],
};
