
import { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/reset-password`,
      });

      if (error) {
        throw error;
      }

      setIsSubmitted(true);
      toast({
        title: "تم إرسال رابط إعادة تعيين كلمة المرور",
        description: "يرجى التحقق من بريدك الإلكتروني للحصول على تعليمات إعادة التعيين",
      });
    } catch (error: any) {
      let errorMessage = "حدث خطأ أثناء إرسال رابط إعادة تعيين كلمة المرور";
      console.error("Reset password error:", error);
      
      toast({
        title: "خطأ",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-md mx-auto bg-white rounded-lg shadow-sm p-8">
            <div className="text-center mb-8">
              <h1 className="text-2xl font-bold mb-2">استعادة كلمة المرور</h1>
              <p className="text-gray-600">
                أدخل بريدك الإلكتروني وسنرسل لك رابطًا لإعادة تعيين كلمة المرور
              </p>
            </div>
            
            {!isSubmitted ? (
              <form onSubmit={handleResetPassword} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="email">البريد الإلكتروني</Label>
                  <Input 
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="أدخل بريدك الإلكتروني"
                    required
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-brand-blue hover:bg-brand-blue/90"
                  disabled={isLoading}
                >
                  {isLoading ? "جاري الإرسال..." : "إرسال رابط إعادة التعيين"}
                </Button>
                
                <div className="text-center mt-4">
                  <Link to="/login" className="text-brand-blue hover:underline">
                    العودة إلى تسجيل الدخول
                  </Link>
                </div>
              </form>
            ) : (
              <div className="text-center py-6">
                <div className="mb-4 text-green-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium mb-2">تم إرسال رابط إعادة التعيين</h3>
                <p className="text-gray-600 mb-6">
                  يرجى التحقق من بريدك الإلكتروني للحصول على تعليمات إعادة تعيين كلمة المرور
                </p>
                <Link to="/login">
                  <Button variant="outline" className="mx-auto">
                    العودة إلى تسجيل الدخول
                  </Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ForgotPassword;
