
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";
import { validatePasswordMatch, registerStudent, getAuthErrorMessage } from "@/utils/auth-helpers";

export const useStudentRegistration = (setIsSubmitting: (value: boolean) => void) => {
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
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Form submission handler for student registration
  const handleStudentSubmit = async (event: React.FormEvent) => {
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
      await registerStudent(
        studentEmail,
        password,
        studentName,
        studentPhone
      );
      
      toast({
        title: "تم التسجيل بنجاح",
        description: "تم إرسال رسالة تأكيد إلى بريدك الإلكتروني. يرجى التحقق من بريدك لإكمال عملية التسجيل.",
      });
      
      navigate("/login");
    } catch (error: any) {
      console.error("Error in student registration:", error);
      
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
    studentName,
    setStudentName,
    studentEmail,
    setStudentEmail,
    studentPhone,
    setStudentPhone,
    studentGrade,
    setStudentGrade,
    studentSubject,
    setStudentSubject,
    studentLessonType,
    setStudentLessonType,
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
    errorMessage,
    handleStudentSubmit
  };
};
