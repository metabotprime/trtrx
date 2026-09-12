import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Wordmark } from './Wordmark';

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
        'inline-flex shrink-0 items-center rounded-sm',
        className,
      )}
    >
      <Wordmark tone={tone} />
    </Link>
  );
}
