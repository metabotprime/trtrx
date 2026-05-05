export type FAQCategory =
  | 'results'
  | 'safety'
  | 'fertility'
  | 'insurance'
  | 'legality'
  | 'products'
  | 'side-effects'
  | 'monitoring'
  | 'lifestyle'
  | 'refund';

export type FAQ = {
  id: string;
  category: FAQCategory;
  question: string;
  answer: string;
  onHomePage: boolean;
};

export const FAQS: FAQ[] = [
  // --- Homepage 6 ---
  {
    id: 'how-fast-results',
    category: 'results',
    question: 'How fast will I feel different?',
    answer:
      'Most men notice improved energy and mood inside three to six weeks. Libido and morning erections often pick up sooner. Body composition changes — more muscle, less fat — show up around month three and continue building through month six.',
    onHomePage: true,
  },
  {
    id: 'long-term-safety',
    category: 'safety',
    question: 'Is testosterone safe long-term?',
    answer:
      'When prescribed and monitored properly, yes. The 2023 TRAVERSE trial followed 5,000+ men for years and found no increase in heart attacks or strokes from TRT compared to placebo. Long-term safety depends on labs every six months and a physician adjusting your dose when something drifts.',
    onHomePage: true,
  },
  {
    id: 'fertility-impact',
    category: 'fertility',
    question: 'Will TRT affect my fertility?',
    answer:
      'Standard injectable TRT suppresses sperm production while you are on it. If you want to keep your fertility intact, two paths work: enclomiphene instead of testosterone, or testosterone plus HCG. Both options are part of our intake conversation, not an upsell.',
    onHomePage: true,
  },
  {
    id: 'insurance',
    category: 'insurance',
    question: 'Do you accept insurance?',
    answer:
      'No. We are direct-pay so we can keep prices flat and avoid prior-authorization theatre. Most patients pay less out of pocket with us than they would in copays and clinic fees through insurance. We provide an itemized superbill if you want to file for reimbursement.',
    onHomePage: true,
  },
  {
    id: 'cypionate-vs-enanthate',
    category: 'products',
    question: "What's the difference between cypionate and enanthate?",
    answer:
      'They are nearly identical injectable testosterone esters. Cypionate has an eight-day half-life; enanthate has about seven days. Both are dosed once weekly and produce the same clinical results. The only real difference is which one your body responds to better — your physician helps you pick.',
    onHomePage: true,
  },
  {
    id: 'state-legality',
    category: 'legality',
    question: 'Is TRT legal in my state?',
    answer:
      'Testosterone is a Schedule III controlled substance and is legal everywhere in the US with a valid prescription. We are licensed to prescribe in 47 states. The exceptions today are Hawaii, Alaska, and Puerto Rico. State coverage expands as we add medical directors.',
    onHomePage: true,
  },

  // --- 19 deeper questions ---

  // results (2)
  {
    id: 'results-energy-first',
    category: 'results',
    question: 'What changes first — energy or muscle?',
    answer:
      'Energy and mood lead by a wide margin. You will probably feel sharper before anyone notices a physical change. Muscle and body-fat changes need consistent training and protein on top of TRT, and they show up over months, not weeks.',
    onHomePage: false,
  },
  {
    id: 'results-plateau',
    category: 'results',
    question: 'Will my results plateau?',
    answer:
      'Symptom improvements stabilize around month six. Body composition keeps responding as long as you train and eat for it. If you feel a backslide after a strong start, it usually means a dose adjustment, not that TRT stopped working.',
    onHomePage: false,
  },

  // safety (2)
  {
    id: 'safety-heart',
    category: 'safety',
    question: 'Does TRT cause heart attacks?',
    answer:
      'No. The TRAVERSE trial — the largest randomized cardiovascular safety study on TRT — showed no excess risk of heart attack, stroke, or cardiovascular death versus placebo. Older observational claims to the contrary have been retracted or contradicted by stronger data.',
    onHomePage: false,
  },
  {
    id: 'safety-prostate',
    category: 'safety',
    question: 'Will TRT cause prostate cancer?',
    answer:
      'Current evidence does not support a link between TRT and new prostate cancer. We screen with a baseline PSA and recheck annually so anything that does show up gets caught early. If you have an active prostate cancer diagnosis, TRT is contraindicated.',
    onHomePage: false,
  },

  // fertility (1)
  {
    id: 'fertility-recovery',
    category: 'fertility',
    question: 'Does fertility come back after stopping TRT?',
    answer:
      'For most men, yes — sperm production typically returns within three to twelve months after stopping testosterone. Older age and longer time on TRT can extend that window. If you might want kids during therapy, ask about HCG or enclomiphene at the start.',
    onHomePage: false,
  },

  // insurance (1)
  {
    id: 'insurance-hsa-fsa',
    category: 'insurance',
    question: 'Can I use my HSA or FSA?',
    answer:
      'Yes. Medications, lab work, and physician fees through trtrx are HSA- and FSA-eligible. We provide itemized receipts for reimbursement and most accounts accept them without further documentation.',
    onHomePage: false,
  },

  // legality (2)
  {
    id: 'legality-controlled',
    category: 'legality',
    question: 'Is testosterone a controlled substance?',
    answer:
      'Yes. Testosterone is Schedule III in the US, alongside ketamine and codeine combinations. That means a prescription is required and refills are limited. Our pharmacy handles the controlled-substance paperwork on your behalf.',
    onHomePage: false,
  },
  {
    id: 'legality-travel',
    category: 'legality',
    question: 'Can I travel with my testosterone?',
    answer:
      'Domestic travel: keep it in the original pharmacy-labeled vial in your carry-on. International travel: bring the prescription label and a copy of your physician letter. Some countries restrict importation, so check destination rules before you fly.',
    onHomePage: false,
  },

  // products (3)
  {
    id: 'products-injectable-vs-cream',
    category: 'products',
    question: 'Should I pick injectable or cream?',
    answer:
      'Injectable is more reliable, less expensive over time, and once-weekly. Cream is easier to start with and avoids needles entirely, but absorption varies and daily compliance matters. Most patients land on injectable after their first six months, but starting on cream is fine.',
    onHomePage: false,
  },
  {
    id: 'products-enclomiphene-vs-trt',
    category: 'products',
    question: 'Is enclomiphene the same as TRT?',
    answer:
      'No. TRT replaces testosterone with an external dose. Enclomiphene tells your own body to make more. Results are similar in mild cases of low T, but enclomiphene preserves fertility and avoids the suppression that comes with replacement therapy.',
    onHomePage: false,
  },
  {
    id: 'products-compounded',
    category: 'products',
    question: 'What does "compounded" mean?',
    answer:
      'A compounded medication is mixed by a licensed pharmacy to a specific prescription rather than mass-produced and FDA-approved as a finished product. Our compounded options come from FDA-registered 503B outsourcing facilities that follow the same sterility and potency standards as commercial manufacturers.',
    onHomePage: false,
  },

  // side-effects (3)
  {
    id: 'side-effects-acne',
    category: 'side-effects',
    question: 'Will TRT give me acne?',
    answer:
      'Some men get mild breakouts in the first two to three months, usually on the back or shoulders. It typically settles as your levels stabilize. If it persists, we adjust your dose or add a topical regimen — full-body cystic acne is not a normal TRT side effect.',
    onHomePage: false,
  },
  {
    id: 'side-effects-hair',
    category: 'side-effects',
    question: 'Will I lose my hair on TRT?',
    answer:
      'TRT can speed up male-pattern hair loss if you are genetically predisposed. It does not cause baldness in men who would not have lost hair anyway. If hair matters to you, finasteride or minoxidil pair safely with TRT and we can prescribe both.',
    onHomePage: false,
  },
  {
    id: 'side-effects-mood',
    category: 'side-effects',
    question: 'Will TRT change my mood or make me aggressive?',
    answer:
      'Properly dosed TRT lifts mood and stabilizes irritability for most men. The "roid rage" trope comes from supraphysiologic anabolic abuse, not from clinical replacement doses. If your dose is too high, you may feel wired or short-tempered — that is a signal to recheck labs.',
    onHomePage: false,
  },

  // monitoring (2)
  {
    id: 'monitoring-labs-frequency',
    category: 'monitoring',
    question: 'How often do I need bloodwork?',
    answer:
      'Baseline labs before starting, a follow-up at eight to twelve weeks to confirm your dose is right, and then every six months ongoing. We include two annual lab draws in your monthly fee. Extra panels are available at lab cost if your physician orders them.',
    onHomePage: false,
  },
  {
    id: 'monitoring-what-tested',
    category: 'monitoring',
    question: 'What do you test on each panel?',
    answer:
      'Total and free testosterone, estradiol (sensitive assay), CBC for hematocrit, comprehensive metabolic panel, lipids, PSA after age 40, and SHBG when relevant. The full panel runs through Quest or LabCorp at locations near you.',
    onHomePage: false,
  },

  // lifestyle (1)
  {
    id: 'lifestyle-alcohol',
    category: 'lifestyle',
    question: 'Can I drink alcohol on TRT?',
    answer:
      'Moderate drinking is fine and does not interact with testosterone directly. Heavy drinking suppresses your endogenous T and pushes estrogen up, which works against your therapy. If you are training hard and want results, the math favors keeping it light.',
    onHomePage: false,
  },

  // refund (2)
  {
    id: 'refund-cancel',
    category: 'refund',
    question: 'How do I cancel?',
    answer:
      'One click in your account dashboard. No phone tree, no retention call. Your prescription stays active through the end of the current cycle and we ship nothing further. If you want your records sent elsewhere, we transfer them at no charge.',
    onHomePage: false,
  },
  {
    id: 'refund-policy',
    category: 'refund',
    question: 'What if my first month does not work for me?',
    answer:
      'If your initial labs come back outside the range that justifies treatment, we refund the medication portion of your initial fee. Once medication ships, we cannot refund it for safety and regulatory reasons. We will work with your physician to adjust the protocol instead.',
    onHomePage: false,
  },
];

export function getHomepageFAQs(): FAQ[] {
  return FAQS.filter((f) => f.onHomePage);
}

export function getFAQsByCategory(): Record<FAQCategory, FAQ[]> {
  const empty: Record<FAQCategory, FAQ[]> = {
    results: [],
    safety: [],
    fertility: [],
    insurance: [],
    legality: [],
    products: [],
    'side-effects': [],
    monitoring: [],
    lifestyle: [],
    refund: [],
  };
  for (const faq of FAQS) {
    empty[faq.category].push(faq);
  }
  return empty;
}
