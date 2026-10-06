// Publish named clinicians only after their identity, credentials and participation are verified.
export const MEDICAL_STANDARD = {
  eyebrow: "The planned care model",
  body: [
    "TRTrx is being built around physician-led assessment and transparent pricing. Intake is not open, and no clinical services are currently available.",
    "The intended process begins with medical history, appropriate testing and a discussion of benefits, risks and alternatives. Treatment would depend on an individual clinical decision, not a product selection on this website.",
    "We will publish verified clinician details, available states and service terms before clinical intake opens. Until then, use these resources to prepare questions for your own healthcare provider.",
  ],
  standards: [
    "Individual clinical assessment",
    "A monitoring plan matched to the patient",
    "Clear medication and billing information",
    "Verified clinician and state details before intake opens",
  ],
  principle:
    "A prescription should follow a clinical decision, not a checkout choice.",
} as const;
