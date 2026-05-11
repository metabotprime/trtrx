import {
  getBaseEntityGraph,
  MEDICAL_BUSINESS_ID,
  ORGANIZATION_ID,
  TREATMENT_ENTITIES,
  WEBSITE_ID,
} from '@/lib/seo/entities';
import { DEFAULT_OG_IMAGE, toAbsoluteUrl } from '@/lib/seo/site';

type TreatmentEntityId = (typeof TREATMENT_ENTITIES)[keyof typeof TREATMENT_ENTITIES]['id'];

type EntityIdRef = string | TreatmentEntityId;

type BreadcrumbItem = { name: string; url: string };

type EntityGraphSchemaProps = {
  title: string;
  description: string;
  url: string;
  pageType?: 'WebPage' | 'CollectionPage' | 'MedicalWebPage' | 'AboutPage' | 'ContactPage' | 'FAQPage';
  aboutEntityIds?: EntityIdRef[];
  breadcrumbItems?: BreadcrumbItem[];
  image?: string;
};

/**
 * Single combined @graph schema for the page. Inline <script> (no Helmet) so we
 * stack cleanly with react-helmet-async without head-dedup collapsing the LD tag.
 *
 * Adds Organization, WebSite, MedicalBusiness, and one MedicalTherapy per treatment
 * (via getBaseEntityGraph) plus the page-specific WebPage entity and an optional
 * BreadcrumbList — all cross-referenced by @id so AI engines can stitch the site
 * into one entity, not many isolated pages.
 */
export function EntityGraphSchema({
  title,
  description,
  url,
  pageType = 'WebPage',
  aboutEntityIds = [],
  breadcrumbItems = [],
  image = DEFAULT_OG_IMAGE,
}: EntityGraphSchemaProps) {
  const fullUrl = toAbsoluteUrl(url);
  const pageId = `${fullUrl}#webpage`;
  const breadcrumbId = `${fullUrl}#breadcrumb`;

  const pageEntity: Record<string, unknown> = {
    '@type': pageType,
    '@id': pageId,
    url: fullUrl,
    name: title,
    description,
    isPartOf: { '@id': WEBSITE_ID },
    publisher: { '@id': ORGANIZATION_ID },
    provider: { '@id': MEDICAL_BUSINESS_ID },
    inLanguage: 'en-US',
    primaryImageOfPage: {
      '@type': 'ImageObject',
      url: toAbsoluteUrl(image),
    },
  };

  if (aboutEntityIds.length > 0) {
    pageEntity.about = aboutEntityIds.map((id) => ({ '@id': id }));
  }

  if (breadcrumbItems.length > 0) {
    pageEntity.breadcrumb = { '@id': breadcrumbId };
  }

  const graph: Record<string, unknown>[] = [
    ...getBaseEntityGraph(),
    pageEntity,
  ];

  if (breadcrumbItems.length > 0) {
    graph.push({
      '@type': 'BreadcrumbList',
      '@id': breadcrumbId,
      itemListElement: breadcrumbItems.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item.name,
        item: toAbsoluteUrl(item.url),
      })),
    });
  }

  const data = {
    '@context': 'https://schema.org',
    '@graph': graph,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
