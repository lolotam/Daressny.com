
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';

export interface TeacherStory {
  id: number;
  name: string;
  testimonial: string;
  image: string;
  subject: string;
  students: string;
  experience: string;
}

interface TeacherStoryCardProps {
  story: TeacherStory;
}

export const TeacherStoryCard = ({ story }: TeacherStoryCardProps) => {
  return (
    <Card className="overflow-hidden flex flex-col md:flex-row">
      <div className="md:w-1/3">
        <img 
          src={story.image} 
          alt={story.name} 
          className="w-full h-full object-cover"
        />
      </div>
      <CardContent className="p-6 md:w-2/3 flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-xl font-bold">{story.name}</h3>
              <p className="text-sm text-gray-600">{story.subject}</p>
            </div>
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="h-4 w-4 fill-brand-gold text-brand-gold" />
              ))}
            </div>
          </div>
          <div className="flex items-start mb-4">
            <Quote className="h-6 w-6 text-brand-blue mr-2 flex-shrink-0 mt-1" />
            <p className="text-gray-700 leading-relaxed">{story.testimonial}</p>
          </div>
        </div>
        <div className="flex flex-wrap gap-2 mt-4">
          <Badge className="bg-brand-blue/10 text-brand-blue hover:bg-brand-blue/20">
            {story.students}
          </Badge>
          <Badge className="bg-gray-100 text-gray-800 hover:bg-gray-200">
            {story.experience}
          </Badge>
        </div>
      </CardContent>
    </Card>
  );
};
