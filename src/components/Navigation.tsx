import { useNavigation } from './NavigationContext';

export default function Navigation() {
  const { activePage, navigate } = useNavigation();
  const navItems = [
    { id: 'page-home', label: 'Главная' },
    { id: 'page-club', label: 'Метод' },
    { id: 'page-course', label: 'Курс' },
    { id: 'page-masterclass', label: 'МК' },
  ];

  return (
    <nav className="fixed top-4 md:top-6 left-1/2 -translate-x-1/2 z-[9999] flex items-center gap-1 md:gap-1.5 p-1.5 md:p-2 bg-white/95 backdrop-blur-2xl border border-slate-200/60 rounded-full shadow-[0_10px_40px_-5px_rgba(0,0,0,0.12)] w-auto">
      {navItems.map((item) => (
        <button
          key={item.id}
          onClick={() => navigate(item.id)}
          className={`relative px-3 sm:px-4 md:px-5 lg:px-6 py-2 md:py-3 rounded-full font-bold text-xs sm:text-sm md:text-base whitespace-nowrap transition-all duration-300 ${
            activePage === item.id
              ? 'bg-slate-900 text-white shadow-[0_8px_16px_rgba(0,0,0,0.18)]'
              : 'bg-transparent text-slate-600 hover:text-slate-900 hover:bg-slate-100 active:scale-95'
          }`}
        >
          {item.label}
          {activePage === item.id && (
            <span className="absolute inset-0 rounded-full bg-slate-900 animate-pulse opacity-0" />
          )}
        </button>
      ))}
    </nav>
  );
}
