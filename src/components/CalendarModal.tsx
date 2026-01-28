import { X, Calendar as CalendarIcon, MapPin, Monitor, Clock, ChevronRight } from 'lucide-react';
import { calendarData } from './data/calendarEvents';
import { useLockBodyScroll } from '../hooks/useLockBodyScroll';

interface CalendarModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CalendarModal({ isOpen, onClose }: CalendarModalProps) {
  useLockBodyScroll(isOpen);

  if (!isOpen) return null;

  const months = calendarData;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      <div 
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      ></div>
      
      <div className="relative w-full max-w-4xl bg-white rounded-[2rem] shadow-2xl overflow-hidden flex flex-col max-h-[90vh] animate-in fade-in zoom-in-95 duration-300">
        {/* Header */}
        <div className="p-6 md:p-8 border-b border-slate-100 flex items-center justify-between bg-slate-50/50 sticky top-0 z-10 backdrop-blur-md">
           <div>
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 uppercase tracking-tight">Календарь событий</h2>
              <p className="text-slate-500 text-sm font-medium mt-1">Мероприятия на ближайшие 3 месяца</p>
           </div>
           <button 
             onClick={onClose}
             className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-slate-900 hover:bg-slate-100 transition-colors"
           >
             <X className="w-5 h-5" />
           </button>
        </div>

        {/* Content */}
        <div className="overflow-y-auto p-6 md:p-8 space-y-10">
           {months.map((month, idx) => (
             <div key={idx}>
                <div className="flex items-center gap-4 mb-6 sticky top-0 bg-white/95 py-2 z-10 w-full backdrop-blur-sm">
                   <h3 className="text-lg font-bold text-slate-900 uppercase tracking-widest bg-slate-100 px-4 py-1.5 rounded-full">{month.name}</h3>
                   <div className="h-px flex-grow bg-slate-100"></div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                   {month.events.map((ev, i) => (
                      <div key={i} className="group flex gap-5 p-5 rounded-2xl border border-slate-100 hover:border-slate-300 hover:shadow-lg transition-all duration-300 bg-white">
                         <div className="flex flex-col items-center justify-center w-16 h-16 rounded-xl bg-slate-50 border border-slate-100 group-hover:scale-105 transition-transform">
                            <span className={`text-xl font-black ${ev.type === 'ONLINE' ? 'text-[#1e1b4b]' : 'text-brand-700'}`}>{ev.d}</span>
                            <span className="text-[10px] font-bold text-slate-400 uppercase">{ev.day}</span>
                         </div>
                         
                         <div className="flex-grow">
                            <div className="flex justify-between items-start mb-1">
                               <h4 className="text-base font-bold text-slate-900 uppercase">{ev.t}</h4>
                               <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase border ${
                                  ev.type === 'ONLINE' 
                                  ? 'bg-blue-50 text-blue-700 border-blue-100' 
                                  : 'bg-red-50 text-red-700 border-red-100'
                               }`}>
                                  {ev.type}
                               </span>
                            </div>
                            <p className="text-sm text-slate-500 font-medium mb-3 leading-snug">{ev.desc}</p>
                            <div className="flex items-center gap-2 text-xs font-semibold text-slate-400">
                               <Clock className="w-3.5 h-3.5" />
                               <span>{ev.time}</span>
                            </div>
                         </div>
                      </div>
                   ))}
                </div>
             </div>
           ))}
        </div>
        
        {/* Footer */}
        <div className="p-6 border-t border-slate-100 bg-slate-50/50 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
           <p className="text-xs text-slate-400 font-medium">
              * Расписание может корректироваться. Актуальная информация всегда в боте.
           </p>
           <button 
             onClick={onClose}
             className="px-6 py-2.5 bg-slate-900 text-white rounded-xl font-bold text-sm hover:bg-slate-800 transition-transform active:scale-95"
           >
             Закрыть календарь
           </button>
        </div>
      </div>
    </div>
  );
}