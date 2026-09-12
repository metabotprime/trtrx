import { WORDMARK } from '@/lib/brand/wordmark';

type Props = {
  tone?: 'on-light' | 'on-dark';
  height?: number;
};

/** Shared outlined artwork: no font request, raster scaling, or layout shift. */
export function Wordmark({ tone = 'on-light', height = 32 }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={`0 0 ${WORDMARK.width} ${WORDMARK.height}`}
      width={(height * WORDMARK.width) / WORDMARK.height}
      height={height}
      aria-hidden="true"
      focusable="false"
    >
      <path fill={tone === 'on-dark' ? '#FBFCFD' : '#1D4173'} d={WORDMARK.trt} />
      <rect
        x={WORDMARK.tile.x}
        y={WORDMARK.tile.y}
        width={WORDMARK.tile.width}
        height={WORDMARK.tile.height}
        rx={WORDMARK.tile.radius}
        fill="#F9C31F"
      />
      <path fill="#1D4173" d={WORDMARK.rx} />
    </svg>
  );
}
