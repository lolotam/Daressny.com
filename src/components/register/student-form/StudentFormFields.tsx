
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

type StudentFormFieldsProps = {
  studentName: string;
  setStudentName: (value: string) => void;
  studentEmail: string;
  setStudentEmail: (value: string) => void;
  studentPhone: string;
  setStudentPhone: (value: string) => void;
  studentGrade: string;
  setStudentGrade: (value: string) => void;
  studentSubject: string;
  setStudentSubject: (value: string) => void;
  studentLessonType: string;
  setStudentLessonType: (value: string) => void;
  password: string;
  setPassword: (value: string) => void;
  confirmPassword: string;
  setConfirmPassword: (value: string) => void;
};

export const StudentFormFields = ({
  studentName,
  setStudentName,
  studentEmail,
  setStudentEmail,
  studentPhone,
  setStudentPhone,
  studentGrade,
  setStudentGrade,
  studentSubject,
  setStudentSubject,
  studentLessonType,
  setStudentLessonType,
  password,
  setPassword,
  confirmPassword,
  setConfirmPassword,
}: StudentFormFieldsProps) => {
  return (
    <div className="grid grid-cols-1 gap-6">
      <div>
        <Label htmlFor="student-name">الاسم الكامل</Label>
        <Input 
          id="student-name" 
          value={studentName} 
          onChange={(e) => setStudentName(e.target.value)} 
          required 
        />
      </div>

      <div>
        <Label htmlFor="student-email">البريد الإلكتروني</Label>
        <Input 
          id="student-email" 
          type="email" 
          value={studentEmail} 
          onChange={(e) => setStudentEmail(e.target.value)} 
          required 
        />
      </div>

      <div>
        <Label htmlFor="student-phone">رقم الهاتف</Label>
        <Input 
          id="student-phone" 
          type="tel" 
          dir="ltr" 
          value={studentPhone} 
          onChange={(e) => setStudentPhone(e.target.value)} 
          required 
        />
      </div>

      <div>
        <Label htmlFor="student-grade">الصف الدراسي</Label>
        <Select value={studentGrade} onValueChange={setStudentGrade}>
          <SelectTrigger>
            <SelectValue placeholder="اختر الصف الدراسي" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="primary-1">الصف الأول الابتدائي</SelectItem>
            <SelectItem value="primary-2">الصف الثاني الابتدائي</SelectItem>
            <SelectItem value="primary-3">الصف الثالث الابتدائي</SelectItem>
            <SelectItem value="primary-4">الصف الرابع الابتدائي</SelectItem>
            <SelectItem value="primary-5">الصف الخامس الابتدائي</SelectItem>
            <SelectItem value="primary-6">الصف السادس الابتدائي</SelectItem>
            <SelectItem value="middle-1">الصف الأول المتوسط</SelectItem>
            <SelectItem value="middle-2">الصف الثاني المتوسط</SelectItem>
            <SelectItem value="middle-3">الصف الثالث المتوسط</SelectItem>
            <SelectItem value="high-1">الصف الأول الثانوي</SelectItem>
            <SelectItem value="high-2">الصف الثاني الثانوي</SelectItem>
            <SelectItem value="high-3">الصف الثالث الثانوي</SelectItem>
            <SelectItem value="university">المرحلة الجامعية</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <Label htmlFor="student-subjects">المواد المطلوبة</Label>
        <Select value={studentSubject} onValueChange={setStudentSubject}>
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
        <Label htmlFor="student-lesson-type">نوع الدرس</Label>
        <Select value={studentLessonType} onValueChange={setStudentLessonType}>
          <SelectTrigger>
            <SelectValue placeholder="اختر نوع الدرس" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="home">دروس في المنزل</SelectItem>
            <SelectItem value="online">دروس أونلاين</SelectItem>
            <SelectItem value="group">دروس مجموعات</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <Label htmlFor="student-password">كلمة المرور</Label>
        <Input 
          id="student-password" 
          type="password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          required 
          minLength={8}
        />
      </div>

      <div>
        <Label htmlFor="student-confirm-password">تأكيد كلمة المرور</Label>
        <Input 
          id="student-confirm-password" 
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
