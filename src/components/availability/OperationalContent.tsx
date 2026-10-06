import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { SEOHead } from "@/components/seo/SEOHead";
import { OrganizationSchema } from "@/components/seo/schemas/OrganizationSchema";
import { WebSiteSchema } from "@/components/seo/schemas/WebSiteSchema";
import { HeroCentered } from "@/components/sections/HeroCentered";
import { FooterCTABand } from "@/components/sections/FooterCTABand";
import { OPERATIONAL_FAQS } from "@/content/operational";
import { PRICING_STRUCTURE } from "@/content/pricing";
import { formatUSD } from "@/lib/utils";

type OperationalPageKind = "faq" | "pricing" | "about" | "how-it-works";
const PAGE_COPY = {
  faq: {
    title: "Launch questions, clear answers.",
    description:
      "Current TRTrx availability, planned pricing, accounts and publication status.",
    eyebrow: "Current availability",
  },
  pricing: {
    title: "Planned pricing. Clear expectations.",
    description:
      "TRTrx planning prices for a future service. No purchases, subscriptions or payments are available.",
    eyebrow: "Planning figures",
  },
  about: {
    title: "Building TRTrx, with clear expectations.",
    description:
      "What TRTrx is preparing, what is confirmed and what must be in place before patient intake opens.",
    eyebrow: "About TRTrx",
  },
  "how-it-works": {
    title: "What comes next.",
    description:
      "The steps still needed before TRTrx patient intake can open, and what visitors can do now.",
    eyebrow: "The launch plan",
  },
} as const;

export function OperationalFAQ({ compact = false }: { compact?: boolean }) {
  const items = compact ? OPERATIONAL_FAQS.slice(0, 4) : OPERATIONAL_FAQS;
  return (
    <section className="container py-16 md:py-20">
      <div className="mx-auto max-w-3xl">
        <h2 className="font-serif text-display-md text-primary">
          Know where <span className="display-italic">things stand.</span>
        </h2>
        <dl className="mt-8 divide-y divide-border border-y border-border">
          {items.map((item) => (
            <div key={item.question} className="py-6">
              <dt className="font-medium text-primary">{item.question}</dt>
              <dd className="mt-3 leading-relaxed text-muted">{item.answer}</dd>
            </div>
          ))}
        </dl>
        {compact && (
          <Link
            href="/faq"
            className="mt-6 inline-block text-sm font-medium text-primary underline underline-offset-4"
          >
            All launch questions
          </Link>
        )}
      </div>
    </section>
  );
}

function PlanningCards() {
  return (
    <section className="bg-surface-alt">
      <div className="container py-16 md:py-20">
        <p className="eyebrow text-center">What you can explore now</p>
        <h2 className="mx-auto mt-4 max-w-3xl text-center font-serif text-display-md text-primary">
          Useful details. <span className="display-italic">No guesswork.</span>
        </h2>
        <div className="mx-auto mt-10 grid max-w-5xl gap-5 md:grid-cols-3">
          {[
            {
              title: "Planned pricing",
              body: "See the planning figures and what still needs to be confirmed before any payment can be accepted.",
              href: "/pricing",
              label: "View planned pricing",
            },
            {
              title: "Launch status",
              body: "Intake, appointments and patient accounts are not open. Find the current limits in one place.",
              href: "/launch",
              label: "Check current status",
            },
            {
              title: "Publication status",
              body: "Clinical articles and treatment information will be released only after qualified review is completed.",
              href: "/medical-review-policy",
              label: "Read the review policy",
            },
          ].map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-border bg-surface p-7"
            >
              <h3 className="font-serif text-2xl text-primary">{item.title}</h3>
              <p className="mt-4 leading-relaxed text-muted">{item.body}</p>
              <Link
                href={item.href}
                className="mt-6 inline-block text-sm font-medium text-primary underline underline-offset-4"
              >
                {item.label}
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function OperationalHome() {
  return (
    <>
      <SEOHead
        title="TRTrx launch information and planned pricing"
        description="Explore planned TRTrx pricing and current launch status. Patient intake is closed, and clinical content is awaiting review."
        path="/"
      />
      <OrganizationSchema />
      <WebSiteSchema />
      <PageShell>
        <HeroCentered />
        <PlanningCards />
        <OperationalFAQ compact />
        <FooterCTABand
          headline="Clear expectations."
          italic="From the start."
        />
      </PageShell>
    </>
  );
}

function PlannedPricing() {
  return (
    <section className="container pb-16 md:pb-20">
      <div className="mx-auto max-w-4xl">
        <div className="overflow-x-auto rounded-2xl border border-border">
          <table className="w-full text-left text-sm">
            <caption className="bg-surface-alt p-5 text-left text-base text-muted">
              Planning prices only. These are not available purchase offers.
            </caption>
            <thead>
              <tr className="border-b border-border bg-surface-alt">
                <th scope="col" className="p-5 font-medium text-primary">
                  Planned program
                </th>
                <th scope="col" className="p-5 font-medium text-primary">
                  Monthly planning amount
                </th>
              </tr>
            </thead>
            <tbody>
              {PRICING_STRUCTURE.monthlyTiers.map((tier) => (
                <tr
                  key={tier.productSlug}
                  className="border-b border-border last:border-0"
                >
                  <th scope="row" className="p-5 font-normal text-text">
                    {tier.productName}
                    {tier.productSlug === "hcg" ? " adjunct" : ""}
                  </th>
                  <td className="p-5 font-mono text-primary">
                    {tier.productSlug === "hcg" ? "+" : ""}
                    {formatUSD(tier.monthlyPrice)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-5 leading-relaxed text-muted">
          The HCG amount is an additional planned charge with a base TRT plan,
          not a standalone $89 plan. A $219 base plan plus that planned adjunct
          would total $308 per month. No product or service is currently
          available to purchase.
        </p>
        <div className="mt-8 rounded-2xl border border-border bg-surface-alt p-7">
          <h2 className="font-serif text-2xl text-primary">
            What remains to be confirmed
          </h2>
          <p className="mt-4 leading-relaxed text-muted">
            Final inclusions, product availability, laboratory and pharmacy
            arrangements, billing, cancellation and any additional charges must
            be confirmed before intake opens. No refund or treatment-results
            guarantee is offered on this website.
          </p>
        </div>
        <p className="mt-5 text-sm text-muted">
          The amounts above are planning information. They do not establish
          suitability, availability or eligibility for any treatment.
        </p>
      </div>
    </section>
  );
}

function AboutPlans() {
  return (
    <section className="container pb-16 md:pb-20">
      <div className="mx-auto max-w-3xl space-y-8 text-lg leading-relaxed text-muted">
        <p>
          TRTrx is preparing a physician-led service with transparent pricing
          and clear information about availability. This public website explains
          the plan and the current status before patients can begin.
        </p>
        <p>
          The clinician roster, state coverage, pharmacy and laboratory
          arrangements are still being finalized. No clinician participation,
          credential, partnership or certification is claimed without
          verification.
        </p>
        <p>
          Clinical articles and treatment information are being prepared
          separately. They remain unpublished while qualified clinical review is
          pending. An editorial update or a linked reference does not count as
          medical review.
        </p>
        <p>
          Patient intake, consultations, prescriptions, accounts and payments
          are not available in any state. The{" "}
          <Link
            href="/launch"
            className="text-primary underline underline-offset-4"
          >
            launch-status page
          </Link>{" "}
          records what visitors can and cannot do now.
        </p>
      </div>
    </section>
  );
}

function LaunchPlan() {
  return (
    <section className="container pb-16 md:pb-20">
      <ol className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
        {[
          {
            title: "Publish confirmed information",
            body: "The current website provides operational details and planning prices. Clinical content requires qualified review before publication.",
          },
          {
            title: "Confirm the service details",
            body: "Clinician participation, state coverage, pharmacy and laboratory arrangements, contact channels and final terms must be verified before intake opens.",
          },
          {
            title: "Open intake separately",
            body: "Public website availability does not activate clinical services. Appointments, accounts, payments and prescriptions remain unavailable until a separate clinical launch.",
          },
        ].map((step, index) => (
          <li
            key={step.title}
            className="rounded-2xl border border-border bg-surface-alt p-7"
          >
            <span className="font-mono text-3xl text-accent-strong">
              0{index + 1}
            </span>
            <h2 className="mt-5 font-serif text-2xl text-primary">
              {step.title}
            </h2>
            <p className="mt-4 leading-relaxed text-muted">{step.body}</p>
          </li>
        ))}
      </ol>
      <p className="mx-auto mt-8 max-w-3xl text-center leading-relaxed text-muted">
        No confirmed intake opening date has been announced. View{" "}
        <Link
          href="/launch"
          className="text-primary underline underline-offset-4"
        >
          launch status
        </Link>{" "}
        or{" "}
        <Link
          href="/trt-in-your-state"
          className="text-primary underline underline-offset-4"
        >
          state availability planning
        </Link>
        .
      </p>
    </section>
  );
}

export function OperationalPage({ kind }: { kind: OperationalPageKind }) {
  const copy = PAGE_COPY[kind];
  return (
    <>
      <SEOHead
        title={copy.title}
        description={copy.description}
        path={`/${kind}`}
      />
      <OrganizationSchema />
      <WebSiteSchema />
      <PageShell>
        <section className="container py-16 text-center md:py-24">
          <div className="mx-auto max-w-3xl">
            <p className="eyebrow">{copy.eyebrow}</p>
            <h1 className="mt-5 font-serif text-display-lg font-medium text-primary">
              {copy.title}
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted">
              {copy.description}
            </p>
          </div>
        </section>
        {kind === "faq" ? (
          <OperationalFAQ />
        ) : kind === "pricing" ? (
          <PlannedPricing />
        ) : kind === "about" ? (
          <AboutPlans />
        ) : (
          <LaunchPlan />
        )}
        <FooterCTABand headline="Know what is" italic="coming next." />
      </PageShell>
    </>
  );
}
