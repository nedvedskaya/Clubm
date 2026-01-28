import React from "react";
import { cn } from "./utils";

interface SectionTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3" | "h4";
  centered?: boolean;
}

export function SectionTitle({ 
  children, 
  className, 
  as: Component = "h2", 
  centered = false,
  ...props 
}: SectionTitleProps) {
  return (
    <Component 
      className={cn(
        "font-extrabold text-slate-900 uppercase tracking-tight leading-none",
        "text-3xl md:text-4xl lg:text-5xl",
        centered && "text-center mx-auto",
        className
      )} 
      {...props}
    >
      {children}
    </Component>
  );
}
