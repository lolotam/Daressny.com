
import { UserPlus } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export const JoinTeacherHeader = () => {
  const { language } = useLanguage();
  
  return (
    <div className="mb-10 text-center">
      <h1 className="text-3xl font-bold mb-4">
        {language === 'ar' 
          ? 'انضم إلى فريق معلمي منصة درسني' 
          : 'Join the Darsni Platform Teaching Team'}
      </h1>
      <div className="flex justify-center">
        <UserPlus className="h-12 w-12 text-brand-blue mb-4" />
      </div>
      <p className="text-gray-600 text-lg mb-2">
        {language === 'ar' 
          ? 'انضم إلينا واستفد من فرصة تدريس آلاف الطلاب في مختلف المراحل التعليمية'
          : 'Join us and benefit from the opportunity to teach thousands of students in various educational stages'}
      </p>
      <p className="text-gray-500">
        {language === 'ar'
          ? 'أكمل النموذج أدناه وسنتواصل معك في أقرب وقت'
          : 'Complete the form below and we will contact you as soon as possible'}
      </p>
    </div>
  );
};
