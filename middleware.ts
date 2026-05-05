import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

/**
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

export function middleware(req: NextRequest) {
  const ua = (req.headers.get('user-agent') ?? '').toLowerCase();
  for (const agent of BLOCKED_AGENTS) {
    if (ua.includes(agent)) {
      return new NextResponse('Forbidden', { status: 403 });
    }
  }
  return NextResponse.next();
}
