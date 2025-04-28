
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
    id: 2,
    title: 'نصائح للاستعداد للاختبارات النهائية',
    excerpt: 'خطة متكاملة للتحضير للاختبارات النهائية وتحقيق أعلى الدرجات بأقل جهد ممكن...',
    date: '10 أبريل 2025',
    author: 'أ. سارة الخالد',
    category: 'نصائح للطلاب',
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=1000',
    readTime: '8 دقائق قراءة',
    tags: ['اختبارات', 'دراسة', 'تحضير']
  },
  {
    id: 3,
    title: 'أهمية الدروس الخصوصية في تحسين المستوى الدراسي',
    excerpt: 'دراسة حول تأثير الدروس الخصوصية على أداء الطلاب وتحسين معدلاتهم الدراسية...',
    date: '5 أبريل 2025',
    author: 'د. فاطمة المحمد',
    category: 'دراسات تربوية',
    image: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=1000',
    readTime: '6 دقائق قراءة',
    tags: ['دروس خصوصية', 'تحسين المستوى', 'تعليم']
  },
  {
    id: 4,
    title: 'نصائح للمعلمين لتطوير أنفسهم مهنياً',
    excerpt: 'خطوات عملية يمكن للمعلمين اتباعها لتطوير قدراتهم التعليمية والمهنية...',
    date: '1 أبريل 2025',
    author: 'أ. خالد السالم',
    category: 'تطوير المعلمين',
    image: 'https://images.unsplash.com/photo-1571260899304-425eee4c7efd?q=80&w=1000',
    readTime: '7 دقائق قراءة',
    tags: ['تطوير مهني', 'مهارات المعلم', 'تدريب']
  },
  {
    id: 5,
    title: 'أحدث أساليب التعليم الحديث وتطبيقاتها',
    excerpt: 'استعراض لأحدث طرق التعليم المبتكرة وكيفية تطبيقها في الفصول الدراسية...',
    date: '25 مارس 2025',
    author: 'د. نورة العبدالله',
    category: 'تقنيات التعليم',
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1000',
    readTime: '9 دقائق قراءة',
    tags: ['تعليم حديث', 'تكنولوجيا التعليم', 'ابتكار']
  },
  {
    id: 6,
    title: 'كيفية الاستفادة القصوى من الدروس الخصوصية',
    excerpt: 'نصائح عملية للطلاب لتحقيق أقصى استفادة من الدروس الخصوصية وقياس التقدم...',
    date: '20 مارس 2025',
    author: 'أ. عبدالله الفهد',
    category: 'نصائح للطلاب',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1000',
    readTime: '5 دقائق قراءة',
    tags: ['دروس خصوصية', 'نصائح دراسية', 'تحسين الأداء']
  },
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
            <h1 className="text-4xl font-bold mb-4">مدونة درسني التعليمية</h1>
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
