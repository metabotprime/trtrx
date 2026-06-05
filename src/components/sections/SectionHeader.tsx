import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

type Props = {
  eyebrow?: string;
  /** Title with optional italic span — split by `*emphasis*` markers. */
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  size?: 'md' | 'lg';
  /** Heading level. Use 'h1' when this is the page's primary heading
   * (e.g. on a hub page whose top heading is a SectionHeader). Defaults 'h2'. */
  as?: 'h1' | 'h2';
  children?: ReactNode;
  className?: string;
};

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  size = 'lg',
  as: Heading = 'h2',
  children,
  className,
}: Props) {
  const parts = title.split(/\*([^*]+)\*/g);

  return (
    <div
      className={cn(
        'mx-auto flex flex-col gap-4',
        align === 'center' ? 'items-center text-center' : 'items-start text-left',
        size === 'lg' ? 'max-w-3xl' : 'max-w-2xl',
        className,
      )}
    >
      {eyebrow && (
        <span className="eyebrow inline-flex flex-wrap gap-x-2">{eyebrow}</span>
      )}

      <Heading
        className={cn(
          'font-serif font-medium text-primary',
          size === 'lg' ? 'text-display-lg' : 'text-display-md',
        )}
        style={{ fontVariationSettings: "'opsz' 144" }}
      >
        {parts.map((part, i) =>
          i % 2 === 1 ? (
            <span key={i} className="display-italic text-primary">
              {part}
            </span>
          ) : (
            <span key={i}>{part}</span>
          ),
        )}
      </Heading>

      {subtitle && (
        <p className="max-w-prose text-base leading-[1.6] text-muted md:text-lg">
          {subtitle}
        </p>
      )}

      {children}
    </div>
  );
}
