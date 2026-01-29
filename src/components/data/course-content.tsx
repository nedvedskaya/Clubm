import React from 'react';
import { FileText, PlayCircle, PhoneCall, Check } from 'lucide-react';

export const courseBonuses = [
  {
    title: "Для владельца",
    items: [
      { title: "Прибыль", text: "Средний чек увеличится на 50-70% за счёт допродаж." },
      { title: "Свобода", text: "Вы больше не привязаны к телефону 24/7." },
      { title: "Система", text: "Стандарт обучения остается в компании навсегда." }
    ]
  },
  {
    title: "Для менеджера",
    items: [
      { title: "Доход", text: "Процент с продаж растет вместе с высоким чеком." },
      { title: "Статус", text: "Переход от «приемщика» к эксперту по продажам." },
      { title: "Арсенал", text: "Скрипты и техники, которые работают безотказно." }
    ]
  }
];

export const whatsInsideData = [
  {
    icon: <FileText className="w-7 h-7" strokeWidth={1.5} />,
    title: "21 техкарта",
    text: "Полная база знаний: этапы, сроки, материалы и скрипты продажи каждой услуги."
  },
  {
    icon: <PlayCircle className="w-7 h-7" strokeWidth={1.5} />,
    title: "31 видео-урок",
    text: "Разборы всех этапов сделки. Четкий алгоритм, как закрывать клиентов и растить чек."
  },
  {
    icon: <PhoneCall className="w-7 h-7" strokeWidth={1.5} />,
    title: "Практика",
    text: "Мы сами разберем звонки ваших менеджеров, укажем на ошибки и «докрутим» продажи."
  }
];

export const heroTags = ['Видео-уроки', 'Скрипты продаж', 'Техкарты', 'Практика', 'Сертификат'];

export const fullAccessFeatures = [
  "Доступ к материалам на 1 год",
  "Именной сертификат",
  "Практика и разбор звонков"
];
