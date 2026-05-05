import Link from 'next/link';
import { type BreadcrumbItem, BreadcrumbSchema } from './schemas/BreadcrumbSchema';

type Props = { items: BreadcrumbItem[] };

/**
 * Renders both the visual breadcrumb trail and the matching JSON-LD.
 * Pass items including the current page as the last entry.
 */
export function Breadcrumbs({ items }: Props) {
  return (
    <>
      <nav aria-label="Breadcrumb" className="container py-4">
        <ol className="flex flex-wrap items-center gap-x-2 font-mono text-[11px] uppercase tracking-tracked">
          {items.map((item, i) => {
            const isLast = i === items.length - 1;
            return (
              <li key={item.href} className="flex items-center gap-2">
                {!isLast ? (
                  <Link
                    href={item.href}
                    className="text-muted underline-offset-4 transition-colors hover:text-accent"
                  >
                    {item.name}
                  </Link>
                ) : (
                  <span className="text-accent" aria-current="page">
                    {item.name}
                  </span>
                )}
                {!isLast && (
                  <span aria-hidden className="text-muted/50">
                    /
                  </span>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
      <BreadcrumbSchema items={items} />
    </>
  );
}
