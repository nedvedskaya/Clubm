import React from 'react';
import RevealOnScroll from './RevealOnScroll';
import { BackButton } from './ui/back-button';
import { ContactSection } from './ContactSection';
import { StatusBadge } from './ui/status-badge';
import { pastEvents } from './data/masterclass-content';
import { ChevronsRight } from 'lucide-react';
import { useNavigation } from './NavigationContext';
import { SEO } from './SEO';
import { ShinyButton } from './ui/shiny-button';
import { CONTACTS } from './data/constants';

export default function MasterclassPage() {
  const { navigate } = useNavigation();

  return (
    <section className="bg-transparent min-h-screen relative overflow-hidden text-slate-900">
      <SEO 
        title="Мастер-классы | Клуб менеджеров"
        description="Очные мероприятия и мастер-классы в Москве для менеджеров и владельцев детейлинг-центров. Нетворкинг и обмен опытом."
        keywords="мастер-класс детейлинг, обучение москва, нетворкинг автобизнес, мероприятия для детейлеров"
      />

      <BackButton onClick={() => navigate('page-home')} className="z-50" />

      {/* Hero / Status Message */}
      <RevealOnScroll className="relative z-10 pt-12 pb-16 px-4 md:pt-24 md:pb-24">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight mb-8 leading-tight">
            На ближайшее время <br className="hidden md:block"/>
            <span className="text-slate-400">мастер-классов не запланировано</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto font-medium leading-relaxed mb-8">
            Пока вы можете присоединиться в канал мастер-классов, чтобы не пропустить анонс или посмотреть, как проходили наши прошлые мероприятия.
          </p>
          
          <div className="flex justify-center">
             <ShinyButton 
                href={CONTACTS.telegramChannel} 
                isExternal 
                variant="brand"
                withArrow={false}
                className="!py-4 !px-8 !rounded-xl !bg-[#2AABEE] shadow-lg shadow-blue-400/30 !text-white font-bold tracking-wider uppercase text-sm hover:shadow-blue-400/50 hover:!bg-[#1A90CA] transition-all"
             >
                Канал в Telegram
             </ShinyButton>
          </div>
        </div>
      </RevealOnScroll>

      {/* Past Events Feed */}
      <div className="relative z-10 space-y-24 pb-24 px-4 md:px-8 max-w-7xl mx-auto">
        {pastEvents.map((event, index) => (
          <RevealOnScroll key={event.id} className="relative">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 md:mb-12 gap-4">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-brand-900 font-bold tracking-widest uppercase text-xs md:text-sm">Архив событий</span>
                  <div className="h-px w-8 bg-brand-900/30"></div>
                </div>
                <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-2">{event.title}</h2>
                <div className="flex items-center gap-2 text-slate-500 font-medium text-lg md:text-xl">
                  <span className="text-brand-900">{event.location}</span>
                </div>
              </div>
              <p className="text-slate-600 max-w-md text-sm md:text-base leading-relaxed md:text-right">
                {event.description}
              </p>
            </div>

            {/* Horizontal Swipeable Gallery */}
            <div className="relative group">
               {/* Swipe hint */}
               <div className="md:hidden absolute -top-8 right-0 flex items-center gap-1 text-slate-400 animate-pulse">
                  <span className="text-[10px] uppercase font-bold tracking-widest">Свайп</span>
                  <ChevronsRight className="w-4 h-4" />
               </div>

               <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 md:gap-6 pb-8 -mx-4 px-4 md:mx-0 md:px-0 hide-scroll">
                  {event.images.map((img, imgIdx) => (
                    <div 
                      key={imgIdx} 
                      className="shrink-0 w-[85vw] md:w-[450px] h-[250px] md:h-[320px] relative rounded-[2rem] overflow-hidden snap-center shadow-lg bg-slate-100 border border-slate-200"
                    >
                       <img 
                         src={img} 
                         alt={`${event.title} фото ${imgIdx + 1}`}
                         loading={index === 0 && imgIdx < 2 ? "eager" : "lazy"}
                         fetchPriority={index === 0 && imgIdx < 2 ? "high" : "auto"}
                         decoding="async"
                         width="450"
                         height="320"
                         className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                       />
                       {/* Gradient overlay for better depth */}
                       <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                    </div>
                  ))}
                  
                  {/* Spacer for right padding in scroll */}
                  <div className="shrink-0 w-1 md:w-0" />
               </div>
            </div>

          </RevealOnScroll>
        ))}
      </div>

      {/* Contact Section */}
      <div className="relative z-10 pb-24 px-4">
        <ContactSection 
           rateLimitKey="whatsapp-mc-contact"
           className="max-w-4xl mx-auto"
           title="Остались вопросы?"
           subtitle="Наши менеджеры помогут разобраться"
           buttonText="НАПИСАТЬ В WHATSAPP"
           telegramText="НАПИСАТЬ В TELEGRAM"
           telegramHref={CONTACTS.telegram}
        />
      </div>
    </section>
  );
}
