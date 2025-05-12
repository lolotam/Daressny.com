
import { Button } from "@/components/ui/button";
import { Book } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

interface EmptySubjectsStateProps {
  resetFilters: () => void;
}

export const EmptySubjectsState = ({ resetFilters }: EmptySubjectsStateProps) => {
  const { language } = useLanguage();
  
  return (
    <div className="text-center py-12">
      <Book className="mx-auto h-16 w-16 text-gray-300" />
      <h3 className="mt-4 text-xl font-medium text-gray-700">
        {language === 'ar' ? 'لم يتم العثور على مواد دراسية' : 'No subjects found'}
      </h3>
      <p className="mt-2 text-gray-500">
        {language === 'ar' 
          ? 'جرب تغيير معايير البحث أو الفلترة للعثور على المادة المطلوبة.'
          : 'Try changing your search or filter criteria to find the subject you are looking for.'}
      </p>
      <Button 
        variant="outline"
        onClick={resetFilters}
        className="mt-4 border-brand-blue text-brand-blue hover:bg-brand-blue/10"
      >
        {language === 'ar' ? 'إعادة ضبط الفلترة' : 'Reset Filters'}
      </Button>
    </div>
  );
};
