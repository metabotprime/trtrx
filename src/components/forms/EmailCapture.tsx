import { useState, FormEvent } from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { cn } from '@/lib/utils';

type Status = 'idle' | 'open' | 'submitting' | 'success';

type Props = {
  className?: string;
  /** Compact tone for hero use; expanded shows a fuller card. */
  variant?: 'inline' | 'card';
};

export function EmailCapture({ className, variant = 'inline' }: Props) {
  const [status, setStatus] = useState<Status>('idle');
  const [email, setEmail] = useState('');

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!email) return;
    setStatus('submitting');
    // TODO: wire to Resend Audiences (or Beehiiv / ConvertKit) when API key is provisioned.
    // For now, optimistic success — captures intent visually without backend.
    await new Promise((r) => setTimeout(r, 450));
    setStatus('success');
  }

  if (variant === 'inline') {
    if (status === 'idle') {
      return (
        <button
          type="button"
          onClick={() => setStatus('open')}
          className={cn(
            'group inline-flex items-center gap-2 text-sm font-medium text-text underline-offset-4 transition-colors hover:text-accent',
            className,
          )}
        >
          Get launch updates
          <ArrowRight
            size={14}
            className="transition-transform duration-150 group-hover:translate-x-0.5"
          />
        </button>
      );
    }
    if (status === 'success') {
      return (
        <div
          className={cn(
            'inline-flex items-center gap-2 text-sm font-medium text-accent',
            className,
          )}
        >
          <Check size={16} strokeWidth={2.5} />
          You&apos;re on the list.
        </div>
      );
    }
    return (
      <form
        onSubmit={onSubmit}
        className={cn(
          'flex w-full max-w-md items-center gap-2 rounded-full border border-border bg-surface p-1.5 pl-4 shadow-sm',
          className,
        )}
      >
        <input
          type="email"
          required
          autoFocus
          placeholder="you@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          aria-label="Email address"
          className="flex-1 bg-transparent text-sm text-text placeholder:text-muted/70 focus:outline-none"
        />
        <button
          type="submit"
          disabled={status === 'submitting'}
          className="inline-flex h-9 items-center justify-center rounded-full bg-accent px-4 text-sm font-medium text-accent-foreground transition-colors hover:bg-accent/90 disabled:opacity-60"
        >
          {status === 'submitting' ? 'Joining…' : 'Join'}
        </button>
      </form>
    );
  }

  // card variant
  if (status === 'success') {
    return (
      <div className={cn('rounded-2xl border border-border bg-surface p-6', className)}>
        <div className="flex items-center gap-2 text-accent">
          <Check size={18} strokeWidth={2.5} />
          <span className="font-medium">You&apos;re on the list.</span>
        </div>
        <p className="mt-2 text-sm text-muted">
          We&apos;ll email when intake opens. No noise in between.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className={cn(
        'rounded-2xl border border-border bg-surface p-6 shadow-sm',
        className,
      )}
    >
      <p className="font-serif text-lg text-primary">Get launch updates.</p>
      <p className="mt-1 text-sm text-muted">
        We&apos;ll email when intake opens. No noise in between.
      </p>
      <div className="mt-4 flex items-center gap-2 rounded-full border border-border bg-surface-alt p-1.5 pl-4">
        <input
          type="email"
          required
          placeholder="you@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          aria-label="Email address"
          className="flex-1 bg-transparent text-sm text-text placeholder:text-muted/70 focus:outline-none"
        />
        <button
          type="submit"
          disabled={status === 'submitting'}
          className="inline-flex h-9 items-center justify-center rounded-full bg-accent px-4 text-sm font-medium text-accent-foreground transition-colors hover:bg-accent/90 disabled:opacity-60"
        >
          {status === 'submitting' ? 'Joining…' : 'Join'}
        </button>
      </div>
    </form>
  );
}
