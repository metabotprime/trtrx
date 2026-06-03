// PRELAUNCH: All fields below are placeholders.
// Replace with the named medical director, real credentials, vetted bio,
// and a commissioned headshot before public launch.

export type Physician = {
  name: string;
  title: string;
  credentials: string[];
  photo: string;
  bio: string[];
  pullQuote: string;
};

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

export const MEDICAL_DIRECTOR: Physician = {
  // PRELAUNCH: replace with named medical director.
  name: 'Dr. [Name Placeholder]',
  title: 'Medical Director',
  credentials: [
    // PRELAUNCH: replace each line with verified credential.
    'Board-Certified [Specialty]',
    'Fellowship in [Endocrinology / Men’s Health]',
    'Published in [Journal Placeholder]',
  ],
  // PRELAUNCH: replace with commissioned headshot at /public/images/physician/director.jpg.
  photo: '/images/physician/director.jpg',
  bio: [
    // PRELAUNCH: rewrite all three paragraphs once the real director is named.
    'Dr. [Name Placeholder] has spent the last fifteen years focused on men’s hormone health. The work started in academic endocrinology and moved into direct patient care after a decade of research. The throughline has always been the same question: what does a real, sustainable hormone protocol look like for the working man, not the bodybuilder.',
    'At trtrx, the role is straightforward. Set the clinical standards, write the protocols every prescribing physician follows, and personally review edge cases when a patient presents outside the lab ranges that fit the standard playbook. No outsourced telehealth, no scripted consults. Every protocol on this site has been signed off on by a doctor who would put their name on it in print.',
    'The ethos is transparency first. Patients deserve to know what they are putting in their body, why the dose is what it is, and what to expect from the next six months. If a patient is not the right fit for TRT, that conversation happens before they pay, not after. That standard is the reason this practice exists.',
  ],
  // PRELAUNCH: replace with a vetted, on-the-record quote.
  pullQuote:
    'Hormone health is not a subscription — it is a relationship between a patient and their physician.',
};
