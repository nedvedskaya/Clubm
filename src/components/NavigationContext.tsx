import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useScrollTo } from '../hooks/useScrollTo';

interface NavigationContextType {
  activePage: string;
  navigate: (pageId: string) => void;
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

export function NavigationProvider({ children }: { children: ReactNode }) {
  const [activePage, setActivePage] = useState('page-home');
  const { scrollToTop } = useScrollTo();

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

  const navigate = (pageId: string) => {
    setActivePage(pageId);
    scrollToTop();
    history.pushState(null, '', '#' + pageId);
  };

  return (
    <NavigationContext.Provider value={{ activePage, navigate }}>
      {children}
    </NavigationContext.Provider>
  );
}

export function useNavigation() {
  const context = useContext(NavigationContext);
  if (context === undefined) {
    throw new Error('useNavigation must be used within a NavigationProvider');
  }
  return context;
}
