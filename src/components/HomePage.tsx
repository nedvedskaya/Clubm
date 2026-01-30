import { useEffect, useRef } from 'react';
import RevealOnScroll from './RevealOnScroll';
import { ShinyButton } from './ui/shiny-button';
import { StatusBadge } from './ui/status-badge';
import { GlassCard } from './ui/glass-card';
import { SectionTitle } from './ui/section-title';
import { ShimmerBadge } from './ui/shimmer-badge';
import { AuroraBackground } from './ui/aurora-background';
import { useNavigation } from './NavigationContext';
import { StructuredData } from './StructuredData';
import { SEO } from './SEO';

export default function HomePage() {
  const { navigate } = useNavigation();

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Клуб менеджеров детейлинга",
    "url": "https://club-managers.ru",
    "logo": "https://club-managers.ru/logo.png",
    "description": "Сообщество предпринимателей в автобизнесе и профессиональное обучение менеджеров.",
    "sameAs": [
      "https://vk.com/club_managers",
      "https://t.me/club_manageer"
    ]
  };

  return (
    <section>
      <SEO 
        title="Клуб менеджеров детейлинга | Главная"
        description="Закрытое сообщество владельцев и менеджеров детейлинг-студий. Обучение продажам, готовые скрипты, мастер-классы и нетворкинг."
        keywords="детейлинг, менеджер, обучение, продажи, автобизнес, CRM, скрипты продаж, клуб менеджеров"
        type="website"
      />
      <StructuredData data={organizationSchema} />

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
          onClick={() => navigate('page-club')}
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
             <div className="absolute inset-0 opacity-[0.15] mix-blend-overlay pointer-events-none bg-[url(&quot;data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.03'/%3E%3C/svg%3E&quot;)]"></div>
             
             <div className="relative z-10">
              <div className="inline-flex relative group cursor-default mb-8">
                 <ShimmerBadge variant="brand">Бизнес-сообщество</ShimmerBadge>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase leading-[0.95] tracking-tight mb-6 text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-slate-400 drop-shadow-2xl">
                Метод: <span className="text-xl sm:text-2xl md:text-3xl">система управления прибылью</span>
              </h2>
              <p className="text-base md:text-lg text-slate-300 font-medium leading-relaxed max-w-2xl mb-8 border-l-2 border-white/10 pl-6">
                Бизнес-сообщество для предпринимателей в автоиндустрии.
              </p>
              <ShinyButton 
                variant="glass" 
                className="bg-white/20 hover:bg-white/30 text-white !px-6 !py-3"
                withArrow={false}
              >
                Узнать больше
              </ShinyButton>
            </div>
          </div>
        </RevealOnScroll>

        {/* Card 2: COURSE */}
        <RevealOnScroll
          className="md:col-span-7"
          onClick={() => navigate('page-course')}
        >
          <GlassCard 
            variant="interactive" 
            className="group flex flex-col justify-between h-full ring-2 ring-slate-200 hover:ring-slate-400 relative overflow-hidden bg-white"
          >
            {/* Grid Pattern Background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

            <AuroraBackground 
              variant="slate" 
              className="absolute -top-10 -right-10 w-32 md:w-48 h-32 md:h-48 opacity-0 group-hover:opacity-60 transition-opacity duration-500" 
            />
            
            <div className="relative z-10">
              <StatusBadge variant="default" className="mb-4 md:mb-5">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500" />
                  </span>
                  Онлайн-курс
                </div>
              </StatusBadge>

              <SectionTitle className="mb-2 md:mb-3 !text-2xl sm:!text-3xl md:!text-4xl text-slate-900">
                Профессиональный менеджер
              </SectionTitle>
              <p className="text-base md:text-lg text-slate-600 font-medium leading-relaxed">
                Практический онлайн-курс по продажам для менеджеров в детейлинге.
              </p>
            </div>

            <div className="relative z-10 mt-6 md:mt-8">
              <ShinyButton 
                variant="glass"
                className="!bg-gradient-to-b !from-[#8E2828] !to-[#360808] !text-white !px-6 !py-3 !rounded-xl shadow-lg shadow-[#450a0a]/20 transition-all duration-300 group-hover:shadow-[#450a0a]/40 group-hover:-translate-y-0.5"
                withArrow={false}
              >
                Смотреть программу
              </ShinyButton>
            </div>
          </GlassCard>
        </RevealOnScroll>

        {/* Card 3: MASTERCLASS */}
        <RevealOnScroll
          className="md:col-span-5"
          onClick={() => navigate('page-masterclass')}
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
              <ShinyButton 
                 variant="glass"
                 className="bg-white/10 hover:bg-white/20 !text-white !px-6 !py-3 !rounded-xl"
                 withArrow={false}
              >
                Забронировать
              </ShinyButton>
            </div>
          </GlassCard>
        </RevealOnScroll>
      </div>
    </section>
  );
}
