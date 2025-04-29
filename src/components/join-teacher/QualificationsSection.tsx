
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";

interface QualificationsSectionProps {
  education: string;
  setEducation: (value: string) => void;
  subjects: string;
  setSubjects: (value: string) => void;
  experience: string;
  setExperience: (value: string) => void;
  bio: string;
  setBio: (value: string) => void;
}

export const QualificationsSection = ({
  education,
  setEducation,
  subjects,
  setSubjects,
  experience,
  setExperience,
  bio,
  setBio
}: QualificationsSectionProps) => {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold mt-8">المؤهلات والخبرات</h2>
      <Separator className="my-2" />
      
      <div>
        <Label htmlFor="education">المؤهل العلمي</Label>
        <Select value={education} onValueChange={setEducation}>
          <SelectTrigger>
            <SelectValue placeholder="اختر المؤهل العلمي" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="bachelor">بكالوريوس</SelectItem>
            <SelectItem value="master">ماجستير</SelectItem>
            <SelectItem value="phd">دكتوراه</SelectItem>
            <SelectItem value="other">مؤهل آخر</SelectItem>
          </SelectContent>
        </Select>
      </div>
      
      <div>
        <Label htmlFor="subjects">المواد التي ترغب في تدريسها</Label>
        <Select value={subjects} onValueChange={setSubjects}>
          <SelectTrigger>
            <SelectValue placeholder="اختر المادة" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="math">الرياضيات</SelectItem>
            <SelectItem value="science">العلوم</SelectItem>
            <SelectItem value="physics">الفيزياء</SelectItem>
            <SelectItem value="chemistry">الكيمياء</SelectItem>
            <SelectItem value="biology">الأحياء</SelectItem>
            <SelectItem value="arabic">اللغة العربية</SelectItem>
            <SelectItem value="english">اللغة الإنجليزية</SelectItem>
            <SelectItem value="computer">الحاسب الآلي</SelectItem>
          </SelectContent>
        </Select>
      </div>
      
      <div>
        <Label htmlFor="experience">سنوات الخبرة</Label>
        <Select value={experience} onValueChange={setExperience}>
          <SelectTrigger>
            <SelectValue placeholder="اختر سنوات الخبرة" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="0-1">أقل من سنة</SelectItem>
            <SelectItem value="1-3">1-3 سنوات</SelectItem>
            <SelectItem value="3-5">3-5 سنوات</SelectItem>
            <SelectItem value="5-10">5-10 سنوات</SelectItem>
            <SelectItem value="10+">أكثر من 10 سنوات</SelectItem>
          </SelectContent>
        </Select>
      </div>
      
      <div>
        <Label htmlFor="bio">نبذة تعريفية عن خبراتك في التدريس</Label>
        <Textarea 
          id="bio" 
          rows={4} 
          placeholder="أخبرنا عن خبراتك السابقة وإنجازاتك في مجال التدريس"
          value={bio}
          onChange={(e) => setBio(e.target.value)}
        />
      </div>
    </div>
  );
};
