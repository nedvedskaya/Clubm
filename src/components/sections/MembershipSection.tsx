import { MembershipCard } from "../ui/membership-card";
import { Monitor, MapPin, Check } from "lucide-react";
import { SectionTitle } from "../ui/section-title";
import { BonusCard } from "../ui/bonus-card";
import { useNavigation } from "../NavigationContext";
import { CONTACTS } from "../data/constants";

export function MembershipSection() {
  const { navigate } = useNavigation();

  const handleJoin = (type: string) => {
    const urls: Record<string, string> = {
      'month_1': "https://da-school.online/podpiska_1mes",
      'month_6': "https://da-school.online/podpiska_6mes",
      'month_12': "https://da-school.online/podpiska_12mes"
    };

    const url = urls[type];
    if (url) {
      window.open(url, "_blank");
    } else {
      window.open(CONTACTS.telegram, "_blank");
    }
  };

  const scrollToBonus = () => {
    const element = document.getElementById('bonus-block');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div id="tariffs" className="pt-8 pb-24 relative overflow-hidden">
      {/* Subtle Background Glow for the Section */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
            <p className="text-lg text-brand-700 mb-4 tracking-wide max-w-2xl mx-auto font-bold font-normal">
                Окупаемость участия х50: за счет внедрения инструментов контроля прибыли в первые 6 месяцев.
            </p>
            <SectionTitle centered>
                Выберите свой формат
            </SectionTitle>
        </div>

        <div className="flex justify-center max-w-7xl mx-auto px-2 relative z-10">
          {/* 12 MONTHS - THE LEGACY */}
          <MembershipCard
            delay={0.3}
            isPremium={true}
            title="Премиум"
            subtitle="Полная трансформация бизнеса, личная стратегия масштабирования и окружение."
            price="16 666"
            period="₽/мес"
            totalPrice="200 000 ₽ за 12 месяцев"
            discount="Выгода 33%"
            buttonText="Присоединиться"
            bottomNote={
               <span className="text-[11px] font-bold text-indigo-200/70 uppercase tracking-wider hover:text-indigo-200 transition-colors cursor-default">
                 Возможно оформить рассрочку от банка
               </span>
            }
            onClick={() => handleJoin('month_12')}
            features={[
              { text: "Доступ к сообществу на 12 месяцев", highlight: true },
              { text: "24 мастермайнда", highlight: true },
              { text: "Посещение всех офлайн-мероприятий" },
              { text: "Доступ к чату предпринимателей" },
              { text: "Доступ к базе знаний" },
              { 
                text: (
                  <span 
                    onClick={scrollToBonus}
                    className="flex flex-col gap-1.5 cursor-pointer group/bonus -mt-1 pt-2 border-t border-white/10"
                  >
                    <span className="inline-flex items-center gap-1.5">
                       <span className="text-[9px] font-extrabold bg-gradient-to-r from-amber-200 to-yellow-400 text-amber-950 px-2 py-0.5 rounded shadow-[0_0_15px_rgba(251,191,36,0.4)] tracking-wider uppercase">
                         Бонус
                       </span>
                    </span>
                    <span className="border-b border-white/30 hover:border-white transition-colors pb-0.5 leading-snug">
                      Онлайн-курс «Профессиональный менеджер»
                    </span>
                  </span>
                ), 
                highlight: true 
              },
            ]} className="font-normal"
          />
        </div>

        {/* BONUS BLOCK */}
        <div id="bonus-block" className="max-w-7xl mx-auto px-2 mt-8 lg:mt-12 relative z-10 flex flex-col items-center">
            <BonusCard 
              onClick={() => navigate('page-course')}
              title={<>Онлайн-курс <br/>«Профессиональный менеджер»</>}
              description={<><span className="text-[#7F1D1D] font-bold">Обучим вашего менеджера за вас</span>, пока вы занимаетесь стратегией.</>}
              oldPrice="39 900 ₽"
              newPrice="Бесплатно"
              newPriceSubtitle="в тарифе Премиум"
            />
        </div>
      </div>
    </div>
  );
}
