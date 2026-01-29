import React, { Suspense, lazy } from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import SecurityHeaders from './components/SecurityHeaders';
import { Toaster } from 'sonner@2.0.3';
import { AuroraBackground } from './components/ui/aurora-background';
import { NavigationProvider, useNavigation } from './components/NavigationContext';
import { Skeleton } from './components/ui/skeleton';
import { YandexMetrica } from './components/YandexMetrica';

// Lazy load pages for performance
const HomePage = lazy(() => import('./components/HomePage'));
const ClubPage = lazy(() => import('./components/ClubPage'));
const CoursePage = lazy(() => import('./components/CoursePage'));
const MasterclassPage = lazy(() => import('./components/MasterclassPage'));

function PageLoader() {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center space-y-4">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand-900"></div>
      <div className="text-slate-400 text-sm font-medium tracking-widest uppercase">Загрузка...</div>
    </div>
  );
}

function AppLayout() {
  const { activePage } = useNavigation();

  return (
    <>
      {/* Security Headers */}
      <SecurityHeaders />
      
      {/* Analytics */}
      <YandexMetrica />

      {/* Toast Notifications */}
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
             />
             <div style={{ animationDelay: '2s' }} className="absolute bottom-[-10%] right-[-10%] w-full h-full opacity-0"></div> 

             <AuroraBackground 
               variant="brand-glow"
               className="absolute top-[40%] left-[40%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] opacity-[0.08] animate-blob mix-blend-multiply"
               blur="blur-[120px]"
             />
        </div>

        {/* Navigation */}
        <Navigation />

        {/* Main Container */}
        <div className="min-h-screen pt-28 md:pt-32 lg:pt-36 pb-14 md:pb-16 lg:pb-20 px-4 sm:px-6 max-w-7xl mx-auto relative z-10">
          <Suspense fallback={<PageLoader />}>
            {activePage === 'page-home' && <HomePage />}
            {activePage === 'page-club' && <ClubPage />}
            {activePage === 'page-course' && <CoursePage />}
            {activePage === 'page-masterclass' && <MasterclassPage />}
          </Suspense>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}

export default function App() {
  return (
    <NavigationProvider>
      <AppLayout />
    </NavigationProvider>
  );
}
