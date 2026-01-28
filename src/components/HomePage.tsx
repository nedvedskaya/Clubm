import { useEffect, useRef } from 'react';
import RevealOnScroll from './RevealOnScroll';
import { ActionButton } from './ui/action-button';
import { StatusBadge } from './ui/status-badge';
import { GlassCard } from './ui/glass-card';
import { SectionTitle } from './ui/section-title';
import { AuroraBackground } from './ui/aurora-background';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export default function HomePage({ onNavigate }: HomePageProps) {
  return (
    <section>
      {/* Hero Header */}
      <RevealOnScroll className="text-center mb-6 md:mb-10 animate-float">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4 md:mb-6">
          Клуб <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-800 to-red-600">менеджеров</span>
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-medium">
          Сообщество предпринимателей в автобизнесе и профессиональное обучение менеджеров.
        </p>
      </RevealOnScroll>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 auto-rows-[minmax(180px,auto)]">
        {/* Card 1: CLUB - PRIMARY */}
        <RevealOnScroll
          className="md:col-span-12"
          onClick={() => onNavigate('page-club')}
        >
           <div className="relative group cursor-pointer overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-[#0f172a] via-[#1e1b4b] to-[#172554] p-8 md:p-14 shadow-2xl border border-white/5 flex flex-col justify-center h-full transition-all duration-500 hover:scale-[1.01] hover:shadow-[0_20px_60px_-15px_rgba(30,58,138,0.3)]">
             {/* Background Glow Effects */}
             <AuroraBackground 
               variant="blue-glow" 
               className="absolute top-0 right-0 w-[600px] h-[600px] -mr-40 -mt-40 mix-blend-screen animate-pulse duration-3000 opacity-60 group-hover:opacity-80 transition-opacity" 
             />
             <AuroraBackground 
               variant="red-glow" 
               className="absolute bottom-0 left-0 w-[400px] h-[400px] -ml-20 -mb-20 mix-blend-screen opacity-40 group-hover:opacity-60 transition-opacity" 
             />
             
             {/* Subtle noise texture */}
             <div className="absolute inset-0 opacity-[0.15] mix-blend-overlay pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
             
             <div className="relative z-10">
              <div className="inline-flex relative group cursor-default mb-8">
                 <div className="relative px-5 py-2.5 rounded-full bg-[#5F0A0A] border border-white/10 shadow-[0_0_20px_rgba(220,38,38,0.3)] flex items-center gap-2 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 animate-shimmer" />
                    <span className="relative z-10 text-[10px] sm:text-xs font-extrabold uppercase tracking-[0.15em] text-white">Бизнес-сообщество</span>
                 </div>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase leading-[0.95] tracking-tight mb-6 text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-slate-400 drop-shadow-2xl">
                Метод: система управления прибылью
              </h2>
              <p className="text-base md:text-lg text-slate-300 font-medium leading-relaxed max-w-2xl mb-8 border-l-2 border-white/10 pl-6">
                Бизнес-сообщество для предпринимателей в автоиндустрии.
              </p>
              <ActionButton variant="white">Узнать больше</ActionButton>
            </div>
          </div>
        </RevealOnScroll>

        {/* Card 2: COURSE */}
        <RevealOnScroll
          className="md:col-span-7"
          onClick={() => onNavigate('page-course')}
        >
          <GlassCard 
            variant="interactive" 
            className="group flex flex-col justify-between h-full ring-2 ring-slate-200 hover:ring-slate-400"
          >
            <AuroraBackground 
              variant="slate" 
              className="absolute -top-10 -right-10 w-32 md:w-48 h-32 md:h-48 opacity-0 group-hover:opacity-60 transition-opacity duration-500" 
            />
            
            <div className="relative z-10">
              <StatusBadge variant="default" className="mb-4 md:mb-5">
                Онлайн-курс
              </StatusBadge>

              <SectionTitle className="mb-2 md:mb-3 !text-2xl sm:!text-3xl md:!text-4xl">
                Профессиональный менеджер
              </SectionTitle>
              <p className="text-base md:text-lg text-slate-600 font-medium leading-relaxed">
                Практический онлайн-курс по продажам для менеджеров в детейлинге.
              </p>
            </div>

            <div className="relative z-10 mt-6 md:mt-8">
              <ActionButton variant="secondary">Смотреть программу</ActionButton>
            </div>
          </GlassCard>
        </RevealOnScroll>

        {/* Card 3: MASTERCLASS */}
        <RevealOnScroll
          className="md:col-span-5"
          onClick={() => onNavigate('page-masterclass')}
        >
          <GlassCard 
             className="group relative flex flex-col justify-between cursor-pointer overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 ring-2 ring-slate-700 hover:ring-slate-600 transition-all duration-500 hover:shadow-2xl h-full border-none"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900 to-slate-800" />
            <AuroraBackground 
              variant="red-intense" 
              className="absolute -top-16 md:-top-24 -right-16 md:-right-24 w-56 md:w-80 h-56 md:h-80 opacity-20 group-hover:opacity-30 transition-opacity duration-500" 
            />

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4 md:mb-5">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75" />
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500 shadow-lg shadow-red-500/50" />
                </span>
                <span className="text-xs font-extrabold uppercase tracking-widest text-slate-400">Offline</span>
              </div>
              <SectionTitle className="text-white mb-2 md:mb-3 leading-tight !text-2xl sm:!text-3xl md:!text-4xl">
                Мастер-классы<br />в Москве
              </SectionTitle>
              <p className="text-base md:text-lg text-slate-300 font-medium leading-relaxed">
                Интенсивные очные занятия и нетворкинг в столице
              </p>
            </div>

            <div className="relative z-10 mt-6 md:mt-8">
              <ActionButton variant="white">Забронировать</ActionButton>
            </div>
          </GlassCard>
        </RevealOnScroll>
      </div>
    </section>
  );
}