
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
    
    // Home page
    'heroTitle': 'مع منصة درسني النجاح أصبح أسهل وأقرب إليك!',
    'heroDescription': 'منصة درسني هي منصتك الأولى لحجز الدروس الخصوصية سواء بالمنزل أو أونلاين مع نخبة من أفضل المعلمين في جميع المواد الدراسية والمراحل التعليمية.',
    'registerStudent': 'سجل كطالب',
    'registerTeacher': 'سجل كمعلم',
    'ctaTitle': 'انضم إلينا الآن واحصل على تجربة تعليمية متميزة',
    'ctaDescription': 'سواء كنت طالبًا تبحث عن معلم متميز أو معلمًا تريد توسيع نطاق تدريسك، منصة درسني هي وجهتك الأمثل',
    
    // Registration page
    'joinPlatform': 'انضم إلى منصة درسني',
    'startJourney': 'سجل الآن وابدأ رحلتك التعليمية المتميزة!',
    'alreadyHaveAccount': 'لديك حساب بالفعل؟',
    'loginHere': 'تسجيل الدخول',
    'createTeacherAccount': 'إنشاء حساب معلم',
    'registering': 'جاري التسجيل...',
    
    // Join Teacher page
    'joinTeacherTeam': 'انضم إلى فريق معلمي منصة درسني',
    'teachOpportunity': 'انضم إلينا واستفد من فرصة تدريس آلاف الطلاب في مختلف المراحل التعليمية',
    'fillFormBelow': 'أكمل النموذج أدناه وسنتواصل معك في أقرب وقت',
    
    // Subjects page
    'educationalStage': 'المرحلة الدراسية',
    'chooseStage': 'اختر المرحلة الدراسية',
    'studyMethod': 'طريقة الدراسة',
    'chooseMethod': 'اختر طريقة الدراسة',
    'search': 'البحث',
    'searchSubject': 'ابحث عن مادة دراسية...',
    'levels': 'المراحل',
    'teaching': 'الدراسة',
    'viewTeachers': 'عرض المعلمين',
    'noSubjectsFound': 'لم يتم العثور على مواد دراسية',
    'changeSearchCriteria': 'جرب تغيير معايير البحث أو الفلترة للعثور على المادة المطلوبة.',
    
    // Success stories page
    'shareStory': 'شارك قصتك',
    'shareExperience': 'شارك تجربتك مع منصة درسني لتلهم الآخرين',
    'successStoriesTitle': 'قصص نجاح',
    'successStoriesDescription': 'تعرّف على قصص نجاح حقيقية لطلاب ومعلمين حققوا نتائج استثنائية مع منصة درسني',
    'studentStoriesTab': 'قصص نجاح الطلاب',
    'teacherStoriesTab': 'قصص نجاح المعلمين',
    'haveSuccessStory': 'هل لديك قصة نجاح مع درسني؟',
    'proudOfSuccesses': 'نحن فخورون بنجاحات طلابنا ومعلمينا. شارك قصة نجاحك معنا وقد تظهر هنا قريبًا!',
    'shareYourStory': 'شارك قصة نجاحك',
    
    // Currency
    'currency': 'د.ك',
    
    // Language switcher
    'switchToEnglish': 'English',
    'switchToArabic': 'العربية',

    // Admin Dashboard
    'adminDashboard': 'لوحة تحكم المشرف',
    'overview': 'نظرة عامة',
    'users': 'المستخدمين',
    'teachers': 'المعلمين',
    'bookings': 'الحجوزات',
    'content': 'المحتوى',
    'financial': 'التقارير المالية',
    'permissions': 'الصلاحيات',
    'settings': 'الإعدادات',
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
    
    // Home page
    'heroTitle': 'With Darsni Platform success is easier and closer to you!',
    'heroDescription': 'Darsni platform is your first platform for booking private lessons either at home or online with an elite group of the best teachers in all subjects and educational stages.',
    'registerStudent': 'Register as Student',
    'registerTeacher': 'Register as Teacher',
    'ctaTitle': 'Join us now and get a distinguished educational experience',
    'ctaDescription': 'Whether you are a student looking for an outstanding teacher or a teacher wanting to expand your teaching, Darsni platform is your ideal destination',
    
    // Registration page
    'joinPlatform': 'Join Darsni Platform',
    'startJourney': 'Register now and start your distinguished educational journey!',
    'alreadyHaveAccount': 'Already have an account?',
    'loginHere': 'Log in',
    'createTeacherAccount': 'Create Teacher Account',
    'registering': 'Registering...',
    
    // Join Teacher page
    'joinTeacherTeam': 'Join the Darsni Platform Teaching Team',
    'teachOpportunity': 'Join us and benefit from the opportunity to teach thousands of students in various educational stages',
    'fillFormBelow': 'Complete the form below and we will contact you as soon as possible',
    
    // Subjects page
    'educationalStage': 'Educational Stage',
    'chooseStage': 'Choose educational stage',
    'studyMethod': 'Study Method',
    'chooseMethod': 'Choose study method',
    'search': 'Search',
    'searchSubject': 'Search for a subject...',
    'levels': 'Levels',
    'teaching': 'Teaching',
    'viewTeachers': 'View Teachers',
    'noSubjectsFound': 'No subjects found',
    'changeSearchCriteria': 'Try changing your search or filter criteria to find the subject you are looking for.',
    
    // Success stories page
    'shareStory': 'Share Your Story',
    'shareExperience': 'Share your experience with Darsni platform to inspire others',
    'successStoriesTitle': 'Success Stories',
    'successStoriesDescription': 'Discover real success stories from students and teachers who achieved exceptional results with Darsni platform',
    'studentStoriesTab': 'Student Success Stories',
    'teacherStoriesTab': 'Teacher Success Stories',
    'haveSuccessStory': 'Do you have a success story with Darsni?',
    'proudOfSuccesses': 'We are proud of our students and teachers successes. Share your success story with us and it may appear here soon!',
    'shareYourStory': 'Share Your Success Story',
    
    // Currency
    'currency': 'KWD',
    
    // Language switcher
    'switchToEnglish': 'English',
    'switchToArabic': 'العربية',

    // Admin Dashboard
    'adminDashboard': 'Admin Dashboard',
    'overview': 'Overview',
    'users': 'Users',
    'teachers': 'Teachers',
    'bookings': 'Bookings',
    'content': 'Content',
    'financial': 'Financial Reports',
    'permissions': 'Permissions',
    'settings': 'Settings',
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
