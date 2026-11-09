import { type MouseEvent, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { buttonVariants } from "@/components/ui/button";
import { nextPublicCta } from "@/content/public-ctas";
import { NAV_ITEMS } from "@/lib/seo/navigation";
import { cn } from "@/lib/utils";

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const drawerRef = useRef<HTMLDialogElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const router = useRouter();
  const cta = nextPublicCta(router.asPath);

  function openMenu(event: MouseEvent<HTMLButtonElement>) {
    event.currentTarget.focus({ preventScroll: true });
    drawerRef.current?.showModal();
    closeButtonRef.current?.focus();
    setDrawerOpen(true);
  }

  function closeMenu() {
    drawerRef.current?.close();
  }

  useEffect(() => {
    function onScroll() {
      const y = window.scrollY;
      setScrolled(y > 80);
      const max = document.body.scrollHeight - window.innerHeight;
      setScrollProgress(max > 0 ? Math.min(1, y / max) : 0);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    closeMenu();
  }, [router.asPath]);

  useEffect(() => {
    if (!drawerOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const desktop = window.matchMedia("(min-width: 1024px)");
    const onDesktop = () => {
      if (desktop.matches) closeMenu();
    };
    onDesktop();
    desktop.addEventListener("change", onDesktop);
    return () => {
      document.body.style.overflow = previousOverflow;
      desktop.removeEventListener("change", onDesktop);
    };
  }, [drawerOpen]);

  return (
    <>
      <a
        href="#main-content"
        className="sr-only fixed left-4 top-4 z-50 rounded bg-surface p-3 text-primary focus:not-sr-only"
      >
        Skip to content
      </a>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-40 transition-all duration-200",
          scrolled
            ? "border-b border-border bg-surface/80 backdrop-blur-md"
            : "bg-transparent",
        )}
      >
        {/* hairline scroll progress */}
        <div
          aria-hidden
          className="absolute inset-x-0 top-0 h-px origin-left bg-accent transition-transform duration-150"
          style={{ transform: `scaleX(${scrollProgress})` }}
        />

        <div className="container flex h-[68px] items-center justify-between">
          <Logo />

          <nav className="hidden items-center gap-5 lg:flex">
            {NAV_ITEMS.map((item) => {
              const active =
                router.pathname === item.href ||
                router.pathname.startsWith(`${item.href}/`);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "relative text-sm font-medium tracking-tight text-primary transition-colors hover:text-accent-strong",
                    active && "text-accent-strong",
                  )}
                >
                  {item.label}
                  <span
                    aria-hidden
                    className={cn(
                      "absolute -bottom-1.5 left-0 right-0 h-px origin-left scale-x-0 bg-accent transition-transform duration-200",
                      active && "scale-x-100",
                    )}
                  />
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-6 lg:flex">
            <Link
              href="/launch"
              className="text-sm font-medium tracking-tight text-primary transition-colors hover:text-accent-strong"
            >
              Intake not open
            </Link>
            <Link href={cta.href} data-trtrx-cta={cta.action} data-trtrx-surface="navigation" className={buttonVariants({ size: "sm" })}>
              {cta.label}
            </Link>
          </div>

          <button
            type="button"
            aria-label="Open menu"
            aria-controls="mobile-navigation"
            aria-expanded={drawerOpen}
            aria-haspopup="dialog"
            onClick={openMenu}
            className="-mr-2 inline-flex h-10 w-10 items-center justify-center rounded-full text-primary lg:hidden"
          >
            <Menu size={22} />
          </button>
        </div>
      </header>

      <dialog
        id="mobile-navigation"
        ref={drawerRef}
        aria-label="Site menu"
        onClose={() => setDrawerOpen(false)}
        onClick={(event) => {
          if (event.target instanceof Element && event.target.closest("a[href]")) closeMenu();
        }}
        className="fixed inset-0 m-0 h-full max-h-none w-full max-w-none overflow-y-auto overscroll-contain bg-surface text-text"
      >
        <div className="flex min-h-full flex-col">
          <div className="sticky top-0 z-10 bg-surface">
            <div className="container flex h-[68px] items-center justify-between">
              <Logo />
              <button
                ref={closeButtonRef}
                type="button"
                aria-label="Close menu"
                onClick={closeMenu}
                className="-mr-2 inline-flex h-10 w-10 items-center justify-center rounded-full text-primary"
              >
                <X size={22} />
              </button>
            </div>
          </div>
          <nav aria-label="Mobile" className="flex flex-1 flex-col px-6 pb-12 pt-5">
            <ul className="flex flex-col">
              {NAV_ITEMS.map((item) => (
                <li key={item.href} className="border-b border-border">
                  <Link
                    href={item.href}
                    className="flex items-center justify-between py-5 font-serif text-2xl text-primary"
                  >
                    {item.label}
                    <span className="font-sans text-eyebrow uppercase tracking-tracked text-muted">
                      →
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-auto space-y-3">
              <Link
                href={cta.href}
                data-trtrx-cta={cta.action}
                data-trtrx-surface="mobile_navigation"
                className={buttonVariants({ size: "lg", className: "w-full" })}
              >
                {cta.label}
              </Link>
              <Link
                href="/launch"
                className="block text-center text-sm font-medium text-primary underline-offset-4 transition-colors hover:text-accent-strong"
              >
                Intake not open
              </Link>
            </div>
          </nav>
        </div>
      </dialog>
    </>
  );
}
