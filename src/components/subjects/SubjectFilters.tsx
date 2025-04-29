
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { 
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface SubjectFiltersProps {
  selectedLevel: string;
  setSelectedLevel: (level: string) => void;
  selectedMethod: string;
  setSelectedMethod: (method: string) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export const SubjectFilters = ({
  selectedLevel,
  setSelectedLevel,
  selectedMethod,
  setSelectedMethod,
  searchQuery,
  setSearchQuery
}: SubjectFiltersProps) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 mb-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <label className="block mb-2 font-medium">المرحلة الدراسية</label>
          <Select
            value={selectedLevel}
            onValueChange={setSelectedLevel}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="اختر المرحلة الدراسية" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="all">جميع المراحل</SelectItem>
                <SelectItem value="ابتدائي">ابتدائي</SelectItem>
                <SelectItem value="متوسط">متوسط</SelectItem>
                <SelectItem value="ثانوي">ثانوي</SelectItem>
                <SelectItem value="جامعي">جامعي</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        
        <div>
          <label className="block mb-2 font-medium">طريقة الدراسة</label>
          <Select
            value={selectedMethod}
            onValueChange={setSelectedMethod}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="اختر طريقة الدراسة" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="all">جميع الطرق</SelectItem>
                <SelectItem value="منزل">في المنزل</SelectItem>
                <SelectItem value="أونلاين">أونلاين</SelectItem>
                <SelectItem value="مجموعة">مجموعة</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        
        <div>
          <label className="block mb-2 font-medium">البحث</label>
          <div className="relative">
            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <Input
              placeholder="ابحث عن مادة دراسية..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
