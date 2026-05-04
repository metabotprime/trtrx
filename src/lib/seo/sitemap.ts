import { ROUTES } from './routes';
import { SITE_URL } from '@/lib/utils';

export function buildSitemapXml(): string {
  const today = new Date().toISOString().split('T')[0];
  const urls = ROUTES.filter((r) => r.inSitemap)
    .map(
      (r) => `  <url>
    <loc>${SITE_URL}${r.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${r.changeFreq}</changefreq>
    <priority>${r.priority.toFixed(2)}</priority>
  </url>`,
    )
    .join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;
}
