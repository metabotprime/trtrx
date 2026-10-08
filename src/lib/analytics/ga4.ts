/** GA4 owns its queue, cookies and route gate; existing analytics stay independent. */
export const GA4_MEASUREMENT_ID = 'G-JJY4SBLEFS';
export const GA4_DATA_LAYER = 'trtrxGa4Layer';

// Only the current operational launch pages are eligible. Clinical release must
// have its own measurement review before this list is expanded.
const PUBLIC_PATHS = new Set([
  '/', '/how-it-works', '/pricing', '/about', '/faq', '/blog',
  '/trt-in-your-state', '/blog/category/pricing', '/blog/how-trt-pricing-works',
  '/contact', '/privacy', '/terms', '/accessibility', '/medical-disclaimer',
  '/editorial-policy', '/medical-review-policy',
]);

export function publicGa4Url(value: string): string | null {
  try {
    const url = new URL(value);
    if (url.origin !== 'https://trtrx.com' || url.username || url.password || !PUBLIC_PATHS.has(url.pathname)) return null;
    return `${url.origin}${url.pathname}`;
  } catch {
    return null;
  }
}

export function publicGa4Referrer(value: string): string {
  try {
    const url = new URL(value);
    if (!['https:', 'http:'].includes(url.protocol)) return '';
    // External referral paths can also contain identifiers or health details.
    return url.origin === 'https://trtrx.com' ? (publicGa4Url(value) ?? '') : `${url.origin}/`;
  } catch {
    return '';
  }
}

type Ga4Environment = {
  measurementId: string;
  referrer: string;
  push: (...command: unknown[]) => void;
  setDisabled: (disabled: boolean) => void;
  loadScript: () => void;
};

export function createGa4Controller(environment: Ga4Environment) {
  let initialized = false;
  let lastViewed: string | null = null;
  let previousPublicUrl: string | null = null;

  function suspend() {
    environment.setDisabled(true);
  }

  function view(value: string) {
    const url = publicGa4Url(value);
    if (!url || !/^G-[A-Z0-9]+$/.test(environment.measurementId)) {
      suspend();
      lastViewed = null;
      return;
    }

    const referrer = previousPublicUrl ?? publicGa4Referrer(environment.referrer);
    // This is a stream-scoped configuration, never a shared global gtag set.
    const configuration = {
      send_page_view: false,
      page_location: url,
      page_referrer: referrer,
      page_title: 'TRTrx',
      allow_google_signals: false,
      allow_ad_personalization_signals: false,
      cookie_prefix: 'trtrx_ga4',
      cookie_domain: 'trtrx.com',
      cookie_flags: 'SameSite=Lax;Secure',
    };
    if (!initialized) environment.push('js', new Date());
    environment.push('config', environment.measurementId, configuration);
    environment.setDisabled(false);

    if (lastViewed !== url) {
      environment.push('event', 'page_view', {
        send_to: environment.measurementId,
        page_location: url,
        page_referrer: referrer,
        page_title: 'TRTrx',
      });
      lastViewed = url;
      previousPublicUrl = url;
    }
    if (!initialized) {
      initialized = true;
      environment.loadScript();
    }
  }

  return { suspend, view };
}

let browserController: ReturnType<typeof createGa4Controller> | null = null;

export function getBrowserGa4Controller() {
  if (typeof window === 'undefined' || !/^G-[A-Z0-9]+$/.test(GA4_MEASUREMENT_ID)) return null;
  if (browserController) return browserController;
  const ga4Window = window as unknown as Window & { trtrxGa4Layer?: IArguments[]; [key: string]: unknown };
  ga4Window.trtrxGa4Layer ??= [];
  browserController = createGa4Controller({
    measurementId: GA4_MEASUREMENT_ID,
    referrer: document.referrer,
    push: function () { ga4Window.trtrxGa4Layer!.push(arguments); },
    setDisabled: (disabled) => { ga4Window[`ga-disable-${GA4_MEASUREMENT_ID}`] = disabled; },
    loadScript: () => {
      if (document.getElementById('trtrx-ga4-tag')) return;
      const script = document.createElement('script');
      script.id = 'trtrx-ga4-tag';
      script.async = true;
      script.referrerPolicy = 'no-referrer';
      script.src = `https://www.googletagmanager.com/gtag/js?id=${GA4_MEASUREMENT_ID}&l=${GA4_DATA_LAYER}`;
      document.head.appendChild(script);
    },
  });
  return browserController;
}
