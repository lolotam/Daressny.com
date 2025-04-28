
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CallToAction } from "@/components/CallToAction";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-gradient-to-b from-white to-blue-50 py-16">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-4xl font-bold mb-6">من نحن</h1>
            <p className="text-gray-600 max-w-3xl mx-auto text-xl">
              تعرف على منصة درسني ورحلتنا نحو تحسين التعليم
            </p>
          </div>
        </div>

        {/* Mission & Vision */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <img
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=400&fit=crop"
                  alt="طلاب يدرسون"
                  className="rounded-lg shadow-md"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-6">رؤيتنا ورسالتنا</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-brand-blue">رؤيتنا</h3>
                    <p className="text-gray-600">
                      أن نكون المنصة التعليمية الرائدة في الوطن العربي، نقدم تجربة تعليمية متميزة تجمع بين الجودة والمرونة والتكامل.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-brand-blue">رسالتنا</h3>
                    <p className="text-gray-600">
                      في منصة درسني، نؤمن أن التعليم هو المفتاح الحقيقي للنجاح. نسعى لتسهيل الوصول إلى أفضل المعلمين وتوفير بيئة تعليمية داعمة تساعد الطلاب على تحقيق أهدافهم الأكاديمية.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-brand-blue">قيمنا</h3>
                    <p className="text-gray-600">
                      الجودة التعليمية، الابتكار المستمر، الشفافية والثقة، التطوير والتحسين، دعم المجتمع التعليمي.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-8 text-center">قصتنا</h2>
            <div className="max-w-3xl mx-auto">
              <p className="text-gray-600 mb-6 leading-relaxed">
                انطلقت منصة درسني من فكرة بسيطة: كيف نجعل التعليم الجيد متاحًا للجميع؟ بدأنا كفريق صغير من المعلمين والمبرمجين الذين يؤمنون بقوة التعليم وتأثيره على المستقبل.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                واجهنا تحديات كثيرة في البداية، لكن إيماننا برؤيتنا دفعنا للاستمرار والتطوير. عملنا بجد لبناء منصة توفر تجربة تعليمية متكاملة وسهلة الاستخدام للطلاب والمعلمين على حد سواء.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                اليوم، نفتخر بأن منصة درسني تخدم آلاف الطلاب والمعلمين، وتساهم في تحسين المستوى التعليمي وتوفير فرص عمل للمعلمين المتميزين. ونحن مستمرون في التطوير والابتكار لنقدم أفضل تجربة تعليمية ممكنة.
              </p>
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-8 text-center">فريقنا</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <img
                  src="https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=200&h=200&fit=crop"
                  alt="مدير المنصة"
                  className="w-32 h-32 object-cover rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-bold">د. أحمد محمد</h3>
                <p className="text-gray-600">المؤسس والمدير التنفيذي</p>
              </div>
              <div className="text-center">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop"
                  alt="المدير التعليمي"
                  className="w-32 h-32 object-cover rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-bold">أ. سارة عبدالله</h3>
                <p className="text-gray-600">المديرة التعليمية</p>
              </div>
              <div className="text-center">
                <img
                  src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=200&h=200&fit=crop"
                  alt="مدير تطوير الأعمال"
                  className="w-32 h-32 object-cover rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-bold">م. خالد عبدالرحمن</h3>
                <p className="text-gray-600">مدير تطوير الأعمال</p>
              </div>
            </div>
          </div>
        </section>

        <CallToAction />
      </main>

      <Footer />
    </div>
  );
};

export default About;
