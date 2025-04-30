
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { StudentProfileTab } from "./tabs/StudentProfileTab";
import { StudentSessionsTab } from "./tabs/StudentSessionsTab";
import { StudentCoursesTab } from "./tabs/StudentCoursesTab";
import { StudentTeachersTab } from "./tabs/StudentTeachersTab";
import { StudentParentControlTab } from "./tabs/StudentParentControlTab";

interface StudentDashboardTabsProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const StudentDashboardTabs = ({ 
  activeTab, 
  setActiveTab 
}: StudentDashboardTabsProps) => {
  return (
    <Tabs 
      defaultValue="profile" 
      value={activeTab} 
      onValueChange={setActiveTab}
      className="w-full"
    >
      <TabsList className="grid grid-cols-2 md:grid-cols-5 gap-2 mb-6">
        <TabsTrigger value="profile" className="text-sm md:text-base font-semibold">
          الملف الشخصي
        </TabsTrigger>
        <TabsTrigger value="sessions" className="text-sm md:text-base font-semibold">
          الحصص الدراسية
        </TabsTrigger>
        <TabsTrigger value="courses" className="text-sm md:text-base font-semibold">
          الكورسات
        </TabsTrigger>
        <TabsTrigger value="teachers" className="text-sm md:text-base font-semibold">
          المعلمين
        </TabsTrigger>
        <TabsTrigger value="parent" className="text-sm md:text-base font-semibold">
          التحكم الأبوي
        </TabsTrigger>
      </TabsList>

      <TabsContent value="profile">
        <StudentProfileTab />
      </TabsContent>
      
      <TabsContent value="sessions">
        <StudentSessionsTab />
      </TabsContent>
      
      <TabsContent value="courses">
        <StudentCoursesTab />
      </TabsContent>
      
      <TabsContent value="teachers">
        <StudentTeachersTab />
      </TabsContent>
      
      <TabsContent value="parent">
        <StudentParentControlTab />
      </TabsContent>
    </Tabs>
  );
};
