export type Treatment = {
  slug: 'cypionate' | 'enanthate' | 'enclomiphene' | 'hcg' | 'cream';
  name: string;
  shortName: string;
  formFactor: 'Injectable' | 'Oral' | 'Topical' | 'Adjunct';
  route: string;
  frequency: string;
  fertilityPreserving: boolean;
  fdaStatus: 'FDA-approved' | 'Compounded' | 'Both available';
  monthlyPriceFrom: number;
  headline: string;
  eyebrow: string;
  summary: string;
  bullets: string[];
  whoIsThisFor: string[];
  whoIsThisNotFor: string[];
};

export const TREATMENTS: Treatment[] = [
  {
    slug: 'cypionate',
    name: 'Testosterone Cypionate',
    shortName: 'Cypionate',
    formFactor: 'Injectable',
    route: 'Subcutaneous or intramuscular injection',
    frequency: '1× per week',
    fertilityPreserving: false,
    fdaStatus: 'Both available',
    monthlyPriceFrom: 129,
    headline: 'Testosterone Cypionate',
    eyebrow: 'INJECTABLE · 1× WEEKLY · FDA-APPROVED',
    summary:
      'The most-prescribed form of testosterone in the United States. A single weekly injection delivers steady serum levels with a predictable half-life of around eight days. Most men feel noticeable changes in energy and drive within the first three to six weeks. Subcutaneous works for most patients. Intramuscular is an option if you prefer it.',
    bullets: [
      'One injection per week, drawn at home',
      'Eight-day half-life keeps levels steady',
      'Subcutaneous (small needle) by default',
      'FDA-approved generic or compounded',
      'Most-prescribed TRT in the US',
    ],
    whoIsThisFor: [
      'Men starting TRT for the first time',
      'Patients who want a once-weekly routine',
      'Anyone tired of daily creams or pills',
      'Travelers who can pack a single weekly dose',
    ],
    whoIsThisNotFor: [
      'Men actively trying to conceive',
      'Patients with severe needle aversion',
      'Anyone with untreated polycythemia',
    ],
  },
  {
    slug: 'enanthate',
    name: 'Testosterone Enanthate',
    shortName: 'Enanthate',
    formFactor: 'Injectable',
    route: 'Subcutaneous or intramuscular injection',
    frequency: '1× per week',
    fertilityPreserving: false,
    fdaStatus: 'Both available',
    monthlyPriceFrom: 129,
    headline: 'Testosterone Enanthate',
    eyebrow: 'INJECTABLE · 1× WEEKLY · FDA-APPROVED',
    summary:
      'A close cousin of cypionate with a slightly shorter half-life of about seven days. Identical dosing schedule, near-identical results. Some patients tolerate enanthate better; others prefer cypionate. Your physician helps you choose, and switching between the two is straightforward if your first pick is not the right fit.',
    bullets: [
      'One injection per week at home',
      'Seven-day half-life — slightly faster clearance',
      'Subcutaneous or intramuscular delivery',
      'FDA-approved generic or compounded',
      'Interchangeable with cypionate clinically',
    ],
    whoIsThisFor: [
      'Men who want a weekly injection cadence',
      'Patients who did not tolerate cypionate well',
      'Anyone preferring a slightly shorter ester',
      'Men returning to TRT after a break',
    ],
    whoIsThisNotFor: [
      'Men actively trying to conceive',
      'Patients unable to self-inject',
      'Anyone with untreated cardiovascular disease',
    ],
  },
  {
    slug: 'enclomiphene',
    name: 'Enclomiphene',
    shortName: 'Enclomiphene',
    formFactor: 'Oral',
    route: 'Daily oral tablet',
    frequency: 'Daily',
    fertilityPreserving: true,
    fdaStatus: 'Compounded',
    monthlyPriceFrom: 99,
    headline: 'Enclomiphene',
    eyebrow: 'ORAL · DAILY · FERTILITY-PRESERVING',
    summary:
      'A daily tablet that signals your body to make more of its own testosterone instead of replacing it. Sperm production stays intact, which makes enclomiphene the right choice for men who want higher T without sacrificing fertility. Results build over six to twelve weeks as your endogenous output increases.',
    bullets: [
      'One tablet daily, no injections',
      'Stimulates your own T production',
      'Preserves sperm count and fertility',
      'Compounded — not currently FDA-approved for TRT',
      'Easy to stop with no clearance period',
    ],
    whoIsThisFor: [
      'Men who plan to have children',
      'Patients with secondary hypogonadism',
      'Anyone who wants to avoid injections',
      'Men with mild-to-moderate low T',
    ],
    whoIsThisNotFor: [
      'Men with primary testicular failure',
      'Patients who need rapid symptom relief',
      'Anyone with a history of visual disturbances on SERMs',
    ],
  },
  {
    slug: 'hcg',
    name: 'HCG Therapy',
    shortName: 'HCG',
    formFactor: 'Adjunct',
    route: 'Subcutaneous injection (adjunct)',
    frequency: '2–3× per week',
    fertilityPreserving: true,
    fdaStatus: 'Compounded',
    monthlyPriceFrom: 109,
    headline: 'HCG Therapy',
    eyebrow: 'ADJUNCT · 2–3× WEEKLY · FERTILITY SUPPORT',
    summary:
      'Human chorionic gonadotropin keeps the testicles working while you are on injectable TRT. It mimics LH, the pituitary signal that drives sperm production and testicular size. Men who want to preserve fertility, prevent atrophy, or come off TRT later add HCG to their protocol. It is an adjunct, not a standalone therapy.',
    bullets: [
      'Maintains testicular function on TRT',
      'Two to three injections per week',
      'Supports fertility while on testosterone',
      'Compounded — small-volume subcutaneous dose',
      'Stacks with cypionate or enanthate',
    ],
    whoIsThisFor: [
      'Men on injectable TRT who want fertility insurance',
      'Patients planning kids in the next few years',
      'Anyone concerned about testicular atrophy',
      'Men preparing to taper off TRT',
    ],
    whoIsThisNotFor: [
      'Men not on testosterone replacement',
      'Patients with hormone-sensitive cancers',
    ],
  },
  {
    slug: 'cream',
    name: 'Topical Cream',
    shortName: 'Cream',
    formFactor: 'Topical',
    route: 'Daily topical application',
    frequency: 'Daily',
    fertilityPreserving: false,
    fdaStatus: 'Compounded',
    monthlyPriceFrom: 129,
    headline: 'Topical Testosterone Cream',
    eyebrow: 'TOPICAL · DAILY · NO NEEDLES',
    summary:
      'A measured dose of testosterone applied to the skin once a day. Absorbs in minutes, no injections, no pills. Levels track your daily application closely, so consistency matters more than with weekly injectables. Best for men who want a needle-free option and have predictable mornings.',
    bullets: [
      'Daily topical application — no injections',
      'Absorbs in two to three minutes',
      'Compounded to your prescribed dose',
      'Avoid skin-to-skin transfer with partners or kids',
      'Easiest start for needle-averse patients',
    ],
    whoIsThisFor: [
      'Men with strong needle aversion',
      'Patients with consistent daily routines',
      'Anyone who wants to try TRT without injections',
      'Men who travel frequently and want carry-on-friendly dosing',
    ],
    whoIsThisNotFor: [
      'Men actively trying to conceive',
      'Patients with young kids who shower with them',
      'Anyone who skips morning routines',
    ],
  },
];

export function getTreatmentBySlug(slug: string): Treatment | undefined {
  return TREATMENTS.find((t) => t.slug === slug);
}
