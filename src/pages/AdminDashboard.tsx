
import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AdminDashboardSidebar } from "@/components/admin-dashboard/AdminDashboardSidebar";
import { AdminDashboardOverview } from "@/components/admin-dashboard/AdminDashboardOverview";
import { AdminTeachersManagement } from "@/components/admin-dashboard/AdminTeachersManagement";
import { AdminContentManagement } from "@/components/admin-dashboard/AdminContentManagement";
import { AdminBookingsManagement } from "@/components/admin-dashboard/AdminBookingsManagement";
import { AdminUsersManagement } from "@/components/admin-dashboard/AdminUsersManagement";
import { AdminSettingsManagement } from "@/components/admin-dashboard/AdminSettingsManagement";
import { AdminFinancialReports } from "@/components/admin-dashboard/AdminFinancialReports";
import { AdminPermissionsManagement } from "@/components/admin-dashboard/AdminPermissionsManagement";

const AdminDashboard = () => {
  const [activeSection, setActiveSection] = useState("overview");

  // Render the active section based on the selected menu item
  const renderActiveSection = () => {
    switch (activeSection) {
      case "overview":
        return <AdminDashboardOverview />;
      case "teachers":
        return <AdminTeachersManagement />;
      case "content":
        return <AdminContentManagement />;
      case "bookings":
        return <AdminBookingsManagement />;
      case "users":
        return <AdminUsersManagement />;
      case "settings":
        return <AdminSettingsManagement />;
      case "financial":
        return <AdminFinancialReports />;
      case "permissions":
        return <AdminPermissionsManagement />;
      default:
        return <AdminDashboardOverview />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-grow flex flex-col md:flex-row">
        {/* Sidebar */}
        <AdminDashboardSidebar 
          activeSection={activeSection} 
          setActiveSection={setActiveSection} 
        />
        
        {/* Main content */}
        <main className="flex-grow p-4 md:p-6 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            {renderActiveSection()}
          </div>
        </main>
      </div>
      
      <Footer />
    </div>
  );
};

export default AdminDashboard;
