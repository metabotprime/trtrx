import { SITE_URL } from '@/lib/utils';
import type { BlogPost } from '@/content/blog';
import { getAuthor, getReviewer } from '@/content/blog-metadata';

type Props = { post: BlogPost };

/**
 * Inline JSON-LD BlogPosting — never via Helmet.
 *
 * YMYL-tightened signals (per schema-markup skill audit):
 * - Auto-detects Person vs Organization for author/reviewer. A name like
 *   "trtrx Editorial Team" is an Organization, not a Person — using Person
 *   for non-individuals is a Google quality-rater red flag.
 * - Computes wordCount from the displayed body.
 * - Sets isAccessibleForFree + inLanguage for indexing clarity.
 * - reviewedBy with honorificSuffix when a real reviewer is set.
 */
function isOrganizationName(name?: string): boolean {
  return !!name && /team|editorial|content|staff|trtrx/i.test(name);
}

/** Never serialize a bracketed/placeholder identity into JSON-LD — a
 * machine-readable claim about a person who doesn't exist is an E-E-A-T
 * and compliance liability. */
function isPlaceholderName(name?: string): boolean {
  return !!name && /\[|placeholder/i.test(name);
}

export function BlogPostingSchema({ post }: Props) {
  const author = getAuthor(post.authorId);
  const reviewer = post.lastReviewedAt ? getReviewer(post.reviewerId) : undefined;
  const url = `${SITE_URL}/blog/${post.slug}`;
  const imageUrl =
    post.ogImage && post.ogImage.startsWith('http')
      ? post.ogImage
      : `${SITE_URL}/api/og?title=${encodeURIComponent(post.title)}`;

  // Plain text is derived from the same sections the reader sees.
  const wordCount = post.body.trim().split(/\s+/).filter(Boolean).length;

  const data: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    '@id': `${url}#article`,
    headline: post.title,
    description: post.excerpt,
    image: imageUrl,
    ...(post.publishedAt ? { datePublished: post.publishedAt } : {}),
    dateModified: post.updatedAt,
    url,
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${url}#webpage` },
    articleSection: post.category,
    wordCount,
    inLanguage: 'en-US',
    isAccessibleForFree: true,
    publisher: {
      '@type': 'Organization',
      name: 'trtrx',
      url: SITE_URL,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/api/og?variant=logo`,
        width: 1200,
        height: 630,
      },
    },
  };

  if (author && !isPlaceholderName(author.name)) {
    const authorIsOrg = isOrganizationName(author.name);
    data.author = {
      '@type': authorIsOrg ? 'Organization' : 'Person',
      name: author.name,
      ...(authorIsOrg
        ? {}
        : {
            jobTitle: author.title,
            ...(author.credentials ? { honorificSuffix: author.credentials } : {}),
          }),
      ...(author.sameAs ? { sameAs: author.sameAs } : {}),
    };
  }

  if (reviewer && !isPlaceholderName(reviewer.name)) {
    const reviewerIsOrg = isOrganizationName(reviewer.name);
    data.reviewedBy = {
      '@type': reviewerIsOrg ? 'Organization' : 'Person',
      name: reviewer.name,
      ...(reviewerIsOrg
        ? {}
        : {
            jobTitle: reviewer.title,
            honorificSuffix: reviewer.credentials,
          }),
    };
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }}
    />
  );
}
