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
}

export function ContactSection({
  title = "Остались вопросы?",
  subtitle = "Наши менеджеры помогут разобраться",
  buttonText = "Написать в WhatsApp",
  href = "https://wa.me/79951140299",
  rateLimitKey = "whatsapp-contact",
  className,
}: ContactSectionProps) {
  return (
    <RevealOnScroll className={cn("lg:col-span-12 mt-12", className)}>
      <div className="p-8 md:p-10 relative overflow-hidden rounded-3xl bg-white/50 backdrop-blur-sm border border-slate-100 shadow-xl shadow-slate-200/40">
         {/* Background decoration */}
         <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-brand-100 rounded-full blur-3xl opacity-50 pointer-events-none" />
         <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-blue-100 rounded-full blur-3xl opacity-50 pointer-events-none" />

        <div className="relative z-10 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
            {title}
          </h3>
          <p className="text-slate-600 text-base md:text-lg mb-8 leading-relaxed">
            {subtitle}
          </p>
          
          <SecureLink
            href={href}
            rateLimitKey={rateLimitKey}
            rateLimitMax={3}
            rateLimitWindowMs={30000}
            className="inline-flex items-center justify-center gap-3 px-10 py-4 rounded-full bg-brand-900 text-white font-bold hover:bg-brand-800 transition-all shadow-lg shadow-brand-900/30 hover:shadow-xl hover:-translate-y-1 group"
            ariaLabel={buttonText}
          >
            <span className="text-lg text-white group-hover:scale-105 transition-transform">{buttonText}</span>
          </SecureLink>
        </div>
      </div>
    </RevealOnScroll>
  );
}
