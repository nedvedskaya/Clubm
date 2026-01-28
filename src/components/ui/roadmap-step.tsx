import { LucideIcon, CheckCircle2 } from 'lucide-react';

interface RoadmapStepProps {
  number: string;
  title: string;
  description: string;
  duration: string;
  icon: LucideIcon;
  position: 'left' | 'right';
  className?: string;
}

export function RoadmapStep({
  number,
  title,
  description,
  duration,
  icon: Icon,
  position,
  className = ''
}: RoadmapStepProps) {
  const isLeft = position === 'left';
  
  // Colors based on side/content might vary, but for now we'll use the logic seen in ClubPage
  // Left side seems to use default styling, Right side uses slightly different colors in the original code?
  // Actually, checking the original code:
  // Step 1 (Left): brand-900 for number, slate-400 for duration text
  // Step 2 (Right): #1e1b4b (indigo-950) for number, #1e1b4b for duration text/bg
  // Step 3 (Left): brand-900 (red) theme
  
  // Let's make it configurable or infer based on position/index if needed, 
  // but simpler to pass a "variant" prop. For now, let's keep it flexible.
  
  // We can determine colors based on the step number or passed props.
  // Original Step 1 (Left): Red/Slate
  // Original Step 2 (Right): Indigo/Blue
  // Original Step 3 (Left): Red
  
  const isIndigo = number === '02.';
  const numberColor = isIndigo ? 'text-[#1e1b4b]' : 'text-brand-900';
  const badgeBg = isIndigo ? 'bg-[#1e1b4b]/5' : 'bg-slate-50'; // Step 3 was bg-brand-50
  const badgeText = isIndigo ? 'text-[#1e1b4b]' : 'text-slate-400'; // Step 3 was text-brand-700
  
  // Special handling for Step 3 which had extra decorations
  const isStep3 = number === '03.';
  
  return (
    <div className={`relative flex flex-col md:flex-row items-start md:items-center group ${className}`}>
      {/* Spacer or Content based on position */}
      {position === 'right' && <div className="md:w-1/2 order-3 md:order-1 hidden md:block"></div>}
      
      {/* Content Box */}
      <div className={`md:w-1/2 ${isLeft ? 'md:pr-16 pl-20 md:pl-0 md:text-right order-2 md:order-1' : 'md:pl-16 pl-20 md:pr-0 order-2 md:order-3'}`}>
         <div className={`bg-white p-6 rounded-2xl shadow-sm border border-slate-100 group-hover:-translate-y-1 group-hover:shadow-md transition-all duration-300 ${isStep3 ? 'shadow-lg shadow-brand-900/5 border-brand-100 relative overflow-hidden' : ''}`}>
            {isStep3 && <div className="absolute top-0 right-0 w-20 h-20 bg-brand-50 rounded-bl-full -mr-10 -mt-10 z-0"></div>}
            
            <h3 className={`text-xl font-bold text-slate-900 mb-2 flex items-center ${isLeft ? 'md:justify-end' : ''} gap-2 font-[Manrope] uppercase ${isStep3 ? 'relative z-10' : ''}`}>
               <span className={`md:hidden ${numberColor}`}>{number}</span> {title}
            </h3>
            <p className={`text-[rgb(69,85,108)] leading-relaxed mb-4 text-[15px] ${isStep3 ? 'relative z-10' : ''}`}>
              {description}
            </p>
            <div className={`inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider ${isStep3 ? 'text-brand-700 bg-brand-50' : `${badgeText} ${badgeBg}`} px-3 py-1 rounded-full ${isStep3 ? 'relative z-10' : ''}`}>
              <Icon className="w-3 h-3" /> {duration}
            </div>
         </div>
      </div>
      
      {/* Center Marker */}
      <div className={`absolute left-8 md:left-1/2 -translate-x-1/2 ${isStep3 ? 'w-12 h-12 bg-brand-900 border-4 border-brand-100' : 'w-10 h-10 bg-white border-4 border-slate-300'} rounded-full flex items-center justify-center z-10 ${isStep3 ? 'shadow-lg' : 'shadow-[0_0_0_4px_rgba(241,245,249,1)]'} group-hover:scale-110 ${isStep3 ? '' : (isIndigo ? 'group-hover:border-[#1e1b4b]' : 'group-hover:border-brand-600')} transition-all duration-300 order-1 md:order-2 mt-0 md:mt-0`}>
         {isStep3 ? (
            <CheckCircle2 className="w-5 h-5 text-white" />
         ) : (
            <div className={`w-2.5 h-2.5 bg-slate-400 rounded-full ${isIndigo ? 'group-hover:bg-[#1e1b4b]' : 'group-hover:bg-brand-600'} transition-colors`}></div>
         )}
      </div>

      {/* Spacer or Content based on position */}
      {position === 'left' && <div className="md:w-1/2 order-3 hidden md:block"></div>}
    </div>
  );
}
