import { SITE_URL } from '@/lib/utils';

/**
 * Inline JSON-LD — never via Helmet (head-dedup collapses multiple LD tags).
 * Using `Organization` for v1 (marketing site, not yet operating as clinic).
 * Upgrade to `MedicalBusiness` when intake is live.
 */
export function OrganizationSchema() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'trtrx',
    url: SITE_URL,
    description:
      'Doctor-supervised testosterone replacement therapy with transparent pricing and same-day shipping.',
    logo: `${SITE_URL}/api/og?variant=logo`,
    sameAs: [],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer support',
      email: 'hello@trtrx.com',
      availableLanguage: ['en'],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
