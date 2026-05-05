import { useEffect } from 'react';
import { onCLS, onINP, onLCP, type Metric } from 'web-vitals';

type Reporter = (metric: Metric) => void;

const defaultReporter: Reporter = (metric) => {
  // In dev, log to console for fast feedback.
  // In production, this is the seam where Vercel Analytics or a custom
  // endpoint hooks in. Kept as a one-liner so swapping providers is trivial.
  if (process.env.NODE_ENV !== 'production') {
    console.log(`[web-vitals] ${metric.name}`, metric.value, metric);
  }
};

/**
 * Reports Core Web Vitals (LCP, CLS, INP) once per page lifecycle.
 * Wire this into _app.tsx so it runs on every route.
 */
export function usePagePerformance(reporter: Reporter = defaultReporter) {
  useEffect(() => {
    onCLS(reporter);
    onINP(reporter);
    onLCP(reporter);
  }, [reporter]);
}
