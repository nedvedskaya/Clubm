import { ArrowUp } from 'lucide-react';
import { SocialLink } from './ui/social-link';
import { useScrollTo } from '../hooks/useScrollTo';
import { CONTACTS } from './data/constants';

export default function Footer() {
  const { scrollToTop } = useScrollTo();

  const socialLinks = [
    {
      href: CONTACTS.telegram,
      colorClass: "group-hover:text-[#229ED9]",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
          <path d="M9.78,18.65L10.06,14.42L17.74,7.5C18.08,7.19 17.67,7.04 17.22,7.31L7.74,13.3L3.64,12C2.76,11.75 2.75,11.14 3.84,10.7L19.81,4.54C20.54,4.21 21.24,4.72 20.96,5.84L18.24,18.65C18.05,19.56 17.5,19.8 16.74,19.36L12.6,16.3L10.61,18.23C10.38,18.46 10.19,18.65 9.78,18.65Z" />
        </svg>
      )
    },
    {
      href: CONTACTS.instagram,
      colorClass: "group-hover:text-[#E1306C]",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
          <path d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z" />
        </svg>
      )
    },
    {
      href: CONTACTS.vk,
      colorClass: "group-hover:text-[#0077FF]",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.8,7.7C20.87,7.5 20.8,7.34 20.58,7.34H17.74C17.5,7.34 17.39,7.46 17.33,7.59C17.33,7.59 15.9,11.05 13.9,13.3C13.25,13.95 12.95,14.16 12.8,14.16C12.57,14.16 12.4,13.9 12.4,13.17V7.7C12.4,7.42 12.32,7.23 11.85,7.23H8.33C7.97,7.23 7.75,7.49 7.75,7.76C7.75,8.33 8.6,8.46 8.69,10.05V13.24C8.69,13.94 8.57,14.07 8.3,14.07C7.57,14.07 5.8,11.33 4.75,7.74C4.54,7.42 4.33,7.25 4.05,7.25H1.21C0.93,7.25 0.8,7.39 0.8,7.68C0.8,8.21 1.49,10.96 4.05,14.62C5.76,17 8.16,18.28 10.35,18.28C11.67,18.28 11.84,18 11.84,17.48V15.64C11.84,15.08 11.96,14.96 12.4,14.96C12.73,14.96 13.3,15.13 14.62,16.43C16.13,17.94 16.38,18.28 17.23,18.28H20.07C20.35,18.28 20.49,18.14 20.41,17.86C20.18,17.04 17.88,14.84 17.88,14.84C17.53,14.36 17.63,14.14 17.88,13.74C17.88,13.74 20.63,9.91 20.8,7.7Z" />
        </svg>
      )
    },
    {
      href: CONTACTS.youtube,
      colorClass: "group-hover:text-[#FF0000]",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
          <path d="M10,15L15.19,12L10,9V15M21.56,7.17C21.69,7.64 21.78,8.27 21.84,9.07C21.91,9.87 21.94,10.56 21.94,11.16L22,12C22,14.19 21.84,15.8 21.56,16.83C21.31,17.73 20.73,18.31 19.83,18.56C19.36,18.69 18.5,18.78 17.18,18.84C15.88,18.91 14.69,18.94 13.59,18.94L12,19C7.81,19 5.2,18.84 4.17,18.56C3.27,18.31 2.69,17.73 2.44,16.83C2.31,16.36 2.22,15.73 2.16,14.93C2.09,14.13 2.06,13.44 2.06,12.84L2,12C2,9.81 2.16,8.2 2.44,7.17C2.69,6.27 3.27,5.69 4.17,5.44C4.64,5.31 5.5,5.22 6.82,5.16C8.12,5.09 9.31,5.06 10.41,5.06L12,5C16.19,5 18.8,5.16 19.83,5.44C20.73,5.69 21.31,6.27 21.56,7.17Z" />
        </svg>
      )
    }
  ];

  return (
    <footer className="py-12 bg-transparent text-center relative z-10">
      <div className="max-w-7xl mx-auto px-4 flex flex-col items-center">
        
        {/* Social Icons & Scroll Top Row */}
        <div className="flex items-center gap-4 mb-8">
          {socialLinks.map((link, idx) => (
            <SocialLink 
              key={idx}
              href={link.href}
              icon={link.icon}
              colorClass={link.colorClass}
            />
          ))}

          {/* Scroll To Top Button */}
          <button
            onClick={scrollToTop}
            className="w-14 h-14 bg-brand-900 rounded-full flex items-center justify-center text-white shadow-lg shadow-brand-900/30 hover:scale-110 transition-transform hover:shadow-xl hover:bg-brand-800 active:scale-95 border-2 border-white ml-2"
            aria-label="Наверх"
          >
            <ArrowUp className="w-6 h-6" strokeWidth={3} />
          </button>
        </div>

        {/* Copyright */}
        <p className="text-[#1e293b] font-bold text-sm mb-2">
          &copy; 2025 Клуб менеджеров. Все права защищены.
        </p>
        
        {/* Disclaimer */}
        <p className="text-slate-400 text-[10px] sm:text-xs max-w-lg leading-relaxed">
          Instagram — запрещенная в РФ соцсеть, принадлежит компании Meta, которая признана в РФ экстремистской.
        </p>
      </div>
    </footer>
  );
}
