import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Wordmark } from './Wordmark';
import { useEffect, useState } from 'react';

let headerEntranceStarted = false;

type LogoProps = {
  className?: string;
  tone?: 'on-light' | 'on-dark';
  animated?: boolean;
};

export function Logo({ className, tone = 'on-light', animated = false }: LogoProps) {
  const [playEntrance] = useState(() => animated && !headerEntranceStarted);

  useEffect(() => {
    if (playEntrance) {
      headerEntranceStarted = true;
    }
  }, [playEntrance]);

  return (
    <Link
      href="/"
      aria-label="trtrx home"
      className={cn(
        'inline-flex shrink-0 items-center rounded-sm',
        className,
      )}
    >
      <Wordmark tone={tone} animated={animated && playEntrance} />
    </Link>
  );
}
