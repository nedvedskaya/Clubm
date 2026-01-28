import { Monitor, MapPin } from "lucide-react";
import RevealOnScroll from "../RevealOnScroll";
import { AuroraBackground } from "../ui/aurora-background";
import { ParticipationColumn } from "../ui/participation-column";
import { ClubCalendarWidget } from "./ClubCalendarWidget";
import { participationFormats } from "../data/club-content";

interface ClubParticipationProps {
  onOpenCalendar: () => void;
}

export function ClubParticipation({ onOpenCalendar }: ClubParticipationProps) {
  return (
    <RevealOnScroll className="lg:col-span-12">
      <div className="bg-white rounded-[2.5rem] p-3 shadow-xl shadow-slate-200/50 border border-slate-100">
         <div className="bg-slate-50/50 rounded-[2rem] p-8 md:p-16 relative overflow-hidden">
            {/* Background Art */}
            <AuroraBackground 
              variant="blue-light" 
              className="absolute -top-24 -right-24 w-96 h-96 opacity-40 mix-blend-multiply" 
              blur="blur-[128px]" 
            />
            <AuroraBackground 
              variant="red-light" 
              className="absolute -bottom-24 -left-24 w-96 h-96 opacity-40 mix-blend-multiply" 
              blur="blur-[128px]" 
            />

            <div className="relative z-10 max-w-6xl mx-auto">
               <div className="text-center mb-16">
                  <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter mb-4 uppercase">Форматы участия</h2>
                  <p className="text-lg text-slate-500 font-medium max-w-2xl mx-auto">
                    Два режима работы. Один результат.
                  </p>
               </div>

               <div className="grid md:grid-cols-2 gap-12 md:gap-24 relative">
                  {/* Divider */}
                  <div className="hidden md:block absolute left-1/2 top-12 bottom-12 w-px bg-slate-200"></div>

                  {participationFormats.map((format, idx) => (
                    <ParticipationColumn 
                      key={idx}
                      icon={format.icon}
                      title={format.title}
                      subtitle={format.subtitle}
                      subtitleClassName={format.subtitleClassName}
                      iconClassName={format.iconClassName}
                      hoverColorClass={format.hoverColorClass}
                      items={format.items.map(item => ({
                        title: <span className="text-[#5F0A0A]">{item.title}</span>,
                        description: item.description
                      }))}
                    />
                  ))}
               </div>

               {/* Calendar Integration - Jony Ive Style */}
               <ClubCalendarWidget onOpenCalendar={onOpenCalendar} />

               {/* Footer Note */}
               <div className="mt-10 pt-10 border-t border-slate-200 text-center">
                  <p className="text-slate-400 font-medium text-sm uppercase tracking-widest mb-2">Рекомендация</p>
                  <p className="text-2xl md:text-3xl font-bold text-slate-900">
                    Совмещайте форматы для максимального результата.
                  </p>
               </div>
            </div>
         </div>
      </div>
    </RevealOnScroll>
  );
}