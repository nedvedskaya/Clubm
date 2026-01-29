import { motion } from "motion/react";
import { cn } from "../../lib/utils";
import { AuroraBackground } from "./aurora-background";
import { ShinyButton } from "./shiny-button";

interface MembershipFeature {
  text: React.ReactNode;
  highlight?: boolean;
}

interface MembershipCardProps {
  title: string;
  subtitle: string;
  price: string;
  period?: string;
  totalPrice?: string; 
  discount?: string;
  features: MembershipFeature[];
  isPremium?: boolean;
  isHit?: boolean;
  buttonText: string;
  delay?: number;
  onClick?: () => void;
}

export function MembershipCard({
  title,
  subtitle,
  price,
  period = "₽/мес",
  totalPrice,
  discount,
  features,
  isPremium = false,
  isHit = false,
  buttonText,
  delay = 0,
  onClick
}: MembershipCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }} 
      whileHover={{ y: -8, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } }}
      className={cn(
        "relative flex flex-col p-6 md:p-8 h-full", 
        "rounded-[2.5rem] overflow-hidden transition-all duration-500",
        "group cursor-default",
        isPremium 
          ? "bg-gradient-to-br from-[#0f172a] via-[#1e1b4b] to-[#172554] shadow-[0_30px_80px_-20px_rgba(30,27,75,0.6)] border border-white/10" 
          : "bg-white border border-slate-100 shadow-[0_20px_40px_-20px_rgba(0,0,0,0.05)] hover:shadow-[0_40px_80px_-30px_rgba(0,0,0,0.08)]"
      )}
    >
      {/* Premium Glow & Borders */}
      {isPremium && (
        <>
           <AuroraBackground 
             variant="blue-glow" 
             className="absolute top-0 right-0 w-[400px] h-[400px] -mr-20 -mt-20 mix-blend-screen animate-pulse duration-3000 opacity-50" 
             blur="blur-[90px]" 
           />
           <AuroraBackground 
             variant="red-glow" 
             className="absolute bottom-0 left-0 w-[300px] h-[300px] -ml-10 -mb-10 mix-blend-screen opacity-30" 
             blur="blur-[70px]" 
           />
           
           <div className="absolute inset-0 opacity-[0.15] mix-blend-overlay pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-white/[0.08] to-transparent pointer-events-none" />
          
          <motion.div 
            animate={{ 
              opacity: [0.2, 0.5, 0.2],
              background: [
                "linear-gradient(to right, transparent 0%, rgba(255,255,255,0.1) 50%, transparent 100%)",
                "linear-gradient(to right, transparent 0%, rgba(255,255,255,0.2) 50%, transparent 100%)",
                "linear-gradient(to right, transparent 0%, rgba(255,255,255,0.1) 50%, transparent 100%)"
              ]
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 inset-x-0 h-px" 
          />
        </>
      )}

      {/* Header Section */}
      <div className="relative z-10 mb-5">
        <div className="flex justify-between items-start mb-3">
            <h3 className={cn(
              "text-[10px] font-bold uppercase tracking-[0.25em]",
              isPremium ? "text-slate-300" : "text-slate-400"
            )}>
              {title}
            </h3>
            {discount && (
                 <span className={cn(
                     "text-[9px] font-bold uppercase tracking-widest px-2 py-1 rounded-md",
                     isPremium 
                        ? "bg-emerald-500/20 text-emerald-400" 
                        : "bg-emerald-50 text-emerald-700"
                 )}>
                   {discount}
                 </span>
             )}
        </div>

        <p className={cn(
          "text-[13px] leading-relaxed mb-6 max-w-[260px]",
          isPremium ? "text-slate-300/80" : "text-slate-500"
        )}>
          {subtitle}
        </p>
        
        <div className="flex items-baseline gap-2 mb-1">
          <span className={cn(
            "text-6xl font-light tracking-tighter",
            isPremium ? "text-white" : "text-[#0f172a]"
          )}>
            {price}
          </span>
          <span className={cn(
            "text-lg font-light",
            isPremium ? "text-slate-400" : "text-slate-400"
          )}>{period}</span>
        </div>

        <div className="min-h-[1.5rem] flex items-center">
            <p className={cn(
                "text-[13px] font-medium opacity-70",
                isPremium ? "text-slate-400" : "text-slate-500"
            )}>
                {totalPrice}
            </p>
        </div>
      </div>

      <div className={cn(
        "w-full h-px mb-6", 
        isPremium 
          ? "bg-gradient-to-r from-transparent via-white/10 to-transparent"
          : "bg-gradient-to-r from-slate-50 via-slate-200 to-slate-50"
      )} />

      {/* Features List */}
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.08,
              delayChildren: delay + 0.3
            }
          }
        }}
        className="space-y-3 mb-8 flex-grow relative z-10" 
      >
        {features.map((feature, idx) => (
          <motion.div 
            key={idx} 
            variants={{
              hidden: { opacity: 0, y: 5 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } }
            }}
            className="flex items-start gap-3 group/feature"
          >
            <div className={cn(
              "mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0 transition-all duration-300",
              isPremium
                ? "bg-indigo-400 group-hover/feature:bg-indigo-300 group-hover/feature:shadow-[0_0_8px_rgba(129,140,248,0.6)]" 
                : "bg-slate-300 group-hover/feature:bg-slate-900"
            )} />
            
            <span className={cn(
              "text-[13px] leading-relaxed transition-colors duration-300 font-medium",
              isPremium
                ? "text-slate-300 group-hover/feature:text-white" 
                : "text-slate-600 group-hover/feature:text-slate-900",
              feature.highlight && "font-semibold"
            )}>
              {feature.text}
            </span>
          </motion.div>
        ))}
      </motion.div>

      <div className="mt-auto relative z-10">
        <ShinyButton
            variant={isPremium ? "glass" : "brand"}
            size="pill"
            width="full"
            onClick={onClick}
        >
            {buttonText}
        </ShinyButton>
      </div>

    </motion.div>
  );
}