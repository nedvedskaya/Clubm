import { Clock, Monitor, ArrowUp, MapPin } from "lucide-react";

export const painPoints = [
  {
    title: "Заложник собственного бизнеса",
    subtitle: "ПЕРЕГРЕВ",
    description: "Вы — самый дорогой и незаменимый сотрудник. И управляющий, и менеджер, и мастер. Не можете уйти в отпуск, заболеть или выключить телефон: без вас студия просто встанет.",
    borderColor: "border-[#5F0A0A]",
    badgeVariant: "accent" as const,
    dashboard: {
      label: "Нагрузка",
      value: "КРИТИЧЕСКАЯ",
      type: "load" as const
    }
  },
  {
    title: "Миллионный оборот без денег",
    subtitle: "ХОЛОСТОЙ ХОД",
    description: "В кассе деньги крутятся, но чистая прибыль — на уровне зарплаты мастера. Аренды и ФОТ съедают маржу, а клиенты требуют скидок. Вы устали работать ради процесса.",
    borderColor: "border-blue-900",
    badgeVariant: "blue" as const,
    dashboard: {
      label: "Рентабельность",
      value: "₽",
      type: "profit" as const
    }
  },
  {
    title: "Текучка кадров",
    subtitle: "УТЕЧКА",
    description: "Вы вкладываете деньги и душу в обучение сотрудников. А они используют вас как трамплин: учатся, набивают руку и уходят. Уводят вашу базу клиентов.",
    borderColor: "border-slate-700",
    badgeVariant: "default" as const,
    dashboard: {
      label: "Ресурсы",
      value: "ИСТОЩЕНЫ",
      type: "retention" as const
    }
  }
];

export const roadmapSteps = [
  {
    number: "01.",
    title: "ОПЕРАТИВНОЕ РЕШЕНИЕ ПРОБЛЕМ",
    description: "Закрываем ваши «горящие» вопросы и критические ошибки, которые лишают вас денег прямо сейчас. Латаем дыры в бизнес-процессах с первых дней.",
    duration: "",
    icon: Clock,
    position: "left" as const
  },
  {
    number: "02.",
    title: "СТРАТЕГИЯ И ВНЕДРЕНИЕ",
    description: "Строим индивидуальный трек развития вашего бизнеса на ближайшие месяцы. Вы получаете опыт коллег, ставите цели, внедряете инструменты и сдаете отчеты. Дисциплина — гарантия результата.",
    duration: "",
    icon: Monitor,
    position: "right" as const
  },
  {
    number: "03.",
    title: "МОЩНЫЙ ОФЛАЙН-НЕТВОРКИНГ",
    description: "Бесплатное участие в офлайн-встречах, бизнес-завтраках, экскурсиях в лучшие студии Москвы для развития насмотренности и обмена опытом.",
    duration: "",
    icon: ArrowUp,
    position: "left" as const
  }
];

export const participationFormats = [
  {
    type: "online",
    icon: Monitor,
    title: "Online",
    subtitle: "Система и контроль",
    subtitleClassName: "bg-gradient-to-br from-[#0f172a] via-[#1e1b4b] to-[#172554] bg-clip-text text-transparent",
    iconClassName: "text-[#1e1b4b]",
    hoverColorClass: "group-hover:text-[#1e1b4b]",
    items: [
      {
        title: "Мастермайнды",
        description: "Дважды в месяц собираемся на стратегические сессии в Zoom: планирование в начале и отчетность в конце."
      },
      {
        title: "Закрытый чат",
        description: "Оперативная поддержка, окружение единомышленников и база знаний 24/7."
      }
    ]
  },
  {
    type: "offline",
    icon: MapPin,
    title: "Offline",
    subtitle: "Драйв и связи",
    subtitleClassName: "text-brand-700",
    iconClassName: "text-brand-700",
    hoverColorClass: "group-hover:text-brand-700",
    items: [
      {
        title: "Экскурсии",
        description: "Экскурсии в лучшие детейлинг-студии и автосервисы. Разбор внутрянки бизнеса."
      },
      {
        title: "Нетворкинг",
        description: "Бизнес-завтраки и мастер-классы для обмена опытом и поиска новых партнеров."
      }
    ]
  }
];

export const clubResults = [
  {
    title: "Выход из операционки",
    description: "0% участия в продажах: ваши менеджеры продают лучше вас по готовым алгоритмам и методикам Клуба.",
    metric: "0%",
    delay: "0s"
  },
  {
    title: "Бизнес работает, пока вы спите",
    description: "Вы сможете оставить студию на 2 недели, и она не встанет, а продолжит генерировать прибыль.",
    metric: "24/7",
    delay: "0.1s"
  },
  {
    title: "Команда-актив",
    description: "Сотрудники перестают быть «пассажирами» и начинают работать на показатели, а не просто «сидеть на проценте».",
    metric: "KPI",
    delay: "0.2s"
  },
  {
    title: "Рост выручки",
    description: "Рост чека на 30% за счет доп продаж увеличит вашу чистую прибыль на 50–70%.",
    metric: "+70%",
    delay: "0.3s"
  },
  {
    title: "Сильное окружение",
    description: "Окружение, которое не даёт стоять на месте. Знакомство с людьми, которые уже прошли путь, по которому вы идёте.",
    metric: "TOP",
    delay: "0.4s"
  }
];