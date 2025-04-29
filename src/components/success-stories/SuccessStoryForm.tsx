
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Checkbox } from '@/components/ui/checkbox';
import { toast } from '@/hooks/use-toast';
import { validateFileSize, validateFileType } from '@/utils/formValidation';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

// Create a schema for the form
const formSchema = z.object({
  fullName: z.string().min(1, { message: 'الاسم الكامل مطلوب' }),
  email: z.string().min(1, { message: 'البريد الإلكتروني مطلوب' }).email({ message: 'البريد الإلكتروني غير صحيح' }),
  phone: z.string().optional(),
  userType: z.enum(['student', 'teacher']),
  storyTitle: z.string().min(1, { message: 'عنوان القصة مطلوب' }),
  storyDetails: z.string().min(1, { message: 'تفاصيل القصة مطلوبة' }),
  agreeToTerms: z.boolean().refine(value => value === true, {
    message: 'يجب الموافقة على الشروط',
  })
});

type FormData = z.infer<typeof formSchema>;

export const SuccessStoryForm = () => {
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imageError, setImageError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Initialize React Hook Form
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: '',
      email: '',
      phone: '',
      userType: 'student',
      storyTitle: '',
      storyDetails: '',
      agreeToTerms: false,
    },
  });
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setImageError(null);
    
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      
      // Check file size (max 2MB)
      if (!validateFileSize(file, 2)) {
        setImageError('حجم الملف يجب أن لا يتجاوز 2MB');
        return;
      }
      
      // Check file type
      if (!validateFileType(file, ['image/jpeg', 'image/png'])) {
        setImageError('يجب أن تكون الصورة بصيغة JPEG أو PNG');
        return;
      }
      
      setImageFile(file);
    }
  };

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    // Simulate form submission with a delay
    setTimeout(() => {
      // Log form data and image file for debugging
      console.log('Form submitted:', { ...data, imageFile });
      
      toast({
        title: "🎉 شكرًا لمشاركتك!",
        description: "سنراجع قصتك ونتواصل معك قريبًا.",
      });
      
      // Reset form
      form.reset();
      setImageFile(null);
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="fullName"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-base font-medium">
                الاسم الكامل <span className="text-red-500">*</span>
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="أدخل اسمك الكامل"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-base font-medium">
                البريد الإلكتروني <span className="text-red-500">*</span>
              </FormLabel>
              <FormControl>
                <Input
                  type="email"
                  placeholder="example@email.com"
                  className="ltr"
                  dir="ltr"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-base font-medium">
                رقم الهاتف (اختياري)
              </FormLabel>
              <FormControl>
                <Input
                  type="tel"
                  placeholder="+96555000000"
                  className="ltr"
                  dir="ltr"
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="userType"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-base font-medium">
                هل أنت طالب أم مدرس؟ <span className="text-red-500">*</span>
              </FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  value={field.value}
                  className="flex gap-6 mt-2"
                >
                  <div className="flex items-center gap-2">
                    <RadioGroupItem value="student" id="student" />
                    <Label htmlFor="student">طالب</Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <RadioGroupItem value="teacher" id="teacher" />
                    <Label htmlFor="teacher">مدرس</Label>
                  </div>
                </RadioGroup>
              </FormControl>
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="storyTitle"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-base font-medium">
                عنوان قصة النجاح <span className="text-red-500">*</span>
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="أدخل عنوانًا موجزًا لقصتك"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="storyDetails"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-base font-medium">
                تفاصيل قصة النجاح <span className="text-red-500">*</span>
              </FormLabel>
              <FormControl>
                <Textarea
                  placeholder="اشرح قصتك بالتفصيل وكيف ساعدتك منصة درسني..."
                  className="min-h-[150px]"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <div>
          <Label htmlFor="imageFile" className="text-base font-medium">
            ارفع صورة (اختياري)
          </Label>
          <div className="mt-1">
            <Input
              id="imageFile"
              name="imageFile"
              type="file"
              accept="image/jpeg,image/png"
              onChange={handleFileChange}
              className={imageError ? "border-red-500" : ""}
            />
            <p className="text-gray-500 text-xs mt-1">
              صيغة JPEG/PNG بحد أقصى 2MB
            </p>
            {imageError && (
              <p className="text-red-500 text-sm mt-1">{imageError}</p>
            )}
          </div>
        </div>
        
        <FormField
          control={form.control}
          name="agreeToTerms"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-2 space-y-0 rtl:space-x-reverse">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                  id="agreeToTerms"
                />
              </FormControl>
              <div className="space-y-1 leading-none mr-2 rtl:mr-0 rtl:ml-2">
                <FormLabel className="text-sm font-medium">
                  أوافق على نشر قصتي في منصة درسني بعد مراجعتها.
                </FormLabel>
                <FormMessage />
              </div>
            </FormItem>
          )}
        />
        
        <Button 
          type="submit" 
          className="w-full bg-brand-blue hover:bg-brand-blue/90"
          disabled={isSubmitting}
        >
          {isSubmitting ? "جارِ الإرسال..." : "أرسل قصتك"}
        </Button>
      </form>
    </Form>
  );
};
