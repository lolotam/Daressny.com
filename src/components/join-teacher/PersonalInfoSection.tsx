
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface PersonalInfoSectionProps {
  firstName: string;
  setFirstName: (value: string) => void;
  lastName: string;
  setLastName: (value: string) => void;
  email: string;
  setEmail: (value: string) => void;
  phone: string;
  setPhone: (value: string) => void;
}

export const PersonalInfoSection = ({
  firstName,
  setFirstName,
  lastName,
  setLastName,
  email,
  setEmail,
  phone,
  setPhone
}: PersonalInfoSectionProps) => {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">المعلومات الشخصية</h2>
      <div className="my-2 h-px bg-gray-200" />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Label htmlFor="firstName">الاسم الأول</Label>
          <Input 
            id="firstName" 
            placeholder="أدخل الاسم الأول" 
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required 
          />
        </div>
        
        <div>
          <Label htmlFor="lastName">اسم العائلة</Label>
          <Input 
            id="lastName" 
            placeholder="أدخل اسم العائلة" 
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required 
          />
        </div>
      </div>
      
      <div>
        <Label htmlFor="email">البريد الإلكتروني</Label>
        <Input 
          id="email" 
          type="email" 
          placeholder="example@example.com" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required 
        />
      </div>
      
      <div>
        <Label htmlFor="phone">رقم الهاتف</Label>
        <Input 
          id="phone" 
          type="tel" 
          placeholder="+965 XXXX XXXX" 
          dir="ltr"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required 
        />
      </div>
    </div>
  );
};
