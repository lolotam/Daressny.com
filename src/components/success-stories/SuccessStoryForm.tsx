
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Checkbox } from '@/components/ui/checkbox';
import { toast } from '@/hooks/use-toast';
import { validateEmail, validateFileSize, validateFileType } from '@/utils/formValidation';

interface SuccessStoryFormData {
  fullName: string;
  email: string;
  phone: string;
  userType: 'student' | 'teacher';
  storyTitle: string;
  storyDetails: string;
  imageFile: File | null;
  agreeToTerms: boolean;
}

export const SuccessStoryForm = () => {
  const [formData, setFormData] = useState<SuccessStoryFormData>({
    fullName: '',
    email: '',
    phone: '',
    userType: 'student',
    storyTitle: '',
    storyDetails: '',
    imageFile: null,
    agreeToTerms: false,
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    // Clear error for this field when user types
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleRadioChange = (value: string) => {
    setFormData((prev) => ({ ...prev, userType: value as 'student' | 'teacher' }));
  };

  const handleCheckboxChange = (checked: boolean) => {
    setFormData((prev) => ({ ...prev, agreeToTerms: checked }));
    
    if (errors.agreeToTerms) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors.agreeToTerms;
        return newErrors;
      });
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      
      // Check file size (max 2MB)
      if (!validateFileSize(file, 2)) {
        setErrors((prev) => ({ ...prev, imageFile: 'حجم الملف يجب أن لا يتجاوز 2MB' }));
        return;
      }
      
      // Check file type
      if (!validateFileType(file, ['image/jpeg', 'image/png'])) {
        setErrors((prev) => ({ ...prev, imageFile: 'يجب أن تكون الصورة بصيغة JPEG أو PNG' }));
        return;
      }
      
      setFormData((prev) => ({ ...prev, imageFile: file }));
      
      if (errors.imageFile) {
        setErrors((prev) => {
          const newErrors = { ...prev };
          delete newErrors.imageFile;
          return newErrors;
        });
      }
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'الاسم الكامل مطلوب';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'البريد الإلكتروني مطلوب';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'البريد الإلكتروني غير صحيح';
    }
    
    if (!formData.storyTitle.trim()) {
      newErrors.storyTitle = 'عنوان القصة مطلوب';
    }
    
    if (!formData.storyDetails.trim()) {
      newErrors.storyDetails = 'تفاصيل القصة مطلوبة';
    }
    
    if (!formData.agreeToTerms) {
      newErrors.agreeToTerms = 'يجب الموافقة على الشروط';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    // Here you would typically send the form data to your backend
    // For now, we'll simulate a successful submission
    setTimeout(() => {
      toast({
        title: "🎉 شكرًا لمشاركتك!",
        description: "سنراجع قصتك ونتواصل معك قريبًا.",
      });
      
      // Reset form
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        userType: 'student',
        storyTitle: '',
        storyDetails: '',
        imageFile: null,
        agreeToTerms: false,
      });
      
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <Label htmlFor="fullName" className="text-base font-medium">
          الاسم الكامل <span className="text-red-500">*</span>
        </Label>
        <Input
          id="fullName"
          name="fullName"
          value={formData.fullName}
          onChange={handleInputChange}
          placeholder="أدخل اسمك الكامل"
          className={errors.fullName ? "border-red-500" : ""}
        />
        {errors.fullName && (
          <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>
        )}
      </div>
      
      <div>
        <Label htmlFor="email" className="text-base font-medium">
          البريد الإلكتروني <span className="text-red-500">*</span>
        </Label>
        <Input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="example@email.com"
          className={`ltr ${errors.email ? "border-red-500" : ""}`}
          dir="ltr"
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">{errors.email}</p>
        )}
      </div>
      
      <div>
        <Label htmlFor="phone" className="text-base font-medium">
          رقم الهاتف (اختياري)
        </Label>
        <Input
          id="phone"
          name="phone"
          type="tel"
          value={formData.phone}
          onChange={handleInputChange}
          placeholder="+96555000000"
          className="ltr"
          dir="ltr"
        />
      </div>
      
      <div>
        <Label className="text-base font-medium">
          هل أنت طالب أم مدرس؟ <span className="text-red-500">*</span>
        </Label>
        <RadioGroup 
          value={formData.userType} 
          onValueChange={handleRadioChange}
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
      </div>
      
      <div>
        <Label htmlFor="storyTitle" className="text-base font-medium">
          عنوان قصة النجاح <span className="text-red-500">*</span>
        </Label>
        <Input
          id="storyTitle"
          name="storyTitle"
          value={formData.storyTitle}
          onChange={handleInputChange}
          placeholder="أدخل عنوانًا موجزًا لقصتك"
          className={errors.storyTitle ? "border-red-500" : ""}
        />
        {errors.storyTitle && (
          <p className="text-red-500 text-sm mt-1">{errors.storyTitle}</p>
        )}
      </div>
      
      <div>
        <Label htmlFor="storyDetails" className="text-base font-medium">
          تفاصيل قصة النجاح <span className="text-red-500">*</span>
        </Label>
        <Textarea
          id="storyDetails"
          name="storyDetails"
          value={formData.storyDetails}
          onChange={handleInputChange}
          placeholder="اشرح قصتك بالتفصيل وكيف ساعدتك منصة درسني..."
          className={`min-h-[150px] ${errors.storyDetails ? "border-red-500" : ""}`}
        />
        {errors.storyDetails && (
          <p className="text-red-500 text-sm mt-1">{errors.storyDetails}</p>
        )}
      </div>
      
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
            className={errors.imageFile ? "border-red-500" : ""}
          />
          <p className="text-gray-500 text-xs mt-1">
            صيغة JPEG/PNG بحد أقصى 2MB
          </p>
          {errors.imageFile && (
            <p className="text-red-500 text-sm mt-1">{errors.imageFile}</p>
          )}
        </div>
      </div>
      
      <div className="flex items-start gap-2">
        <Checkbox 
          id="agreeToTerms"
          checked={formData.agreeToTerms}
          onCheckedChange={handleCheckboxChange}
          className={errors.agreeToTerms ? "border-red-500" : ""}
        />
        <div>
          <Label 
            htmlFor="agreeToTerms" 
            className={`text-sm font-medium ${errors.agreeToTerms ? "text-red-500" : ""}`}
          >
            أوافق على نشر قصتي في منصة درسني بعد مراجعتها.
          </Label>
          {errors.agreeToTerms && (
            <p className="text-red-500 text-sm">{errors.agreeToTerms}</p>
          )}
        </div>
      </div>
      
      <Button 
        type="submit" 
        className="w-full bg-brand-blue hover:bg-brand-blue/90"
        disabled={isSubmitting}
      >
        {isSubmitting ? "جارِ الإرسال..." : "أرسل قصتك"}
      </Button>
    </form>
  );
};
