import { cn } from "@/lib/utils";

type AuroraVariant = 
  | 'blue-soft' 
  | 'blue-glow' 
  | 'red-glow' 
  | 'red-intense' 
  | 'slate' 
  | 'brand-glow'
  | 'blue-light'
  | 'red-light';

interface AuroraBackgroundProps {
  variant: AuroraVariant;
  className?: string;
  blur?: string; // e.g. "blur-3xl"
}

export function AuroraBackground({ variant, className, blur }: AuroraBackgroundProps) {
  const variantStyles: Record<AuroraVariant, string> = {
    'blue-soft': "bg-gradient-to-br from-blue-200 to-transparent",
    'blue-glow': "bg-blue-600/20",
    'red-glow': "bg-[#5F0A0A]/30",
    'red-intense': "bg-red-900",
    'slate': "bg-slate-200",
    'brand-glow': "bg-brand-800",
    'blue-light': "bg-blue-100",
    'red-light': "bg-red-100"
  };

  const defaultBlur: Record<AuroraVariant, string> = {
    'blue-soft': "blur-3xl",
    'blue-glow': "blur-[150px]",
    'red-glow': "blur-[120px]",
    'red-intense': "blur-[100px]",
    'slate': "blur-3xl",
    'brand-glow': "blur-[100px]",
    'blue-light': "blur-3xl",
    'red-light': "blur-3xl"
  };

  return (
    <div 
      className={cn(
        "rounded-full pointer-events-none",
        variantStyles[variant],
        blur || defaultBlur[variant],
        className
      )} 
    />
  );
}