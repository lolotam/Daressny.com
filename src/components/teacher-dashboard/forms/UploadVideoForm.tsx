
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FileUploader } from "../FileUploader";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { useState } from "react";
import { CheckboxItem, CheckboxIndicator, CheckboxIcon } from "@radix-ui/react-checkbox";

const videoFormSchema = z.object({
  title: z.string().min(5, { message: "عنوان الفيديو مطلوب (5 أحرف على الأقل)" }),
  description: z.string().min(10, { message: "وصف الفيديو مطلوب (10 أحرف على الأقل)" }),
});

export const UploadVideoForm = () => {
  const [thumbnail, setThumbnail] = useState<string | null>(null);
  const [videoFile, setVideoFile] = useState<File | null>(null);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  
  // Mock categories - in a real app this would come from API
  const categories = [
    "تفاضل وتكامل",
    "جبر",
    "هندسة",
    "إحصاء",
    "مرحلة ثانوية",
    "مرحلة جامعية",
    "مراجعات",
    "تمارين"
  ];

  const form = useForm<z.infer<typeof videoFormSchema>>({
    resolver: zodResolver(videoFormSchema),
    defaultValues: {
      title: "",
      description: "",
    },
  });

  function onSubmit(values: z.infer<typeof videoFormSchema>) {
    // In a real app, you would upload files to a server here
    console.log({
      ...values,
      categories: selectedCategories,
      videoFile,
      thumbnail
    });
    
    // Reset form
    form.reset();
    setSelectedCategories([]);
    setVideoFile(null);
    setThumbnail(null);
  }

  // Toggle category selection
  const toggleCategory = (category: string) => {
    setSelectedCategories(prev => 
      prev.includes(category) 
        ? prev.filter(c => c !== category) 
        : [...prev, category]
    );
  };

  // Mock functions for file uploads - in a real app, these would handle actual uploads
  const handleVideoUpload = (file: File) => {
    setVideoFile(file);
  };

  const handleThumbnailUpload = (file: File) => {
    const url = URL.createObjectURL(file);
    setThumbnail(url);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-semibold">عنوان الفيديو</FormLabel>
              <FormControl>
                <Input placeholder="أدخل عنوان الفيديو" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-semibold">وصف الفيديو</FormLabel>
              <FormControl>
                <Textarea placeholder="أدخل وصف الفيديو" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <div>
          <FormLabel className="font-semibold mb-2 block">الفئات</FormLabel>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {categories.map(category => (
              <div 
                key={category} 
                className={`flex items-center space-x-2 border rounded-md p-2 cursor-pointer ${
                  selectedCategories.includes(category) ? 'border-brand-blue bg-blue-50' : 'border-gray-200'
                }`}
                onClick={() => toggleCategory(category)}
              >
                <input 
                  type="checkbox"
                  checked={selectedCategories.includes(category)}
                  onChange={() => {}}
                  className="ml-2"
                />
                <span>{category}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div>
          <FormLabel className="font-semibold">الفيديو</FormLabel>
          <FileUploader 
            accept="video/*" 
            maxSize={500}
            label="اختر ملف الفيديو (الحد الأقصى: 500 ميجابايت)"
            onUpload={handleVideoUpload}
          />
          {videoFile && (
            <div className="text-sm text-green-600 mt-2">
              تم اختيار الفيديو: {videoFile.name}
            </div>
          )}
        </div>
        
        <div>
          <FormLabel className="font-semibold">صورة مصغرة</FormLabel>
          <FileUploader 
            accept="image/*" 
            maxSize={5}
            label="اختر صورة مصغرة للفيديو"
            onUpload={handleThumbnailUpload}
            currentFile={thumbnail || undefined}
          />
        </div>
        
        <div className="flex justify-end gap-2 pt-4">
          <Button type="button" variant="outline">إلغاء</Button>
          <Button type="submit" className="bg-brand-blue hover:bg-brand-blue/90">
            رفع الفيديو
          </Button>
        </div>
      </form>
    </Form>
  );
};
