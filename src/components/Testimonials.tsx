
export const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      content: "منصة درسني ساعدتني في تحسين درجاتي بشكل كبير وخصوصًا في مادة الرياضيات. المعلمين محترفين جدًا وشرحهم واضح وسهل.",
      author: "سارة محمد",
      role: "طالبة في الصف الثالث الثانوي"
    },
    {
      id: 2,
      content: "كمدرس، أجد أن منصة درسني توفر لي فرصة ممتازة للوصول إلى طلاب جدد وتنظيم جدولي بمرونة. الدعم الفني والتقني ممتاز.",
      author: "أحمد خالد",
      role: "معلم فيزياء"
    },
    {
      id: 3,
      content: "ابنتي تحسنت بشكل ملحوظ في اللغة الإنجليزية بعد أخذ دروس خصوصية من خلال منصة درسني. سهولة الحجز والمتابعة ميزة رائعة.",
      author: "منى عبدالله",
      role: "ولي أمر"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">ماذا يقول <span className="text-brand-blue">الطلبة والمعلمين</span> عنا</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            آراء حقيقية من مستخدمي منصة درسني
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-gray-50 p-8 rounded-lg shadow-sm">
              <svg className="h-10 w-10 text-brand-gold mb-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="mb-6 text-gray-600">{testimonial.content}</p>
              <div>
                <p className="font-bold">{testimonial.author}</p>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
