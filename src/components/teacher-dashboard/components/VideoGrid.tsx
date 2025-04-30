
import { Tag } from "lucide-react";

interface VideoGridProps {
  videos: {
    id: number;
    title: string;
    description: string;
    thumbnail: string;
    duration: string;
    views: number;
    date: string;
    categories: string[];
  }[];
}

export const VideoGrid = ({ videos }: VideoGridProps) => {
  if (videos.length === 0) {
    return (
      <div className="py-16 text-center text-gray-500">
        لا توجد فيديوهات مطابقة للفئة المحددة
      </div>
    );
  }
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {videos.map(video => (
        <div key={video.id} className="bg-white rounded-lg overflow-hidden shadow-sm border">
          <div className="aspect-video relative">
            <img 
              src={video.thumbnail} 
              alt={video.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-2 left-2 bg-black bg-opacity-70 text-white px-2 py-1 rounded-md text-xs">
              {video.duration}
            </div>
          </div>
          <div className="p-4">
            <h4 className="font-semibold mb-1">{video.title}</h4>
            <p className="text-sm text-gray-500 mb-3">{video.description}</p>
            <div className="flex justify-between items-center">
              <div className="flex items-center text-sm text-gray-500">
                <span>{video.views} مشاهدة</span>
              </div>
              <div className="flex gap-1">
                {video.categories.map((cat, index) => (
                  <span 
                    key={index}
                    className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full flex items-center"
                  >
                    <Tag className="w-3 h-3 ml-1" />
                    {cat}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
