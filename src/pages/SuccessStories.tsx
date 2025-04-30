
import { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { SuccessStoriesHeader } from '@/components/success-stories/SuccessStoriesHeader';
import { StudentStoriesGrid } from '@/components/success-stories/StudentStoriesGrid';
import { TeacherStoriesGrid } from '@/components/success-stories/TeacherStoriesGrid';
import { StoriesCallToAction } from '@/components/success-stories/StoriesCallToAction';
import { studentStories, teacherStories } from '@/components/success-stories/storiesData';

export default function SuccessStories() {
  const [activeTab, setActiveTab] = useState("students");

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50">
        <SuccessStoriesHeader 
          title="قصص نجاح"
          description="تعرّف على قصص نجاح حقيقية لطلاب ومعلمين حققوا نتائج استثنائية مع منصة درسني"
        />

        <div className="container mx-auto max-w-6xl py-12 px-6">
          <Tabs defaultValue="students" onValueChange={setActiveTab} className="mb-8">
            <div className="flex justify-center mb-10">
              <TabsList className="bg-white">
                <TabsTrigger value="students" className="px-8 py-3">قصص نجاح الطلاب</TabsTrigger>
                <TabsTrigger value="teachers" className="px-8 py-3">قصص نجاح المعلمين</TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="students">
              <StudentStoriesGrid stories={studentStories} />
            </TabsContent>
            
            <TabsContent value="teachers">
              <TeacherStoriesGrid stories={teacherStories} />
            </TabsContent>
          </Tabs>
          
          <StoriesCallToAction 
            title="هل لديك قصة نجاح مع درسني؟"
            description="نحن فخورون بنجاحات طلابنا ومعلمينا. شارك قصة نجاحك معنا وقد تظهر هنا قريبًا!"
            buttonText="شارك قصة نجاحك"
            buttonLink="/share-success"
          />
        </div>
      </main>
      <Footer />
    </>
  );
}
