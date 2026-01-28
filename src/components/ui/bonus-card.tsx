import React from 'react';

interface BonusCardProps {
  badgeText?: string;
  title: React.ReactNode;
  description: React.ReactNode;
  oldPrice: string;
  newPrice: string;
  newPriceSubtitle: string;
  className?: string;
}

export function BonusCard({
  badgeText = "Бонус при оплате за год",
  title,
  description,
  oldPrice,
  newPrice,
  newPriceSubtitle,
  className = ""
}: BonusCardProps) {
  return (
    <div className={`w-full md:max-w-sm lg:w-1/3 bg-white rounded-[2rem] p-6 shadow-[0_20px_40px_-20px_rgba(0,0,0,0.1)] border border-slate-100 relative overflow-hidden group hover:shadow-2xl transition-all duration-300 ${className}`}>
      <div className="relative z-10 flex flex-col">
         <div className="mb-5">
           <span className="inline-block bg-[#5F0A0A] text-white text-[10px] font-bold uppercase tracking-widest py-1.5 px-4 rounded-full shadow-lg shadow-red-900/20">
              {badgeText}
           </span>
         </div>
         
         <h3 className="text-xl font-extrabold text-slate-900 mb-3 leading-tight">
            {title}
         </h3>
         
         <p className="text-slate-600 text-[13px] font-medium leading-relaxed mb-4">
            {description}
         </p>
         
         <div className="bg-slate-50 rounded-xl p-3 border border-slate-100 flex items-center justify-between gap-3">
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