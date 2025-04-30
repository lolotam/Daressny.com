
import { StudentStory, StudentStoryCard } from './StudentStoryCard';

interface StudentStoriesGridProps {
  stories: StudentStory[];
}

export const StudentStoriesGrid = ({ stories }: StudentStoriesGridProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {stories.map(story => (
        <StudentStoryCard key={story.id} story={story} />
      ))}
    </div>
  );
};
