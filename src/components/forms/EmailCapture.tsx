import Link from "next/link";
import { cn } from "@/lib/utils";

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
        There is no waitlist signup on this site. Support contact details will
        be published before intake opens. See the{" "}
        <Link
          className="font-medium text-primary underline underline-offset-4"
          href="/contact"
        >
          contact status
        </Link>
        . No email address or medical information is collected here.
      </p>
    </div>
  );
}
