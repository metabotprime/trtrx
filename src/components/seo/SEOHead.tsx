import Head from 'next/head';
import { SITE_NAME, SITE_URL } from '@/lib/utils';

type SEOHeadProps = {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
  noindex?: boolean;
};

/**
 * Per-page SEO head tags. Uses next/head so tags are SSR'd into the static
 * HTML — required for crawlers, social-share previewers, and AI engines that
 * don't execute JavaScript.
 *
 * JSON-LD schemas live in their own components (OrganizationSchema,
 * BlogPostingSchema, EntityGraphSchema, etc.) — NEVER in this file.
 */
export function SEOHead({
  title,
  description,
  path,
  ogImage = '/og/default.png',
  noindex = false,
}: SEOHeadProps) {
  const url = `${SITE_URL}${path}`;
  const fullTitle =
    path === '/' ? `${SITE_NAME} — ${title}` : `${title} | ${SITE_NAME}`;
  // Open Graph images are generated on the fly from the page title by
  // /api/og (branded 1200×630). An absolute http(s) ogImage still wins, so a
  // real static asset can override later; the legacy /og/*.png paths (which
  // don't exist) fall through to the dynamic route.
  const ogUrl =
    ogImage && ogImage.startsWith('http')
      ? ogImage
      : `${SITE_URL}/api/og?title=${encodeURIComponent(title)}`;

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      {noindex && <meta name="robots" content="noindex, nofollow" />}

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={ogUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogUrl} />
    </Head>
  );
}
