
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Play, Book } from "lucide-react";
import { useState } from "react";

export const VideoCarousel = () => {
  // Mock videos data - in a real app this would come from API
  const videos = [
    {
      id: 1,
      title: "مقدمة في حساب التفاضل",
      thumbnail: "/lovable-uploads/575dea3b-0c5a-414d-9814-28b08e187acb.png",
      duration: "45:20",
      views: 256,
      category: "تفاضل وتكامل"
    },
    {
      id: 2,
      title: "حل معادلات الدرجة الثانية",
      thumbnail: "/lovable-uploads/804f95f7-2838-49f1-82f1-960f67dbd206.png",
      duration: "32:15",
      views: 189,
      category: "جبر"
    },
    {
      id: 3,
      title: "مفاهيم الهندسة التحليلية",
      thumbnail: "/lovable-uploads/ca1d249f-fbb9-4b12-89f9-917203387e2c.png",
      duration: "38:45",
      views: 123,
      category: "هندسة"
    },
    {
      id: 4,
      title: "مراجعة لامتحان الرياضيات النهائي",
      thumbnail: "/lovable-uploads/abc6bb16-d0ae-47e7-ae5f-91baf937ee01.png",
      duration: "1:12:30",
      views: 432,
      category: "مراجعات"
    },
    {
      id: 5,
      title: "حل تمارين على الاشتقاق",
      thumbnail: "/lovable-uploads/8e4b25d0-536d-484f-bfa6-e3e808861ac9.png",
      duration: "55:10",
      views: 178,
      category: "تمارين"
    },
  ];

  return (
    <div className="w-full">
      <h3 className="text-lg font-semibold mb-4">فيديوهات تعليمية</h3>
      
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent>
          {videos.map((video) => (
            <CarouselItem key={video.id} className="md:basis-1/2 lg:basis-1/3 p-1">
              <div className="rounded-lg overflow-hidden border bg-white shadow-sm h-full">
                <div className="relative aspect-video">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                    <div className="bg-white bg-opacity-90 rounded-full p-3">
                      <Play className="h-6 w-6 text-brand-blue" />
                    </div>
                  </div>
                  <div className="absolute bottom-2 left-2 bg-black bg-opacity-70 text-white px-2 py-1 rounded-md text-xs">
                    {video.duration}
                  </div>
                </div>
                <div className="p-3">
                  <h4 className="font-semibold line-clamp-1">{video.title}</h4>
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-xs text-gray-500">{video.views} مشاهدة</span>
                    <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full flex items-center">
                      <Book className="w-3 h-3 ml-1" />
                      {video.category}
                    </span>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex justify-end gap-2 mt-4">
          <CarouselPrevious className="relative position-static left-0 right-0 top-0 transform-none translate-y-0 ml-2" />
          <CarouselNext className="relative position-static left-0 right-0 top-0 transform-none translate-y-0" />
        </div>
      </Carousel>
    </div>
  );
};
