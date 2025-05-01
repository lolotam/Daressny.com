
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";
import { validatePasswordMatch, getAuthErrorMessage } from "@/utils/auth-helpers";
import { registerTeacher } from "@/utils/teacher-helpers";

export const useTeacherRegistration = (setIsSubmitting: (value: boolean) => void, navigate: any) => {
  const { toast } = useToast();
  
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
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Form submission handler for teacher registration
  const handleTeacherSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    
    // Reset error message
    setErrorMessage(null);
    
    // Validate passwords
    if (!validatePasswordMatch(password, confirmPassword)) {
      toast({
        title: "خطأ في التسجيل",
        description: "كلمتا المرور غير متطابقتين",
        variant: "destructive",
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      await registerTeacher(
        teacherEmail,
        password,
        teacherName,
        teacherPhone,
        {
          subjects: teacherSubjects,
          education: teacherEducation,
          experience: teacherExperience,
          bio: teacherBio
        }
      );
      
      toast({
        title: "تم التسجيل بنجاح",
        description: "تم إرسال رسالة تأكيد إلى بريدك الإلكتروني. يرجى التحقق من بريدك لإكمال عملية التسجيل.",
      });
      
      // Direct to login page
      navigate("/login");
    } catch (error: any) {
      console.error("Error in teacher registration:", error);
      
      const errorMsg = getAuthErrorMessage(error);
      setErrorMessage(errorMsg);
      
      toast({
        title: "خطأ في التسجيل",
        description: errorMsg,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    teacherName,
    setTeacherName,
    teacherEmail,
    setTeacherEmail,
    teacherPhone,
    setTeacherPhone,
    teacherSubjects,
    setTeacherSubjects,
    teacherEducation,
    setTeacherEducation,
    teacherExperience,
    setTeacherExperience,
    teacherBio,
    setTeacherBio,
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
    errorMessage,
    setErrorMessage,
    handleTeacherSubmit
  };
};
