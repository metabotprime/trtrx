import type { ArticleInput, BlogPostCitation } from './blog';

const S = {
  endocrine: { id: 'endocrine', type: 'WebPage', headline: 'Testosterone Therapy for Hypogonadism Guideline Resources', publisher: 'Endocrine Society', url: 'https://www.endocrine.org/clinical-practice-guidelines/testosterone-therapy' },
  endocrine2026: { id: 'endocrine-2026', type: 'WebPage', headline: 'Statement on Testosterone Replacement Therapy, July 16, 2026', publisher: 'Endocrine Society', url: 'https://www.endocrine.org/news-and-advocacy/news-room/2026/statement-on-testosterone-replacement-therapy' },
  patient: { id: 'hypogonadism', type: 'WebPage', headline: 'Hypogonadism in Men', publisher: 'Endocrine Society', url: 'https://www.endocrine.org/patient-engagement/endocrine-library/hypogonadism' },
  tests: { id: 'testosterone-tests', type: 'WebPage', headline: 'Testosterone Levels Test', publisher: 'MedlinePlus, National Library of Medicine', url: 'https://medlineplus.gov/lab-tests/testosterone-levels-test/' },
  hematocrit: { id: 'hematocrit-test', type: 'WebPage', headline: 'Hematocrit Test', publisher: 'MedlinePlus, National Library of Medicine', url: 'https://medlineplus.gov/lab-tests/hematocrit-test/' },
  fda: { id: 'fda-testosterone', type: 'WebPage', headline: 'Testosterone Information', publisher: 'U.S. Food and Drug Administration', url: 'https://www.fda.gov/drugs/postmarket-drug-safety-information-patients-and-providers/testosterone-information' },
  fda2025: { id: 'fda-blood-pressure', type: 'WebPage', headline: 'FDA issues class-wide labeling changes for testosterone products, February 28, 2025', publisher: 'U.S. Food and Drug Administration', url: 'https://www.fda.gov/drugs/drug-alerts-and-statements/fda-issues-class-wide-labeling-changes-testosterone-products' },
  hhs2026: { id: 'hhs-labeling-2026', type: 'WebPage', headline: 'HHS Announces Requested Updates to Testosterone Therapy Product Labels, June 18, 2026', publisher: 'U.S. Department of Health and Human Services', url: 'https://www.hhs.gov/press-room/fda-requests-updates-testosterone-therapy-labeling.html' },
  fertility: { id: 'aua-fertility', type: 'WebPage', headline: 'Diagnosis and Treatment of Infertility in Men: AUA/ASRM Guideline, amended 2024', publisher: 'American Urological Association and American Society for Reproductive Medicine', url: 'https://www.auanet.org/guidelines-and-quality/guidelines/male-infertility/' },
  cypionate: { id: 'cypionate-label', type: 'WebPage', headline: 'Testosterone cypionate injection: prescribing information', publisher: 'DailyMed, National Library of Medicine', url: 'https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=736dbdfd-c90f-3a9b-e053-2a91aa0aea81' },
  xyosted: { id: 'xyosted-label', type: 'WebPage', headline: 'XYOSTED (testosterone enanthate): prescribing information', publisher: 'DailyMed, National Library of Medicine', url: 'https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=8a3d204c-be26-49e0-8599-0ac12a272e81' },
  compounding: { id: 'compounded-drugs', type: 'WebPage', headline: 'Understanding the Risks of Compounded Drugs', publisher: 'U.S. Food and Drug Administration', url: 'https://www.fda.gov/drugs/human-drug-compounding/understanding-risks-compounded-drugs' },
  estimate: { id: 'good-faith-estimate', type: 'WebPage', headline: 'What is a good faith health insurance estimate?', publisher: 'Centers for Medicare & Medicaid Services', url: 'https://www.cms.gov/medical-bill-rights/help/guides/good-faith-estimate' },
  pharmacy: { id: 'online-pharmacy', type: 'WebPage', headline: 'Considering an Online Pharmacy?', publisher: 'U.S. Food and Drug Administration', url: 'https://www.fda.gov/drugs/besaferx-your-source-online-pharmacy-information/considering-online-pharmacy' },
  licensure: { id: 'state-licensure', type: 'WebPage', headline: 'Licensing across state lines', publisher: 'U.S. Department of Health and Human Services', url: 'https://telehealth.hhs.gov/licensure/licensing-across-state-lines' },
  telehealth: { id: 'controlled-telehealth', type: 'WebPage', headline: 'Prescribing controlled substances via telehealth', publisher: 'U.S. Department of Health and Human Services', url: 'https://telehealth.hhs.gov/providers/telehealth-policy/prescribing-controlled-substances-via-telehealth' },
} satisfies Record<string, BlogPostCitation>;

export const ARTICLE_CONTENT: ArticleInput[] = [
  {
    slug: 'testosterone-replacement-therapy-guide', category: 'getting-started',
    title: 'What is TRT? A guide to testosterone therapy and candidacy',
    excerpt: 'How testosterone replacement therapy is evaluated, what treatment can and cannot answer, and what to discuss before deciding.',
    quickAnswer: 'Testosterone replacement therapy supplies testosterone to people with a diagnosed deficiency. In men, evaluation combines symptoms, repeated blood tests, and an assessment of the cause. A low result or a symptom checklist alone does not establish whether treatment is appropriate.',
    featured: true, onHomePage: true,
    sections: [
      { id: 'what-trt-means', title: 'What testosterone replacement means', paragraphs: [
        'Testosterone is a hormone involved in sexual function, red blood cell production, bone health, and other processes. Hypogonadism describes a clinical problem involving inadequate testosterone production. TRT adds testosterone from outside the body; it does not necessarily correct the condition that reduced production in the first place.',
        'The starting question is why symptoms are happening, not which product to order. Low energy, reduced sexual interest, and changes in mood have several possible explanations. A useful evaluation considers your health history, medicines, sleep, and symptoms together with laboratory evidence.',
      ], sourceIds: ['hypogonadism', 'endocrine-2026'] },
      { id: 'candidacy', title: 'Who may be considered for treatment?', paragraphs: [
        'The Endocrine Society recommends diagnosing testosterone deficiency when compatible symptoms and signs occur alongside consistently low, accurately measured testosterone. Clinicians generally confirm a low result with another early-morning measurement and investigate the underlying cause. Additional hormone tests may help when initial results need context.',
        'A threshold from an online chart is not a stand-alone eligibility rule. Reference ranges, testing methods, timing, and clinical circumstances matter. A clinician also considers whether a reversible contributor, such as another illness or a medicine, should be addressed. Do not stop prescribed medicines to change a test result.',
      ], sourceIds: ['endocrine', 'endocrine-2026'] },
      { id: 'benefits-and-limits', title: 'Discuss specific goals and the limits of the evidence', paragraphs: [
        'For appropriately diagnosed men, treatment may improve symptoms associated with testosterone deficiency. Ask which particular symptoms are reasonably expected to improve and how the response will be assessed. Improvement in a blood number is only one part of the follow-up conversation.',
        'TRT should not be presented as a guaranteed solution for fatigue, sexual difficulties, weight, or aging. If symptoms continue, other causes may need investigation. FDA requested further labeling changes in June 2026 concerning age-related hypogonadism and prostate health. A requested class-wide change does not establish the current wording of every product label.',
      ], sourceIds: ['hypogonadism', 'hhs-labeling-2026'] },
      { id: 'first-appointment', title: 'What belongs in the first appointment?', paragraphs: [
        'Tell the clinician about family-building plans before a prescription is considered. External testosterone can reduce sperm production, and fertility priorities may change the evaluation or treatment approach. Also discuss previous treatment, sleep-related symptoms, and cardiovascular or prostate concerns.',
        'Ask what baseline information is needed, who will review it, and how you will receive a decision. Completing a questionnaire or paying for a consultation is not prescription approval. An evaluation may lead to further testing, referral, another approach, or no testosterone prescription.',
      ], sourceIds: ['endocrine', 'aua-fertility'] },
      { id: 'ongoing-care', title: 'Treatment is an ongoing care decision', paragraphs: [
        'Products have different routes, instructions, and precautions. Selection should account for clinical needs, ability to use the product correctly, cost, and preferences. Your clinician and pharmacist should explain the exact prescription. A general article cannot replace those instructions.',
        'Ask about follow-up visits, laboratory monitoring, blood pressure, and whom to contact about side effects. Monitoring remains important even when you feel better. If treatment is not helping or priorities change, discuss next steps with the prescriber instead of adjusting a plan on your own.',
      ], sourceIds: ['endocrine', 'fda-blood-pressure'] },
      { id: 'prepare', title: 'Prepare for a useful discussion', paragraphs: [
        'Bring previous laboratory reports with collection dates and times, a medication and supplement list, and a short account of the symptoms affecting your life. Write down what you hope treatment would change. This helps the appointment focus on a clinical problem rather than a target number.',
        'TRTrx is preparing to launch and is not currently accepting intake. These resources can help you prepare questions for an appropriately licensed clinician now. Service availability and final treatment plans will need confirmation when intake opens.',
      ] },
    ], citations: [S.patient, S.endocrine2026, S.endocrine, S.hhs2026, S.fertility, S.fda2025],
    relatedSlugs: ['testosterone-blood-tests', 'trt-side-effects-and-monitoring', 'how-trt-pricing-works'],
    relatedLinks: [{ label: 'Explore planned treatments', href: '/treatments' }, { label: 'Launch status', href: '/launch' }],
  },
  {
    slug: 'testosterone-blood-tests', category: 'getting-started',
    title: 'Testosterone blood tests: timing, repeat results, and what they mean',
    excerpt: 'Why one low testosterone result is not a diagnosis, how total and free testosterone differ, and what to bring to your appointment.',
    quickAnswer: 'A testosterone test measures hormone levels in a blood sample. Evaluation for low testosterone usually includes at least two early-morning tests alongside symptoms and a medical history. Laboratory ranges, collection timing, and testing methods all affect interpretation.',
    featured: true, onHomePage: true,
    sections: [
      { id: 'total-and-free', title: 'Total and free testosterone measure different things', paragraphs: [
        'Most testosterone in blood is attached to proteins, including sex hormone-binding globulin, or SHBG, and albumin. A total testosterone test measures the combined amount of bound and unbound hormone. A free testosterone test looks at the portion that is not attached to these proteins.',
        'Total testosterone is commonly the starting test. A clinician may consider free testosterone or other measurements when the total result and clinical picture need clarification. The tests are not interchangeable, and results using different units cannot be compared as if they were the same measurement.',
      ], sourceIds: ['testosterone-tests', 'endocrine'] },
      { id: 'timing', title: 'Why morning timing and preparation matter', paragraphs: [
        'Testosterone levels vary through the day. Testing is commonly performed early in the morning, when levels are generally higher. The Endocrine Society recommends repeated morning fasting measurements when confirming a diagnosis. Your clinician or laboratory should explain preparation for the specific test ordered.',
        'Tell the ordering clinician about medicines, supplements, illness, and your sleep schedule. Ask for individualized timing instructions if you work overnight. Follow the preparation instructions you receive; do not skip prescribed medicines or attempt to manipulate the result. If instructions conflict or are unclear, ask before the appointment.',
      ], sourceIds: ['testosterone-tests', 'endocrine-2026'] },
      { id: 'repeat-results', title: 'Why an unexpectedly low result is usually repeated', paragraphs: [
        'A single result is a snapshot. Illness, collection conditions, normal biological variation, and differences between laboratory methods may affect what that snapshot shows. Repeating the measurement helps a clinician decide whether the finding is consistent rather than isolated.',
        'Symptoms are part of that decision. A low laboratory value alone does not explain every symptom or automatically justify a prescription. Persistent symptoms also deserve discussion when a result falls inside the reference range. The appropriate next step may involve evaluating another explanation, rather than trying to raise a number.',
      ], sourceIds: ['hypogonadism', 'endocrine-2026'] },
      { id: 'read-the-report', title: 'Read the report before reading an online chart', paragraphs: [
        'Start with the test name, unit, reference range, and collection time. A result marked low falls below that laboratory’s listed range for that measurement. It is a prompt for interpretation, not a personalized diagnosis or treatment target.',
        'Avoid comparing total testosterone with someone else’s free testosterone, or comparing numbers from different unit systems. Save the complete report rather than just a number in a message. If repeat testing uses a different laboratory, make sure the clinician can see both methods and reference ranges.',
      ], bullets: ['Which measurement was ordered?', 'Was the sample collected under the requested conditions?', 'Does repeat testing show a consistent pattern?', 'Which symptoms and other findings help explain the result?'], sourceIds: ['testosterone-tests', 'endocrine'] },
      { id: 'additional-testing', title: 'What additional tests may answer', paragraphs: [
        'After a deficiency is established, the clinician may investigate its cause. The pituitary hormones LH and FSH help distinguish problems involving the testes from problems involving the signals that regulate them. Further testing depends on the history and findings. There is no universal shopping list everyone needs to order independently.',
        'Diagnostic tests and tests during treatment serve different purposes. Diagnosis asks whether a deficiency is present and why. Monitoring during therapy assesses response and safety, with timing that depends partly on the medication. Tell the clinician if you are already using testosterone and follow the prescribed timing for follow-up tests.',
      ], sourceIds: ['endocrine'] },
      { id: 'questions', title: 'Questions to take to your clinician', paragraphs: [
        'Ask whether the result needs confirmation, whether free testosterone would add information, and what else could explain your symptoms. If treatment is discussed, ask what will be measured before and after it begins and how the clinician will judge whether it is helping.',
        'TRTrx intake is not open. Use this guide to organize records and prepare for a discussion with your own clinician. Do not buy hormones or change a medication based on a laboratory flag alone.',
      ] },
    ], citations: [S.tests, S.endocrine, S.endocrine2026, S.patient],
    relatedSlugs: ['testosterone-replacement-therapy-guide', 'signs-of-low-testosterone-35-55', 'trt-and-hematocrit'],
    relatedLinks: [{ label: 'How planned care works', href: '/how-it-works' }, { label: 'TRT questions', href: '/faq' }],
  },
  {
    slug: 'trt-side-effects-and-monitoring', category: 'side-effects',
    title: 'TRT side effects and monitoring: what ongoing care should cover',
    excerpt: 'A practical guide to discussing blood pressure, blood counts, symptoms, fertility, and follow-up before starting testosterone therapy.',
    quickAnswer: 'Testosterone therapy requires monitoring of both how you feel and relevant safety measures. Potential concerns include increased red blood cell counts, higher blood pressure, reduced sperm production, and product-specific side effects. Follow-up should be individualized and explained before treatment begins.',
    onHomePage: true,
    sections: [
      { id: 'baseline', title: 'Start with a baseline and a follow-up plan', paragraphs: [
        'Before treatment, the clinician needs to establish the diagnosis and consider factors that could affect safety. Your medical history, existing medicines, fertility goals, and relevant baseline tests inform that assessment. Ask which risks matter for your circumstances rather than assuming every person needs an identical panel.',
        'A useful plan explains when follow-up is expected, who interprets results, and how to report a problem between appointments. The purpose is to assess benefits, adverse effects, and whether continued treatment remains appropriate. Feeling better does not make laboratory or clinical follow-up unnecessary.',
      ], sourceIds: ['endocrine'] },
      { id: 'blood-counts', title: 'Red blood cell counts and hematocrit', paragraphs: [
        'Testosterone can increase red blood cell production. Hematocrit, often reported as part of a complete blood count, is one measure clinicians monitor. A rising or elevated result deserves review in the context of the full history and treatment plan.',
        'Do not use online cutoffs to change your dose, schedule blood removal, or dismiss a result. The clinician may need to assess contributing conditions and decide whether treatment changes or other investigation are appropriate. Our hematocrit guide explains the questions to ask without providing a self-management protocol.',
      ], sourceIds: ['endocrine', 'hypogonadism'] },
      { id: 'blood-pressure', title: 'Blood pressure and cardiovascular questions', paragraphs: [
        'In February 2025, FDA announced class-wide labeling changes following the TRAVERSE trial and ambulatory blood-pressure studies. The cardiovascular outcomes findings supported removing certain boxed-warning language, while the blood-pressure studies supported warnings about increased blood pressure. These are separate findings, not a declaration that testosterone is risk-free.',
        'Ask how blood pressure will be checked and discuss your cardiovascular history. Trial findings reflect the populations, products, and follow-up studied; they cannot promise an individual outcome. The Endocrine Society’s July 2026 statement also highlights remaining uncertainty about long-term safety and the need for continued monitoring.',
      ], sourceIds: ['fda-blood-pressure', 'endocrine-2026'] },
      { id: 'other-effects', title: 'Fertility and product-specific effects', paragraphs: [
        'External testosterone can suppress sperm production. Discuss present and future fertility goals before treatment and again if those plans change. A higher testosterone result does not demonstrate preserved fertility, and adding another medicine does not guarantee protection.',
        'Other effects and precautions depend on the product and the person. Acne, local skin or injection-site problems, and sleep-related concerns may be relevant. Topical testosterone requires attention to the product’s instructions for avoiding transfer to other people. Ask the pharmacist to explain the medication guide for the exact product dispensed.',
      ], sourceIds: ['aua-fertility', 'hypogonadism'] },
      { id: 'prostate-and-evidence', title: 'Prostate monitoring and evolving evidence', paragraphs: [
        'Prostate-related evaluation should be discussed in the context of age, risk factors, symptoms, and shared decision-making. Avoid both blanket reassurance and the claim that every person needs exactly the same screening schedule. Current guidelines, the product label, and individual history all matter.',
        'In June 2026, FDA requested updates to labeling concerning age-related hypogonadism, prostate cancer, and benign prostatic hyperplasia. HHS noted that important long-term uncertainties remain and described continued risk assessment and monitoring. This article does not assume that every product label has already implemented all requested revisions.',
      ], sourceIds: ['endocrine', 'hhs-labeling-2026'] },
      { id: 'follow-up-questions', title: 'Before you leave an appointment', paragraphs: [
        'Confirm the follow-up plan, which symptoms should prompt contact, and who handles questions when the usual clinician is unavailable. Keep medication details and laboratory records accessible. If a problem is urgent, use urgent or emergency care rather than waiting for a routine portal response.',
        'TRTrx is preparing to launch and is not accepting intake. These questions can be used with an available clinician now. Your own prescriber should decide the testing schedule and any medication change; this article does not provide an individual treatment plan.',
      ] },
    ], citations: [S.endocrine, S.patient, S.fda2025, S.endocrine2026, S.fertility, S.hhs2026],
    relatedSlugs: ['trt-and-hematocrit', 'trt-and-fertility', 'testosterone-replacement-therapy-guide'],
    relatedLinks: [{ label: 'TRT questions', href: '/faq' }, { label: 'How planned care works', href: '/how-it-works' }],
  },
  {
    slug: 'choosing-online-trt-provider', category: 'getting-started',
    title: 'How to choose an online TRT provider: questions before you pay',
    excerpt: 'Check licensing, diagnosis, pharmacy sourcing, monitoring, and the complete cost before choosing an online testosterone service.',
    quickAnswer: 'Compare how an online provider evaluates symptoms and tests, verifies availability where you are located, sources medication, and manages ongoing care. A legitimate clinical evaluation can result in no prescription. Clear pricing and convenient access should support those safeguards.',
    sections: [
      { id: 'availability-and-licensing', title: 'Confirm who provides care and where they can practice', paragraphs: [
        'Ask for the clinician’s name, credentials, and the relevant licensing information before an appointment. HHS explains that cross-state practice depends on state rules and that providers should verify a patient’s location. A service available to someone in another state may not be available to you.',
        'Ask what happens if you travel or move while receiving care. The answer should address where you will physically be during appointments and how follow-up is arranged. A national-looking website or a map does not by itself confirm that the provider can treat you in every state.',
      ], sourceIds: ['state-licensure'] },
      { id: 'diagnostic-process', title: 'Look for an evaluation, not a promised prescription', paragraphs: [
        'A provider should explain how symptoms, medical history, repeated testosterone measurements, and other relevant information guide a decision. The Endocrine Society emphasizes an accurate diagnosis and evaluation of possible causes. A questionnaire or one low laboratory result does not settle the clinical question.',
        'Ask whether the clinician will consider other explanations for symptoms and when they refer to in-person care or a specialist. Clarify what you pay if treatment is not appropriate. Be cautious about language implying that buying an assessment guarantees a particular drug or testosterone level.',
      ], sourceIds: ['endocrine', 'endocrine-2026'] },
      { id: 'pharmacy', title: 'Know which pharmacy supplies the medicine', paragraphs: [
        'Ask for the dispensing pharmacy’s identity and how you can verify its license. FDA’s BeSafeRx guidance describes signs of a legitimate online pharmacy, including requiring a prescription, access to a licensed pharmacist, and licensing through a state board of pharmacy. Use official licensing resources rather than relying only on a badge.',
        'Ask which exact product would be dispensed if prescribed. If a compounded medicine is proposed, ask about the clinical reason and the alternatives. Compounded drugs are not FDA-approved, and FDA does not review their safety, effectiveness, or quality before marketing. A pharmacy license does not make a compounded preparation FDA-approved.',
      ], sourceIds: ['online-pharmacy', 'compounded-drugs'] },
      { id: 'follow-up', title: 'Understand the care after the first shipment', paragraphs: [
        'Ask who reviews monitoring results, when follow-up happens, and how you can report symptoms or medication problems. Find out what a standard message response means in practice and how urgent concerns should be handled. A delivery subscription and a clinical follow-up plan are different things.',
        'Discuss fertility goals early. Ask how the service handles a change in those goals or a need for specialist care. A credible service should be able to describe the limits of its offering, including when your needs require care it cannot provide.',
      ], sourceIds: ['endocrine', 'aua-fertility'] },
      { id: 'cost-and-rules', title: 'Get the full price and current telehealth requirements', paragraphs: [
        'Compare evaluation fees, medication, supplies, testing, visits, shipping, minimum commitments, and cancellation rules. Get important terms in writing. Ask about extra testing, changes to treatment, and what happens if you stop being eligible for care. Our cost guide offers a reusable comparison checklist.',
        'Federal rules for prescribing controlled medicines through telehealth operate alongside state requirements and can change. HHS describes conditions under which authorized practitioners may prescribe through telemedicine. Do not interpret that general framework as a guarantee that every TRT service can prescribe to you without an in-person evaluation.',
      ], sourceIds: ['controlled-telehealth', 'state-licensure'] },
      { id: 'comparison-summary', title: 'Keep a simple record of the answers', paragraphs: [
        'Record the provider’s licensing information, diagnostic process, pharmacy, monitoring plan, and written estimate in one place. Unanswered questions are a reason to seek clarification before paying, not a reason to assume the missing detail is included. Choose care that can explain its process clearly.',
        'TRTrx is preparing to launch and is not accepting intake. This checklist applies to any provider and does not claim that TRTrx currently offers clinical services or has verified coverage in your state. Check the launch page for the current status.',
      ] },
    ], citations: [S.licensure, S.endocrine, S.endocrine2026, S.pharmacy, S.compounding, S.fertility, S.telehealth],
    relatedSlugs: ['how-trt-pricing-works', 'testosterone-replacement-therapy-guide', 'trt-side-effects-and-monitoring'],
    relatedLinks: [{ label: 'Planned pricing', href: '/pricing' }, { label: 'Launch status', href: '/launch' }],
  },
  {
    slug: 'signs-of-low-testosterone-35-55', category: 'getting-started',
    title: 'Signs of low testosterone in men 35–55: when to seek an evaluation',
    excerpt: 'Symptoms can overlap with sleep problems, stress, medicines, and other health conditions. Learn what a low-testosterone evaluation needs to establish.',
    quickAnswer: 'Reduced sex drive, fewer spontaneous erections, and some changes in energy, mood, or body composition can occur with low testosterone. These symptoms cannot diagnose it. Evaluation combines your history with consistently low testosterone on appropriately timed blood tests.',
    sections: [
      { id: 'possible-symptoms', title: 'Symptoms that may start the conversation', paragraphs: [
        'Low testosterone may be associated with reduced sexual interest, erectile difficulties, changes in spontaneous erections, reduced energy, or changes in muscle mass. Some men experience irritability, difficulty concentrating, or depressed mood. The pattern differs between people, and no particular symptom sequence reliably identifies a hormone deficiency.',
        'Age 35–55 is the focus of this guide because many men begin asking these questions during midlife, not because it creates a diagnostic category. A person of any adult age needs an appropriate assessment. There is no symptom checklist that determines whether you should receive testosterone.',
      ], sourceIds: ['hypogonadism', 'endocrine-2026'] },
      { id: 'other-explanations', title: 'The same symptoms can have other explanations', paragraphs: [
        'Poor sleep, stress, another medical condition, or a medicine can affect how you feel. The Endocrine Society emphasizes investigating reversible contributors and avoiding diagnosis from symptoms alone. You can have a genuine health concern without testosterone being the cause or the right treatment.',
        'Be specific about the change: when it started, whether it persists, and how it affects daily life. Mention changes in sleep, medication, alcohol use, exercise, or health. This supports a broader evaluation instead of narrowing the appointment to one laboratory number. Do not stop a prescribed medicine because you suspect it contributes.',
      ], sourceIds: ['endocrine-2026'] },
      { id: 'testing', title: 'How testing fits into the evaluation', paragraphs: [
        'A clinician may order total testosterone testing when symptoms and history support it. A low result generally needs confirmation with another early-morning sample. Diagnosis depends on compatible symptoms and consistently low levels, interpreted with the method and reference range used by the laboratory.',
        'Testing is not a guarantee of a prescription. More investigation may be needed to identify the cause of a deficiency or evaluate another condition. Routine testing of every asymptomatic man is different from evaluating a specific concern; the Endocrine Society does not recommend general population screening.',
      ], sourceIds: ['endocrine', 'endocrine-2026'] },
      { id: 'sexual-symptoms', title: 'Do not assume a sexual symptom has one cause', paragraphs: [
        'Low libido and erectile difficulties are related but different concerns. Desire, erections, relationships, medicines, and overall health can interact. Tell the clinician what has changed rather than simply reporting “low T.” Testosterone treatment is not a universal answer to sexual difficulties.',
        'Family-building plans are relevant even when your main concern is energy or sexual function. External testosterone can reduce sperm production. Mention present and future fertility goals before treatment is selected so the evaluation and any referrals take those priorities into account.',
      ], sourceIds: ['hypogonadism', 'aua-fertility'] },
      { id: 'appointment', title: 'What to bring to an appointment', paragraphs: [
        'Prepare a brief symptom timeline, a medication and supplement list, and previous blood test reports. Note collection times where available. Include other diagnoses and whether sleep, work, relationships, or exercise have changed. You do not need to choose a medication before this conversation.',
        'Useful questions include: What else could explain these symptoms? Do I need repeat testing? What would make treatment appropriate? How would we know it is helping? If a hormone result is normal, ask what the next step in investigating symptoms should be.',
      ] },
      { id: 'next-step', title: 'Persistent symptoms deserve attention', paragraphs: [
        'Seek an evaluation when symptoms persist, trouble you, or affect your life. You do not have to establish that testosterone is responsible before asking for help. The aim is an explanation and a reasonable care plan, which may or may not include a hormone prescription.',
        'TRTrx is preparing to launch and is not accepting intake. This article can help you prepare for a clinical conversation, but it cannot diagnose a deficiency or determine which treatment is suitable for you.',
      ] },
    ], citations: [S.patient, S.endocrine2026, S.endocrine, S.fertility],
    relatedSlugs: ['testosterone-blood-tests', 'testosterone-replacement-therapy-guide', 'trt-and-fertility'],
    relatedLinks: [{ label: 'How planned care works', href: '/how-it-works' }],
  },
  {
    slug: 'how-trt-pricing-works', category: 'pricing',
    title: 'How much does TRT cost? Compare the complete care bill',
    excerpt: 'Compare medication, testing, appointments, supplies, and cancellation terms without relying on headline prices.',
    quickAnswer: 'TRT costs depend on medication, clinical care, testing, supplies, and the payment arrangement. Compare the expected first-year total and what happens if additional care is needed. Monthly prices are comparable only when included services and billing periods are clear.',
    featured: true,
    sections: [
      { id: 'cost-components', title: 'Start with the services you would receive', paragraphs: [
        'TRT is medical care, not just a vial or a subscription. A useful estimate distinguishes the evaluation, any prescribed medication, follow-up appointments, laboratory work, and supplies. Shipping, dispensing, or administrative charges may be separate. Ask the provider to identify every party that can send a bill.',
        'Different arrangements can be transparent. Some clinics bundle services; others bill separately. Neither structure tells you the total on its own. An itemized model may suit one person, while a bundle may be easier for another to budget. What matters is a written explanation of what your payment covers.',
      ] },
      { id: 'checklist', title: 'Use the same questions for every provider', paragraphs: [
        'Request a first-year estimate for the proposed care plan, not the lowest advertised price. Before the clinical evaluation, ask which costs are known and which remain conditional. Separate one-time evaluation charges from recurring charges so the first month does not distort the comparison.',
      ], table: { columns: ['Cost area', 'Question to ask'], rows: [
        ['Evaluation', 'Are the first consultation and diagnostic tests included?'],
        ['Medication', 'Which product and dispensing quantity does the price cover?'],
        ['Monitoring', 'Which visits and tests are included, and what costs extra?'],
        ['Supplies and delivery', 'Are supplies, shipping, and replacements included?'],
        ['Billing', 'Is payment monthly, prepaid, or subject to a minimum commitment?'],
        ['Cancellation', 'When does billing stop, and what is refundable?'],
      ] } },
      { id: 'first-year-total', title: 'Compare a first-year total, then check exceptions', paragraphs: [
        'A worksheet can add initial charges, ongoing care, medication, testing, and supplies over twelve months. Do not multiply a quoted “monthly equivalent” by twelve until you know whether the provider bills in calendar months, treatment cycles, or prepaid packages.',
        'Ask what happens if the clinician recommends further testing, another formulation, or stopping treatment. An estimate cannot promise that no additional care will be needed. It should make anticipated costs and exclusions understandable before you commit. Ask for details when a line says only “labs included” without describing the scope.',
      ] },
      { id: 'insurance-and-self-pay', title: 'Check insurance and self-pay terms separately', paragraphs: [
        'Ask the provider and insurer which services, if any, would be billed to insurance and what network or authorization requirements apply. A medication discount, a receipt for reimbursement, and insurance coverage are different arrangements. An advertised price does not settle your final out-of-pocket cost.',
        'CMS explains that people not using insurance usually qualify for a good faith estimate when requested or when care is scheduled sufficiently in advance. Rules and exceptions apply, and an estimate may cover only one provider or facility. The linked CMS guide explains when an estimate applies; ask other billing parties for their own details.',
      ], sourceIds: ['good-faith-estimate'] },
      { id: 'care-quality', title: 'Price does not answer the clinical questions', paragraphs: [
        'Compare access to follow-up, how results are reviewed, and how medication questions are handled alongside the bill. Ask who makes treatment decisions and what prompts reassessment. No price should come with a promise that an evaluation will lead to a prescription.',
        'If a compounded product is proposed, ask why and which pharmacy supplies it. Compounded drugs are not FDA-approved; FDA does not review their safety, effectiveness, or quality before marketing. Identify the actual product in a comparison instead of treating all preparations as interchangeable.',
      ], sourceIds: ['compounded-drugs'] },
      { id: 'trtrx-pricing', title: 'How to use TRTrx pricing before launch', paragraphs: [
        'TRTrx is preparing to launch. Prices and inclusions on this site describe plans being finalized, not an active offer of clinical care. Intake is closed. Final terms, availability, and any treatment decision need confirmation when services become available.',
        'Keep copies of written estimates and terms. Comparing the same care components is more useful than choosing solely because one headline number is smaller. You can use this checklist with any provider, including your existing clinician.',
      ] },
    ], citations: [S.estimate, S.compounding],
    relatedSlugs: ['choosing-online-trt-provider', 'testosterone-replacement-therapy-guide', 'trt-side-effects-and-monitoring'],
    relatedLinks: [{ label: 'Planned TRTrx pricing', href: '/pricing' }, { label: 'Launch status', href: '/launch' }],
  },
  {
    slug: 'trt-and-fertility', category: 'fertility',
    title: 'TRT and fertility: what to discuss before treatment',
    excerpt: 'External testosterone can suppress sperm production. Learn why family-building plans change the conversation and why recovery cannot be promised.',
    quickAnswer: 'External testosterone can reduce or stop sperm production. Discuss plans for children before starting treatment. Fertility care needs an individualized evaluation, and adding another medicine does not guarantee that fertility will be maintained.',
    sections: [
      { id: 'sperm-production', title: 'Blood testosterone and sperm production are different measures', paragraphs: [
        'Testosterone treatment can raise blood levels while reducing the signals that support the testes. Suppression of pituitary hormones LH and FSH can reduce sperm production. A satisfactory testosterone blood result therefore does not show that sperm production is normal.',
        'The degree of suppression varies. Some men develop a low sperm count; some have no sperm seen in the ejaculate. Do not assume that taking testosterone makes pregnancy impossible. Discuss contraception separately if pregnancy prevention matters.',
      ], sourceIds: ['aua-fertility'] },
      { id: 'plans', title: 'Raise family-building plans before the first prescription', paragraphs: [
        'Tell the clinician whether you are trying to conceive, considering children later, or unsure. The Endocrine Society advises against starting testosterone in men planning fertility in the near term. The AUA/ASRM guideline also emphasizes effects on present and future fertility.',
        'Have this conversation even if the appointment is mainly about energy, libido, or a laboratory result. Reproductive priorities may change the evaluation and whether a specialist should be involved. You do not need a final family plan before asking how a proposed treatment could affect your options.',
      ], sourceIds: ['endocrine', 'aua-fertility'] },
      { id: 'evaluation', title: 'What a fertility evaluation may involve', paragraphs: [
        'A reproductive history and, when indicated, semen testing provide information that testosterone testing alone cannot. A clinician may ask about previous pregnancies, prior testosterone or anabolic steroid exposure, surgeries, illnesses, and other medicines. Fertility concerns can require evaluation of both partners.',
        'Ask whether you should see a reproductive urologist or another appropriate specialist before treatment. The relevant questions concern the cause of the hormone problem, your reproductive goals, and investigations that would inform the decision. A medication comparison cannot answer those questions for an individual.',
      ], sourceIds: ['aua-fertility'] },
      { id: 'alternatives', title: 'Why hCG is not a fertility guarantee', paragraphs: [
        'Specialists sometimes consider medicines that stimulate the body’s own hormone production for selected patients. These choices depend on the cause of low testosterone and the fertility evaluation. A medicine discussed online as an alternative is not necessarily appropriate or effective for a particular person.',
        'The AUA/ASRM guideline describes limited evidence for adding hCG or other medicines to external testosterone to preserve sperm production. It does not support presenting this as a dependable safeguard. Avoid claims that an add-on protects everyone’s fertility or makes testosterone risk-free for someone who wants children.',
      ], sourceIds: ['aua-fertility'] },
      { id: 'recovery', title: 'Recovery after testosterone can take time', paragraphs: [
        'Sperm production may recover after testosterone is stopped, but timing varies and full recovery is not assured. The AUA/ASRM discussion describes recovery taking months and, in some cases, years. A fixed promise such as “normal in six months” cannot account for individual circumstances.',
        'If you already use testosterone and want to conceive, contact the prescriber and a fertility specialist. Do not start a self-directed recovery protocol or buy additional hormones online. A clinician needs to review prior exposure, current results, time available for family building, and other possible fertility factors.',
      ], sourceIds: ['aua-fertility'] },
      { id: 'questions', title: 'Questions worth writing down', paragraphs: [
        'Ask how treatment could affect sperm production, whether baseline semen testing or fertility preservation should be discussed, and when specialist referral makes sense. Ask about the evidence for any proposed alternative, including its limitations and regulatory status. Make sure the plan reflects the time frame that matters to you and your partner.',
        'TRTrx intake is not open. This article helps prepare an informed discussion, not select a fertility treatment. If timing is important, seek advice through an available clinician rather than waiting for a new service to launch.',
      ] },
    ], citations: [S.fertility, S.endocrine],
    relatedSlugs: ['testosterone-replacement-therapy-guide', 'testosterone-blood-tests', 'choosing-online-trt-provider'],
    relatedLinks: [{ label: 'Explore planned treatment information', href: '/treatments' }],
  },
  {
    slug: 'trt-and-hematocrit', category: 'side-effects',
    title: 'TRT and hematocrit: understanding blood-count monitoring',
    excerpt: 'What hematocrit measures, why testosterone can affect it, and how to prepare for a conversation about an elevated result.',
    quickAnswer: 'Hematocrit is the proportion of blood volume made up of red blood cells. Testosterone can increase red blood cell production, so clinicians monitor blood counts during therapy. An elevated result calls for clinical interpretation, not a self-directed dose change or blood-donation plan.',
    sections: [
      { id: 'the-measurement', title: 'What hematocrit tells a clinician', paragraphs: [
        'Hematocrit is commonly reported on a complete blood count, or CBC. It describes the fraction of blood occupied by red blood cells. Hemoglobin, another CBC measurement, concerns the protein that carries oxygen. They are related measurements, but they are not the same number or unit.',
        'Read the laboratory’s reference interval alongside the result. A flagged number should be interpreted with previous measurements, symptoms, and the medical history. A screenshot without the date, units, reference range, and other results may leave out information the clinician needs.',
      ], sourceIds: ['hematocrit-test'] },
      { id: 'testosterone', title: 'Why testosterone treatment matters', paragraphs: [
        'Testosterone can stimulate red blood cell production. An increase can become a safety concern, which is why blood-count monitoring belongs in ongoing care. The Endocrine Society includes elevated hematocrit among the factors clinicians should consider before starting testosterone.',
        'This does not mean every person will have the same response, or that a high number proves a prescription is the only cause. A clinician needs to consider the complete picture. A good monitoring plan compares current results with baseline and explains who is responsible for reviewing changes.',
      ], sourceIds: ['endocrine', 'hypogonadism'] },
      { id: 'an-elevated-result', title: 'What to do with an elevated result', paragraphs: [
        'Contact the clinician who ordered the test or manages the prescription. Share the full laboratory report and tell them about symptoms, recent changes, and any testosterone or other hormone products you are using. Ask whether the result needs confirmation or additional assessment.',
        'A general article cannot tell you whether a particular reading requires a medication change, a repeat test, or investigation for another cause. Do not use advice from a forum to change frequency, skip treatment, or start another drug. Get individualized instructions, including when follow-up should happen.',
      ], sourceIds: ['endocrine'] },
      { id: 'donation', title: 'Blood donation is not a do-it-yourself monitoring strategy', paragraphs: [
        'An abnormal result needs a clinical plan. Regularly donating blood to keep a number below a self-selected threshold can obscure whether the underlying treatment plan remains appropriate. Do not treat eligibility to donate as medical clearance to continue an unchanged prescription.',
        'If a clinician recommends blood removal or another intervention, ask about its purpose, monitoring, and the follow-up plan. The key question is how the clinician intends to address the finding, not simply how to obtain a lower laboratory value before the next appointment.',
      ] },
      { id: 'follow-up', title: 'Questions that make follow-up more useful', paragraphs: [
        'Ask what has changed from your baseline, which factors could contribute, and whether any other evaluation is needed. If the plan changes, request clear written instructions and the timing of the next assessment. Keep the new instructions with the medication information so an older plan does not create confusion.',
        'Also ask how hematocrit monitoring fits with the rest of care. Blood pressure, treatment response, fertility goals, and product-specific side effects remain separate considerations. One reassuring result does not replace a full review of whether treatment is safe and useful for you.',
      ], sourceIds: ['endocrine', 'fda-blood-pressure'] },
      { id: 'records', title: 'Keep a record, not a self-treatment protocol', paragraphs: [
        'Bring reports from previous laboratories and a list of prescribed and nonprescribed products to the appointment. Record questions about anything you do not understand. If you develop urgent or severe symptoms, seek urgent medical care rather than waiting for a routine response or a repeat laboratory test.',
        'TRTrx is preparing to launch and does not currently accept intake. This guide explains monitoring concepts for discussion with a clinician. It does not establish a personal hematocrit target, a donation schedule, or a medication adjustment.',
      ] },
    ], citations: [S.hematocrit, S.patient, S.endocrine, S.fda2025],
    relatedSlugs: ['trt-side-effects-and-monitoring', 'testosterone-blood-tests', 'weekly-vs-twice-weekly-cypionate'],
    relatedLinks: [{ label: 'TRT questions', href: '/faq' }, { label: 'How planned care works', href: '/how-it-works' }],
  },
  {
    slug: 'cypionate-vs-enanthate', category: 'comparisons',
    title: 'Testosterone cypionate vs enanthate: practical differences',
    excerpt: 'Understand what the ester name tells you, what depends on the exact product, and which questions matter more than a universal winner.',
    quickAnswer: 'Cypionate and enanthate are testosterone esters used in prescription products. Choosing between them depends on the specific formulation, administration route, tolerability, availability, and clinical plan. There is no single best choice for every patient, and products should not be switched without prescribing instructions.',
    sections: [
      { id: 'what-the-names-mean', title: 'What the names do and do not tell you', paragraphs: [
        'Both names describe ester forms of testosterone used in injectable medicines. The ester is one part of a product’s formulation. The finished medicine also has a concentration, inactive ingredients, packaging, approved route, and specific prescribing information. Knowing only the ester does not tell you all of these details.',
        'A clinician’s choice should start with the diagnosis and treatment goals. Discussions about a small difference in drug release should not replace evaluation of symptoms, repeat diagnostic testing, fertility goals, and a monitoring plan. Neither ester avoids the need for ongoing care.',
      ], sourceIds: ['cypionate-label', 'xyosted-label', 'endocrine'] },
      { id: 'compare-products', title: 'Compare the exact products, not just the names', paragraphs: [
        'The testosterone cypionate label linked below describes an intramuscular product. The linked XYOSTED label describes a testosterone enanthate autoinjector for subcutaneous use. XYOSTED is one specific enanthate product; its instructions do not apply to every enanthate preparation. These examples show why route and instructions must be checked for the actual medicine.',
      ], table: { columns: ['Decision', 'What to confirm'], rows: [
        ['Formulation', 'Exact product name, concentration, and ingredients'],
        ['Administration', 'Route and instructions for the dispensed product'],
        ['Packaging', 'Vial or device, storage, and handling instructions'],
        ['Tolerability', 'Previous reactions and relevant ingredient allergies'],
        ['Cost', 'Prescription, supplies, monitoring, and other care charges'],
      ] }, sourceIds: ['cypionate-label', 'xyosted-label'] },
      { id: 'claims-about-results', title: 'Be careful with promises about how you will feel', paragraphs: [
        'A product label explains approved use and known risks; it does not predict that one person will feel better on one ester. Avoid categorical claims that the products feel identical for everyone, that one always has fewer side effects, or that a particular formulation guarantees smoother energy.',
        'Tell your clinician about prior treatment and problems you experienced, including reactions, difficulty following instructions, or symptoms between appointments. Those details can inform selection. Your preference matters, but a general comparison cannot determine whether a particular prescription is appropriate.',
      ], sourceIds: ['endocrine'] },
      { id: 'shared-monitoring', title: 'Both require attention to safety and fertility', paragraphs: [
        'Both are forms of external testosterone. Fertility concerns, blood-count changes, blood pressure, and ongoing assessment remain relevant. Choosing an ester is not a way to avoid testosterone’s potential to reduce sperm production. Bring family-building plans into the discussion before treatment is selected.',
        'Ask which effects the clinician will monitor, when blood tests should be collected relative to your prescription, and how symptoms will be reviewed. The timing of a result matters when interpreting treatment. Follow the instructions for your own plan rather than copying someone else’s testing schedule.',
      ], sourceIds: ['endocrine', 'aua-fertility', 'fda-blood-pressure'] },
      { id: 'compounded-products', title: 'FDA-approved and compounded products are different categories', paragraphs: [
        'An ingredient appearing in an FDA-approved medicine does not mean every preparation containing it is approved. Compounded drugs are not FDA-approved, and FDA does not review their safety, effectiveness, or quality before marketing. Ask whether the proposed product is approved or compounded and why it is being considered.',
        'Do not assume that brand, generic, and compounded labels are interchangeable descriptions. Ask the prescriber or pharmacist to identify the exact product and answer questions about ingredients, concentration, storage, and handling. This distinction belongs in a fair cost comparison too.',
      ], sourceIds: ['compounded-drugs'] },
      { id: 'switching', title: 'If a switch is discussed', paragraphs: [
        'A switch requires clear prescribing instructions. Do not reuse an old volume, schedule, or route on the assumption that the new preparation is equivalent. Confirm what to do with the previous prescription, which supplies are needed, and when follow-up will occur.',
        'TRTrx intake is not open. The planned treatment pages describe proposed options, not a current prescription offer. Use this comparison to prepare product-specific questions for an available clinician and pharmacist.',
      ] },
    ], citations: [S.cypionate, S.xyosted, S.endocrine, S.fertility, S.fda2025, S.compounding],
    relatedSlugs: ['weekly-vs-twice-weekly-cypionate', 'trt-side-effects-and-monitoring', 'how-trt-pricing-works'],
    relatedLinks: [{ label: 'Planned cypionate information', href: '/treatments/cypionate' }, { label: 'Planned enanthate information', href: '/treatments/enanthate' }],
  },
  {
    slug: 'weekly-vs-twice-weekly-cypionate', category: 'protocols',
    title: 'Weekly vs twice-weekly testosterone: questions for your prescriber',
    excerpt: 'Why injection frequency is an individualized prescribing decision, how testing timing matters, and what to discuss if symptoms vary.',
    quickAnswer: 'There is no universal injection schedule that is right for every patient. Frequency depends on the exact product and the clinician’s assessment of response, results, tolerability, and practical use. Changing a schedule without instructions can create dosing errors and make follow-up results harder to interpret.',
    sections: [
      { id: 'individual-plan', title: 'The schedule is part of a prescription', paragraphs: [
        'Discussions of weekly versus twice-weekly testosterone often leave out the product, route, concentration, and reason for treatment. Those details matter. Your prescription should state how the medicine is used, and the pharmacist or prescriber should resolve anything unclear before you administer it.',
        'This guide does not provide a dosing or injection protocol. It explains what to discuss if you have questions about frequency. Do not divide a dose, change injection days, or copy a schedule from another patient based on an online comparison.',
      ], sourceIds: ['cypionate-label', 'endocrine'] },
      { id: 'product-differences', title: 'Instructions depend on the actual product', paragraphs: [
        'Different testosterone products have different prescribing information. The cypionate label linked below is for an intramuscular product. XYOSTED is a particular testosterone enanthate autoinjector labeled for subcutaneous use. A familiar hormone or ester name does not make these instructions interchangeable.',
        'If your clinician recommends use that differs from a product’s labeling, ask them to explain the rationale and the monitoring plan. Do not infer that a route or schedule described for one preparation is appropriate for a different vial or device. Check the current prescription and dispensed label together.',
      ], sourceIds: ['cypionate-label', 'xyosted-label'] },
      { id: 'symptom-patterns', title: 'Describe what is happening before changing anything', paragraphs: [
        'If you notice changes in energy, mood, or other symptoms between administrations, keep a brief record of when they occur. Include the medicine used, prescribed schedule, missed administrations, relevant laboratory dates, and other changes in health or routine. A clear pattern is more useful than a conclusion that frequency must be the cause.',
        'Symptoms can have more than one explanation. Ask the clinician what would help distinguish a treatment-related issue from another condition. The answer may involve reviewing the prescription, checking timing of tests, investigating other causes, or reassessing whether treatment is achieving its intended goal.',
      ], sourceIds: ['endocrine', 'endocrine-2026'] },
      { id: 'lab-timing', title: 'Laboratory timing is part of interpretation', paragraphs: [
        'During treatment, the timing of a blood sample relative to the medicine can affect how a testosterone result is interpreted. Follow the ordering clinician’s timing instructions and tell them if the sample was collected differently. A number without this context may not answer the intended question.',
        'Bring the full report and the date of the relevant administration to follow-up. Do not compare your result with another person’s result without knowing their preparation, schedule, test, and timing. The clinical aim is an appropriate response and safe use, not winning a comparison of laboratory numbers.',
      ], sourceIds: ['endocrine', 'xyosted-label'] },
      { id: 'practical-considerations', title: 'Discuss practical use and the full monitoring plan', paragraphs: [
        'A workable treatment plan accounts for your ability to follow instructions consistently. Tell the prescriber about travel, difficulty handling the product, injection concerns, or confusion about supplies. Ask for clear written instructions when anything changes, including what to do if an administration is missed.',
        'Changing frequency is not a guaranteed fix for high hematocrit, blood pressure, fertility concerns, or other adverse effects. Those issues need clinical assessment in their own right. Ask how a proposed change will be evaluated and when results or symptoms should be reviewed again.',
      ], sourceIds: ['endocrine', 'fda-blood-pressure'] },
      { id: 'decision', title: 'What to clarify before leaving the appointment', paragraphs: [
        'Confirm the exact product, route, written schedule, supplies, follow-up testing, and contact for questions. If instructions conflict with an older prescription or label, ask the prescriber and pharmacist to reconcile them. Keep the current plan somewhere you can refer to it.',
        'TRTrx is preparing to launch and is not accepting intake. This resource supports a conversation with your existing clinician. It does not recommend starting weekly treatment, switching to twice-weekly treatment, or changing a prescribed amount.',
      ] },
    ], citations: [S.cypionate, S.xyosted, S.endocrine, S.endocrine2026, S.fda2025],
    relatedSlugs: ['cypionate-vs-enanthate', 'trt-and-hematocrit', 'trt-side-effects-and-monitoring'],
    relatedLinks: [{ label: 'Planned cypionate information', href: '/treatments/cypionate' }, { label: 'How planned care works', href: '/how-it-works' }],
  },
];
