import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

type Props = {
  /** Don't compete with hero CTAs in the first viewport. */
  revealAfterPx?: number;
};

export function StickyMobileCTA({ revealAfterPx = 480 }: Props) {
  const [visible, setVisible] = useState(false);
  const [lastY, setLastY] = useState(0);

  useEffect(() => {
    let ticking = false;
    function onScroll() {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const y = window.scrollY;
        const past = y > revealAfterPx;
        const goingDown = y > lastY;
        setVisible(past && (goingDown || y === lastY));
        setLastY(y);
        ticking = false;
      });
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [lastY, revealAfterPx]);

  return (
    <div
      className={cn(
        'pointer-events-none fixed inset-x-0 bottom-0 z-30 transition-all duration-200 lg:hidden',
        visible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0',
      )}
      style={{ paddingBottom: 'max(env(safe-area-inset-bottom), 16px)' }}
    >
      <div className="border-t border-border bg-surface/95 px-5 py-3 backdrop-blur-md">
        <Link href="/how-it-works" className="block pointer-events-auto">
          <Button className="w-full" size="lg">
            Get Started
          </Button>
        </Link>
      </div>
    </div>
  );
}
