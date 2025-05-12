
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

export const StudentDashboardHeader = () => {
  const { language } = useLanguage();
  
  // Mock student data - in a real app this would come from API/context
  const student = {
    name: language === 'ar' ? "محمد علي" : "Mohammed Ali",
    grade: language === 'ar' ? "الصف الحادي عشر - علمي" : "11th Grade - Science",
    avatar: "/lovable-uploads/829da1c5-f204-48e2-b7c8-da3464cee845.png",
    activeCourses: 3,
    completedCourses: 5
  };

  return (
    <div className="bg-white rounded-lg shadow p-6 mb-6">
      <div className="flex flex-col md:flex-row items-center gap-6">
        <Avatar className="w-28 h-28 border-4 border-brand-blue">
          <AvatarImage src={student.avatar} alt={student.name} className="object-cover" />
          <AvatarFallback>{student.name.substring(0, 2)}</AvatarFallback>
        </Avatar>
        
        <div className="flex-grow text-center md:text-right">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-2xl font-bold mb-1">{student.name}</h1>
              <p className="text-gray-600 mb-4">{student.grade}</p>
              
              <div className="flex justify-center md:justify-start gap-4 mb-4">
                <div className="text-center">
                  <span className="block text-2xl font-bold text-brand-blue">{student.activeCourses}</span>
                  <span className="text-sm text-gray-500">
                    {language === 'ar' ? 'كورسات نشطة' : 'Active Courses'}
                  </span>
                </div>
                <div className="text-center">
                  <span className="block text-2xl font-bold text-green-600">{student.completedCourses}</span>
                  <span className="text-sm text-gray-500">
                    {language === 'ar' ? 'كورسات مكتملة' : 'Completed Courses'}
                  </span>
                </div>
              </div>
            </div>
            
            <div className="flex gap-3 justify-center md:justify-end">
              <Button variant="outline" className="border-brand-blue text-brand-blue">
                {language === 'ar' ? 'تعديل الملف الشخصي' : 'Edit Profile'}
              </Button>
              <Button className="bg-brand-blue hover:bg-brand-blue/90">
                {language === 'ar' ? 'تصفح المدرسين' : 'Browse Teachers'}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
