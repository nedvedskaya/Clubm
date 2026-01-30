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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto px-2 relative z-10">
          {/* 1 MONTH - THE SPARK */}
          <MembershipCard
            delay={0.1}
            title="Старт"
            subtitle="Идеально для первого знакомства с форматом сообщества."
            price="25 000"
            period="₽/мес"
            totalPrice="Оплата помесячно"
            buttonText="Начать"
            onClick={() => handleJoin('month_1')}
            features={[
              { text: "2 текущих мастермайнда" },
              { text: "Офлайн мероприятия месяца" },
              { text: "Доступ к чату предпринимателей" },
              { text: "Доступ к базе знаний" },
            ]} className="text-[48px] font-normal"
          />

          {/* 6 MONTHS - THE SYSTEM */}
          <MembershipCard
            delay={0.2}
            title="Система"
            subtitle="Для тех, кто готов внедрять инструменты и расти системно."
            price="21 666"
            period="₽/мес"
            totalPrice="130 000 ₽ за 6 месяцев"
            discount="Выгода 15%"
            buttonText="Внедрить"
            onClick={() => handleJoin('month_6')}
            features={[
              { text: "Все привилегии сообщества на 6 месяцев", highlight: true },
              { text: "12 мастермайндов с разборами" },
              { text: "Все офлайн-мероприятия" },
              { text: "Доступ к чату предпринимателей" },
              { text: "Доступ к базе знаний" },
            ]}
          />

          {/* 12 MONTHS - THE LEGACY */}
          <MembershipCard
            delay={0.3}
            isPremium={true}
            title="Премиум"
            subtitle="Полная трансформация бизнеса, личная стратегия масштабирования и окружение."
            price="16 666"
            period="₽/мес"
            totalPrice="200 000 ₽ за 1 год"
            discount="Макс. выгода"
            buttonText="Присоединиться"
            onClick={() => handleJoin('month_12')}
            features={[
              { text: "Полный доступ на 1 год", highlight: true },
              { 
                text: (
                  <span 
                    onClick={scrollToBonus}
                    className="cursor-pointer border-b border-white/30 hover:border-white transition-colors"
                  >
                    Онлайн-курс «Профессиональный менеджер»
                  </span>
                ), 
                highlight: true 
              },
              { text: "24 мастермайнда", highlight: true },
              { text: "Все офлайн-мероприятия" },
              { text: "Доступ к чату предпринимателей" },
              { text: "Доступ к базе знаний" },
            ]} className="font-normal"
          />
        </div>

        {/* BONUS BLOCK */}
        <div id="bonus-block" className="max-w-7xl mx-auto px-2 mt-8 lg:mt-12 relative z-10 flex flex-col items-end">
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
