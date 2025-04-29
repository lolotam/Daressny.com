
import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { UserPlus } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const JoinTeacher = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "تم استلام طلبك بنجاح",
        description: "سيتم التواصل معك قريباً من قبل فريق منصة درسني",
        variant: "default",
      });
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <div className="mb-10 text-center">
              <h1 className="text-3xl font-bold mb-4">انضم إلى فريق معلمي منصة درسني</h1>
              <div className="flex justify-center">
                <UserPlus className="h-12 w-12 text-brand-blue mb-4" />
              </div>
              <p className="text-gray-600 text-lg mb-2">
                انضم إلينا واستفد من فرصة تدريس آلاف الطلاب في مختلف المراحل التعليمية
              </p>
              <p className="text-gray-500">
                أكمل النموذج أدناه وسنتواصل معك في أقرب وقت
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  <h2 className="text-xl font-semibold">المعلومات الشخصية</h2>
                  <Separator className="my-2" />
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="firstName">الاسم الأول</Label>
                      <Input id="firstName" placeholder="أدخل الاسم الأول" required />
                    </div>
                    
                    <div>
                      <Label htmlFor="lastName">اسم العائلة</Label>
                      <Input id="lastName" placeholder="أدخل اسم العائلة" required />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="email">البريد الإلكتروني</Label>
                    <Input id="email" type="email" placeholder="example@example.com" required />
                  </div>
                  
                  <div>
                    <Label htmlFor="phone">رقم الهاتف</Label>
                    <Input id="phone" type="tel" placeholder="+965 XXXX XXXX" dir="ltr" required />
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h2 className="text-xl font-semibold mt-8">المؤهلات والخبرات</h2>
                  <Separator className="my-2" />
                  
                  <div>
                    <Label htmlFor="education">المؤهل العلمي</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="اختر المؤهل العلمي" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="bachelor">بكالوريوس</SelectItem>
                        <SelectItem value="master">ماجستير</SelectItem>
                        <SelectItem value="phd">دكتوراه</SelectItem>
                        <SelectItem value="other">مؤهل آخر</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <Label htmlFor="subjects">المواد التي ترغب في تدريسها</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="اختر المادة" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="math">الرياضيات</SelectItem>
                        <SelectItem value="science">العلوم</SelectItem>
                        <SelectItem value="physics">الفيزياء</SelectItem>
                        <SelectItem value="chemistry">الكيمياء</SelectItem>
                        <SelectItem value="biology">الأحياء</SelectItem>
                        <SelectItem value="arabic">اللغة العربية</SelectItem>
                        <SelectItem value="english">اللغة الإنجليزية</SelectItem>
                        <SelectItem value="computer">الحاسب الآلي</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <Label htmlFor="experience">سنوات الخبرة</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="اختر سنوات الخبرة" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="0-1">أقل من سنة</SelectItem>
                        <SelectItem value="1-3">1-3 سنوات</SelectItem>
                        <SelectItem value="3-5">3-5 سنوات</SelectItem>
                        <SelectItem value="5-10">5-10 سنوات</SelectItem>
                        <SelectItem value="10+">أكثر من 10 سنوات</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <Label htmlFor="bio">نبذة تعريفية عن خبراتك في التدريس</Label>
                    <Textarea id="bio" rows={4} placeholder="أخبرنا عن خبراتك السابقة وإنجازاتك في مجال التدريس" />
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h2 className="text-xl font-semibold mt-8">معلومات إضافية</h2>
                  <Separator className="my-2" />
                  
                  <div>
                    <Label htmlFor="availability">أوقات التدريس المفضلة</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="اختر الوقت المفضل" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="morning">صباحاً (8 صباحاً - 12 ظهراً)</SelectItem>
                        <SelectItem value="afternoon">ظهراً (12 ظهراً - 4 عصراً)</SelectItem>
                        <SelectItem value="evening">مساءً (4 عصراً - 8 مساءً)</SelectItem>
                        <SelectItem value="night">ليلاً (8 مساءً - 12 ليلاً)</SelectItem>
                        <SelectItem value="flexible">مرن (قابل للتغيير)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <Label htmlFor="teaching_method">طريقة التدريس المفضلة</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="اختر طريقة التدريس" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="in_person">حضوري في منزل الطالب</SelectItem>
                        <SelectItem value="online">أونلاين</SelectItem>
                        <SelectItem value="both">كلاهما</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <Label htmlFor="how_know">كيف سمعت عنا؟</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="اختر" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="social_media">وسائل التواصل الاجتماعي</SelectItem>
                        <SelectItem value="friend">صديق</SelectItem>
                        <SelectItem value="search_engine">محرك بحث</SelectItem>
                        <SelectItem value="ad">إعلان</SelectItem>
                        <SelectItem value="other">أخرى</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-brand-blue hover:bg-brand-blue/90 mt-6" 
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "جاري الإرسال..." : "إرسال الطلب"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default JoinTeacher;
