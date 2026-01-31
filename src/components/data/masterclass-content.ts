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
import mk2Photo1 from '../../assets/masterclass/mk2-1.jpg';
import mk2Photo2 from '../../assets/masterclass/mk2-2.jpg';
import mk2Photo3 from '../../assets/masterclass/mk2-3.jpg';
import mk2Photo4 from '../../assets/masterclass/mk2-4.jpg';
import mk2Photo5 from '../../assets/masterclass/mk2-5.jpg';
import mk2Photo6 from '../../assets/masterclass/mk2-6.jpg';
import mk2Photo7 from '../../assets/masterclass/mk2-7.jpg';

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
    images: [mk2Photo1, mk2Photo2, mk2Photo3, mk2Photo4, mk2Photo5, mk2Photo6, mk2Photo7]
  }
];