import { useEffect, useRef, useState, type ReactNode } from 'react';

type Props = {
  children: ReactNode;
  /** rootMargin for IntersectionObserver. Defaults to "200px 0px" — mounts ~one viewport before visible. */
  rootMargin?: string;
  /** Optional placeholder height while not yet mounted (CLS protection). */
  minHeight?: string | number;
};

/**
 * IntersectionObserver-driven lazy mount.
 * SSR-safe: renders children immediately when running on the server (so SSG output is intact),
 * client-side defers actual mount until the section is near the viewport.
 *
 * Use for below-fold sections that have heavy content (long lists, embedded media, etc).
 * Skip for sections that are already cheap.
 *
 * No callsites yet — wrap below-fold sections when their cost warrants it.
 */
export function LazySection({ children, rootMargin = '200px 0px', minHeight }: Props) {
  const [mounted, setMounted] = useState(typeof window === 'undefined');
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (mounted) return;
    const node = ref.current;
    if (!node) return;

    if (typeof IntersectionObserver === 'undefined') {
      setMounted(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setMounted(true);
            observer.disconnect();
            break;
          }
        }
      },
      { rootMargin },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [mounted, rootMargin]);

  if (mounted) return <>{children}</>;

  return (
    <div
      ref={ref}
      style={typeof minHeight !== 'undefined' ? { minHeight } : undefined}
      aria-hidden
    />
  );
}
