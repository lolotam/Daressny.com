
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';
import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

// FAQ data for teachers
const teacherFaqs = {
  ar: [
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
          answer: 'يتم تحويل الأرباح إلى حسابك البنكي المسجل في المنصة بشكل أسبوعي، شرط أن يتجاوز رصيدك 50 دينارًا كويتيًا. يمكنك أيضًا طلب التحويل يدويًا من لوحة التحكم الخاصة بك. نحن ندعم التحويل إلى معظم البنوك في المنطقة بالإضافة إلى خدمات PayPal وWise.'
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
  ],
  en: [
    {
      id: 'starting',
      category: 'Getting Started as a Teacher',
      questions: [
        {
          id: 'starting-1',
          question: 'How do I start as a teacher on Darsni platform?',
          answer: 'To start as a teacher, register on the platform and select "Teacher" as your account type. Complete your profile by adding your qualifications, teaching experience, and subjects you wish to teach. After your application is reviewed and approved, you can begin receiving private lesson requests.'
        },
        {
          id: 'starting-2',
          question: 'What qualifications are required to register as a teacher?',
          answer: 'We accept teachers with a university degree in their field or a certified teaching credential. You must have at least one year of teaching experience and provide verifiable references. Additionally, we will conduct a virtual interview to assess your teaching skills.'
        },
        {
          id: 'starting-3',
          question: 'Can I teach part-time on the platform?',
          answer: 'Yes, you can teach part-time or full-time according to your available schedule. You control your availability and the number of hours you wish to teach weekly. Simply set your availability hours in your calendar on the platform.'
        }
      ]
    },
    {
      id: 'schedule',
      category: 'Work Schedule and Availability',
      questions: [
        {
          id: 'schedule-1',
          question: 'How do I set my working hours on the platform?',
          answer: 'You can set your availability hours through your dashboard. Navigate to "Schedule," and select the days and hours you wish to teach. You can modify these hours at any time, keeping in mind that you cannot cancel pre-booked lessons.'
        },
        {
          id: 'schedule-2',
          question: 'Can I work only in the evenings or on weekends?',
          answer: 'Yes, you have complete freedom to set your working hours. Whether you prefer to work in the evenings, only on weekends, or during specific hours of the day, you can customize your schedule to suit your other commitments.'
        },
        {
          id: 'schedule-3',
          question: 'What is the cancellation policy for scheduled lessons?',
          answer: 'If you need to cancel a scheduled lesson, you must notify the student at least 24 hours before the lesson time. Frequent cancellations or short-notice cancellations may negatively affect your rating and ranking in search results. In emergency cases, please contact the support team immediately.'
        }
      ]
    },
    {
      id: 'payment',
      category: 'Payment and Earnings',
      questions: [
        {
          id: 'payment-1',
          question: 'How do I receive my earnings from teaching on the platform?',
          answer: 'Earnings are transferred to your registered bank account on a weekly basis, provided your balance exceeds 50 KWD. You can also request a manual transfer from your dashboard. We support transfers to most banks in the region as well as PayPal and Wise services.'
        },
        {
          id: 'payment-2',
          question: 'What is the commission percentage taken by the platform?',
          answer: 'Darsni platform takes a 20% commission from the value of each lesson. This percentage covers platform operational costs, technical support services, marketing your services to potential students, and payment processing. You will find complete details about commissions and earnings in your dashboard.'
        },
        {
          id: 'payment-3',
          question: 'Can I set my own prices for lessons?',
          answer: 'Yes, you have the freedom to set your lesson prices based on your experience, educational level, and the subject you teach. We recommend reviewing other teachers\' prices in your field to determine a competitive price. You can also offer discount packages for multiple bookings to attract more students.'
        }
      ]
    },
    {
      id: 'subjects',
      category: 'Teaching Subjects',
      questions: [
        {
          id: 'subjects-1',
          question: 'Can I teach more than one subject?',
          answer: 'Yes, you can teach multiple subjects provided you are qualified and pass the assessment for each subject. You can list up to 5 different subjects in your profile, with details of the grade levels you can teach for each subject.'
        },
        {
          id: 'subjects-2',
          question: 'How can I add new subjects to teach?',
          answer: 'To add a new subject to teach, go to "My Profile" then "Subjects I Teach" and select "Add New Subject." You will need to provide information about your qualifications and experience in teaching this subject, and you may be asked to pass a short test to verify your mastery of the subject.'
        },
        {
          id: 'subjects-3',
          question: 'Can I specify certain levels for teaching?',
          answer: 'Certainly, you can specify the educational levels you wish to teach for each subject (primary, intermediate, secondary, university). This helps direct students appropriate to your level of expertise and teaching preferences.'
        }
      ]
    },
    {
      id: 'technical',
      category: 'Technical Support',
      questions: [
        {
          id: 'technical-1',
          question: 'What are the technical requirements for teaching on the platform?',
          answer: 'For online teaching, you need a computer or laptop with a stable internet connection (at least 5 Mbps), a good quality webcam and microphone. We also recommend using headphones for better sound quality. For teaching using the virtual whiteboard, it is preferable to use a graphic tablet.'
        },
        {
          id: 'technical-2',
          question: 'What is the solution if I encounter technical problems during the lesson?',
          answer: 'If you encounter technical issues during the lesson, you can use the text chat feature to communicate with the student while trying to solve the problem. We have a technical support team available 24/7, which you can contact via the "Immediate Help" button in the corner of the screen. If the problem persists, the lesson can be rescheduled without any impact on your rating.'
        },
        {
          id: 'technical-3',
          question: 'Does the platform provide special educational tools?',
          answer: 'Yes, Darsni platform provides many advanced educational tools such as: interactive whiteboard, screen sharing, slide presentations, educational resource library, and quiz rooms. You can review the user guide for these tools in the "Training" section of your dashboard.'
        }
      ]
    }
  ]
};

export default function TeacherFAQ() {
  const { t, language } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedCategory, setExpandedCategory] = useState(language === 'ar' ? 'starting' : 'starting');
  
  // Get current language FAQs
  const currentFaqs = teacherFaqs[language];
  
  // Filter FAQs based on search term
  const filteredFaqs = searchTerm 
    ? currentFaqs.map(category => ({
        ...category,
        questions: category.questions.filter(q => 
          q.question.toLowerCase().includes(searchTerm.toLowerCase()) || 
          q.answer.toLowerCase().includes(searchTerm.toLowerCase())
        )
      })).filter(category => category.questions.length > 0)
    : currentFaqs;

  const whatsappLink = "https://wa.me/96555683677";

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50">
        {/* Header Banner */}
        <div className="bg-gradient-to-l from-brand-blue/90 to-brand-blue py-12 px-6 text-white">
          <div className="container mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-bold mb-4">{t('faqTitle')}</h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              {t('faqDescription')}
            </p>
          </div>
        </div>

        {/* FAQ Content */}
        <div className="container mx-auto max-w-4xl py-12 px-6">
          {/* Search Bar */}
          <div className="mb-8">
            <div className="relative">
              <Search className={`absolute ${language === 'ar' ? 'right-3' : 'left-3'} top-1/2 transform -translate-y-1/2 text-gray-400`} />
              <input
                type="text"
                placeholder={t('searchQuestion')}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className={`w-full py-3 ${language === 'ar' ? 'pr-10 pl-4' : 'pl-10 pr-4'} border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-blue`}
              />
            </div>
          </div>
          
          {/* FAQ Categories */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mb-8">
            {currentFaqs.map((category) => (
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
                          <AccordionTrigger className={`${language === 'ar' ? 'text-right' : 'text-left'} hover:text-brand-blue`}>
                            {faq.question}
                          </AccordionTrigger>
                          <AccordionContent className="text-gray-700 leading-relaxed">
                            {faq.answer}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  ) : (
                    <p className="text-gray-500">{language === 'ar' ? 'لا توجد أسئلة مطابقة في هذه الفئة.' : 'No matching questions in this category.'}</p>
                  )}
                </div>
              ))
            ) : (
              <div className="text-center py-8">
                <p className="text-xl text-gray-600">{t('noQuestionsFound')}</p>
                <p className="text-gray-500 mt-2">{t('tryDifferentSearch')}</p>
                <Button 
                  variant="outline" 
                  className="mt-4 border-brand-blue text-brand-blue"
                  onClick={() => setSearchTerm('')}
                >
                  {t('clearSearch')}
                </Button>
              </div>
            )}
          </div>
          
          {/* Still Have Questions */}
          <div className="bg-gray-100 rounded-lg p-8 text-center mt-12">
            <h3 className="text-2xl font-bold mb-3">{t('moreQuestions')}</h3>
            <p className="mb-6 text-gray-600 max-w-2xl mx-auto">
              {t('moreQuestionsDesc')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                className="bg-brand-blue hover:bg-brand-blue/90"
                onClick={() => window.open(whatsappLink, '_blank')}
              >
                {t('contactSupport')}
              </Button>
              <Button 
                variant="outline" 
                className="border-brand-blue text-brand-blue"
                onClick={() => window.open(whatsappLink, '_blank')}
              >
                {t('bookTraining')}
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
