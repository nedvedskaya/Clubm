import React from 'react';
import { cn } from '../../lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';
import SecureLink from '../SecureLink';
import { Loader2, ArrowRight } from 'lucide-react';
import { motion } from "motion/react";

const shinyButtonVariants = cva(
  "relative group isolate inline-flex items-center justify-center gap-2 md:gap-3 font-bold uppercase tracking-wider transition-all duration-300 overflow-hidden active:scale-95 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: // Красный градиент (Premium)
          "text-white shadow-[0_10px_20px_-5px_rgba(127,29,29,0.5),inset_0_2px_0_rgba(255,255,255,0.2)] hover:shadow-[0_20px_30px_-10px_rgba(127,29,29,0.6)]",
        brand: // Синий/Темный (Membership Standard)
          "bg-[#0f172a] text-white hover:bg-slate-800 shadow-xl shadow-slate-900/10 hover:shadow-slate-900/20 border border-slate-800",
        glass: // Белый (Membership Premium / Course)
          "bg-white text-slate-900 hover:bg-slate-50 shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)] hover:shadow-[0_0_50px_-5px_rgba(255,255,255,0.5)] border border-slate-100",
        outline:
          "bg-transparent border-2 border-slate-200 text-slate-600 hover:border-brand-800 hover:text-brand-900",
      },
      size: {
        default: "px-8 py-4 text-sm md:text-base rounded-2xl",
        sm: "px-5 py-2.5 text-xs md:text-sm rounded-xl",
        lg: "px-10 py-5 text-base md:text-lg rounded-2xl",
        pill: "w-full py-4 rounded-full text-[11px] tracking-[0.2em]", // Specially for MembershipCard
      },
      width: {
        auto: "w-auto",
        full: "w-full",
      }
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
      width: "auto",
    },
  }
);

interface ShinyButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof shinyButtonVariants> {
  href?: string;
  isExternal?: boolean; // If true, uses <a>, if false but has href, uses SecureLink (internal logic) or just <a>
  isLoading?: boolean;
  withArrow?: boolean;
}

export const ShinyButton = React.forwardRef<HTMLButtonElement, ShinyButtonProps>(
  ({ className, variant, size, width, href, isExternal, isLoading, withArrow = true, children, ...props }, ref) => {
    
    // Background Elements based on variant
    const BackgroundLayer = () => {
      if (variant === 'primary') {
        return (
          <>
             {/* Glow Container */}
            <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-red-900 rounded-[inherit] blur opacity-20 group-hover:opacity-40 transition duration-500 -z-10"></div>
            {/* Main Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#7F1D1D] to-[#450a0a] -z-10"></div>
          </>
        )
      }
      return null;
    };

    // Shine Effect
    const Shine = () => (
      <div className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-white/15 to-transparent skew-x-12 group-hover:animate-shine z-0 pointer-events-none" />
    );

    const Content = () => (
        <>
            <BackgroundLayer />
            <Shine />
            <span className="relative z-10 flex items-center gap-2">
                {isLoading && <Loader2 className="w-4 h-4 animate-spin" />}
                {children}
                {withArrow && !isLoading && (
                   <ArrowRight className="w-4 h-4 md:w-5 md:h-5 opacity-70 group-hover:translate-x-1 transition-transform" />
                )}
            </span>
        </>
    );

    const commonClasses = cn(shinyButtonVariants({ variant, size, width, className }));

    // If href is provided, render as Link
    if (href) {
        if (isExternal) {
            return (
                <a href={href} className={commonClasses} target="_blank" rel="noopener noreferrer">
                    <Content />
                </a>
            );
        }
        return (
            <SecureLink href={href} className={commonClasses}>
                 <Content />
            </SecureLink>
        );
    }

    // Otherwise render as Button
    return (
      <button
        ref={ref}
        className={commonClasses}
        disabled={isLoading || props.disabled}
        {...props}
      >
        <Content />
      </button>
    );
  }
);

ShinyButton.displayName = "ShinyButton";
