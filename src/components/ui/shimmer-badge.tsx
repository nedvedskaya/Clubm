import React from "react";
import { cn } from "./utils";

interface ShimmerBadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  variant?: "brand" | "white" | "outline";
  icon?: React.ReactNode;
}

export function ShimmerBadge({ 
  children, 
  className, 
  variant = "brand", 
  icon,
  ...props 
}: ShimmerBadgeProps) {
  const variants = {
    brand: "bg-brand-900 border-white/10 text-white shadow-[0_0_20px_rgba(220,38,38,0.3)]",
    white: "bg-white border-slate-100 text-slate-900 shadow-sm",
    outline: "bg-transparent border-white/20 text-white"
  };

  return (
    <div 
      className={cn(
        "relative px-5 py-2.5 rounded-full border flex items-center gap-2 overflow-hidden",
        variants[variant],
        className
      )}
      {...props}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 animate-shimmer pointer-events-none" />
      
      {icon && <span className="relative z-10">{icon}</span>}
      
      <span className="relative z-10 text-[10px] sm:text-xs font-extrabold uppercase tracking-[0.15em]">
        {children}
      </span>
    </div>
  );
}
