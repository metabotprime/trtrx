import { ReactNode } from "react";
import Link from "next/link";
import { INTAKE_ENABLED, LAUNCH_MESSAGE, LAUNCH_PATH } from "@/content/launch";
import { Navigation } from "./Navigation";
import { Footer } from "./Footer";
import { StickyMobileCTA } from "./StickyMobileCTA";

type PageShellProps = {
  children: ReactNode;
  /** Hide the mobile sticky CTA (e.g. on /contact). */
  hideMobileCTA?: boolean;
};

export function PageShell({ children, hideMobileCTA }: PageShellProps) {
  return (
    <div className="flex min-h-screen flex-col bg-surface">
      <Navigation />
      <main id="main-content" className="flex-1 pt-[68px]">
        {!INTAKE_ENABLED && (
          <div className="border-y border-border bg-surface-alt px-5 py-3 text-center text-sm text-primary">
            {LAUNCH_MESSAGE}{" "}
            <Link
              href={LAUNCH_PATH}
              className="font-semibold underline underline-offset-4"
            >
              Launch status
            </Link>
          </div>
        )}
        {children}
      </main>
      <Footer />
      {!hideMobileCTA && <StickyMobileCTA />}
    </div>
  );
}
