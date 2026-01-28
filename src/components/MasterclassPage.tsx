import RevealOnScroll from './RevealOnScroll';
import SecureLink from './SecureLink';
import { BackButton } from './ui/back-button';
import { ContactSection } from './ContactSection';
import { StatusBadge } from './ui/status-badge';

interface MasterclassPageProps {
  onNavigate: (page: string) => void;
}

const galleryImages = [
  { span: 'md:col-span-2 md:row-span-2', height: 'h-[300px] md:h-auto', label: 'Разбор реальных кейсов', badge: 'Live' },
  { span: '', height: 'h-[300px] md:h-auto' },
  { span: '', height: 'h-[300px] md:h-auto' },
  { span: 'md:col-span-2', height: 'h-[300px] md:h-auto', label: 'Торжественная часть' },
  { span: '', height: 'h-[300px] md:h-auto' },
];

export default function MasterclassPage({ onNavigate }: MasterclassPageProps) {
  return (
    <section>
      <BackButton onClick={() => onNavigate('page-home')} />

      {/* Event Card */}
      <RevealOnScroll className="max-w-4xl mx-auto bg-white rounded-2xl md:rounded-3xl shadow-xl shadow-slate-200/50 overflow-hidden border border-slate-100 flex flex-col md:flex-row">
        {/* Left Column: Date & Meta */}
        <div className="md:w-1/3 bg-slate-900 text-white p-6 sm:p-8 md:p-10 flex flex-col justify-between relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-brand-900/20 to-transparent pointer-events-none" />

          <div className="relative z-10">
            <StatusBadge variant="dark" size="sm" className="mb-6 md:mb-8 text-slate-300 border-white/10 bg-white/10">
              Москва
            </StatusBadge>
            <div className="text-5xl sm:text-6xl md:text-7xl font-extrabold leading-none mb-2 tracking-tighter text-white">05</div>
            <div className="text-lg sm:text-xl md:text-2xl font-medium text-slate-400 uppercase tracking-wide mb-1">Февраля</div>
            <div className="text-xs sm:text-sm text-slate-500 font-semibold uppercase tracking-wider">Четверг, 2026</div>
          </div>

          <div className="relative z-10 mt-6 md:mt-0 pt-6 md:pt-8 border-t border-white/10">
            <div className="flex items-center gap-3 mb-2">
              <svg className="w-4 md:w-5 h-4 md:h-5 text-brand-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="text-xs sm:text-sm font-bold uppercase tracking-wide text-slate-300">Сколково</span>
            </div>
            <p className="text-[10px] sm:text-xs text-slate-500">Официальная поддержка</p>
          </div>
        </div>

        {/* Right Column: Content */}
        <div className="md:w-2/3 p-6 sm:p-8 md:p-10 lg:p-12 flex flex-col justify-center bg-white">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 mb-3 md:mb-4 leading-tight">
            Мастер-класс 5.0: <br />
            <span className="text-brand-900">Продажи в детейлинге</span>
          </h1>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-6 md:mb-8">
            На мастер-классе мы на конкретных примерах разберем услуги детейлинга. Проработаем звонки, научимся делать допродажи и поймем, как правильно вести клиента.
          </p>

          {/* Price Alert */}
          <div className="bg-slate-50 border border-slate-100 rounded-xl p-4 md:p-5 mb-6 md:mb-8 flex items-start gap-3 md:gap-4">
            <div className="mt-0.5 text-brand-900 shrink-0">
              <svg className="w-4 md:w-5 h-4 md:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <p className="text-xs sm:text-sm md:text-base text-slate-600 font-medium leading-snug">
              Уже сейчас забронируйте место по самой выгодной стоимости.
            </p>
          </div>

          <a
            href="https://da-school.online/oplata_mk"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-full md:w-auto px-6 md:px-8 py-3 md:py-4 font-bold !text-white transition-all duration-200 bg-brand-900 rounded-full hover:bg-brand-800 hover:shadow-lg hover:shadow-brand-900/20 hover:-translate-y-0.5 text-center text-sm sm:text-base"
          >
            Забронировать место
          </a>
        </div>
      </RevealOnScroll>

      {/* Gallery Section */}
      <RevealOnScroll className="max-w-4xl mx-auto mt-12 md:mt-16">
        <div className="flex items-end justify-between mb-6 md:mb-8 px-2">
          <div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-1 md:mb-2">Атмосфера</h3>
            <p className="text-sm sm:text-base text-slate-500">Живые эмоции с прошлых встреч</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 auto-rows-[200px] sm:auto-rows-[220px] md:auto-rows-[240px]">
          {galleryImages.map((img, idx) => (
            <div
              key={idx}
              className={`${img.span} relative group rounded-2xl md:rounded-3xl overflow-hidden shadow-lg bg-slate-200`}
            >
              <img
                src={`https://placehold.co/800x800/${idx === 0 ? '1e293b/ffffff' : idx === 1 ? '7f1d1d/ffffff' : idx === 2 ? 'cbd5e1/334155' : idx === 3 ? 'ffffff/1e293b' : 'e2e8f0/64748b'}?text=${
                  idx === 0 ? 'Практика+в+зале' : idx === 1 ? 'Эмоции' : idx === 2 ? 'Нетворкинг' : idx === 3 ? 'Вручение+сертификатов' : 'Команда'
                }`}
                alt={`Gallery ${idx + 1}`}
                className="absolute inset-0 w-full h-full object-cover transition duration-700 group-hover:scale-105 filter grayscale-[20%] group-hover:grayscale-0"
              />
              {img.label && (
                <div
                  className={`absolute inset-0 ${
                    img.badge ? 'bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80 md:opacity-0 group-hover:opacity-100' : 'bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100'
                  } transition-opacity duration-300`}
                >
                  <div className="absolute bottom-4 md:bottom-6 left-4 md:left-6">
                    {img.badge && (
                      <StatusBadge variant="white" size="sm" className="mb-2 text-black rounded-md">
                        {img.badge}
                      </StatusBadge>
                    )}
                    <p className="text-white font-bold text-base sm:text-lg md:text-xl">{img.label}</p>
                  </div>
                </div>
              )}
              {idx === 1 && <div className="absolute inset-0 bg-brand-900/20 group-hover:bg-transparent transition duration-300" />}
            </div>
          ))}
        </div>
      </RevealOnScroll>

      {/* Блок связи с менеджерами */}
      <ContactSection 
        rateLimitKey="whatsapp-mc-contact"
        className="max-w-4xl mx-auto mt-16"
      />
    </section>
  );
}