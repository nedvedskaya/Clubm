import React from 'react';
import { cn } from '@/lib/utils';

interface GradientHeadingProps {
  children: React.ReactNode;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

export function GradientHeading({ 
  children, 
  className,
  as: Component = 'h2' 
}: GradientHeadingProps) {
  return (
    <Component className={cn(
      "relative z-10 font-black tracking-tighter mb-6 bg-gradient-to-b from-slate-900 to-slate-700 bg-clip-text text-transparent drop-shadow-sm",
      "text-5xl md:text-7xl", // Default sizes, can be overridden
      className
    )}>
      {children}
    </Component>
  );
}
