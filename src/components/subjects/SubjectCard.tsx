
import { Button } from "@/components/ui/button";
import { useNavigate } from 'react-router-dom';
import { useLanguage } from "@/contexts/LanguageContext";

interface SubjectCardProps {
  id: number;
  name: string;
  icon: React.ReactNode;
  levels: string[];
  teachingMethods: string[];
}

export const SubjectCard = ({ id, name, icon, levels, teachingMethods }: SubjectCardProps) => {
  const navigate = useNavigate();
  const { language } = useLanguage();

  const handleShowTeachers = () => {
    navigate(`/teachers?subject=${id}`);
  };

  return (
    <div
      className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 flex flex-col items-center text-center"
    >
      <div className="text-brand-blue mb-4">{icon}</div>
      <h3 className="font-semibold text-xl mb-4">{name}</h3>
      <div className="text-sm text-gray-500 mb-4">
        <p>
          {language === 'ar' ? 'المراحل: ' : 'Levels: '}
          {levels.join(', ')}
        </p>
        <p>
          {language === 'ar' ? 'الدراسة: ' : 'Teaching: '}
          {teachingMethods.join(', ')}
        </p>
      </div>
      <Button 
        className="bg-brand-blue hover:bg-brand-blue/90 mt-auto"
        onClick={handleShowTeachers}
      >
        {language === 'ar' ? 'عرض المعلمين' : 'View Teachers'}
      </Button>
    </div>
  );
};
