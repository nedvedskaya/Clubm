import React from 'react';
import { ArrowUpRight, Check } from 'lucide-react';
import { cn } from '../../lib/utils';

interface BonusItem {
  title: string;
  text: string;
}

interface BonusCardProps {
  variant?: 'default' | 'premium';
  badgeText?: string;
  title: React.ReactNode;
  description?: React.ReactNode; // Optional in premium
  oldPrice?: string; // Optional in premium
  newPrice?: string; // Optional in premium
  newPriceSubtitle?: string; // Optional in premium
  items?: BonusItem[]; // For premium variant
  className?: string;
  onClick?: () => void;
}

export function BonusCard({
  variant = 'default',
  badgeText = "Бонус при оплате за год",
  title,
  description,
  oldPrice,
  newPrice,
  newPriceSubtitle,
  items,
  className = "",
  onClick
}: BonusCardProps) {
  
  if (variant === 'premium') {
    return (
        <div className={cn(
            "relative bg-gradient-to-b from-[#8E2828] to-[#360808] rounded-[2.5rem] p-8 shadow-xl shadow-[#450a0a]/20 flex flex-col h-full border border-white/10 overflow-hidden group hover:scale-[1.02] transition-transform duration-500",
            className
        )}>
            {/* Subtle Top Shine */}
            <div className="absolute inset-x-0 top-0 h-[200px] bg-gradient-to-b from-white/10 to-transparent pointer-events-none" />
            
            <h3 className="relative z-10 text-2xl font-bold text-white mb-8 text-center drop-shadow-md">
                {title}
            </h3>
            
            <div className="relative z-10 space-y-6 flex-1">
                {items?.map((item, idx) => (
                <div key={idx} className="flex gap-4 items-start">
                    <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center shrink-0 mt-0.5 border border-white/10 shadow-inner">
                        <Check className="w-4 h-4 text-white" strokeWidth={3} />
                    </div>
                    <div>
                        <h4 className="text-base font-bold text-white mb-0.5 drop-shadow-sm">{item.title}</h4>
                        <p className="text-white/80 font-medium leading-snug text-sm">{item.text}</p>
                    </div>
                </div>
                ))}
            </div>
        </div>
    );
  }

  return (
    <div 
      onClick={onClick}
      className={cn(
        "w-full md:max-w-sm lg:w-1/3 bg-white rounded-[2rem] p-6",
        "shadow-[0_20px_40px_-20px_rgba(0,0,0,0.1)] border border-slate-100",
        "relative overflow-hidden group hover:shadow-2xl transition-all duration-300",
        onClick && "cursor-pointer",
        className
      )}
    >
      {/* Icon Indicator */}
      {onClick && (
        <div className="absolute top-6 right-6 z-20">
          <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-brand-900 group-hover:text-white transition-all duration-300 transform group-hover:scale-110 group-hover:-translate-y-1 group-hover:rotate-45">
             <ArrowUpRight className="w-4 h-4" />
          </div>
        </div>
      )}

      <div className="relative z-10 flex flex-col">
         <div className="mb-5 pr-8">
           <span className="inline-block bg-brand-900 text-white text-[10px] font-bold uppercase tracking-widest py-1.5 px-4 rounded-full shadow-lg shadow-brand-900/20">
              {badgeText}
           </span>
         </div>
         
         <h3 className="text-xl font-extrabold text-slate-900 mb-3 leading-tight group-hover:text-brand-900 transition-colors duration-300">
            {title}
         </h3>
         
         <p className="text-slate-600 text-[13px] font-medium leading-relaxed mb-4">
            {description}
         </p>
         
         <div className="bg-slate-50 rounded-xl p-3 border border-slate-100 flex items-center justify-between gap-3 group-hover:border-brand-900/20 transition-colors duration-300">
            <div>
                <p className="text-[9px] uppercase font-bold text-slate-400 tracking-wider">Стоимость</p>
                <p className="text-xs font-bold text-slate-400 line-through decoration-slate-400 decoration-1">{oldPrice}</p>
            </div>
            <div className="text-right">
                 <p className="text-brand-800 font-bold text-sm">{newPrice}</p>
                 <p className="text-[9px] text-slate-400 font-medium">{newPriceSubtitle}</p>
            </div>
         </div>
      </div>
    </div>
  );
}
