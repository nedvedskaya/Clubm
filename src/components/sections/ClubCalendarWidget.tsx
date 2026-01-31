import { Monitor, MapPin, Calendar as CalendarIcon } from "lucide-react";
import { AuroraBackground } from "../ui/aurora-background";
import { calendarData } from "../data/calendarEvents";
import { sanitizeHTML } from "../../utils/security";

interface ClubCalendarWidgetProps {
  onOpenCalendar: () => void;
}

export function ClubCalendarWidget({ onOpenCalendar }: ClubCalendarWidgetProps) {
  // Get current month events (February 2026) for the widget
  const currentMonth = calendarData[0]; // February 2026 is at index 0

  return (
    <div className="mt-20 mb-16 relative z-20">
      <div className="text-center mb-10">
         <h3 className="text-3xl md:text-4xl font-black text-slate-900 uppercase tracking-tight">
            Календарь ближайших событий
         </h3>
      </div>

      <div className="flex justify-center">
        <div className="relative w-full max-w-[480px] transform transition-all duration-500 hover:-translate-y-1 group/cal">
          {/* Ambient Atmosphere Glow */}
          <div className="absolute -inset-10 bg-gradient-to-tr from-blue-600/10 via-indigo-600/5 to-transparent rounded-[100%] blur-3xl opacity-0 group-hover/cal:opacity-100 transition duration-1000"></div>
          
          {/* Card Container */}
          <div className="relative bg-gradient-to-br from-[#0f172a] via-[#1e1b4b] to-[#172554] rounded-[3rem] p-8 shadow-[0_20px_40px_-10px_rgba(30,27,75,0.4)] border border-white/10 overflow-hidden">
             
             {/* Background Glow Effects & Noise (Like Method Block) */}
             <AuroraBackground 
               variant="blue-glow" 
               className="absolute top-0 right-0 w-[300px] h-[300px] -mr-20 -mt-20 mix-blend-screen animate-pulse duration-3000" 
               blur="blur-[80px]" 
             />
             <AuroraBackground 
               variant="red-glow" 
               className="absolute bottom-0 left-0 w-[250px] h-[250px] -ml-10 -mb-10 mix-blend-screen" 
               blur="blur-[60px]" 
             />
             <div className="absolute inset-0 opacity-[0.15] mix-blend-overlay pointer-events-none bg-[url('/assets/noise.svg')]"></div>

             <div className="relative z-10 flex flex-col h-full">
                {/* Header - Badge Only */}
                <div className="mb-10 text-center">
                   <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm px-3 py-1 rounded-full border border-white/10 shadow-lg">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></div>
                      <span className="text-[10px] font-bold text-blue-100 uppercase tracking-[0.2em]">Февраль 2026</span>
                   </div>
                </div>

                <div className="space-y-6 mb-8">
                   {currentMonth.events.slice(0, 4).map((ev, idx) => (
                     <div key={idx} className="flex gap-5 items-center group/item cursor-default">
                        <div className="w-14 h-14 flex-shrink-0 bg-white/10 backdrop-blur-md rounded-[1rem] shadow-inner border border-white/10 flex flex-col items-center justify-center group-hover/item:scale-105 transition-transform duration-300">
                           <span className="text-xl font-black text-white leading-none mb-0.5">{ev.d}</span>
                           <span className="text-[8px] font-bold text-white/50 uppercase tracking-widest">ФЕВ</span>
                        </div>
                        <div>
                           <h3 className="text-lg font-black text-white uppercase leading-[0.9] mb-1.5" dangerouslySetInnerHTML={{ __html: sanitizeHTML(ev.t.replace(/\n/g, '<br/>')) }}></h3>
                           <div className="flex items-center gap-2 text-blue-200 font-medium text-xs">
                              {ev.type === 'ONLINE' ? (
                                <Monitor className="w-3.5 h-3.5 text-blue-400" />
                              ) : (
                                <MapPin className="w-3.5 h-3.5 text-brand-400" />
                              )}
                              <span>{ev.type === 'ONLINE' ? 'Онлайн' : 'Москва'} • {ev.time.split(' ')[0]}</span>
                           </div>
                        </div>
                     </div>
                   ))}
                </div>

                {/* Bottom Button */}
                <div className="mt-auto">
                   <button 
                      onClick={onOpenCalendar}
                      className="group/btn relative w-full bg-white hover:bg-blue-50 text-[#0f172a] rounded-[2rem] py-5 px-6 flex items-center justify-center gap-3 transition-all duration-500 shadow-xl shadow-black/20 active:scale-[0.98] overflow-hidden"
                   >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-slate-200/50 to-transparent -translate-x-[100%] group-hover/btn:animate-[shimmer_1.5s_infinite]"></div>
                      <span className="relative font-bold text-sm uppercase tracking-[0.15em] pl-1">Полное расписание</span>
                      <CalendarIcon className="relative w-5 h-5 text-[#1e1b4b] group-hover/btn:text-blue-600 transition-colors duration-300" />
                   </button>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}