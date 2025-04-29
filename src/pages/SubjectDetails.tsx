
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useLanguage } from "@/contexts/LanguageContext";
import { getSubjectById, getTeachersBySubject, Subject, Teacher } from "@/data/teachersData";
import { ChevronLeft, ChevronRight, CheckCircle, BookOpen, Calculator, Book, FileText, Search, Link as LinkIcon, User } from "lucide-react";

// Helper function to render the correct icon based on string name
const renderSubjectIcon = (iconName: string) => {
  switch (iconName) {
    case "calculator":
      return <Calculator className="h-8 w-8" />;
    case "book-open":
      return <BookOpen className="h-8 w-8" />;
    case "link":
      return <LinkIcon className="h-8 w-8" />;
    case "file-text":
      return <FileText className="h-8 w-8" />;
    case "book":
      return <Book className="h-8 w-8" />;
    case "user":
      return <User className="h-8 w-8" />;
    case "search":
      return <Search className="h-8 w-8" />;
    default:
      return <BookOpen className="h-8 w-8" />;
  }
};

const SubjectDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [subject, setSubject] = useState<Subject | null>(null);
  const [teachers, setTeachers] = useState<Teacher[]>([]);
  const { t, language, dir, currencySymbol } = useLanguage();
  
  useEffect(() => {
    if (id) {
      const subjectData = getSubjectById(parseInt(id));
      
      if (subjectData) {
        setSubject(subjectData);
        
        // Get teachers for this subject
        const subjectTeachers = getTeachersBySubject(subjectData.name);
        setTeachers(subjectTeachers);
      }
    }
  }, [id]);
  
  if (!subject) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">المادة غير موجودة</h1>
            <Button asChild>
              <Link to="/subjects">العودة إلى المواد الدراسية</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const BackArrow = language === 'ar' ? ChevronRight : ChevronLeft;

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-brand-blue/10 to-white py-12">
          <div className="container mx-auto px-6">
            <div className="flex items-center gap-2 mb-8">
              <Button 
                asChild 
                variant="ghost" 
                size="sm" 
                className="flex items-center gap-1"
              >
                <Link to="/subjects">
                  <BackArrow size={16} />
                  <span>{language === 'ar' ? 'جميع المواد' : 'All Subjects'}</span>
                </Link>
              </Button>
            </div>

            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="lg:w-1/2">
                <div className="mb-4 flex items-center">
                  <div className="mr-3 bg-brand-blue/10 p-3 rounded-full text-brand-blue">
                    {renderSubjectIcon(subject.icon)}
                  </div>
                </div>
                <h1 className="text-4xl font-bold mb-4">{subject.name}</h1>
                <p className="text-lg text-gray-700 mb-6">
                  {subject.description}
                </p>

                <div className="flex flex-wrap gap-3 mb-8">
                  <Button asChild className="bg-brand-blue hover:bg-brand-blue/90">
                    <Link to={`/register?subject=${subject.name}`}>
                      سجل الآن للدروس
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="border-brand-blue text-brand-blue hover:bg-brand-blue/10">
                    <Link to="/contact">
                      استفسر عن المزيد
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="lg:w-1/2">
                <img 
                  src={subject.image} 
                  alt={subject.name} 
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
              <div className="lg:col-span-2">
                {/* Topics */}
                <div className="mb-12">
                  <h2 className="text-2xl font-bold flex items-center gap-2 mb-6">
                    <BookOpen size={24} className="text-brand-blue" />
                    {language === 'ar' ? 'المحتوى العلمي للمادة' : 'Course Topics'}
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                    {subject.topics.map((topic, index) => (
                      <div key={index} className="flex items-start p-4 bg-gray-50 rounded-lg">
                        <CheckCircle className="flex-shrink-0 w-5 h-5 text-brand-blue mr-2 mt-0.5" />
                        <span>{topic}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Skills */}
                <div className="mb-12">
                  <h2 className="text-2xl font-bold mb-6">
                    {language === 'ar' ? 'المهارات المكتسبة' : 'Skills You Will Gain'}
                  </h2>
                  <div className="bg-white shadow-sm rounded-lg p-6">
                    <ul className="space-y-3">
                      {subject.skills.map((skill, index) => (
                        <li key={index} className="flex items-center">
                          <CheckCircle className="flex-shrink-0 w-5 h-5 text-brand-teal mr-3" />
                          <span>{skill}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Certificates */}
                {subject.certificates.length > 0 && (
                  <div className="mb-12">
                    <h2 className="text-2xl font-bold mb-6">
                      {language === 'ar' ? 'الشهادات والإنجازات' : 'Certificates & Achievements'}
                    </h2>
                    <div className="bg-gradient-to-r from-brand-gold/20 to-brand-teal/20 rounded-lg p-6">
                      <ul className="space-y-3">
                        {subject.certificates.map((cert, index) => (
                          <li key={index} className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-brand-gold mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                            <span>{cert}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}

                {/* Why Choose Us */}
                <div className="mb-12">
                  <h2 className="text-2xl font-bold mb-6">
                    {language === 'ar' ? 'لماذا تختارنا؟' : 'Why Choose Us?'}
                  </h2>
                  <div className="bg-gray-50 rounded-lg p-6">
                    <ul className="space-y-4">
                      {subject.advantages.map((adv, index) => (
                        <li key={index} className="flex">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-brand-blue mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>{adv}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              
              {/* Sidebar */}
              <div className="lg:col-span-1">
                {/* Call to Action */}
                <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 mb-8">
                  <h3 className="text-xl font-bold mb-4">
                    {language === 'ar' ? 'احجز دروسك الآن' : 'Book Your Lessons Now'}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {language === 'ar' 
                      ? 'انضم إلى آلاف الطلاب الناجحين واحصل على تعليم عالي الجودة مع مدرسين متميزين.'
                      : 'Join thousands of successful students and get high-quality education with outstanding teachers.'}
                  </p>
                  <Button asChild className="w-full bg-brand-blue hover:bg-brand-blue/90">
                    <Link to={`/register?subject=${subject.name}`}>
                      {language === 'ar' ? 'ابدأ الآن' : 'Start Now'}
                    </Link>
                  </Button>
                </div>

                {/* Related Teachers */}
                <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
                  <h3 className="text-xl font-bold mb-6">
                    {language === 'ar' ? 'المعلمون المتخصصون' : 'Subject Teachers'}
                  </h3>
                  
                  {teachers.length > 0 ? (
                    <div className="space-y-4">
                      {teachers.slice(0, 3).map(teacher => (
                        <div key={teacher.id} className="flex items-center gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors">
                          <img 
                            src={teacher.image} 
                            alt={teacher.name} 
                            className="w-10 h-10 rounded-full object-cover"
                          />
                          <div className="flex-grow">
                            <h4 className="font-medium">{teacher.name}</h4>
                            <p className="text-sm text-gray-500">{teacher.experience}</p>
                          </div>
                          <div className="flex items-center text-sm">
                            <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 text-yellow-500 fill-current" xmlns="http://www.w3.org/2000/svg">
                              <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                            </svg>
                            <span className="ms-1">{teacher.rating}</span>
                          </div>
                          <Button asChild variant="ghost" size="sm">
                            <Link to={`/teachers/${teacher.id}`}>
                              عرض
                            </Link>
                          </Button>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-gray-500 text-center py-4">
                      {language === 'ar' ? 'لا يوجد معلمون متاحون حالياً' : 'No teachers available at the moment'}
                    </p>
                  )}
                  
                  {teachers.length > 3 && (
                    <div className="mt-4 text-center">
                      <Button asChild variant="link" className="text-brand-blue">
                        <Link to={`/teachers?subject=${subject.name}`}>
                          عرض جميع المعلمين
                        </Link>
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call To Action Section */}
        <section className="py-16 bg-brand-blue text-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-4">
              {language === 'ar' ? 'ابدأ رحلتك التعليمية اليوم' : 'Start Your Learning Journey Today'}
            </h2>
            <p className="text-lg opacity-90 max-w-2xl mx-auto mb-8">
              {language === 'ar' 
                ? 'نحن هنا لمساعدتك على تحقيق أهدافك التعليمية. انضم إلينا واستفد من أفضل المعلمين والمناهج التعليمية.'
                : 'We are here to help you achieve your educational goals. Join us and benefit from the best teachers and curricula.'}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild className="bg-white text-brand-blue hover:bg-gray-100">
                <Link to="/register">
                  {language === 'ar' ? 'سجل كطالب' : 'Register as Student'}
                </Link>
              </Button>
              <Button asChild variant="outline" className="border-white text-white hover:bg-white/20">
                <Link to="/contact">
                  {language === 'ar' ? 'تواصل معنا' : 'Contact Us'}
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default SubjectDetails;
