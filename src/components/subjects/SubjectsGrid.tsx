
import { SubjectCard } from "./SubjectCard";

interface SubjectType {
  id: number;
  name: string;
  icon: React.ReactNode;
  levels: string[];
  teachingMethods: string[];
}

interface SubjectsGridProps {
  subjects: SubjectType[];
}

export const SubjectsGrid = ({ subjects }: SubjectsGridProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {subjects.map((subject) => (
        <SubjectCard
          key={subject.id}
          id={subject.id}
          name={subject.name}
          icon={subject.icon}
          levels={subject.levels}
          teachingMethods={subject.teachingMethods}
        />
      ))}
    </div>
  );
};
