import { ReactNode } from 'react';
import { Navigation } from './Navigation';
import { Footer } from './Footer';
import { StickyMobileCTA } from './StickyMobileCTA';

type PageShellProps = {
  children: ReactNode;
  /** Hide the mobile sticky CTA (e.g. on /contact). */
  hideMobileCTA?: boolean;
};

export function PageShell({ children, hideMobileCTA }: PageShellProps) {
  return (
    <div className="flex min-h-screen flex-col bg-surface">
      <Navigation />
      <main className="flex-1 pt-[68px]">{children}</main>
      <Footer />
      {!hideMobileCTA && <StickyMobileCTA />}
    </div>
  );
}
