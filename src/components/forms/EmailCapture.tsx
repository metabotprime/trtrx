import { cn } from "@/lib/utils";
import { SITE_CONTACT_EMAIL } from "@/lib/seo/site";

type Props = { className?: string; variant?: "inline" | "card" };
export function EmailCapture({ className, variant = "inline" }: Props) {
  return (
    <div
      className={cn(
        variant === "card" && "rounded-2xl border border-border bg-surface p-6",
        className,
      )}
    >
      <p className="font-medium text-primary">
        Email updates are not available yet.
      </p>
      <p className="mt-2 text-sm leading-relaxed text-muted">
        There is no waitlist signup on this site. For general questions,{" "}
        <a
          className="font-medium text-primary underline underline-offset-4"
          href={`mailto:${SITE_CONTACT_EMAIL}`}
        >
          email {SITE_CONTACT_EMAIL}
        </a>
        . Do not include medical records or other sensitive health information.
      </p>
    </div>
  );
}
