export interface CalendarEvent {
  d: string;
  day: string;
  t: string;
  desc: string;
  type: 'ONLINE' | 'OFFLINE';
  time: string;
}

export interface CalendarMonth {
  name: string;
  events: CalendarEvent[];
}

export const calendarData: CalendarMonth[] = [
  {
    name: 'Февраль 2026',
    events: [
      { 
        d: '02', 
        day: 'ПН', 
        t: 'Мастермайнд', 
        desc: 'Стратегическая сессия: Планирование', 
        type: 'ONLINE', 
        time: '12:00 MSK' 
      },
      { 
        d: '12', 
        day: 'ЧТ', 
        t: 'Бизнес-Ужин', 
        desc: 'Нетворкинг и разбор кейсов', 
        type: 'OFFLINE', 
        time: '19:00 MSK' 
      },
      { 
        d: '20', 
        day: 'ПТ', 
        t: 'Экскурсия в детейлинг: "Модное Место"', 
        desc: 'Выезд в топ-студию Москвы', 
        type: 'OFFLINE', 
        time: '14:00 MSK' 
      },
      { 
        d: '27', 
        day: 'ПТ', 
        t: 'Мастермайнд', 
        desc: 'Финальный отчет месяца и разборы', 
        type: 'ONLINE', 
        time: '12:00 MSK' 
      },
    ]
  },
  {
    name: 'Март 2026',
    events: [
      { 
        d: '05', 
        day: 'ЧТ', 
        t: 'Мастермайнд', 
        desc: 'Стратегическая сессия: Планирование', 
        type: 'ONLINE', 
        time: '12:00 MSK' 
      },
      { 
        d: '14', 
        day: 'СБ', 
        t: 'Экскурсия', 
        desc: 'Выезд в топ-студию Москвы', 
        type: 'OFFLINE', 
        time: '10:00 MSK' 
      },
      { 
        d: '26', 
        day: 'ЧТ', 
        t: 'Мастермайнд', 
        desc: 'Финальный отчет месяца и разборы', 
        type: 'ONLINE', 
        time: '12:00 MSK' 
      },
    ]
  },
  {
    name: 'Апрель 2026',
    events: [
      { 
        d: '02', 
        day: 'ЧТ', 
        t: 'Мастермайнд', 
        desc: 'Стратегическая сессия: Планирование', 
        type: 'ONLINE', 
        time: '12:00 MSK' 
      },
      { 
        d: '04', 
        day: 'СБ', 
        t: 'Бизнес-завтрак', 
        desc: 'Открытие весеннего сезона', 
        type: 'OFFLINE', 
        time: '11:00 MSK' 
      },
      { 
        d: '23', 
        day: 'ЧТ', 
        t: 'Мастер-класс', 
        desc: 'Приглашенный спикер: Маркетинг', 
        type: 'OFFLINE', 
        time: '14:00 MSK' 
      },
      { 
        d: '30', 
        day: 'ЧТ', 
        t: 'Мастермайнд', 
        desc: 'Финальный отчет месяца и разборы', 
        type: 'ONLINE', 
        time: '12:00 MSK' 
      },
    ]
  }
];
