
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export const NewsletterSubscription = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">اشترك في النشرة البريدية</h2>
          <p className="text-gray-600 mb-6">
            احصل على آخر المستجدات والنصائح التعليمية المفيدة
          </p>
          
          <form className="flex flex-col md:flex-row gap-3">
            <Input
              type="email"
              placeholder="البريد الإلكتروني"
              className="flex-1"
            />
            <Button type="submit" className="bg-brand-blue hover:bg-brand-blue/90">
              اشترك
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};
