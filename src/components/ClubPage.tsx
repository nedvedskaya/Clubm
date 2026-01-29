import { useState } from 'react';
import RevealOnScroll from './RevealOnScroll';
import { BackButton } from './ui/back-button';
import { ShinyButton } from './ui/shiny-button';
import { CalendarModal } from './CalendarModal';
import { ClubResultsSection } from './sections/ClubResultsSection';
import { MembershipSection } from './sections/MembershipSection';
import { MethodHero } from './sections/MethodHero';
import { ClubPainPoints } from './sections/ClubPainPoints';
import { ClubRoadmap } from './sections/ClubRoadmap';
import { ClubParticipation } from './sections/ClubParticipation';
import { ContactSection } from './ContactSection';
import { useNavigation } from './NavigationContext';
import { SEO } from './SEO';

export default function ClubPage() {
  const { navigate } = useNavigation();
  // Calendar Modal State
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  
  return (
    <section>
      <SEO 
        title="Метод: система управления прибылью | Клуб менеджеров"
        description="Вступите в закрытый клуб предпринимателей в автобизнесе. Доступ к базе знаний, календарь событий, нетворкинг и готовые инструменты для роста прибыли."
        keywords="автобизнес, клуб предпринимателей, детейлинг бизнес, рост прибыли, нетворкинг"
      />

      <BackButton onClick={() => navigate('page-home')} />
      
      {/* Calendar Modal */}
      <CalendarModal isOpen={isCalendarOpen} onClose={() => setIsCalendarOpen(false)} />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8">
        
        {/* HERO: Method */}
        <MethodHero />

        {/* Узнаете себя? (Pain Points) */}
        <ClubPainPoints />

        {/* Roadmap / Evolution Map (Zig-Zag Timeline) */}
        <ClubRoadmap />
        
        {/* Формат участия (Includes Calendar Widget) */}
        <ClubParticipation onOpenCalendar={() => setIsCalendarOpen(true)} />

        {/* NEW BLOCK: Club Results (Что вы получите) */}
        <RevealOnScroll className="lg:col-span-12">
            <ClubResultsSection />
        </RevealOnScroll>

        {/* Tariffs (Pricing) */}
        <RevealOnScroll className="lg:col-span-12">
           <MembershipSection />
           
           <div className="mt-16 md:mt-24 pb-16 relative z-10">
              <ContactSection 
                title="Остались вопросы?"
                subtitle="Если вы не уверены, какой формат подойдет именно вам — напишите нам. Мы разберем вашу ситуацию и подскажем честно."
                buttonText="ЗАДАТЬ ВОПРОС В WHATSAPP"
                href="https://wa.me/79951140299"
                rateLimitKey="whatsapp-club-contact"
                telegramHref="https://tlgg.ru/@club_manageer"
                telegramText="ЗАДАТЬ ВОПРОС В TELEGRAM"
              />
           </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
