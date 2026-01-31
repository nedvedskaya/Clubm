import mk4Photo1 from '../../assets/masterclass/mk4-1.jpg';
import mk4Photo2 from '../../assets/masterclass/mk4-2.jpg';
import mk4Photo3 from '../../assets/masterclass/mk4-3.jpg';
import mk4Photo4 from '../../assets/masterclass/mk4-4.jpg';
import mk4Photo5 from '../../assets/masterclass/mk4-5.jpg';
import mk3Photo1 from '../../assets/masterclass/mk3-1.jpg';
import mk3Photo2 from '../../assets/masterclass/mk3-2.jpg';
import mk3Photo3 from '../../assets/masterclass/mk3-3.jpg';
import mk3Photo4 from '../../assets/masterclass/mk3-4.jpg';
import mk3Photo5 from '../../assets/masterclass/mk3-5.jpg';
import mk3Photo6 from '../../assets/masterclass/mk3-6.jpg';
import mk3Photo7 from '../../assets/masterclass/mk3-7.jpg';
import mk3Photo8 from '../../assets/masterclass/mk3-8.jpg';
import mk3Photo9 from '../../assets/masterclass/mk3-9.jpg';

export const galleryImages = [
  { span: 'md:col-span-2 md:row-span-2', height: 'h-[300px] md:h-auto', label: 'Разбор реальных кейсов', badge: 'Live' },
  { span: '', height: 'h-[300px] md:h-auto' },
  { span: '', height: 'h-[300px] md:h-auto' },
  { span: 'md:col-span-2', height: 'h-[300px] md:h-auto', label: 'Торжественная часть' },
  { span: '', height: 'h-[300px] md:h-auto' },
];

export const pastEvents = [
  {
    id: 'mc-4.0',
    title: 'Мастер-класс 4.0',
    location: 'Сколково',
    description: 'Масштабная конференция в технопарке Сколково, где мы разобрали на конкретных примерах услуги детейлинга, звонки, учились делать допродажи и правильно вести клиента.',
    images: [mk4Photo1, mk4Photo2, mk4Photo3, mk4Photo4, mk4Photo5]
  },
  {
    id: 'mc-3.0',
    title: 'Мастер-класс 3.0',
    location: 'VIP Party',
    description: 'Закрытая встреча для лидеров рынка автоиндустрии. Выступления спикеров. Нетворкинг в неформальной обстановке, обмен опытом и новые партнерства.',
    images: [mk3Photo1, mk3Photo2, mk3Photo3, mk3Photo4, mk3Photo5, mk3Photo6, mk3Photo7, mk3Photo8, mk3Photo9]
  },
  {
    id: 'mc-2.0',
    title: 'Мастер-класс 2.0',
    location: 'Практикум',
    description: 'Приглашенные спикеры и гости, разборы кейсов участников, ответы на волнующие вопросы собственников и менеджеров.',
    images: [
      'https://images.unsplash.com/photo-1735361039382-d78a0a0cc185?auto=format&fit=crop&q=80&w=1080', // Workshop
      'https://images.unsplash.com/photo-1761934658112-80095148fe87?auto=format&fit=crop&q=80&w=1080', // Hands close up
      'https://images.unsplash.com/photo-1626037032364-b0dd4f9aa5f9?auto=format&fit=crop&q=80&w=1080', // Garage interior
      'https://images.unsplash.com/photo-1624884269715-70759892cd29?auto=format&fit=crop&q=80&w=1080', // Supplies
      'https://images.unsplash.com/photo-1619642737579-a7474bee1044?auto=format&fit=crop&q=80&w=1080', // Mechanic explaining
    ]
  }
];