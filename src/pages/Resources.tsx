
import { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, FileText, Video, Award } from 'lucide-react';

const Resources = () => {
  const [activeTab, setActiveTab] = useState('videos');

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">مكتبة المصادر التعليمية</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              تجد هنا كل ما تحتاجه لدعم رحلتك التعليمية: شروحات، مذكرات جاهزة، أوراق عمل ونماذج امتحانات.
            </p>
          </div>
          
          <Tabs defaultValue="videos" onValueChange={setActiveTab} className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-4 mb-12">
              <TabsTrigger value="videos" className="flex flex-col items-center py-6 gap-2">
                <Video className={`h-6 w-6 ${activeTab === 'videos' ? 'text-brand-blue' : ''}`} />
                <span>شروحات مرئية وصوتية</span>
              </TabsTrigger>
              <TabsTrigger value="notes" className="flex flex-col items-center py-6 gap-2">
                <FileText className={`h-6 w-6 ${activeTab === 'notes' ? 'text-brand-blue' : ''}`} />
                <span>مذكرات وأوراق عمل</span>
              </TabsTrigger>
              <TabsTrigger value="tests" className="flex flex-col items-center py-6 gap-2">
                <BookOpen className={`h-6 w-6 ${activeTab === 'tests' ? 'text-brand-blue' : ''}`} />
                <span>نماذج امتحانات</span>
              </TabsTrigger>
              <TabsTrigger value="courses" className="flex flex-col items-center py-6 gap-2">
                <Award className={`h-6 w-6 ${activeTab === 'courses' ? 'text-brand-blue' : ''}`} />
                <span>دورات تدريبية للمعلمين</span>
              </TabsTrigger>
            </TabsList>
            
            {/* Videos Content */}
            <TabsContent value="videos" className="space-y-8">
              <div className="bg-white rounded-xl shadow-md p-8">
                <h2 className="text-2xl font-bold mb-6">شروحات مرئية وصوتية</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[1, 2, 3, 4].map((item) => (
                    <div key={item} className="bg-gray-50 rounded-lg p-4 flex gap-4 hover:bg-gray-100 transition-colors">
                      <div className="h-24 w-32 bg-gray-300 rounded-md flex items-center justify-center text-white">
                        <Video size={24} />
                      </div>
                      <div className="flex flex-col flex-1">
                        <h3 className="font-semibold text-lg">شرح درس الاحتمالات - الرياضيات</h3>
                        <p className="text-sm text-gray-500 mb-2">المرحلة: الثانوية | المدة: 45 دقيقة</p>
                        <div className="mt-auto text-brand-blue text-sm font-medium">
                          <a href="#">عرض الفيديو</a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <Button className="w-full mt-8 bg-brand-blue hover:bg-brand-blue/90">عرض المزيد من الشروحات</Button>
              </div>
            </TabsContent>
            
            {/* Notes Content */}
            <TabsContent value="notes" className="space-y-8">
              <div className="bg-white rounded-xl shadow-md p-8">
                <h2 className="text-2xl font-bold mb-6">مذكرات دراسية وأوراق عمل</h2>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {[1, 2, 3, 4, 5, 6].map((item) => (
                    <div key={item} className="border rounded-lg p-4 flex items-center gap-4 hover:bg-gray-50 transition-colors">
                      <div className="bg-brand-blue/10 p-3 rounded-full">
                        <FileText className="h-6 w-6 text-brand-blue" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold">مذكرة شاملة في النحو - اللغة العربية</h3>
                        <p className="text-sm text-gray-500">الصف الثالث الثانوي | PDF (2.5 MB)</p>
                      </div>
                      <Button variant="outline" size="sm" className="border-brand-blue text-brand-blue hover:bg-brand-blue/10">
                        تحميل
                      </Button>
                    </div>
                  ))}
                </div>
                
                <Button className="w-full mt-8 bg-brand-blue hover:bg-brand-blue/90">عرض المزيد من المذكرات</Button>
              </div>
            </TabsContent>
            
            {/* Tests Content */}
            <TabsContent value="tests" className="space-y-8">
              <div className="bg-white rounded-xl shadow-md p-8">
                <h2 className="text-2xl font-bold mb-6">حلول نماذج امتحانات</h2>
                
                <div className="grid grid-cols-1 gap-4">
                  {[1, 2, 3, 4].map((item) => (
                    <div key={item} className="border rounded-lg p-6 hover:bg-gray-50 transition-colors">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="font-semibold text-lg">نموذج امتحان الفيزياء مع الحل</h3>
                        <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">مع الحلول</span>
                      </div>
                      <p className="text-gray-600 mb-4">
                        نموذج امتحان شامل لمادة الفيزياء للصف الثاني عشر، يغطي جميع دروس الفصل الأول مع الحلول النموذجية.
                      </p>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-500">الصف الثاني عشر - الفصل الأول</span>
                        <Button variant="outline" size="sm" className="border-brand-blue text-brand-blue hover:bg-brand-blue/10">
                          تحميل النموذج
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
                
                <Button className="w-full mt-8 bg-brand-blue hover:bg-brand-blue/90">عرض المزيد من النماذج</Button>
              </div>
            </TabsContent>
            
            {/* Courses Content */}
            <TabsContent value="courses" className="space-y-8">
              <div className="bg-white rounded-xl shadow-md p-8">
                <h2 className="text-2xl font-bold mb-6">دورات تدريبية خاصة للمعلمين</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[1, 2, 3, 4].map((item) => (
                    <div key={item} className="rounded-lg overflow-hidden border shadow-sm">
                      <div className="h-48 bg-gray-200"></div>
                      <div className="p-6">
                        <h3 className="font-semibold text-lg mb-2">أساليب التدريس الحديثة والتفاعلية</h3>
                        <p className="text-gray-600 mb-4">
                          دورة شاملة في طرق التدريس التفاعلية وكيفية تطبيقها في الفصل الدراسي.
                        </p>
                        <div className="flex justify-between items-center">
                          <div>
                            <span className="text-sm font-medium text-brand-blue">15 ساعة تدريبية</span>
                            <p className="text-sm text-gray-500">بقيادة أ. محمد عبدالله</p>
                          </div>
                          <Button size="sm" className="bg-brand-blue hover:bg-brand-blue/90">
                            تسجيل
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <Button className="w-full mt-8 bg-brand-blue hover:bg-brand-blue/90">عرض جميع الدورات</Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Resources;
