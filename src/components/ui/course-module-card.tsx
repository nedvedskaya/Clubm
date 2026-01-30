import React from "react";
import RevealOnScroll from "../RevealOnScroll";
import { StatusBadge } from "./status-badge";
import { CheckListItem } from "./check-list-item";
import { ShinyButton } from "./shiny-button";
import { CourseModule } from "../data/courseModules";
import { sanitizeHTML } from "../../utils/security";

interface CourseModuleCardProps extends React.HTMLAttributes<HTMLDivElement> {
  module: CourseModule;
}

export function CourseModuleCard({ module }: CourseModuleCardProps) {
  return (
    <RevealOnScroll
      className="w-[85vw] flex-none md:w-auto snap-center bg-white p-6 md:p-8 rounded-3xl border border-slate-100 shadow-lg shadow-slate-200/50 flex flex-col justify-between h-full relative overflow-hidden group hover:border-brand-200 transition-all disable-mobile-animation"
    >
      <div className="absolute -right-4 -top-4 text-[8rem] font-black text-slate-50 pointer-events-none select-none group-hover:text-brand-50/50 transition-colors">
        {module.num}
      </div>

      <div className="relative z-10">
        <div className="mb-4">
          <StatusBadge variant="accent" size="sm" className="mb-3 rounded-lg">
            {module.tag}
          </StatusBadge>
          <h2 className="text-2xl font-extrabold text-slate-900 leading-tight">{module.title}</h2>
        </div>

        <div className="text-sm text-slate-600 font-medium mb-6 leading-relaxed">{module.description}</div>

        <ul className="space-y-3 mb-6">
          {module.features.map((feature, idx) => (
            <CheckListItem key={idx}>
               <span dangerouslySetInnerHTML={{ __html: sanitizeHTML(feature) }} />
            </CheckListItem>
          ))}
        </ul>

        {module.hasPdf && (
          <a
            href="https://da-school.online/pl/fileservice/user/file/download/h/73254e8710cedbd9debaf27977f1c5cd.pdf?gcmes=89067708531&gcmlg=19361223"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-bold text-brand-900 mb-6 hover:opacity-80 transition-opacity group/link"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <span className="border-b border-brand-900/30 group-hover/link:border-brand-900 transition-colors">
              Смотреть пример карты (PDF)
            </span>
          </a>
        )}

        <details className="group/details mb-6">
          <summary className="flex items-center gap-2 cursor-pointer list-none text-xs font-bold text-brand-900 uppercase tracking-wide hover:opacity-70 transition">
            <span>Состав модуля</span>
            <svg className="w-4 h-4 transition group-open/details:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </summary>
          <div
            className={`pt-3 text-xs text-slate-500 space-y-2 animate-fadeIn ${
              module.content.length > 10 ? 'h-48 overflow-y-auto custom-scrollbar pr-2' : ''
            }`}
          >
            {module.content.map((item, idx) => (
              <p key={idx} dangerouslySetInnerHTML={{ __html: sanitizeHTML(item) }} />
            ))}
          </div>
        </details>
      </div>
      
      <div className="mt-4 relative z-10">
          <ShinyButton 
            onClick={() => {
              document.getElementById('full-access')?.scrollIntoView({ behavior: 'smooth' });
            }}
            variant="secondary"
            width="full"
            withArrow={false}
            className="shadow-lg !bg-slate-100 !text-slate-900 hover:!bg-slate-200 border border-slate-200"
          >
            Приобрести обучение
          </ShinyButton>
      </div>
    </RevealOnScroll>
  );
}