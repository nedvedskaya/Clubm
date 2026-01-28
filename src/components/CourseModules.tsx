import { useState } from 'react';

const modules = [
  {
    number: '01',
    category: 'Менеджмент',
    title: 'Менеджер: найм, управление, мотивация',
    description: 'Менеджер — это не статья расходов, а главный источник прибыли.',
    features: [
      'Четкие инструкции и регламенты.',
      'Юридическая безопасность (договоры).',
      'Быстрый найм и адаптация.',
    ],
    content: [
      'Эфир «Как выявить менеджера, который действительно хочет расти»',
      'Инструкция по найму «Как найти и выбрать менеджера»',
      'Инструкция «5 шагов, как менеджеру устроиться»',
      'Договор-расписка об обучении',
      'Должностная инструкция',
      'Эфир «10 признаков плохого/хорошего менеджера»',
      'Видео-урок «Разбор 8 фатальных ошибок»',
    ],
    price: '6 990 руб',
    link: 'https://da-school.online/oplata_manager',
  },
  {
    number: '02',
    category: 'Продажи',
    title: 'Продажи и переговоры',
    description: 'Готовые алгоритмы: закрываем возражения, повышаем чек на 150–200%.',
    features: [
      'Готовая система продаж и скрипты.',
      'Рост прибыли без вложений в рекламу.',
      'Выход в категорию экспертов.',
    ],
    content: [
      'Скрипт продающих звонков',
      'Эфир «Повышение чека в 2–3 раза»',
      'Алгоритм звонков по теплой базе',
      'Конструктор идеального скрипта',
      'Отработка возражения «Дорого»',
      '60+ готовых ответов на возражения',
    ],
    price: '10 900 руб',
    link: 'https://da-school.online/oplata_prodaji',
  },
  {
    number: '03',
    category: 'Коммуникация',
    title: 'Психология общения',
    description: 'Говорите на языке клиента. Продавайте не услугу, а решение.',
    features: [
      'Работа с разными психотипами клиентов.',
      'Уверенность через понимание мотивов.',
      'Довольный клиент = лучшая реклама.',
    ],
    content: [
      'Эфир «Холодные звонки»',
      'Алгоритм работы с холодным клиентом',
      'Система «Вирусный рост» (рекомендации)',
      'Искусство удержания клиента',
      'Типология клиентов',
      'Психология владельца премиум-авто',
      'Ключ к корпоративным клиентам',
    ],
    price: '6 990 руб',
    link: 'https://da-school.online/oplata_psihologia',
  },
  {
    number: '04',
    category: 'Имидж',
    title: 'Профессиональный имидж',
    description: 'Встречают по одёжке. Внешний вид — молчаливый продавец 24/7.',
    features: [
      '+25% к цене за счет внедрения dress-code.',
      'Снимает 80% сомнений в компетентности.',
      'Единый стандарт команды.',
    ],
    content: [
      'Эфир «Дресс-код успеха»',
      'Видео-урок «Как внешний вид увеличивает чек»',
    ],
    price: '1 990 руб',
    link: 'https://da-school.online/oplata_profimidzh',
  },
  {
    number: '05',
    category: 'Документация',
    title: 'Технологические карты',
    description: '21 карта с пошаговым описанием услуг. Ваша репутация и актив.',
    features: [
      'Готовое пособие для обучения без опыта.',
      'Страховка от спорных ситуаций.',
      'Топ-качество уже через неделю.',
    ],
    content: [
      'Видео-инструкция «Прием автомобиля в работу»',
      'Урок «Прием работы у мастеров и сдача автомобиля»',
      'Акт приема-передачи авто',
      'Чек-лист приема авто: экстерьер и интерьер',
      'Чек-лист сдачи авто',
      'Тех. карта «Ремонт и покраска дисков»',
      'Тех. карта «Химчистка»',
      'Тех. карта «Полировка, шлифовка и скрабирование стекла»',
      'Тех. карта «Антидождь»',
      'Тех. карта «Выпрямление вмятин»',
      'Тех. карта «Детейлинг моторного отсека»',
      'Тех. карта «Реставрация кожи»',
      'Тех. карта «Антигравийная пленка и защита лобового стекла пленкой»',
      'Тех. карта «Защита кожаного салона топ-составами»',
      'Тех. карта «Озонация салона + влажная уборка»',
      'Тех. карта «Перешив руля и салона автомобиля»',
      'Тех. карта «Тонировка авто»',
      'Тех. карта «Локальная покраска»',
      'Тех. карта «Малярные работы салона, восстановление пластика и полировка (реставрация) фар и фонарей»',
      'Тех. карта «Полировка кузова + керамика в 2 слоя»',
      'Тех. карта «Пошив ковриков»',
      'Тех. карта «Шумоизоляция»',
      'Тех. карта «Защита дисков керамикой»',
      'Тех. карта «Мойка подвески»',
      'Тех. карта «Полировка плёнки»',
      'Тех. карта «Полировка салонных вставок, покрытых лаком»',
    ],
    price: '24 990 руб',
    link: 'https://da-school.online/oplata_tehkarty',
    pdfLink: 'https://da-school.online/pl/fileservice/user/file/download/h/73254e8710cedbd9debaf27977f1c5cd.pdf?gcmes=89067708531&gcmlg=19361223',
  },
];

export default function CourseModules() {
  const [expandedModules, setExpandedModules] = useState<{ [key: number]: boolean }>({});

  const toggleModule = (index: number) => {
    setExpandedModules((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div id="modules-grid" className="relative -mx-4 px-4 md:mx-0 md:px-0 mb-16">
      <div className="flex overflow-x-auto snap-x snap-mandatory hide-scroll gap-4 pb-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:overflow-visible">
        {modules.map((module, index) => (
          <div
            key={index}
            className="w-[85vw] flex-none md:w-auto snap-center bg-white p-6 md:p-8 rounded-3xl border border-slate-100 shadow-lg shadow-slate-200/50 flex flex-col justify-between h-full relative overflow-hidden group hover:border-slate-300 transition-all reveal-on-scroll"
          >
            <div className="absolute -right-4 -top-4 text-[8rem] font-black text-slate-50 pointer-events-none select-none group-hover:text-slate-100/80 transition-colors">
              {module.number}
            </div>

            <div className="relative z-10">
              <div className="mb-4">
                <span className="inline-block px-3 py-1 rounded-lg bg-slate-100 text-slate-700 text-xs font-bold uppercase tracking-wider mb-3">
                  {module.category}
                </span>
                <h2 className="text-2xl font-extrabold text-slate-900 leading-tight">{module.title}</h2>
              </div>

              <div className="text-sm text-slate-600 font-medium mb-6 leading-relaxed">{module.description}</div>

              <ul className="space-y-3 mb-6">
                {module.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start gap-3 text-slate-600 text-sm">
                    <div className="w-4 h-4 rounded-full bg-green-100 flex items-center justify-center text-green-700 flex-shrink-0 mt-0.5 text-[8px] font-bold">
                      ✓
                    </div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <details
                open={expandedModules[index]}
                onToggle={() => toggleModule(index)}
                className="group/details mb-6"
              >
                <summary className="flex items-center gap-2 cursor-pointer list-none text-xs font-bold text-[#5F0A0A] uppercase tracking-wide hover:opacity-70 transition">
                  <span>Состав модуля</span>
                  <svg
                    className="w-4 h-4 transition group-open/details:rotate-180"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div
                  className={`pt-3 text-xs text-slate-500 space-y-2 animate-fadeIn ${
                    module.content.length > 10 ? 'h-48 overflow-y-auto custom-scrollbar pr-2' : ''
                  }`}
                >
                  {module.content.map((item, cIndex) => (
                    <p key={cIndex}>• {item}</p>
                  ))}
                </div>
              </details>

              {module.pdfLink && (
                <a
                  href={module.pdfLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm font-bold text-[#5F0A0A] mb-6 hover:opacity-80 transition-opacity group/link"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  <span className="border-b border-[#5F0A0A]/30 group-hover/link:border-[#5F0A0A] transition-colors">
                    Смотреть пример карты (PDF)
                  </span>
                </a>
              )}
            </div>

            <a
              href={module.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 rounded-2xl bg-[#5F0A0A] text-white font-bold hover:bg-[#7F1D1D] transition-all active:scale-95 shadow-lg shadow-[#5F0A0A]/20 mt-4 block text-center relative z-10"
            >
              Купить за {module.price}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}