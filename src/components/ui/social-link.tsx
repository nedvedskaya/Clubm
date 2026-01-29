import React from 'react';
import { cn } from './utils';

interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
  colorClass: string; // e.g., "group-hover:text-[#229ED9]"
  className?: string;
}

export function SocialLink({ href, icon, colorClass, className }: SocialLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "w-14 h-14 bg-white rounded-[20px] flex items-center justify-center text-slate-900 shadow-lg shadow-slate-200/50 hover:scale-110 transition-transform hover:shadow-xl duration-300 group",
        className
      )}
    >
      <div className={cn("w-6 h-6 transition-colors", colorClass)}>
        {icon}
      </div>
    </a>
  );
}
