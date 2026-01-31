import { AuroraBackground } from "../ui/aurora-background";
import { ShimmerBadge } from "../ui/shimmer-badge";
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
         <div className="absolute inset-0 opacity-[0.15] mix-blend-overlay pointer-events-none bg-[url('/assets/noise.svg')]"></div>

         <div className="relative z-10 flex flex-col items-start max-w-2xl">
            {/* Volumetric Badge */}
            <div className="relative group cursor-default mb-10">
               <div className="absolute -inset-0.5 bg-gradient-to-r from-red-600 to-red-900 rounded-full blur opacity-40 group-hover:opacity-60 transition duration-1000"></div>
               <ShimmerBadge variant="brand" className="bg-gradient-to-r from-brand-800 to-brand-900 border-white/10">
                  Для собственников автобизнеса
               </ShimmerBadge>
            </div>

            {/* Title */}
            <h1 className="sm:text-6xl md:text-7xl font-black uppercase leading-[0.95] tracking-tight mb-8 text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-slate-400 drop-shadow-2xl text-[64px]">
              Метод:<br/>
              <span className="sm:text-4xl md:text-5xl leading-[0.95] block mt-2 text-[32px]">
                Система<br/>
                Управления<br/>
                Прибылью
              </span>
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