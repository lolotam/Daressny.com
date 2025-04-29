
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { BookOpen, Calendar, Clock, TrashIcon } from "lucide-react";
import { Link } from "react-router-dom";

// نموذج بيانات الدروس المحفوظة (يمكن استبدالها بطلب API حقيقي لاحقاً)
const savedLessons = [
  {
    id: 1,
    title: "مراجعة نهائية في الرياضيات للصف العاشر",
    teacherName: "أ. محمد السعيد",
    teacherId: 101,
    date: "15 مايو 2025",
    time: "4:00 مساءً",
    status: "upcoming",
    subject: "الرياضيات",
    image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "شرح قواعد اللغة العربية",
    teacherName: "أ. فاطمة الأحمد",
    teacherId: 203,
    date: "20 مايو 2025",
    time: "6:30 مساءً",
    status: "upcoming",
    subject: "اللغة العربية",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&auto=format&fit=crop",
  }
];

// نموذج بيانات المعلمين المفضلين
const favoriteTeachers = [
  {
    id: 101,
    name: "أ. محمد السعيد",
    subject: "الرياضيات",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=800&auto=format&fit=crop",
  },
  {
    id: 203,
    name: "أ. فاطمة الأحمد",
    subject: "اللغة العربية",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&auto=format&fit=crop",
  },
  {
    id: 305,
    name: "أ. خالد العنزي",
    subject: "الفيزياء",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format&fit=crop",
  }
];

const MyList = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h1 className="text-3xl font-bold mb-10 text-center">قائمتي</h1>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* القسم الرئيسي: الدروس المحجوزة */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-semibold flex items-center">
                    <Calendar className="ml-2 h-6 w-6 text-brand-blue" />
                    الدروس المحجوزة
                  </h2>
                  <Badge variant="outline" className="text-brand-blue border-brand-blue">
                    {savedLessons.length} دروس
                  </Badge>
                </div>

                {savedLessons.length > 0 ? (
                  <div className="space-y-6">
                    {savedLessons.map((lesson) => (
                      <Card key={lesson.id}>
                        <CardHeader className="pb-2">
                          <div className="flex justify-between items-start">
                            <div>
                              <CardTitle>{lesson.title}</CardTitle>
                              <CardDescription className="mt-1">
                                مع {lesson.teacherName} • {lesson.subject}
                              </CardDescription>
                            </div>
                            <Badge className={lesson.status === 'upcoming' ? 'bg-green-500' : 'bg-amber-500'}>
                              {lesson.status === 'upcoming' ? 'قادم' : 'مكتمل'}
                            </Badge>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <div className="flex items-center gap-4 text-sm text-gray-600">
                            <div className="flex items-center">
                              <Calendar className="h-4 w-4 ml-1" />
                              {lesson.date}
                            </div>
                            <div className="flex items-center">
                              <Clock className="h-4 w-4 ml-1" />
                              {lesson.time}
                            </div>
                          </div>
                        </CardContent>
                        <CardFooter className="flex justify-between">
                          <Button variant="ghost" size="sm" className="text-red-500 hover:text-red-700 hover:bg-red-50">
                            <TrashIcon className="h-4 w-4 ml-1" /> إلغاء الحجز
                          </Button>
                          <Button asChild variant="outline" size="sm" className="border-brand-blue text-brand-blue hover:bg-brand-blue/10">
                            <Link to={`/teachers/${lesson.teacherId}`}>عرض المعلم</Link>
                          </Button>
                        </CardFooter>
                      </Card>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <BookOpen className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                    <p className="text-gray-500 text-lg mb-6">لا توجد دروس محجوزة حالياً</p>
                    <Button asChild className="bg-brand-blue hover:bg-brand-blue/90">
                      <Link to="/book">حجز درس جديد</Link>
                    </Button>
                  </div>
                )}
              </div>
            </div>

            {/* القسم الجانبي: المعلمون المفضلون */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-xl font-semibold mb-6">المعلمون المفضلون</h2>
                
                {favoriteTeachers.map((teacher, index) => (
                  <div key={teacher.id}>
                    <div className="flex items-center gap-4 py-4">
                      <img 
                        src={teacher.image} 
                        alt={teacher.name} 
                        className="h-14 w-14 rounded-full object-cover"
                      />
                      <div className="flex-grow">
                        <Link to={`/teachers/${teacher.id}`} className="font-medium hover:text-brand-blue">
                          {teacher.name}
                        </Link>
                        <p className="text-sm text-gray-500">{teacher.subject}</p>
                        <div className="flex items-center mt-1">
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <span key={i} className={`text-sm ${i < Math.floor(teacher.rating) ? 'text-amber-400' : 'text-gray-300'}`}>
                                ★
                              </span>
                            ))}
                          </div>
                          <span className="text-xs text-gray-500 mr-1">{teacher.rating}</span>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm" className="text-red-500 hover:text-red-700 hover:bg-red-50 h-8 w-8 p-0 rounded-full">
                        <TrashIcon className="h-4 w-4" />
                      </Button>
                    </div>
                    {index < favoriteTeachers.length - 1 && <Separator />}
                  </div>
                ))}

                <div className="mt-6">
                  <Button asChild className="w-full" variant="outline">
                    <Link to="/teachers">عرض جميع المعلمين</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MyList;
