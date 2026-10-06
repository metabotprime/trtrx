import { Check } from "lucide-react";
import { PRICING_STRUCTURE } from "@/content/pricing";
import { formatUSD } from "@/lib/utils";
import { SectionHeader } from "./SectionHeader";

export function PricingBreakdown() {
  const { monthlyTiers, whatsIncluded, headlineMonthly } = PRICING_STRUCTURE;
  const lowestTier = Math.min(
    ...monthlyTiers
      .filter((t) => t.productSlug !== "hcg")
      .map((t) => t.monthlyPrice),
  );
  const highestTier = Math.max(...monthlyTiers.map((t) => t.monthlyPrice));
  const annualLow = lowestTier * 12;
  const annualHigh = highestTier * 12;
  const headlineAnnual = headlineMonthly * 12;

  return (
    <section className="bg-surface-alt">
      <div className="container py-20 md:py-28">
        <SectionHeader
          eyebrow="The Math"
          title="One number. *Every month.*"
          subtitle="Planning figures only. Standalone plans are $179–$219 per month; HCG is an additional $89 with a base TRT plan. No service is available to purchase."
          align="center"
        />

        <div className="mx-auto mt-14 grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-2 md:gap-7">
          {/* Monthly */}
          <article className="flex flex-col rounded-2xl border border-border bg-surface p-8">
            <p className="font-mono text-[11px] uppercase tracking-tracked text-accent-strong">
              Planned monthly
            </p>
            <p
              className="mt-3 font-serif text-5xl font-medium text-primary"
              style={{ fontVariationSettings: "'opsz' 144" }}
            >
              {formatUSD(lowestTier)}–{formatUSD(highestTier)}
            </p>
            <p className="mt-1 text-xs text-muted">
              Depends on your protocol. Anchor: {formatUSD(headlineMonthly)}/mo
              for standard TRT.
            </p>
            <hr className="my-6 border-border" />
            <ul className="space-y-3 text-sm text-text">
              {whatsIncluded.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Check
                    size={16}
                    strokeWidth={2.5}
                    className="mt-[3px] shrink-0 text-accent-strong"
                    aria-hidden
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>

          {/* Planned year one */}
          <article className="flex flex-col rounded-2xl border border-border bg-surface p-8">
            <p className="font-mono text-[11px] uppercase tracking-tracked text-accent-strong">
              Planned year one
            </p>
            <p
              className="mt-3 font-serif text-5xl font-medium text-primary"
              style={{ fontVariationSettings: "'opsz' 144" }}
            >
              {formatUSD(annualLow)}–{formatUSD(annualHigh)}
            </p>
            <p className="mt-1 text-xs text-muted">
              Twelve months × your monthly tier. Standard TRT:{" "}
              {formatUSD(headlineAnnual)}/yr.
            </p>
            <hr className="my-6 border-border" />
            <ul className="space-y-3 font-mono text-sm text-text">
              {monthlyTiers.map((tier) => (
                <li
                  key={tier.productSlug}
                  className="flex items-baseline justify-between gap-3"
                >
                  <span className="text-muted">{tier.productName}</span>
                  <span className="tabular-nums">
                    {tier.productSlug === "hcg" ? "+" : ""}
                    {formatUSD(tier.monthlyPrice * 12)}
                  </span>
                </li>
              ))}
            </ul>
          </article>
        </div>

        <p className="mx-auto mt-10 max-w-md text-center text-sm leading-relaxed text-muted">
          The planned model has no setup fee and allows cancellation. Final
          billing, pharmacy and clinical terms remain to be confirmed.
        </p>
      </div>
    </section>
  );
}
