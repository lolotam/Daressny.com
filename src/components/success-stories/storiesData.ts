
import { StudentStory } from './StudentStoryCard';
import { TeacherStory } from './TeacherStoryCard';

export const studentStories: StudentStory[] = [
  {
    id: 1,
    name: "فاطمة العنزي",
    testimonial: "بفضل معلمتي في منصة درسني ارتفع معدلي في الرياضيات من 65% إلى 92%! الشرح الواضح والتمارين المخصصة ساعدتني كثيرًا.",
    image: "https://images.unsplash.com/photo-1517256673644-36ad11246d21?q=80&w=500",
    subject: "الرياضيات",
    improvement: "ارتفاع 27% في المعدل",
    achievement: "قبول في كلية الهندسة"
  },
  {
    id: 2,
    name: "أحمد السالم",
    testimonial: "كنت أعاني من صعوبة في فهم الفيزياء، لكن بعد 3 أشهر من الدروس الخصوصية مع أستاذ علي، أصبحت من المتفوقين في الصف!",
    image: "https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?q=80&w=500",
    subject: "الفيزياء",
    improvement: "من راسب إلى 88%",
    achievement: "منحة دراسية جزئية"
  },
  {
    id: 3,
    name: "نورة الفهد",
    testimonial: "استطعت التفوق في اختبار القدرات بمعدل 95% بفضل البرنامج التدريبي المكثف الذي التحقت به عبر منصة درسني.",
    image: "https://images.unsplash.com/photo-1581403341630-a6e0b9d2d257?q=80&w=500",
    subject: "اختبار القدرات",
    improvement: "معدل 95%",
    achievement: "قبول في كلية الطب"
  },
  {
    id: 4,
    name: "عبدالله المطيري",
    testimonial: "تحسنت مهاراتي في اللغة الإنجليزية بشكل كبير. أصبحت قادرًا على التحدث بطلاقة وثقة بعد 6 أشهر من الدروس على منصة درسني.",
    image: "https://images.unsplash.com/photo-1555952494-efd681c7e3f9?q=80&w=500",
    subject: "اللغة الإنجليزية",
    improvement: "اجتياز اختبار IELTS بمعدل 7.5",
    achievement: "قبول في جامعة بريطانية"
  },
  {
    id: 5,
    name: "سارة العتيبي",
    testimonial: "المعلمة نورة غيرت نظرتي للكيمياء تمامًا. تبسيطها للمفاهيم المعقدة ساعدني على الفهم العميق وليس مجرد الحفظ.",
    image: "https://images.unsplash.com/photo-1543269664-56d93c1b41a6?q=80&w=500",
    subject: "الكيمياء",
    improvement: "ارتفاع من 72% إلى 94%",
    achievement: "المركز الأول في المدرسة"
  }
];

export const teacherStories: TeacherStory[] = [
  {
    id: 1,
    name: "د. محمد الشمري",
    testimonial: "بعد انضمامي لمنصة درسني، تمكنت من الوصول إلى مئات الطلاب حول العالم. ازدادت دخلي 3 أضعاف، وأصبح لدي مرونة أكبر في جدولي.",
    image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=500",
    subject: "الرياضيات المتقدمة",
    students: "أكثر من 500 طالب",
    experience: "15 سنة خبرة في التدريس"
  },
  {
    id: 2,
    name: "أ. نورة السعد",
    testimonial: "المنصة وفرت لي فرصة لمساعدة الطالبات في تطوير مهاراتهن في اللغة الإنجليزية. أشعر بالفخر عندما أرى نتائجهن المتميزة.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=500",
    subject: "اللغة الإنجليزية",
    students: "أكثر من 350 طالبة",
    experience: "12 سنة خبرة في التدريس"
  },
  {
    id: 3,
    name: "د. عبدالرحمن الخالد",
    testimonial: "كأستاذ جامعي، أجد في منصة درسني وسيلة رائعة لمساعدة الطلاب خارج أوقات المحاضرات. المنصة سهلة الاستخدام وتقنيًا متطورة.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=500",
    subject: "الفيزياء والميكانيكا",
    students: "أكثر من 200 طالب",
    experience: "20 سنة خبرة أكاديمية"
  },
  {
    id: 4,
    name: "أ. فاطمة الحربي",
    testimonial: "بدأت كمعلمة بدوام جزئي، والآن أدير فريقًا من المعلمات على المنصة. لم أكن أتخيل أن شغفي بالتعليم سيتحول إلى مشروع ناجح.",
    image: "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?q=80&w=500",
    subject: "العلوم والأحياء",
    students: "أكثر من 650 طالب",
    experience: "10 سنوات خبرة"
  }
];
