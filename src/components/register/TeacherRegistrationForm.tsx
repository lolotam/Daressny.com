
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { sendEmail } from "@/utils/email";
import { useToast } from "@/components/ui/use-toast";
import { useNavigate } from "react-router-dom";

export type TeacherFormData = {
  name: string;
  email: string;
  phone: string;
  subjects: string;
  education: string;
  experience: string;
  bio: string;
};

type TeacherRegistrationFormProps = {
  isSubmitting: boolean;
  setIsSubmitting: (value: boolean) => void;
};

export const TeacherRegistrationForm = ({ isSubmitting, setIsSubmitting }: TeacherRegistrationFormProps) => {
  const { toast } = useToast();
  const navigate = useNavigate();
  
  // Teacher form fields
  const [teacherName, setTeacherName] = useState("");
  const [teacherEmail, setTeacherEmail] = useState("");
  const [teacherPhone, setTeacherPhone] = useState("");
  const [teacherSubjects, setTeacherSubjects] = useState("");
  const [teacherEducation, setTeacherEducation] = useState("");
  const [teacherExperience, setTeacherExperience] = useState("");
  const [teacherBio, setTeacherBio] = useState("");

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
  );
};
