
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { VideoCarousel } from "../VideoCarousel";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { VideoPlus, Tag, Grid3x3, ListOrdered } from "lucide-react";
import { UploadVideoForm } from "../forms/UploadVideoForm";
import { useState } from "react";

export const TeacherVideosTab = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedCategory, setSelectedCategory] = useState('all');
  
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
  const categories = ['all', ...Array.from(new Set(videos.flatMap(video => video.categories)))];
  
  // Filter videos based on selected category
  const filteredVideos = selectedCategory === 'all'
    ? videos
    : videos.filter(video => video.categories.includes(selectedCategory));

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <h3 className="text-xl font-bold">فيديوهات تعليمية</h3>
          
          <div className="flex items-center gap-2">
            <Button 
              variant={viewMode === 'grid' ? "default" : "outline"} 
              size="sm" 
              onClick={() => setViewMode('grid')}
            >
              <Grid3x3 className="w-4 h-4" />
            </Button>
            <Button 
              variant={viewMode === 'list' ? "default" : "outline"} 
              size="sm" 
              onClick={() => setViewMode('list')}
            >
              <ListOrdered className="w-4 h-4" />
            </Button>
          </div>
        </CardHeader>
        
        <CardContent>
          <VideoCarousel />
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <h3 className="text-xl font-bold">مكتبة الفيديوهات</h3>
          
          <Dialog>
            <DialogTrigger asChild>
              <Button className="bg-brand-blue hover:bg-brand-blue/90">
                <VideoPlus className="w-4 h-4 ml-2" />
                رفع فيديو جديد
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[600px]">
              <DialogHeader>
                <DialogTitle>رفع فيديو جديد</DialogTitle>
              </DialogHeader>
              <UploadVideoForm />
            </DialogContent>
          </Dialog>
        </CardHeader>
        
        <CardContent>
          <div className="pb-6 overflow-x-auto">
            <div className="flex gap-2 mb-6">
              {categories.map(category => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                >
                  {category === 'all' ? 'الكل' : category}
                </Button>
              ))}
            </div>

            {viewMode === 'grid' ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredVideos.map(video => (
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
            ) : (
              <div className="space-y-4">
                {filteredVideos.map(video => (
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
            )}

            {filteredVideos.length === 0 && (
              <div className="py-16 text-center text-gray-500">
                لا توجد فيديوهات مطابقة للفئة المحددة
              </div>
            )}
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <h3 className="text-xl font-bold">إدارة الفئات</h3>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2 mb-4">
            {categories.filter(cat => cat !== 'all').map((category, index) => (
              <div 
                key={index}
                className="bg-gray-100 text-gray-800 px-3 py-2 rounded-full flex items-center"
              >
                <span>{category}</span>
                <button className="ml-2 w-5 h-5 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 hover:bg-gray-300">
                  ×
                </button>
              </div>
            ))}
          </div>
          
          <div className="flex gap-2">
            <Input placeholder="أضف فئة جديدة" className="max-w-xs" />
            <Button variant="outline">إضافة</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

// An Input component for new categories
const Input = ({ className = "", ...props }) => (
  <input
    className={`flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
    {...props}
  />
);
