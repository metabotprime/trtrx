import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { buttonVariants } from "@/components/ui/button";
import { LAUNCH_PATH, PRIMARY_CTA_LABEL } from "@/content/launch";
import { NAV_ITEMS } from "@/lib/seo/navigation";
import { cn } from "@/lib/utils";

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const router = useRouter();

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
    setDrawerOpen(false);
  }, [router.asPath]);

  useEffect(() => {
    document.body.style.overflow = drawerOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [drawerOpen]);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setDrawerOpen(false);
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

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
            <Link href={LAUNCH_PATH} className={buttonVariants({ size: "sm" })}>
              {PRIMARY_CTA_LABEL}
            </Link>
          </div>

          <button
            type="button"
            aria-label={drawerOpen ? "Close menu" : "Open menu"}
            aria-controls="mobile-navigation"
            aria-expanded={drawerOpen}
            onClick={() => setDrawerOpen((v) => !v)}
            className="-mr-2 inline-flex h-10 w-10 items-center justify-center rounded-full text-primary lg:hidden"
          >
            {drawerOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* mobile drawer */}
      <div
        id="mobile-navigation"
        aria-hidden={!drawerOpen}
        className={cn(
          "fixed inset-0 z-30 bg-surface transition-opacity duration-200 lg:hidden",
          drawerOpen
            ? "visible pointer-events-auto opacity-100"
            : "invisible pointer-events-none opacity-0",
        )}
      >
        <div className="flex h-full flex-col px-6 pb-12 pt-[88px]">
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
              href={LAUNCH_PATH}
              className={buttonVariants({ size: "lg", className: "w-full" })}
            >
              {PRIMARY_CTA_LABEL}
            </Link>
            <Link
              href="/launch"
              className="block text-center text-sm font-medium text-primary underline-offset-4 transition-colors hover:text-accent-strong"
            >
              Intake not open
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
