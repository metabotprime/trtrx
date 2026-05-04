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
  'Quest',
  'Labcorp',
  'FSA-eligible',
  '30-day guarantee',
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
