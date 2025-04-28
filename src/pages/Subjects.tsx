
import { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Book, Search } from 'lucide-react';

type SubjectType = {
  id: number;
  name: string;
  icon: React.ReactNode;
  levels: string[];
  teachingMethods: string[];
}

const Subjects = () => {
  const [selectedLevel, setSelectedLevel] = useState<string>('all');
  const [selectedMethod, setSelectedMethod] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  
  const subjects: SubjectType[] = [
    {
      id: 1,
      name: "الرياضيات",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      levels: ['ابتدائي', 'متوسط', 'ثانوي', 'جامعي'],
      teachingMethods: ['منزل', 'أونلاين', 'مجموعة']
    },
    {
      id: 2,
      name: "الفيزياء",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      levels: ['متوسط', 'ثانوي', 'جامعي'],
      teachingMethods: ['منزل', 'أونلاين', 'مجموعة']
    },
    {
      id: 3,
      name: "الكيمياء",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      levels: ['متوسط', 'ثانوي', 'جامعي'],
      teachingMethods: ['منزل', 'أونلاين', 'مجموعة']
    },
    {
      id: 4,
      name: "الأحياء",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      levels: ['متوسط', 'ثانوي', 'جامعي'],
      teachingMethods: ['منزل', 'أونلاين', 'مجموعة']
    },
    {
      id: 5,
      name: "اللغة العربية",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      levels: ['ابتدائي', 'متوسط', 'ثانوي', 'جامعي'],
      teachingMethods: ['منزل', 'أونلاين', 'مجموعة']
    },
    {
      id: 6,
      name: "اللغة الإنجليزية",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
        </svg>
      ),
      levels: ['ابتدائي', 'متوسط', 'ثانوي', 'جامعي'],
      teachingMethods: ['منزل', 'أونلاين', 'مجموعة']
    },
    {
      id: 7,
      name: "اللغة الفرنسية",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
        </svg>
      ),
      levels: ['متوسط', 'ثانوي', 'جامعي'],
      teachingMethods: ['منزل', 'أونلاين', 'مجموعة']
    },
    {
      id: 8,
      name: "التربية الإسلامية",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      levels: ['ابتدائي', 'متوسط', 'ثانوي'],
      teachingMethods: ['منزل', 'أونلاين', 'مجموعة']
    },
    {
      id: 9,
      name: "التاريخ",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      levels: ['متوسط', 'ثانوي', 'جامعي'],
      teachingMethods: ['منزل', 'أونلاين', 'مجموعة']
    },
    {
      id: 10,
      name: "الجغرافيا",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      levels: ['متوسط', 'ثانوي', 'جامعي'],
      teachingMethods: ['منزل', 'أونلاين', 'مجموعة']
    },
    {
      id: 11,
      name: "الحاسوب وتكنولوجيا المعلومات",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      levels: ['ابتدائي', 'متوسط', 'ثانوي', 'جامعي'],
      teachingMethods: ['منزل', 'أونلاين', 'مجموعة']
    },
    {
      id: 12,
      name: "الاقتصاد وإدارة الأعمال",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      levels: ['ثانوي', 'جامعي'],
      teachingMethods: ['منزل', 'أونلاين', 'مجموعة']
    },
    {
      id: 13,
      name: "المهارات الحياتية والبرمجة",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      levels: ['ابتدائي', 'متوسط', 'ثانوي', 'جامعي'],
      teachingMethods: ['منزل', 'أونلاين', 'مجموعة']
    }
  ];

  const filteredSubjects = subjects.filter(subject => {
    const matchesLevel = selectedLevel === 'all' || subject.levels.includes(selectedLevel);
    const matchesMethod = selectedMethod === 'all' || subject.teachingMethods.includes(selectedMethod);
    const matchesSearch = subject.name.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesLevel && matchesMethod && matchesSearch;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">المواد الدراسية المتاحة</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              اختر المادة التي ترغب في دراستها من بين مجموعة واسعة من المواد، مع أفضل المعلمين المتخصصين.
            </p>
          </div>
          
          {/* Filters */}
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
          
          {/* Subjects Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredSubjects.map((subject) => (
              <div
                key={subject.id}
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 flex flex-col items-center text-center"
              >
                <div className="text-brand-blue mb-4">{subject.icon}</div>
                <h3 className="font-semibold text-xl mb-4">{subject.name}</h3>
                <div className="text-sm text-gray-500 mb-4">
                  <p>المراحل: {subject.levels.join(', ')}</p>
                  <p>الدراسة: {subject.teachingMethods.join(', ')}</p>
                </div>
                <Button asChild className="bg-brand-blue hover:bg-brand-blue/90 mt-auto">
                  <a href={`/subjects/${subject.id}`}>عرض المعلمين</a>
                </Button>
              </div>
            ))}
          </div>
          
          {/* Empty State */}
          {filteredSubjects.length === 0 && (
            <div className="text-center py-12">
              <Book className="mx-auto h-16 w-16 text-gray-300" />
              <h3 className="mt-4 text-xl font-medium text-gray-700">لم يتم العثور على مواد دراسية</h3>
              <p className="mt-2 text-gray-500">
                جرب تغيير معايير البحث أو الفلترة للعثور على المادة المطلوبة.
              </p>
              <Button 
                variant="outline"
                onClick={() => {
                  setSelectedLevel('all');
                  setSelectedMethod('all');
                  setSearchQuery('');
                }}
                className="mt-4 border-brand-blue text-brand-blue hover:bg-brand-blue/10"
              >
                إعادة ضبط الفلترة
              </Button>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Subjects;
