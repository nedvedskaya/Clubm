import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { cn } from '../../lib/utils';

interface BonusCardProps {
  badgeText?: string;
  title: React.ReactNode;
  description: React.ReactNode;
  oldPrice: string;
  newPrice: string;
  newPriceSubtitle: string;
  className?: string;
  onClick?: () => void;
}

export function BonusCard({
  badgeText = "Бонус при оплате за год",
  title,
  description,
  oldPrice,
  newPrice,
  newPriceSubtitle,
  className = "",
  onClick
}: BonusCardProps) {
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
          <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-[#5F0A0A] group-hover:text-white transition-all duration-300 transform group-hover:scale-110 group-hover:-translate-y-1 group-hover:rotate-45">
             <ArrowUpRight className="w-4 h-4" />
          </div>
        </div>
      )}

      <div className="relative z-10 flex flex-col">
         <div className="mb-5 pr-8">
           <span className="inline-block bg-[#5F0A0A] text-white text-[10px] font-bold uppercase tracking-widest py-1.5 px-4 rounded-full shadow-lg shadow-red-900/20">
              {badgeText}
           </span>
         </div>
         
         <h3 className="text-xl font-extrabold text-slate-900 mb-3 leading-tight group-hover:text-[#5F0A0A] transition-colors duration-300">
            {title}
         </h3>
         
         <p className="text-slate-600 text-[13px] font-medium leading-relaxed mb-4">
            {description}
         </p>
         
         <div className="bg-slate-50 rounded-xl p-3 border border-slate-100 flex items-center justify-between gap-3 group-hover:border-[#5F0A0A]/20 transition-colors duration-300">
            <div>
                <p className="text-[9px] uppercase font-bold text-slate-400 tracking-wider">Стоимость</p>
                <p className="text-xs font-bold text-slate-400 line-through decoration-slate-400 decoration-1">{oldPrice}</p>
            </div>
            <div className="text-right">
                 <p className="text-[#7F1D1D] font-bold text-sm">{newPrice}</p>
                 <p className="text-[9px] text-slate-400 font-medium">{newPriceSubtitle}</p>
            </div>
         </div>
      </div>
    </div>
  );
}
