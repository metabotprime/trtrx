import { ImageResponse } from 'next/og';
import type { NextRequest } from 'next/server';

export const config = { runtime: 'edge' };

/**
 * Dynamic Open Graph / share image generator. Renders a branded 1200×630
 * card from a page title, so every page (and every future blog post) gets a
 * real share image automatically — no static asset pipeline required.
 *
 *   /api/og?title=...&eyebrow=...
 *   /api/og?variant=logo            -> square-ish wordmark for schema publisher.logo
 */

const NAVY = '#1D4173';
const GOLD = '#F9C31F';
const CREAM = '#FBFCFD';

export default function handler(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const variant = searchParams.get('variant');
  const title = (
    searchParams.get('title') || 'Doctor-supervised testosterone therapy'
  ).slice(0, 110);
  const eyebrow = (searchParams.get('eyebrow') || 'TRT, finally.').slice(0, 60);

  if (variant === 'logo') {
    return new ImageResponse(
      (
        <div
          style={{
            display: 'flex',
            width: '100%',
            height: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            background: NAVY,
          }}
        >
          <div style={{ display: 'flex', fontSize: 180, fontWeight: 800 }}>
            <span style={{ color: CREAM }}>trt</span>
            <span style={{ color: GOLD, fontStyle: 'italic' }}>rx</span>
          </div>
        </div>
      ),
      { width: 1200, height: 630 },
    );
  }

  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          height: '100%',
          background: NAVY,
          padding: 80,
          justifyContent: 'space-between',
        }}
      >
        {/* wordmark */}
        <div style={{ display: 'flex', fontSize: 46, fontWeight: 800 }}>
          <span style={{ color: CREAM }}>trt</span>
          <span style={{ color: GOLD, fontStyle: 'italic' }}>rx</span>
        </div>

        {/* title block */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div
            style={{
              display: 'flex',
              fontSize: 24,
              letterSpacing: 6,
              color: GOLD,
              marginBottom: 28,
              textTransform: 'uppercase',
            }}
          >
            {eyebrow}
          </div>
          <div
            style={{
              display: 'flex',
              fontSize: 72,
              fontWeight: 600,
              color: CREAM,
              lineHeight: 1.1,
              maxWidth: 960,
            }}
          >
            {title}
          </div>
        </div>

        {/* footer accent */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <div style={{ display: 'flex', height: 6, width: 132, background: GOLD }} />
          <div style={{ display: 'flex', fontSize: 28, color: 'rgba(251,252,253,0.72)' }}>
            trtrx.com
          </div>
        </div>
      </div>
    ),
    { width: 1200, height: 630 },
  );
}
