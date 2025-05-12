
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

export const Hero = () => {
  const { language, t } = useLanguage();
  
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
            {language === 'ar' ? (
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                مع <span className="text-brand-blue">منصة درسني</span> النجاح أصبح أسهل وأقرب إليك!
              </h1>
            ) : (
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                With <span className="text-brand-blue">Darsni Platform</span> success is easier and closer to you!
              </h1>
            )}
            
            {language === 'ar' ? (
              <p className="text-gray-600 text-xl mb-8 leading-relaxed">
                منصة درسني هي منصتك الأولى لحجز الدروس الخصوصية سواء بالمنزل أو أونلاين مع نخبة من أفضل المعلمين في جميع المواد الدراسية والمراحل التعليمية.
              </p>
            ) : (
              <p className="text-gray-600 text-xl mb-8 leading-relaxed">
                Darsni platform is your first platform for booking private lessons either at home or online with an elite group of the best teachers in all subjects and educational stages.
              </p>
            )}
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button asChild size="lg" className="text-lg px-8 py-6 bg-brand-blue hover:bg-brand-blue/90">
                <Link to="/register?role=student">
                  {language === 'ar' ? 'سجل كطالب' : 'Register as Student'}
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6 border-brand-blue text-brand-blue hover:bg-brand-blue/10">
                <Link to="/register?role=teacher">
                  {language === 'ar' ? 'سجل كمعلم' : 'Register as Teacher'}
                </Link>
              </Button>
            </div>
          </div>
          
          <div className="flex-1">
            <img 
              src="/lovable-uploads/4d512c44-e327-4412-9921-e638faf4e113.png" 
              alt={language === 'ar' ? 'معلمة تساعد طالبة في الدراسة' : 'Teacher helping a student with study'} 
              className="w-full rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
