export interface Teacher {
  id: number;
  name: string;
  subject: string;
  subjects: string[];
  rating: number;
  reviews: number;
  hourlyRate: number;
  hourlyRateRanges?: {
    elementary: number;
    middle: number;
    high: number;
    university: number;
  };
  experience: string;
  image: string;
  bio?: string;
  qualifications?: string[];
  achievements?: string[];
  philosophy?: string;
  location?: string;
  availability?: string;
}

export interface Subject {
  id: number;
  name: string;
  description: string;
  topics: string[];
  skills: string[];
  certificates: string[];
  advantages: string[];
  image: string;
  icon: string;
}

export const teachersData: Teacher[] = [
  {
    id: 1,
    name: "د. محمد أحمد",
    subject: "الرياضيات",
    subjects: ["الرياضيات", "الإحصاء"],
    rating: 4.9,
    reviews: 124,
    hourlyRate: 150,
    hourlyRateRanges: {
      elementary: 15,
      middle: 18,
      high: 22,
      university: 25
    },
    experience: "10+ سنوات",
    image: "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=200&h=200&fit=crop",
    bio: "حاصل على دكتوراه في الرياضيات من جامعة الكويت، لديه خبرة أكثر من 10 سنوات في تدريس الرياضيات لجميع المراحل الدراسية.",
    qualifications: [
      "دكتوراه في الرياضيات - جامعة الكويت",
      "ماجستير في أساليب تدريس الرياضيات",
      "بكالوريوس في العلوم الرياضية"
    ],
    achievements: [
      "جائزة أفضل معلم رياضيات على مستوى الكويت 2021",
      "مؤلف كتاب 'أسرار النجاح في الرياضيات'",
      "مدرب معتمد في أولمبياد الرياضيات"
    ],
    philosophy: "أؤمن أن الرياضيات ليست مجرد أرقام ومعادلات، بل هي أسلوب تفكير وطريقة لفهم العالم من حولنا. هدفي أن أجعل كل طالب يرى جمال الرياضيات ويستمتع بحل المسائل.",
    location: "الكويت",
    availability: "متاح يومياً من 3 مساءً - 9 مساءً"
  },
  {
    id: 2,
    name: "أ. سارة محمود",
    subject: "اللغة الإنجليزية",
    subjects: ["اللغة الإنجليزية", "مهارات التواصل"],
    rating: 4.8,
    reviews: 98,
    hourlyRate: 130,
    hourlyRateRanges: {
      elementary: 15,
      middle: 17,
      high: 20,
      university: 24
    },
    experience: "8 سنوات",
    image: "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?w=200&h=200&fit=crop",
    bio: "مدرسة لغة إنجليزية متميزة حاصلة على شهادة CELTA من جامعة كامبريدج، لديها خبرة 8 سنوات في تدريس اللغة الإنجليزية لمختلف المستويات والأعمار.",
    qualifications: [
      "شهادة CELTA من جامعة كامبريدج",
      "بكالوريوس في الآداب تخصص لغة إنجليزية",
      "دبلوم في الترجمة المعتمدة"
    ],
    achievements: [
      "مترجمة معتمدة لدى وزارة العدل",
      "كاتبة في مجلة تعليمية شهرية",
      "مقدمة برنامج تعليمي على منصات التواصل الاجتماعي"
    ],
    philosophy: "اللغة هي جسر للتواصل مع العالم، وأسعى لتمكين طلابي من عبور هذا الجسر بثقة وإتقان. أركز على الممارسة العملية والتطبيق اليومي للغة.",
    location: "الكويت",
    availability: "متاحة من السبت إلى الخميس، 4 مساءً - 8 مساءً"
  },
  {
    id: 3,
    name: "د. أحمد خالد",
    subject: "الفيزياء",
    subjects: ["الفيزياء", "الميكانيكا"],
    rating: 4.7,
    reviews: 87,
    hourlyRate: 140,
    hourlyRateRanges: {
      elementary: 15,
      middle: 18,
      high: 22,
      university: 25
    },
    experience: "12 سنة",
    image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=200&h=200&fit=crop",
    bio: "دكتور في الفيزياء النظرية مع خبرة 12 عام في التدريس، حاصل على العديد من الجوائز العلمية، ويعمل أيضاً كباحث في مجال الفيزياء.",
    qualifications: [
      "دكتوراه في الفيزياء النظرية - جامعة كاليفورنيا",
      "ماجستير في فيزياء الجسيمات",
      "بكالوريوس في العلوم الفيزيائية"
    ],
    location: "الكويت",
    availability: "متاح أيام السبت والاثنين والأربعاء"
  },
  {
    id: 4,
    name: "أ. فاطمة علي",
    subject: "الكيمياء",
    subjects: ["الكيمياء", "الكيمياء العضوية"],
    rating: 4.9,
    reviews: 110,
    hourlyRate: 145,
    hourlyRateRanges: {
      elementary: 15,
      middle: 18,
      high: 22,
      university: 25
    },
    experience: "7 سنوات",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop",
    bio: "متخصصة في الكيمياء العضوية ولديها خبرة سبع سنوات في التدريس. تتميز بأسلوبها الممتع في شرح التجارب العملية وربطها بالحياة اليومية.",
    location: "الكويت",
    availability: "متاحة أيام الأحد والثلاثاء والخميس"
  },
  {
    id: 5,
    name: "أ. عبدالله محمد",
    subject: "اللغة العربية",
    subjects: ["اللغة العربية", "النحو والصرف"],
    rating: 4.6,
    reviews: 76,
    hourlyRate: 120,
    hourlyRateRanges: {
      elementary: 15,
      middle: 18,
      high: 22,
      university: 25
    },
    experience: "9 سنوات",
    image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=200&h=200&fit=crop",
    location: "الكويت",
    availability: "متاح يومياً من 4 مساءً - 10 مساءً"
  },
  {
    id: 6,
    name: "د. نورة عبدالرحمن",
    subject: "الأحياء",
    subjects: ["الأحياء", "علم التشريح"],
    rating: 4.8,
    reviews: 92,
    hourlyRate: 135,
    hourlyRateRanges: {
      elementary: 15,
      middle: 18,
      high: 22,
      university: 25
    },
    experience: "6 سنوات",
    image: "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?w=200&h=200&fit=crop",
    location: "الكويت",
    availability: "متاحة في الفترة المسائية"
  },
  {
    id: 7,
    name: "م. خالد العمري",
    subject: "الحاسب الآلي",
    subjects: ["الحاسب الآلي", "البرمجة"],
    rating: 4.7,
    reviews: 68,
    hourlyRate: 160,
    hourlyRateRanges: {
      elementary: 15,
      middle: 18,
      high: 22,
      university: 25
    },
    experience: "5 سنوات",
    image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=200&h=200&fit=crop",
    location: "الكويت",
    availability: "متاح في أيام العطل والإجازات"
  },
  {
    id: 8,
    name: "أ. ليلى حسن",
    subject: "الرياضيات",
    subjects: ["الرياضيات", "الجبر"],
    rating: 4.5,
    reviews: 61,
    hourlyRate: 125,
    hourlyRateRanges: {
      elementary: 15,
      middle: 18,
      high: 22,
      university: 25
    },
    experience: "4 سنوات",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop",
    location: "الكويت",
    availability: "متاحة صباحاً ومساءً"
  },
  {
    id: 9,
    name: "د. عمر الشمري",
    subject: "الرياضيات",
    subjects: ["الرياضيات", "التفاضل والتكامل"],
    rating: 4.8,
    reviews: 95,
    hourlyRate: 160,
    hourlyRateRanges: {
      elementary: 16,
      middle: 19,
      high: 23,
      university: 28
    },
    experience: "14 سنة",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop",
    location: "الكويت",
    availability: "متاح جميع أيام الأسبوع عدا الجمعة"
  },
  {
    id: 10,
    name: "أ. هدى العنزي",
    subject: "الرياضيات",
    subjects: ["الرياضيات", "الهندسة"],
    rating: 4.6,
    reviews: 87,
    hourlyRate: 130,
    hourlyRateRanges: {
      elementary: 14,
      middle: 17,
      high: 20,
      university: 24
    },
    experience: "8 سنوات",
    image: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?w=200&h=200&fit=crop",
    location: "الكويت",
    availability: "متاحة في الفترات المسائية"
  },
  {
    id: 11,
    name: "د. يوسف الفهد",
    subject: "الفيزياء",
    subjects: ["الفيزياء", "الفلك"],
    rating: 4.9,
    reviews: 112,
    hourlyRate: 170,
    hourlyRateRanges: {
      elementary: 16,
      middle: 19,
      high: 24,
      university: 30
    },
    experience: "15 سنة",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop",
    location: "الكويت",
    availability: "متاح في الفترات الصباحية والمسائية"
  },
  {
    id: 12,
    name: "أ. مريم البلوشي",
    subject: "الفيزياء",
    subjects: ["الفيزياء", "الكهرومغناطيسية"],
    rating: 4.7,
    reviews: 78,
    hourlyRate: 145,
    hourlyRateRanges: {
      elementary: 15,
      middle: 18,
      high: 22,
      university: 26
    },
    experience: "7 سنوات",
    image: "https://images.unsplash.com/photo-1544717305-2782549b5136?w=200&h=200&fit=crop",
    location: "الكويت",
    availability: "متاحة مساءً من الأحد إلى الخميس"
  },
  {
    id: 13,
    name: "د. صالح العتيبي",
    subject: "الكيمياء",
    subjects: ["الكيمياء", "الكيمياء الفيزيائية"],
    rating: 4.8,
    reviews: 104,
    hourlyRate: 155,
    hourlyRateRanges: {
      elementary: 15,
      middle: 18,
      high: 23,
      university: 27
    },
    experience: "11 سنة",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop",
    location: "الكويت",
    availability: "متاح طوال أيام الأسبوع"
  },
  {
    id: 14,
    name: "أ. غادة المطيري",
    subject: "الكيمياء",
    subjects: ["الكيمياء", "الكيمياء التحليلية"],
    rating: 4.6,
    reviews: 82,
    hourlyRate: 140,
    hourlyRateRanges: {
      elementary: 14,
      middle: 16,
      high: 21,
      university: 25
    },
    experience: "9 سنوات",
    image: "https://images.unsplash.com/photo-1618088129969-bcb0c051985e?w=200&h=200&fit=crop",
    location: "الكويت",
    availability: "متاحة من الساعة 3 عصراً حتى 9 مساءً"
  },
  {
    id: 15,
    name: "أ. سعد الماجد",
    subject: "اللغة العربية",
    subjects: ["اللغة العربية", "البلاغة"],
    rating: 4.8,
    reviews: 97,
    hourlyRate: 135,
    hourlyRateRanges: {
      elementary: 14,
      middle: 17,
      high: 20,
      university: 24
    },
    experience: "13 سنة",
    image: "https://images.unsplash.com/photo-1540569014015-19a7be504e3a?w=200&h=200&fit=crop",
    location: "الكويت",
    availability: "متاح يومياً من الساعة 4 مساءً"
  },
  {
    id: 16,
    name: "د. منيرة السالم",
    subject: "اللغة العربية",
    subjects: ["اللغة العربية", "الأدب العربي"],
    rating: 4.9,
    reviews: 108,
    hourlyRate: 150,
    hourlyRateRanges: {
      elementary: 15,
      middle: 18,
      high: 22,
      university: 26
    },
    experience: "16 سنة",
    image: "https://images.unsplash.com/photo-1581339954406-c913e7c4ccbf?w=200&h=200&fit=crop",
    location: "الكويت",
    availability: "متاحة في الفترة الصباحية"
  },
  {
    id: 17,
    name: "أ. ناصر العجمي",
    subject: "اللغة الإنجليزية",
    subjects: ["اللغة الإنجليزية", "الكتابة الأكاديمية"],
    rating: 4.7,
    reviews: 91,
    hourlyRate: 145,
    hourlyRateRanges: {
      elementary: 15,
      middle: 18,
      high: 21,
      university: 25
    },
    experience: "10 سنوات",
    image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=200&h=200&fit=crop",
    location: "الكويت",
    availability: "متاح في الفترة المسائية من 5 إلى 10"
  },
  {
    id: 18,
    name: "د. دانة الخالدي",
    subject: "اللغة الإنجليزية",
    subjects: ["اللغة الإنجليزية", "المحادثة"],
    rating: 4.9,
    reviews: 125,
    hourlyRate: 160,
    hourlyRateRanges: {
      elementary: 16,
      middle: 19,
      high: 23,
      university: 28
    },
    experience: "12 سنة",
    image: "https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?w=200&h=200&fit=crop",
    location: "الكويت",
    availability: "متاحة طوال اليوم في عطلة نهاية الأسبوع"
  },
  {
    id: 19,
    name: "د. حمد الراشد",
    subject: "الأحياء",
    subjects: ["الأحياء", "علم الوراثة"],
    rating: 4.8,
    reviews: 89,
    hourlyRate: 150,
    hourlyRateRanges: {
      elementary: 15,
      middle: 18,
      high: 22,
      university: 26
    },
    experience: "9 سنوات",
    image: "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?w=200&h=200&fit=crop",
    location: "الكويت",
    availability: "متاح في المساء من 4 إلى 9"
  },
  {
    id: 20,
    name: "أ. بدرية الكندري",
    subject: "الأحياء",
    subjects: ["الأحياء", "علم الأحياء الجزيئي"],
    rating: 4.7,
    reviews: 76,
    hourlyRate: 140,
    hourlyRateRanges: {
      elementary: 14,
      middle: 17,
      high: 21,
      university: 25
    },
    experience: "7 سنوات",
    image: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=200&h=200&fit=crop",
    location: "الكويت",
    availability: "متاحة في الفترة الصباحية والمسائية"
  },
  {
    id: 21,
    name: "م. فيصل الحربي",
    subject: "الحاسب الآلي",
    subjects: ["الحاسب الآلي", "تطوير التطبيقات"],
    rating: 4.9,
    reviews: 117,
    hourlyRate: 175,
    hourlyRateRanges: {
      elementary: 16,
      middle: 19,
      high: 24,
      university: 30
    },
    experience: "8 سنوات",
    image: "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?w=200&h=200&fit=crop",
    location: "الكويت",
    availability: "متاح في الفترة المسائية"
  },
  {
    id: 22,
    name: "أ. نوف العتيبي",
    subject: "الحاسب الآلي",
    subjects: ["الحاسب الآلي", "تصميم المواقع"],
    rating: 4.8,
    reviews: 94,
    hourlyRate: 155,
    hourlyRateRanges: {
      elementary: 15,
      middle: 18,
      high: 22,
      university: 26
    },
    experience: "6 سنوات",
    image: "https://images.unsplash.com/photo-1587614387466-0a72ca909e16?w=200&h=200&fit=crop",
    location: "الكويت",
    availability: "متاح طوال أيام الأسبوع ماعدا الجمعة"
  }
];

export const subjectsData: Subject[] = [
  {
    id: 1,
    name: "الرياضيات",
    description: "تعد الرياضيات من أهم المواد الأساسية التي تنمي مهارات التفكير المنطقي وحل المشكلات. نقدم دروساً في الجبر والهندسة وحساب المثلثات والتفاضل والتكامل.",
    topics: [
      "الجبر والمعادلات",
      "الهندسة وقياس المساحات",
      "حساب المثلثات",
      "التفاضل والتكامل",
      "الإحصاء والاحتمالات"
    ],
    skills: [
      "التفكير المنطقي والتحليلي",
      "حل المشكلات المعقدة",
      "تطبيق النظريات في الحياة العملية",
      "تحليل البيانات واتخاذ القرارات"
    ],
    certificates: [
      "شهادة التفوق في الرياضيات",
      "تأهيل للمشاركة في أولمبياد الرياضيات"
    ],
    advantages: [
      "نخبة من المعلمين الحاصلين على درجات علمية عالية",
      "استخدام أساليب تدريس حديثة وتفاعلية",
      "تقديم تمارين وتطبيقات عملية",
      "أدوات تعليمية مبتكرة تساعد على فهم المفاهيم الصعبة"
    ],
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&auto=format&fit=crop",
    icon: "calculator"
  },
  {
    id: 2,
    name: "اللغة الإنجليزية",
    description: "اللغة الإنجليزية هي لغة العالم، ومفتاح للتواصل العالمي والفرص الأكاديمية والمهنية. نركز على تطوير مهارات القراءة والكتابة والتحدث والاستماع.",
    topics: [
      "قواعد اللغة الإنجليزية",
      "مهارات الكتابة الأكاديمية",
      "المحادثة والتواصل",
      "فهم النصوص والاستماع",
      "الإعداد لاختبارات اللغة العالمية"
    ],
    skills: [
      "التواصل الفعال باللغة الإنجليزية",
      "القراءة النقدية للنصوص",
      "كتابة المقالات والتقارير بلغة سليمة",
      "إجراء المحادثات بطلاقة وثقة"
    ],
    certificates: [
      "شهادة إتقان اللغة الإنجليزية",
      "تأهيل لاختبارات IELTS وTOEFL"
    ],
    advantages: [
      "معلمون متخصصون من متحدثي اللغة الإنجليزية كلغة أم",
      "استخدام طرق تدريس تفاعلية وممتعة",
      "ممارسة اللغة من خلال محادثات واقعية",
      "مواد تعليمية حديثة ومتنوعة"
    ],
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&auto=format&fit=crop",
    icon: "book-open"
  },
  {
    id: 3,
    name: "الفيزياء",
    description: "الفيزياء هي علم دراسة الطاقة والمادة وتفاعلاتها. تساعد الطلاب على فهم العالم من حولهم من خلال دراسة القوانين والظواهر الطبيعية.",
    topics: [
      "الميكانيكا والحركة",
      "الحرارة والديناميكا الحرارية",
      "الكهرباء والمغناطيسية",
      "الضوء والبصريات",
      "الفيزياء الحديثة والذرية"
    ],
    skills: [
      "التجريب العلمي وتصميم التجارب",
      "التحليل الرياضي للظواهر الفيزيائية",
      "حل المشكلات الفيزيائية المعقدة",
      "تطبيق القوانين الفيزيائية في الحياة العملية"
    ],
    certificates: [
      "شهادة التفوق في علوم الفيزياء",
      "تأهيل للمشاركة في المسابقات العلمية"
    ],
    advantages: [
      "معلمون حاصلون على درجات علمية متقدمة في الفيزياء",
      "تجارب عملية وتطبيقات تفاعلية",
      "ربط المفاهيم النظرية بالتطبيقات العملية",
      "استخدام تقنيات المحاكاة والنمذجة الحديثة"
    ],
    image: "https://images.unsplash.com/photo-1636905101073-9e1e79b644de?w=800&auto=format&fit=crop",
    icon: "link"
  },
  {
    id: 4,
    name: "الكيمياء",
    description: "الكيمياء هي علم دراسة المادة وتفاعلاتها والتغيرات التي تطرأ عليها. نقدم شرحاً مبسطاً للمفاهيم المعقدة وتجارب عملية لترسيخ الفهم.",
    topics: [
      "الكيمياء العامة والأساسيات",
      "الكيمياء العضوية",
      "الكيمياء غير العضوية",
      "التحليل الكيميائي",
      "الكيمياء الفيزيائية"
    ],
    skills: [
      "إجراء التجارب المخبرية بأمان",
      "تحليل النتائج واستخلاص الاستنتاجات",
      "فهم التفاعلات الكيميائية وتطبيقاتها",
      "التعامل مع المعادلات الكيميائية"
    ],
    certificates: [
      "شهادة التميز في الكيمياء",
      "تأهيل للمسابقات العلمية الكيميائية"
    ],
    advantages: [
      "معلمون ذوو خبرة في تبسيط المفاهيم المعقدة",
      "تجارب عملية آمنة وتفاعلية",
      "استخدام وسائل إيضاح ومحاكاة للتفاعلات",
      "ربط المفاهيم الكيميائية بالحياة اليومية"
    ],
    image: "https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6?w=800&auto=format&fit=crop",
    icon: "file-text"
  },
  {
    id: 5,
    name: "اللغة العربية",
    description: "اللغة العربية هي لغة القرآن الكريم والتراث العربي الغني. نساعد الطلاب على إتقان قواعد اللغة والبلاغة والأدب للتعبير بلغة سليمة وفصيحة.",
    topics: [
      "النحو والصرف",
      "البلاغة والأسلوب",
      "الأدب العربي",
      "النصوص والشعر",
      "التعبير والإنشاء"
    ],
    skills: [
      "القراءة الصحيحة والفهم العميق",
      "التعبير الكتابي السليم",
      "تحليل النصوص الأدبية",
      "التحدث بلغة عربية فصيحة"
    ],
    certificates: [
      "شهادة التفوق في اللغة العربية",
      "تأهيل للمسابقات الأدبية والشعرية"
    ],
    advantages: [
      "معلمون متخصصون في فروع اللغة المختلفة",
      "استخدام أساليب تدريس تفاعلية",
      "الاعتماد على نصوص متنوعة من التراث والأدب الحديث",
      "تنمية مهارات الإلقا�� والخطابة"
    ],
    image: "https://images.unsplash.com/photo-1639669896097-7c8bba127a75?w=800&auto=format&fit=crop",
    icon: "book"
  },
  {
    id: 6,
    name: "الأحياء",
    description: "علم الأحياء يدرس الكائنات الحية وتفاعلاتها مع بيئاتها. نساعد الطلاب على فهم أساسيات علم الأحياء وتطبيقاته في الحياة اليومية.",
    topics: [
      "الخلية والأنسجة",
      "التصنيف وتنوع الكائنات الحية",
      "الوراثة والجينات",
      "وظائف الأعضاء وأجهزة الجسم",
      "البيئة والنظم البيئية"
    ],
    skills: [
      "إجراء التجارب والملاحظات العلمية",
      "تشريح الكائنات الحية وفهم تركيبها",
      "تحليل البيانات البيولوجية",
      "تطبيق المفاهيم العلمية في الحياة"
    ],
    certificates: [
      "شهادة التميز في علوم الأحياء",
      "تأهيل للدراسات الطبية والصحية"
    ],
    advantages: [
      "معلمون ذوو خبرة أكاديمية عالية",
      "استخدام نماذج توضيحية وعينات حقيقية",
      "تجارب عملية ومشاهدات مجهرية",
      "ربط علم الأحياء بالتطبيقات الطبية والصحية"
    ],
    image: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=800&auto=format&fit=crop",
    icon: "user"
  },
  {
    id: 7,
    name: "الحاسب الآلي",
    description: "علم الحاسب يشمل دراسة أساسيات البرمجة والشبكات وقواعد البيانات وأمن المعلومات. نوفر تعليماً عملياً يجمع بين الجانب النظري والتطبيقي.",
    topics: [
      "أساسيات البرمجة",
      "قواعد البيانات",
      "تصميم مواقع الإنترنت",
      "شبكات الحاسوب",
      "أمن المعلومات"
    ],
    skills: [
      "كتابة وتصحيح الأكواد البرمجية",
      "تصميم وإدارة قواعد البيانات",
      "إنشاء وتطوير تطبيقات الويب",
      "حل المشكلات التقنية"
    ],
    certificates: [
      "شهادة مهارات الحاسب الآلي",
      "شهادة البرمجة المتقدمة"
    ],
    advantages: [
      "معلمون ذوو خبرة عملية في مجال تكنولوجيا المعلومات",
      "مختبرات حاسوبية مجهزة بأحدث التقنيات",
      "تطبيق المفاهيم العملية من خلال مشاريع واقعية",
      "تدريب على أحدث البرامج والتقنيات"
    ],
    image: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=800&auto=format&fit=crop",
    icon: "search"
  }
];

export const allTeachers = teachersData;

export const getUniqueSubjects = (): string[] => {
  return [...new Set(teachersData.map(teacher => teacher.subject))];
};

export const getTeachersBySubject = (subjectName: string): Teacher[] => {
  if (!subjectName) return teachersData;
  return teachersData.filter(teacher => 
    teacher.subject === subjectName || 
    teacher.subjects.includes(subjectName)
  );
};

export const getSubjectById = (id: number): Subject | undefined => {
  return subjectsData.find(subject => subject.id === id);
};

export const getTeacherById = (id: number): Teacher | undefined => {
  return teachersData.find(teacher => teacher.id === id);
};

export const filterTeachers = (
  searchTerm: string = "",
  subjectFilter: string = "",
  priceSort: string = "",
  ratingSort: string = ""
): Teacher[] => {
  return teachersData
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
