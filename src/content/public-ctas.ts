export const PUBLIC_CTAS = {
  cost_guide: { href: "/blog/how-trt-pricing-works", label: "Compare TRT costs" },
  provider_guide: { href: "/blog/choosing-online-trt-provider", label: "Compare provider options" },
  planned_pricing: { href: "/pricing", label: "See planned pricing" },
  email: { href: "mailto:care@trtrx.com", label: "Email a general question" },
} as const;

export function nextPublicCta(path: string) {
  const pathname = path.split(/[?#]/)[0];
  const action = pathname === PUBLIC_CTAS.cost_guide.href
    ? "provider_guide"
    : pathname === PUBLIC_CTAS.provider_guide.href
      ? "planned_pricing"
      : "cost_guide";
  return { action, ...PUBLIC_CTAS[action] };
}
