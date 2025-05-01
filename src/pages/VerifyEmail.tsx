
import { useState, useEffect } from "react";
import { useSearchParams, Navigate } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";

const VerifyEmail = () => {
  const [searchParams] = useSearchParams();
  const [isLoading, setIsLoading] = useState(true);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const token = searchParams.get("token");
  const email = searchParams.get("email");

  useEffect(() => {
    const verifyEmail = async () => {
      if (!token || !email) {
        setError("رابط التحقق غير صالح. يرجى التحقق من الرابط أو طلب رابط تحقق جديد.");
        setIsLoading(false);
        return;
      }

      try {
        const { error } = await supabase.functions.invoke("verify-email", {
          body: { token, email }
        });

        if (error) {
          throw error;
        }

        setIsSuccess(true);
      } catch (err: any) {
        console.error("Error verifying email:", err);
        setError(err.message || "حدث خطأ أثناء التحقق من البريد الإلكتروني. يرجى المحاولة مرة أخرى.");
      } finally {
        setIsLoading(false);
      }
    };

    verifyEmail();
  }, [token, email]);

  if (isSuccess) {
    // Redirect to login after 5 seconds
    setTimeout(() => {
      window.location.href = "/login";
    }, 5000);
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-md mx-auto bg-white rounded-lg shadow-sm p-8 text-center">
            {isLoading ? (
              <div className="flex flex-col items-center justify-center">
                <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"></div>
                <p className="mt-4">جاري التحقق من بريدك الإلكتروني...</p>
              </div>
            ) : isSuccess ? (
              <div className="flex flex-col items-center justify-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold mb-2">تم التحقق بنجاح!</h2>
                <p className="text-gray-600 mb-6">تم تأكيد بريدك الإلكتروني بنجاح. يمكنك الآن تسجيل الدخول إلى حسابك.</p>
                <Button asChild className="bg-brand-blue hover:bg-brand-blue/90">
                  <a href="/login">تسجيل الدخول</a>
                </Button>
                <p className="text-sm text-gray-500 mt-4">سيتم تحويلك تلقائياً إلى صفحة تسجيل الدخول خلال 5 ثوانٍ...</p>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold mb-2">حدث خطأ!</h2>
                <p className="text-gray-600 mb-6">{error}</p>
                <div className="flex gap-4">
                  <Button asChild variant="outline">
                    <a href="/register">التسجيل مجدداً</a>
                  </Button>
                  <Button asChild className="bg-brand-blue hover:bg-brand-blue/90">
                    <a href="/">العودة للصفحة الرئيسية</a>
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default VerifyEmail;
