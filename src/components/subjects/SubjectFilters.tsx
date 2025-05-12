
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
import { useLanguage } from "@/contexts/LanguageContext";

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
  const { language } = useLanguage();

  // Define level options based on language
  const levelOptions = language === 'ar' 
    ? [
        { value: 'all', label: 'جميع المراحل' },
        { value: 'ابتدائي', label: 'ابتدائي' },
        { value: 'متوسط', label: 'متوسط' },
        { value: 'ثانوي', label: 'ثانوي' },
        { value: 'جامعي', label: 'جامعي' }
      ]
    : [
        { value: 'all', label: 'All Levels' },
        { value: 'primary', label: 'Primary' },
        { value: 'middle', label: 'Middle School' },
        { value: 'secondary', label: 'Secondary' },
        { value: 'university', label: 'University' }
      ];
      
  // Define method options based on language
  const methodOptions = language === 'ar'
    ? [
        { value: 'all', label: 'جميع الطرق' },
        { value: 'منزل', label: 'في المنزل' },
        { value: 'أونلاين', label: 'أونلاين' },
        { value: 'مجموعة', label: 'مجموعة' }
      ]
    : [
        { value: 'all', label: 'All Methods' },
        { value: 'home', label: 'At Home' },
        { value: 'online', label: 'Online' },
        { value: 'group', label: 'Group' }
      ];
  
  return (
    <div className="bg-white rounded-xl shadow-md p-6 mb-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <label className="block mb-2 font-medium">
            {language === 'ar' ? 'المرحلة الدراسية' : 'Educational Stage'}
          </label>
          <Select
            value={selectedLevel}
            onValueChange={setSelectedLevel}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder={language === 'ar' ? 'اختر المرحلة الدراسية' : 'Choose educational stage'} />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {levelOptions.map(option => (
                  <SelectItem key={option.value} value={option.value}>{option.label}</SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        
        <div>
          <label className="block mb-2 font-medium">
            {language === 'ar' ? 'طريقة الدراسة' : 'Study Method'}
          </label>
          <Select
            value={selectedMethod}
            onValueChange={setSelectedMethod}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder={language === 'ar' ? 'اختر طريقة الدراسة' : 'Choose study method'} />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {methodOptions.map(option => (
                  <SelectItem key={option.value} value={option.value}>{option.label}</SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        
        <div>
          <label className="block mb-2 font-medium">
            {language === 'ar' ? 'البحث' : 'Search'}
          </label>
          <div className="relative">
            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <Input
              placeholder={language === 'ar' ? 'ابحث عن مادة دراسية...' : 'Search for a subject...'}
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
