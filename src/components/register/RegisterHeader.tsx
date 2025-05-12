
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

export const RegisterHeader = () => {
  const { language } = useLanguage();
  
  return (
    <div className="text-center mb-8">
      <h1 className="text-3xl font-bold mb-4">
        {language === 'ar' ? 'انضم إلى منصة درسني' : 'Join Darsni Platform'}
      </h1>
      <p className="text-gray-600">
        {language === 'ar' ? 'سجل الآن وابدأ رحلتك التعليمية المتميزة!' : 'Register now and start your distinguished educational journey!'}
      </p>
    </div>
  );
};

export const RegisterFooter = () => {
  const { language } = useLanguage();
  
  return (
    <div className="text-center mt-6">
      <p className="text-gray-600">
        {language === 'ar' ? 'لديك حساب بالفعل؟ ' : 'Already have an account? '}
        <Link to="/login" className="text-brand-blue hover:underline">
          {language === 'ar' ? 'تسجيل الدخول' : 'Log in'}
        </Link>
      </p>
    </div>
  );
};
