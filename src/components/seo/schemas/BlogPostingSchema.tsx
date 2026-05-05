import { SITE_URL } from '@/lib/utils';
import { type BlogPost, getAuthor, getReviewer } from '@/content/blog';

type Props = { post: BlogPost };

/**
 * Inline JSON-LD BlogPosting — never via Helmet.
 * Includes `reviewedBy` (Person + honorificSuffix) when a reviewer is set.
 */
export function BlogPostingSchema({ post }: Props) {
  const author = getAuthor(post.authorId);
  const reviewer = getReviewer(post.reviewerId);
  const url = `${SITE_URL}/blog/${post.slug}`;
  const imageUrl = post.ogImage
    ? post.ogImage.startsWith('http')
      ? post.ogImage
      : `${SITE_URL}${post.ogImage}`
    : `${SITE_URL}/og/blog-default.png`;

  const data: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    image: imageUrl,
    datePublished: post.publishedAt,
    dateModified: post.lastReviewedAt,
    url,
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    articleSection: post.category,
    publisher: {
      '@type': 'Organization',
      name: 'trtrx',
      url: SITE_URL,
      logo: { '@type': 'ImageObject', url: `${SITE_URL}/og/logo.png` },
    },
  };

  if (author) {
    data.author = {
      '@type': 'Person',
      name: author.name,
      jobTitle: author.title,
      ...(author.credentials ? { honorificSuffix: author.credentials } : {}),
      ...(author.sameAs ? { sameAs: author.sameAs } : {}),
    };
  }

  if (reviewer) {
    data.reviewedBy = {
      '@type': 'Person',
      name: reviewer.name,
      jobTitle: reviewer.title,
      honorificSuffix: reviewer.credentials,
    };
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
