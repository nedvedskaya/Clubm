import React from 'react';
import { cn } from '@/lib/utils';

interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
}

export function SectionLabel({ children, className }: SectionLabelProps) {
  return (
    <div className={cn("inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-100 mb-6 shadow-sm", className)}>
      <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-slate-400">
        {children}
      </span>
    </div>
  );
}
