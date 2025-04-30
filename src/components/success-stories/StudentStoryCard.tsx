
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Quote, Award, TrendingUp } from 'lucide-react';

export interface StudentStory {
  id: number;
  name: string;
  testimonial: string;
  image: string;
  subject: string;
  improvement: string;
  achievement: string;
}

interface StudentStoryCardProps {
  story: StudentStory;
}

export const StudentStoryCard = ({ story }: StudentStoryCardProps) => {
  return (
    <Card key={story.id} className="overflow-hidden">
      <div className="relative">
        <img 
          src={story.image} 
          alt={story.name} 
          className="w-full h-56 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6 text-white">
          <h3 className="text-xl font-bold">{story.name}</h3>
          <p className="text-sm opacity-80">{story.subject}</p>
        </div>
      </div>
      <CardContent className="p-6">
        <div className="flex items-start mb-4">
          <Quote className="h-6 w-6 text-brand-blue mr-2 flex-shrink-0 mt-1" />
          <p className="text-gray-700 leading-relaxed">{story.testimonial}</p>
        </div>
        <div className="flex flex-wrap gap-2 mt-6">
          <Badge className="bg-green-100 text-green-800 hover:bg-green-200">
            <TrendingUp className="h-3.5 w-3.5 ml-1" />
            {story.improvement}
          </Badge>
          <Badge className="bg-brand-blue/10 text-brand-blue hover:bg-brand-blue/20">
            <Award className="h-3.5 w-3.5 ml-1" />
            {story.achievement}
          </Badge>
        </div>
      </CardContent>
    </Card>
  );
};
