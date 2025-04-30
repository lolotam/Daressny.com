
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { TeacherCard } from "@/components/teachers/TeacherCard";
import { Search } from "lucide-react";
import { useState } from "react";

export const StudentTeachersTab = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  // Mock teachers data - in a real app this would come from API
  const favoriteTeachers = [
    {
      id: 1,
      name: "د. أحمد محمد",
      image: "/lovable-uploads/8246e1ab-4316-4ed8-adf6-175b7d9717f6.png",
      subjects: ["رياضيات", "فيزياء"],
      rating: 4.9,
      reviewsCount: 124,
      hourlyRate: 25,
      location: "الكويت",
      availability: "متاح اليوم"
    },
    {
      id: 2,
      name: "أ. سارة الأحمد",
      image: "/lovable-uploads/829da1c5-f204-48e2-b7c8-da3464cee845.png",
      subjects: ["لغة إنجليزية"],
      rating: 4.7,
      reviewsCount: 89,
      hourlyRate: 20,
      location: "الكويت",
      availability: "متاح غداً"
    },
    {
      id: 3,
      name: "د. خالد العلي",
      image: "/lovable-uploads/acbddc7d-5127-461c-8b3e-871a3cff7cb0.png",
      subjects: ["كيمياء", "أحياء"],
      rating: 4.8,
      reviewsCount: 67,
      hourlyRate: 22,
      location: "الكويت",
      availability: "متاح الأسبوع القادم"
    }
  ];

  // Mock reviews data - in a real app this would come from API
  const reviews = [
    {
      id: 1,
      teacherName: "د. أحمد محمد",
      teacherImage: "/lovable-uploads/8246e1ab-4316-4ed8-adf6-175b7d9717f6.png",
      subject: "رياضيات",
      rating: 5,
      date: "2023-08-10",
      comment: "شرح ممتاز وسلس. استفدت كثيراً من شرحه للمعادلات التفاضلية."
    },
    {
      id: 2,
      teacherName: "أ. سارة الأحمد",
      teacherImage: "/lovable-uploads/829da1c5-f204-48e2-b7c8-da3464cee845.png",
      subject: "لغة إنجليزية",
      rating: 4,
      date: "2023-07-25",
      comment: "معلمة رائعة وتشرح بأسلوب سهل وممتع. ساعدتني كثيراً في تحسين مهارات المحادثة."
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="md:col-span-2 space-y-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <h3 className="text-xl font-bold">المعلمين المفضلين</h3>
            
            <div className="relative w-64">
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <Input
                placeholder="ابحث عن معلم..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-3"
              />
            </div>
          </CardHeader>
          
          <CardContent>
            <div className="grid grid-cols-1 gap-6">
              {favoriteTeachers
                .filter(teacher => 
                  teacher.name.includes(searchQuery) || 
                  teacher.subjects.some(subj => subj.includes(searchQuery))
                )
                .map(teacher => (
                  <TeacherCard
                    key={teacher.id}
                    id={teacher.id}
                    name={teacher.name}
                    image={teacher.image}
                    subjects={teacher.subjects}
                    rating={teacher.rating}
                    reviewsCount={teacher.reviewsCount}
                    location={teacher.location}
                    availability={teacher.availability}
                  />
                ))
              }
              
              {favoriteTeachers.filter(teacher => 
                teacher.name.includes(searchQuery) || 
                teacher.subjects.some(subj => subj.includes(searchQuery))
              ).length === 0 && (
                <div className="text-center py-10">
                  <p className="text-gray-500">لم يتم العثور على معلمين مطابقين للبحث</p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <h3 className="text-xl font-bold">تقييماتك السابقة</h3>
          </CardHeader>
          <CardContent>
            {reviews.length > 0 ? (
              <div className="space-y-6">
                {reviews.map(review => (
                  <div key={review.id} className="border-b pb-4">
                    <div className="flex items-center gap-4 mb-3">
                      <img 
                        src={review.teacherImage} 
                        alt={review.teacherName} 
                        className="w-12 h-12 rounded-full" 
                      />
                      <div>
                        <div className="font-semibold">{review.teacherName}</div>
                        <div className="text-sm text-gray-600">{review.subject}</div>
                      </div>
                    </div>

                    <div className="flex mb-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg
                          key={star}
                          className={`w-5 h-5 ${
                            star <= review.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                          }`}
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                        </svg>
                      ))}
                      <span className="text-sm text-gray-500 mr-2">
                        {new Date(review.date).toLocaleDateString('ar-EG')}
                      </span>
                    </div>

                    <p className="text-gray-700">{review.comment}</p>
                    
                    <div className="flex justify-end mt-2">
                      <Button variant="outline" size="sm">
                        تعديل التقييم
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-10">
                <p className="text-gray-500">لم تقم بتقييم أي معلم حتى الآن</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      <div className="space-y-6">
        <Card>
          <CardHeader>
            <h3 className="text-xl font-bold">احجز حصة جديدة</h3>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-gray-600">
                ابحث عن معلمين جدد وقم بحجز حصص دراسية حسب احتياجاتك
              </p>
              <Button className="w-full bg-brand-blue hover:bg-brand-blue/90">
                تصفح المعلمين
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <h3 className="text-xl font-bold">المواد الأكثر طلباً</h3>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-2 text-sm font-bold">
                    1
                  </div>
                  <span>الرياضيات</span>
                </div>
                <Button variant="outline" size="sm">تصفح</Button>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-2 text-sm font-bold">
                    2
                  </div>
                  <span>الفيزياء</span>
                </div>
                <Button variant="outline" size="sm">تصفح</Button>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-2 text-sm font-bold">
                    3
                  </div>
                  <span>اللغة الإنجليزية</span>
                </div>
                <Button variant="outline" size="sm">تصفح</Button>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-2 text-sm font-bold">
                    4
                  </div>
                  <span>الكيمياء</span>
                </div>
                <Button variant="outline" size="sm">تصفح</Button>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-2 text-sm font-bold">
                    5
                  </div>
                  <span>اللغة العربية</span>
                </div>
                <Button variant="outline" size="sm">تصفح</Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <h3 className="text-xl font-bold">الدعم والمساعدة</h3>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-1">تحتاج إلى مساعدة؟</h4>
                <p className="text-sm text-gray-600 mb-3">
                  فريقنا جاهز للإجابة على جميع استفساراتك
                </p>
                <Button className="w-full">تواصل معنا</Button>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2">روابط سريعة</h4>
                <ul className="space-y-2">
                  <li className="text-sm text-brand-blue hover:underline cursor-pointer">
                    الأسئلة الشائعة
                  </li>
                  <li className="text-sm text-brand-blue hover:underline cursor-pointer">
                    كيفية حجز حصة
                  </li>
                  <li className="text-sm text-brand-blue hover:underline cursor-pointer">
                    سياسة الإلغاء والإسترجاع
                  </li>
                  <li className="text-sm text-brand-blue hover:underline cursor-pointer">
                    معلومات الدفع
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
