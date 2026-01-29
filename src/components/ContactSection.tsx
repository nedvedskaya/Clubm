import React from 'react';
import RevealOnScroll from './RevealOnScroll';
import SecureLink from './SecureLink';
import { cn } from './ui/utils';

interface ContactSectionProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  href?: string;
  rateLimitKey?: string;
  className?: string;
  telegramHref?: string;
  telegramText?: string;
}

export function ContactSection({
  title = "Остались вопросы?",
  subtitle = "Наши менеджеры помогут разобраться",
  buttonText = "НАПИСАТЬ В WHATSAPP",
  href = "https://wa.me/79951140299",
  rateLimitKey = "whatsapp-contact",
  className,
  telegramHref,
  telegramText = "ЗАДАТЬ ВОПРОС В TELEGRAM",
}: ContactSectionProps) {
  return (
    <RevealOnScroll className={cn("lg:col-span-12 mt-12", className)}>
      <div className="p-4 md:p-6 relative overflow-hidden text-center">
         
        <div className="relative z-10">
          <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
            {title}
          </h3>
          <p className="text-slate-600 text-base md:text-lg mb-8 leading-relaxed">
            {subtitle}
          </p>
          
          <div className="flex flex-col gap-4 items-center justify-center max-w-md mx-auto">
            <SecureLink
              href={href}
              rateLimitKey={rateLimitKey}
              rateLimitMax={3}
              rateLimitWindowMs={30000}
              className="w-full inline-flex items-center justify-center gap-3 px-10 py-4 rounded-full bg-brand-900 text-white font-bold hover:bg-brand-800 transition-all shadow-lg shadow-brand-900/30 hover:shadow-xl hover:-translate-y-1 group"
              ariaLabel={buttonText}
            >
              <span className="text-lg text-white group-hover:scale-105 transition-transform text-[16px] uppercase">{buttonText}</span>
            </SecureLink>

            {telegramHref && (
              <SecureLink
                href={telegramHref}
                rateLimitKey={`${rateLimitKey}-tg`}
                rateLimitMax={3}
                rateLimitWindowMs={30000}
                className="w-full inline-flex items-center justify-center gap-3 px-10 py-4 rounded-full bg-brand-900 text-white font-bold hover:bg-brand-800 transition-all shadow-lg shadow-brand-900/30 hover:shadow-xl hover:-translate-y-1 group"
                ariaLabel={telegramText}
              >
                <span className="text-lg text-white group-hover:scale-105 transition-transform uppercase text-[16px]">{telegramText}</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform">
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </SecureLink>
            )}
          </div>
        </div>
      </div>
    </RevealOnScroll>
  );
}
