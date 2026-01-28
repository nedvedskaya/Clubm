import { useState } from 'react';
import RevealOnScroll from './RevealOnScroll';
import { BackButton } from './ui/back-button';
import { AccordionItem } from './ui/accordion-item';
import { ContactSection } from './ContactSection';
import { StatusBadge } from './ui/status-badge';
import { GlassCard } from './ui/glass-card';
import { SectionTitle } from './ui/section-title';
import { courseModules } from './data/courseModules';
import { faqData } from './data/faqData';
import { AuroraBackground } from './ui/aurora-background';
import { ShinyButton } from './ui/shiny-button';
import { CourseModuleCard } from './ui/course-module-card';
import ResultsSlider from './ResultsSlider';
import { Building2, User, FileText, MessageCircle, ShieldCheck } from 'lucide-react';
import { FeatureCard } from './ui/feature-card';
import { sanitizeHTML } from '../utils/security';
import { AudienceBenefitCard } from './ui/audience-benefit-card';

const CourseTag = ({ children }: { children: React.ReactNode }) => (
  <div className="px-2.5 py-2 xs:px-4 md:px-6 md:py-3 rounded-full bg-white border border-slate-200 text-slate-500 font-bold xs:text-[10px] md:text-[13px] tracking-wide shadow-sm hover:border-slate-300 transition-colors cursor-default whitespace-nowrap">
    {children}
  </div>
);

interface CoursePageProps {
  onNavigate: (page: string) => void;
}

export default function CoursePage({ onNavigate }: CoursePageProps) {
  const scrollToModules = () => {
    const modulesGrid = document.getElementById('modules-grid');
    if (modulesGrid) {
      modulesGrid.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToFullAccess = () => {
    const fullAccess = document.getElementById('full-access');
    if (fullAccess) {
      fullAccess.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-transparent min-h-screen pb-20">
      <div className="pt-6 px-4 mb-8">
        <BackButton onClick={() => onNavigate('page-home')} className="mb-0" />
      </div>

      {/* New Clean Hero Card - White Style - Exact Match */}
      <RevealOnScroll className="max-w-[800px] mx-auto relative mb-12 md:mb-24 px-4 md:px-0">
        <div className="bg-white relative overflow-hidden rounded-[2.5rem] md:rounded-[3.5rem] shadow-2xl shadow-slate-200/60 px-6 py-12 md:p-16 text-center border border-slate-100 flex flex-col items-center">
           
           {/* Grid Pattern Background */}
           <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

           {/* Badge */}
           <div className="relative inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full bg-white border border-slate-100 shadow-sm mb-8 z-10">
              <span className="h-2 w-2 rounded-full bg-[#EF4444]"></span>
              <span className="text-[11px] md:text-xs font-bold tracking-[0.15em] uppercase text-slate-500">Онлайн-курс</span>
           </div>

           {/* Title */}
           <h1 className="relative flex flex-col items-center w-full mb-8 px-1 z-10">
             <span className="text-[2rem] xs:text-[2.5rem] sm:text-5xl md:text-[3.5rem] font-black uppercase leading-[1.1] tracking-tight text-[#1e293b]">
               Профессиональный
             </span>
             <span className="text-[2.5rem] xs:text-[3rem] sm:text-6xl md:text-[4.5rem] font-black uppercase leading-[1] tracking-tight text-[#7F1D1D] mt-1 drop-shadow-sm">
               Менеджер
             </span>
           </h1>

           {/* Description */}
           <p className="relative text-slate-500 text-sm md:text-lg max-w-lg mx-auto leading-relaxed mb-12 font-medium px-4 z-10">
             Система подготовки детейлинг-менеджера под ключ. <span className="text-slate-900 font-semibold">Внедрите стандарты продаж, которые приносят прибыль.</span>
           </p>

           {/* Feature Tags - Light Pills Layout (3 then 2) */}
           <div className="relative flex flex-col items-center gap-2 xs:gap-3 mb-12 w-full max-w-[600px] mx-auto px-1 z-10">
              {/* Row 1: 3 items - Force single line on mobile */}
              <div className="flex flex-nowrap justify-center gap-1.5 xs:gap-2 md:gap-3 w-full overflow-x-visible">
                 {['Видео-уроки', 'Скрипты продаж', 'Техкарты'].map((tag) => (
                    <CourseTag key={tag}>{tag}</CourseTag>
                 ))}
              </div>
              {/* Row 2: 2 items */}
              <div className="flex flex-wrap justify-center gap-1.5 xs:gap-2 md:gap-3 w-full">
                 {['Практика', 'Сертификат'].map((tag) => (
                    <CourseTag key={tag}>{tag}</CourseTag>
                 ))}
              </div>
           </div>

           {/* Main CTA Button */}
           <div className="relative w-full max-w-md mx-auto mb-8 px-2 z-10">
              <ShinyButton 
                  onClick={scrollToFullAccess}
                  variant="primary"
                  withArrow={false}
                  className="w-full !py-5 md:!py-6 !rounded-2xl !bg-[#450a0a] !to-[#300505] shadow-xl shadow-[#450a0a]/20 text-sm md:text-base tracking-[0.15em] uppercase font-bold text-white hover:shadow-2xl hover:shadow-[#450a0a]/30 hover:-translate-y-1 transition-all"
              >
                  Приобрести курс
              </ShinyButton>
           </div>
           
           {/* Footer Note */}
           <p className="relative text-slate-300 text-[10px] md:text-[11px] font-semibold tracking-[0.05em] uppercase z-10">
             Мгновенный доступ после оплаты
           </p>

        </div>
      </RevealOnScroll>

      {/* ROI Section */}
      <RevealOnScroll className="max-w-3xl mx-auto mb-32 px-6">
        <div className="text-center p-4">
           
           <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 tracking-tighter">
             Окупаемость: <span className="text-[#5F0A0A]">1 звонок</span>
           </h3>
           
           <p className="text-slate-500 text-xl leading-relaxed max-w-2xl mx-auto font-medium antialiased">
             Стоимость курса равна <span className="text-slate-900 font-bold">одной допродаже</span> «полировка + керамика». Инвестиция окупается мгновенно.
           </p>
        </div>
      </RevealOnScroll>

      {/* Double Benefit Section */}
      <RevealOnScroll className="max-w-[1100px] mx-auto mb-32 px-4">
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-4xl md:text-6xl font-bold text-slate-900 tracking-tighter">Преимущества</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Owner Card */}
          <AudienceBenefitCard 
            icon={Building2}
            title="Владельцу"
            benefits={[
              { title: "Свобода", text: "Вы больше не привязаны к телефону 24/7." },
              { title: "Прогноз", text: "Конверсия и выручка становятся предсказуемыми." },
              { title: "Система", text: "Стандарт обучения, который остается в компании навсегда." }
            ]}
          />

          {/* Manager Card */}
          <AudienceBenefitCard 
            icon={User}
            title="Менеджеру"
            benefits={[
              { title: "Доход", text: "Процент с продаж растет вместе с высоким чеком." },
              { title: "Статус", text: "Переход от «приемщика» к эксперту по продажам." },
              { title: "Арсенал", text: "Скрипты и техники, которые работают безотказно." }
            ]}
          />
        </div>
      </RevealOnScroll>

      {/* What's Inside Section */}
      <RevealOnScroll className="max-w-[1000px] mx-auto mb-32 px-6">
         <div className="text-center mb-16">
            <span className="inline-block text-[#5F0A0A] text-[11px] font-bold uppercase tracking-[0.2em] mb-4">
              Архитектура
            </span>
            <h2 className="text-4xl md:text-5xl font-semibold text-slate-900 mb-6 tracking-tight">Что внутри</h2>
            <p className="text-slate-500 text-xl max-w-2xl mx-auto font-light leading-relaxed">
              Не просто теория. Мы создали набор инструментов для ежедневной работы.
            </p>
         </div>

         <div className="grid gap-6">
            <FeatureCard 
              icon={FileText}
              title="Техкарты услуг"
              description="Полная база знаний по 21 услуге детейлинга. Ваш менеджер будет знать продукт лучше, чем клиент."
            />
            <FeatureCard 
              icon={MessageCircle}
              title="Скрипты продаж"
              description="Готовые речевые модули. Мы убрали «воду» и оставили только то, что закрывает сделки и отрабатывает «дорого»."
            />
            <FeatureCard 
              icon={ShieldCheck}
              title="Система аттестации"
              description="Контроль качества знаний. Вы получаете сотрудника, который доказал свою компетентность на экзамене."
            />
         </div>
      </RevealOnScroll>

      {/* Modules Grid */}
      <div id="modules-grid" className="relative max-w-[1200px] mx-auto px-4 mb-16">
        <div className="text-center mb-16">
           <SectionTitle className="!text-3xl md:!text-5xl !font-semibold !tracking-tight">Программа</SectionTitle>
        </div>
        
        <div className="md:hidden text-center mb-6">
            <span className="text-xs text-slate-400 uppercase tracking-widest font-medium">Свайп для просмотра</span>
        </div>
        
        <div className="flex overflow-x-auto snap-x snap-mandatory hide-scroll gap-6 pb-12 md:grid md:grid-cols-2 lg:grid-cols-3 md:overflow-visible">
          {courseModules.map((module) => (
             <CourseModuleCard key={module.num} module={module} />
          ))}
        </div>
      </div>

      {/* Full Access */}
      <RevealOnScroll
        id="full-access"
        className="max-w-[1200px] mx-auto relative overflow-hidden rounded-[3rem] bg-[#0A0A0A] text-white p-10 md:p-20 shadow-2xl mb-32"
      >
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-[#5F0A0A]/30 to-transparent pointer-events-none" />
        <AuroraBackground variant="brand-glow" className="absolute -top-40 -right-40 w-[800px] h-[800px] opacity-10" />
        
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <StatusBadge variant="dark" size="sm" className="mb-8 border-white/10 bg-white/5 backdrop-blur-md">
               <span className="w-1.5 h-1.5 rounded-full bg-white mr-2"></span>
               Премиум доступ
            </StatusBadge>
            
            <h2 className="text-5xl md:text-7xl font-semibold mb-6 leading-[0.9] tracking-tighter">
              Всё <br />
              включено.
            </h2>
            <p className="text-gray-400 text-lg md:text-xl mb-10 leading-relaxed max-w-md font-light">
              Получите полный доступ ко всем модулям и материалам с выгодой <span className="text-white font-medium">23%</span>.
            </p>
            
            <div className="flex items-center gap-4 text-sm text-gray-500 font-mono uppercase tracking-widest">
               <span>Предложение ограничено</span>
               <span className="w-12 h-px bg-white/10"></span>
               <span>2026</span>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] p-10 text-center relative overflow-hidden group hover:bg-white/10 transition-colors duration-500">
            <p className="text-gray-400 text-[11px] uppercase tracking-[0.3em] mb-6 font-bold">Стоимость</p>
            <div className="flex flex-col items-center gap-2 mb-10">
              <span className="text-xl text-gray-600 line-through font-medium">51 860 ₽</span>
              <span className="text-6xl md:text-7xl font-semibold text-white tracking-tighter">
                39 900 <span className="text-2xl align-top text-gray-500 font-light">₽</span>
              </span>
            </div>

            <ShinyButton 
                href="https://da-school.online/oplata_prodaji_v_deteilinge"
                isExternal
                variant="glass"
                width="full"
                withArrow={false}
                className="!py-5 !text-[13px] !tracking-widest !font-bold !uppercase !rounded-xl"
            >
                Приобрести доступ
            </ShinyButton>
          </div>
        </div>
      </RevealOnScroll>

      {/* Results Slider */}
      <RevealOnScroll className="mb-32">
        <ResultsSlider />
      </RevealOnScroll>

      {/* FAQ Section */}
      <RevealOnScroll className="max-w-4xl mx-auto mb-24 px-4">
        <GlassCard className="!bg-white !shadow-xl !border-slate-200 !backdrop-blur-none border">
          <div className="relative z-10 p-4">
            <div className="text-center mb-12">
               <h2 className="text-3xl font-semibold text-slate-900 tracking-tight">Частые вопросы</h2>
            </div>

            <div className="space-y-4">
              {faqData.map((item, idx) => (
                <AccordionItem key={idx} question={item.question}>
                  <p dangerouslySetInnerHTML={{ __html: sanitizeHTML(item.answer) }} />
                </AccordionItem>
              ))}
            </div>
          </div>
        </GlassCard>
      </RevealOnScroll>

      {/* Contact Section */}
      <ContactSection 
        rateLimitKey="whatsapp-course-contact"
        className="mb-16 max-w-4xl mx-auto"
      />
    </section>
  );
}
