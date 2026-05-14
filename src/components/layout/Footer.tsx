import Link from 'next/link';
import { Logo } from './Logo';
import { TREATMENT_SLUGS } from '@/lib/seo/routes';

const FOOTER_GROUPS = [
  {
    label: 'Treatments',
    links: [
      { label: 'Cypionate', href: '/treatments/cypionate' },
      { label: 'Enanthate', href: '/treatments/enanthate' },
      { label: 'Enclomiphene', href: '/treatments/enclomiphene' },
      { label: 'HCG', href: '/treatments/hcg' },
      { label: 'Cream', href: '/treatments/cream' },
      { label: 'Compare all', href: '/treatments' },
    ],
  },
  {
    label: 'Resources',
    links: [
      { label: 'How It Works', href: '/how-it-works' },
      { label: 'Pricing', href: '/pricing' },
      { label: 'FAQ', href: '/faq' },
    ],
  },
  {
    label: 'Company',
    links: [
      { label: 'About', href: '/about' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  {
    label: 'Legal',
    links: [
      { label: 'Privacy', href: '/privacy' },
      { label: 'Terms', href: '/terms' },
      { label: 'Accessibility', href: '/accessibility' },
      { label: 'Medical disclaimer', href: '/medical-disclaimer' },
    ],
  },
];

const TRUST_ITEMS = [
  'MD-led',
  'Quest',
  'Labcorp',
  'FSA-eligible',
  '60-day guarantee',
];

// PRELAUNCH: replace `sealId` with the real LegitScript Healthcare Merchant
// certification ID once trtrx receives it. Until then the placeholder block
// reads "verification pending" so we don't falsely claim certification.
const LEGITSCRIPT = {
  sealId: '' as string,
  verifyUrl: 'https://www.legitscript.com/websites/?checker_keywords=trtrx.com',
};

type PaymentMethod = {
  name: string;
  bg: string;
  content: React.ReactNode;
};

const PAYMENT_METHODS: PaymentMethod[] = [
  {
    name: 'Visa',
    bg: 'bg-[#1A1F71]',
    content: <span className="text-[10px] font-bold italic text-white">VISA</span>,
  },
  {
    name: 'Mastercard',
    bg: 'bg-[#2D2D2D]',
    content: (
      <div className="flex -space-x-1">
        <span className="block h-3 w-3 rounded-full bg-[#EB001B]" />
        <span className="block h-3 w-3 rounded-full bg-[#F79E1B]/80" />
      </div>
    ),
  },
  {
    name: 'Amex',
    bg: 'bg-[#2E77BC]',
    content: <span className="text-[7px] font-bold leading-tight text-white">AMEX</span>,
  },
  {
    name: 'Discover',
    bg: 'bg-white',
    content: <span className="text-[7px] font-bold text-[#231F20]">DISCOVER</span>,
  },
  {
    name: 'HSA / FSA',
    bg: 'bg-[#0E3B6C]',
    content: <span className="text-[8px] font-bold tracking-tight text-white">HSA</span>,
  },
  {
    name: 'Apple Pay',
    bg: 'bg-white',
    content: <span className="text-[8px] font-semibold text-black">Pay</span>,
  },
  {
    name: 'Link',
    bg: 'bg-[#00D66F]',
    content: <span className="text-[8px] font-bold text-[#0D0D0D]">link</span>,
  },
];

export function Footer() {
  // Sanity check the registry — surface dropped slugs as a build hint
  void TREATMENT_SLUGS;

  return (
    <footer className="bg-primary text-surface">
      <div className="container">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 border-b border-surface/12 py-7 text-eyebrow uppercase tracking-tracked text-surface/70">
          {TRUST_ITEMS.map((item, i) => (
            <span key={item} className="inline-flex items-center gap-8">
              {item}
              {i < TRUST_ITEMS.length - 1 && (
                <span aria-hidden className="hidden h-1 w-1 rounded-full bg-surface/30 md:inline-block" />
              )}
            </span>
          ))}
        </div>

        <div className="grid gap-12 py-16 md:grid-cols-12">
          <div className="md:col-span-4">
            <Logo tone="on-dark" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-surface/70">
              Doctor-supervised testosterone therapy with transparent pricing and same-day shipping.
            </p>

            {/* LegitScript verification */}
            {LEGITSCRIPT.sealId ? (
              <a
                href={LEGITSCRIPT.verifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                title="Verify LegitScript Approval for www.trtrx.com"
                className="mt-5 inline-block"
              >
                <img
                  src={`https://static.legitscript.com/seals/${LEGITSCRIPT.sealId}.png`}
                  alt="Verify LegitScript Approval for www.trtrx.com"
                  width={73}
                  height={79}
                  loading="lazy"
                  decoding="async"
                />
              </a>
            ) : (
              <div
                className="mt-5 flex h-[79px] w-[73px] flex-col items-center justify-center rounded-md border border-surface/20 px-2 text-center"
                aria-label="LegitScript verification — pending pre-launch certification"
                title="LegitScript verification — pending"
              >
                <span className="font-mono text-[8px] font-bold uppercase tracking-tracked text-accent">
                  LegitScript
                </span>
                <span className="mt-1 text-[8px] leading-tight text-surface/60">
                  verification pending
                </span>
              </div>
            )}

            {/* Payment methods accepted */}
            <div className="mt-5 flex flex-wrap items-center gap-1.5">
              {PAYMENT_METHODS.map((method) => (
                <div
                  key={method.name}
                  className={`${method.bg} flex h-5 w-8 items-center justify-center rounded-[4px]`}
                  title={method.name}
                  aria-label={method.name}
                >
                  {method.content}
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 md:col-span-8 md:grid-cols-4">
            {FOOTER_GROUPS.map((group) => (
              <div key={group.label}>
                <h3 className="text-eyebrow uppercase tracking-tracked text-surface/55">
                  {group.label}
                </h3>
                <ul className="mt-4 space-y-3">
                  {group.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm text-surface/85 transition-colors hover:text-accent"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-surface/12 py-6 text-xs text-surface/55 md:flex-row md:items-center md:justify-between">
          <p>© 2026 trtrx · All rights reserved.</p>
          <p className="max-w-xl md:text-right">
            Information on this site is for educational purposes and is not a substitute for advice from a licensed clinician.
          </p>
        </div>
      </div>
    </footer>
  );
}
