
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { useLanguage } from "@/contexts/LanguageContext";
import { getTeacherById, Teacher } from "@/data/teachersData";
import { Calendar, Clock, MapPin, Star, MessageSquare, ChevronLeft, ChevronRight, School, GraduationCap } from "lucide-react";

const TeacherDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [teacher, setTeacher] = useState<Teacher | null>(null);
  const { t, language, dir, currencySymbol } = useLanguage();
  
  // Sample reviews data
  const reviews = [
    { id: 1, name: "أحمد محمد", date: "2024-03-15", rating: 5, comment: "معلم رائع! شرح المفاهيم المعقدة بطريقة بسيطة وسهلة الفهم." },
    { id: 2, name: "سارة علي", date: "2024-02-28", rating: 4, comment: "استفدت كثيراً من شرحه وأسلوبه التعليمي. أنصح بشدة بالدراسة معه." },
    { id: 3, name: "فهد العمري", date: "2024-01-10", rating: 5, comment: "ممتاز جداً، ساعدني في تحسين مستواي بشكل ملحوظ خلال فترة قصيرة." }
  ];
  
  // Available times
  const availableTimes = [
    { day: "السبت", times: ["3:00 م - 4:00 م", "4:00 م - 5:00 م", "5:00 م - 6:00 م"] },
    { day: "الأحد", times: ["4:00 م - 5:00 م", "5:00 م - 6:00 م", "6:00 م - 7:00 م"] },
    { day: "الاثنين", times: ["3:00 م - 4:00 م", "4:00 م - 5:00 م"] },
    { day: "الأربعاء", times: ["5:00 م - 6:00 م", "6:00 م - 7:00 م", "7:00 م - 8:00 م"] }
  ];
  
  useEffect(() => {
    if (id) {
      const teacherData = getTeacherById(parseInt(id));
      if (teacherData) {
        setTeacher(teacherData);
      }
    }
  }, [id]);
  
  if (!teacher) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">المعلم غير موجود</h1>
            <Button asChild>
              <Link to="/teachers">العودة إلى قائمة المعلمين</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const BackArrow = language === 'ar' ? ChevronRight : ChevronLeft;
  
  // Generate star rating
  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <Star 
          key={i}
          size={16}
          className={`${i <= rating ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'}`}
        />
      );
    }
    return stars;
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow">
        <div className="bg-gradient-to-b from-brand-blue/10 to-white">
          <div className="container mx-auto px-6 py-8">
            <div className="flex items-center gap-2 mb-8">
              <Button 
                asChild 
                variant="ghost" 
                size="sm" 
                className="flex items-center gap-1"
              >
                <Link to="/teachers">
                  <BackArrow size={16} />
                  <span>{language === 'ar' ? 'جميع المعلمين' : 'All Teachers'}</span>
                </Link>
              </Button>
            </div>

            {/* Teacher Profile Header */}
            <div className="bg-white rounded-xl shadow-sm p-8">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/3 lg:w-1/4 flex flex-col items-center text-center">
                  <img
                    src={teacher.image}
                    alt={teacher.name}
                    className="w-48 h-48 object-cover rounded-full border-4 border-white shadow-md"
                  />
                  <h1 className="text-2xl font-bold mt-4">{teacher.name}</h1>
                  <p className="text-gray-500 mb-4">{teacher.subject}</p>
                  
                  <div className="flex items-center gap-1 mb-4">
                    {renderStars(teacher.rating)}
                    <span className="ml-1 text-gray-600">({teacher.reviews} {language === 'ar' ? 'تقييم' : 'reviews'})</span>
                  </div>
                  
                  <div className="w-full flex flex-col gap-3 mt-2">
                    <Button className="bg-brand-blue hover:bg-brand-blue/90 w-full">
                      {language === 'ar' ? 'احجز درساً' : 'Book a Lesson'}
                    </Button>
                    <Button variant="outline" className="border-brand-blue text-brand-blue hover:bg-brand-blue/10 w-full">
                      {language === 'ar' ? 'تواصل مع المعلم' : 'Contact Teacher'}
                    </Button>
                  </div>
                </div>
                
                <div className="md:w-2/3 lg:w-3/4">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                    <div className="flex items-center gap-2 bg-gray-50 p-4 rounded-lg">
                      <MapPin className="text-brand-blue" size={20} />
                      <div>
                        <p className="text-sm text-gray-500">{language === 'ar' ? 'الموقع' : 'Location'}</p>
                        <p className="font-medium">{teacher.location}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 bg-gray-50 p-4 rounded-lg">
                      <Clock className="text-brand-blue" size={20} />
                      <div>
                        <p className="text-sm text-gray-500">{language === 'ar' ? 'الخبرة' : 'Experience'}</p>
                        <p className="font-medium">{teacher.experience}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 bg-gray-50 p-4 rounded-lg">
                      <Calendar className="text-brand-blue" size={20} />
                      <div>
                        <p className="text-sm text-gray-500">{language === 'ar' ? 'التوفر' : 'Availability'}</p>
                        <p className="font-medium">{teacher.availability}</p>
                      </div>
                    </div>
                  </div>

                  {/* Hourly Rate Section */}
                  {teacher.hourlyRateRanges ? (
                    <div className="mb-6 bg-gray-50 p-5 rounded-lg">
                      <h2 className="text-xl font-bold mb-3">
                        {language === 'ar' ? 'أسعار الساعة التعليمية' : 'Hourly Rates'}
                      </h2>
                      <p className="text-gray-600 mb-4">
                        {language === 'ar' ? 'تختلف أسعار الساعة التعليمية حسب المرحلة الدراسية:' : 'Prices vary based on educational level:'}
                      </p>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
                        <div className="bg-white p-3 rounded-md border border-gray-200 flex items-center gap-3">
                          <div className="bg-blue-100 p-2 rounded-full">
                            <School size={18} className="text-brand-blue" />
                          </div>
                          <div>
                            <p className="text-sm text-gray-500">{language === 'ar' ? 'المرحلة الابتدائية' : 'Elementary'}</p>
                            <p className="font-semibold">{teacher.hourlyRateRanges.elementary} {currencySymbol}</p>
                          </div>
                        </div>
                        
                        <div className="bg-white p-3 rounded-md border border-gray-200 flex items-center gap-3">
                          <div className="bg-green-100 p-2 rounded-full">
                            <School size={18} className="text-green-600" />
                          </div>
                          <div>
                            <p className="text-sm text-gray-500">{language === 'ar' ? 'المرحلة المتوسطة' : 'Middle School'}</p>
                            <p className="font-semibold">{teacher.hourlyRateRanges.middle} {currencySymbol}</p>
                          </div>
                        </div>
                        
                        <div className="bg-white p-3 rounded-md border border-gray-200 flex items-center gap-3">
                          <div className="bg-purple-100 p-2 rounded-full">
                            <School size={18} className="text-purple-600" />
                          </div>
                          <div>
                            <p className="text-sm text-gray-500">{language === 'ar' ? 'المرحلة الثانوية' : 'High School'}</p>
                            <p className="font-semibold">{teacher.hourlyRateRanges.high} {currencySymbol}</p>
                          </div>
                        </div>
                        
                        <div className="bg-white p-3 rounded-md border border-gray-200 flex items-center gap-3">
                          <div className="bg-orange-100 p-2 rounded-full">
                            <GraduationCap size={18} className="text-orange-600" />
                          </div>
                          <div>
                            <p className="text-sm text-gray-500">{language === 'ar' ? 'المرحلة الجامعية' : 'University'}</p>
                            <p className="font-semibold">{teacher.hourlyRateRanges.university} {currencySymbol}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="mb-6 bg-gray-50 p-5 rounded-lg">
                      <h2 className="text-xl font-bold mb-2">
                        {language === 'ar' ? 'سعر الساعة التعليمية' : 'Hourly Rate'}
                      </h2>
                      <p className="text-2xl font-bold text-brand-blue">{teacher.hourlyRate} {currencySymbol}</p>
                    </div>
                  )}

                  <div className="mb-6">
                    <h2 className="text-xl font-bold mb-3">
                      {language === 'ar' ? 'نبذة عن المعلم' : 'About the Teacher'}
                    </h2>
                    <p className="text-gray-700">
                      {teacher.bio || 'معلم متميز ذو خبرة عالية في تدريس ' + teacher.subject + '. يتميز بأسلوب شرح مبسط وقدرة على إيصال المعلومات بطريقة سهلة وممتعة.'}
                    </p>
                  </div>

                  <div className="mb-6">
                    <h2 className="text-xl font-bold mb-3">
                      {language === 'ar' ? 'المواد التي يدرسها' : 'Subjects Taught'}
                    </h2>
                    <div className="flex flex-wrap gap-2">
                      {teacher.subjects.map((subject, idx) => (
                        <Badge key={idx} className="bg-brand-blue/10 text-brand-blue hover:bg-brand-blue/20">
                          {subject}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {teacher.qualifications && (
                    <div className="mb-6">
                      <h2 className="text-xl font-bold mb-3">
                        {language === 'ar' ? 'المؤهلات العلمية' : 'Qualifications'}
                      </h2>
                      <ul className="list-disc ml-5 space-y-1 text-gray-700">
                        {teacher.qualifications.map((qual, idx) => (
                          <li key={idx}>{qual}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {teacher.achievements && (
                    <div className="mb-6">
                      <h2 className="text-xl font-bold mb-3">
                        {language === 'ar' ? 'الإنجازات والشهادات' : 'Achievements & Certifications'}
                      </h2>
                      <ul className="list-disc ml-5 space-y-1 text-gray-700">
                        {teacher.achievements.map((achievement, idx) => (
                          <li key={idx}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {teacher.philosophy && (
                    <div className="bg-gray-50 p-5 rounded-lg border-l-4 border-brand-blue">
                      <h2 className="text-xl font-bold mb-2">
                        {language === 'ar' ? 'فلسفتي التعليمية' : 'Teaching Philosophy'}
                      </h2>
                      <p className="text-gray-700 italic">"{teacher.philosophy}"</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Availability Section */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-6">
            <h2 className="text-2xl font-bold mb-8">
              {language === 'ar' ? 'مواعيد الدروس المتاحة' : 'Available Lesson Times'}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {availableTimes.map((slot, idx) => (
                <Card key={idx} className="overflow-hidden">
                  <div className="bg-brand-blue text-white p-4">
                    <h3 className="font-bold text-lg">{slot.day}</h3>
                  </div>
                  <CardContent className="p-4">
                    <ul className="space-y-2">
                      {slot.times.map((time, timeIdx) => (
                        <li key={timeIdx} className="flex justify-between items-center p-2 hover:bg-gray-100 rounded">
                          <span>{time}</span>
                          <Button size="sm" variant="outline" className="border-brand-blue text-brand-blue hover:bg-brand-blue/10">
                            حجز
                          </Button>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Reviews Section */}
        <section className="py-12">
          <div className="container mx-auto px-6">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold">
                {language === 'ar' ? 'تقييمات الطلاب' : 'Student Reviews'}
              </h2>
              <Button variant="outline" className="border-brand-blue text-brand-blue hover:bg-brand-blue/10">
                <MessageSquare size={18} className="mr-2" />
                {language === 'ar' ? 'أضف تقييمك' : 'Add Review'}
              </Button>
            </div>
            
            <div className="space-y-6">
              {reviews.map(review => (
                <div key={review.id} className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-bold">{review.name}</p>
                      <p className="text-sm text-gray-500">
                        {new Date(review.date).toLocaleDateString(language === 'ar' ? 'ar-SA' : 'en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </p>
                    </div>
                    <div className="flex">{renderStars(review.rating)}</div>
                  </div>
                  <p className="mt-3 text-gray-700">{review.comment}</p>
                </div>
              ))}
            </div>
            
            {reviews.length > 3 && (
              <div className="mt-8 text-center">
                <Button variant="outline" className="border-brand-blue text-brand-blue hover:bg-brand-blue/10">
                  {language === 'ar' ? 'عرض جميع التقييمات' : 'View All Reviews'}
                </Button>
              </div>
            )}
          </div>
        </section>

        {/* Call To Action */}
        <section className="py-16 bg-brand-blue/10">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-4">
              {language === 'ar' ? 'مستعد لبدء رحلتك التعليمية؟' : 'Ready to Start Your Learning Journey?'}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              {language === 'ar' 
                ? 'احجز دروسك الآن مع ' + teacher.name + ' واستفد من خبرته الواسعة في تدريس ' + teacher.subject + '.'
                : 'Book your lessons now with ' + teacher.name + ' and benefit from their extensive experience in teaching ' + teacher.subject + '.'}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button className="bg-brand-blue hover:bg-brand-blue/90">
                {language === 'ar' ? 'احجز درسك الأول' : 'Book Your First Lesson'}
              </Button>
              <Button variant="outline" className="border-brand-blue text-brand-blue hover:bg-brand-blue/10">
                {language === 'ar' ? 'تواصل مع المعلم' : 'Contact Teacher'}
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default TeacherDetails;
