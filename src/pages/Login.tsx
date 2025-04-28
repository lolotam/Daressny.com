
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";

const Login = () => {
  // Form submission handler (just for demonstration)
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    alert("تم تسجيل الدخول بنجاح!");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-md mx-auto bg-white rounded-lg shadow-sm p-8">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold mb-4">تسجيل الدخول</h1>
              <p className="text-gray-600">
                أدخل بياناتك للوصول إلى حسابك
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="email">البريد الإلكتروني</Label>
                <Input id="email" type="email" required />
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <Label htmlFor="password">كلمة المرور</Label>
                  <Link to="/forgot-password" className="text-sm text-brand-blue hover:underline">
                    نسيت كلمة المرور؟
                  </Link>
                </div>
                <Input id="password" type="password" required />
              </div>

              <Button type="submit" className="w-full bg-brand-blue hover:bg-brand-blue/90">
                دخول
              </Button>
            </form>

            <div className="text-center mt-6">
              <p className="text-gray-600">
                ليس لديك حساب؟{" "}
                <Link to="/register" className="text-brand-blue hover:underline">
                  إنشاء حساب جديد
                </Link>
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Login;
