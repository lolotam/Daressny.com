
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { StudentDashboardHeader } from "@/components/student-dashboard/StudentDashboardHeader";
import { StudentDashboardTabs } from "@/components/student-dashboard/StudentDashboardTabs";
import { useState } from "react";

const StudentDashboard = () => {
  const [activeTab, setActiveTab] = useState("profile");

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <StudentDashboardHeader />
          <StudentDashboardTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default StudentDashboard;
