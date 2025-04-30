
import { useState } from "react";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Grid3x3, ListOrdered, Video } from "lucide-react";
import { VideoGrid } from "./VideoGrid";
import { VideoList } from "./VideoList";
import { UploadVideoForm } from "../forms/UploadVideoForm";

interface VideoLibraryProps {
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
  categories: string[];
}

export const VideoLibrary = ({ videos, categories }: VideoLibraryProps) => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Filter videos based on selected category
  const filteredVideos = selectedCategory === 'all'
    ? videos
    : videos.filter(video => video.categories.includes(selectedCategory));

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <h3 className="text-xl font-bold">مكتبة الفيديوهات</h3>
        
        <Dialog>
          <DialogTrigger asChild>
            <Button className="bg-brand-blue hover:bg-brand-blue/90">
              <Video className="w-4 h-4 ml-2" />
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
            {['all', ...categories].map(category => (
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

          <div className="flex items-center justify-end gap-2 mb-4">
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

          {viewMode === 'grid' ? (
            <VideoGrid videos={filteredVideos} />
          ) : (
            <VideoList videos={filteredVideos} />
          )}
        </div>
      </CardContent>
    </Card>
  );
};
