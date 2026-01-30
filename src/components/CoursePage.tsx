import { useState } from 'react';
import RevealOnScroll from './RevealOnScroll';
import { BackButton } from './ui/back-button';
import { AccordionItem } from './ui/accordion-item';
import { ContactSection } from './ContactSection';
import { courseModules } from './data/courseModules';
import { faqData } from './data/faqData';
import { courseBonuses, whatsInsideData, heroTags, fullAccessFeatures } from './data/course-content';
import { ShinyButton } from './ui/shiny-button';
import { CourseModuleCard } from './ui/course-module-card';
import { BonusCard } from './ui/bonus-card';
import { CONTACTS } from './data/constants';
import ResultsSlider from './ResultsSlider';
import { Check, ChevronsRight } from 'lucide-react';
import { sanitizeHTML } from '../utils/security';
import { ShimmerBadge } from './ui/shimmer-badge';
import { SectionLabel } from './ui/section-label';
import { GradientHeading } from './ui/gradient-heading';
import { CourseTag } from './ui/course-tag';
import { useNavigation } from './NavigationContext';
import { useScrollTo } from '../hooks/useScrollTo';
import { StructuredData } from './StructuredData';
import { SEO } from './SEO';

export default function CoursePage() {
  const { navigate } = useNavigation();
  const { scrollToElement } = useScrollTo();

  const handleScrollToFullAccess = () => {
    scrollToElement('full-access');
  };

  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "Профессиональный менеджер",
    "description": "Практический онлайн-курс по продажам для менеджеров в детейлинге. Скрипты, работа с возражениями, повышение чека.",
    "provider": {
      "@type": "Organization",
      "name": "Клуб менеджеров детейлинга",
      "sameAs": "https://club-managers.ru"
    },
    "offers": {
      "@type": "Offer",
      "category": "Paid",
      "priceCurrency": "RUB",
      "price": "39900"
    },
    "educationalLevel": "Beginner to Advanced",
    "teaches": "Продажи в детейлинге, Работа с возражениями, Увеличение среднего чека"
  };

  return (
    <section className="bg-transparent min-h-screen pb-20">
      <SEO 
        title="Курс Профессиональный менеджер | Обучение продажам"
        description="Практический онлайн-курс для менеджеров детейлинг студий. Скрипты продаж, работа с возражениями, повышение среднего чека. Старт сразу после оплаты."
        keywords="курсы для менеджеров, обучение детейлинг, скрипты продаж, работа с клиентами, повышение чека"
        type="product"
        image="https://da-school.online/public/course_og.jpg"
      />
      <StructuredData data={courseSchema} />

      <div className="pt-6 px-4 mb-8">
        <BackButton onClick={() => navigate('page-home')} className="mb-0" />
      </div>

      {/* New Clean Hero Card - White Style - Exact Match */}
      <RevealOnScroll className="max-w-[800px] mx-auto relative mb-12 md:mb-24 px-4 md:px-0">
        <div className="bg-white relative overflow-hidden rounded-[2.5rem] md:rounded-[3.5rem] shadow-2xl shadow-slate-200/60 px-6 py-12 md:p-16 text-center border border-slate-100 flex flex-col items-center">
           
           {/* Grid Pattern Background */}
           <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

           {/* Badge */}
           <ShimmerBadge variant="white" className="mb-8 z-10 gap-3" icon={
               <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#FF0000] shadow-[0_0_12px_rgba(255,0,0,0.8)]"></span>
               </span>
           }>
             Онлайн-курс
           </ShimmerBadge>

           {/* Title */}
           <h1 className="relative flex flex-col items-center w-full mb-8 px-1 z-10 text-center">
             <span className="text-[1.6rem] sm:text-5xl md:text-[3.5rem] font-black uppercase leading-[1.1] tracking-tight text-[#1e293b] w-full break-words">
               Профессиональный
             </span>
             <span className="text-[2rem] sm:text-6xl md:text-[4.5rem] font-black uppercase leading-[1] tracking-tight text-[#7F1D1D] mt-1 drop-shadow-sm">
               Менеджер
             </span>
           </h1>

           {/* Description */}
           <p className="relative text-slate-500 md:text-lg max-w-lg mx-auto leading-relaxed mb-12 font-medium px-4 z-10 text-[16px]">
             Система подготовки детейлинг-менеджера под ключ. <span className="text-slate-900 font-semibold text-[15px]">Внедрите стандарты продаж, которые приносят прибыль.</span>
           </p>

           {/* Feature Tags - Adaptive Layout */}
           <div className="relative flex flex-wrap justify-center gap-2 sm:gap-3 mb-12 w-full max-w-[600px] mx-auto px-1 z-10">
               {heroTags.map((tag) => (
                  <CourseTag key={tag}>{tag}</CourseTag>
               ))}
           </div>

           {/* Main CTA Button */}
           <div className="relative w-full max-w-md mx-auto mb-8 px-2 z-10">
              <ShinyButton 
                  onClick={handleScrollToFullAccess}
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

      {/* Bonus Section - Compact & Styled */}
      <RevealOnScroll className="max-w-[900px] mx-auto mb-20 px-4">
        <div className="text-center mb-8 relative">
           {/* Ambient Glow */}
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] bg-brand-900/5 blur-[60px] rounded-full pointer-events-none" />
           
           <GradientHeading className="text-5xl md:text-7xl">Бонусы</GradientHeading>
           
           <p className="text-slate-500 text-lg font-medium max-w-lg mx-auto leading-relaxed tracking-tight">
             Выигрывают все: и владелец, и менеджер.
           </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {courseBonuses.map((card, index) => (
             <BonusCard 
               key={index} 
               variant="premium" 
               title={card.title} 
               items={card.items} 
            />
          ))}
        </div>
      </RevealOnScroll>

      {/* What's Inside Section - Compact & Animated */}
      <RevealOnScroll className="max-w-[1000px] mx-auto mb-32 px-4">
         <div className="text-center mb-12 relative">
             <SectionLabel>Наполнение</SectionLabel>
             <GradientHeading className="text-6xl md:text-8xl text-[48px]">Что внутри</GradientHeading>
             <p className="text-slate-500 text-lg max-w-xl mx-auto font-medium leading-relaxed">
               Инструменты для ежедневной работы, а не просто теория.
             </p>
         </div>

         <div className="grid md:grid-cols-3 gap-4 md:gap-6">
            {whatsInsideData.map((card, idx) => (
              <div key={idx} className="relative bg-white rounded-[2rem] p-6 md:p-8 flex flex-col h-full shadow-[0_10px_30px_-10px_rgba(0,0,0,0.05)] border border-slate-100 transition-all duration-500 hover:shadow-[0_20px_40px_-10px_rgba(95,10,10,0.1)] hover:-translate-y-1 group overflow-hidden">
                 <div className="absolute top-0 right-0 w-32 h-32 bg-slate-50 rounded-bl-[4rem] -mr-10 -mt-10 transition-colors duration-500 group-hover:bg-brand-900/5" />
                 
                 <div className="relative w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-brand-900 mb-6 shadow-sm border border-slate-100 group-hover:scale-110 transition-transform duration-500">
                    {card.icon}
                 </div>
                 
                 <h3 className="text-xl font-bold text-slate-900 mb-3 tracking-tight group-hover:text-brand-900 transition-colors duration-300">{card.title}</h3>
                 <p className="text-slate-500 text-[15px] leading-relaxed font-medium">
                   {card.text}
                 </p>
              </div>
            ))}
         </div>
      </RevealOnScroll>

      {/* Modules Grid */}
      <div id="modules-grid" className="relative max-w-[1200px] mx-auto px-4 mb-16 md:mb-24">
        <div className="text-center mb-12 relative">
             <SectionLabel>Обучение</SectionLabel>
             <GradientHeading className="text-6xl md:text-8xl text-[48px]">Программа</GradientHeading>
             <p className="text-slate-500 text-lg max-w-xl mx-auto font-medium leading-relaxed">
               Пошаговый план развития от новичка до профессионала.
             </p>
         </div>
        
        <div className="md:hidden text-center mb-6">
            <span className="text-xs text-slate-400 uppercase tracking-widest font-medium">Свайп для просмотра</span>
        </div>
        
        <div className="flex overflow-x-auto snap-x snap-proximity hide-scroll gap-4 pb-4 md:gap-6 md:pb-0 md:grid md:grid-cols-2 lg:grid-cols-3 md:overflow-visible px-4 md:px-0 -mx-4 md:mx-0">
          <div className="shrink-0 w-4 md:hidden" /> {/* Left spacer */}
          {courseModules.map((module) => (
             <CourseModuleCard key={module.num} module={module} />
          ))}
          <div className="shrink-0 w-4 md:hidden" /> {/* Right spacer */}
        </div>
      </div>

      {/* ROI Section - Minimalist & Compact */}
      <RevealOnScroll className="max-w-[700px] mx-auto mb-16 px-4 pt-0">
         <div className="relative z-10 flex flex-col items-center text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white border border-slate-100 mb-5 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)]">
               <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-slate-400">Окупаемость</span>
            </div>

            {/* Main Metric */}
            <h3 className="text-[4.5rem] md:text-[6.5rem] font-black leading-[0.85] tracking-tighter mb-4 bg-gradient-to-b from-brand-900 to-brand-800 bg-clip-text text-transparent drop-shadow-sm select-none transition-transform duration-700 hover:scale-105">
              1 звонок
            </h3>

            {/* Description */}
            <p className="text-slate-500 text-lg md:text-xl font-medium leading-snug max-w-md mx-auto tracking-tight mb-5">
              Стоимость курса равна <span className="text-slate-900 font-bold">всего одной допродаже</span> <br/> «Полировка + керамика».
            </p>
            
            {/* Bottom Tagline */}
            <p className="text-[#8E1C1C] text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase opacity-80">
               Инвестиция окупается мгновенно
            </p>
         </div>
      </RevealOnScroll>

      {/* Full Access - Premium Redesign - Dark Burgundy Theme */}
      <RevealOnScroll
        id="full-access"
        className="max-w-md mx-auto relative mb-32 px-4"
      >
        <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-b from-[#8E2828] to-[#360808] text-white shadow-2xl shadow-[#450a0a]/50 border border-white/10 group ring-1 ring-white/10 isolate">
           
           {/* Smoother Shimmer Effect */}
           <div className="absolute inset-0 -translate-x-[100%] animate-[shimmer_5s_infinite] bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12 z-0 pointer-events-none ease-in-out" />

           {/* Ambient Lighting / Glows */}
           <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-white/5 blur-[100px] rounded-full pointer-events-none mix-blend-overlay" />
           <div className="absolute top-1/2 right-[-100px] w-[300px] h-[300px] bg-[#FF4D4D]/10 blur-[90px] rounded-full pointer-events-none mix-blend-screen" />
           
           {/* Content Container */}
           <div className="relative z-10 flex flex-col pt-12 px-8 pb-8">
              
              {/* Header */}
              <div className="mb-8">
                 <span className="block text-[13px] font-bold tracking-[0.2em] uppercase text-white/70 mb-2 ml-1">Тариф</span>
                 <h2 className="text-[40px] leading-[0.9] font-black tracking-tighter text-white drop-shadow-xl">
                    Профессионал
                 </h2>
              </div>
              
              {/* Description */}
              <div className="relative pl-6 py-1 mb-10 border-l-2 border-white/30">
                 <p className="text-white/95 text-[1.1rem] font-medium leading-snug tracking-tight drop-shadow-md italic">
                    Внедрите стандарты продаж, которые приносят прибыль без вашего участия.
                 </p>
              </div>

              {/* Features List */}
              <div className="space-y-5 mb-12">
                 {fullAccessFeatures.map((item, i) => (
                   <div key={i} className="flex items-center gap-4 group/item">
                     {/* Glassy Checkmark */}
                     <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0 backdrop-blur-md border border-white/20 shadow-inner group-hover/item:scale-110 transition-transform duration-300">
                       <Check className="w-4 h-4 text-white" strokeWidth={3} />
                     </div>
                     <span className="text-white font-bold text-[1.05rem] tracking-tight drop-shadow-sm font-normal">{item}</span>
                   </div>
                 ))}
              </div>

              {/* Price Card - White Bottom Block */}
              <div className="relative bg-white rounded-[2.5rem] p-8 border border-slate-100 shadow-xl overflow-hidden">
                  
                  {/* Subtle Inner Highlight */}
                  <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
                  
                  <div className="relative z-10 flex flex-col items-center text-center">
                     <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-slate-400 mb-6">Стоимость</span>
                     
                     <div className="relative mb-2">
                        <span className="text-xl text-slate-400 line-through font-medium decoration-slate-300 decoration-1">
                           51 860 ₽
                        </span>
                     </div>
                     
                     <div className="flex items-baseline gap-1 mb-8">
                        <span className="text-[48px] leading-none font-black tracking-tighter text-[#3a0b0b] drop-shadow-sm">
                           39 900
                        </span>
                        <span className="text-3xl font-light text-[#3a0b0b]/60">₽</span>
                     </div>

                     {/* Button */}
                     <ShinyButton
                        href="https://da-school.online/oplata_prodaji_v_deteilinge"
                        isExternal
                        variant="primary"
                        withArrow={false}
                        className="w-full !py-5 !rounded-2xl !bg-[#8E2828] !to-[#360808] text-[0.95rem] tracking-[0.1em] shadow-lg shadow-[#450a0a]/30"
                     >
                        Приобрести доступ
                     </ShinyButton>
                  </div>
              </div>

           </div>
        </div>
      </RevealOnScroll>

      {/* Results Slider */}
      <RevealOnScroll className="mb-12">
        <div className="text-center mb-12 relative">
             <SectionLabel>Кейсы</SectionLabel>
             <GradientHeading className="text-6xl md:text-8xl text-[48px]">Результаты участников</GradientHeading>
             
             <div className="flex items-center justify-center gap-2 text-[#3b82f6] animate-pulse">
                <ChevronsRight className="w-5 h-5" />
                <span className="text-sm font-bold uppercase tracking-widest">Свайпните влево</span>
             </div>
        </div>
        <ResultsSlider />
      </RevealOnScroll>

      {/* FAQ Section */}
      <RevealOnScroll className="max-w-4xl mx-auto mb-8 px-4">
        {/* Removed GlassCard wrapper to place content directly on page background */}
        <div className="relative z-10 p-4">
          <div className="text-center mb-12 relative">
             <SectionLabel>FAQ</SectionLabel>
             <GradientHeading className="text-6xl md:text-8xl">Вопросы</GradientHeading>
             <p className="text-slate-500 text-lg max-w-xl mx-auto font-medium leading-relaxed">
               Ответы на самые популярные вопросы о курсе.
             </p>
          </div>

          <div className="space-y-4">
            {faqData.map((item, idx) => (
              <AccordionItem key={idx} question={item.question}>
                <p dangerouslySetInnerHTML={{ __html: sanitizeHTML(item.answer) }} />
              </AccordionItem>
            ))}
          </div>
        </div>
      </RevealOnScroll>

      {/* Contact Section */}
      <ContactSection 
        rateLimitKey="whatsapp-course-contact"
        className="mb-16 max-w-4xl mx-auto"
        subtitle="Мы поможем разобраться"
        telegramHref={CONTACTS.telegram}
        telegramText="НАПИСАТЬ В TELEGRAM"
        buttonText="НАПИСАТЬ В WHATSAPP"
      />
    </section>
  );
}
