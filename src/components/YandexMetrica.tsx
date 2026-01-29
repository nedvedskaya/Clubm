import { useEffect, useRef } from 'react';
import { useNavigation } from './NavigationContext';

const YM_ID = 96358362; // Replace with your actual Yandex.Metrica ID if different

declare global {
  interface Window {
    ym: (id: number, method: string, ...args: any[]) => void;
  }
}

export function YandexMetrica() {
  const { activePage } = useNavigation();
  const scrollMilestones = useRef<Set<number>>(new Set());

  // 1. Initialize Yandex Metrica Counter
  useEffect(() => {
    (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
    m[i].l=1*new Date();
    for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
    k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
    (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

    window.ym(YM_ID, "init", {
        clickmap:true,
        trackLinks:true,
        accurateTrackBounce:true,
        webvisor:true
    });

    console.log(`[YandexMetrica] Initialized with ID: ${YM_ID}`);
  }, []);

  // 2. Track Page Views (SPA support)
  useEffect(() => {
    const url = window.location.href;
    window.ym(YM_ID, 'hit', url, {
        title: document.title
    });
    console.log(`[YandexMetrica] Page View: ${activePage}`);
    
    // Reset scroll milestones on page change
    scrollMilestones.current.clear();
  }, [activePage]);

  // 3. Track Scroll Depth (25%, 50%, 75%, 100%)
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;

      const milestones = [25, 50, 75, 100];

      milestones.forEach((milestone) => {
        if (scrollPercent >= milestone && !scrollMilestones.current.has(milestone)) {
          scrollMilestones.current.add(milestone);
          const goalName = `SCROLL_${milestone}`;
          
          // Send to Metrica
          window.ym(YM_ID, 'reachGoal', goalName);
          
          // Log to Console
          console.log(`[YandexMetrica] Goal Reached: ${goalName}`);
        }
      });
    };

    // Throttle the scroll event
    let timeoutId: number;
    const throttledScroll = () => {
      if (timeoutId) return;
      timeoutId = window.setTimeout(() => {
        handleScroll();
        timeoutId = 0;
      }, 200);
    };

    window.addEventListener('scroll', throttledScroll);
    return () => window.removeEventListener('scroll', throttledScroll);
  }, [activePage]);

  // 4. Track Clicks & Forms
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      
      // Check for buttons or links
      const element = target.closest('button, a, [role="button"]');
      
      if (element) {
        // Try to get a meaningful name: data-goal, id, text content, or aria-label
        const goalId = element.getAttribute('data-goal');
        const buttonText = element.textContent?.slice(0, 30).trim() || 'UNKNOWN_BUTTON';
        
        if (goalId) {
            window.ym(YM_ID, 'reachGoal', goalId);
            console.log(`[YandexMetrica] Custom Goal: ${goalId}`);
        } else {
            // General click tracking
            // We don't want to spam goals for every click unless configured, 
            // but the user asked to "Track clicks on buttons".
            // Let's send a generic 'BUTTON_CLICK' goal with params
            window.ym(YM_ID, 'reachGoal', 'BUTTON_CLICK', { text: buttonText });
            console.log(`[YandexMetrica] Button Click: ${buttonText}`);
        }
      }
    };

    const handleSubmit = (event: SubmitEvent) => {
        const form = event.target as HTMLFormElement;
        const formName = form.getAttribute('name') || form.getAttribute('id') || 'UNKNOWN_FORM';
        
        window.ym(YM_ID, 'reachGoal', 'FORM_SUBMIT', { form: formName });
        console.log(`[YandexMetrica] Form Submit: ${formName}`);
    };

    window.addEventListener('click', handleClick);
    window.addEventListener('submit', handleSubmit);

    return () => {
      window.removeEventListener('click', handleClick);
      window.removeEventListener('submit', handleSubmit);
    };
  }, []);

  return (
    <noscript>
      <div>
        <img src={`https://mc.yandex.ru/watch/${YM_ID}`} style={{ position: 'absolute', left: '-9999px' }} alt="" />
      </div>
    </noscript>
  );
}
