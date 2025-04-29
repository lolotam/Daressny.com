
import { Button } from "@/components/ui/button";

interface EmptyStateProps {
  onReset: () => void;
}

export const EmptyState = ({ onReset }: EmptyStateProps) => {
  return (
    <div className="text-center py-12">
      <h3 className="text-lg font-semibold text-gray-900 mb-2">لم يتم العثور على معلمين</h3>
      <p className="text-gray-600 mb-6">جرب تغيير معايير البحث أو التصفية</p>
      <Button onClick={onReset}>
        إعادة ضبط البحث
      </Button>
    </div>
  );
};
