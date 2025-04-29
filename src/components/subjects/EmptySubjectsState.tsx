
import { Button } from "@/components/ui/button";
import { Book } from "lucide-react";

interface EmptySubjectsStateProps {
  resetFilters: () => void;
}

export const EmptySubjectsState = ({ resetFilters }: EmptySubjectsStateProps) => {
  return (
    <div className="text-center py-12">
      <Book className="mx-auto h-16 w-16 text-gray-300" />
      <h3 className="mt-4 text-xl font-medium text-gray-700">لم يتم العثور على مواد دراسية</h3>
      <p className="mt-2 text-gray-500">
        جرب تغيير معايير البحث أو الفلترة للعثور على المادة المطلوبة.
      </p>
      <Button 
        variant="outline"
        onClick={resetFilters}
        className="mt-4 border-brand-blue text-brand-blue hover:bg-brand-blue/10"
      >
        إعادة ضبط الفلترة
      </Button>
    </div>
  );
};
