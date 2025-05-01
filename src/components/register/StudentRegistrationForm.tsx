
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";

export type StudentFormData = {
  name: string;
  email: string;
  phone: string;
  grade: string;
  subject: string;
  lessonType: string;
  password: string;
};

type StudentRegistrationFormProps = {
  isSubmitting: boolean;
  setIsSubmitting: (value: boolean) => void;
};

export const StudentRegistrationForm = ({ isSubmitting, setIsSubmitting }: StudentRegistrationFormProps) => {
  const { toast } = useToast();
  const navigate = useNavigate();
  
  // Student form fields
  const [studentName, setStudentName] = useState("");
  const [studentEmail, setStudentEmail] = useState("");
  const [studentPhone, setStudentPhone] = useState("");
  const [studentGrade, setStudentGrade] = useState("");
  const [studentSubject, setStudentSubject] = useState("");
  const [studentLessonType, setStudentLessonType] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // Form submission handler for student registration
  const handleStudentSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    
    // Validate passwords
    if (password !== confirmPassword) {
      toast({
        title: "خطأ في التسجيل",
        description: "كلمتا المرور غير متطابقتين",
        variant: "destructive",
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Register user with Supabase Auth
      const { data, error } = await supabase.auth.signUp({
        email: studentEmail,
        password: password,
        options: {
          data: {
            full_name: studentName,
            user_type: 'student'
          }
        }
      });
      
      if (error) throw error;
      
      // Store additional profile information
      const { error: profileError } = await supabase
        .from('profiles')
        .update({
          phone_number: studentPhone,
          full_name: studentName
        })
        .eq('id', data.user?.id);
        
      if (profileError) throw profileError;
      
      // Send verification email
      await supabase.functions.invoke("send-verification-email", {
        body: { 
          email: studentEmail,
          name: studentName,
          token: data.user?.id
        }
      });
      
      toast({
        title: "تم التسجيل بنجاح",
        description: "تم إرسال رسالة تأكيد إلى بريدك الإلكتروني. يرجى التحقق من بريدك لإكمال عملية التسجيل.",
      });
      
      navigate("/login");
    } catch (error: any) {
      console.error("Error in student registration:", error);
      
      let errorMessage = "حدث خطأ أثناء التسجيل، يرجى المحاولة مرة أخرى";
      
      if (error.message.includes("already registered")) {
        errorMessage = "البريد الإلكتروني مسجل بالفعل";
      }
      
      toast({
        title: "خطأ في التسجيل",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
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

        <div>
          <Label htmlFor="student-password">كلمة المرور</Label>
          <Input 
            id="student-password" 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
            minLength={8}
          />
        </div>

        <div>
          <Label htmlFor="student-confirm-password">تأكيد كلمة المرور</Label>
          <Input 
            id="student-confirm-password" 
            type="password" 
            value={confirmPassword} 
            onChange={(e) => setConfirmPassword(e.target.value)} 
            required 
            minLength={8}
          />
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
  );
};
