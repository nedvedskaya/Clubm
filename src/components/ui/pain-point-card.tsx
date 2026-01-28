import React from "react";
import { cn } from "./utils";

interface PainPointCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  borderColorClass?: string;
}

export function PainPointCard({ 
  children, 
  className, 
  borderColorClass = "border-slate-200",
  ...props 
}: PainPointCardProps) {
  return (
    <div 
      className={cn(
        "min-w-[85vw] md:min-w-0 snap-center bg-white rounded-3xl p-8 shadow-lg shadow-slate-200/50 hover:shadow-xl transition-all group h-full flex flex-col relative overflow-hidden border-l-4",
        borderColorClass,
        className
      )} 
      {...props}
    >
      {children}
    </div>
  );
}
