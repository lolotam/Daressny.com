
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { FormHeader } from '@/components/success-stories/FormHeader';
import { SuccessStoryForm } from '@/components/success-stories/SuccessStoryForm';

const ShareSuccess = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-12 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-sm p-8">
            <FormHeader 
              title="شارك قصة نجاحك"
              description="✨ نؤمن أن النجاح يلهم الآخرين!<br />شاركنا قصة نجاحك مع منصة &quot;درسني&quot;، سواء كنت طالبًا حقق التفوق بمساعدة دروسنا أو مدرسًا أثرى مسيرته التعليمية معنا."
            />
            <SuccessStoryForm />
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ShareSuccess;
