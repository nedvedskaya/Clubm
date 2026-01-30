import React from 'react';

interface CourseTagProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const CourseTag = ({ children, ...props }: CourseTagProps) => (
  <div 
    className="px-3 py-2 xs:px-4 md:px-6 md:py-3 rounded-full bg-white border border-slate-200 text-slate-500 font-bold text-[10px] xs:text-[11px] md:text-[13px] tracking-wide shadow-sm hover:border-slate-300 transition-colors cursor-default whitespace-nowrap"
    {...props}
  >
    {children}
  </div>
);
