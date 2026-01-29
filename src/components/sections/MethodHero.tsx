import { AuroraBackground } from "../ui/aurora-background";
import { ShinyButton } from "../ui/shiny-button";
import RevealOnScroll from "../RevealOnScroll";

export function MethodHero() {
  const scrollToTariffs = () => {
    const element = document.getElementById('tariffs');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <RevealOnScroll className="lg:col-span-12 mb-24 md:mb-32">
      <div className="bg-gradient-to-br from-[#0f172a] via-[#1e1b4b] to-[#172554] rounded-[2.5rem] p-8 md:p-14 relative overflow-hidden shadow-2xl text-white min-h-[85vh] md:min-h-[90vh] flex flex-col justify-center border border-white/5">
         {/* Background Glow Effects */}
         <AuroraBackground 
           variant="blue-glow" 
           className="absolute top-0 right-0 w-[800px] h-[800px] -mr-40 -mt-40 mix-blend-screen animate-pulse duration-3000" 
         />
         <AuroraBackground 
           variant="red-glow" 
           className="absolute bottom-0 left-0 w-[600px] h-[600px] -ml-20 -mb-20 mix-blend-screen" 
         />
         
         {/* Subtle noise texture */}
         <div className="absolute inset-0 opacity-[0.15] mix-blend-overlay pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

         <div className="relative z-10 flex flex-col items-start max-w-2xl">
            {/* Volumetric Badge */}
            <div className="relative group cursor-default mb-10">
               <div className="absolute -inset-0.5 bg-gradient-to-r from-red-600 to-red-900 rounded-full blur opacity-40 group-hover:opacity-60 transition duration-1000"></div>
               <div className="relative px-6 py-3 rounded-full bg-gradient-to-r from-[#7F1D1D] to-[#450a0a] border border-white/10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.15),0_10px_20px_-5px_rgba(0,0,0,0.5)] flex items-center gap-2 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 translate-x-[-200%] animate-[shimmer_4s_infinite_cubic-bezier(0.4,0,0.2,1)]" />
                  <style>{`
                    @keyframes shimmer {
                      0% { transform: translateX(-200%) skewX(-12deg); }
                      30% { transform: translateX(200%) skewX(-12deg); }
                      100% { transform: translateX(200%) skewX(-12deg); }
                    }
                  `}</style>
                  <span className="relative z-10 text-[10px] sm:text-xs font-extrabold uppercase tracking-[0.2em] text-red-50 text-shadow-sm">Для собственников автобизнеса</span>
               </div>
            </div>

            {/* Title */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-black uppercase leading-[0.95] tracking-tight mb-8 text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-slate-400 drop-shadow-2xl">
              Метод:<br/>
              Система<br/>
              Управления<br/>
              Прибылью
            </h1>

            {/* Description */}
            <p className="text-slate-300 text-lg md:text-xl font-medium leading-relaxed mb-14 max-w-xl border-l-2 border-white/10 pl-6">
              Бизнес-сообщество для предпринимателей в автоиндустрии. От хаоса — к управляемой прибыли и масштабированию.
            </p>

            {/* Premium Button */}
            <ShinyButton onClick={scrollToTariffs} variant="primary">
               Вступить в МЕТОД
            </ShinyButton>
         </div>
      </div>
    </RevealOnScroll>
  );
}