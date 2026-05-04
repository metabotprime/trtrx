import type { GetServerSideProps } from 'next';
import { buildSitemapXml } from '@/lib/seo/sitemap';

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const xml = buildSitemapXml();
  res.setHeader('Content-Type', 'application/xml; charset=utf-8');
  res.setHeader(
    'Cache-Control',
    'public, max-age=0, s-maxage=3600, stale-while-revalidate=86400',
  );
  res.write(xml);
  res.end();
  return { props: {} };
};

export default function Sitemap() {
  return null;
}
