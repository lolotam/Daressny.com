
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { PersonalInfoSection } from "./PersonalInfoSection";
import { QualificationsSection } from "./QualificationsSection";
import { AdditionalInfoSection } from "./AdditionalInfoSection";
import { useToast } from "@/hooks/use-toast";
import { sendEmail } from "@/utils/email";
import { useNavigate } from "react-router-dom";

export const TeacherJoinForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  // Form fields
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [education, setEducation] = useState("");
  const [subjects, setSubjects] = useState("");
  const [experience, setExperience] = useState("");
  const [bio, setBio] = useState("");
  const [availability, setAvailability] = useState("");
  const [teachingMethod, setTeachingMethod] = useState("");
  const [howKnow, setHowKnow] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const fullName = `${firstName} ${lastName}`.trim();
      
      const { success, error } = await sendEmail({
        subject: "طلب انضمام معلم جديد",
        html: `
          <h2>طلب انضمام معلم جديد</h2>
          <p><strong>الاسم:</strong> ${fullName}</p>
          <p><strong>البريد الإلكتروني:</strong> ${email}</p>
          <p><strong>رقم الهاتف:</strong> ${phone}</p>
          <p><strong>المؤهل العلمي:</strong> ${education}</p>
          <p><strong>المواد التي يرغب في تدريسها:</strong> ${subjects}</p>
          <p><strong>سنوات الخبرة:</strong> ${experience}</p>
          <p><strong>أوقات التدريس المفضلة:</strong> ${availability}</p>
          <p><strong>طريقة التدريس المفضلة:</strong> ${teachingMethod}</p>
          <p><strong>كيف سمع عنا:</strong> ${howKnow}</p>
          <h3>نبذة تعريفية:</h3>
          <p>${bio}</p>
        `,
        name: fullName,
        email: email,
        phone: phone,
        type: "teacher_join",
        details: {
          education,
          subjects,
          experience,
          bio,
          availability,
          teachingMethod,
          howKnow
        }
      });
      
      if (success) {
        toast({
          title: "تم استلام طلبك بنجاح",
          description: "سيتم التواصل معك قريباً من قبل فريق منصة درسني",
          variant: "default",
        });
        navigate("/");
      } else {
        throw new Error(error || "حدث خطأ أثناء إرسال الطلب");
      }
    } catch (error: any) {
      toast({
        title: "خطأ في إرسال الطلب",
        description: error.message || "حدث خطأ أثناء إرسال الطلب، يرجى المحاولة مرة أخرى",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <PersonalInfoSection
        firstName={firstName}
        setFirstName={setFirstName}
        lastName={lastName}
        setLastName={setLastName}
        email={email}
        setEmail={setEmail}
        phone={phone}
        setPhone={setPhone}
      />
      
      <QualificationsSection
        education={education}
        setEducation={setEducation}
        subjects={subjects}
        setSubjects={setSubjects}
        experience={experience}
        setExperience={setExperience}
        bio={bio}
        setBio={setBio}
      />
      
      <AdditionalInfoSection
        availability={availability}
        setAvailability={setAvailability}
        teachingMethod={teachingMethod}
        setTeachingMethod={setTeachingMethod}
        howKnow={howKnow}
        setHowKnow={setHowKnow}
      />

      <Button 
        type="submit" 
        className="w-full bg-brand-blue hover:bg-brand-blue/90 mt-6" 
        disabled={isSubmitting}
      >
        {isSubmitting ? "جاري الإرسال..." : "إرسال الطلب"}
      </Button>
    </form>
  );
};
