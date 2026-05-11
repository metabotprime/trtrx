import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export { SITE_URL, SITE_NAME, SITE_TAGLINE } from './seo/site';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatUSD(n: number): string {
  return `$${n.toLocaleString('en-US')}`;
}
