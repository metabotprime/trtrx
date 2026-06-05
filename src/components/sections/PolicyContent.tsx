import { Fragment, type ReactNode } from 'react';

/** A content block within a section: a paragraph, a bulleted list, or a small subheading. */
export type PolicyBlock =
  | { p: ReactNode }
  | { list: ReactNode[] }
  | { subhead: string };

export type PolicySection = {
  heading: string;
  blocks: PolicyBlock[];
};

type Props = {
  eyebrow?: string;
  title: string;
  /** Human-readable last-updated date, e.g. "June 2026". */
  lastUpdated: string;
  intro?: ReactNode[];
  sections: PolicySection[];
  /** Optional closing note (e.g. contact line). */
  footnote?: ReactNode;
};

/**
 * Shared layout for legal / policy / trust pages. Renders a real <h1>,
 * a last-updated stamp, and structured sections with editorial typography
 * matching the blog prose. Replaces the ComingSoon stub on these pages.
 */
export function PolicyContent({
  eyebrow = 'Policies',
  title,
  lastUpdated,
  intro,
  sections,
  footnote,
}: Props) {
  return (
    <article className="bg-surface">
      <div className="container max-w-3xl px-5 py-14 md:py-20">
        <header>
          <p className="eyebrow mb-4">{eyebrow}</p>
          <h1
            className="font-serif text-display-md font-medium leading-[1.05] text-primary"
            style={{ fontVariationSettings: "'opsz' 144" }}
          >
            {title}
          </h1>
          <p className="mt-5 font-mono text-[11px] uppercase tracking-tracked text-muted">
            Last updated {lastUpdated}
          </p>
        </header>

        {intro && intro.length > 0 && (
          <div className="mt-8 space-y-4 text-[16px] leading-[1.7] text-text md:text-[17px]">
            {intro.map((node, i) => (
              <p key={i}>{node}</p>
            ))}
          </div>
        )}

        <div className="mt-12 space-y-10">
          {sections.map((section, si) => (
            <section key={si}>
              <h2
                className="font-serif text-2xl font-medium leading-tight text-primary"
                style={{ fontVariationSettings: "'opsz' 144" }}
              >
                {section.heading}
              </h2>
              <div className="mt-4 space-y-4 text-[15px] leading-[1.7] text-text md:text-[16px]">
                {section.blocks.map((block, bi) => (
                  <Fragment key={bi}>
                    {'p' in block && <p>{block.p}</p>}
                    {'subhead' in block && (
                      <p className="pt-2 font-mono text-[11px] uppercase tracking-tracked text-muted">
                        {block.subhead}
                      </p>
                    )}
                    {'list' in block && (
                      <ul className="space-y-2 pl-1">
                        {block.list.map((item, li) => (
                          <li key={li} className="flex gap-3">
                            <span
                              aria-hidden
                              className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-accent"
                            />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </Fragment>
                ))}
              </div>
            </section>
          ))}
        </div>

        {footnote && (
          <p className="mt-12 border-t border-border pt-8 text-sm leading-relaxed text-muted">
            {footnote}
          </p>
        )}
      </div>
    </article>
  );
}
