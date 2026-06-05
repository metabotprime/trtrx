// PRELAUNCH: All content below is placeholder — real posts replace these
// pre-launch. Authors and reviewers are illustrative until real bios land.

export type BlogCategory =
  | 'getting-started'
  | 'protocols'
  | 'comparisons'
  | 'side-effects'
  | 'fertility'
  | 'pricing'
  | 'science'
  | 'lifestyle'
  | 'state-guides';

export type BlogAuthor = {
  id: string;
  name: string;
  title: string;
  credentials: string; // e.g., "MD, FACP"
  bio: string; // 1-2 sentences
  photo: string; // path placeholder under /images/authors/
  sameAs?: string[]; // LinkedIn, ORCID, PubMed
};

export type BlogReviewer = {
  id: string;
  name: string;
  title: string;
  credentials: string;
  photo: string;
};

export type BlogPostCitation = {
  type: 'ScholarlyArticle' | 'MedicalScholarlyArticle';
  headline: string;
  author?: string[];
  datePublished?: string; // ISO date (year-only OK: '2023')
  url?: string;
  publisher?: string;
  publicationType?: string; // 'JournalArticle', 'SystematicReview', 'Guideline', etc.
};

export type BlogPost = {
  slug: string;
  category: BlogCategory;
  title: string;
  excerpt: string; // 1-2 sentences for cards
  quickAnswer: string; // 2-3 sentences "Quick Answer" callout below H1
  body: string; // Long-form content (markdown-ready string for now)
  authorId: string;
  reviewerId: string;
  publishedAt: string; // ISO date
  lastReviewedAt: string; // ISO date
  readMinutes: number;
  ogImage?: string; // optional per-post OG override; defaults to /og/blog-default.png
  featured?: boolean; // surfaced in /blog featured strip
  onHomePage?: boolean; // surfaced on homepage 3-card section
  citations?: BlogPostCitation[]; // clinical trials / guidelines / peer-reviewed refs for E-E-A-T
};

export const CATEGORY_LABELS: Record<BlogCategory, string> = {
  'getting-started': 'Getting Started',
  protocols: 'Protocols',
  comparisons: 'Comparisons',
  'side-effects': 'Side Effects',
  fertility: 'Fertility',
  pricing: 'Pricing',
  science: 'Science',
  lifestyle: 'Lifestyle',
  'state-guides': 'State Guides',
};

// Person-agnostic by design pre-launch. We do not publish a named author or
// reviewer (or emit Person JSON-LD for one) until a real, vetted identity is
// locked — a fabricated byline is an E-E-A-T and compliance liability. The
// editorial team and the board-certified medical review are both real, true
// credits today; they're typed as Organization in schema, never Person.
export const AUTHORS: BlogAuthor[] = [
  {
    id: 'editorial-team',
    name: 'trtrx Editorial Team',
    title: 'Clinical Content',
    credentials: '',
    bio: 'The trtrx editorial team writes plain-English explainers on testosterone therapy — every one reviewed by a board-certified physician before it publishes.',
    photo: '',
  },
];

export const REVIEWERS: BlogReviewer[] = [
  {
    id: 'medical-director',
    name: 'trtrx Medical Team',
    title: 'Medical Review',
    credentials: 'Board-certified physicians',
    photo: '',
  },
];

// PRELAUNCH: 6 illustrative posts so the blog feels populated. Real long-form replaces these.
export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'cypionate-vs-enanthate',
    category: 'comparisons',
    title: 'Cypionate vs Enanthate: which TRT injection is right for you?',
    excerpt:
      'Two esters, near-identical results, and a handful of small tradeoffs that matter more than the internet thinks. Here is the honest comparison.',
    quickAnswer:
      'Cypionate has an eight-day half-life; enanthate is closer to seven. Most men feel no clinical difference, and your physician can switch you between them at any time without a washout period.',
    body:
      'Testosterone cypionate and testosterone enanthate are the two most-prescribed injectable TRT forms in the United States. Both are long-acting esters bound to a testosterone molecule, both are FDA-approved, and both are dosed once weekly for nearly all patients.\n\nThe most-cited difference is half-life. Cypionate sits around eight days; enanthate is closer to seven. In real-world dosing, this difference is too small to feel for the vast majority of men. Both produce a similar total weekly exposure, and both are well-tolerated when injected subcutaneously with a small needle.\n\nWhere they actually differ is supply. Cypionate is more commonly stocked at US pharmacies and is often the cheaper of the two when sourced as an FDA-approved generic. Enanthate is more common globally and sometimes preferred by men who tolerated it well historically. Compounded versions of either are available when a specific dose or carrier oil matters.\n\nSwitching between them is straightforward. There is no taper, no clearance period, and no dose conversion math — your physician swaps one for the other if your first pick is not the right fit. The decision is rarely a permanent one, which is good news for anyone overthinking the first script.\n\nFor most men starting TRT, cypionate is the default. If you have used enanthate before and felt great, stay with what works. Either way, the ester is the smallest decision you will make about your protocol.',
    authorId: 'editorial-team',
    reviewerId: 'medical-director',
    publishedAt: '2026-04-22',
    lastReviewedAt: '2026-04-22',
    readMinutes: 9,
    featured: true,
    onHomePage: true,
    citations: [
      {
        type: 'MedicalScholarlyArticle',
        headline:
          'Testosterone Therapy in Men With Hypogonadism: An Endocrine Society Clinical Practice Guideline',
        author: [
          'Bhasin S',
          'Brito JP',
          'Cunningham GR',
          'Hayes FJ',
          'Hodis HN',
          'Matsumoto AM',
          'Snyder PJ',
          'Swerdloff RS',
          'Wu FC',
          'Yialamas MA',
        ],
        datePublished: '2018-05-01',
        url: 'https://academic.oup.com/jcem/article/103/5/1715/4939465',
        publisher: 'Journal of Clinical Endocrinology & Metabolism',
        publicationType: 'Guideline',
      },
    ],
  },
  {
    slug: 'trt-and-fertility',
    category: 'fertility',
    title: 'TRT and fertility: what every man considering treatment should know',
    excerpt:
      'Standard injectable testosterone shuts down sperm production for most men. There are options that preserve fertility — here is how to think about them.',
    quickAnswer:
      'Exogenous testosterone suppresses LH and FSH, which stops sperm production in most men within months. Enclomiphene and HCG are the two main fertility-preserving options, and they work through very different mechanisms.',
    body:
      'The single biggest misunderstanding about TRT is the fertility piece. Most men assume testosterone replacement boosts every aspect of male physiology, including reproductive function. The opposite is true for the standard protocols.\n\nWhen you inject testosterone, the brain registers the high serum level and dials down its own signaling. Luteinizing hormone (LH) and follicle-stimulating hormone (FSH) drop sharply, and the testes — which depend on those signals to produce sperm — shut down spermatogenesis. For many men this happens within a few months of starting injectable TRT.\n\nThe good news is that this is usually reversible. Stopping TRT typically restores fertility within six to twelve months for younger men. The better news is that you do not have to choose between symptom relief and fertility. Two protocols preserve it.\n\nEnclomiphene is a daily oral tablet that signals the pituitary to make more LH and FSH. Your testes keep working, your testosterone goes up, and sperm production stays intact. It is the cleanest option for men with secondary hypogonadism who want to start a family in the next year or two.\n\nHCG is the second option, taken alongside injectable testosterone. It mimics LH, keeping the testes active even while the pituitary signal is suppressed. Men on cypionate who add HCG keep most of their fertility, prevent testicular atrophy, and have an easier time stopping TRT later.\n\nIf fertility is on your mind, raise it on your first call. The protocol decision is downstream of that single answer.',
    authorId: 'editorial-team',
    reviewerId: 'medical-director',
    publishedAt: '2026-04-08',
    lastReviewedAt: '2026-04-15',
    readMinutes: 11,
    featured: true,
    onHomePage: true,
    citations: [
      {
        type: 'MedicalScholarlyArticle',
        headline:
          'The use of HCG-based combination therapy for recovery of spermatogenesis after testosterone use',
        author: ['Wenker EP', 'Dupree JM', 'Langille GM', 'Kovac J', 'Ramasamy R', 'Lamb D', 'Mills JN', 'Lipshultz LI'],
        datePublished: '2015-06-01',
        url: 'https://www.jsm.jsexmed.org/article/S1743-6095(15)33567-3/fulltext',
        publisher: 'The Journal of Sexual Medicine',
        publicationType: 'JournalArticle',
      },
      {
        type: 'MedicalScholarlyArticle',
        headline:
          'Enclomiphene citrate stimulates testosterone production while preventing oligospermia: a randomized phase II clinical trial comparing topical testosterone',
        author: ['Wiehle RD', 'Fontenot GK', 'Wike J', 'Hsu K', 'Nydell J', 'Lipshultz L'],
        datePublished: '2014-08-01',
        url: 'https://www.fertstert.org/article/S0015-0282(14)00427-7/fulltext',
        publisher: 'Fertility and Sterility',
        publicationType: 'ClinicalTrial',
      },
    ],
  },
  {
    slug: 'trt-and-hematocrit',
    category: 'side-effects',
    title: 'TRT and hematocrit: the only honest explainer you need',
    excerpt:
      'Erythrocytosis is the most-monitored side effect of TRT, and the dose-response data is clearer than the forum noise suggests. Here is what actually matters.',
    quickAnswer:
      'TRT raises red blood cell count in most men. The level that matters clinically is hematocrit; flagging numbers usually start at 52 to 54 percent. The dose, ester, and injection cadence all influence how high your hematocrit climbs.',
    body:
      'Testosterone has a direct effect on erythropoiesis — the production of red blood cells. Almost every man on injectable TRT will see his hematocrit rise from baseline, and most settle into a new range that is higher than where they started. This is biology working as expected, not a sign something is broken.\n\nThe number to watch is hematocrit, which is the percentage of your blood made up of red cells. Reference ranges put the normal upper limit around 50 to 52 percent for adult men. On TRT, many men sit one to three points above their pre-treatment number. Levels above 54 percent are where most clinicians start to act, either by lowering the dose, splitting the weekly injection, or recommending a therapeutic phlebotomy.\n\nDose drives hematocrit more than ester choice does. A 200 mg weekly dose of cypionate will push the number higher than a 100 mg weekly dose, regardless of which ester you pick. Splitting the same total dose across two injections per week tends to soften the peak and the resulting red cell production for some men.\n\nHydration matters too. Chronic underhydration concentrates the blood and inflates the hematocrit reading. Plenty of men with a borderline lab end up with a normal one after a week of intentional water intake.\n\nThe action you should not take is donating blood without telling your physician. Therapeutic phlebotomy at a clinic is monitored, and it does not interfere with your protocol the way unmanaged donation cycles can. The right answer is almost always: lab in, conversation, adjustment, lab out three months later.',
    authorId: 'editorial-team',
    reviewerId: 'medical-director',
    publishedAt: '2026-03-18',
    lastReviewedAt: '2026-03-18',
    readMinutes: 12,
    featured: false,
    onHomePage: false,
    citations: [
      {
        type: 'MedicalScholarlyArticle',
        headline:
          'Cardiovascular Safety of Testosterone-Replacement Therapy (TRAVERSE)',
        author: [
          'Lincoff AM',
          'Bhasin S',
          'Flevaris P',
          'Mitchell LM',
          'Basaria S',
          'Boden WE',
          'Cunningham GR',
          'Granger CB',
          'Khera M',
          'Thompson IM Jr',
          'Wang Q',
          'Wolski K',
          'Davey D',
          'Kalahasti V',
          'Khan N',
          'Miller MG',
          'Snabes MC',
          'Chan A',
          'Dubcenco E',
          'Li X',
          'Yi T',
          'Huang B',
          'Pencina KM',
          'Travison TG',
          'Nissen SE',
        ],
        datePublished: '2023-07-13',
        url: 'https://www.nejm.org/doi/full/10.1056/NEJMoa2215025',
        publisher: 'New England Journal of Medicine',
        publicationType: 'JournalArticle',
      },
      {
        type: 'MedicalScholarlyArticle',
        headline:
          'Testosterone Therapy in Men With Hypogonadism: An Endocrine Society Clinical Practice Guideline',
        author: [
          'Bhasin S',
          'Brito JP',
          'Cunningham GR',
          'Hayes FJ',
          'Hodis HN',
          'Matsumoto AM',
          'Snyder PJ',
          'Swerdloff RS',
          'Wu FC',
          'Yialamas MA',
        ],
        datePublished: '2018-05-01',
        url: 'https://academic.oup.com/jcem/article/103/5/1715/4939465',
        publisher: 'Journal of Clinical Endocrinology & Metabolism',
        publicationType: 'Guideline',
      },
    ],
  },
  {
    slug: 'signs-of-low-testosterone-35-55',
    category: 'getting-started',
    title: 'Signs of low testosterone in men 35–55',
    excerpt:
      'The classic symptom list misses what most men actually notice first. Here is what tends to show up between 35 and 55 — and what those signs do not always mean.',
    quickAnswer:
      'Low motivation, slow recovery, and a flatter mood are the most-reported early signs in men 35 to 55. These also overlap heavily with sleep debt and overtraining, so a single lab is the only way to confirm anything.',
    body:
      'The textbook symptoms of low testosterone — low libido, erectile dysfunction, loss of muscle mass — show up eventually, but they are usually not the first signal. Most men notice something more diffuse: drive feels duller, recovery from a normal workout takes longer, and the mood baseline that used to feel sharp now feels muted.\n\nThis matters because the early signs are easy to chalk up to stress, kids, or a busy quarter at work. They often are exactly that. But after a few months of feeling like the floor has dropped a few inches, getting a single morning lab is a five-minute decision that gives you data instead of guesses.\n\nThe lab to ask for is total testosterone, ideally drawn between 7 and 10 a.m. when levels peak. A free testosterone reading and SHBG add useful context. Most clinicians will also order a CBC, lipid panel, and PSA depending on age and history. Anything below 300 ng/dL on two separate morning draws meets the standard clinical threshold for hypogonadism, but symptoms can show up earlier in some men.\n\nWhat the labs do not capture is whether you would feel better with treatment. That is a clinical conversation, not a number. A 320 reading with classic symptoms can warrant treatment; a 280 reading in a man sleeping six hours a night might not, until sleep is fixed.\n\nThe takeaway: do not self-diagnose, and do not dismiss six months of feeling flat as a phase. A morning lab is the starting line.',
    authorId: 'editorial-team',
    reviewerId: 'medical-director',
    publishedAt: '2026-02-26',
    lastReviewedAt: '2026-02-26',
    readMinutes: 8,
    featured: true,
    onHomePage: false,
    citations: [
      {
        type: 'MedicalScholarlyArticle',
        headline:
          'Testosterone Therapy in Men With Hypogonadism: An Endocrine Society Clinical Practice Guideline',
        author: [
          'Bhasin S',
          'Brito JP',
          'Cunningham GR',
          'Hayes FJ',
          'Hodis HN',
          'Matsumoto AM',
          'Snyder PJ',
          'Swerdloff RS',
          'Wu FC',
          'Yialamas MA',
        ],
        datePublished: '2018-05-01',
        url: 'https://academic.oup.com/jcem/article/103/5/1715/4939465',
        publisher: 'Journal of Clinical Endocrinology & Metabolism',
        publicationType: 'Guideline',
      },
    ],
  },
  {
    slug: 'how-trt-pricing-works',
    category: 'pricing',
    title: 'How TRT pricing actually works (and why most clinics hide it)',
    excerpt:
      'A flat monthly number sounds simple. Most clinics do not give you one because the real bill is buried in consult fees, lab markups, and dose-tier upsells.',
    quickAnswer:
      'Honest TRT pricing has three parts: medication, lab work, and clinical care. Most clinics quote one and bury the other two. A flat monthly number that includes all three is the only fair comparison.',
    body:
      'TRT pricing is one of the murkiest categories in modern telehealth. Three clinics can advertise the same headline number and bill three radically different amounts twelve months later. The trick is almost never deception — it is what gets unbundled.\n\nThe real cost of TRT has three buckets. The first is the medication itself: cypionate, enanthate, enclomiphene, HCG, or topical cream. The second is lab work: an initial baseline panel, follow-up labs at six to eight weeks, and ongoing monitoring at least every six months. The third is clinical care: the consult that establishes the prescription, follow-up visits, and the unlimited messaging most modern clinics include.\n\nClinics that hide the total bill usually do it by quoting only the medication. The membership fee, lab draws, and consult charges show up separately, and they add up. A 99 dollar headline can become 220 dollars after two months, especially if a dose change triggers a new fee structure.\n\nThe other common dodge is dose-tier pricing. A clinic prices a 100 mg weekly dose at one number and a 200 mg weekly dose at a higher one, even though the cost difference to the pharmacy is small. This penalizes men whose physician — not them — decides they need the higher dose.\n\nA fair model is flat all-inclusive pricing: one number per month, every month, with medication and labs and care included. The only reason a clinic would not offer that is because it does not want you to compare apples to apples.\n\nRule of thumb for the math: if a clinic will not tell you what you would pay in month twelve, you are about to find out the hard way.',
    authorId: 'editorial-team',
    reviewerId: 'medical-director',
    publishedAt: '2026-02-04',
    lastReviewedAt: '2026-02-04',
    readMinutes: 10,
    featured: false,
    onHomePage: true,
  },
  {
    slug: 'weekly-vs-twice-weekly-cypionate',
    category: 'protocols',
    title: 'Weekly vs twice-weekly cypionate: real-world tradeoffs',
    excerpt:
      'The internet treats injection frequency like a religious debate. The actual evidence is narrower and more interesting than the loudest takes.',
    quickAnswer:
      'Twice-weekly dosing produces a flatter trough-to-peak curve and may help men sensitive to estradiol fluctuations. For most men, once-weekly is fine and twice-weekly is convenience theater. Your labs and how you feel are the only inputs that matter.',
    body:
      'Cypionate has an eight-day half-life, which means a single weekly dose holds reasonably steady serum levels week to week. The ratio between peak and trough is wider than some men prefer, but for the majority it is well within the range that produces stable symptoms and stable labs.\n\nTwice-weekly dosing splits the same total dose across two injections per week. The math is simple: half the dose every three to four days. The result is a flatter curve, with smaller peaks and shallower troughs. For men who notice mood or energy variability between injections, this can help. For men sensitive to estradiol shifts, it can also blunt the conversion peak that follows a single larger dose.\n\nThe argument for sticking with once-weekly is mostly about adherence. One injection per week is easier to remember, simpler when traveling, and produces fewer total injection sites. A man who already injects once a week reliably is unlikely to miss two doses a week reliably — which means the theoretical advantage of twice-weekly evaporates if a dose is forgotten.\n\nThere is also a cost question. Compounded versions priced per milliliter favor splitting; FDA-approved generics priced per vial usually do not.\n\nThe honest answer: try once-weekly first. If your six-week labs and how you feel both look good, stay there. If estradiol or symptom variability is showing up in either, your physician can move you to twice-weekly without changing the total dose. The protocol is a dial, not a one-time decision.',
    authorId: 'editorial-team',
    reviewerId: 'medical-director',
    publishedAt: '2026-01-12',
    lastReviewedAt: '2026-01-12',
    readMinutes: 9,
    featured: false,
    onHomePage: false,
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}

export function getHomepageBlogPosts(): BlogPost[] {
  return BLOG_POSTS.filter((p) => p.onHomePage).slice(0, 3);
}

export function getFeaturedBlogPosts(): BlogPost[] {
  return BLOG_POSTS.filter((p) => p.featured);
}

export function getBlogPostsByCategory(): Record<BlogCategory, BlogPost[]> {
  const out = Object.keys(CATEGORY_LABELS).reduce((acc, key) => {
    acc[key as BlogCategory] = [];
    return acc;
  }, {} as Record<BlogCategory, BlogPost[]>);

  for (const post of BLOG_POSTS) {
    out[post.category].push(post);
  }
  return out;
}

/**
 * Returns up to `limit` (default 4) other posts in the same category,
 * falling back to other categories if needed. Sorted by recency.
 */
export function getRelatedBlogPosts(slug: string, limit = 4): BlogPost[] {
  const current = getBlogPostBySlug(slug);
  if (!current) return [];

  const others = BLOG_POSTS.filter((p) => p.slug !== slug);
  const sameCategory = others
    .filter((p) => p.category === current.category)
    .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));

  if (sameCategory.length >= limit) {
    return sameCategory.slice(0, limit);
  }

  const fallback = others
    .filter((p) => p.category !== current.category)
    .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));

  return [...sameCategory, ...fallback].slice(0, limit);
}

export function getAuthor(id: string): BlogAuthor | undefined {
  return AUTHORS.find((a) => a.id === id);
}

export function getReviewer(id: string): BlogReviewer | undefined {
  return REVIEWERS.find((r) => r.id === id);
}
