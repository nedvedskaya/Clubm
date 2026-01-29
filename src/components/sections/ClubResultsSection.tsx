import React from "react";
import { SectionTitle } from "../ui/section-title";
import { TrendingUp, Users, ShieldCheck, Zap, Globe } from "lucide-react";
import { clubResults } from "../data/club-content";

interface ResultCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  metric: string;
  delay?: string;
}

function ResultCard({ icon: Icon, title, description, metric, delay = "0s" }: ResultCardProps) {
  return (
    <div 
      className="relative group p-8 rounded-[2rem] bg-white border border-slate-100 shadow-xl shadow-slate-200/40 overflow-hidden hover:shadow-2xl hover:shadow-brand-900/10 transition-all duration-500 hover:-translate-y-1 h-full"
      style={{ animationDelay: delay }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="absolute top-0 right-0 w-32 h-32 bg-brand-50 rounded-full blur-3xl opacity-0 group-hover:opacity-50 transition-opacity duration-500 -mr-10 -mt-10" />
      
      <div className="relative z-10 flex flex-col h-full">
        <div className="mb-6 flex items-start justify-between">
          <div className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-brand-900 shadow-sm group-hover:scale-110 transition-transform duration-300">
            <Icon className="w-7 h-7" />
          </div>
          <span className="text-3xl font-black text-slate-200 group-hover:text-brand-100 transition-colors duration-300">
             {metric}
          </span>
        </div>
        
        <h3 className="text-xl font-bold text-slate-900 mb-3 leading-tight">{title}</h3>
        <p className="text-slate-500 text-sm font-medium leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

export function ClubResultsSection() {
  const icons = [Zap, ShieldCheck, Users, TrendingUp, Globe];

  return (
    <div className="pt-24 pb-12 relative">
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-[500px] bg-slate-100/50 rounded-full blur-[100px] -z-10 pointer-events-none" />

       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 max-w-3xl mx-auto">
             <SectionTitle centered className="mb-6">
               Что вы получите в сообществе
             </SectionTitle>
             <p className="text-lg md:text-xl text-slate-500 font-medium">
               <span className="text-brand-800 font-bold">Самый дорогой ресурс — ваше время.</span><br/>
               Результат внедрения системы:
             </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
            {clubResults.map((item, idx) => (
              <ResultCard 
                key={idx} 
                icon={icons[idx]}
                {...item} 
              />
            ))}
          </div>
       </div>
    </div>
  );
}