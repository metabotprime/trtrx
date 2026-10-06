import { SITE_URL } from '@/lib/seo/site';

/**
 * Preserve the real source type. An agency information page is a WebPage,
 * not a scholarly article, and schema is not evidence of clinical review.
 */
export type Citation = {
  '@type': 'ScholarlyArticle' | 'MedicalScholarlyArticle' | 'WebPage';
  headline: string;
  author?: string[];
  datePublished?: string;
  url?: string;
  publisher?: { name: string };
  /**
   * Type of scholarly publication: 'JournalArticle', 'Review',
   * 'SystematicReview', 'CaseReport', etc. Optional but strengthens AI parsing.
   */
  publicationType?: string;
};

type Props = {
  /**
   * URL of the page that's making the citations. Required so Google can
   * attribute the citations to the right MedicalWebPage entity.
   */
  pageUrl: string;
  pageType?: 'WebPage' | 'MedicalWebPage';
  citations: Citation[];
};

/**
 * Emits a MedicalWebPage entity with a `citation` array. This stacks
 * cleanly alongside an EntityGraphSchema on the same page — Google merges
 * multiple JSON-LD scripts about the same MedicalWebPage. Used on blog
 * posts and treatment detail pages that reference clinical trials,
 * Endocrine Society guidelines, FDA documents, etc.
 *
 * Inline JSON-LD (NOT via react-helmet-async) per the project's schema
 * discipline.
 */
export function CitationSchema({ pageUrl, citations, pageType = 'MedicalWebPage' }: Props) {
  if (!citations || citations.length === 0) return null;

  const absoluteUrl = pageUrl.startsWith('http') ? pageUrl : `${SITE_URL}${pageUrl}`;

  const data = {
    '@context': 'https://schema.org',
    '@type': pageType,
    '@id': `${absoluteUrl}#webpage`,
    url: absoluteUrl,
    citation: citations.map((c) => ({
      '@type': c['@type'],
      headline: c.headline,
      ...(c.author ? { author: c.author.map((a) => ({ '@type': 'Person', name: a })) } : {}),
      ...(c.datePublished ? { datePublished: c.datePublished } : {}),
      ...(c.url ? { url: c.url } : {}),
      ...(c.publisher ? { publisher: { '@type': 'Organization', name: c.publisher.name } } : {}),
      ...(c.publicationType ? { publicationType: c.publicationType } : {}),
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }}
    />
  );
}
