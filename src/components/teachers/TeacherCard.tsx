
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import { TeacherImage } from "./TeacherImage";
import { TeacherRating } from "./TeacherRating";
import { TeacherDetails } from "./TeacherDetails";
import { TeacherContactButton } from "./TeacherContactButton";

interface TeacherCardProps {
  id: number;
  name: string;
  image: string;
  subjects: string[];
  rating: number;
  reviewsCount: number;
  hourlyRate?: number;
  hourlyRateRanges?: {
    elementary: number;
    middle: number;
    high: number;
    university: number;
  };
  location: string;
  availability: string;
}

export const TeacherCard = ({
  id,
  name,
  image,
  subjects,
  rating,
  reviewsCount,
  location,
  availability,
}: TeacherCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-md transition-shadow duration-300">
      <TeacherImage image={image} name={name} />
      
      <CardContent className="pt-4">
        <h3 className="font-bold text-xl mb-1">{name}</h3>
        <p className="text-sm text-gray-600 mb-1">
          {subjects.join(" • ")}
        </p>
        
        <div className="mb-3">
          <TeacherRating rating={rating} reviewsCount={reviewsCount} />
        </div>
        
        <div className="mt-2">
          <TeacherDetails location={location} availability={availability} />
        </div>
      </CardContent>

      <CardFooter>
        <TeacherContactButton id={id} />
      </CardFooter>
    </Card>
  );
};
