
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

interface StoriesCallToActionProps {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}

export const StoriesCallToAction = ({ title, description, buttonText, buttonLink }: StoriesCallToActionProps) => {
  return (
    <div className="bg-gradient-to-r from-brand-blue to-brand-blue/80 rounded-lg p-8 text-center mt-16 text-white">
      <h3 className="text-2xl font-bold mb-3">{title}</h3>
      <p className="mb-6 opacity-90 max-w-2xl mx-auto">
        {description}
      </p>
      <Button asChild className="bg-white text-brand-blue hover:bg-gray-100 px-6 py-3 rounded-md font-medium transition-colors">
        <Link to={buttonLink}>
          {buttonText}
        </Link>
      </Button>
    </div>
  );
};
