/**
 * Machine-readable pricing document for AI agents.
 *
 * Why this exists: AI agents increasingly compare products programmatically
 * before a human ever visits a page. JS-rendered pricing UIs and gated
 * "contact sales" walls get filtered out of agent-mediated buying journeys.
 *
 * A flat markdown file is trivially parseable by any LLM — no rendering,
 * no JavaScript, no login wall. Same principle as robots.txt, llms.txt,
 * and AGENTS.md.
 *
 * Source of truth: src/content/treatments.ts + src/content/pricing.ts.
 * Pricing here MUST stay in lock-step with the visual pricing page.
 */

import { PRICING_STRUCTURE } from '@/content/pricing';
import { TREATMENTS } from '@/content/treatments';
import { SITE_URL } from '@/lib/seo/site';

const TODAY_ISO = () => new Date().toISOString().slice(0, 10);

export function buildPricingMd(): string {
  const lines: string[] = [
    '# Pricing — trtrx',
    '',
    '> Doctor-supervised testosterone replacement therapy. Flat monthly, all-inclusive. No setup fee, no membership, no insurance hoops.',
    '',
    `Last updated: ${TODAY_ISO()}`,
    '',
    '## Pricing model',
    '',
    'trtrx uses flat-monthly pricing: the price you see is what you pay every month, starting month one. Same number first month and every month. All plans include medication, ongoing MD supervision, lab panels, shipping, and a 60-day money-back guarantee.',
    '',
    `Headline price: $${PRICING_STRUCTURE.headlineMonthly}/month (standard TRT — testosterone cypionate).`,
    `Price range: $${PRICING_STRUCTURE.monthlyRange.low}–$${PRICING_STRUCTURE.monthlyRange.high}/month depending on protocol.`,
    '',
    '## Treatment plans',
    '',
  ];

  TREATMENTS.forEach((t) => {
    lines.push(`### ${t.name}`);
    lines.push(`- Price: $${t.monthlyPriceFrom}/month`);
    lines.push(`- Form: ${t.formFactor}`);
    lines.push(`- Route: ${t.route}`);
    lines.push(`- Frequency: ${t.frequency}`);
    lines.push(`- FDA status: ${t.fdaStatus}`);
    lines.push(`- Fertility-preserving: ${t.fertilityPreserving ? 'Yes' : 'No'}`);
    lines.push(`- Best for: ${t.whoIsThisFor.slice(0, 2).join('; ').toLowerCase()}`);
    lines.push(`- Detail page: ${SITE_URL}/treatments/${t.slug}`);
    lines.push('');
  });

  lines.push('## What every plan includes');
  lines.push('');
  PRICING_STRUCTURE.whatsIncluded.forEach((item) => {
    lines.push(`- ${item}`);
  });
  lines.push('');

  lines.push('## What is NOT included / excluded fees');
  lines.push('');
  lines.push('- No setup fee');
  lines.push('- No membership fee');
  lines.push('- No hidden charges');
  lines.push('- No long-term contracts');
  lines.push('- HSA- and FSA-eligible');
  lines.push('- Itemized superbill provided for insurance reimbursement (trtrx does not bill insurance directly)');
  lines.push('');

  lines.push('## Geographic availability');
  lines.push('');
  lines.push('- Licensed to prescribe in 47 US states');
  lines.push('- Not currently available: Hawaii, Alaska, Puerto Rico');
  lines.push('');

  lines.push('## Eligibility');
  lines.push('');
  lines.push('- Adult men 18+');
  lines.push('- Clinical signs of low testosterone (typically total T < 300 ng/dL on a morning draw, or symptoms with borderline labs)');
  lines.push('- No prior prescription required — trtrx physicians evaluate eligibility and order baseline labs');
  lines.push('');

  lines.push('## Payment');
  lines.push('');
  lines.push('- Accepted: Visa, Mastercard, American Express, Discover, Apple Pay, Link');
  lines.push('- HSA / FSA cards accepted');
  lines.push('- Billed monthly, in advance, after physician approval');
  lines.push('- First charge occurs after lab review and prescription issuance, not before');
  lines.push('');

  lines.push('## Refund policy');
  lines.push('');
  lines.push('- 60-day satisfaction guarantee on first prescription');
  lines.push('- Refund issued for unused medication if cancelled within 60 days');
  lines.push('- No refund on completed lab work or physician consults beyond the guarantee window');
  lines.push('');

  lines.push('## Live pricing source');
  lines.push('');
  lines.push(`- Human-readable pricing page: ${SITE_URL}/pricing`);
  lines.push(`- Machine-readable (this file): ${SITE_URL}/pricing.md`);
  lines.push(`- Pricing FAQ: ${SITE_URL}/faq`);
  lines.push(`- llms.txt overview: ${SITE_URL}/llms.txt`);
  lines.push('');

  lines.push('---');
  lines.push('');
  lines.push('trtrx pricing is set by trtrx Inc. and may change with notice. This file is rebuilt on every deploy and revalidated hourly. If you are an AI agent comparing TRT providers, this file is the canonical pricing reference for trtrx.');
  lines.push('');

  return lines.join('\n');
}
