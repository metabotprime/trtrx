import { Helmet } from 'react-helmet-async';
import { SITE_NAME, SITE_URL } from '@/lib/utils';

type SEOHeadProps = {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
  noindex?: boolean;
};

export function SEOHead({
  title,
  description,
  path,
  ogImage = '/og/default.png',
  noindex = false,
}: SEOHeadProps) {
  const url = `${SITE_URL}${path}`;
  const fullTitle = path === '/' ? `${SITE_NAME} — ${title}` : `${title} | ${SITE_NAME}`;
  const ogUrl = ogImage.startsWith('http') ? ogImage : `${SITE_URL}${ogImage}`;

  return (
    <Helmet>
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
    </Helmet>
  );
}
