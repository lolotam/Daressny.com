
import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { useSearchParams, Link } from "react-router-dom";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const Register = () => {
  const [searchParams] = useSearchParams();
  const initialTab = searchParams.get("role") === "teacher" ? "teacher" : "student";
  const [selectedTab, setSelectedTab] = useState(initialTab);

  // Form submission handler (just for demonstration)
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    alert("تم إرسال بيانات التسجيل بنجاح!");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-sm p-8">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold mb-4">انضم إلى منصة درسني</h1>
              <p className="text-gray-600">
                سجل الآن وابدأ رحلتك التعليمية المتميزة!
              </p>
            </div>

            <Tabs defaultValue={selectedTab} className="mb-8" onValueChange={setSelectedTab}>
              <TabsList className="grid grid-cols-2 mb-8">
                <TabsTrigger value="student">تسجيل كطالب</TabsTrigger>
                <TabsTrigger value="teacher">تسجيل كمعلم</TabsTrigger>
              </TabsList>

              <TabsContent value="student">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 gap-6">
                    <div>
                      <Label htmlFor="student-name">الاسم الكامل</Label>
                      <Input id="student-name" required />
                    </div>

                    <div>
                      <Label htmlFor="student-email">البريد الإلكتروني</Label>
                      <Input id="student-email" type="email" required />
                    </div>

                    <div>
                      <Label htmlFor="student-phone">رقم الهاتف</Label>
                      <Input id="student-phone" type="tel" dir="ltr" required />
                    </div>

                    <div>
                      <Label htmlFor="student-grade">الصف الدراسي</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="اختر الصف الدراسي" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="primary-1">الصف الأول الابتدائي</SelectItem>
                          <SelectItem value="primary-2">الصف الثاني الابتدائي</SelectItem>
                          <SelectItem value="primary-3">الصف الثالث الابتدائي</SelectItem>
                          <SelectItem value="primary-4">الصف الرابع الابتدائي</SelectItem>
                          <SelectItem value="primary-5">الصف الخامس الابتدائي</SelectItem>
                          <SelectItem value="primary-6">الصف السادس الابتدائي</SelectItem>
                          <SelectItem value="middle-1">الصف الأول المتوسط</SelectItem>
                          <SelectItem value="middle-2">الصف الثاني المتوسط</SelectItem>
                          <SelectItem value="middle-3">الصف الثالث المتوسط</SelectItem>
                          <SelectItem value="high-1">الصف الأول الثانوي</SelectItem>
                          <SelectItem value="high-2">الصف الثاني الثانوي</SelectItem>
                          <SelectItem value="high-3">الصف الثالث الثانوي</SelectItem>
                          <SelectItem value="university">المرحلة الجامعية</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="student-subjects">المواد المطلوبة</Label>
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
                      <Label htmlFor="student-lesson-type">نوع الدرس</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="اختر نوع الدرس" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="home">دروس في المنزل</SelectItem>
                          <SelectItem value="online">دروس أونلاين</SelectItem>
                          <SelectItem value="group">دروس مجموعات</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="student-password">كلمة المرور</Label>
                      <Input id="student-password" type="password" required />
                    </div>

                    <div>
                      <Label htmlFor="student-confirm-password">تأكيد كلمة المرور</Label>
                      <Input id="student-confirm-password" type="password" required />
                    </div>
                  </div>

                  <Button type="submit" className="w-full bg-brand-blue hover:bg-brand-blue/90">
                    إنشاء حساب طالب
                  </Button>
                </form>
              </TabsContent>

              <TabsContent value="teacher">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 gap-6">
                    <div>
                      <Label htmlFor="teacher-name">الاسم الكامل</Label>
                      <Input id="teacher-name" required />
                    </div>

                    <div>
                      <Label htmlFor="teacher-email">البريد الإلكتروني</Label>
                      <Input id="teacher-email" type="email" required />
                    </div>

                    <div>
                      <Label htmlFor="teacher-phone">رقم الهاتف</Label>
                      <Input id="teacher-phone" type="tel" dir="ltr" required />
                    </div>

                    <div>
                      <Label htmlFor="teacher-subjects">المواد التي تدرسها</Label>
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
                      <Label htmlFor="teacher-education">الشهادات والمؤهلات</Label>
                      <Input id="teacher-education" required />
                    </div>

                    <div>
                      <Label htmlFor="teacher-experience">سنوات الخبرة</Label>
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
                      <Label htmlFor="teacher-bio">نبذة تعريفية</Label>
                      <Textarea id="teacher-bio" rows={5} required />
                    </div>

                    <div>
                      <Label htmlFor="teacher-photo">صورة شخصية (اختياري)</Label>
                      <Input id="teacher-photo" type="file" />
                    </div>

                    <div>
                      <Label htmlFor="teacher-password">كلمة المرور</Label>
                      <Input id="teacher-password" type="password" required />
                    </div>

                    <div>
                      <Label htmlFor="teacher-confirm-password">تأكيد كلمة المرور</Label>
                      <Input id="teacher-confirm-password" type="password" required />
                    </div>
                  </div>

                  <Button type="submit" className="w-full bg-brand-blue hover:bg-brand-blue/90">
                    إنشاء حساب معلم
                  </Button>
                </form>
              </TabsContent>
            </Tabs>

            <div className="text-center mt-6">
              <p className="text-gray-600">
                لديك حساب بالفعل؟{" "}
                <Link to="/login" className="text-brand-blue hover:underline">
                  تسجيل الدخول
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

export default Register;
