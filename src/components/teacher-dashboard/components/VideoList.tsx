
interface VideoListProps {
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

export const VideoList = ({ videos }: VideoListProps) => {
  if (videos.length === 0) {
    return (
      <div className="py-16 text-center text-gray-500">
        لا توجد فيديوهات مطابقة للفئة المحددة
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {videos.map(video => (
        <div key={video.id} className="flex gap-4 border rounded-lg p-3 bg-white">
          <div className="relative w-40 h-24">
            <img 
              src={video.thumbnail} 
              alt={video.title}
              className="w-full h-full object-cover rounded-md"
            />
            <div className="absolute bottom-1 left-1 bg-black bg-opacity-70 text-white px-2 py-1 rounded-md text-xs">
              {video.duration}
            </div>
          </div>
          <div className="flex-grow">
            <h4 className="font-semibold mb-1">{video.title}</h4>
            <p className="text-sm text-gray-500 mb-2">{video.description}</p>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-4 text-sm text-gray-500">
                <span>{video.views} مشاهدة</span>
                <span>تاريخ الرفع: {new Date(video.date).toLocaleDateString('ar-EG')}</span>
              </div>
              <div className="flex gap-1">
                {video.categories.map((cat, index) => (
                  <span 
                    key={index}
                    className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full flex items-center"
                  >
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
