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
      <rect x="50.2" y="0" width="49.2" height="31.6" rx="3.2" fill="#F9C31F" />
      <path fill="#1D4173" d={WORDMARK.rx} />
    </svg>
  );
}
