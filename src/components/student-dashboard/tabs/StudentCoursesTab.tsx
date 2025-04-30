
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

export const StudentCoursesTab = () => {
  // Mock courses data - in a real app this would come from API
  const activeCourses = [
    {
      id: 1,
      title: "أساسيات الرياضيات للمرحلة الثانوية",
      teacherName: "د. أحمد محمد",
      teacherAvatar: "/lovable-uploads/8246e1ab-4316-4ed8-adf6-175b7d9717f6.png",
      thumbnail: "/lovable-uploads/575dea3b-0c5a-414d-9814-28b08e187acb.png",
      progress: 65,
      lessons: 12,
      completedLessons: 8,
      lastAccess: "2023-08-20"
    },
    {
      id: 2,
      title: "الهندسة التحليلية",
      teacherName: "د. خالد العلي",
      teacherAvatar: "/lovable-uploads/acbddc7d-5127-461c-8b3e-871a3cff7cb0.png",
      thumbnail: "/lovable-uploads/804f95f7-2838-49f1-82f1-960f67dbd206.png",
      progress: 40,
      lessons: 8,
      completedLessons: 3,
      lastAccess: "2023-08-18"
    },
    {
      id: 3,
      title: "اللغة الإنجليزية للمرحلة الثانوية",
      teacherName: "أ. سارة الأحمد",
      teacherAvatar: "/lovable-uploads/829da1c5-f204-48e2-b7c8-da3464cee845.png",
      thumbnail: "/lovable-uploads/abc6bb16-d0ae-47e7-ae5f-91baf937ee01.png",
      progress: 25,
      lessons: 15,
      completedLessons: 4,
      lastAccess: "2023-08-15"
    },
  ];

  const completedCourses = [
    {
      id: 4,
      title: "أساسيات الجبر",
      teacherName: "د. أحمد محمد",
      teacherAvatar: "/lovable-uploads/8246e1ab-4316-4ed8-adf6-175b7d9717f6.png",
      thumbnail: "/lovable-uploads/c48a4fc9-3012-42b8-a775-bbdab7bc2d74.png",
      progress: 100,
      lessons: 10,
      completedLessons: 10,
      completionDate: "2023-07-15",
      rating: 5
    },
    {
      id: 5,
      title: "مدخل إلى الفيزياء",
      teacherName: "د. خالد العلي",
      teacherAvatar: "/lovable-uploads/acbddc7d-5127-461c-8b3e-871a3cff7cb0.png",
      thumbnail: "/lovable-uploads/acf2f49d-9619-4f87-a6f5-45a200ea78f9.png",
      progress: 100,
      lessons: 8,
      completedLessons: 8,
      completionDate: "2023-06-25",
      rating: 4
    },
  ];

  // Mock recommendations data
  const recommendations = [
    {
      id: 6,
      title: "الكيمياء العضوية",
      teacherName: "د. فاطمة السالم",
      thumbnail: "/lovable-uploads/6c8eea94-a92d-439b-b9d7-7b0d2472338a.png",
      price: 75,
      rating: 4.8,
      studentsCount: 230
    },
    {
      id: 7,
      title: "الإحصاء والاحتمالات",
      teacherName: "د. أحمد محمد",
      thumbnail: "/lovable-uploads/ca1d249f-fbb9-4b12-89f9-917203387e2c.png",
      price: 65,
      rating: 4.9,
      studentsCount: 185
    },
    {
      id: 8,
      title: "قواعد اللغة العربية",
      teacherName: "أ. علي الحسن",
      thumbnail: "/lovable-uploads/6aef08f2-df4e-42fd-82e2-5ee244f04822.png",
      price: 60,
      rating: 4.7,
      studentsCount: 142
    }
  ];

  return (
    <div className="space-y-6">
      <Tabs defaultValue="active" className="w-full">
        <TabsList className="grid grid-cols-2 w-[400px] mb-6">
          <TabsTrigger value="active" className="text-sm md:text-base font-semibold">
            الكورسات النشطة
          </TabsTrigger>
          <TabsTrigger value="completed" className="text-sm md:text-base font-semibold">
            الكورسات المكتملة
          </TabsTrigger>
        </TabsList>

        <TabsContent value="active">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {activeCourses.map(course => (
              <Card key={course.id} className="overflow-hidden">
                <div className="aspect-video w-full relative">
                  <img 
                    src={course.thumbnail} 
                    alt={course.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="font-bold">{course.title}</div>
                    <div className="text-sm opacity-90">{course.teacherName}</div>
                  </div>
                </div>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="text-sm text-gray-600">تقدم الكورس</div>
                    <div className="text-sm font-semibold">{course.progress}%</div>
                  </div>
                  <Progress value={course.progress} className="h-2 mb-4" />
                  <div className="flex justify-between text-sm text-gray-600 mb-4">
                    <span>الدروس: {course.completedLessons} / {course.lessons}</span>
                    <span>آخر دخول: {new Date(course.lastAccess).toLocaleDateString('ar-EG')}</span>
                  </div>
                  <Button className="w-full bg-brand-blue hover:bg-brand-blue/90">
                    متابعة الدراسة
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="completed">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {completedCourses.map(course => (
              <Card key={course.id} className="overflow-hidden">
                <div className="aspect-video w-full relative">
                  <img 
                    src={course.thumbnail} 
                    alt={course.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="font-bold">{course.title}</div>
                    <div className="text-sm opacity-90">{course.teacherName}</div>
                  </div>
                  <div className="absolute top-2 left-2 bg-green-600 text-white text-xs px-2 py-1 rounded-full">
                    مكتمل
                  </div>
                </div>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-sm text-gray-600">تاريخ الإتمام</div>
                    <div className="text-sm font-semibold">{new Date(course.completionDate).toLocaleDateString('ar-EG')}</div>
                  </div>
                  <div className="flex justify-center mb-4">
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg
                          key={star}
                          className={`w-5 h-5 ${
                            star <= course.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                          }`}
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <Button variant="outline" className="flex-1 ml-1">
                      شهادة
                    </Button>
                    <Button variant="outline" className="flex-1 mr-1">
                      مراجعة
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      <Card>
        <CardHeader>
          <h3 className="text-xl font-bold">كورسات مقترحة لك</h3>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recommendations.map(course => (
              <div key={course.id} className="bg-white rounded-lg overflow-hidden shadow-sm border">
                <div className="aspect-video relative">
                  <img 
                    src={course.thumbnail} 
                    alt={course.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h4 className="font-semibold mb-1">{course.title}</h4>
                  <p className="text-sm text-gray-600 mb-2">{course.teacherName}</p>
                  <div className="flex items-center gap-1 mb-2">
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg
                          key={star}
                          className={`w-4 h-4 ${
                            star <= Math.floor(course.rating) 
                              ? "text-yellow-400 fill-yellow-400" 
                              : star - 0.5 <= course.rating
                                ? "text-yellow-400 fill-yellow-400" 
                                : "text-gray-300"
                          }`}
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-sm text-gray-600">({course.rating})</span>
                    <span className="text-sm text-gray-600 mr-1">{course.studentsCount} طالب</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="font-bold text-brand-blue">{course.price} د.ك</div>
                    <Button variant="outline" className="border-brand-blue text-brand-blue">
                      إضافة للسلة
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
