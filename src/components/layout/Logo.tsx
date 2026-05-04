import Link from 'next/link';
import { cn } from '@/lib/utils';

type LogoProps = {
  className?: string;
  tone?: 'on-light' | 'on-dark';
};

export function Logo({ className, tone = 'on-light' }: LogoProps) {
  return (
    <Link
      href="/"
      aria-label="trtrx home"
      className={cn(
        'group inline-flex items-baseline font-serif text-[1.5rem] leading-none tracking-tight transition-colors',
        tone === 'on-light' ? 'text-primary' : 'text-surface',
        className,
      )}
    >
      <span className="font-medium">trt</span>
      <span className="display-italic font-medium text-accent transition-colors group-hover:text-accent/80">
        rx
      </span>
    </Link>
  );
}
