
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export interface TeacherCardProps {
  id: number;
  name: string;
  subject: string;
  rating: number;
  reviews: number;
  hourlyRate: number;
  experience: string;
  image: string;
}

export const TeacherCard = ({ id, name, subject, rating, reviews, hourlyRate, experience, image }: TeacherCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-md transition-shadow">
      <div className="relative">
        <img 
          src={image} 
          alt={`صورة ${name}`}
          className="w-full h-52 object-cover" 
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
          <div className="flex items-center gap-1 text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.799-2.031c-.784-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span>{rating}</span>
            <span className="text-sm">({reviews} تقييم)</span>
          </div>
        </div>
      </div>
      <div className="p-6">
        <h3 className="font-bold text-lg mb-1">{name}</h3>
        <p className="text-gray-600 mb-2">{subject}</p>
        <p className="text-gray-500 mb-3 text-sm">خبرة: {experience}</p>
        <div className="flex justify-between items-center">
          <span className="text-brand-blue font-bold">{hourlyRate} ريال/ساعة</span>
          <Button asChild variant="outline" size="sm">
            <Link to={`/teachers/${id}`}>عرض الملف</Link>
          </Button>
        </div>
      </div>
    </Card>
  );
};
