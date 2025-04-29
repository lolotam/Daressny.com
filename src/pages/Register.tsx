
import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { useSearchParams, Link, useNavigate } from "react-router-dom";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { sendEmail } from "@/utils/email";
import { useToast } from "@/components/ui/use-toast";

const Register = () => {
  const [searchParams] = useSearchParams();
  const initialTab = searchParams.get("role") === "teacher" ? "teacher" : "student";
  const [selectedTab, setSelectedTab] = useState(initialTab);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const { toast } = useToast();
  const navigate = useNavigate();
  
  // Student form fields
  const [studentName, setStudentName] = useState("");
  const [studentEmail, setStudentEmail] = useState("");
  const [studentPhone, setStudentPhone] = useState("");
  const [studentGrade, setStudentGrade] = useState("");
  const [studentSubject, setStudentSubject] = useState("");
  const [studentLessonType, setStudentLessonType] = useState("");
  
  // Teacher form fields
  const [teacherName, setTeacherName] = useState("");
  const [teacherEmail, setTeacherEmail] = useState("");
  const [teacherPhone, setTeacherPhone] = useState("");
  const [teacherSubjects, setTeacherSubjects] = useState("");
  const [teacherEducation, setTeacherEducation] = useState("");
  const [teacherExperience, setTeacherExperience] = useState("");
  const [teacherBio, setTeacherBio] = useState("");

  // Form submission handler for student registration
  const handleStudentSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsSubmitting(true);
    
    try {
      const { success, error } = await sendEmail({
        subject: "تسجيل طالب جديد",
        html: `
          <h2>بيانات الطالب الجديد</h2>
          <p><strong>الاسم:</strong> ${studentName}</p>
          <p><strong>البريد الإلكتروني:</strong> ${studentEmail}</p>
          <p><strong>رقم الهاتف:</strong> ${studentPhone}</p>
          <p><strong>الصف الدراسي:</strong> ${studentGrade}</p>
          <p><strong>المادة المطلوبة:</strong> ${studentSubject}</p>
          <p><strong>نوع الدرس:</strong> ${studentLessonType}</p>
        `,
        name: studentName,
        email: studentEmail,
        phone: studentPhone,
        type: "student",
        details: {
          grade: studentGrade,
          subject: studentSubject,
          lessonType: studentLessonType
        }
      });
      
      if (success) {
        toast({
          title: "تم التسجيل بنجاح",
          description: "شكراً لتسجيلك! سيتم التواصل معك قريباً",
          variant: "default",
        });
        navigate("/");
      } else {
        throw new Error(error || "حدث خطأ أثناء التسجيل");
      }
    } catch (error: any) {
      toast({
        title: "خطأ في التسجيل",
        description: error.message || "حدث خطأ أثناء التسجيل، يرجى المحاولة مرة أخرى",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  // Form submission handler for teacher registration
  const handleTeacherSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsSubmitting(true);
    
    try {
      const { success, error } = await sendEmail({
        subject: "تسجيل معلم جديد",
        html: `
          <h2>بيانات المعلم الجديد</h2>
          <p><strong>الاسم:</strong> ${teacherName}</p>
          <p><strong>البريد الإلكتروني:</strong> ${teacherEmail}</p>
          <p><strong>رقم الهاتف:</strong> ${teacherPhone}</p>
          <p><strong>المواد التي يدرسها:</strong> ${teacherSubjects}</p>
          <p><strong>الشهادات والمؤهلات:</strong> ${teacherEducation}</p>
          <p><strong>سنوات الخبرة:</strong> ${teacherExperience}</p>
          <p><strong>نبذة تعريفية:</strong> ${teacherBio}</p>
        `,
        name: teacherName,
        email: teacherEmail,
        phone: teacherPhone,
        type: "teacher",
        details: {
          subjects: teacherSubjects,
          education: teacherEducation,
          experience: teacherExperience,
          bio: teacherBio
        }
      });
      
      if (success) {
        toast({
          title: "تم التسجيل بنجاح",
          description: "شكراً لتسجيلك! سيتم التواصل معك قريباً",
          variant: "default",
        });
        navigate("/");
      } else {
        throw new Error(error || "حدث خطأ أثناء التسجيل");
      }
    } catch (error: any) {
      toast({
        title: "خطأ في التسجيل",
        description: error.message || "حدث خطأ أثناء التسجيل، يرجى المحاولة مرة أخرى",
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
                <form onSubmit={handleStudentSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 gap-6">
                    <div>
                      <Label htmlFor="student-name">الاسم الكامل</Label>
                      <Input 
                        id="student-name" 
                        value={studentName} 
                        onChange={(e) => setStudentName(e.target.value)} 
                        required 
                      />
                    </div>

                    <div>
                      <Label htmlFor="student-email">البريد الإلكتروني</Label>
                      <Input 
                        id="student-email" 
                        type="email" 
                        value={studentEmail} 
                        onChange={(e) => setStudentEmail(e.target.value)} 
                        required 
                      />
                    </div>

                    <div>
                      <Label htmlFor="student-phone">رقم الهاتف</Label>
                      <Input 
                        id="student-phone" 
                        type="tel" 
                        dir="ltr" 
                        value={studentPhone} 
                        onChange={(e) => setStudentPhone(e.target.value)} 
                        required 
                      />
                    </div>

                    <div>
                      <Label htmlFor="student-grade">الصف الدراسي</Label>
                      <Select value={studentGrade} onValueChange={setStudentGrade}>
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
                      <Select value={studentSubject} onValueChange={setStudentSubject}>
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
                      <Select value={studentLessonType} onValueChange={setStudentLessonType}>
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
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-brand-blue hover:bg-brand-blue/90"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "جاري التسجيل..." : "إنشاء حساب طالب"}
                  </Button>
                </form>
              </TabsContent>

              <TabsContent value="teacher">
                <form onSubmit={handleTeacherSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 gap-6">
                    <div>
                      <Label htmlFor="teacher-name">الاسم الكامل</Label>
                      <Input 
                        id="teacher-name" 
                        value={teacherName} 
                        onChange={(e) => setTeacherName(e.target.value)} 
                        required 
                      />
                    </div>

                    <div>
                      <Label htmlFor="teacher-email">البريد الإلكتروني</Label>
                      <Input 
                        id="teacher-email" 
                        type="email" 
                        value={teacherEmail} 
                        onChange={(e) => setTeacherEmail(e.target.value)} 
                        required 
                      />
                    </div>

                    <div>
                      <Label htmlFor="teacher-phone">رقم الهاتف</Label>
                      <Input 
                        id="teacher-phone" 
                        type="tel" 
                        dir="ltr" 
                        value={teacherPhone} 
                        onChange={(e) => setTeacherPhone(e.target.value)} 
                        required 
                      />
                    </div>

                    <div>
                      <Label htmlFor="teacher-subjects">المواد التي تدرسها</Label>
                      <Select value={teacherSubjects} onValueChange={setTeacherSubjects}>
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
                      <Input 
                        id="teacher-education" 
                        value={teacherEducation} 
                        onChange={(e) => setTeacherEducation(e.target.value)} 
                        required 
                      />
                    </div>

                    <div>
                      <Label htmlFor="teacher-experience">سنوات الخبرة</Label>
                      <Select value={teacherExperience} onValueChange={setTeacherExperience}>
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
                      <Textarea 
                        id="teacher-bio" 
                        rows={5} 
                        value={teacherBio} 
                        onChange={(e) => setTeacherBio(e.target.value)} 
                        required 
                      />
                    </div>
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-brand-blue hover:bg-brand-blue/90"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "جاري التسجيل..." : "إنشاء حساب معلم"}
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
