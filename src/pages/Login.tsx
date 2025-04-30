
import { useState, useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/components/auth/AuthProvider";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const Login = () => {
  // Login state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  // Registration state
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [registerName, setRegisterName] = useState("");
  const [registerPhone, setRegisterPhone] = useState("");
  
  // UI state
  const [activeTab, setActiveTab] = useState("login");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const redirectTo = searchParams.get("redirect") || "/";
  const { user } = useAuth();

  // Redirect if already logged in
  useEffect(() => {
    if (user) {
      navigate(redirectTo);
    }
  }, [user, navigate, redirectTo]);

  // Form submission handler for login
  const handleLoginSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsSubmitting(true);
    
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      
      if (error) {
        throw error;
      }
      
      toast({
        title: "تم تسجيل الدخول بنجاح!",
        variant: "default",
      });
      
      navigate(redirectTo);
    } catch (error: any) {
      console.error("Login error:", error);
      toast({
        title: "خطأ في تسجيل الدخول",
        description: error.message || "يرجى التحقق من بيانات الدخول والمحاولة مرة أخرى",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Form submission handler for registration
  const handleRegisterSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsSubmitting(true);
    
    try {
      const { data, error } = await supabase.auth.signUp({
        email: registerEmail,
        password: registerPassword,
        options: {
          data: {
            full_name: registerName,
            phone_number: registerPhone
          }
        }
      });
      
      if (error) {
        throw error;
      }
      
      toast({
        title: "تم إنشاء الحساب بنجاح!",
        description: "تم إرسال رسالة تأكيد إلى بريدك الإلكتروني. يرجى التحقق من بريدك الإلكتروني لتفعيل حسابك.",
        variant: "default",
      });
      
      // Reset form
      setRegisterEmail("");
      setRegisterPassword("");
      setRegisterName("");
      setRegisterPhone("");
      setActiveTab("login");
    } catch (error: any) {
      console.error("Registration error:", error);
      toast({
        title: "خطأ في إنشاء الحساب",
        description: error.message || "حدث خطأ أثناء إنشاء الحساب. يرجى المحاولة مرة أخرى.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-md mx-auto bg-white rounded-lg shadow-sm p-8">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold mb-4">حساب درسني</h1>
              <p className="text-gray-600">
                قم بتسجيل الدخول أو إنشاء حساب جديد
              </p>
            </div>

            <Tabs defaultValue="login" value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="grid grid-cols-2 w-full mb-8">
                <TabsTrigger value="login">تسجيل الدخول</TabsTrigger>
                <TabsTrigger value="register">إنشاء حساب جديد</TabsTrigger>
              </TabsList>
              
              <TabsContent value="login">
                <form onSubmit={handleLoginSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="email">البريد الإلكتروني</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required 
                    />
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <Label htmlFor="password">كلمة المرور</Label>
                      <Link to="/forgot-password" className="text-sm text-brand-blue hover:underline">
                        نسيت كلمة المرور؟
                      </Link>
                    </div>
                    <Input 
                      id="password" 
                      type="password" 
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required 
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-brand-blue hover:bg-brand-blue/90"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "جاري تسجيل الدخول..." : "دخول"}
                  </Button>
                </form>
              </TabsContent>
              
              <TabsContent value="register">
                <form onSubmit={handleRegisterSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="registerName">الاسم الكامل</Label>
                    <Input 
                      id="registerName" 
                      type="text" 
                      value={registerName}
                      onChange={(e) => setRegisterName(e.target.value)}
                      required 
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="registerEmail">البريد الإلكتروني</Label>
                    <Input 
                      id="registerEmail" 
                      type="email" 
                      value={registerEmail}
                      onChange={(e) => setRegisterEmail(e.target.value)}
                      required 
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="registerPhone">رقم الهاتف</Label>
                    <Input 
                      id="registerPhone" 
                      type="tel" 
                      value={registerPhone}
                      onChange={(e) => setRegisterPhone(e.target.value)}
                    />
                  </div>

                  <div>
                    <Label htmlFor="registerPassword">كلمة المرور</Label>
                    <Input 
                      id="registerPassword" 
                      type="password" 
                      value={registerPassword}
                      onChange={(e) => setRegisterPassword(e.target.value)}
                      required 
                      minLength={8}
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-brand-blue hover:bg-brand-blue/90"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "جاري إنشاء الحساب..." : "إنشاء حساب"}
                  </Button>
                </form>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Login;
