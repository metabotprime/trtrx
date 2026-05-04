import { SectionHeader } from './SectionHeader';
import { EmailCapture } from '@/components/forms/EmailCapture';

type Props = {
  eyebrow: string;
  title: string;
  subtitle?: string;
};

/**
 * Placeholder body for pages whose detailed content is in progress.
 * Keeps conversion alive (email capture) and tone confident, not hollow.
 */
export function ComingSoon({ eyebrow, title, subtitle }: Props) {
  return (
    <section className="bg-surface">
      <div className="container py-24 md:py-32">
        <SectionHeader eyebrow={eyebrow} title={title} subtitle={subtitle} />

        <div className="mx-auto mt-12 max-w-md">
          <EmailCapture variant="card" />
        </div>
      </div>
    </section>
  );
}
