import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import {
  CLINICAL_CONTENT_RELEASED,
  INTAKE_ENABLED,
  LAUNCH_MESSAGE,
  LAUNCH_PATH,
  PRIMARY_CTA_LABEL,
} from "@/content/launch";

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

        <div className="mt-9 flex justify-center">
          <Link href={LAUNCH_PATH} className={buttonVariants({ size: "lg" })}>
            {PRIMARY_CTA_LABEL}
          </Link>
          <Link
            href={CLINICAL_CONTENT_RELEASED ? "/blog" : "/pricing"}
            className="ml-6 self-center text-sm font-medium underline underline-offset-4"
          >
            {CLINICAL_CONTENT_RELEASED ? "Read TRT guides" : "Planned pricing"}
          </Link>
        </div>

        <p className="mt-6 text-eyebrow uppercase tracking-tracked text-surface/65">
          {INTAKE_ENABLED ? caption : LAUNCH_MESSAGE}
        </p>
      </div>
    </section>
  );
}
