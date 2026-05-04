import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const SITE_URL = 'https://trtrx.com';
export const SITE_NAME = 'trtrx';
export const SITE_TAGLINE = 'Doctor-supervised testosterone therapy.';
