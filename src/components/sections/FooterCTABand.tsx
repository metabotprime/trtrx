import Link from 'next/link';
import { Button } from '@/components/ui/button';

type Props = {
  headline?: string;
  italic?: string;
  caption?: string;
};

export function FooterCTABand({
  headline = 'Your edge is',
  italic = 'waiting.',
  caption = 'Free shipping · 30-day guarantee · Cancel anytime',
}: Props) {
  return (
    <section className="bg-primary text-surface">
      <div className="container py-20 text-center md:py-28">
        <h2
          className="mx-auto max-w-3xl font-serif text-display-lg font-medium leading-[1.05]"
          style={{ fontVariationSettings: "'opsz' 144" }}
        >
          {headline}{' '}
          <span className="display-italic text-accent">{italic}</span>
        </h2>

        <div className="mt-9 flex justify-center">
          <Link href="/how-it-works">
            <Button size="lg">Get Started</Button>
          </Link>
        </div>

        <p className="mt-6 text-eyebrow uppercase tracking-tracked text-surface/65">
          {caption}
        </p>
      </div>
    </section>
  );
}
