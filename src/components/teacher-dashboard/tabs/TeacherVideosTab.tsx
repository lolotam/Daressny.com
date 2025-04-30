
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { VideoCarousel } from "../VideoCarousel";
import { VideoLibrary } from "../components/VideoLibrary";
import { CategoryManagement } from "../components/CategoryManagement";

export const TeacherVideosTab = () => {
  // Mock videos data - in a real app this would come from API
  const videos = [
    {
      id: 1,
      title: "مقدمة في حساب التفاضل",
      description: "شرح مبسط لمفهوم التفاضل وتطبيقاته",
      thumbnail: "/lovable-uploads/575dea3b-0c5a-414d-9814-28b08e187acb.png",
      duration: "45:20",
      views: 256,
      date: "2023-08-05",
      categories: ["تفاضل وتكامل", "مرحلة ثانوية"]
    },
    {
      id: 2,
      title: "حل معادلات الدرجة الثانية",
      description: "طرق مختلفة لحل معادلات الدرجة الثانية مع أمثلة",
      thumbnail: "/lovable-uploads/804f95f7-2838-49f1-82f1-960f67dbd206.png",
      duration: "32:15",
      views: 189,
      date: "2023-07-22",
      categories: ["جبر", "مرحلة ثانوية"]
    },
    {
      id: 3,
      title: "مفاهيم الهندسة التحليلية",
      description: "شرح مفاهيم الهندسة التحليلية وتطبيقاتها",
      thumbnail: "/lovable-uploads/ca1d249f-fbb9-4b12-89f9-917203387e2c.png",
      duration: "38:45",
      views: 123,
      date: "2023-06-15",
      categories: ["هندسة", "مرحلة جامعية"]
    },
    {
      id: 4,
      title: "مراجعة لامتحان الرياضيات النهائي",
      description: "مراجعة شاملة للمفاهيم الأساسية استعداداً للامتحان النهائي",
      thumbnail: "/lovable-uploads/abc6bb16-d0ae-47e7-ae5f-91baf937ee01.png",
      duration: "1:12:30",
      views: 432,
      date: "2023-05-10",
      categories: ["مراجعات", "مرحلة ثانوية"]
    },
    {
      id: 5,
      title: "حل تمارين على الاشتقاق",
      description: "حل مجموعة من التمارين المتنوعة على الاشتقاق",
      thumbnail: "/lovable-uploads/8e4b25d0-536d-484f-bfa6-e3e808861ac9.png",
      duration: "55:10",
      views: 178,
      date: "2023-04-25",
      categories: ["تفاضل وتكامل", "مرحلة جامعية", "تمارين"]
    },
  ];

  // Extract unique categories from videos
  const categories = Array.from(new Set(videos.flatMap(video => video.categories)));
  
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <h3 className="text-xl font-bold">فيديوهات تعليمية</h3>
        </CardHeader>
        
        <CardContent>
          <VideoCarousel />
        </CardContent>
      </Card>
      
      <VideoLibrary videos={videos} categories={categories} />
      
      <CategoryManagement categories={categories} />
    </div>
  );
};
