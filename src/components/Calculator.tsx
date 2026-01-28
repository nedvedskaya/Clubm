import { useState, useEffect, useRef } from 'react';
import RevealOnScroll from './RevealOnScroll';

export default function Calculator() {
  const [avgCheck, setAvgCheck] = useState('');
  const [clients, setClients] = useState('');
  const [displayedGain, setDisplayedGain] = useState(0);
  const [displayedTotal, setDisplayedTotal] = useState(0);
  const gainAnimFrame = useRef<number>();
  const totalAnimFrame = useRef<number>();

  const formatMoney = (num: number) => {
    return new Intl.NumberFormat('ru-RU').format(num);
  };

  const animateValue = (
    start: number,
    end: number,
    duration: number,
    isGain: boolean,
    callback: (value: number) => void
  ) => {
    let startTimestamp: number | null = null;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);

      // Easing function: easeOutQuart
      const ease = 1 - Math.pow(1 - progress, 4);
      const value = start + (end - start) * ease;

      callback(value);

      if (progress < 1) {
        const frameId = window.requestAnimationFrame(step);
        if (isGain) {
          gainAnimFrame.current = frameId;
        } else {
          totalAnimFrame.current = frameId;
        }
      }
    };

    // Cancel previous animation
    if (isGain && gainAnimFrame.current) {
      cancelAnimationFrame(gainAnimFrame.current);
    } else if (!isGain && totalAnimFrame.current) {
      cancelAnimationFrame(totalAnimFrame.current);
    }

    window.requestAnimationFrame(step);
  };

  useEffect(() => {
    const check = parseFloat(avgCheck) || 0;
    const clientCount = parseFloat(clients) || 0;

    const currentRevenue = check * clientCount;
    const newRevenue = check * 1.25 * clientCount;
    const gain = newRevenue - currentRevenue;

    animateValue(displayedGain, gain, 800, true, setDisplayedGain);
    animateValue(displayedTotal, newRevenue, 800, false, setDisplayedTotal);
  }, [avgCheck, clients]);

  return (
    <RevealOnScroll className="lg:col-span-7 glass-card p-6 md:p-8 bg-white shadow-glow border-slate-200">
      <div className="mb-4">
        <h2 className="text-3xl font-bold text-slate-900">Калькулятор прибыли</h2>
      </div>
      
      <p className="text-slate-600 mb-6 leading-relaxed">
        Рассчитайте, каким будет ваш ежемесячный доход, если вы вступите в Клуб менеджеров и научитесь продавать
      </p>

      {/* Inputs */}
      <div className="space-y-4 mb-6">
        {/* Input 1 */}
        <div>
          <label className="block text-slate-900 font-bold mb-2">
            Ваш текущий средний чек (₽)
          </label>
          <input
            type="number"
            value={avgCheck}
            onChange={(e) => setAvgCheck(e.target.value)}
            placeholder="Например: 30000"
            className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-brand-500 focus:ring-4 focus:ring-brand-100 transition-all text-slate-900 placeholder-slate-400 outline-none"
          />
        </div>

        {/* Input 2 */}
        <div>
          <label className="block text-slate-900 font-bold mb-2">
            Количество клиентов в месяц (шт)
          </label>
          <input
            type="number"
            value={clients}
            onChange={(e) => setClients(e.target.value)}
            placeholder="Например: 50"
            className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-brand-500 focus:ring-4 focus:ring-brand-100 transition-all text-slate-900 placeholder-slate-400 outline-none"
          />
        </div>
      </div>

      {/* Results - Single Card with Red Border */}
      <div className="mb-6 p-6 bg-slate-50 rounded-2xl border-l-8 border-brand-900">
        <div className="space-y-4">
          {/* Дополнительный доход */}
          <div>
            <p className="text-slate-500 font-bold uppercase tracking-wide text-sm mb-1">
              доп. доход в месяц:
            </p>
            <p className="text-3xl font-black text-brand-900 tracking-tight">
              +{formatMoney(Math.round(displayedGain))} ₽
            </p>
          </div>

          {/* Новый общий доход */}
          <div>
            <p className="text-slate-500 font-bold uppercase tracking-wide text-sm mb-1">
              ваш новый общий доход в месяц:
            </p>
            <p className="text-3xl font-black text-slate-900 tracking-tight">
              {formatMoney(Math.round(displayedTotal))} ₽
            </p>
          </div>

          {/* Описание */}
          <p className="text-slate-600 leading-relaxed pt-2">
            Такой результат будет, если чек увеличится на <strong>25%</strong>, но наших резидентов чеки вырастают на <strong>40-150%</strong>.
          </p>
        </div>
      </div>

      {/* CTA Button */}
      <a 
        href="https://da-school.online/anketa_club" 
        target="_blank" 
        rel="noopener noreferrer"
        className="block w-full py-4 rounded-2xl bg-brand-900 text-white font-bold hover:bg-brand-800 transition-all shadow-xl shadow-brand-900/20 hover:shadow-2xl hover:shadow-brand-900/30 hover:-translate-y-1 active:scale-[0.98] text-center"
      >
        Хочу в Клуб
      </a>
    </RevealOnScroll>
  );
}