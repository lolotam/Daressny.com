
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { TeacherDashboardHeader } from "@/components/teacher-dashboard/TeacherDashboardHeader";
import { TeacherDashboardTabs } from "@/components/teacher-dashboard/TeacherDashboardTabs";
import { useState } from "react";

const TeacherDashboard = () => {
  const [activeTab, setActiveTab] = useState("profile");

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <TeacherDashboardHeader />
          <TeacherDashboardTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default TeacherDashboard;
