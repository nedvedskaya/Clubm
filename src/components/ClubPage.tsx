import { useState } from 'react';
import RevealOnScroll from './RevealOnScroll';
import { BackButton } from './ui/back-button';
import { ShinyButton } from './ui/shiny-button';
import { CalendarModal } from './CalendarModal';
import { ClubResultsSection } from './sections/ClubResultsSection';
import { MembershipSection } from './sections/MembershipSection';
import { ClubHero } from './sections/ClubHero';
import { ClubPainPoints } from './sections/ClubPainPoints';
import { ClubRoadmap } from './sections/ClubRoadmap';
import { ClubParticipation } from './sections/ClubParticipation';
import { ContactSection } from './ContactSection';

interface ClubPageProps {
  onNavigate: (page: string) => void;
}

export default function ClubPage({ onNavigate }: ClubPageProps) {
  // Calendar Modal State
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  
  return (
    <section>
      <BackButton onClick={() => onNavigate('page-home')} />
      
      {/* Calendar Modal */}
      <CalendarModal isOpen={isCalendarOpen} onClose={() => setIsCalendarOpen(false)} />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8">
        
        {/* HERO: Method */}
        <ClubHero />

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
                buttonText="Задать вопрос в WhatsApp"
                href="https://wa.me/79951140299"
                rateLimitKey="whatsapp-club-contact"
              />
              
              <div className="flex flex-col items-center gap-4 max-w-md mx-auto mt-8">
                 <p className="text-slate-400 text-sm font-medium">Или используйте Telegram бот</p>
                 <ShinyButton 
                  href="https://t.me/manager_club_bot" 
                  isExternal 
                  variant="primary" 
                  className="w-full py-4 text-sm font-bold tracking-widest uppercase shadow-xl shadow-brand-900/20 !text-white rounded-2xl"
                >
                  Вступить через Telegram
                </ShinyButton>
              </div>
           </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}