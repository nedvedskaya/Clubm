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
import { Building2, User, FileText, MessageCircle, ShieldCheck, Clock, Check, PlayCircle, BookOpen, ScrollText, Award } from 'lucide-react';

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
    <section>
      <BackButton onClick={() => onNavigate('page-home')} className="mb-6 md:mb-10" />

      {/* Hero Card: Deep Blue & Glares - Left Aligned */}
      <RevealOnScroll className="max-w-[500px] md:max-w-[1200px] mx-auto relative mb-24 px-4">
        <div className="group relative bg-[#0B1120] rounded-[3rem] p-8 xs:p-10 md:p-20 text-left overflow-hidden shadow-2xl border border-white/10">
          
          {/* Enhanced Glare / Ambient Lighting */}
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_0%_0%,#334155,transparent_60%)] opacity-30" />
          <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_100%_0%,#1e293b,transparent_50%)] opacity-30" />
          <div className="absolute -top-[30%] -left-[10%] w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-[120px] pointer-events-none mix-blend-screen" />
          <div className="absolute top-[20%] right-[10%] w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none mix-blend-screen" />
          
          {/* Content Layer */}
          <div className="relative z-10 flex flex-col items-start">
            
            {/* Badge */}
            <div className="inline-flex items-center gap-3 px-6 py-2.5 bg-white/10 backdrop-blur-md border border-white/10 rounded-full mb-10">
              <span className="relative flex h-2.5 w-2.5">
                  <span className="relative inline-flex rounded-full h-full w-full bg-[#7F1D1D]"></span>
              </span>
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-slate-200 font-sans">Онлайн-курс</span>
            </div>

            {/* Typography */}
            <h1 className="text-3xl xs:text-4xl md:text-7xl font-black uppercase leading-[1.1] tracking-tight mb-8 flex flex-col items-start w-full text-white">
              <span className="whitespace-nowrap">Профессиональный</span>
              <span className="whitespace-nowrap">Менеджер</span>
            </h1>

            <p className="text-lg md:text-2xl text-slate-400 font-normal mb-10 max-w-xl leading-relaxed tracking-tight text-left">
               Передайте продажи <br className="md:hidden" />профессионалу. <br />
               <span className="text-white">Полная автономность от собственника.</span>
            </p>

            {/* Action Area */}
            <div className="flex flex-col items-start gap-4 w-full max-w-xs mb-12">
              <ShinyButton 
                  variant="custom"
                  onClick={scrollToModules}
                  withArrow={false}
                  className="w-full py-5 rounded-full bg-white text-slate-900 hover:bg-slate-100 text-[13px] tracking-widest font-bold uppercase transition-all duration-300 border-none shadow-lg"
              >
                  Содержание
              </ShinyButton>

              <ShinyButton 
                  variant="custom" 
                  onClick={scrollToFullAccess}
                  className="w-full py-5 rounded-full bg-[#450a0a] hover:bg-[#5F0A0A] text-white text-[13px] tracking-widest font-bold uppercase shadow-lg transition-colors duration-300 border-none"
              >
                  Начать обучение
              </ShinyButton>
            </div>
            
            {/* Divider */}
            <div className="w-full max-w-xs h-px bg-white/10 mb-12" />
            
            {/* Features Grid - 2x2 Layout Left Aligned */}
            <div className="grid grid-cols-2 gap-x-8 gap-y-10 w-full max-w-xs">
               <MinimalFeature icon={PlayCircle} label="Видео-уроки" theme="dark" align="left" />
               <MinimalFeature icon={ScrollText} label="Скрипты" theme="dark" align="left" />
               <MinimalFeature icon={BookOpen} label="Техкарты" theme="dark" align="left" />
               <MinimalFeature icon={Award} label="Сертификат" theme="dark" align="left" />
            </div>

          </div>
        </div>
      </RevealOnScroll>

      {/* ROI Section */}
      <RevealOnScroll className="max-w-3xl mx-auto mb-24 px-6">
        <div className="bg-white rounded-[2rem] p-10 md:p-14 text-center border border-slate-100 shadow-xl">
           <div className="w-12 h-12 mx-auto bg-slate-50 rounded-2xl flex items-center justify-center mb-8 text-slate-900">
              <Clock className="w-6 h-6" strokeWidth={1.5} />
           </div>
           
           <h3 className="text-3xl md:text-4xl font-semibold text-slate-900 mb-6 tracking-tight">
             Окупаемость: <span className="text-[#5F0A0A]">1 неделя</span>
           </h3>
           
           <p className="text-slate-500 text-lg leading-relaxed max-w-xl mx-auto">
             Стоимость курса эквивалентна <span className="text-slate-900 font-medium">одному проданному комплексу</span> «полировка + керамика». Инвестиция возвращается мгновенно.
           </p>
        </div>
      </RevealOnScroll>

      {/* Double Benefit Section */}
      <RevealOnScroll className="max-w-[1200px] mx-auto mb-32 px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold text-slate-900 tracking-tight mb-4">Ценность</h2>
          <p className="text-slate-400 text-lg">Две стороны одной монеты</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Owner Card */}
          <div className="bg-white rounded-[2.5rem] p-10 md:p-12 shadow-xl border border-slate-100 flex flex-col h-full hover:shadow-2xl transition-shadow duration-500">
            <div className="flex items-center gap-5 mb-10">
               <div className="w-14 h-14 bg-slate-50 rounded-full flex items-center justify-center text-slate-900">
                  <Building2 className="w-7 h-7" strokeWidth={1.5} />
               </div>
               <h3 className="text-2xl font-bold text-slate-900 tracking-tight">Владельцу</h3>
            </div>
            
            <div className="space-y-8 flex-grow">
               <BenefitItem title="Свобода" text="Вы больше не привязаны к телефону 24/7." />
               <BenefitItem title="Прогноз" text="Конверсия и выручка становятся предсказуемыми." />
               <BenefitItem title="Система" text="Стандарт обучения, который остается в компании навсегда." />
            </div>
          </div>

          {/* Manager Card */}
          <div className="bg-white rounded-[2.5rem] p-10 md:p-12 shadow-xl border border-slate-100 flex flex-col h-full hover:shadow-2xl transition-shadow duration-500">
            <div className="flex items-center gap-5 mb-10">
               <div className="w-14 h-14 bg-slate-50 rounded-full flex items-center justify-center text-slate-900">
                  <User className="w-7 h-7" strokeWidth={1.5} />
               </div>
               <h3 className="text-2xl font-bold text-slate-900 tracking-tight">Менеджеру</h3>
            </div>
            
            <div className="space-y-8 flex-grow">
               <BenefitItem title="Доход" text="Процент с продаж растет вместе с высоким чеком." />
               <BenefitItem title="Статус" text="Переход от «приемщика» к эксперту по продажам." />
               <BenefitItem title="Арсенал" text="Скрипты и техники, которые работают безотказно." />
            </div>
          </div>
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
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8">
               <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
               <span className="text-[10px] uppercase tracking-[0.2em] font-medium text-white/80">Премиум доступ</span>
            </div>
            
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
        <GlassCard className="!bg-white !shadow-xl !border-slate-100 !backdrop-blur-none">
          <div className="relative z-10 p-4">
            <div className="text-center mb-12">
               <h2 className="text-3xl font-semibold text-slate-900 tracking-tight">Частые вопросы</h2>
            </div>

            <div className="space-y-4">
              {faqData.map((item, idx) => (
                <AccordionItem key={idx} question={item.question}>
                  <p dangerouslySetInnerHTML={{ __html: item.answer }} />
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

// Minimal Components for Jony Ive Style

function MinimalFeature({ 
  icon: Icon, 
  label, 
  theme = 'light',
  align = 'center'
}: { 
  icon: any, 
  label: string, 
  theme?: 'light' | 'dark',
  align?: 'center' | 'left'
}) {
  const isDark = theme === 'dark';
  const isLeft = align === 'left';
  
  return (
    <div className={`flex flex-col ${isLeft ? 'items-start' : 'items-center'} gap-3 group cursor-default`}>
       <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:shadow-lg ${
         isDark 
           ? 'bg-white/10 text-slate-300 group-hover:bg-[#5F0A0A] group-hover:text-white' 
           : 'bg-slate-50 text-slate-400 group-hover:bg-[#5F0A0A] group-hover:text-white'
       }`}>
          <Icon className="w-5 h-5" strokeWidth={1.5} />
       </div>
       <span className={`text-xs font-bold uppercase tracking-widest transition-colors duration-300 ${
         isDark 
           ? 'text-slate-400 group-hover:text-white' 
           : 'text-slate-400 group-hover:text-slate-900'
       }`}>{label}</span>
    </div>
  )
}

function BenefitItem({ title, text }: { title: string; text: string }) {
  return (
    <div className="flex items-start gap-5 group">
      <div className="mt-1 text-slate-300 group-hover:text-[#5F0A0A] transition-colors duration-300 shrink-0">
         <Check className="w-5 h-5" strokeWidth={3} />
      </div>
      <div>
         <p className="text-slate-900 font-bold mb-2 text-lg tracking-tight">{title}</p>
         <p className="text-slate-500 text-base leading-relaxed">{text}</p>
      </div>
    </div>
  );
}

function FeatureCard({ icon: Icon, title, description }: { icon: any, title: string, description: string }) {
  return (
     <div className="bg-white rounded-[2rem] p-8 md:p-10 flex flex-col md:flex-row items-start gap-8 shadow-md border border-slate-100 transition-all duration-500 hover:shadow-xl hover:-translate-y-1">
        <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-900 shrink-0">
           <Icon className="w-7 h-7" strokeWidth={1.5} />
        </div>
        <div>
           <h3 className="text-xl font-bold text-slate-900 mb-3 tracking-tight">{title}</h3>
           <p className="text-slate-500 leading-relaxed font-light text-lg">{description}</p>
        </div>
     </div>
  );
}