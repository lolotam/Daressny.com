
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow flex items-center justify-center py-16">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-brand-blue mb-6">404</h1>
          <p className="text-2xl font-medium mb-6">عذراً، الصفحة غير موجودة</p>
          <p className="text-gray-600 max-w-md mx-auto mb-8">
            الصفحة التي تبحث عنها غير موجودة أو تم نقلها أو حذفها
          </p>
          <Button asChild size="lg">
            <Link to="/">العودة للصفحة الرئيسية</Link>
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
