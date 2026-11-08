import Link from "next/link";
import { nextPublicCta } from "@/content/public-ctas";

export function GuideNextStep({ path }: { path: string }) {
  const cta = nextPublicCta(path);
  return (
    <aside className="mb-8 rounded-xl border border-border bg-surface-alt p-5 sm:p-6" aria-label="Next step">
      <p className="font-medium text-primary">Put your questions in order.</p>
      <p className="mt-2 text-sm leading-relaxed text-muted">
        Compare costs, provider options and the current TRTrx plan. Patient intake is not open yet.
      </p>
      <Link href={cta.href} data-trtrx-cta={cta.action} data-trtrx-surface="article"
        className="mt-4 inline-flex min-h-11 items-center font-medium text-primary underline underline-offset-4">
        {cta.label}
      </Link>
    </aside>
  );
}
