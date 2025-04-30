
import { 
  LayoutDashboard, 
  Users, 
  UserCheck, 
  FileText, 
  Calendar, 
  Settings, 
  DollarSign, 
  ShieldCheck,
  Menu,
  X
} from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

interface AdminDashboardSidebarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export const AdminDashboardSidebar = ({ 
  activeSection, 
  setActiveSection 
}: AdminDashboardSidebarProps) => {
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  const menuItems = [
    { id: "overview", label: "نظرة عامة", icon: LayoutDashboard },
    { id: "teachers", label: "إدارة المعلمين", icon: UserCheck },
    { id: "content", label: "إدارة المحتوى", icon: FileText },
    { id: "bookings", label: "إدارة الحجوزات", icon: Calendar },
    { id: "users", label: "إدارة المستخدمين", icon: Users },
    { id: "settings", label: "إعدادات المنصة", icon: Settings },
    { id: "financial", label: "التقارير المالية", icon: DollarSign },
    { id: "permissions", label: "الصلاحيات", icon: ShieldCheck },
  ];

  const toggleMobileSidebar = () => {
    setIsMobileSidebarOpen(!isMobileSidebarOpen);
  };

  return (
    <>
      {/* Mobile menu toggle */}
      <div className="md:hidden p-4 border-b flex items-center justify-between">
        <Button 
          variant="ghost" 
          size="icon"
          onClick={toggleMobileSidebar}
          className="text-gray-800"
        >
          {isMobileSidebarOpen ? <X /> : <Menu />}
        </Button>
        <div className="font-bold text-lg">لوحة التحكم</div>
      </div>

      {/* Sidebar */}
      <aside 
        className={`
          w-full md:w-64 bg-white border-l border-gray-200 shadow-sm
          md:flex md:flex-col md:h-auto overflow-y-auto
          fixed md:sticky top-0 left-0 h-full z-40 md:z-0
          transition-transform duration-300
          ${isMobileSidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
        `}
      >
        <div className="p-4 border-b">
          <h2 className="text-xl font-bold text-center">لوحة تحكم الإدارة</h2>
        </div>

        <nav className="flex-grow p-4">
          <ul className="space-y-2">
            {menuItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => {
                    setActiveSection(item.id);
                    setIsMobileSidebarOpen(false);
                  }}
                  className={`
                    flex items-center gap-3 w-full p-3 rounded-md text-right
                    hover:bg-gray-100 transition-colors
                    ${activeSection === item.id 
                      ? 'bg-brand-blue/10 text-brand-blue font-semibold' 
                      : 'text-gray-700'}
                  `}
                >
                  <item.icon className="h-5 w-5" />
                  <span>{item.label}</span>
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {/* Mobile overlay */}
      {isMobileSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
          onClick={() => setIsMobileSidebarOpen(false)}
        />
      )}
    </>
  );
};
