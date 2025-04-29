
import { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Book, Calendar, User } from 'lucide-react';
import { Link } from 'react-router-dom';

// Blog article data
const blogArticles = [
  {
    id: 1,
    title: 'أهم أساليب الدراسة الفعالة لتحسين التحصيل الدراسي',
    excerpt: 'يساعد استخدام طرق مثل تقنية "بومودورو" أو تخصيص فترات دراسة قصيرة ومنتظمة في تحسين الاستيعاب والتركيز. من المفيد أيضًا مراجعة المواد بانتظام، واستخدام الخرائط الذهنية لتبسيط المعلومات المعقدة.',
    date: '25 أبريل 2025',
    author: 'د. محمد العلي',
    category: 'نصائح للطلاب',
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=1000',
    readTime: '5 دقائق قراءة',
    tags: ['أساليب دراسة', 'تركيز', 'خرائط ذهنية']
  },
  {
    id: 2,
    title: 'التخطيط الفعّال للدراسة وتنظيم الوقت',
    excerpt: 'التخطيط المسبق يعد من أفضل الوسائل لتحقيق التوازن بين الدراسة والراحة. يمكن للطلاب استخدام جداول زمنية أسبوعية، وتحديد الأوقات المناسبة للدراسة وفقًا لأفضل أوقات التركيز لديهم.',
    date: '22 أبريل 2025',
    author: 'أ. سارة الخالد',
    category: 'نصائح للطلاب',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1000',
    readTime: '6 دقائق قراءة',
    tags: ['تنظيم وقت', 'تخطيط', 'دراسة']
  },
  {
    id: 3,
    title: 'كيفية الاستفادة من التقنيات الرقمية في الدراسة',
    excerpt: 'يمكن للطلاب استخدام تطبيقات الهواتف المحمولة لتنظيم مواعيد المراجعة، والاستفادة من المنصات التعليمية التي توفر محتوىً تفاعليًا يساهم في تسهيل الفهم والتطبيق العملي للمفاهيم التعليمية.',
    date: '18 أبريل 2025',
    author: 'م. خالد السالم',
    category: 'نصائح للطلاب',
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1000',
    readTime: '7 دقائق قراءة',
    tags: ['تقنيات رقمية', 'تطبيقات', 'تعلم إلكتروني']
  },
  {
    id: 4,
    title: 'التعامل مع الضغوط الدراسية والحفاظ على الصحة النفسية',
    excerpt: 'الضغوط الدراسية قد تؤثر على الأداء العام للطلاب، لذا من المهم أن يتعلم الطلاب كيفية إدارة تلك الضغوط من خلال تقنيات التنفس العميق، ممارسة الرياضة بانتظام، والتحدث إلى شخص موثوق به عند الشعور بالضغط.',
    date: '15 أبريل 2025',
    author: 'د. نورة المحمد',
    category: 'نصائح للطلاب',
    image: 'https://images.unsplash.com/photo-1579389083078-4e7018379f7e?q=80&w=1000',
    readTime: '8 دقائق قراءة',
    tags: ['صحة نفسية', 'ضغوط', 'استرخاء']
  },
  {
    id: 5,
    title: 'نصائح لتحسين التركيز خلال الدراسة',
    excerpt: 'يمكن للطلاب تحسين التركيز أثناء الدراسة عبر اختيار مكان هادئ بعيد عن المشتتات، وإغلاق الأجهزة الإلكترونية غير الضرورية، وتحديد أهداف صغيرة يمكن تحقيقها خلال كل جلسة دراسة، مما يعزز التركيز والإنتاجية.',
    date: '10 أبريل 2025',
    author: 'د. فاطمة المحمد',
    category: 'نصائح للطلاب',
    image: 'https://images.unsplash.com/photo-1560439513-74b037a25d84?q=80&w=1000',
    readTime: '5 دقائق قراءة',
    tags: ['تركيز', 'دراسة فعالة', 'إنتاجية']
  },
  {
    id: 6,
    title: 'استراتيجيات تدريس مبتكرة لتحفيز الطلاب',
    excerpt: 'التحفيز من أهم عوامل نجاح العملية التعليمية، ويمكن للمدرسين استخدام استراتيجيات متنوعة مثل التعلم التعاوني، واستخدام الوسائط المتعددة، وإشراك الطلاب في اتخاذ القرارات المتعلقة بمحتوى الدروس.',
    date: '5 أبريل 2025',
    author: 'أ. عبدالله الفهد',
    category: 'تطوير المعلمين',
    image: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=1000',
    readTime: '9 دقائق قراءة',
    tags: ['استراتيجيات تدريس', 'تحفيز', 'تعلم تعاوني']
  },
  {
    id: 7,
    title: 'كيفية بناء بيئة صفية محفزة وداعمة للتعلم',
    excerpt: 'إنشاء بيئة صفية تشجع على الانفتاح والحوار يؤثر إيجابًا على تحصيل الطلاب. يمكن للمدرسين تحفيز الطلاب عبر التفاعل الإيجابي، تقديم الثناء على الجهود المبذولة، وتوفير أنشطة تعزز روح التعاون والعمل الجماعي داخل الصف.',
    date: '1 أبريل 2025',
    author: 'د. محمد العلي',
    category: 'تطوير المعلمين',
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1000',
    readTime: '7 دقائق قراءة',
    tags: ['بيئة صفية', 'تحفيز', 'تعاون']
  },
  {
    id: 8,
    title: 'تطوير مهارات الاتصال الفعّال مع الطلاب',
    excerpt: 'من المهم أن يكون المدرس قادرًا على إيصال أفكاره بوضوح وتلقين الدروس بطرق تناسب قدرات جميع الطلاب. يمكن تطوير هذه المهارات عبر التركيز على الإصغاء، استخدام لغة جسد واضحة، وضبط النبرة الصوتية لتحقيق التفاعل الأمثل مع الطلاب.',
    date: '28 مارس 2025',
    author: 'أ. سارة الخالد',
    category: 'تطوير المعلمين',
    image: 'https://images.unsplash.com/photo-1571260899304-425eee4c7efd?q=80&w=1000',
    readTime: '6 دقائق قراءة',
    tags: ['مهارات اتصال', 'تدريس فعال', 'تواصل']
  },
  {
    id: 9,
    title: 'الاستفادة من التكنولوجيا في التعليم الحديث',
    excerpt: 'التكنولوجيا توفر أدوات قوية لدعم التعليم، مثل استخدام المنصات التعليمية الإلكترونية، وتقديم الدروس عبر الفيديو، واستخدام الألعاب التعليمية لجعل العملية التعليمية أكثر تشويقًا وجاذبية للطلاب.',
    date: '25 مارس 2025',
    author: 'د. نورة المحمد',
    category: 'تطوير المعلمين',
    image: 'https://images.unsplash.com/photo-1571260899304-425eee4c7efd?q=80&w=1000',
    readTime: '8 دقائق قراءة',
    tags: ['تكنولوجيا التعليم', 'تعليم حديث', 'وسائل تعليمية']
  },
  {
    id: 10,
    title: 'إدارة الوقت بفعالية في الفصل الدراسي',
    excerpt: 'تنظيم الوقت أثناء الدرس يضمن تغطية جميع المواضيع المخططة وتجنب التشتت. يمكن للمدرسين وضع جدول دقيق للمحاور التي سيتم تناولها خلال الحصة، وضبط الوقت المخصص لكل نشاط، مما يساعد في إنجاز الدروس بطريقة منظمة.',
    date: '20 مارس 2025',
    author: 'أ. خالد السالم',
    category: 'تطوير المعلمين',
    image: 'https://images.unsplash.com/photo-1571260899304-425eee4c7efd?q=80&w=1000',
    readTime: '5 دقائق قراءة',
    tags: ['إدارة وقت', 'تنظيم', 'فصل دراسي']
  },
  {
    id: 11,
    title: 'كيف تختار المعلم المناسب لطفلك؟',
    excerpt: 'دليل شامل يساعدك في اختيار أفضل معلم لطفلك بناءً على معايير مهمة وأساسية...',
    date: '15 أبريل 2025',
    author: 'د. محمد العلي',
    category: 'نصائح للأهالي',
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1000',
    readTime: '5 دقائق قراءة',
    tags: ['اختيار المعلم', 'تعليم', 'دروس خصوصية']
  },
  {
    id: 12,
    title: 'أهمية الدروس الخصوصية في تحسين المستوى الدراسي',
    excerpt: 'دراسة حول تأثير الدروس الخصوصية على أداء الطلاب وتحسين معدلاتهم الدراسية...',
    date: '5 أبريل 2025',
    author: 'د. فاطمة المحمد',
    category: 'دراسات تربوية',
    image: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=1000',
    readTime: '6 دقائق قراءة',
    tags: ['دروس خصوصية', 'تحسين المستوى', 'تعليم']
  }
];

// Blog categories
const categories = [
  'الكل',
  'نصائح للطلاب',
  'نصائح للأهالي',
  'تطوير المعلمين',
  'دراسات تربوية',
  'تقنيات التعليم'
];

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState('الكل');
  
  // Filter articles based on selected category
  const filteredArticles = selectedCategory === 'الكل' 
    ? blogArticles 
    : blogArticles.filter(article => article.category === selectedCategory);

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50">
        {/* Header Banner */}
        <div className="bg-gradient-to-l from-brand-blue/90 to-brand-blue py-12 px-6 text-white">
          <div className="container mx-auto max-w-6xl">
            <div className="flex items-center justify-center md:justify-start mb-4">
              <img 
                src="/lovable-uploads/67701b70-7d61-42f4-a7f4-f9f298d38920.png" 
                alt="منصة درسني" 
                className="h-12 mr-2" 
              />
              <h1 className="text-4xl font-bold">مدونة درسني التعليمية</h1>
            </div>
            <p className="text-xl opacity-90 max-w-2xl">أحدث المقالات والموارد التعليمية لمساعدتك في رحلتك نحو التعلم والتفوق</p>
          </div>
        </div>

        {/* Blog Content */}
        <div className="container mx-auto max-w-6xl py-12 px-6">
          {/* Categories Tabs */}
          <Tabs defaultValue="الكل" className="mb-12">
            <div className="mb-6">
              <h2 className="text-2xl font-bold mb-4">تصفح حسب الفئة</h2>
              <TabsList className="bg-white w-full overflow-x-auto flex flex-nowrap p-1 border rounded-md">
                {categories.map(category => (
                  <TabsTrigger 
                    key={category} 
                    value={category} 
                    onClick={() => setSelectedCategory(category)}
                    className="whitespace-nowrap"
                  >
                    {category}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>
            
            {/* Articles Grid */}
            <TabsContent value={selectedCategory} className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredArticles.map(article => (
                  <Card key={article.id} className="overflow-hidden hover:shadow-md transition-shadow">
                    <div className="aspect-[16/10] overflow-hidden">
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
                        <span className="text-sm text-gray-500 flex items-center">
                          <Calendar className="h-3 w-3 mr-1" />
                          {article.date}
                        </span>
                      </div>
                      <CardTitle className="text-xl leading-tight hover:text-brand-blue transition-colors">
                        <Link to={`/blog/${article.id}`}>
                          {article.title}
                        </Link>
                      </CardTitle>
                      <CardDescription className="mt-2">{article.excerpt}</CardDescription>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <div className="flex flex-wrap gap-2">
                        {article.tags.map((tag, index) => (
                          <span 
                            key={index} 
                            className="text-xs bg-gray-100 px-2 py-1 rounded-full text-gray-600"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter className="flex items-center justify-between border-t pt-4">
                      <div className="flex items-center">
                        <User className="h-4 w-4 mr-1 text-gray-500" />
                        <span className="text-sm text-gray-600">{article.author}</span>
                      </div>
                      <div className="flex items-center">
                        <Book className="h-4 w-4 mr-1 text-gray-500" />
                        <span className="text-sm text-gray-600">{article.readTime}</span>
                      </div>
                    </CardFooter>
                  </Card>
                ))}
              </div>
              
              {filteredArticles.length === 0 && (
                <div className="text-center py-12">
                  <h3 className="text-xl font-medium text-gray-600">لم يتم العثور على أي مقالات في هذه الفئة</h3>
                  <p className="text-gray-500 mt-2">يرجى تجربة فئة أخرى أو العودة لاحقًا</p>
                </div>
              )}
            </TabsContent>
          </Tabs>
          
          {/* Newsletter Subscription */}
          <div className="bg-brand-blue/5 rounded-lg p-8 text-center mt-12">
            <h3 className="text-2xl font-bold mb-2">اشترك في نشرتنا البريدية</h3>
            <p className="text-gray-600 mb-6">احصل على أحدث المقالات والنصائح التعليمية مباشرة إلى بريدك الإلكتروني</p>
            
            <div className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
              <input 
                type="email" 
                placeholder="أدخل بريدك الإلكتروني" 
                className="px-4 py-3 rounded-md border flex-grow"
              />
              <button className="bg-brand-blue hover:bg-brand-blue/90 text-white px-6 py-3 rounded-md font-medium transition-colors">
                اشترك الآن
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
