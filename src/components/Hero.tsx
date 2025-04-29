
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export const Hero = () => {
  return (
    <div className="relative bg-gradient-to-b from-white to-blue-50 py-16 lg:py-24">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-20 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          {[...Array(10)].map((_, i) => (
            <div 
              key={i}
              className="absolute rounded-full bg-brand-blue/10"
              style={{
                width: `${Math.random() * 200 + 50}px`,
                height: `${Math.random() * 200 + 50}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="flex-1 text-center md:text-right">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              مع <span className="text-brand-blue">منصة درسني</span> النجاح أصبح أسهل وأقرب إليك!
            </h1>
            <p className="text-gray-600 text-xl mb-8 leading-relaxed">
              منصة درسني هي منصتك الأولى لحجز الدروس الخصوصية سواء بالمنزل أو أونلاين مع نخبة من أفضل المعلمين في جميع المواد الدراسية والمراحل التعليمية.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button asChild className="text-lg px-8 py-6 bg-brand-blue hover:bg-brand-blue/90">
                <Link to="/register?role=student">سجل كطالب</Link>
              </Button>
              <Button asChild variant="outline" className="text-lg px-8 py-6 border-brand-blue text-brand-blue hover:bg-brand-blue/10">
                <Link to="/register?role=teacher">سجل كمعلم</Link>
              </Button>
            </div>
          </div>
          
          <div className="flex-1">
            <img 
              src="/lovable-uploads/4d512c44-e327-4412-9921-e638faf4e113.png" 
              alt="معلمة تساعد طالبة في الدراسة" 
              className="w-full rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
