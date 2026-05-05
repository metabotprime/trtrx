/**
 * Defer non-critical third-party scripts.
 * Runs `callback` after `delayMs` AND after `requestIdleCallback` (when available).
 * Returns a cleanup function that cancels the deferred work if called before it runs.
 *
 * Use for embeds: TikTok, Instagram, Twitter widgets, GTM, etc.
 * Skip for analytics that need page-load data (those should run inline).
 *
 * No callsites yet — kept ready for when 3rd-party embeds land.
 */
export function deferScripts(callback: () => void, delayMs = 3000): () => void {
  if (typeof window === 'undefined') {
    // Server-side: never run.
    return () => undefined;
  }

  let cancelled = false;
  let timeoutId: ReturnType<typeof setTimeout> | undefined;
  let idleId: number | undefined;

  const run = () => {
    if (cancelled) return;
    callback();
  };

  timeoutId = setTimeout(() => {
    if (typeof window.requestIdleCallback === 'function') {
      idleId = window.requestIdleCallback(run, { timeout: 1000 });
    } else {
      run();
    }
  }, delayMs);

  return () => {
    cancelled = true;
    if (timeoutId) clearTimeout(timeoutId);
    if (typeof idleId === 'number' && typeof window.cancelIdleCallback === 'function') {
      window.cancelIdleCallback(idleId);
    }
  };
}
