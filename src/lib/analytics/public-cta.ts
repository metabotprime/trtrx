import { PUBLIC_CTAS } from "../../content/public-ctas";
import { publicGa4Url } from "./ga4";

const SURFACES = new Set([
  "hero", "navigation", "mobile_navigation", "mobile_sticky", "footer_band",
  "footer", "featured_guides", "article", "pricing", "contact", "email_notice",
]);

/** Fixed labels only. Reuse the existing public-page gate without extending it. */
export function publicCtaEvent(pageUrl: string, action: string, surface: string, href: string) {
  const url = publicGa4Url(pageUrl);
  if (!url || !SURFACES.has(surface) || !Object.prototype.hasOwnProperty.call(PUBLIC_CTAS, action)) return null;
  const target = PUBLIC_CTAS[action as keyof typeof PUBLIC_CTAS];
  if (href !== target.href) return null;
  return { action, surface, page_path: new URL(url).pathname };
}
