import { MEDICAL_BUSINESS_ID, TREATMENT_ENTITIES } from '@/lib/seo/entities';
import {
  DEFAULT_OG_IMAGE,
  SITE_CONTACT_EMAIL,
  SITE_CONTACT_PHONE,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_SOCIAL_PROFILES,
  SITE_URL,
} from '@/lib/seo/site';

/**
 * Standalone MedicalBusiness schema for pages where the page-level focus is
 * the clinic itself (About, Pricing). Reuses MEDICAL_BUSINESS_ID so it merges
 * with the entity emitted by EntityGraphSchema rather than duplicating it.
 */
export function HealthcareProviderSchema() {
  const treatments = Object.values(TREATMENT_ENTITIES);

  const data = {
    '@context': 'https://schema.org',
    '@type': 'MedicalBusiness',
    '@id': MEDICAL_BUSINESS_ID,
    name: SITE_NAME,
    alternateName: 'trtrx',
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    logo: DEFAULT_OG_IMAGE,
    image: DEFAULT_OG_IMAGE,
    email: SITE_CONTACT_EMAIL,
    ...(SITE_CONTACT_PHONE ? { telephone: SITE_CONTACT_PHONE } : {}),
    priceRange: '$89-$219',
    currenciesAccepted: 'USD',
    paymentAccepted: ['Credit Card', 'Debit Card', 'HSA', 'FSA'],
    areaServed: { '@type': 'Country', name: 'United States' },
    address: { '@type': 'PostalAddress', addressCountry: 'US' },
    medicalSpecialty: ['Endocrinology', "Men's Health", 'Telemedicine'],
    isAcceptingNewPatients: true,
    sameAs: SITE_SOCIAL_PROFILES,
    availableService: [
      {
        '@type': 'MedicalProcedure',
        name: 'Online testosterone therapy consultation',
        procedureType: 'Telemedicine',
      },
      {
        '@type': 'MedicalProcedure',
        name: 'Testosterone replacement therapy program',
        procedureType: 'Medical Hormone Replacement',
      },
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'trtrx testosterone therapy treatments',
      itemListElement: treatments.map((t) => ({
        '@type': 'Offer',
        price: t.offerPrice,
        priceCurrency: 'USD',
        itemOffered: { '@id': t.id },
      })),
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      email: SITE_CONTACT_EMAIL,
      ...(SITE_CONTACT_PHONE ? { telephone: SITE_CONTACT_PHONE } : {}),
      url: `${SITE_URL}/contact`,
      availableLanguage: 'English',
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '00:00',
      closes: '23:59',
      description: 'Online portal and messaging available 24/7',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
