import { LucideIcon, Check } from 'lucide-react';
import React from 'react';

interface BenefitItem {
  title: string;
  text: string;
}

interface AudienceBenefitCardProps {
  icon: LucideIcon;
  title: string;
  benefits: BenefitItem[];
  className?: string;
}

export function AudienceBenefitCard({ icon: Icon, title, benefits, className }: AudienceBenefitCardProps) {
  return (
    <div className={`bg-white rounded-[3rem] p-10 md:p-14 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.03)] border border-slate-50 transition-all duration-500 hover:shadow-[0_30px_70px_-12px_rgba(0,0,0,0.08)] hover:-translate-y-1 ${className || ''}`}>
      <div className="flex items-center gap-6 mb-12">
        <div className="w-20 h-20 bg-[#F8FAFC] rounded-full flex items-center justify-center text-slate-900 ring-1 ring-slate-100">
          <Icon className="w-9 h-9 opacity-80" strokeWidth={1.25} />
        </div>
        <h3 className="text-3xl font-bold text-slate-900 tracking-tight">{title}</h3>
      </div>
      
      <div className="space-y-10">
        {benefits.map((item, idx) => (
          <div key={idx} className="flex items-start gap-5 group">
            <div className="mt-1.5 text-slate-300 shrink-0 transition-colors duration-300 group-hover:text-brand-900/40">
              <Check className="w-6 h-6" strokeWidth={1.5} />
            </div>
            <div>
              <p className="text-slate-900 font-bold mb-3 text-xl tracking-tight leading-none">{item.title}</p>
              <p className="text-slate-500 text-[16px] leading-relaxed font-medium antialiased">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
