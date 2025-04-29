
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";

interface AdditionalInfoSectionProps {
  availability: string;
  setAvailability: (value: string) => void;
  teachingMethod: string;
  setTeachingMethod: (value: string) => void;
  howKnow: string;
  setHowKnow: (value: string) => void;
}

export const AdditionalInfoSection = ({
  availability,
  setAvailability,
  teachingMethod,
  setTeachingMethod,
  howKnow,
  setHowKnow
}: AdditionalInfoSectionProps) => {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold mt-8">معلومات إضافية</h2>
      <Separator className="my-2" />
      
      <div>
        <Label htmlFor="availability">أوقات التدريس المفضلة</Label>
        <Select value={availability} onValueChange={setAvailability}>
          <SelectTrigger>
            <SelectValue placeholder="اختر الوقت المفضل" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="morning">صباحاً (8 صباحاً - 12 ظهراً)</SelectItem>
            <SelectItem value="afternoon">ظهراً (12 ظهراً - 4 عصراً)</SelectItem>
            <SelectItem value="evening">مساءً (4 عصراً - 8 مساءً)</SelectItem>
            <SelectItem value="night">ليلاً (8 مساءً - 12 ليلاً)</SelectItem>
            <SelectItem value="flexible">مرن (قابل للتغيير)</SelectItem>
          </SelectContent>
        </Select>
      </div>
      
      <div>
        <Label htmlFor="teaching_method">طريقة التدريس المفضلة</Label>
        <Select value={teachingMethod} onValueChange={setTeachingMethod}>
          <SelectTrigger>
            <SelectValue placeholder="اختر طريقة التدريس" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="in_person">حضوري في منزل الطالب</SelectItem>
            <SelectItem value="online">أونلاين</SelectItem>
            <SelectItem value="both">كلاهما</SelectItem>
          </SelectContent>
        </Select>
      </div>
      
      <div>
        <Label htmlFor="how_know">كيف سمعت عنا؟</Label>
        <Select value={howKnow} onValueChange={setHowKnow}>
          <SelectTrigger>
            <SelectValue placeholder="اختر" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="social_media">وسائل التواصل الاجتماعي</SelectItem>
            <SelectItem value="friend">صديق</SelectItem>
            <SelectItem value="search_engine">محرك بحث</SelectItem>
            <SelectItem value="ad">إعلان</SelectItem>
            <SelectItem value="other">أخرى</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};
