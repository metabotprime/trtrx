import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import {
  INTAKE_ENABLED,
  LAUNCH_MESSAGE,
} from "@/content/launch";
import { useRouter } from "next/router";
import { nextPublicCta } from "@/content/public-ctas";

type Props = {
  headline?: string;
  italic?: string;
  caption?: string;
};

export function FooterCTABand({
  headline = "The standard",
  italic = "for TRT.",
  caption = LAUNCH_MESSAGE,
}: Props) {
  const cta = nextPublicCta(useRouter().asPath);
  return (
    <section className="bg-primary text-surface">
      <div className="container py-20 text-center md:py-28">
        <h2
          className="mx-auto max-w-3xl font-serif text-display-lg font-medium leading-[1.05]"
          style={{ fontVariationSettings: "'opsz' 144" }}
        >
          {headline}{" "}
          <span className="display-italic text-accent">{italic}</span>
        </h2>

        <div className="mt-9 flex flex-col items-center justify-center gap-5 sm:flex-row sm:gap-6">
          <Link href={cta.href} data-trtrx-cta={cta.action} data-trtrx-surface="footer_band" className={buttonVariants({ size: "lg" })}>
            {cta.label}
          </Link>
          <Link
            href="mailto:care@trtrx.com"
            data-trtrx-cta="email"
            data-trtrx-surface="footer_band"
            className="inline-flex min-h-11 items-center text-sm font-medium underline underline-offset-4"
          >
            Email a general question
          </Link>
        </div>

        <p className="mt-6 text-eyebrow uppercase tracking-tracked text-surface/65">
          {INTAKE_ENABLED ? caption : LAUNCH_MESSAGE}
        </p>
      </div>
    </section>
  );
}
