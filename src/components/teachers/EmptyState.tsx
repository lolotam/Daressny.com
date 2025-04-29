
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

interface EmptyStateProps {
  onReset: () => void;
}

export const EmptyState = ({ onReset }: EmptyStateProps) => {
  const { t } = useLanguage();
  
  return (
    <div className="text-center py-16 bg-white rounded-lg shadow-sm">
      <div className="max-w-md mx-auto">
        <h3 className="text-xl font-semibold mb-2">{t('noResults')}</h3>
        <p className="text-gray-500 mb-6">
          {t('tryDifferentSearch')}
        </p>
        <Button onClick={onReset} variant="outline" className="border-brand-blue text-brand-blue hover:bg-brand-blue/10">
          {t('resetFilters')}
        </Button>
      </div>
    </div>
  );
};
