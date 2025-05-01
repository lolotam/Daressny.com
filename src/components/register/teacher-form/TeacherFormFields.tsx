
import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

interface TeacherFormFieldsProps {
  teacherName: string;
  setTeacherName: (value: string) => void;
  teacherEmail: string;
  setTeacherEmail: (value: string) => void;
  teacherPhone: string;
  setTeacherPhone: (value: string) => void;
  teacherSubjects: string;
  setTeacherSubjects: (value: string) => void;
  teacherEducation: string;
  setTeacherEducation: (value: string) => void;
  teacherExperience: string;
  setTeacherExperience: (value: string) => void;
  teacherBio: string;
  setTeacherBio: (value: string) => void;
  password: string;
  setPassword: (value: string) => void;
  confirmPassword: string;
  setConfirmPassword: (value: string) => void;
}

export const TeacherFormFields = ({
  teacherName,
  setTeacherName,
  teacherEmail,
  setTeacherEmail,
  teacherPhone,
  setTeacherPhone,
  teacherSubjects,
  setTeacherSubjects,
  teacherEducation,
  setTeacherEducation,
  teacherExperience,
  setTeacherExperience,
  teacherBio,
  setTeacherBio,
  password,
  setPassword,
  confirmPassword,
  setConfirmPassword,
}: TeacherFormFieldsProps) => {
  return (
    <div className="grid grid-cols-1 gap-6">
      <div>
        <Label htmlFor="teacher-name">الاسم الكامل</Label>
        <Input 
          id="teacher-name" 
          value={teacherName} 
          onChange={(e) => setTeacherName(e.target.value)} 
          required 
        />
      </div>

      <div>
        <Label htmlFor="teacher-email">البريد الإلكتروني</Label>
        <Input 
          id="teacher-email" 
          type="email" 
          value={teacherEmail} 
          onChange={(e) => setTeacherEmail(e.target.value)} 
          required 
        />
      </div>

      <div>
        <Label htmlFor="teacher-phone">رقم الهاتف</Label>
        <Input 
          id="teacher-phone" 
          type="tel" 
          dir="ltr" 
          value={teacherPhone} 
          onChange={(e) => setTeacherPhone(e.target.value)} 
          required 
        />
      </div>

      <div>
        <Label htmlFor="teacher-subjects">المواد التي تدرسها</Label>
        <Select value={teacherSubjects} onValueChange={setTeacherSubjects}>
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
        <Label htmlFor="teacher-education">الشهادات والمؤهلات</Label>
        <Input 
          id="teacher-education" 
          value={teacherEducation} 
          onChange={(e) => setTeacherEducation(e.target.value)} 
          required 
        />
      </div>

      <div>
        <Label htmlFor="teacher-experience">سنوات الخبرة</Label>
        <Select value={teacherExperience} onValueChange={setTeacherExperience}>
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
        <Label htmlFor="teacher-bio">نبذة تعريفية</Label>
        <Textarea 
          id="teacher-bio" 
          rows={5} 
          value={teacherBio} 
          onChange={(e) => setTeacherBio(e.target.value)} 
          required 
        />
      </div>

      <div>
        <Label htmlFor="teacher-password">كلمة المرور</Label>
        <Input 
          id="teacher-password" 
          type="password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          required 
          minLength={8}
        />
      </div>

      <div>
        <Label htmlFor="teacher-confirm-password">تأكيد كلمة المرور</Label>
        <Input 
          id="teacher-confirm-password" 
          type="password" 
          value={confirmPassword} 
          onChange={(e) => setConfirmPassword(e.target.value)} 
          required 
          minLength={8}
        />
      </div>
    </div>
  );
};
