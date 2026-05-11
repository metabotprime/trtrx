import { TREATMENTS } from '@/content/treatments';
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
} from './site';

export const ORGANIZATION_ID = `${SITE_URL}/#organization`;
export const WEBSITE_ID = `${SITE_URL}/#website`;
export const MEDICAL_BUSINESS_ID = `${SITE_URL}/#medicalbusiness`;
export const MEDICAL_DIRECTOR_ID = `${SITE_URL}/#medicaldirector`;

export type TreatmentEntity = {
  id: string;
  name: string;
  slug: string;
  url: string;
  description: string;
  activeIngredient: string;
  offerPrice: string;
  fertilityPreserving: boolean;
};

const ACTIVE_INGREDIENTS: Record<string, string> = {
  cypionate: 'Testosterone Cypionate',
  enanthate: 'Testosterone Enanthate',
  enclomiphene: 'Enclomiphene Citrate',
  hcg: 'Human Chorionic Gonadotropin',
  cream: 'Testosterone',
};

export const TREATMENT_ENTITIES: Record<string, TreatmentEntity> = Object.fromEntries(
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
      fertilityPreserving: t.fertilityPreserving,
    },
  ]),
);

const TREATMENT_ENTITY_LIST = Object.values(TREATMENT_ENTITIES);

export function getBaseEntityGraph() {
  return [
    {
      '@type': 'MedicalOrganization',
      '@id': ORGANIZATION_ID,
      name: SITE_NAME,
      alternateName: 'trtrx',
      url: SITE_URL,
      logo: DEFAULT_OG_IMAGE,
      image: DEFAULT_OG_IMAGE,
      description: SITE_DESCRIPTION,
      sameAs: SITE_SOCIAL_PROFILES,
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'Customer Service',
        url: `${SITE_URL}/contact`,
        email: SITE_CONTACT_EMAIL,
        ...(SITE_CONTACT_PHONE ? { telephone: SITE_CONTACT_PHONE } : {}),
        availableLanguage: 'English',
      },
      areaServed: {
        '@type': 'Country',
        name: 'United States',
      },
      knowsAbout: [
        'Testosterone replacement therapy',
        'Low testosterone',
        'Hypogonadism',
        'Hormone replacement therapy',
        'Telehealth',
        'Compounded medications',
        'Men\'s health',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': WEBSITE_ID,
      url: SITE_URL,
      name: SITE_NAME,
      description: SITE_DESCRIPTION,
      publishingPrinciples: EDITORIAL_POLICY_URL,
      publisher: { '@id': ORGANIZATION_ID },
      inLanguage: 'en-US',
      potentialAction: {
        '@type': 'SearchAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: `${SITE_URL}/blog?search={search_term_string}`,
        },
        'query-input': 'required name=search_term_string',
      },
    },
    {
      '@type': 'MedicalBusiness',
      '@id': MEDICAL_BUSINESS_ID,
      name: SITE_NAME,
      url: SITE_URL,
      description: SITE_DESCRIPTION,
      email: SITE_CONTACT_EMAIL,
      ...(SITE_CONTACT_PHONE ? { telephone: SITE_CONTACT_PHONE } : {}),
      sameAs: SITE_SOCIAL_PROFILES,
      parentOrganization: { '@id': ORGANIZATION_ID },
      priceRange: '$89-$219',
      currenciesAccepted: 'USD',
      paymentAccepted: ['Credit Card', 'Debit Card', 'HSA', 'FSA'],
      areaServed: { '@type': 'Country', name: 'United States' },
      medicalSpecialty: ['Endocrinology', 'Men\'s Health', 'Telemedicine'],
      isAcceptingNewPatients: true,
      availableService: [
        {
          '@type': 'MedicalProcedure',
          name: 'Online testosterone therapy consultation',
          procedureType: 'Telemedicine',
        },
        ...TREATMENT_ENTITY_LIST.map((t) => ({
          '@type': 'MedicalTherapy',
          name: t.name,
          url: t.url,
        })),
      ],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'trtrx testosterone therapy treatments',
        itemListElement: TREATMENT_ENTITY_LIST.map((t) => ({
          '@type': 'Offer',
          price: t.offerPrice,
          priceCurrency: 'USD',
          itemOffered: { '@id': t.id },
        })),
      },
      openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '00:00',
        closes: '23:59',
        description: 'Online portal and messaging available 24/7',
      },
    },
    ...TREATMENT_ENTITY_LIST.map((t) => ({
      '@type': 'MedicalTherapy',
      '@id': t.id,
      name: t.name,
      url: t.url,
      description: t.description,
      activeIngredient: t.activeIngredient,
      provider: { '@id': MEDICAL_BUSINESS_ID },
    })),
  ];
}
