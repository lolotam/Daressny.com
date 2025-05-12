
import { Button } from "@/components/ui/button";
import { useTeacherRegistration } from "@/hooks/useTeacherRegistration";
import { TeacherFormFields } from "./teacher-form/TeacherFormFields";
import { ErrorMessage } from "./student-form/ErrorMessage";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

type TeacherRegistrationFormProps = {
  isSubmitting: boolean;
  setIsSubmitting: (value: boolean) => void;
};

export const TeacherRegistrationForm = ({ isSubmitting, setIsSubmitting }: TeacherRegistrationFormProps) => {
  const navigate = useNavigate();
  const { language } = useLanguage();
  
  const {
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
    handleTeacherSubmit
  } = useTeacherRegistration(setIsSubmitting, navigate);

  return (
    <form onSubmit={handleTeacherSubmit} className="space-y-6">
      <ErrorMessage message={errorMessage} />
      
      <TeacherFormFields
        teacherName={teacherName}
        setTeacherName={setTeacherName}
        teacherEmail={teacherEmail}
        setTeacherEmail={setTeacherEmail}
        teacherPhone={teacherPhone}
        setTeacherPhone={setTeacherPhone}
        teacherSubjects={teacherSubjects}
        setTeacherSubjects={setTeacherSubjects}
        teacherEducation={teacherEducation}
        setTeacherEducation={setTeacherEducation}
        teacherExperience={teacherExperience}
        setTeacherExperience={setTeacherExperience}
        teacherBio={teacherBio}
        setTeacherBio={setTeacherBio}
        password={password}
        setPassword={setPassword}
        confirmPassword={confirmPassword}
        setConfirmPassword={setConfirmPassword}
      />

      <Button 
        type="submit" 
        className="w-full bg-brand-blue hover:bg-brand-blue/90"
        disabled={isSubmitting}
      >
        {isSubmitting ? 
          (language === 'ar' ? "جاري التسجيل..." : "Registering...") : 
          (language === 'ar' ? "إنشاء حساب معلم" : "Create Teacher Account")
        }
      </Button>
    </form>
  );
};
