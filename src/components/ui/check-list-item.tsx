import React from 'react';
import { cn } from './utils';

interface CheckListItemProps {
  children: React.ReactNode;
  className?: string;
}

export function CheckListItem({ children, className }: CheckListItemProps) {
  return (
    <li className={cn("flex items-start gap-3 text-slate-600 text-sm", className)}>
      <div className="w-4 h-4 rounded-full bg-green-100 flex items-center justify-center text-green-700 flex-shrink-0 mt-0.5 text-[8px] font-bold">
        ✓
      </div>
      <span>{children}</span>
    </li>
  );
}
