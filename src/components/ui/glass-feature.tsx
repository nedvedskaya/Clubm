export function GlassFeature({ 
  icon: Icon, 
  label
}: { 
  icon: any, 
  label: string
}) {
  return (
    <div className="flex flex-col items-start gap-4 group cursor-default">
       <div className="w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-500 bg-white/5 border border-white/5 group-hover:bg-white/10 group-hover:border-white/20 backdrop-blur-sm shadow-inner">
          <Icon className="w-6 h-6 text-slate-300/80 group-hover:text-white transition-colors" strokeWidth={1.5} />
       </div>
       <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 group-hover:text-slate-200 transition-colors">
         {label}
       </span>
    </div>
  )
}
