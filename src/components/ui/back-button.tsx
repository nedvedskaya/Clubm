import React from 'react';
import { cn } from './utils';

interface BackButtonProps {
  onClick: () => void;
  className?: string;
  label?: string;
}

export function BackButton({ onClick, className, label = "Назад" }: BackButtonProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "mb-8 md:mb-10 flex items-center gap-2 md:gap-3 text-slate-600 hover:text-brand-900 transition-all font-bold group text-base md:text-lg hover:gap-3 md:hover:gap-4",
        className
      )}
    >
      <span className="w-10 md:w-11 h-10 md:h-11 rounded-full bg-white shadow-md flex items-center justify-center group-hover:-translate-x-1 transition-transform border border-slate-100">
        <svg className="w-4 md:w-5 h-4 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
        </svg>
      </span>
      {label}
    </button>
  );
}
