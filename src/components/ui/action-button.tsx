import React from 'react';
import { cn } from './utils';
import { cva, type VariantProps } from 'class-variance-authority';
import { Loader2 } from 'lucide-react';

// Define variants corresponding to the designs in HomePage.tsx
const actionButtonVariants = cva(
  "group/btn inline-flex items-center justify-center gap-2 md:gap-3 rounded-xl md:rounded-2xl font-bold text-sm md:text-base transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 active:scale-95 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: 
          "bg-brand-900 text-white hover:bg-brand-800 shadow-brand-900/20 hover:shadow-brand-900/30",
        secondary: 
          "bg-slate-900 text-white hover:bg-slate-800 shadow-slate-900/20 hover:shadow-slate-900/30",
        white: 
          "bg-white text-slate-900 hover:bg-slate-100 shadow-white/20 hover:shadow-white/30",
      },
      size: {
        default: "px-6 md:px-8 py-3 md:py-4",
        sm: "px-4 py-2 text-xs md:text-sm rounded-lg md:rounded-xl",
        lg: "px-8 py-4 md:py-5 text-base md:text-lg",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

export interface ActionButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof actionButtonVariants> {
  asChild?: boolean;
  isLoading?: boolean;
  withArrow?: boolean;
}

const ActionButton = React.forwardRef<HTMLButtonElement, ActionButtonProps>(
  ({ className, variant, size, isLoading, withArrow = true, children, ...props }, ref) => {
    return (
      <button
        className={cn(actionButtonVariants({ variant, size, className }))}
        ref={ref}
        disabled={isLoading || props.disabled}
        {...props}
      >
        {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
        <span>{children}</span>
        {withArrow && !isLoading && (
            <svg className="w-4 md:w-5 h-4 md:h-5 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
        )}
      </button>
    );
  }
);
ActionButton.displayName = "ActionButton";

export { ActionButton, actionButtonVariants };
