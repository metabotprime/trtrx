import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap font-sans font-medium transition-all duration-150 ease-out focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 active:translate-y-px',
  {
    variants: {
      variant: {
        primary:
          'bg-accent text-accent-foreground hover:bg-accent/90 hover:-translate-y-px shadow-[0_1px_0_0_hsl(var(--accent)/0.4)]',
        outline:
          'border border-primary bg-transparent text-primary hover:bg-primary hover:text-primary-foreground hover:-translate-y-px',
        ghost: 'bg-transparent text-text hover:text-accent',
        link: 'bg-transparent text-text underline-offset-4 hover:text-accent',
      },
      size: {
        sm: 'h-9 px-4 text-sm rounded-full',
        md: 'h-12 px-6 text-[15px] rounded-full',
        lg: 'h-14 px-7 text-base rounded-full',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => (
    <button
      ref={ref}
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  ),
);
Button.displayName = 'Button';

export { buttonVariants };
