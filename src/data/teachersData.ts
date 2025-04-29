
export interface Teacher {
  id: number;
  name: string;
  subject: string;
  rating: number;
  reviews: number;
  hourlyRate: number;
  experience: string;
  image: string;
}

export const allTeachers: Teacher[] = [
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

export const getUniqueSubjects = (): string[] => {
  return [...new Set(allTeachers.map(teacher => teacher.subject))];
};

export const filterTeachers = (
  searchTerm: string = "",
  subjectFilter: string = "",
  priceSort: string = "",
  ratingSort: string = ""
): Teacher[] => {
  return allTeachers
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
};
