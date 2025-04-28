
import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card } from "@/components/ui/card";

const TeachersList = () => {
  // Sample teachers data
  const allTeachers = [
    {
      id: 1,
      name: "د. محمد أحمد",
      subject: "الرياضيات",
      rating: 4.9,
      reviews: 124,
      hourlyRate: 150,
      experience: "10+ سنوات",
      image: "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=200&h=200&fit=crop"
    },
    {
      id: 2,
      name: "أ. سارة محمود",
      subject: "اللغة الإنجليزية",
      rating: 4.8,
      reviews: 98,
      hourlyRate: 130,
      experience: "8 سنوات",
      image: "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?w=200&h=200&fit=crop"
    },
    {
      id: 3,
      name: "د. أحمد خالد",
      subject: "الفيزياء",
      rating: 4.7,
      reviews: 87,
      hourlyRate: 140,
      experience: "12 سنة",
      image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=200&h=200&fit=crop"
    },
    {
      id: 4,
      name: "أ. فاطمة علي",
      subject: "الكيمياء",
      rating: 4.9,
      reviews: 110,
      hourlyRate: 145,
      experience: "7 سنوات",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop"
    },
    {
      id: 5,
      name: "أ. عبدالله محمد",
      subject: "اللغة العربية",
      rating: 4.6,
      reviews: 76,
      hourlyRate: 120,
      experience: "9 سنوات",
      image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=200&h=200&fit=crop"
    },
    {
      id: 6,
      name: "د. نورة عبدالرحمن",
      subject: "الأحياء",
      rating: 4.8,
      reviews: 92,
      hourlyRate: 135,
      experience: "6 سنوات",
      image: "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?w=200&h=200&fit=crop"
    },
    {
      id: 7,
      name: "م. خالد العمري",
      subject: "الحاسب الآلي",
      rating: 4.7,
      reviews: 68,
      hourlyRate: 160,
      experience: "5 سنوات",
      image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=200&h=200&fit=crop"
    },
    {
      id: 8,
      name: "أ. ليلى حسن",
      subject: "الرياضيات",
      rating: 4.5,
      reviews: 61,
      hourlyRate: 125,
      experience: "4 سنوات",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop"
    }
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [subjectFilter, setSubjectFilter] = useState("");
  const [priceSort, setPriceSort] = useState("");
  const [ratingSort, setRatingSort] = useState("");

  // Filter and sort teachers
  const filteredTeachers = allTeachers
    .filter(teacher => {
      const matchesSearch = teacher.name.includes(searchTerm) || 
                           teacher.subject.includes(searchTerm);
      const matchesSubject = subjectFilter ? teacher.subject === subjectFilter : true;
      return matchesSearch && matchesSubject;
    })
    .sort((a, b) => {
      if (priceSort === "low-to-high") return a.hourlyRate - b.hourlyRate;
      if (priceSort === "high-to-low") return b.hourlyRate - a.hourlyRate;
      if (ratingSort === "high-to-low") return b.rating - a.rating;
      return 0;
    });

  // Get unique subjects for filter
  const subjects = [...new Set(allTeachers.map(teacher => teacher.subject))];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow py-12 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="mb-10">
            <h1 className="text-3xl font-bold mb-2">المعلمين المتميزين</h1>
            <p className="text-gray-600">
              اكتشف نخبة المعلمين المؤهلين في جميع المواد الدراسية
            </p>
          </div>

          {/* Filters */}
          <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
            <h2 className="text-xl font-semibold mb-4">البحث والتصفية</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <Label htmlFor="search">البحث عن معلم</Label>
                <Input 
                  id="search" 
                  placeholder="ابحث بالاسم أو المادة" 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="subject-filter">تصفية حسب المادة</Label>
                <Select value={subjectFilter} onValueChange={setSubjectFilter}>
                  <SelectTrigger id="subject-filter">
                    <SelectValue placeholder="جميع المواد" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">جميع المواد</SelectItem>
                    {subjects.map((subject, index) => (
                      <SelectItem key={index} value={subject}>{subject}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="price-sort">ترتيب حسب السعر</Label>
                <Select value={priceSort} onValueChange={setPriceSort}>
                  <SelectTrigger id="price-sort">
                    <SelectValue placeholder="ترتيب افتراضي" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="default">ترتيب افتراضي</SelectItem>
                    <SelectItem value="low-to-high">الأقل سعرًا</SelectItem>
                    <SelectItem value="high-to-low">الأعلى سعرًا</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="rating-sort">ترتيب حسب التقييم</Label>
                <Select value={ratingSort} onValueChange={setRatingSort}>
                  <SelectTrigger id="rating-sort">
                    <SelectValue placeholder="ترتيب افتراضي" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="default">ترتيب افتراضي</SelectItem>
                    <SelectItem value="high-to-low">الأعلى تقييمًا</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Teachers List */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredTeachers.map((teacher) => (
              <Card key={teacher.id} className="overflow-hidden hover:shadow-md transition-shadow">
                <div className="relative">
                  <img 
                    src={teacher.image} 
                    alt={`صورة ${teacher.name}`}
                    className="w-full h-52 object-cover" 
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <div className="flex items-center gap-1 text-white">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.799-2.031c-.784-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span>{teacher.rating}</span>
                      <span className="text-sm">({teacher.reviews} تقييم)</span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-lg mb-1">{teacher.name}</h3>
                  <p className="text-gray-600 mb-2">{teacher.subject}</p>
                  <p className="text-gray-500 mb-3 text-sm">خبرة: {teacher.experience}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-brand-blue font-bold">{teacher.hourlyRate} ريال/ساعة</span>
                    <Button asChild variant="outline" size="sm">
                      <Link to={`/teachers/${teacher.id}`}>عرض الملف</Link>
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Empty State */}
          {filteredTeachers.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">لم يتم العثور على معلمين</h3>
              <p className="text-gray-600 mb-6">جرب تغيير معايير البحث أو التصفية</p>
              <Button onClick={() => {setSearchTerm(""); setSubjectFilter(""); setPriceSort(""); setRatingSort("");}}>
                إعادة ضبط البحث
              </Button>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TeachersList;
