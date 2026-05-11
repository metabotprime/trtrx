export const SITE_URL = 'https://trtrx.com';
export const SITE_NAME = 'trtrx';
export const SITE_TAGLINE = 'Doctor-supervised testosterone therapy.';
export const SITE_DESCRIPTION =
  'Doctor-supervised testosterone replacement therapy with transparent pricing and same-day shipping. Five evidence-based options, flat $219/mo all-inclusive, MD-led care, 60-day satisfaction guarantee.';
export const DEFAULT_OG_IMAGE = `${SITE_URL}/og/default.png`;
export const TITLE_SUFFIX = ` | ${SITE_NAME}`;

export const SITE_CONTACT_EMAIL = 'hello@trtrx.com';
// PRELAUNCH: real support phone provisioned with the contact mailbox.
export const SITE_CONTACT_PHONE = '';
export const SITE_CONTACT_PHONE_DISPLAY = '';

// PRELAUNCH: social profiles provisioned at launch; arrays kept stable for schema consumers.
export const INSTAGRAM_URL = '';
export const FACEBOOK_URL = '';
export const TIKTOK_URL = '';
export const X_URL = '';
export const TRUSTPILOT_URL = '';
export const SITE_SOCIAL_PROFILES = [
  INSTAGRAM_URL,
  FACEBOOK_URL,
  TIKTOK_URL,
  X_URL,
  TRUSTPILOT_URL,
].filter(Boolean) as string[];

// PRELAUNCH: editorial + medical review policies drafted with lawyer-reviewed legal copy.
export const EDITORIAL_POLICY_URL = `${SITE_URL}/editorial-policy`;
export const MEDICAL_REVIEW_POLICY_URL = `${SITE_URL}/medical-review-policy`;

export function normalizePath(path: string): string {
  if (!path) return '/';
  if (path.startsWith('http://') || path.startsWith('https://')) return path;
  const pathname = path.startsWith('/') ? path : `/${path}`;
  return pathname !== '/' && pathname.endsWith('/') ? pathname.slice(0, -1) : pathname;
}

export function toAbsoluteUrl(path: string): string {
  if (!path) return SITE_URL;
  if (path.startsWith('http://') || path.startsWith('https://')) return path;
  const normalized = normalizePath(path);
  return normalized === '/' ? SITE_URL : `${SITE_URL}${normalized}`;
}

export function formatSeoTitle(title: string): string {
  const trimmed = title.trim();
  if (!trimmed) return SITE_NAME;
  return /trtrx/i.test(trimmed) ? trimmed : `${trimmed}${TITLE_SUFFIX}`;
}
