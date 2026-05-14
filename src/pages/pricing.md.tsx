import type { GetServerSideProps, NextPage } from 'next';
import { buildPricingMd } from '@/lib/geo/pricing-md';

/**
 * /pricing.md — machine-readable pricing document for AI agents.
 *
 * Same SSR pattern as /llms.txt and /llms-full.txt. text/markdown content
 * type so agents that respect MIME parse it as Markdown directly.
 *
 * Discoverable via: sitemap.xml, llms.txt link, and the /pricing page footer.
 */

const PricingMdPage: NextPage = () => null;

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  res.setHeader('Content-Type', 'text/markdown; charset=utf-8');
  res.setHeader('Cache-Control', 'public, s-maxage=3600, stale-while-revalidate=86400');
  res.write(buildPricingMd());
  res.end();
  return { props: {} };
};

export default PricingMdPage;
