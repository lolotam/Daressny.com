
export interface FooterLink {
  name: string;
  path: string;
}

export interface ContactInfo {
  platformName: string;
  slogan: string;
  email: string;
  phone: string;
  address: string;
  supportTeam: string;
  bookSession: string;
  copyright: string;
  quickLinks: string;
  teacherServices: string;
  contactUs: string;
}

export const footerLinks = {
  quickLinks: {
    ar: [
      { name: 'الرئيسية', path: '/' },
      { name: 'من نحن', path: '/about' },
      { name: 'المعلمين', path: '/teachers' },
      { name: 'المواد الدراسية', path: '/subjects' },
      { name: 'المدونة', path: '/blog' },
    ],
    en: [
      { name: 'Home', path: '/' },
      { name: 'About Us', path: '/about' },
      { name: 'Teachers', path: '/teachers' },
      { name: 'Subjects', path: '/subjects' },
      { name: 'Blog', path: '/blog' },
    ]
  },
  teacherServices: {
    ar: [
      { name: 'سجل كمعلم', path: '/register?role=teacher' },
      { name: 'تطوير المهارات', path: '/teacher-development' },
      { name: 'أسئلة شائعة للمعلمين', path: '/faq?role=teacher' },
      { name: 'قصص نجاح', path: '/success-stories' },
    ],
    en: [
      { name: 'Register as Teacher', path: '/register?role=teacher' },
      { name: 'Skill Development', path: '/teacher-development' },
      { name: 'Teacher FAQ', path: '/faq?role=teacher' },
      { name: 'Success Stories', path: '/success-stories' },
    ]
  }
};

export const contactInfo = {
  ar: {
    platformName: 'منصة درسني',
    slogan: 'مع درسني، مستقبلك بين يديك.',
    email: 'info@daressny.com',
    phone: '+96560685150',
    address: 'الكويت - السالمية',
    supportTeam: 'تواصل مع فريق الدعم',
    bookSession: 'احجز جلسة تدريبية الآن',
    copyright: `© ${new Date().getFullYear()} منصة درسني. جميع الحقوق محفوظة.`,
    quickLinks: 'روابط سريعة',
    teacherServices: 'خدمات المعلمين',
    contactUs: 'تواصل معنا'
  },
  en: {
    platformName: 'Darsni Platform',
    slogan: 'With Darsni, your future is in your hands.',
    email: 'info@daressny.com',
    phone: '+96560685150',
    address: 'Kuwait - Salmiya',
    supportTeam: 'Contact Support Team',
    bookSession: 'Book a Training Session Now',
    copyright: `© ${new Date().getFullYear()} Darsni Platform. All rights reserved.`,
    quickLinks: 'Quick Links',
    teacherServices: 'Teacher Services',
    contactUs: 'Contact Us'
  }
};
