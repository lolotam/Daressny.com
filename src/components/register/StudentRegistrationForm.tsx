
import { Button } from "@/components/ui/button";
import { useStudentRegistration } from "@/hooks/useStudentRegistration";
import { StudentFormFields } from "./student-form/StudentFormFields";
import { ErrorMessage } from "./student-form/ErrorMessage";

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
  const {
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
  } = useStudentRegistration(setIsSubmitting);

  return (
    <form onSubmit={handleStudentSubmit} className="space-y-6">
      <ErrorMessage message={errorMessage} />
      
      <StudentFormFields
        studentName={studentName}
        setStudentName={setStudentName}
        studentEmail={studentEmail}
        setStudentEmail={setStudentEmail}
        studentPhone={studentPhone}
        setStudentPhone={setStudentPhone}
        studentGrade={studentGrade}
        setStudentGrade={setStudentGrade}
        studentSubject={studentSubject}
        setStudentSubject={setStudentSubject}
        studentLessonType={studentLessonType}
        setStudentLessonType={setStudentLessonType}
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
        {isSubmitting ? "جاري التسجيل..." : "إنشاء حساب طالب"}
      </Button>
    </form>
  );
};
