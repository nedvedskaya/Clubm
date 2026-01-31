import RevealOnScroll from './RevealOnScroll';
import result1Image from '../assets/results/result-1.jpg';
import result2Image from '../assets/results/result-2.jpg';
import result3Image from '../assets/results/result-3.jpg';

const cases = [
  {
    name: 'Артур Константинович',
    result: '189 000 ₽',
    badge: 'Рост в 2.1 раза',
    was: 'Tiguan L Pro заехал на пакет оклейки зоны риска за 90 тыс (со скидкой).',
    became: 'Допродал: Оклейку порогов (20 тыс), глянцевых стоечек (6 тыс), панорамы (20 тыс), керамику на кузов (35 тыс) и керамику кожи (18 тыс).',
    image: result1Image,
  },
  {
    name: 'Денис Лысенко',
    result: '382 000 ₽',
    badge: 'Рост в 15 раз',
    was: 'BMW приехал на удаление вмятин с бюджетом ~ 300$ (25 000 ₽).',
    became: 'После осмотра продал полный комплекс: покраску бампера, химчистку, кожу, полировку и пленку.',
    image: result2Image,
  },
  {
    name: 'Евгений Кайнелайнен',
    result: '420 000 ₽',
    badge: 'Рост в 35 раз',
    was: 'Средний чек по тонировке 6–12 тыс. ₽. Цель — внедрить высокомаржинальные услуги.',
    became: 'Продал оклейку кузова + допы (вмятины, химчистка, шумка, тонировка).',
    image: result3Image,
  },
  {
    name: 'Павел Сорокин',
    result: '373 000 ₽',
    badge: 'Рост в 1.8 раза',
    was: 'До Клуба чек на услуги доходил до 200 000 – 250 000 ₽.',
    became: 'Уверенная продажа на 373 000 ₽.',
  },
  {
    name: 'Евгений Кайнелайнен',
    result: '170 000 ₽',
    badge: 'Рост в 2.8 раза',
    was: 'Клиент приехал на оклейку зоны риска за 60 000 ₽.',
    became: 'Выяснили потребность в качестве. Продали передний комплекс, двери, крылья и тонировку.',
  },
  {
    name: 'Максим Мартынов',
    result: '117 000 ₽',
    badge: 'Рост в 1.2 раза',
    was: 'Замена лобового (коммерческий транспорт), чек 95 000 ₽.',
    became: 'Допродал молдинг, обслуживание трапеции, новые дворники и антидождь.',
  },
  {
    name: 'Светлана Каширина',
    result: '230 000 ₽',
    badge: 'Успешная сделка',
    was: 'Полная оклейка, возражение «дорого».',
    became: 'Продали пакет: тонировка, керамика, бронепленка на лобовое и сетка на бампер.',
  },
  {
    name: 'Павел Сорокин',
    result: '166 000 ₽',
    badge: 'Рост в 2.7 раза',
    was: 'Полировка + химчистка (60 000 ₽).',
    became: 'Допродали устранение царапин, перешив руля, полировку фары, покраску дисков/бампера.',
  },
  {
    name: 'Светлана Каширина',
    result: '135 000 ₽',
    badge: 'Рост в 1.9 раза',
    was: 'Защита пленкой (~ 70 000 ₽).',
    became: 'Согласились на тонировку, керамику, пленку на лобовое и сетку.',
  },
  {
    name: 'Евгений Кайнелайнен',
    result: '95 000 ₽',
    badge: 'Рост в 12 раз',
    was: 'Запись на тонер 7 500 ₽.',
    became: 'После работы менеджера чек повысили до 50 000 ₽, также сразу записали клиента на повторный приезд на 45 000 ₽.',
  },
  {
    name: 'Павел Сорокин',
    result: '265 000 ₽',
    badge: 'Рост в 1.2 раза',
    was: 'Полная оклейка в глянец за 210 000 ₽.',
    became: 'Предложили клиенту дополнительные услуги. В результате чек вырос до 265 000 ₽.',
  },
  {
    name: 'Юрий Сидоров',
    result: '156 000 ₽',
    badge: 'Рост в 31 раз',
    was: 'Изначально клиент приехал удалить царапину с кузова за 5 000 ₽.',
    became: 'Допродали полировку кузова, керамику, химчистку и т.д. Чек вырос до 156 000 ₽.',
  },
  {
    name: 'Евгений Смолин',
    result: '455 000 ₽',
    badge: 'Рост в 1.2 раза',
    was: 'Продал оклейку кузова и оптики за 370 000 ₽.',
    became: 'Предложил клиенту доп. услуги: тонировка, шумоизоляция. Чек вырос до 455 000 ₽.',
  },
];

export default function ResultsSlider() {
  return (
    <div id="results-block" className="lg:col-span-12 mt-6">
      {/* Slider Container */}
      <div className="relative group">
        {/* Desktop hint arrows */}
        <div className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 -ml-6 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <div className="w-12 h-12 rounded-full bg-white shadow-xl border-2 border-blue-200 flex items-center justify-center">
            <svg className="w-6 h-6 text-blue-900" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </div>
        </div>
        <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 -mr-6 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <div className="w-12 h-12 rounded-full bg-white shadow-xl border-2 border-blue-200 flex items-center justify-center animate-pulse">
            <svg className="w-6 h-6 text-blue-900" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>

        {/* Mobile hint */}
        
        <div className="flex overflow-x-auto snap-x snap-mandatory hide-scroll gap-5 pb-8 px-2">
          {cases.map((caseItem, index) => (
            <div
              key={index}
              className="min-w-[300px] md:min-w-[340px] snap-center bg-white rounded-3xl border border-slate-100 shadow-lg shadow-slate-200/50 flex flex-col hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="w-full aspect-[4/5] bg-slate-100 rounded-t-3xl overflow-hidden relative group">
                <img
                  src={caseItem.image || `https://placehold.co/600x800/e2e8f0/64748b?text=Скриншот+${index + 1}`}
                  alt={`Скриншот ${caseItem.name}`}
                  loading="lazy"
                  width="340"
                  height="425"
                  className="w-full h-full object-cover object-top transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="text-xs font-bold uppercase tracking-widest opacity-80">Результат</p>
                  <p className="text-2xl font-extrabold">{caseItem.result}</p>
                </div>
              </div>
              <div className="p-5 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-3">
                  <h4 className="font-bold text-lg text-slate-900">{caseItem.name}</h4>
                  <span className="bg-brand-900 text-white text-xs font-bold px-2 py-1 rounded-lg shadow-md">
                    {caseItem.badge}
                  </span>
                </div>
                <div className="text-slate-600 text-sm leading-relaxed space-y-2">
                  <p>
                    <b className="text-slate-800">Было:</b> {caseItem.was}
                  </p>
                  <p>
                    <b className="text-slate-800">Стало:</b> {caseItem.became}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}