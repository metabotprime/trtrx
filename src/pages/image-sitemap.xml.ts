import type { GetServerSideProps } from 'next';
import { SITE_URL } from '@/lib/utils';
import { TREATMENTS } from '@/content/treatments';

const escapeXml = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

// Branded share images are generated on the fly by /api/og — these are the
// only real, crawlable images the site exposes (the rest of the visual
// system is inline SVG), so the image sitemap points at them.
const ogFor = (title: string) =>
  `${SITE_URL}/api/og?title=${encodeURIComponent(title)}`;

function buildImageSitemap(): string {
  const entries = [
    {
      pageUrl: `${SITE_URL}/`,
      images: [
        { loc: ogFor('Doctor-supervised testosterone therapy'), title: 'trtrx — Doctor-supervised testosterone therapy' },
      ],
    },
    {
      pageUrl: `${SITE_URL}/treatments`,
      images: [{ loc: ogFor('Treatments'), title: 'trtrx Treatments' }],
    },
    {
      pageUrl: `${SITE_URL}/pricing`,
      images: [{ loc: ogFor('Pricing'), title: 'trtrx Pricing' }],
    },
    ...TREATMENTS.map((t) => ({
      pageUrl: `${SITE_URL}/treatments/${t.slug}`,
      images: [
        {
          loc: ogFor(t.name),
          title: t.name,
          caption: t.summary,
        },
      ],
    })),
  ];

  const urlBlocks = entries.map((entry) => {
    const imageBlocks = entry.images
      .map((img) => {
        const captionPart = 'caption' in img && img.caption
          ? `\n      <image:caption>${escapeXml(img.caption)}</image:caption>`
          : '';
        return `    <image:image>
      <image:loc>${escapeXml(img.loc)}</image:loc>
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
