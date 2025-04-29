
import { CallToAction } from '@/components/CallToAction';
import { EducationCarousel } from '@/components/EducationCarousel';
import { FeaturedTeachers } from '@/components/FeaturedTeachers';
import { Features } from '@/components/Features';
import { Footer } from '@/components/Footer';
import { Hero } from '@/components/Hero';
import { HowItWorks } from '@/components/HowItWorks';
import { Navbar } from '@/components/Navbar';
import { NewsletterSubscription } from '@/components/NewsletterSubscription';
import { Subjects } from '@/components/Subjects';
import { Testimonials } from '@/components/Testimonials';
import { WelcomePopup } from '@/components/WelcomePopup';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <EducationCarousel />
        <Features />
        <HowItWorks />
        <FeaturedTeachers />
        <Subjects />
        <Testimonials />
        <CallToAction />
        <NewsletterSubscription />
      </main>
      <Footer />
      <WelcomePopup />
    </div>
  );
};

export default Home;
