import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const FeaturedTeachers = () => {
  // Sample teachers data
  const teachers = [
    {
      id: 1,
      name: "د. محمد أحمد",
      subject: "الرياضيات",
      rating: 4.9,
      reviews: 124,
      image: "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=200&h=200&fit=crop"
    },
    {
      id: 2,
      name: "أ. سارة محمود",
      subject: "اللغة الإنجليزية",
      rating: 4.8,
      reviews: 98,
      image: "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?w=200&h=200&fit=crop"
    },
    {
      id: 3,
      name: "د. أحمد خالد",
      subject: "الفيزياء",
      rating: 4.7,
      reviews: 87,
      image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=200&h=200&fit=crop"
    },
    {
      id: 4,
      name: "أ. فاطمة علي",
      subject: "الكيمياء",
      rating: 4.9,
      reviews: 110,
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">معلمون <span className="text-brand-blue">مميزون</span></h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            نخبة من المعلمين المتميزين في مختلف المواد الدراسية
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teachers.map((teacher) => (
            <Card key={teacher.id} className="overflow-hidden hover:shadow-lg transition-shadow">
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
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-1">{teacher.name}</h3>
                <p className="text-gray-600 mb-3">{teacher.subject}</p>
                <div className="flex justify-between items-center">
                  <Button asChild variant="outline" size="sm">
                    <Link to={`/teachers/${teacher.id}`}>عرض الملف</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild variant="outline" className="text-lg px-8 py-6 border-brand-blue text-brand-blue hover:bg-brand-blue/10">
            <Link to="/teachers">عرض جميع المعلمين</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
