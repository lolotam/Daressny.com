
import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'ar' | 'en';

interface LanguageContextProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  dir: 'rtl' | 'ltr';
  currencySymbol: string;
}

// Default translations
const translations = {
  ar: {
    // Navbar
    'home': 'الرئيسية',
    'subjects': 'المواد الدراسية',
    'resources': 'المصادر التعليمية',
    'book': 'احجز درس',
    'joinTeacher': 'انضم كمدرس',
    'blog': 'المدونة',
    'contact': 'اتصل بنا',
    'login': 'تسجيل دخول',
    'register': 'انضم الآن',
    
    // Teachers page
    'teachersTitle': 'المعلمين المتميزين',
    'teachersDescription': 'اكتشف نخبة المعلمين المؤهلين في جميع المواد الدراسية',
    'searchFilter': 'البحث والتصفية',
    'searchTeacher': 'البحث عن معلم',
    'subjectFilter': 'تصفية حسب المادة',
    'priceSort': 'ترتيب حسب السعر',
    'ratingSort': 'ترتيب حسب التقييم',
    'allSubjects': 'جميع المواد',
    'defaultSort': 'ترتيب افتراضي',
    'lowToHigh': 'الأقل سعرًا',
    'highToLow': 'الأعلى سعرًا',
    'highestRated': 'الأعلى تقييمًا',
    'noResults': 'لا توجد نتائج مطابقة للبحث',
    'resetFilters': 'إعادة ضبط عوامل التصفية',
    
    // FAQ page
    'faqTitle': 'الأسئلة الشائعة للمعلمين',
    'faqDescription': 'إجابات على الأسئلة الأكثر شيوعًا حول التسجيل والتدريس على منصة درسني',
    'searchQuestion': 'ابحث عن سؤال...',
    'noQuestionsFound': 'لم يتم العثور على نتائج مطابقة',
    'tryDifferentSearch': 'جرّب مصطلحات بحث مختلفة أو تصفح الأسئلة حسب الفئة',
    'clearSearch': 'مسح البحث',
    'moreQuestions': 'لديك المزيد من الأسئلة؟',
    'contactSupport': 'تواصل مع فريق الدعم',
    'bookTraining': 'احجز جلسة تدريبية',
    'moreQuestionsDesc': 'إذا لم تجد إجابة لسؤالك، يمكنك التواصل مع فريق دعم المعلمين لدينا. نحن هنا لمساعدتك!',
    
    // Currency
    'currency': 'د.ك',
    
    // Language switcher
    'switchToEnglish': 'English',
    'switchToArabic': 'العربية',
  },
  en: {
    // Navbar
    'home': 'Home',
    'subjects': 'Subjects',
    'resources': 'Resources',
    'book': 'Book a Lesson',
    'joinTeacher': 'Join as Teacher',
    'blog': 'Blog',
    'contact': 'Contact Us',
    'login': 'Login',
    'register': 'Register',
    
    // Teachers page
    'teachersTitle': 'Outstanding Teachers',
    'teachersDescription': 'Discover qualified teachers in all academic subjects',
    'searchFilter': 'Search & Filter',
    'searchTeacher': 'Search for a teacher',
    'subjectFilter': 'Filter by subject',
    'priceSort': 'Sort by price',
    'ratingSort': 'Sort by rating',
    'allSubjects': 'All Subjects',
    'defaultSort': 'Default Sort',
    'lowToHigh': 'Lowest Price',
    'highToLow': 'Highest Price',
    'highestRated': 'Highest Rated',
    'noResults': 'No matching results found',
    'resetFilters': 'Reset Filters',
    
    // FAQ page
    'faqTitle': 'Frequently Asked Questions for Teachers',
    'faqDescription': 'Answers to commonly asked questions about registering and teaching on Darsni platform',
    'searchQuestion': 'Search for a question...',
    'noQuestionsFound': 'No matching results found',
    'tryDifferentSearch': 'Try different search terms or browse questions by category',
    'clearSearch': 'Clear Search',
    'moreQuestions': 'Have more questions?',
    'contactSupport': 'Contact Support Team',
    'bookTraining': 'Book a Training Session',
    'moreQuestionsDesc': 'If you did not find an answer to your question, you can contact our teacher support team. We are here to help!',
    
    // Currency
    'currency': 'KWD',
    
    // Language switcher
    'switchToEnglish': 'English',
    'switchToArabic': 'العربية',
  },
};

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
    return translations[language][key as keyof typeof translations[typeof language]] || key;
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
