import { useRef } from "react";
import RevealOnScroll from "../RevealOnScroll";
import { RoadmapStep } from "../ui/roadmap-step";
import { roadmapSteps } from "../data/club-content";

export function ClubRoadmap() {
  return (
    <RevealOnScroll className="lg:col-span-12">
      <div className="bg-slate-50 rounded-[2.5rem] p-8 md:p-16 relative overflow-hidden shadow-lg border border-slate-200">
        {/* Background Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]"></div>

        <div className="relative z-10">
           <div className="text-center max-w-3xl mx-auto mb-20">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm mb-6">
                <span className="w-2 h-2 rounded-full bg-brand-600 animate-pulse" />
                <span className="text-xs font-bold tracking-widest uppercase text-slate-600">Карта развития</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 uppercase tracking-tight mb-6">
                "Метод" — это ваша возможность все изменить
              </h2>
              <p className="text-slate-500 text-lg font-medium leading-relaxed">
                От хаоса и "тушения пожаров" — к системному бизнесу и стратегии.
              </p>
           </div>

           <div className="relative max-w-5xl mx-auto">
              {/* Central Line (Desktop) */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 md:left-1/2 md:-ml-px bg-gradient-to-b from-slate-300 via-brand-300 to-brand-900"></div>

              <div className="space-y-16 md:space-y-24">
                 
                 {roadmapSteps.map((step, idx) => (
                   <RoadmapStep 
                     key={idx}
                     number={step.number}
                     title={step.title}
                     description={step.description}
                     duration={step.duration}
                     icon={step.icon}
                     position={step.position}
                   />
                 ))}

              </div>
              
              {/* Bottom Gradient Fade */}
              <div className="absolute bottom-0 left-8 md:left-1/2 w-0.5 h-24 bg-gradient-to-t from-slate-50 to-transparent transform md:-translate-x-1/2 z-20"></div>
           </div>
        </div>
      </div>
    </RevealOnScroll>
  );
}