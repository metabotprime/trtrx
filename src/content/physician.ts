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
