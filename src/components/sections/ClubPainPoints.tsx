import { useRef, useState } from "react";
import RevealOnScroll from "../RevealOnScroll";
import { SectionTitle } from "../ui/section-title";
import { PainPointCard } from "../ui/pain-point-card";
import { StatusBadge } from "../ui/status-badge";
import { painPoints } from "../data/club-content";

export function ClubPainPoints() {
  const [activeSlide, setActiveSlide] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (sliderRef.current) {
      const scrollPosition = sliderRef.current.scrollLeft;
      const slideWidth = sliderRef.current.offsetWidth;
      const index = Math.round(scrollPosition / slideWidth);
      setActiveSlide(index);
    }
  };

  const scrollToSlide = (idx: number) => {
    if (sliderRef.current) {
      const containerWidth = sliderRef.current.offsetWidth;
      sliderRef.current.scrollTo({
        left: idx * containerWidth * 0.9,
        behavior: 'smooth'
      });
    }
  };

  return (
    <RevealOnScroll className="lg:col-span-12">
      <div className="py-2">
        <div className="relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div className="max-w-3xl">
              <SectionTitle className="!text-3xl md:!text-5xl uppercase text-center">
                Вы строили бизнес ради&nbsp;<span className="text-brand-900">свободы</span>,<br/>
                а получили это:
              </SectionTitle>
            </div>
          </div>

          <div 
            ref={sliderRef}
            onScroll={handleScroll}
            className="flex md:grid md:grid-cols-3 gap-4 overflow-x-auto md:overflow-visible pb-6 md:pb-0 snap-x snap-mandatory -mx-6 px-6 md:mx-0 md:px-0 hide-scroll"
          >
            
            {painPoints.map((point, idx) => (
              <PainPointCard key={idx} borderColorClass={point.borderColor}>
                <div className="flex justify-between items-start mb-6">
                  <span className="font-mono text-[12px] text-slate-400 uppercase tracking-[0.2em] font-medium mt-1">ЗНАКОМО?</span>
                  <StatusBadge variant={point.badgeVariant} size="sm" className={`rounded-lg bg-slate-100 ${point.badgeVariant === 'accent' ? 'text-[#5F0A0A]' : point.badgeVariant === 'blue' ? 'text-blue-900' : 'text-slate-700'}`}>
                    {point.subtitle}
                  </StatusBadge>
                </div>
                
                <h3 className="md:text-2xl font-extrabold text-slate-900 mb-4 uppercase leading-none tracking-tight text-[24px]">
                  {point.title}
                </h3>
                <p className="text-slate-600 leading-relaxed mb-10 flex-grow font-medium text-[15px]">
                  {point.description.split(".").map((sentence, i, arr) => (
                    <span key={i}>
                      {sentence}
                      {i < arr.length - 1 && "."}
                      {i === arr.length - 2 && <span className="font-extrabold text-slate-900"></span>}
                    </span>
                  ))}
                </p>
                
                {/* Dashboard Element */}
                <div className="mt-auto">
                  {point.dashboard.type === 'load' && (
                    <>
                      <div className="flex justify-between text-[10px] font-bold uppercase mb-3 tracking-wider">
                        <span className="text-slate-400">{point.dashboard.label}</span>
                        <span className="text-[#7F1D1D]">{point.dashboard.value}</span>
                      </div>
                      <div className="h-2.5 bg-red-50 rounded-full overflow-hidden w-full">
                          <div className="h-full bg-[#7F1D1D] w-full rounded-full shadow-[0_0_5px_rgba(127,29,29,0.3)]"></div>
                      </div>
                    </>
                  )}

                  {point.dashboard.type === 'profit' && (
                    <>
                      <div className="flex justify-between text-[10px] font-bold uppercase mb-3 tracking-wider items-end">
                        <span className="text-slate-400 mb-0.5">{point.dashboard.label}</span>
                        <span className="text-blue-900 text-base leading-none">{point.dashboard.value}</span>
                      </div>
                      <div className="space-y-2">
                          {/* Revenue */}
                          <div className="flex items-center gap-3">
                              <span className="text-[9px] font-bold text-slate-400 w-12 text-right">ОБОРОТ</span>
                              <div className="flex-1 h-2.5 bg-blue-50 rounded-full overflow-hidden">
                                  <div className="w-[90%] h-full bg-blue-800 rounded-full"></div>
                              </div>
                          </div>
                          {/* Profit */}
                          <div className="flex items-center gap-3">
                              <span className="text-[9px] font-bold text-slate-400 w-12 text-right">ПРИБЫЛЬ</span>
                              <div className="flex-1 h-2.5 bg-red-50 rounded-full overflow-hidden">
                                  <div className="w-[15%] h-full bg-[#7F1D1D] rounded-full"></div>
                              </div>
                          </div>
                      </div>
                    </>
                  )}

                  {point.dashboard.type === 'retention' && (
                     <>
                      <div className="flex justify-between text-[10px] font-bold uppercase mb-3 tracking-wider">
                        <span className="text-slate-400">{point.dashboard.label}</span>
                        <span className="text-[#7F1D1D]">{point.dashboard.value}</span>
                      </div>
                      
                      <div className="relative pt-2">
                          {/* Dashed background for "capacity" */}
                          <div className="flex justify-between absolute top-0 w-full -mt-1 px-1">
                              {[...Array(5)].map((_, i) => (
                                <div key={i} className="w-0.5 h-1.5 bg-slate-200"></div>
                              ))}
                          </div>
                          
                          {/* Main Bar showing depletion */}
                          <div className="h-2.5 w-full bg-red-50 rounded-full overflow-hidden">
                              <div className="h-full bg-[#7F1D1D] w-[10%] rounded-full shadow-[0_0_10px_rgba(127,29,29,0.5)] animate-pulse">
                              </div>
                          </div>
                      </div>
                    </>
                  )}
                </div>
              </PainPointCard>
            ))}

          </div>
          
          {/* Mobile pagination dots hint */}
          <div className="md:hidden flex justify-center gap-2 mt-4">
             {painPoints.map((_, idx) => (
               <button
                 key={idx}
                 onClick={() => scrollToSlide(idx)}
                 className={`h-1.5 rounded-full transition-all duration-300 ${
                   activeSlide === idx 
                     ? 'w-8 bg-[#5F0A0A]' 
                     : 'w-2 bg-slate-200'
                   }`}
                 aria-label={`Слайд ${idx + 1}`}
               />
             ))}
          </div>
        </div>
      </div>
    </RevealOnScroll>
  );
}