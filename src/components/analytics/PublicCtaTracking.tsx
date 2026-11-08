import { useEffect } from "react";
import { track } from "@vercel/analytics";
import { PUBLIC_LAUNCH_ENABLED } from "@/content/launch";
import { publicCtaEvent } from "@/lib/analytics/public-cta";

/** One delegated listener, with no cookies, global queues or navigation changes. */
export function PublicCtaTracking() {
  useEffect(() => {
    if (!PUBLIC_LAUNCH_ENABLED) return;
    function onClick(event: MouseEvent) {
      if (event.button !== 0 || !(event.target instanceof Element)) return;
      const link = event.target.closest<HTMLAnchorElement>("a[data-trtrx-cta]");
      if (!link) return;
      const data = publicCtaEvent(
        window.location.href,
        link.dataset.trtrxCta ?? "",
        link.dataset.trtrxSurface ?? "",
        link.getAttribute("href") ?? "",
      );
      if (!data) return;
      try {
        track("trtrx_cta_click", data);
      } catch {
        // A blocked or unavailable analytics provider must not break the link.
      }
    }
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);
  return null;
}
