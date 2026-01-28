export function FeatureCard({ icon: Icon, title, description }: { icon: any, title: string, description: string }) {
  return (
     <div className="bg-white rounded-[2rem] p-8 md:p-10 flex flex-col md:flex-row items-start gap-8 shadow-md border border-slate-100 transition-all duration-500 hover:shadow-xl hover:-translate-y-1">
        <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-900 shrink-0">
           <Icon className="w-7 h-7" strokeWidth={1.5} />
        </div>
        <div>
           <h3 className="text-xl font-bold text-slate-900 mb-3 tracking-tight">{title}</h3>
           <p className="text-slate-500 leading-relaxed font-light text-lg">{description}</p>
        </div>
     </div>
  );
}
