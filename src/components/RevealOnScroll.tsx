import { useEffect, useRef, ReactNode } from 'react';

interface RevealOnScrollProps {
  children: ReactNode;
  className?: string;
  id?: string;
  onClick?: () => void;
}

export default function RevealOnScroll({ children, className = '', id, onClick }: RevealOnScrollProps) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  return (
    <div ref={elementRef} className={`reveal-on-scroll ${className}`} id={id} onClick={onClick}>
      {children}
    </div>
  );
}
