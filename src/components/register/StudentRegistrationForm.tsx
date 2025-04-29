
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { sendEmail } from "@/utils/email";
import { useToast } from "@/components/ui/use-toast";
import { useNavigate } from "react-router-dom";

export type StudentFormData = {
  name: string;
  email: string;
  phone: string;
  grade: string;
  subject: string;
  lessonType: string;
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
