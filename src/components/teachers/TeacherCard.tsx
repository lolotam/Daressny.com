
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

interface TeacherCardProps {
  id: number;
  name: string;
  image: string;
  subjects: string[];
  rating: number;
  reviewsCount: number;
  hourlyRate: number;
  location: string;
  availability: string;
}

export const TeacherCard = ({
  name,
  image,
  subjects,
  rating,
  reviewsCount,
  hourlyRate,
  location,
  availability,
}: TeacherCardProps) => {
  const { currencySymbol } = useLanguage();

  return (
    <Card className="overflow-hidden hover:shadow-md transition-shadow duration-300">
      <div className="aspect-square overflow-hidden relative">
        <img
          src={image || "https://via.placeholder.com/300"}
          alt={`صورة ${name}`}
          className="w-full h-full object-cover"
        />
      </div>
      
      <CardContent className="pt-4">
        <h3 className="font-bold text-xl mb-1">{name}</h3>
        <p className="text-sm text-gray-600 mb-1">
          {subjects.join(" • ")}
        </p>
        <div className="flex items-center gap-2 mb-3">
          <div className="flex items-center">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="w-4 h-4 text-yellow-500 fill-current"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
            </svg>
            <span className="text-sm font-medium ms-1">{rating.toFixed(1)}</span>
          </div>
          <span className="text-sm text-gray-500">({reviewsCount} تقييم)</span>
        </div>
        <p className="font-bold text-lg text-brand-blue">
          {hourlyRate} {currencySymbol}/ساعة
        </p>
        <div className="text-sm text-gray-600 mt-2">
          <p className="flex items-center gap-1.5">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-gray-400"
            >
              <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            {location}
          </p>
          <p className="flex items-center gap-1.5 mt-1">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-gray-400"
            >
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
            {availability}
          </p>
        </div>
      </CardContent>

      <CardFooter>
        <Button className="w-full bg-brand-blue hover:bg-brand-blue/90">
          عرض الملف الشخصي
        </Button>
      </CardFooter>
    </Card>
  );
};
