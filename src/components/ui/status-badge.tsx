import React from 'react';
import { cn } from './utils';

interface StatusBadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'outline' | 'brand' | 'dark' | 'success' | 'white' | 'blue' | 'accent';
  size?: 'sm' | 'md';
  className?: string;
  hasPulse?: boolean;
}

export function StatusBadge({ 
  children, 
  variant = 'default', 
  size = 'md', 
  className,
  hasPulse = false
}: StatusBadgeProps) {
  
  const variants = {
    default: "bg-slate-100 border border-slate-200 text-slate-600",
    outline: "bg-transparent border border-white/20 text-white",
    brand: "bg-brand-900 text-white shadow-lg shadow-brand-900/20",
    dark: "bg-white/10 border border-white/10 text-slate-300",
    success: "bg-green-500/20 text-green-300 border border-green-500/30",
    white: "bg-white border border-slate-100 text-slate-600 shadow-sm",
    blue: "bg-blue-100 text-blue-700",
    accent: "bg-brand-50 text-brand-900",
  };

  const sizes = {
    sm: "px-3 py-1 text-[10px] md:text-xs",
    md: "px-3 md:px-4 py-1.5 md:py-2 text-xs",
  };

  return (
    <div className={cn(
      "inline-flex items-center gap-2 rounded-full font-extrabold uppercase tracking-widest",
      variants[variant],
      sizes[size],
      className
    )}>
      {hasPulse && (
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-600" />
        </span>
      )}
      {children}
    </div>
  );
}
