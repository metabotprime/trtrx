export type FAQCategory =
  | "results"
  | "safety"
  | "fertility"
  | "insurance"
  | "legality"
  | "products"
  | "side-effects"
  | "monitoring"
  | "lifestyle"
  | "refund";

export type FAQ = {
  id: string;
  category: FAQCategory;
  question: string;
  answer: string;
  onHomePage: boolean;
};

export const FAQS: FAQ[] = [
  {
    id: "how-fast-results",
    category: "results",
    question: "When will TRTrx open?",
    answer:
      "TRTrx is preparing to launch. Patient intake, consultations, prescriptions and payments are not available yet. We have not announced a confirmed opening date. The launch-status page explains what is available now.",
    onHomePage: true,
  },
  {
    id: "long-term-safety",
    category: "safety",
    question: "What should I ask about TRT safety?",
    answer:
      "Discuss your diagnosis, medical history, fertility plans, benefits, risks and alternatives with a licensed clinician. TRT requires individual assessment and ongoing monitoring. No treatment is risk-free, and this website cannot establish whether testosterone is appropriate for you.",
    onHomePage: true,
  },
  {
    id: "fertility-impact",
    category: "fertility",
    question: "Will TRT affect my fertility?",
    answer:
      "Testosterone treatment can suppress sperm production. The Endocrine Society recommends against starting it when planning fertility in the near term. Discuss your plans before treatment; neither enclomiphene nor adding HCG guarantees fertility preservation.",
    onHomePage: true,
  },
  {
    id: "insurance",
    category: "insurance",
    question: "What is the planned pricing model?",
    answer:
      "TRTrx is planning direct-pay monthly pricing: $219 for standard injectable treatment, $179 for enclomiphene and $199 for cream. HCG is a planned adjunct at an additional $89, not a standalone $89 plan. Clinical availability and final service terms are still being finalized. No payments are accepted.",
    onHomePage: true,
  },
  {
    id: "cypionate-vs-enanthate",
    category: "products",
    question: "How should I compare cypionate and enanthate?",
    answer:
      "Both are injectable testosterone formulations, but the specific product, route and instructions matter. Ask your clinician why one is being considered, what monitoring is needed and how to use it. Do not switch products or copy a dosing schedule from a website.",
    onHomePage: true,
  },
  {
    id: "state-legality",
    category: "legality",
    question: "Is TRTrx available in my state?",
    answer:
      "Not yet. TRTrx is not accepting patients in any state. We have not confirmed a state coverage list. Our state guide explains how to check provider credentials and what to ask before seeking telehealth care.",
    onHomePage: true,
  },
  {
    id: "results-energy-first",
    category: "results",
    question: "Can symptoms alone show that I need testosterone?",
    answer:
      "Symptoms such as fatigue can have several causes. A clinician considers symptoms, medical history and appropriate testing together. Do not assume a symptom or one laboratory value establishes a need for treatment.",
    onHomePage: false,
  },
  {
    id: "results-plateau",
    category: "results",
    question: "What if treatment is not helping?",
    answer:
      "Speak to your prescribing clinician about symptoms, follow-up results and side effects. Do not increase a dose or add another drug yourself. Your clinician can reassess the diagnosis and discuss whether continuing treatment makes sense.",
    onHomePage: false,
  },
  {
    id: "safety-heart",
    category: "safety",
    question: "How should I discuss heart and blood-pressure risks?",
    answer:
      "Tell your clinician about cardiovascular history and current medications. Ask how current testosterone product labeling applies to you and how blood pressure will be monitored. Research findings do not mean every formulation is safe for every patient.",
    onHomePage: false,
  },
  {
    id: "safety-prostate",
    category: "safety",
    question: "What should I disclose about prostate health?",
    answer:
      "Tell your clinician about prostate cancer, prior prostate testing, urinary symptoms and family history. Ask which assessment and follow-up are appropriate for your situation. This website cannot decide whether treatment is suitable.",
    onHomePage: false,
  },
  {
    id: "fertility-recovery",
    category: "fertility",
    question: "Will fertility recover after stopping testosterone?",
    answer:
      "Recovery varies, and a specific timeframe or outcome cannot be promised. Discuss fertility preservation with an appropriate specialist before starting treatment, especially if a future pregnancy is a priority.",
    onHomePage: false,
  },
  {
    id: "insurance-hsa-fsa",
    category: "insurance",
    question: "Will HSA or FSA payment be available?",
    answer:
      "Payment methods and documentation are still being finalized. TRTrx does not currently accept payments. Check eligibility requirements with your plan administrator before assuming that any future charge will qualify.",
    onHomePage: false,
  },
  {
    id: "legality-controlled",
    category: "legality",
    question: "What prescription rules should I check?",
    answer:
      "Ask a licensed clinician and pharmacist about the rules for the exact medication, your location and the proposed visit format. TRTrx is not currently prescribing or dispensing medications. Our state guide links to official medical boards.",
    onHomePage: false,
  },
  {
    id: "legality-travel",
    category: "legality",
    question: "What should I check before travelling with medication?",
    answer:
      "Ask your pharmacist about storage and documentation for your exact prescription. Check official destination and transport rules before travelling, especially internationally. Do not assume that a prescription authorizes importation everywhere.",
    onHomePage: false,
  },
  {
    id: "products-injectable-vs-cream",
    category: "products",
    question: "How should I compare injections and cream?",
    answer:
      "Discuss the specific formulation, administration requirements, monitoring and household exposure precautions with your clinician. A compounded cream is not FDA-approved and should not be assumed equivalent to an approved gel. Preference alone does not establish clinical suitability.",
    onHomePage: false,
  },
  {
    id: "products-enclomiphene-vs-trt",
    category: "products",
    question: "Is enclomiphene the same as TRT?",
    answer:
      "No. Enclomiphene is not testosterone and is not an FDA-approved drug. It has been studied for effects on hormonal signaling involved in testosterone production. It should not be presented as interchangeable with TRT or as a guaranteed way to preserve fertility.",
    onHomePage: false,
  },
  {
    id: "products-compounded",
    category: "products",
    question: "What does compounded mean?",
    answer:
      "Compounding involves preparing a medication for an individual medical need. Compounded drugs are not FDA-approved; FDA does not review them for safety, effectiveness or quality before marketing. Discuss approved alternatives and the reason for compounding with your clinician and pharmacist.",
    onHomePage: false,
  },
  {
    id: "side-effects-acne",
    category: "side-effects",
    question: "What should I do if I develop side effects?",
    answer:
      "Contact your prescribing clinician and describe the symptom, timing and other medications you take. Do not change the dose or start another prescription on your own. Seek urgent medical help when symptoms could be an emergency.",
    onHomePage: false,
  },
  {
    id: "side-effects-hair",
    category: "side-effects",
    question: "What should I ask about hair changes?",
    answer:
      "Discuss your hair history and concerns before starting any hormonal treatment. Ask the prescriber about the exact product and possible adverse effects. TRTrx does not currently prescribe hair-loss medication or any other treatment.",
    onHomePage: false,
  },
  {
    id: "side-effects-mood",
    category: "side-effects",
    question: "What if I notice mood changes?",
    answer:
      "Discuss new or worsening mood symptoms promptly with your clinician. Mood changes should not automatically be attributed to testosterone levels or treated by changing a dose. If you feel unsafe or may harm yourself, seek emergency assistance.",
    onHomePage: false,
  },
  {
    id: "monitoring-labs-frequency",
    category: "monitoring",
    question: "How often would I need blood tests?",
    answer:
      "Testing should be individualized by the prescribing clinician. Planned TRTrx pricing includes two lab panels per year, but that commercial inclusion does not establish a medically sufficient schedule. Required tests, extra testing and final service terms must be clarified before care begins.",
    onHomePage: false,
  },
  {
    id: "monitoring-what-tested",
    category: "monitoring",
    question: "Which tests should I discuss?",
    answer:
      "Ask how the clinician will confirm the diagnosis, investigate the cause and monitor treatment risks. The appropriate tests depend on your medical history and treatment. Read our blood-test guide to prepare for that conversation; TRTrx is not currently ordering labs.",
    onHomePage: false,
  },
  {
    id: "monitoring-doctor-access",
    category: "monitoring",
    question: "Is the patient portal available?",
    answer:
      "No. The patient portal and clinician messaging are planned features. There are no accounts or clinical response-time commitments at present. General inquiries can be sent to hello@trtrx.com, but do not send medical records or sensitive health information.",
    onHomePage: false,
  },
  {
    id: "lifestyle-alcohol",
    category: "lifestyle",
    question: "What lifestyle information should I share?",
    answer:
      "Tell your clinician about alcohol, tobacco, sleep, exercise, supplements and medications. These details can affect an assessment and the discussion of treatment risks. Ask for guidance specific to your health and prescription.",
    onHomePage: false,
  },
  {
    id: "refund-cancel",
    category: "refund",
    question: "What are the planned cancellation terms?",
    answer:
      "The planned model allows cancellation without a long-term commitment. No subscriptions or billing are active. The final cancellation process and billing terms will be published before clinical intake opens.",
    onHomePage: false,
  },
  {
    id: "refund-policy",
    category: "refund",
    question: "Is there a refund or results guarantee?",
    answer:
      "No results or refund guarantee is being offered on this prelaunch website. Treatment outcomes vary. Final billing and cancellation terms will be available before any service can be purchased.",
    onHomePage: false,
  },
  {
    id: "safety-md-led",
    category: "safety",
    question: "Who will provide care?",
    answer:
      "TRTrx is planning a physician-led care model. The clinician roster and state availability are not finalized. Verified names, credentials and care arrangements will be published before patient intake opens.",
    onHomePage: false,
  },
];

export function getHomepageFAQs(): FAQ[] {
  return FAQS.filter((f) => f.onHomePage);
}

export function getFAQsByCategory(): Record<FAQCategory, FAQ[]> {
  const byCategory: Record<FAQCategory, FAQ[]> = {
    results: [],
    safety: [],
    fertility: [],
    insurance: [],
    legality: [],
    products: [],
    "side-effects": [],
    monitoring: [],
    lifestyle: [],
    refund: [],
  };
  for (const faq of FAQS) {
    byCategory[faq.category].push(faq);
  }
  return byCategory;
}
