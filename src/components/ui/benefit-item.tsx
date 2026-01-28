import { Check } from 'lucide-react';

export function BenefitItem({ title, text }: { title: string; text: string }) {
  return (
    <div className="flex items-start gap-5 group">
      <div className="mt-1 text-slate-300 group-hover:text-[#5F0A0A] transition-colors duration-300 shrink-0">
         <Check className="w-5 h-5" strokeWidth={3} />
      </div>
      <div>
         <p className="text-slate-900 font-bold mb-2 text-lg tracking-tight">{title}</p>
         <p className="text-slate-500 text-base leading-relaxed">{text}</p>
      </div>
    </div>
  );
}
