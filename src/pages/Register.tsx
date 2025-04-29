
import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useSearchParams } from "react-router-dom";
import { StudentRegistrationForm } from "@/components/register/StudentRegistrationForm";
import { TeacherRegistrationForm } from "@/components/register/TeacherRegistrationForm";
import { RegisterHeader, RegisterFooter } from "@/components/register/RegisterHeader";

const Register = () => {
  const [searchParams] = useSearchParams();
  const initialTab = searchParams.get("role") === "teacher" ? "teacher" : "student";
  const [selectedTab, setSelectedTab] = useState(initialTab);
  const [isSubmitting, setIsSubmitting] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-sm p-8">
            <RegisterHeader />

            <Tabs defaultValue={selectedTab} className="mb-8" onValueChange={setSelectedTab}>
              <TabsList className="grid grid-cols-2 mb-8">
                <TabsTrigger value="student">تسجيل كطالب</TabsTrigger>
                <TabsTrigger value="teacher">تسجيل كمعلم</TabsTrigger>
              </TabsList>

              <TabsContent value="student">
                <StudentRegistrationForm 
                  isSubmitting={isSubmitting} 
                  setIsSubmitting={setIsSubmitting} 
                />
              </TabsContent>

              <TabsContent value="teacher">
                <TeacherRegistrationForm 
                  isSubmitting={isSubmitting} 
                  setIsSubmitting={setIsSubmitting} 
                />
              </TabsContent>
            </Tabs>

            <RegisterFooter />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Register;
