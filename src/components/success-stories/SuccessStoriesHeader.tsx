
import { useLanguage } from '@/contexts/LanguageContext';

interface SuccessStoriesHeaderProps {
  title: string;
  description: string;
}

export const SuccessStoriesHeader = ({ title, description }: SuccessStoriesHeaderProps) => {
  const { language } = useLanguage();

  return (
    <div className="bg-gradient-to-l from-brand-blue/90 to-brand-blue py-12 px-6 text-white">
      <div className="container mx-auto max-w-6xl text-center">
        <h1 className="text-4xl font-bold mb-4">{title}</h1>
        <p className="text-xl opacity-90 max-w-3xl mx-auto">
          {description}
        </p>
      </div>
    </div>
  );
};
