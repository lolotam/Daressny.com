
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface TeacherFilterProps {
  searchTerm: string;
  subjectFilter: string;
  priceSort: string;
  ratingSort: string;
  subjects: string[];
  onSearchChange: (value: string) => void;
  onSubjectChange: (value: string) => void;
  onPriceSortChange: (value: string) => void;
  onRatingSortChange: (value: string) => void;
}

export const TeacherFilter = ({
  searchTerm,
  subjectFilter,
  priceSort,
  ratingSort,
  subjects,
  onSearchChange,
  onSubjectChange,
  onPriceSortChange,
  onRatingSortChange
}: TeacherFilterProps) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
      <h2 className="text-xl font-semibold mb-4">البحث والتصفية</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div>
          <Label htmlFor="search">البحث عن معلم</Label>
          <Input 
            id="search" 
            placeholder="ابحث بالاسم أو المادة" 
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
          />
        </div>
        <div>
          <Label htmlFor="subject-filter">تصفية حسب المادة</Label>
          <Select value={subjectFilter} onValueChange={onSubjectChange}>
            <SelectTrigger id="subject-filter">
              <SelectValue placeholder="جميع المواد" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="">جميع المواد</SelectItem>
              {subjects.map((subject, index) => (
                <SelectItem key={index} value={subject}>{subject}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label htmlFor="price-sort">ترتيب حسب السعر</Label>
          <Select value={priceSort} onValueChange={onPriceSortChange}>
            <SelectTrigger id="price-sort">
              <SelectValue placeholder="ترتيب افتراضي" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="">ترتيب افتراضي</SelectItem>
              <SelectItem value="low-to-high">الأقل سعرًا</SelectItem>
              <SelectItem value="high-to-low">الأعلى سعرًا</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label htmlFor="rating-sort">ترتيب حسب التقييم</Label>
          <Select value={ratingSort} onValueChange={onRatingSortChange}>
            <SelectTrigger id="rating-sort">
              <SelectValue placeholder="ترتيب افتراضي" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="">ترتيب افتراضي</SelectItem>
              <SelectItem value="high-to-low">الأعلى تقييمًا</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
};
