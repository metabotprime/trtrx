import { ORGANIZATION_ID, WEBSITE_ID } from '@/lib/seo/entities';
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from '@/lib/seo/site';

/**
 * Helps Google render a search box under the brand in sitelinks. Homepage only.
 * Reuses WEBSITE_ID so this entity merges with the WebSite emitted by
 * EntityGraphSchema rather than duplicating it.
 */
export function SiteLinksSearchBoxSchema() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    url: SITE_URL,
    name: SITE_NAME,
    description: SITE_DESCRIPTION,
    publisher: { '@id': ORGANIZATION_ID },
    potentialAction: [
      {
        '@type': 'SearchAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: `${SITE_URL}/blog?search={search_term_string}`,
        },
        'query-input': 'required name=search_term_string',
      },
    ],
    inLanguage: 'en-US',
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
