
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { validatePasswordMatch } from "@/utils/auth-helpers";

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isValidToken, setIsValidToken] = useState(true);
  const { toast } = useToast();
  const navigate = useNavigate();

  // Check if the access token exists in the URL
  useEffect(() => {
    const checkAccessToken = async () => {
      const hash = window.location.hash;
      if (!hash || !hash.includes("access_token")) {
        setIsValidToken(false);
        toast({
          title: "رابط غير صالح",
          description: "رابط إعادة تعيين كلمة المرور غير صالح أو منتهي الصلاحية",
          variant: "destructive",
        });
      }
    };

    checkAccessToken();
  }, [toast]);

  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validatePasswordMatch(password, confirmPassword)) {
      toast({
        title: "خطأ في كلمة المرور",
        description: "كلمات المرور غير متطابقة",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    try {
      const { error } = await supabase.auth.updateUser({
        password: password
      });

      if (error) {
        throw error;
      }

      toast({
        title: "تم تحديث كلمة المرور",
        description: "تم تحديث كلمة المرور بنجاح، يمكنك الآن تسجيل الدخول",
      });

      // Redirect to login page after successful password reset
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } catch (error: any) {
      let errorMessage = "حدث خطأ أثناء إعادة تعيين كلمة المرور";
      console.error("Update password error:", error);
      
      toast({
        title: "خطأ",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  if (!isValidToken) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow py-16 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="max-w-md mx-auto bg-white rounded-lg shadow-sm p-8 text-center">
              <div className="mb-4 text-red-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-2">رابط غير صالح</h3>
              <p className="text-gray-600 mb-6">
                رابط إعادة تعيين كلمة المرور غير صالح أو منتهي الصلاحية
              </p>
              <Button 
                onClick={() => navigate("/forgot-password")} 
                className="mx-auto"
              >
                طلب رابط جديد
              </Button>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-md mx-auto bg-white rounded-lg shadow-sm p-8">
            <div className="text-center mb-8">
              <h1 className="text-2xl font-bold mb-2">إعادة تعيين كلمة المرور</h1>
              <p className="text-gray-600">
                الرجاء إدخال كلمة المرور الجديدة الخاصة بك
              </p>
            </div>
            
            <form onSubmit={handleResetPassword} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="password">كلمة المرور الجديدة</Label>
                <Input 
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="أدخل كلمة المرور الجديدة"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="confirmPassword">تأكيد كلمة المرور</Label>
                <Input 
                  id="confirmPassword"
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="أدخل كلمة المرور مرة أخرى"
                  required
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-brand-blue hover:bg-brand-blue/90"
                disabled={isLoading}
              >
                {isLoading ? "جاري المعالجة..." : "تحديث كلمة المرور"}
              </Button>
            </form>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ResetPassword;
