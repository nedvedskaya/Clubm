import React from "react";
import { cn } from '@/lib/utils';

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "dark" | "blue" | "interactive";
}

export function GlassCard({ 
  children, 
  className, 
  variant = "default",
  ...props 
}: GlassCardProps) {
  const variants = {
    default: "bg-white/80 border border-slate-200 shadow-xl",
    dark: "bg-slate-900/90 border border-white/10 shadow-2xl text-white",
    blue: "bg-gradient-to-br from-white via-blue-50/30 to-white border border-blue-100",
    interactive: "bg-white border border-slate-200 hover:shadow-2xl hover:scale-[1.01] transition-all duration-300 cursor-pointer",
  };

  const baseStyles = "relative overflow-hidden rounded-[2rem] p-8 md:p-10 backdrop-blur-xl";

  return (
    <div 
      className={cn(baseStyles, variants[variant], className)} 
      {...props}
    >
      {children}
    </div>
  );
}
