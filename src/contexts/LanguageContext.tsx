
import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations, TranslationKey } from '@/translations';

type Language = 'ar' | 'en';

interface LanguageContextProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  dir: 'rtl' | 'ltr';
  currencySymbol: string;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    // Try to get the language from localStorage first
    const savedLang = localStorage.getItem('language') as Language;
    return savedLang === 'en' ? 'en' : 'ar'; // Default to Arabic if not set
  });
  
  // Effect to set html dir attribute
  useEffect(() => {
    const dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.dir = dir;
    document.documentElement.lang = language;
    localStorage.setItem('language', language);
  }, [language]);
  
  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };
  
  // Translation function
  const t = (key: string): string => {
    const currentTranslations = language === 'ar' ? translations.ar : translations.en;
    return currentTranslations[key as TranslationKey] || key;
  };
  
  const dir = language === 'ar' ? 'rtl' : 'ltr';
  const currencySymbol = language === 'ar' ? 'د.ك' : 'KWD';
  
  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, dir, currencySymbol }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
