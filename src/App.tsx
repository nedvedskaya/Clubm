import { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import HomePage from './components/HomePage';
import ClubPage from './components/ClubPage';
import CoursePage from './components/CoursePage';
import MasterclassPage from './components/MasterclassPage';
import Footer from './components/Footer';
import SecurityHeaders from './components/SecurityHeaders';
import { Toaster } from 'sonner@2.0.3';
import { AuroraBackground } from './components/ui/aurora-background';

export default function App() {
  const [activePage, setActivePage] = useState('page-home');

  // Handle URL hash on load
  useEffect(() => {
    const hash = window.location.hash.substring(1);
    if (hash && ['page-home', 'page-club', 'page-course', 'page-masterclass'].includes(hash)) {
      setActivePage(hash);
    }
  }, []);

  // Handle browser back/forward
  useEffect(() => {
    const handlePopState = () => {
      const hash = window.location.hash.substring(1);
      if (hash && ['page-home', 'page-club', 'page-course', 'page-masterclass'].includes(hash)) {
        setActivePage(hash);
      } else {
        setActivePage('page-home');
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const showPage = (pageId: string) => {
    setActivePage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    history.pushState(null, '', '#' + pageId);
  };

  return (
    <>
      {/* Security Headers */}
      <SecurityHeaders />
      
      {/* Toast Notifications для Rate Limiting */}
      <Toaster position="top-right" richColors closeButton />
      
      <div className="antialiased selection:bg-brand-800 selection:text-white font-sans bg-[#F8F9FC] min-h-screen relative overflow-x-hidden">
        {/* Aurora Blobs - Unified Background System */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
             <AuroraBackground 
               variant="blue-soft"
               className="absolute top-[-10%] left-[-10%] w-[400px] md:w-[600px] h-[400px] md:h-[600px] opacity-30 animate-blob mix-blend-multiply"
               blur="blur-[100px]"
             />
             <AuroraBackground 
               variant="slate"
               className="absolute bottom-[-10%] right-[-10%] w-[500px] md:w-[700px] h-[500px] md:h-[700px] opacity-40 animate-blob mix-blend-multiply"
               blur="blur-[100px]"
               // Adding delay via style prop is tricky with the component wrapper unless we pass style, but for now standard animation is fine.
               // If we need different delays, we can add style={{ animationDelay: '2s' }} to the wrapper div or extend component.
             />
             <div style={{ animationDelay: '2s' }} className="absolute bottom-[-10%] right-[-10%] w-full h-full opacity-0"></div> 

             <AuroraBackground 
               variant="brand-glow"
               className="absolute top-[40%] left-[40%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] opacity-[0.08] animate-blob mix-blend-multiply"
               blur="blur-[120px]"
             />
        </div>

        {/* Navigation */}
        <Navigation activePage={activePage} onNavigate={showPage} />

        {/* Main Container */}
        <div className="min-h-screen pt-28 md:pt-32 lg:pt-36 pb-14 md:pb-16 lg:pb-20 px-4 sm:px-6 max-w-7xl mx-auto relative z-10">
          {activePage === 'page-home' && <HomePage onNavigate={showPage} />}
          {activePage === 'page-club' && <ClubPage onNavigate={showPage} />}
          {activePage === 'page-course' && <CoursePage onNavigate={showPage} />}
          {activePage === 'page-masterclass' && <MasterclassPage onNavigate={showPage} />}
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}