import { TREATMENTS } from "@/content/treatments";
import {
  DEFAULT_OG_IMAGE,
  EDITORIAL_POLICY_URL,
  SITE_CONTACT_EMAIL,
  SITE_CONTACT_PHONE,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_SOCIAL_PROFILES,
  SITE_URL,
  toAbsoluteUrl,
} from "./site";

export const ORGANIZATION_ID = `${SITE_URL}/#organization`;
export const WEBSITE_ID = `${SITE_URL}/#website`;
export const MEDICAL_BUSINESS_ID = `${SITE_URL}/#medicalbusiness`;
// No #medicaldirector entity by design — no named physician is emitted until a real
// medical director exists (see src/content/physician.ts). A Person/Provider node with
// a placeholder identity is an E-E-A-T liability, so it stays out of the entity graph.
export const LOW_TESTOSTERONE_CONDITION_ID = `${SITE_URL}/#low-testosterone`;

export type TreatmentEntity = {
  id: string;
  name: string;
  slug: string;
  url: string;
  description: string;
  activeIngredient: string;
  offerPrice: string;
};

const ACTIVE_INGREDIENTS: Record<string, string> = {
  cypionate: "Testosterone Cypionate",
  enanthate: "Testosterone Enanthate",
  enclomiphene: "Enclomiphene Citrate",
  hcg: "Human Chorionic Gonadotropin",
  cream: "Testosterone",
};

export const TREATMENT_ENTITIES: Record<string, TreatmentEntity> =
  Object.fromEntries(
    TREATMENTS.map((t) => [
      t.slug,
      {
        id: `${SITE_URL}/#${t.slug}`,
        name: t.name,
        slug: t.slug,
        url: toAbsoluteUrl(`/treatments/${t.slug}`),
        description: t.summary,
        activeIngredient: ACTIVE_INGREDIENTS[t.slug] ?? t.name,
        offerPrice: String(t.monthlyPriceFrom),
      },
    ]),
  );

export function getBaseEntityGraph(): Record<string, unknown>[] {
  return [
    {
      "@type": "Organization",
      "@id": ORGANIZATION_ID,
      name: SITE_NAME,
      url: SITE_URL,
      logo: `${SITE_URL}/api/og?variant=logo`,
      image: DEFAULT_OG_IMAGE,
      description: SITE_DESCRIPTION,
      sameAs: SITE_SOCIAL_PROFILES,
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "General inquiries",
        url: `${SITE_URL}/contact`,
        email: SITE_CONTACT_EMAIL,
        ...(SITE_CONTACT_PHONE ? { telephone: SITE_CONTACT_PHONE } : {}),
        availableLanguage: "English",
      },
    },
    {
      "@type": "WebSite",
      "@id": WEBSITE_ID,
      url: SITE_URL,
      name: SITE_NAME,
      description: SITE_DESCRIPTION,
      publishingPrinciples: EDITORIAL_POLICY_URL,
      publisher: { "@id": ORGANIZATION_ID },
      inLanguage: "en-US",
    },
    ...Object.values(TREATMENT_ENTITIES).map((t) => ({
      "@type": "Thing",
      "@id": t.id,
      name: t.name,
      url: t.url,
      description: t.description,
    })),
    {
      "@type": "Thing",
      "@id": LOW_TESTOSTERONE_CONDITION_ID,
      name: "Low testosterone",
    },
  ];
}
