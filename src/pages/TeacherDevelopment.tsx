
import { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, FileText, Book, Lightbulb, Users, Bookmark, Award } from 'lucide-react';

// Development resources data
const workshopsData = [
  {
    id: 1,
    title: "أساسيات التدريس الفعال عبر الإنترنت",
    description: "تعلم أفضل ممارسات التدريس عبر المنصات الإلكترونية وكيفية التفاعل مع الطلاب عن بعد بكفاءة.",
    date: "10 مايو 2025",
    time: "6:00 - 8:00 مساءً",
    instructor: "د. سارة العتيبي",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=500",
    category: "مهارات التدريس",
    difficulty: "مبتدئ",
    attendees: 45
  },
  {
    id: 2,
    title: "استخدام التكنولوجيا المتقدمة في التعليم",
    description: "استكشف أحدث الأدوات التكنولوجية وكيفية دمجها في دروسك لتحسين تجربة التعلم.",
    date: "18 مايو 2025",
    time: "7:00 - 9:30 مساءً",
    instructor: "م. فيصل الشمري",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=500",
    category: "تكنولوجيا التعليم",
    difficulty: "متوسط",
    attendees: 38
  },
  {
    id: 3,
    title: "مهارات التواصل والتحفيز للمعلمين",
    description: "اكتسب مهارات متقدمة في التواصل مع الطلاب وتحفيزهم وبناء علاقات إيجابية معهم.",
    date: "25 مايو 2025",
    time: "5:30 - 7:30 مساءً",
    instructor: "أ. نورة السالم",
    image: "https://images.unsplash.com/photo-1544725121-be3bf52e2dc8?q=80&w=500",
    category: "مهارات تواصل",
    difficulty: "مبتدئ",
    attendees: 52
  },
  {
    id: 4,
    title: "تصميم المناهج التعليمية المبتكرة",
    description: "تعلم كيفية تصميم وتطوير مناهج تعليمية إبداعية تلبي احتياجات الطلاب المختلفة.",
    date: "2 يونيو 2025",
    time: "6:00 - 9:00 مساءً",
    instructor: "د. أحمد الشهري",
    image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=500",
    category: "تصميم المناهج",
    difficulty: "متقدم",
    attendees: 30
  }
];

const coursesData = [
  {
    id: 1,
    title: "دورة شاملة في أساليب التدريس الحديثة",
    description: "دورة مكثفة تغطي مختلف أساليب التدريس الحديثة وتطبيقاتها العملية في مختلف المواد.",
    duration: "4 أسابيع",
    lessons: 16,
    instructor: "د. منى الغامدي",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=500",
    category: "مهارات التدريس",
    difficulty: "متوسط",
    enrolled: 124,
    price: "199 دولار",
    rating: 4.8
  },
  {
    id: 2,
    title: "التعامل مع الطلاب ذوي الاحتياجات الخاصة",
    description: "تعلم أفضل الممارسات والاستراتيجيات للتعامل مع الطلاب من ذوي الاحتياجات الخاصة.",
    duration: "3 أسابيع",
    lessons: 12,
    instructor: "أ. عبدالله المهنا",
    image: "https://images.unsplash.com/photo-1616587894289-86480e533129?q=80&w=500",
    category: "التعليم الشامل",
    difficulty: "متوسط",
    enrolled: 98,
    price: "179 دولار",
    rating: 4.9
  },
  {
    id: 3,
    title: "إدارة الصف الافتراضي وضبط السلوك",
    description: "استراتيجيات عملية لإدارة الصف الافتراضي بفعالية وحل المشكلات السلوكية.",
    duration: "2 أسابيع",
    lessons: 8,
    instructor: "د. فاطمة الحربي",
    image: "https://images.unsplash.com/photo-1612690669207-fed642192c40?q=80&w=500",
    category: "إدارة الصف",
    difficulty: "مبتدئ",
    enrolled: 156,
    price: "129 دولار",
    rating: 4.7
  },
  {
    id: 4,
    title: "تقنيات التقييم المتقدمة والتغذية الراجعة",
    description: "أساليب مبتكرة لتقييم أداء الطلاب وتقديم تغذية راجعة بناءة تعزز التعلم.",
    duration: "3 أسابيع",
    lessons: 14,
    instructor: "د. خالد الزهراني",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=500",
    category: "التقييم",
    difficulty: "متقدم",
    enrolled: 87,
    price: "159 دولار",
    rating: 4.6
  }
];

const articlesData = [
  {
    id: 1,
    title: "كيفية استخدام التعلم النشط لزيادة مشاركة الطلاب",
    excerpt: "استراتيجيات عملية لتحويل الطلاب من متلقين سلبيين إلى مشاركين فاعلين في عملية التعلم.",
    date: "20 أبريل 2025",
    author: "د. جاسم المطيري",
    readTime: "6 دقائق",
    image: "https://images.unsplash.com/photo-1580894732930-0babd100d356?q=80&w=500",
    category: "استراتيجيات التدريس"
  },
  {
    id: 2,
    title: "استخدام الذكاء الاصطناعي في تخصيص تجارب التعلم",
    excerpt: "كيف يمكن للمعلمين الاستفادة من تقنيات الذكاء الاصطناعي لتخصيص المحتوى التعليمي لكل طالب.",
    date: "15 أبريل 2025",
    author: "م. سلطان القحطاني",
    readTime: "8 دقائق",
    image: "https://images.unsplash.com/photo-1526378722484-bd91ca387e72?q=80&w=500",
    category: "تكنولوجيا التعليم"
  },
  {
    id: 3,
    title: "استراتيجيات للتعامل مع إرهاق المعلم وتحقيق التوازن",
    excerpt: "نصائح عملية لمساعدة المعلمين على إدارة الضغوط المهنية وتحقيق توازن صحي بين العمل والحياة.",
    date: "10 أبريل 2025",
    author: "د. حصة الراشد",
    readTime: "7 دقائق",
    image: "https://images.unsplash.com/photo-1608099269227-82de5da1e4a8?q=80&w=500",
    category: "الصحة المهنية"
  },
  {
    id: 4,
    title: "بناء مجتمع تعليمي داعم في الفصول الافتراضية",
    excerpt: "استراتيجيات لتعزيز التواصل والتعاون بين الطلاب في بيئة التعلم عن بعد.",
    date: "5 أبريل 2025",
    author: "أ. نوف المالكي",
    readTime: "5 دقائق",
    image: "https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?q=80&w=500",
    category: "التعلم الافتراضي"
  },
  {
    id: 5,
    title: "استراتيجيات للتدريس المتمايز وفق الذكاءات المتعددة",
    excerpt: "كيفية تصميم دروس تراعي أنماط التعلم المختلفة والذكاءات المتعددة للطلاب.",
    date: "1 أبريل 2025",
    author: "د. محمد العمري",
    readTime: "9 دقائق",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=500",
    category: "استراتيجيات التدريس"
  },
  {
    id: 6,
    title: "كيف تجعل تقييماتك أكثر فعالية وأقل إرهاقاً",
    excerpt: "أساليب مبتكرة لتقييم الطلاب بطرق توفر الوقت والجهد وتقدم تغذية راجعة أكثر فائدة.",
    date: "25 مارس 2025",
    author: "أ. سارة الدوسري",
    readTime: "6 دقائق",
    image: "https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?q=80&w=500",
    category: "التقييم"
  }
];

export default function TeacherDevelopment() {
  const [activeTab, setActiveTab] = useState("articles");

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50">
        {/* Header Banner */}
        <div className="bg-gradient-to-l from-brand-blue/90 to-brand-blue py-12 px-6 text-white">
          <div className="container mx-auto max-w-6xl">
            <h1 className="text-4xl font-bold mb-4">تطوير مهارات المعلمين</h1>
            <p className="text-xl opacity-90 max-w-3xl">
              نقدم موارد تعليمية متنوعة لمساعدتك على تطوير مهاراتك التدريسية والارتقاء بمستواك المهني
            </p>
          </div>
        </div>

        {/* Development Content */}
        <div className="container mx-auto max-w-6xl py-12 px-6">
          <Tabs defaultValue="articles" onValueChange={setActiveTab} className="mb-8">
            <div className="flex justify-center mb-10">
              <TabsList className="bg-white">
                <TabsTrigger value="articles" className="px-6 py-3">
                  <FileText className="h-4 w-4 ml-2" />
                  مقالات تعليمية
                </TabsTrigger>
                <TabsTrigger value="workshops" className="px-6 py-3">
                  <Users className="h-4 w-4 ml-2" />
                  ورش عمل
                </TabsTrigger>
                <TabsTrigger value="courses" className="px-6 py-3">
                  <Book className="h-4 w-4 ml-2" />
                  دورات تدريبية
                </TabsTrigger>
              </TabsList>
            </div>
            
            {/* Articles Tab */}
            <TabsContent value="articles">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {articlesData.map((article) => (
                  <Card key={article.id} className="overflow-hidden hover:shadow-md transition-shadow">
                    <div className="aspect-video overflow-hidden">
                      <img 
                        src={article.image} 
                        alt={article.title} 
                        className="w-full h-full object-cover transition-transform hover:scale-105"
                      />
                    </div>
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="outline" className="bg-brand-blue/10 text-brand-blue">
                          {article.category}
                        </Badge>
                        <span className="text-sm text-gray-500">{article.date}</span>
                      </div>
                      <CardTitle className="text-xl leading-tight hover:text-brand-blue transition-colors">
                        <a href="#">{article.title}</a>
                      </CardTitle>
                      <CardDescription className="mt-2 line-clamp-2">{article.excerpt}</CardDescription>
                    </CardHeader>
                    <CardFooter className="flex items-center justify-between pt-0">
                      <span className="text-sm text-gray-600">{article.author}</span>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1 text-gray-500" />
                        <span className="text-sm text-gray-600">{article.readTime}</span>
                      </div>
                    </CardFooter>
                  </Card>
                ))}
              </div>
              
              <div className="text-center mt-10">
                <Button className="bg-brand-blue hover:bg-brand-blue/90">
                  عرض المزيد من المقالات
                </Button>
              </div>
            </TabsContent>
            
            {/* Workshops Tab */}
            <TabsContent value="workshops">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {workshopsData.map((workshop) => (
                  <Card key={workshop.id} className="overflow-hidden">
                    <div className="flex flex-col md:flex-row">
                      <div className="md:w-2/5">
                        <img 
                          src={workshop.image} 
                          alt={workshop.title} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="md:w-3/5 flex flex-col">
                        <CardHeader>
                          <div className="flex flex-wrap gap-2 mb-2">
                            <Badge className="bg-brand-blue/10 text-brand-blue">
                              {workshop.category}
                            </Badge>
                            <Badge variant="outline">
                              {workshop.difficulty}
                            </Badge>
                          </div>
                          <CardTitle className="text-xl">{workshop.title}</CardTitle>
                          <CardDescription className="line-clamp-2">{workshop.description}</CardDescription>
                        </CardHeader>
                        <CardContent className="py-2">
                          <div className="flex flex-col gap-2">
                            <div className="flex items-center">
                              <Calendar className="h-4 w-4 ml-2 text-gray-500" />
                              <span className="text-sm">{workshop.date}</span>
                            </div>
                            <div className="flex items-center">
                              <Clock className="h-4 w-4 ml-2 text-gray-500" />
                              <span className="text-sm">{workshop.time}</span>
                            </div>
                            <div className="flex items-center">
                              <Users className="h-4 w-4 ml-2 text-gray-500" />
                              <span className="text-sm">{workshop.attendees} مشارك</span>
                            </div>
                          </div>
                        </CardContent>
                        <CardFooter className="mt-auto">
                          <Button className="w-full bg-brand-blue hover:bg-brand-blue/90">
                            سجل الآن
                          </Button>
                        </CardFooter>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
              
              <div className="text-center mt-10">
                <Button className="bg-brand-blue hover:bg-brand-blue/90">
                  عرض المزيد من ورش العمل
                </Button>
              </div>
            </TabsContent>
            
            {/* Courses Tab */}
            <TabsContent value="courses">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {coursesData.map((course) => (
                  <Card key={course.id} className="overflow-hidden hover:shadow-md transition-shadow">
                    <div className="aspect-[16/9] overflow-hidden">
                      <img 
                        src={course.image} 
                        alt={course.title} 
                        className="w-full h-full object-cover transition-transform hover:scale-105"
                      />
                    </div>
                    <CardHeader>
                      <div className="flex flex-wrap gap-2 mb-2">
                        <Badge className="bg-brand-blue/10 text-brand-blue">
                          {course.category}
                        </Badge>
                        <Badge variant="outline">
                          {course.difficulty}
                        </Badge>
                      </div>
                      <CardTitle className="text-xl">{course.title}</CardTitle>
                      <CardDescription className="line-clamp-2">{course.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex flex-wrap gap-6">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 ml-2 text-gray-500" />
                          <span className="text-sm">{course.duration}</span>
                        </div>
                        <div className="flex items-center">
                          <Book className="h-4 w-4 ml-2 text-gray-500" />
                          <span className="text-sm">{course.lessons} درس</span>
                        </div>
                        <div className="flex items-center">
                          <Users className="h-4 w-4 ml-2 text-gray-500" />
                          <span className="text-sm">{course.enrolled} مشترك</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center text-amber-500">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className={`h-4 w-4 ${i < Math.floor(course.rating) ? "fill-amber-500" : ""}`} />
                        ))}
                        <span className="text-sm text-gray-600 mr-2">{course.rating}</span>
                      </div>
                    </CardContent>
                    <CardFooter className="flex items-center justify-between">
                      <span className="font-bold text-lg">{course.price}</span>
                      <Button className="bg-brand-blue hover:bg-brand-blue/90">
                        اشترك الآن
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
              
              <div className="text-center mt-10">
                <Button className="bg-brand-blue hover:bg-brand-blue/90">
                  عرض المزيد من الدورات
                </Button>
              </div>
            </TabsContent>
          </Tabs>
          
          {/* Featured Resources */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-6">موارد مميزة للمعلمين</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="bg-gradient-to-br from-blue-50 to-purple-50 border-blue-100">
                <CardHeader>
                  <Lightbulb className="h-8 w-8 text-brand-blue mb-2" />
                  <CardTitle className="text-lg">أحدث طرق التدريس</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">اكتشف أحدث استراتيجيات التدريس الفعالة والمبتكرة التي تناسب مختلف أنماط التعلم.</p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full border-brand-blue text-brand-blue">
                    تصفح المكتبة
                  </Button>
                </CardFooter>
              </Card>
              
              <Card className="bg-gradient-to-br from-green-50 to-blue-50 border-green-100">
                <CardHeader>
                  <Users className="h-8 w-8 text-brand-blue mb-2" />
                  <CardTitle className="text-lg">مهارات التواصل مع الطلاب</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">تعلم كيفية التواصل الفعال مع الطلاب وبناء علاقات إيجابية تعزز التعلم.</p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full border-brand-blue text-brand-blue">
                    ابدأ التعلم
                  </Button>
                </CardFooter>
              </Card>
              
              <Card className="bg-gradient-to-br from-amber-50 to-red-50 border-amber-100">
                <CardHeader>
                  <Award className="h-8 w-8 text-brand-blue mb-2" />
                  <CardTitle className="text-lg">التطوير المهني المستمر</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">خطط لتطوير مهاراتك باستمرار واحصل على شهادات معتمدة تعزز مسيرتك المهنية.</p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full border-brand-blue text-brand-blue">
                    استكشف الفرص
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
          
          {/* Newsletter Subscription */}
          <div className="bg-brand-blue/5 rounded-lg p-8 text-center mt-16">
            <h3 className="text-2xl font-bold mb-2">اشترك في نشرة المعلمين</h3>
            <p className="text-gray-600 mb-6">احصل على أحدث الموارد والنصائح التعليمية مباشرة إلى بريدك الإلكتروني</p>
            
            <div className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
              <input 
                type="email" 
                placeholder="أدخل بريدك الإلكتروني" 
                className="px-4 py-3 rounded-md border flex-grow"
              />
              <Button className="bg-brand-blue hover:bg-brand-blue/90">
                اشترك الآن
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
