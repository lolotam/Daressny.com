
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export const CallToAction = () => {
  return (
    <section className="py-16 bg-brand-blue text-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">انضم إلينا الآن واحصل على تجربة تعليمية متميزة</h2>
          <p className="mb-8 text-lg">
            سواء كنت طالبًا تبحث عن معلم متميز أو معلمًا تريد توسيع نطاق تدريسك، منصة درسني هي وجهتك الأمثل
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="bg-white text-brand-blue hover:bg-white/90">
              <Link to="/register?role=student">سجل كطالب</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <Link to="/register?role=teacher">سجل كمعلم</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
