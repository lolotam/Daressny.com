
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export const HowItWorks = () => {
  const steps = [
    {
      number: 1,
      title: "سجل وأنشئ حسابك",
      description: "سجل كطالب أو معلم وأنشئ حسابك الشخصي"
    },
    {
      number: 2,
      title: "اختر المعلم أو المادة",
      description: "ابحث عن المعلم أو المادة المناسبة لك"
    },
    {
      number: 3,
      title: "حدد موعدك",
      description: "اختر الوقت والمكان المناسبين لك"
    },
    {
      number: 4,
      title: "ادفع وأكد الحجز",
      description: "أتمم عملية الدفع بطريقة آمنة وسهلة"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">كيف تعمل منصة <span className="text-brand-blue">درسني</span>؟</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            تجربة سهلة وبسيطة تبدأ من التسجيل وتنتهي بالحجز والتعلم
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-brand-blue/30 -translate-y-1/2 z-0"></div>
          
          {/* Steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="bg-white w-16 h-16 rounded-full border-2 border-brand-blue flex items-center justify-center mb-4 text-brand-blue font-bold text-xl shadow-md">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <Button asChild className="text-lg px-8 py-6 bg-brand-blue hover:bg-brand-blue/90">
            <Link to="/register">ابدأ الآن</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
