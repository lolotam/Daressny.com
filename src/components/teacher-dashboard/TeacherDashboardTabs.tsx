
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TeacherProfileTab } from "./tabs/TeacherProfileTab";
import { TeacherScheduleTab } from "./tabs/TeacherScheduleTab";
import { TeacherReviewsTab } from "./tabs/TeacherReviewsTab";
import { TeacherCoursesTab } from "./tabs/TeacherCoursesTab";
import { TeacherVideosTab } from "./tabs/TeacherVideosTab";
import { useLanguage } from "@/contexts/LanguageContext";

interface TeacherDashboardTabsProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const TeacherDashboardTabs = ({ 
  activeTab, 
  setActiveTab 
}: TeacherDashboardTabsProps) => {
  const { language } = useLanguage();
  
  return (
    <Tabs 
      defaultValue="profile" 
      value={activeTab} 
      onValueChange={setActiveTab}
      className="w-full"
    >
      <TabsList className="grid grid-cols-2 md:grid-cols-5 gap-2 mb-6">
        <TabsTrigger value="profile" className="text-sm md:text-base font-semibold">
          {language === 'ar' ? 'الملف الشخصي' : 'Profile'}
        </TabsTrigger>
        <TabsTrigger value="schedule" className="text-sm md:text-base font-semibold">
          {language === 'ar' ? 'جدول المواعيد' : 'Schedule'}
        </TabsTrigger>
        <TabsTrigger value="reviews" className="text-sm md:text-base font-semibold">
          {language === 'ar' ? 'التقييمات' : 'Reviews'}
        </TabsTrigger>
        <TabsTrigger value="courses" className="text-sm md:text-base font-semibold">
          {language === 'ar' ? 'الكورسات' : 'Courses'}
        </TabsTrigger>
        <TabsTrigger value="videos" className="text-sm md:text-base font-semibold">
          {language === 'ar' ? 'الفيديوهات' : 'Videos'}
        </TabsTrigger>
      </TabsList>

      <TabsContent value="profile">
        <TeacherProfileTab />
      </TabsContent>
      
      <TabsContent value="schedule">
        <TeacherScheduleTab />
      </TabsContent>
      
      <TabsContent value="reviews">
        <TeacherReviewsTab />
      </TabsContent>
      
      <TabsContent value="courses">
        <TeacherCoursesTab />
      </TabsContent>
      
      <TabsContent value="videos">
        <TeacherVideosTab />
      </TabsContent>
    </Tabs>
  );
};
