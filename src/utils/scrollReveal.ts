export function initScrollReveal() {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          revealObserver.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
    }
  );

  const revealElements = document.querySelectorAll('.reveal-on-scroll');
  revealElements.forEach((el) => revealObserver.observe(el));
}

export function formatMoney(num: number): string {
  return new Intl.NumberFormat('ru-RU').format(num);
}
