
import { Link } from "react-router-dom";

export const RegisterHeader = () => {
  return (
    <div className="text-center mb-8">
      <h1 className="text-3xl font-bold mb-4">انضم إلى منصة درسني</h1>
      <p className="text-gray-600">
        سجل الآن وابدأ رحلتك التعليمية المتميزة!
      </p>
    </div>
  );
};

export const RegisterFooter = () => {
  return (
    <div className="text-center mt-6">
      <p className="text-gray-600">
        لديك حساب بالفعل؟{" "}
        <Link to="/login" className="text-brand-blue hover:underline">
          تسجيل الدخول
        </Link>
      </p>
    </div>
  );
};
