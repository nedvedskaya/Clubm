import { LucideIcon } from 'lucide-react';
import { cn } from "@/lib/utils";

interface ParticipationItem {
  title: React.ReactNode;
  description: string;
}

interface ParticipationColumnProps {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  subtitleClassName?: string;
  iconClassName?: string;
  items: ParticipationItem[];
  hoverColorClass?: string;
}

export function ParticipationColumn({
  icon: Icon,
  title,
  subtitle,
  subtitleClassName,
  iconClassName,
  items,
  hoverColorClass = 'group-hover:text-brand-700'
}: ParticipationColumnProps) {
  return (
    <div className="flex flex-col gap-10">
       <div className="flex items-center gap-6">
          <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center border border-slate-100">
             <Icon className={cn("w-8 h-8", iconClassName)} strokeWidth={1.5} />
          </div>
          <div>
             <h3 className="text-3xl font-bold text-slate-900 tracking-tight">{title}</h3>
             <p className={cn("font-bold text-xs uppercase tracking-widest mt-1", subtitleClassName)}>{subtitle}</p>
          </div>
       </div>
       
       <div className="space-y-8">
          {items.map((item, index) => (
             <div key={index} className="group">
                <h4 className={cn("text-xl font-bold text-slate-900 mb-2 transition-colors", hoverColorClass)}>
                  {item.title}
                </h4>
                <p className="text-slate-500 leading-relaxed">
                  {item.description}
                </p>
             </div>
          ))}
       </div>
    </div>
  );
}
