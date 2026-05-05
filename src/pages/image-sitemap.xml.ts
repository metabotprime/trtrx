import type { GetServerSideProps } from 'next';
import { SITE_URL } from '@/lib/utils';
import { TREATMENTS } from '@/content/treatments';

function buildImageSitemap(): string {
  // Each <url> entry can include multiple <image:image> children.
  // For v1 we list product macros + physician portrait + OG default.
  const entries = [
    {
      pageUrl: `${SITE_URL}/`,
      images: [
        { loc: `${SITE_URL}/og/default.png`, title: 'trtrx — Doctor-supervised testosterone therapy' },
      ],
    },
    {
      pageUrl: `${SITE_URL}/about`,
      images: [
        { loc: `${SITE_URL}/images/physician/director.jpg`, title: 'trtrx Medical Director' },
      ],
    },
    {
      pageUrl: `${SITE_URL}/treatments`,
      images: TREATMENTS.map((t) => ({
        loc: `${SITE_URL}/images/products/${t.slug}.jpg`,
        title: t.name,
        caption: t.summary,
      })),
    },
    ...TREATMENTS.map((t) => ({
      pageUrl: `${SITE_URL}/treatments/${t.slug}`,
      images: [
        {
          loc: `${SITE_URL}/images/products/${t.slug}.jpg`,
          title: t.name,
          caption: t.summary,
        },
      ],
    })),
  ];

  const escapeXml = (s: string) =>
    s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

  const urlBlocks = entries.map((entry) => {
    const imageBlocks = entry.images
      .map((img) => {
        const captionPart = 'caption' in img && img.caption
          ? `\n      <image:caption>${escapeXml(img.caption)}</image:caption>`
          : '';
        return `    <image:image>
      <image:loc>${img.loc}</image:loc>
      <image:title>${escapeXml(img.title)}</image:title>${captionPart}
    </image:image>`;
      })
      .join('\n');
    return `  <url>
    <loc>${entry.pageUrl}</loc>
${imageBlocks}
  </url>`;
  });

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${urlBlocks.join('\n')}
</urlset>`;
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const xml = buildImageSitemap();
  res.setHeader('Content-Type', 'application/xml; charset=utf-8');
  res.setHeader('Cache-Control', 'public, max-age=0, s-maxage=3600, stale-while-revalidate=86400');
  res.write(xml);
  res.end();
  return { props: {} };
};

export default function ImageSitemap() {
  return null;
}
