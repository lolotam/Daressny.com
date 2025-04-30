
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { VideoCarousel } from "../VideoCarousel";
import { FilePlus, Users, Edit, Trash2, Eye } from "lucide-react";
import { AddCourseForm } from "../forms/AddCourseForm";
import { useState } from "react";

export const TeacherCoursesTab = () => {
  // Mock courses data - in a real app this would come from API
  const [courses, setCourses] = useState([
    {
      id: 1,
      title: "أساسيات الرياضيات للمرحلة الثانوية",
      description: "دورة شاملة في أساسيات الرياضيات تغطي جميع المفاهيم الأساسية للمرحلة الثانوية",
      thumbnail: "/lovable-uploads/575dea3b-0c5a-414d-9814-28b08e187acb.png",
      price: 75,
      duration: "10 ساعات",
      subscribersCount: 45,
      sections: [
        {
          id: 1,
          title: "المقدمة والمفاهيم الأساسية",
          lessons: [
            { id: 1, title: "تعريف بالدورة", duration: "15 دقيقة" },
            { id: 2, title: "المفاهيم الأساسية في الرياضيات", duration: "45 دقيقة" }
          ]
        },
        {
          id: 2,
          title: "الجبر",
          lessons: [
            { id: 3, title: "المعادلات من الدرجة الأولى", duration: "60 دقيقة" },
            { id: 4, title: "المعادلات من الدرجة الثانية", duration: "75 دقيقة" }
          ]
        }
      ]
    },
    {
      id: 2,
      title: "الهندسة التحليلية",
      description: "شرح مفصل لمفاهيم الهندسة التحليلية وتطبيقاتها في المرحلة الثانوية",
      thumbnail: "/lovable-uploads/804f95f7-2838-49f1-82f1-960f67dbd206.png",
      price: 65,
      duration: "8 ساعات",
      subscribersCount: 32,
      sections: [
        {
          id: 1,
          title: "مقدمة في الهندسة التحليلية",
          lessons: [
            { id: 1, title: "نظام الإحداثيات الديكارتي", duration: "50 دقيقة" },
            { id: 2, title: "المسافة بين نقطتين", duration: "40 دقيقة" }
          ]
        }
      ]
    },
    {
      id: 3,
      title: "التفاضل والتكامل للمبتدئين",
      description: "دورة تمهيدية في حساب التفاضل والتكامل لطلاب المرحلة الثانوية والجامعية",
      thumbnail: "/lovable-uploads/abc6bb16-d0ae-47e7-ae5f-91baf937ee01.png",
      price: 90,
      duration: "12 ساعات",
      subscribersCount: 28,
      sections: [
        {
          id: 1,
          title: "مقدمة في التفاضل",
          lessons: [
            { id: 1, title: "مفهوم النهايات", duration: "60 دقيقة" },
            { id: 2, title: "مفهوم الاشتقاق", duration: "55 دقيقة" }
          ]
        }
      ]
    }
  ]);

  const [expandedCourse, setExpandedCourse] = useState<number | null>(null);
  
  // Function to handle adding a new course
  const handleAddCourse = (newCourse: any) => {
    setCourses([...courses, {
      id: courses.length + 1,
      ...newCourse,
      subscribersCount: 0,
      sections: []
    }]);
  };

  // Function to toggle course details expansion
  const toggleCourseDetails = (courseId: number) => {
    setExpandedCourse(expandedCourse === courseId ? null : courseId);
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <h3 className="text-xl font-bold">الكورسات المتاحة</h3>
          
          <Dialog>
            <DialogTrigger asChild>
              <Button className="bg-brand-blue hover:bg-brand-blue/90">
                <FilePlus className="w-4 h-4 ml-2" />
                إضافة كورس جديد
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[600px]">
              <DialogHeader>
                <DialogTitle>إضافة كورس جديد</DialogTitle>
              </DialogHeader>
              <AddCourseForm onAdd={handleAddCourse} />
            </DialogContent>
          </Dialog>
        </CardHeader>
        
        <CardContent>
          <div className="space-y-6">
            {courses.map((course) => (
              <Card key={course.id} className="overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
                  <div className="aspect-video md:aspect-square w-full">
                    <img 
                      src={course.thumbnail} 
                      alt={course.title}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="p-5 md:col-span-2">
                    <h4 className="text-xl font-bold mb-2">{course.title}</h4>
                    <p className="text-gray-600 mb-4">{course.description}</p>
                    
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-4">
                      <div>
                        <div className="text-gray-500 text-sm">السعر</div>
                        <div className="font-semibold">{course.price} د.ك</div>
                      </div>
                      <div>
                        <div className="text-gray-500 text-sm">المدة</div>
                        <div className="font-semibold">{course.duration}</div>
                      </div>
                      <div>
                        <div className="text-gray-500 text-sm">المشتركين</div>
                        <div className="font-semibold flex items-center">
                          <Users className="w-4 h-4 ml-1" />
                          {course.subscribersCount}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mt-4">
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="flex items-center"
                        onClick={() => toggleCourseDetails(course.id)}
                      >
                        <Eye className="w-4 h-4 ml-1" />
                        {expandedCourse === course.id ? 'إخفاء التفاصيل' : 'عرض التفاصيل'}
                      </Button>
                      
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="flex items-center"
                      >
                        <Edit className="w-4 h-4 ml-1" />
                        تعديل
                      </Button>
                      
                      <Button 
                        variant="destructive" 
                        size="sm" 
                        className="flex items-center"
                      >
                        <Trash2 className="w-4 h-4 ml-1" />
                        حذف
                      </Button>
                    </div>
                  </div>
                </div>
                
                {expandedCourse === course.id && (
                  <div className="p-5 border-t">
                    <h5 className="font-bold mb-3">محتوى الكورس</h5>
                    {course.sections.map((section) => (
                      <div key={section.id} className="mb-4">
                        <h6 className="font-semibold mb-2">{section.title}</h6>
                        <ul className="space-y-2 pr-5">
                          {section.lessons.map((lesson) => (
                            <li key={lesson.id} className="flex justify-between">
                              <span>{lesson.title}</span>
                              <span className="text-gray-500 text-sm">{lesson.duration}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                    <div className="mt-4">
                      <Button variant="outline" size="sm">إضافة قسم جديد</Button>
                    </div>
                  </div>
                )}
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <h3 className="text-xl font-bold">فيديوهات تعليمية</h3>
        </CardHeader>
        <CardContent>
          <VideoCarousel />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <h3 className="text-xl font-bold">إحصائيات الكورسات</h3>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-gray-50 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-brand-blue mb-1">
                {courses.length}
              </div>
              <div className="text-gray-600">إجمالي الكورسات</div>
            </div>
            <div className="bg-gray-50 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-brand-blue mb-1">
                {courses.reduce((sum, course) => sum + course.subscribersCount, 0)}
              </div>
              <div className="text-gray-600">إجمالي المشتركين</div>
            </div>
            <div className="bg-gray-50 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-brand-blue mb-1">
                {courses.reduce((sum, course) => sum + course.price * course.subscribersCount, 0)} د.ك
              </div>
              <div className="text-gray-600">الإيرادات الإجمالية</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
