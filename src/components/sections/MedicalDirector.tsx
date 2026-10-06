import Link from "next/link";
import { MEDICAL_STANDARD } from "@/content/physician";
export function MedicalDirector() {
  const { eyebrow, body, standards, principle } = MEDICAL_STANDARD;
  return (
    <section className="bg-surface">
      <div className="container py-20 md:py-28">
        <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="rounded-2xl border border-border bg-primary p-8 text-surface lg:col-span-5 md:p-10">
            <p className="font-mono text-xs uppercase tracking-tracked text-accent">
              Before intake opens
            </p>
            <h2 className="mt-6 font-serif text-display-md">
              Care built around{" "}
              <span className="display-italic">clinical judgment.</span>
            </h2>
            <ul className="mt-8 space-y-5 text-sm leading-relaxed">
              {standards.map((item) => (
                <li key={item} className="border-t border-surface/20 pt-4">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-7">
            <p className="eyebrow">{eyebrow}</p>
            <div className="mt-6 space-y-5 text-lg leading-relaxed text-muted">
              {body.map((text) => (
                <p key={text}>{text}</p>
              ))}
            </div>
            <p className="mt-8 font-serif text-2xl italic text-primary">
              {principle}
            </p>
            <Link
              href="/about"
              className="mt-6 inline-block text-sm font-medium text-primary underline underline-offset-4"
            >
              About TRTrx
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
