
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FileUploader } from "../FileUploader";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { useState } from "react";

const courseFormSchema = z.object({
  title: z.string().min(5, { message: "عنوان الكورس مطلوب (5 أحرف على الأقل)" }),
  description: z.string().min(20, { message: "وصف الكورس مطلوب (20 حرف على الأقل)" }),
  price: z.string().min(1, { message: "سعر الكورس مطلوب" }),
  duration: z.string().min(1, { message: "مدة الكورس مطلوبة" }),
});

interface AddCourseFormProps {
  onAdd: (course: any) => void;
}

export const AddCourseForm = ({ onAdd }: AddCourseFormProps) => {
  const [thumbnail, setThumbnail] = useState<string | null>(null);

  const form = useForm<z.infer<typeof courseFormSchema>>({
    resolver: zodResolver(courseFormSchema),
    defaultValues: {
      title: "",
      description: "",
      price: "",
      duration: "",
    },
  });

  function onSubmit(values: z.infer<typeof courseFormSchema>) {
    // In a real app, you would upload files to a server here
    onAdd({
      title: values.title,
      description: values.description,
      price: parseFloat(values.price),
      duration: values.duration,
      thumbnail: thumbnail || "/lovable-uploads/4d512c44-e327-4412-9921-e638faf4e113.png", // Default thumbnail
    });
    
    // Reset form
    form.reset();
  }

  // Mock function for file upload - in a real app, this would handle the actual upload process
  const handleFileUpload = (file: File) => {
    // Create a local URL for preview
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
              <FormLabel className="font-semibold">عنوان الكورس</FormLabel>
              <FormControl>
                <Input placeholder="أدخل عنوان الكورس" {...field} />
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
              <FormLabel className="font-semibold">وصف الكورس</FormLabel>
              <FormControl>
                <Textarea placeholder="أدخل وصف الكورس" className="min-h-[120px]" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="price"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-semibold">السعر (د.ك)</FormLabel>
                <FormControl>
                  <Input type="number" min="0" step="0.1" placeholder="أدخل سعر الكورس" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="duration"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-semibold">المدة (مثال: 10 ساعات)</FormLabel>
                <FormControl>
                  <Input placeholder="أدخل مدة الكورس" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        
        <div>
          <FormLabel className="font-semibold">صورة الكورس</FormLabel>
          <FileUploader 
            accept="image/*" 
            maxSize={5}
            label="اختر صورة للكورس"
            onUpload={handleFileUpload}
            currentFile={thumbnail || undefined}
          />
        </div>
        
        <div className="flex justify-end gap-2 pt-4">
          <Button type="button" variant="outline">إلغاء</Button>
          <Button type="submit" className="bg-brand-blue hover:bg-brand-blue/90">
            إضافة الكورس
          </Button>
        </div>
      </form>
    </Form>
  );
};
