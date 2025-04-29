
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { BookOpen } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";

const BookLesson = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="mb-10 text-center">
              <h1 className="text-3xl font-bold mb-4">حجز درس تعليمي</h1>
              <div className="flex justify-center">
                <BookOpen className="h-12 w-12 text-brand-blue mb-4" />
              </div>
              <p className="text-gray-600 text-lg">
                اختر المعلم والمادة والوقت المناسب لك وابدأ رحلتك التعليمية
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm mb-8">
              <h2 className="text-2xl font-semibold mb-6">طريقة حجز درس</h2>
              
              <ol className="space-y-6">
                <li className="flex items-start">
                  <div className="bg-brand-blue/10 rounded-full h-8 w-8 flex items-center justify-center text-brand-blue font-bold mt-1 mr-4">
                    1
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-2">اختر المادة الدراسية</h3>
                    <p className="text-gray-600">حدد المادة الدراسية التي ترغب في دراستها من قائمة المواد المتاحة</p>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <div className="bg-brand-blue/10 rounded-full h-8 w-8 flex items-center justify-center text-brand-blue font-bold mt-1 mr-4">
                    2
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-2">اختر المعلم المناسب</h3>
                    <p className="text-gray-600">استعرض قائمة المعلمين المتخصصين في المادة واختر المعلم الذي يناسب احتياجاتك</p>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <div className="bg-brand-blue/10 rounded-full h-8 w-8 flex items-center justify-center text-brand-blue font-bold mt-1 mr-4">
                    3
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-2">حدد موعد الدرس</h3>
                    <p className="text-gray-600">اختر الوقت والتاريخ المناسب لك من جدول المواعيد المتاحة للمعلم</p>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <div className="bg-brand-blue/10 rounded-full h-8 w-8 flex items-center justify-center text-brand-blue font-bold mt-1 mr-4">
                    4
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-2">قم بالدفع وتأكيد الحجز</h3>
                    <p className="text-gray-600">أكمل عملية الدفع بالطريقة المناسبة لك وانتظر تأكيد الحجز</p>
                  </div>
                </li>
              </ol>
            </div>
            
            <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
              <Button asChild size="lg" className="bg-brand-blue hover:bg-brand-blue/90">
                <Link to="/subjects">تصفح المواد الدراسية</Link>
              </Button>
              
              <Button asChild size="lg" variant="outline" className="border-brand-blue text-brand-blue hover:bg-brand-blue/10">
                <Link to="/teachers">تصفح المعلمين</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BookLesson;
