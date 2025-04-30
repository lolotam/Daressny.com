
import { TeacherStory, TeacherStoryCard } from './TeacherStoryCard';

interface TeacherStoriesGridProps {
  stories: TeacherStory[];
}

export const TeacherStoriesGrid = ({ stories }: TeacherStoriesGridProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {stories.map(story => (
        <TeacherStoryCard key={story.id} story={story} />
      ))}
    </div>
  );
};
