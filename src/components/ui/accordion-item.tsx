import React from 'react';
import { cn } from './utils';

interface AccordionItemProps extends React.HTMLAttributes<HTMLDetailsElement> {
  question: string;
  children: React.ReactNode;
  className?: string;
  defaultOpen?: boolean;
}

export function AccordionItem({ question, children, className, defaultOpen = false }: AccordionItemProps) {
  return (
    <details className={cn(
      "group bg-white p-4 md:p-6 rounded-xl shadow-md border border-slate-100 hover:border-blue-200 transition-all",
      className
    )} open={defaultOpen}>
      <summary className="flex items-start justify-between cursor-pointer list-none font-bold text-base md:text-lg text-slate-900 group-open:text-brand-900 transition-colors">
        <span className="flex-1 pr-3">{question}</span>
        <svg className="w-5 h-5 flex-shrink-0 transition-transform duration-300 group-open:rotate-180 text-blue-900" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </summary>
      <div className="mt-4 text-slate-700 text-sm md:text-base leading-relaxed animate-fadeIn">
        {children}
      </div>
    </details>
  );
}
