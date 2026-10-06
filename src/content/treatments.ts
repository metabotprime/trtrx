export type Treatment = {
  slug: "cypionate" | "enanthate" | "enclomiphene" | "hcg" | "cream";
  name: string;
  shortName: string;
  formFactor: "Injectable" | "Oral" | "Topical" | "Adjunct";
  route: string;
  frequency: string;
  fertilityNote: string;
  fdaStatus:
    | "FDA-approved products exist"
    | "Compounded, not FDA-approved"
    | "Product not confirmed";
  /** Applies only to use outside an approved product label, not unapproved drugs. */
  offLabel?: boolean;
  monthlyPriceFrom: number;
  /** Premium product photograph for the detail-page hero (public/images/products/<slug>.jpg). */
  heroImage?: string;
  /** Looping ambient product video for the detail-page hero (public/videos/products/<slug>.mp4).
   * The heroImage doubles as its poster / reduced-motion fallback. */
  heroVideo?: string;
  headline?: string;
  eyebrow: string;
  summary: string;
  bullets: string[];
  whoIsThisFor: string[];
  whoIsThisNotFor: string[];
};

export const TREATMENTS: Treatment[] = [
  {
    slug: "cypionate",
    heroImage: "/images/products/cypionate.jpg",
    heroVideo: "/videos/products/cypionate.mp4",
    name: "Testosterone Cypionate",
    shortName: "Cypionate",
    formFactor: "Injectable",
    route: "Injection, route depends on product",
    frequency: "Individual prescription",
    fertilityNote: "Can suppress sperm production",
    fdaStatus: "FDA-approved products exist",
    monthlyPriceFrom: 219,
    eyebrow: "INJECTABLE · PLANNED PROGRAM",
    summary:
      "Testosterone cypionate is an injectable form of testosterone. Product instructions, the reason for treatment and follow-up testing inform an individual prescription. TRTrx is evaluating a planned injectable program; no product is currently available through this site.",
    bullets: [
      "Ask which exact product and injection route are prescribed",
      "Discuss monitoring and what to do if side effects develop",
      "FDA approval applies to specific products, not all preparations",
    ],
    whoIsThisFor: [
      "Discussing confirmed testosterone deficiency with a clinician",
      "Comparing injection-based treatment with other formulations",
    ],
    whoIsThisNotFor: [
      "Planning pregnancy with a partner: discuss fertility before testosterone",
      "Self-prescribing or changing dose without a clinician",
    ],
  },
  {
    slug: "enanthate",
    heroImage: "/images/products/enanthate.jpg",
    heroVideo: "/videos/products/enanthate.mp4",
    name: "Testosterone Enanthate",
    shortName: "Enanthate",
    formFactor: "Injectable",
    route: "Injection, route depends on product",
    frequency: "Individual prescription",
    fertilityNote: "Can suppress sperm production",
    fdaStatus: "FDA-approved products exist",
    monthlyPriceFrom: 219,
    eyebrow: "INJECTABLE · PLANNED PROGRAM",
    summary:
      "Testosterone enanthate is another injectable testosterone formulation. Products differ in their delivery systems and instructions. A clinician should determine whether a particular product fits your diagnosis and medical history; cypionate and enanthate should not be swapped without guidance.",
    bullets: [
      "Ask about the specific formulation and administration instructions",
      "Compare the practical demands of injections and follow-up",
      "TRTrx product selection and pharmacy arrangements are not finalized",
    ],
    whoIsThisFor: [
      "Reviewing injectable formulations with a clinician",
      "Preparing questions about product differences",
    ],
    whoIsThisNotFor: [
      "Using a different ester as a substitute without a new prescription",
      "Expecting a specific outcome or fixed dosing schedule",
    ],
  },
  {
    slug: "enclomiphene",
    heroImage: "/images/products/enclomiphene.jpg",
    heroVideo: "/videos/products/enclomiphene.mp4",
    name: "Enclomiphene",
    shortName: "Enclomiphene",
    formFactor: "Oral",
    route: "Oral formulation",
    frequency: "Individual prescription",
    fertilityNote: "Specialist discussion required",
    fdaStatus: "Compounded, not FDA-approved",
    monthlyPriceFrom: 179,
    eyebrow: "ORAL · PLANNED PROGRAM",
    summary:
      "Enclomiphene is a selective estrogen receptor modulator studied for its effects on the hormonal signals involved in testosterone production. It is not testosterone replacement and is not an FDA-approved drug. Benefits, risks and the appropriateness of any proposed compounded preparation require individual clinical assessment.",
    bullets: [
      "Not interchangeable with testosterone replacement",
      "No FDA-approved enclomiphene product",
      "Fertility preservation and pregnancy outcomes are not guaranteed",
    ],
    whoIsThisFor: [
      "Asking a clinician about the cause of low testosterone",
      "Discussing fertility goals and approved alternatives",
    ],
    whoIsThisNotFor: [
      "Assuming an oral treatment is automatically safer",
      "Treating a planned price as confirmation that prescribing is available",
    ],
  },
  {
    slug: "hcg",
    heroImage: "/images/products/hcg.jpg",
    heroVideo: "/videos/products/hcg.mp4",
    name: "HCG Therapy",
    shortName: "HCG",
    formFactor: "Adjunct",
    route: "Injection, product-specific instructions",
    frequency: "Individual prescription",
    fertilityNote: "Specialist discussion required",
    fdaStatus: "Product not confirmed",
    monthlyPriceFrom: 89,
    eyebrow: "ADJUNCT · PLANNED PROGRAM",
    summary:
      "Human chorionic gonadotropin (HCG) is a prescription hormone. FDA-approved HCG products have specific indications, including selected hormonal conditions in males. Use alongside testosterone needs specialist assessment. TRTrx has not confirmed a product, formulation or clinical availability for its planned adjunct.",
    bullets: [
      "Planned adjunct only, requiring a base TRT plan",
      "Product, regulatory status and availability need confirmation",
      "Adding HCG does not guarantee fertility preservation",
    ],
    whoIsThisFor: [
      "Discussing fertility concerns with a reproductive specialist",
      "Asking how an adjunct would change monitoring and cost",
    ],
    whoIsThisNotFor: [
      "Using HCG as fertility insurance",
      "Adding medication without an individualized prescription",
    ],
  },
  {
    slug: "cream",
    heroImage: "/images/products/cream.jpg",
    heroVideo: "/videos/products/cream.mp4",
    name: "Topical Cream",
    shortName: "Cream",
    formFactor: "Topical",
    route: "Topical application",
    frequency: "Individual prescription",
    fertilityNote: "Can suppress sperm production",
    fdaStatus: "Compounded, not FDA-approved",
    monthlyPriceFrom: 199,
    eyebrow: "TOPICAL · PLANNED PROGRAM",
    summary:
      "A compounded testosterone cream is applied to the skin and is not FDA-approved. It should not be assumed equivalent to an approved testosterone gel or other approved product. Skin transfer to other people is an important issue to discuss with a clinician and pharmacist before considering topical testosterone.",
    bullets: [
      "Compounded cream is not an FDA-approved finished drug",
      "Ask about avoiding transfer to a partner or child",
      "Application instructions depend on the prescribed formulation",
    ],
    whoIsThisFor: [
      "Discussing non-injectable options with a clinician",
      "Reviewing household contact and application precautions",
    ],
    whoIsThisNotFor: [
      "Assuming cream and approved gel instructions are interchangeable",
      "Using testosterone while trying to preserve fertility without specialist advice",
    ],
  },
];

export function getTreatmentBySlug(slug: string): Treatment | undefined {
  return TREATMENTS.find((t) => t.slug === slug);
}
