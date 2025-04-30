
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Instagram, Facebook } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { toast } from '@/hooks/use-toast';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Here you would typically send the form data to your backend
    setTimeout(() => {
      toast({
        title: "تم إرسال رسالتك بنجاح",
        description: "سنقوم بالرد عليك في أقرب وقت ممكن",
      });
      
      setName('');
      setEmail('');
      setPhone('');
      setMessage('');
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">تواصل معنا</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              يسعدنا تواصلك معنا في أي وقت! فريق منصة درسني جاهز لخدمتك والإجابة عن جميع استفساراتك.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="bg-white rounded-xl shadow-md p-8">
              <h2 className="text-2xl font-bold mb-6">بيانات التواصل</h2>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="bg-brand-blue/10 p-3 rounded-full">
                    <Mail className="text-brand-blue h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-semibold">البريد الإلكتروني</p>
                    <a href="mailto:info@daressny.com" className="text-brand-blue hover:underline">
                      info@daressny.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="bg-brand-blue/10 p-3 rounded-full">
                    <Phone className="text-brand-blue h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-semibold">الهاتف / واتساب</p>
                    <a href="tel:+96560685150" className="text-brand-blue hover:underline">
                      +96560685150
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="bg-brand-blue/10 p-3 rounded-full">
                    <MapPin className="text-brand-blue h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-semibold">العنوان</p>
                    <p>الكويت - السالمية</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h3 className="font-semibold mb-4">تابعنا على وسائل التواصل الاجتماعي</h3>
                <div className="flex gap-4">
                  <a href="https://instagram.com/daressny" target="_blank" rel="noopener noreferrer" 
                     className="bg-brand-blue/10 p-3 rounded-full hover:bg-brand-blue hover:text-white transition-colors">
                    <Instagram className="h-5 w-5" />
                  </a>
                  <a href="https://facebook.com/daressny" target="_blank" rel="noopener noreferrer" 
                     className="bg-brand-blue/10 p-3 rounded-full hover:bg-brand-blue hover:text-white transition-colors">
                    <Facebook className="h-5 w-5" />
                  </a>
                  <a href="https://tiktok.com/@daressny" target="_blank" rel="noopener noreferrer" 
                     className="bg-brand-blue/10 p-3 rounded-full hover:bg-brand-blue hover:text-white transition-colors">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><path d="M9 12a3 3 0 1 0 6 0 3 3 0 1 0 -6 0"/><path d="M13 12v8m-2 -8v8"/><path d="M15.09 4.111a8.82 8.82 0 0 0 -6.18 0"/><path d="M12 4v4"/><path d="M20 10c0 5.523 -4.477 10 -10 10s-10 -4.477 -10 -10s4.477 -10 10 -10c1.088 0 2.134 .184 3.11 .523"/></svg>
                  </a>
                  <a href="https://wa.me/96560685150" target="_blank" rel="noopener noreferrer" 
                     className="bg-brand-blue/10 p-3 rounded-full hover:bg-brand-blue hover:text-white transition-colors"
                     title="تواصل معنا عبر واتساب">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9"/><path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1"/></svg>
                  </a>
                </div>
              </div>
              
              <div className="mt-8 space-y-4">
                <Button asChild className="w-full" variant="outline">
                  <a href="https://wa.me/96560685150" target="_blank" rel="noopener noreferrer">
                    تواصل مع فريق الدعم
                  </a>
                </Button>
                <Button asChild className="w-full bg-brand-blue hover:bg-brand-blue/90">
                  <a href="https://wa.me/96560685150" target="_blank" rel="noopener noreferrer">
                    احجز جلسة تدريبية الآن
                  </a>
                </Button>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="bg-white rounded-xl shadow-md p-8">
              <h2 className="text-2xl font-bold mb-6">أرسل رسالة</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block mb-2 font-medium">
                    الاسم الكامل <span className="text-red-500">*</span>
                  </label>
                  <Input
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    placeholder="أدخل اسمك الكامل"
                    className="w-full"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block mb-2 font-medium">
                    البريد الإلكتروني <span className="text-red-500">*</span>
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="example@email.com"
                    className="w-full ltr"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block mb-2 font-medium">
                    رقم الهاتف (اختياري)
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+96555000000"
                    className="w-full ltr"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block mb-2 font-medium">
                    رسالتك <span className="text-red-500">*</span>
                  </label>
                  <Textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    placeholder="اكتب رسالتك هنا..."
                    className="w-full min-h-[150px]"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-brand-blue hover:bg-brand-blue/90"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'جاري الإرسال...' : 'أرسل رسالتك'} 
                </Button>
              </form>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
