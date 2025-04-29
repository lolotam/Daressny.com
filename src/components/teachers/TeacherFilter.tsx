
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useLanguage } from "@/contexts/LanguageContext";

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
  const { t } = useLanguage();
  
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
      <h2 className="text-xl font-semibold mb-4">{t('searchFilter')}</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div>
          <Label htmlFor="search">{t('searchTeacher')}</Label>
          <Input 
            id="search" 
            placeholder={t('searchTeacher')}
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
          />
        </div>
        <div>
          <Label htmlFor="subject-filter">{t('subjectFilter')}</Label>
          <Select value={subjectFilter} onValueChange={onSubjectChange}>
            <SelectTrigger id="subject-filter">
              <SelectValue placeholder={t('allSubjects')} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">{t('allSubjects')}</SelectItem>
              {subjects.map((subject, index) => (
                <SelectItem key={index} value={subject}>{subject}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label htmlFor="price-sort">{t('priceSort')}</Label>
          <Select value={priceSort} onValueChange={onPriceSortChange}>
            <SelectTrigger id="price-sort">
              <SelectValue placeholder={t('defaultSort')} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="default">{t('defaultSort')}</SelectItem>
              <SelectItem value="low-to-high">{t('lowToHigh')}</SelectItem>
              <SelectItem value="high-to-low">{t('highToLow')}</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label htmlFor="rating-sort">{t('ratingSort')}</Label>
          <Select value={ratingSort} onValueChange={onRatingSortChange}>
            <SelectTrigger id="rating-sort">
              <SelectValue placeholder={t('defaultSort')} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="default">{t('defaultSort')}</SelectItem>
              <SelectItem value="high-to-low">{t('highestRated')}</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
};
