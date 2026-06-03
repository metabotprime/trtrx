// No named medical director, bio, headshot, or credential list lives here — by
// design. Emitting structured data (or visible copy) for a placeholder/fabricated
// physician identity is a Google E-E-A-T red flag: quality raters penalize
// fabricated author/medical identities, and a machine-readable JSON-LD claim
// (Person / HealthcareProvider) is worse than a visible placeholder because it is an
// explicit, indexable assertion about a person who does not exist.
//
// REINTRODUCING A NAMED PHYSICIAN: when a real, named medical director is locked in,
// add a `Physician` type + a vetted record (verified credentials, on-record bio,
// commissioned headshot) back into this file, render it in a named-physician layout,
// and ONLY THEN re-mount <PersonSchema> on /about (and swap the homepage section).
// The schema component is kept ready at src/components/seo/schemas/PersonSchema.tsx.

/**
 * Person-agnostic medical credibility for the homepage section.
 *
 * Every line here is true at pre-launch without naming a specific
 * individual — so the homepage carries real E-E-A-T weight without
 * exposing "[Name Placeholder]". When the named medical director is
 * locked, swap the homepage section back to a named-physician layout
 * (and emit the Person schema then, not before).
 */
export const MEDICAL_STANDARD = {
  eyebrow: 'Medical Direction',
  body: [
    'Every trtrx protocol is set by a board-certified physician — not a quiz, not an algorithm. The clinical standards, the dosing playbook, and the lab thresholds that decide who is and isn’t a candidate are all written and signed off by a doctor.',
    'The model is deliberately old-fashioned. A licensed physician reviews your intake and labs, sets your protocol, and stays accountable for it — from your first consult through every refill. No outsourced call center, no scripted visits. When a case falls outside the standard ranges, a physician reviews it personally.',
    'Transparency comes first. You’ll know what you’re taking, why the dose is what it is, and what to expect over the next six months. If TRT isn’t right for you, that conversation happens before you pay — not after.',
  ],
  standards: [
    'Board-certified physicians, licensed across 47 states',
    'Protocols aligned to Endocrine Society guidelines',
    'Every prescription individually reviewed — no auto-approvals',
    'Physician oversight from intake through every refill',
  ],
  principle:
    'Hormone health isn’t a subscription. It’s a relationship between a patient and their physician.',
} as const;
