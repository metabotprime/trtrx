import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

/**
 * Edge middleware blocks parasitic SEO scrapers and pen-test bots.
 * Saves bandwidth and stops competitors profiling our keyword set.
 *
 * AI engines (GPTBot, ClaudeBot, PerplexityBot, etc.) are explicitly
 * allowed via robots.txt and not blocked here.
 */
const BLOCKED_AGENTS = [
  // SEO scrapers
  'AhrefsBot',
  'SemrushBot',
  'MJ12bot',
  'DotBot',
  'DataForSeoBot',
  'BLEXBot',
  'MegaIndex',
  'Mauibot',
  'PetalBot',
  // Pen-test / vulnerability scanners
  'ZmEu',
  'masscan',
  'nmap',
  'sqlmap',
  'nikto',
];

export const config = {
  matcher: [
    /*
     * Match all paths except:
     * - _next/static (static files)
     * - _next/image (image optimization)
     * - favicon, robots.txt, sitemap.xml, llms.txt, llms-full.txt
     */
    '/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|llms.txt|llms-full.txt).*)',
  ],
};

export function middleware(req: NextRequest) {
  const ua = req.headers.get('user-agent') ?? '';
  if (BLOCKED_AGENTS.some((agent) => ua.toLowerCase().includes(agent.toLowerCase()))) {
    return new NextResponse('Forbidden', { status: 403 });
  }
  return NextResponse.next();
}
