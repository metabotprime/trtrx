import { WORDMARK } from '@/lib/brand/wordmark';

type Props = {
  tone?: 'on-light' | 'on-dark';
  height?: number;
  animated?: boolean;
};

/** Shared outlined artwork: no font request, raster scaling, or layout shift. */
export function Wordmark({ tone = 'on-light', height = 32, animated = false }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={`0 0 ${WORDMARK.width} ${WORDMARK.height}`}
      width={(height * WORDMARK.width) / WORDMARK.height}
      height={height}
      className={animated ? 'wordmark-entrance' : undefined}
      aria-hidden="true"
      focusable="false"
    >
      <path className={animated ? 'wordmark-trt' : undefined} fill={tone === 'on-dark' ? '#FBFCFD' : '#1D4173'} d={WORDMARK.trt} />
      <path className={animated ? 'wordmark-rx' : undefined} fill="#F9C31F" d={WORDMARK.rx} />
    </svg>
  );
}
