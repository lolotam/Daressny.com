
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";

export type TeacherFormData = {
  name: string;
  email: string;
  phone: string;
  subjects: string;
  education: string;
  experience: string;
  bio: string;
  password: string;
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
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // Form submission handler for teacher registration
  const handleTeacherSubmit = async (event: React.FormEvent) => {
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
        email: teacherEmail,
        password: password,
        options: {
          data: {
            full_name: teacherName,
            user_type: 'teacher'
          }
        }
      });
      
      if (error) throw error;
      
      // Store additional profile information
      const { error: profileError } = await supabase
        .from('profiles')
        .update({
          phone_number: teacherPhone,
          full_name: teacherName
        })
        .eq('id', data.user?.id);
        
      if (profileError) throw profileError;
      
      // Send verification email
      await supabase.functions.invoke("send-verification-email", {
        body: { 
          email: teacherEmail,
          name: teacherName,
          token: data.user?.id
        }
      });
      
      // Send additional teacher info to admin
      await supabase.functions.invoke("send-email", {
        body: {
          subject: "طلب انضمام معلم جديد",
          html: `
            <h2>طلب انضمام معلم جديد</h2>
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
        }
      });
      
      toast({
        title: "تم التسجيل بنجاح",
        description: "تم إرسال رسالة تأكيد إلى بريدك الإلكتروني. يرجى التحقق من بريدك لإكمال عملية التسجيل.",
      });
      
      navigate("/login");
    } catch (error: any) {
      console.error("Error in teacher registration:", error);
      
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

        <div>
          <Label htmlFor="teacher-password">كلمة المرور</Label>
          <Input 
            id="teacher-password" 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
            minLength={8}
          />
        </div>

        <div>
          <Label htmlFor="teacher-confirm-password">تأكيد كلمة المرور</Label>
          <Input 
            id="teacher-confirm-password" 
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
        {isSubmitting ? "جاري التسجيل..." : "إنشاء حساب معلم"}
      </Button>
    </form>
  );
};
