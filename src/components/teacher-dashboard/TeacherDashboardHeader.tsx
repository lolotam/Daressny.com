
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

export const TeacherDashboardHeader = () => {
  const { t } = useLanguage();
  
  // Mock teacher data - in a real app this would come from API/context
  const teacher = {
    name: "د. أحمد محمد",
    title: "أستاذ الرياضيات",
    avatar: "/lovable-uploads/8246e1ab-4316-4ed8-adf6-175b7d9717f6.png",
    rating: 4.9,
    reviewsCount: 124,
    verified: true
  };

  return (
    <div className="bg-white rounded-lg shadow p-6 mb-6">
      <div className="flex flex-col md:flex-row items-center gap-6">
        <Avatar className="w-28 h-28 border-4 border-brand-blue">
          <AvatarImage src={teacher.avatar} alt={teacher.name} className="object-cover" />
          <AvatarFallback>{teacher.name.substring(0, 2)}</AvatarFallback>
        </Avatar>
        
        <div className="flex-grow text-center md:text-right">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-2xl font-bold mb-1">{teacher.name}</h1>
              <p className="text-gray-600 mb-2">{teacher.title}</p>
              
              <div className="flex items-center gap-2 justify-center md:justify-start mb-4">
                <div className="flex items-center">
                  <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-yellow-500 fill-current">
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                  </svg>
                  <span className="font-semibold mx-1">{teacher.rating}</span>
                </div>
                <span className="text-sm text-gray-500">({teacher.reviewsCount} تقييم)</span>
                
                {teacher.verified && (
                  <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full flex items-center">
                    <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                    حساب موثق
                  </span>
                )}
              </div>
            </div>
            
            <div className="flex gap-3 justify-center md:justify-end">
              <Button variant="outline" className="border-brand-blue text-brand-blue">
                تعديل الملف الشخصي
              </Button>
              <Button className="bg-brand-blue hover:bg-brand-blue/90">
                إضافة محتوى جديد
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
