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
              <div className="text-center max-w-2xl mx-auto mb-10">
                 <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">Остались вопросы?</h3>
                 <p className="text-slate-500 text-lg md:text-xl leading-relaxed max-w-lg mx-auto">
                    Если вы не уверены, какой формат подойдет именно вам — напишите нам. Мы разберем вашу ситуацию и подскажем честно.
                 </p>
              </div>

              <div className="flex flex-col items-center gap-4 max-w-md mx-auto">
                <ShinyButton 
                  href="https://t.me/manager_club_bot" 
                  isExternal 
                  variant="primary" 
                  className="w-full py-5 text-sm md:text-base font-bold tracking-widest uppercase shadow-xl shadow-brand-900/20 !text-white rounded-2xl"
                >
                  Вступите в Метод
                </ShinyButton>
                
                <ShinyButton 
                  href="https://t.me/manager_club_bot"
                  isExternal
                  variant="brand" 
                  className="w-full py-5 text-sm md:text-base font-bold tracking-widest uppercase !bg-[#0f172a] hover:!bg-[#1e293b] border-slate-800 !text-white rounded-2xl shadow-lg"
                >
                  Задать вопрос в Telegram
                </ShinyButton>
                
                <ShinyButton 
                  href="https://wa.me/79951140299" 
                  isExternal
                  variant="brand" 
                  className="w-full py-5 text-sm md:text-base font-bold tracking-widest uppercase !bg-[#0f172a] hover:!bg-[#1e293b] border-slate-800 !text-white rounded-2xl shadow-lg"
                >
                  Задать вопрос в WhatsApp
                </ShinyButton>
              </div>
           </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}