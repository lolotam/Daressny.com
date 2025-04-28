
import { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, Quote, Award, TrendingUp } from 'lucide-react';

// Success stories data
const studentStories = [
  {
    id: 1,
    name: "فاطمة العنزي",
    testimonial: "بفضل معلمتي في منصة درسني ارتفع معدلي في الرياضيات من 65% إلى 92%! الشرح الواضح والتمارين المخصصة ساعدتني كثيرًا.",
    image: "https://images.unsplash.com/photo-1517256673644-36ad11246d21?q=80&w=500",
    subject: "الرياضيات",
    improvement: "ارتفاع 27% في المعدل",
    achievement: "قبول في كلية الهندسة"
  },
  {
    id: 2,
    name: "أحمد السالم",
    testimonial: "كنت أعاني من صعوبة في فهم الفيزياء، لكن بعد 3 أشهر من الدروس الخصوصية مع أستاذ علي، أصبحت من المتفوقين في الصف!",
    image: "https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?q=80&w=500",
    subject: "الفيزياء",
    improvement: "من راسب إلى 88%",
    achievement: "منحة دراسية جزئية"
  },
  {
    id: 3,
    name: "نورة الفهد",
    testimonial: "استطعت التفوق في اختبار القدرات بمعدل 95% بفضل البرنامج التدريبي المكثف الذي التحقت به عبر منصة درسني.",
    image: "https://images.unsplash.com/photo-1581403341630-a6e0b9d2d257?q=80&w=500",
    subject: "اختبار القدرات",
    improvement: "معدل 95%",
    achievement: "قبول في كلية الطب"
  },
  {
    id: 4,
    name: "عبدالله المطيري",
    testimonial: "تحسنت مهاراتي في اللغة الإنجليزية بشكل كبير. أصبحت قادرًا على التحدث بطلاقة وثقة بعد 6 أشهر من الدروس على منصة درسني.",
    image: "https://images.unsplash.com/photo-1555952494-efd681c7e3f9?q=80&w=500",
    subject: "اللغة الإنجليزية",
    improvement: "اجتياز اختبار IELTS بمعدل 7.5",
    achievement: "قبول في جامعة بريطانية"
  },
  {
    id: 5,
    name: "سارة العتيبي",
    testimonial: "المعلمة نورة غيرت نظرتي للكيمياء تمامًا. تبسيطها للمفاهيم المعقدة ساعدني على الفهم العميق وليس مجرد الحفظ.",
    image: "https://images.unsplash.com/photo-1543269664-56d93c1b41a6?q=80&w=500",
    subject: "الكيمياء",
    improvement: "ارتفاع من 72% إلى 94%",
    achievement: "المركز الأول في المدرسة"
  }
];

const teacherStories = [
  {
    id: 1,
    name: "د. محمد الشمري",
    testimonial: "بعد انضمامي لمنصة درسني، تمكنت من الوصول إلى مئات الطلاب حول العالم. ازدادت دخلي 3 أضعاف، وأصبح لدي مرونة أكبر في جدولي.",
    image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=500",
    subject: "الرياضيات المتقدمة",
    students: "أكثر من 500 طالب",
    experience: "15 سنة خبرة في التدريس"
  },
  {
    id: 2,
    name: "أ. نورة السعد",
    testimonial: "المنصة وفرت لي فرصة لمساعدة الطالبات في تطوير مهاراتهن في اللغة الإنجليزية. أشعر بالفخر عندما أرى نتائجهن المتميزة.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=500",
    subject: "اللغة الإنجليزية",
    students: "أكثر من 350 طالبة",
    experience: "12 سنة خبرة في التدريس"
  },
  {
    id: 3,
    name: "د. عبدالرحمن الخالد",
    testimonial: "كأستاذ جامعي، أجد في منصة درسني وسيلة رائعة لمساعدة الطلاب خارج أوقات المحاضرات. المنصة سهلة الاستخدام وتقنيًا متطورة.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=500",
    subject: "الفيزياء والميكانيكا",
    students: "أكثر من 200 طالب",
    experience: "20 سنة خبرة أكاديمية"
  },
  {
    id: 4,
    name: "أ. فاطمة الحربي",
    testimonial: "بدأت كمعلمة بدوام جزئي، والآن أدير فريقًا من المعلمات على المنصة. لم أكن أتخيل أن شغفي بالتعليم سيتحول إلى مشروع ناجح.",
    image: "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?q=80&w=500",
    subject: "العلوم والأحياء",
    students: "أكثر من 650 طالب",
    experience: "10 سنوات خبرة"
  }
];

export default function SuccessStories() {
  const [activeTab, setActiveTab] = useState("students");

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50">
        {/* Header Banner */}
        <div className="bg-gradient-to-l from-brand-blue/90 to-brand-blue py-12 px-6 text-white">
          <div className="container mx-auto max-w-6xl text-center">
            <h1 className="text-4xl font-bold mb-4">قصص نجاح</h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              تعرّف على قصص نجاح حقيقية لطلاب ومعلمين حققوا نتائج استثنائية مع منصة درسني
            </p>
          </div>
        </div>

        {/* Success Stories Content */}
        <div className="container mx-auto max-w-6xl py-12 px-6">
          <Tabs defaultValue="students" onValueChange={setActiveTab} className="mb-8">
            <div className="flex justify-center mb-10">
              <TabsList className="bg-white">
                <TabsTrigger value="students" className="px-8 py-3">قصص نجاح الطلاب</TabsTrigger>
                <TabsTrigger value="teachers" className="px-8 py-3">قصص نجاح المعلمين</TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="students">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {studentStories.map(story => (
                  <Card key={story.id} className="overflow-hidden">
                    <div className="relative">
                      <img 
                        src={story.image} 
                        alt={story.name} 
                        className="w-full h-56 object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6 text-white">
                        <h3 className="text-xl font-bold">{story.name}</h3>
                        <p className="text-sm opacity-80">{story.subject}</p>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-start mb-4">
                        <Quote className="h-6 w-6 text-brand-blue mr-2 flex-shrink-0 mt-1" />
                        <p className="text-gray-700 leading-relaxed">{story.testimonial}</p>
                      </div>
                      <div className="flex flex-wrap gap-2 mt-6">
                        <Badge className="bg-green-100 text-green-800 hover:bg-green-200">
                          <TrendingUp className="h-3.5 w-3.5 ml-1" />
                          {story.improvement}
                        </Badge>
                        <Badge className="bg-brand-blue/10 text-brand-blue hover:bg-brand-blue/20">
                          <Award className="h-3.5 w-3.5 ml-1" />
                          {story.achievement}
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="teachers">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {teacherStories.map(story => (
                  <Card key={story.id} className="overflow-hidden flex flex-col md:flex-row">
                    <div className="md:w-1/3">
                      <img 
                        src={story.image} 
                        alt={story.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardContent className="p-6 md:w-2/3 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between mb-4">
                          <div>
                            <h3 className="text-xl font-bold">{story.name}</h3>
                            <p className="text-sm text-gray-600">{story.subject}</p>
                          </div>
                          <div className="flex">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <Star key={star} className="h-4 w-4 fill-brand-gold text-brand-gold" />
                            ))}
                          </div>
                        </div>
                        <div className="flex items-start mb-4">
                          <Quote className="h-6 w-6 text-brand-blue mr-2 flex-shrink-0 mt-1" />
                          <p className="text-gray-700 leading-relaxed">{story.testimonial}</p>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2 mt-4">
                        <Badge className="bg-brand-blue/10 text-brand-blue hover:bg-brand-blue/20">
                          {story.students}
                        </Badge>
                        <Badge className="bg-gray-100 text-gray-800 hover:bg-gray-200">
                          {story.experience}
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
          
          {/* Call to Action */}
          <div className="bg-gradient-to-r from-brand-blue to-brand-blue/80 rounded-lg p-8 text-center mt-16 text-white">
            <h3 className="text-2xl font-bold mb-3">هل لديك قصة نجاح مع درسني؟</h3>
            <p className="mb-6 opacity-90 max-w-2xl mx-auto">
              نحن فخورون بنجاحات طلابنا ومعلمينا. شارك قصة نجاحك معنا وقد تظهر هنا قريبًا!
            </p>
            <button className="bg-white text-brand-blue hover:bg-gray-100 px-6 py-3 rounded-md font-medium transition-colors">
              شارك قصة نجاحك
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
