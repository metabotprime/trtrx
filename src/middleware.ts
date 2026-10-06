import { NextResponse } from 'next/server';
import { isPublicIndexingAllowed } from './content/launch';
import type { NextRequest } from 'next/server';

/**
 * Keep this file beside src/pages so Next.js includes it in the build.
 *
 * Edge middleware blocks parasitic SEO scrapers and pen-test bots.
 *
 * AI engines (GPTBot, ClaudeBot, PerplexityBot, etc.) are explicitly
 * allowed via robots.txt and not blocked here.
 */
const BLOCKED_AGENTS = [
  // SEO scrapers
  'ahrefsbot',
  'semrushbot',
  'mj12bot',
  'dotbot',
  'dataforseobot',
  'blexbot',
  'megaindex',
  'mauibot',
  'petalbot',
  // Pen-test / vulnerability scanners
  'zmeu',
  'masscan',
  'nmap',
  'sqlmap',
  'nikto',
];

export const config = {
  matcher: '/((?!_next/static|_next/image|favicon.ico).*)',
};

export function middleware(req: NextRequest) {
  const ua = (req.headers.get('user-agent') ?? '').toLowerCase();
  for (const agent of BLOCKED_AGENTS) {
    if (ua.includes(agent)) {
      return new NextResponse('Forbidden', { status: 403 });
    }
  }
  const response = NextResponse.next();
  // Use the requested host, not the bind address used by a self-hosted server.
  const hostname = req.headers.get('host') ?? req.nextUrl.hostname;
  if (!isPublicIndexingAllowed(hostname)) {
    response.headers.set('X-Robots-Tag', 'noindex, follow');
  }
  return response;
}
