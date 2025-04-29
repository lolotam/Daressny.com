
import { UserPlus } from "lucide-react";

export const JoinTeacherHeader = () => {
  return (
    <div className="mb-10 text-center">
      <h1 className="text-3xl font-bold mb-4">انضم إلى فريق معلمي منصة درسني</h1>
      <div className="flex justify-center">
        <UserPlus className="h-12 w-12 text-brand-blue mb-4" />
      </div>
      <p className="text-gray-600 text-lg mb-2">
        انضم إلينا واستفد من فرصة تدريس آلاف الطلاب في مختلف المراحل التعليمية
      </p>
      <p className="text-gray-500">
        أكمل النموذج أدناه وسنتواصل معك في أقرب وقت
      </p>
    </div>
  );
};
