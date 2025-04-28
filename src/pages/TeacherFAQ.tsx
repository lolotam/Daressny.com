
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';
import { useState } from 'react';

// FAQ data for teachers
const teacherFaqs = [
  {
    id: 'starting',
    category: 'البدء كمعلم',
    questions: [
      {
        id: 'starting-1',
        question: 'كيف أبدأ كمعلم على منصة درسني؟',
        answer: 'للبدء كمعلم، عليك التسجيل في المنصة واختيار "معلم" كنوع الحساب. ثم أكمل ملفك الشخصي بإضافة مؤهلاتك العلمية وخبراتك التدريسية والمواد التي ترغب بتدريسها. بعد مراجعة طلبك والموافقة عليه، يمكنك البدء في استقبال طلبات الدروس الخصوصية.'
      },
      {
        id: 'starting-2',
        question: 'ما هي المؤهلات المطلوبة للتسجيل كمعلم؟',
        answer: 'نحن نقبل المعلمين الحاصلين على شهادة جامعية في مجال تخصصهم أو شهادة تدريس معتمدة. يجب أن تمتلك خبرة لا تقل عن سنة واحدة في التدريس، وتقديم مراجع يمكن التحقق منها. بالإضافة إلى ذلك، سنقوم بإجراء مقابلة افتراضية لتقييم مهاراتك التدريسية.'
      },
      {
        id: 'starting-3',
        question: 'هل يمكنني التدريس بدوام جزئي على المنصة؟',
        answer: 'نعم، يمكنك التدريس بدوام جزئي أو كامل حسب جدولك الزمني المتاح. أنت من يتحكم في توفرك وعدد الساعات التي ترغب في تدريسها أسبوعيًا. ببساطة قم بتحديد ساعات توفرك في التقويم الخاص بك على المنصة.'
      }
    ]
  },
  {
    id: 'schedule',
    category: 'جدول العمل والتوفر',
    questions: [
      {
        id: 'schedule-1',
        question: 'كيف أحدد ساعات عملي على المنصة؟',
        answer: 'يمكنك تحديد ساعات توفرك من خلال لوحة التحكم الخاصة بك. انتقل إلى "الجدول الزمني"، وحدد الأيام والساعات التي ترغب في التدريس خلالها. يمكنك تعديل هذه الساعات في أي وقت، مع مراعاة أنه لا يمكن إلغاء الدروس المحجوزة مسبقًا.'
      },
      {
        id: 'schedule-2',
        question: 'هل يمكنني العمل فقط في المساء أو عطلات نهاية الأسبوع؟',
        answer: 'نعم، لديك الحرية الكاملة في تحديد أوقات عملك. سواء كنت تفضل العمل في المساء، أو في عطلات نهاية الأسبوع فقط، أو خلال ساعات محددة من اليوم، يمكنك تخصيص جدولك بما يناسب التزاماتك الأخرى.'
      },
      {
        id: 'schedule-3',
        question: 'ما هي سياسة الإلغاء للدروس المجدولة؟',
        answer: 'إذا كنت بحاجة إلى إلغاء درس مجدول، يجب عليك إشعار الطالب قبل 24 ساعة على الأقل من موعد الدرس. الإلغاءات المتكررة أو بإشعار قصير قد تؤثر سلبًا على تقييمك وترتيبك في نتائج البحث. في حالات الطوارئ، يرجى التواصل مع فريق الدعم فورًا.'
      }
    ]
  },
  {
    id: 'payment',
    category: 'الدفع والأرباح',
    questions: [
      {
        id: 'payment-1',
        question: 'كيف يتم استلام الأرباح من تدريسي على المنصة؟',
        answer: 'يتم تحويل الأرباح إلى حسابك البنكي المسجل في المنصة بشكل أسبوعي، شرط أن يتجاوز رصيدك 50 دولارًا أمريكيًا. يمكنك أيضًا طلب التحويل يدويًا من لوحة التحكم الخاصة بك. نحن ندعم التحويل إلى معظم البنوك في المنطقة بالإضافة إلى خدمات PayPal وWise.'
      },
      {
        id: 'payment-2',
        question: 'كم هي نسبة العمولة التي تأخذها المنصة؟',
        answer: 'تأخذ منصة درسني عمولة قدرها 20% من قيمة كل درس. هذه النسبة تغطي تكاليف تشغيل المنصة، وخدمات الدعم الفني، وتسويق خدماتك للطلاب المحتملين، ومعالجة المدفوعات. ستجد تفاصيل كاملة عن العمولات والأرباح في لوحة التحكم الخاصة بك.'
      },
      {
        id: 'payment-3',
        question: 'هل يمكنني تحديد أسعاري الخاصة للدروس؟',
        answer: 'نعم، لديك الحرية في تحديد أسعار دروسك بناءً على خبرتك، والمستوى التعليمي، والمادة التي تدرسها. نوصي بمراجعة أسعار المعلمين الآخرين في مجالك لتحديد سعر تنافسي. يمكنك أيضًا تقديم باقات خصم للحجوزات المتعددة لجذب المزيد من الطلاب.'
      }
    ]
  },
  {
    id: 'subjects',
    category: 'تدريس المواد',
    questions: [
      {
        id: 'subjects-1',
        question: 'هل يمكنني التدريس لأكثر من مادة؟',
        answer: 'نعم، يمكنك التدريس لأكثر من مادة شرط أن تكون مؤهلًا لتدريسها وأن تجتاز التقييم الخاص بكل مادة. يمكنك تحديد حتى 5 مواد مختلفة في ملفك الشخصي، مع تفاصيل مستويات الصفوف التي يمكنك تدريسها لكل مادة.'
      },
      {
        id: 'subjects-2',
        question: 'كيف يمكنني إضافة مواد جديدة لتدريسها؟',
        answer: 'لإضافة مادة جديدة لتدريسها، انتقل إلى "ملفي الشخصي" ثم "المواد التي أدرسها" واختر "إضافة مادة جديدة". ستحتاج إلى تقديم معلومات عن مؤهلاتك وخبرتك في تدريس هذه المادة، وقد يتم طلب اجتياز اختبار قصير للتحقق من إتقانك للمادة.'
      },
      {
        id: 'subjects-3',
        question: 'هل يمكنني تحديد مستويات معينة للتدريس؟',
        answer: 'بالتأكيد، يمكنك تحديد المستويات التعليمية التي ترغب في تدريسها لكل مادة (ابتدائي، متوسط، ثانوي، جامعي). هذا يساعد في توجيه الطلاب المناسبين لمستوى خبرتك وتفضيلاتك التدريسية.'
      }
    ]
  },
  {
    id: 'technical',
    category: 'الدعم الفني والتقني',
    questions: [
      {
        id: 'technical-1',
        question: 'ما هي المتطلبات التقنية للتدريس على المنصة؟',
        answer: 'للتدريس عبر الإنترنت، تحتاج إلى جهاز كمبيوتر أو لابتوب مع اتصال إنترنت مستقر (5 ميجابت/ثانية على الأقل)، كاميرا ويب وميكروفون بجودة جيدة. نوصي أيضًا باستخدام سماعات رأس للحصول على جودة صوت أفضل. للتدريس باستخدام السبورة الافتراضية، يفضل استخدام جهاز لوحي رسومي.'
      },
      {
        id: 'technical-2',
        question: 'ما هو الحل إذا واجهت مشاكل تقنية أثناء الدرس؟',
        answer: 'إذا واجهت مشاكل تقنية أثناء الدرس، يمكنك استخدام خاصية الدردشة النصية للتواصل مع الطالب أثناء محاولة حل المشكلة. لدينا فريق دعم فني متاح على مدار الساعة، يمكنك التواصل معه عبر زر "المساعدة الفورية" في زاوية الشاشة. في حال استمرت المشكلة، يمكن إعادة جدولة الدرس دون أي تأثير على تقييمك.'
      },
      {
        id: 'technical-3',
        question: 'هل توفر المنصة أدوات تعليمية خاصة؟',
        answer: 'نعم، توفر منصة درسني العديد من الأدوات التعليمية المتطورة مثل: السبورة التفاعلية، مشاركة الشاشة، عرض الشرائح، مكتبة الموارد التعليمية، وغرف الاختبارات القصيرة. يمكنك الاطلاع على دليل استخدام هذه الأدوات في قسم "التدريب" من لوحة التحكم الخاصة بك.'
      }
    ]
  }
];

export default function TeacherFAQ() {
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedCategory, setExpandedCategory] = useState('starting');
  
  // Filter FAQs based on search term
  const filteredFaqs = searchTerm 
    ? teacherFaqs.map(category => ({
        ...category,
        questions: category.questions.filter(q => 
          q.question.toLowerCase().includes(searchTerm.toLowerCase()) || 
          q.answer.toLowerCase().includes(searchTerm.toLowerCase())
        )
      })).filter(category => category.questions.length > 0)
    : teacherFaqs;

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50">
        {/* Header Banner */}
        <div className="bg-gradient-to-l from-brand-blue/90 to-brand-blue py-12 px-6 text-white">
          <div className="container mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-bold mb-4">الأسئلة الشائعة للمعلمين</h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              إجابات على الأسئلة الأكثر شيوعًا حول التسجيل والتدريس على منصة درسني
            </p>
          </div>
        </div>

        {/* FAQ Content */}
        <div className="container mx-auto max-w-4xl py-12 px-6">
          {/* Search Bar */}
          <div className="mb-8">
            <div className="relative">
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="ابحث عن سؤال..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full py-3 pr-10 pl-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-blue"
              />
            </div>
          </div>
          
          {/* FAQ Categories */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mb-8">
            {teacherFaqs.map((category) => (
              <Button
                key={category.id}
                variant={expandedCategory === category.id ? "default" : "outline"}
                className={`text-sm px-3 py-2 h-auto ${
                  expandedCategory === category.id ? "bg-brand-blue" : "border-brand-blue text-brand-blue"
                }`}
                onClick={() => setExpandedCategory(category.id)}
              >
                {category.category}
              </Button>
            ))}
          </div>
          
          {/* FAQ Accordion */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((category) => (
                <div 
                  key={category.id} 
                  className={`mb-8 ${category.id !== expandedCategory && !searchTerm ? 'hidden' : ''}`}
                >
                  <h3 className="text-xl font-bold mb-4">{category.category}</h3>
                  {category.questions.length > 0 ? (
                    <Accordion type="single" collapsible className="w-full">
                      {category.questions.map((faq) => (
                        <AccordionItem key={faq.id} value={faq.id}>
                          <AccordionTrigger className="text-right hover:text-brand-blue">
                            {faq.question}
                          </AccordionTrigger>
                          <AccordionContent className="text-gray-700 leading-relaxed">
                            {faq.answer}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  ) : (
                    <p className="text-gray-500">لا توجد أسئلة مطابقة في هذه الفئة.</p>
                  )}
                </div>
              ))
            ) : (
              <div className="text-center py-8">
                <p className="text-xl text-gray-600">لم يتم العثور على نتائج مطابقة</p>
                <p className="text-gray-500 mt-2">جرّب مصطلحات بحث مختلفة أو تصفح الأسئلة حسب الفئة</p>
                <Button 
                  variant="outline" 
                  className="mt-4 border-brand-blue text-brand-blue"
                  onClick={() => setSearchTerm('')}
                >
                  مسح البحث
                </Button>
              </div>
            )}
          </div>
          
          {/* Still Have Questions */}
          <div className="bg-gray-100 rounded-lg p-8 text-center mt-12">
            <h3 className="text-2xl font-bold mb-3">لديك المزيد من الأسئلة؟</h3>
            <p className="mb-6 text-gray-600 max-w-2xl mx-auto">
              إذا لم تجد إجابة لسؤالك، يمكنك التواصل مع فريق دعم المعلمين لدينا. نحن هنا لمساعدتك!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-brand-blue hover:bg-brand-blue/90">
                تواصل مع فريق الدعم
              </Button>
              <Button variant="outline" className="border-brand-blue text-brand-blue">
                احجز جلسة تدريبية
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
