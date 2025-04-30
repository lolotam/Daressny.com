
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ContactHeader } from '@/components/contact/ContactHeader';
import { ContactInfoCard } from '@/components/contact/ContactInfoCard';
import { ContactForm } from '@/components/contact/ContactForm';

const Contact = () => {
  const { language } = useLanguage();
  
  const translations = {
    ar: {
      title: 'تواصل معنا',
      description: 'يسعدنا تواصلك معنا في أي وقت! فريق منصة درسني جاهز لخدمتك والإجابة عن جميع استفساراتك.',
      contactInfo: 'بيانات التواصل',
      emailLabel: 'البريد الإلكتروني',
      phoneLabel: 'الهاتف / واتساب',
      addressLabel: 'العنوان',
      emailAddress: 'info@daressny.com',
      phoneNumber: '96560685150',
      address: 'الكويت - السالمية',
      socialMedia: 'تابعنا على وسائل التواصل الاجتماعي',
      supportTeam: 'تواصل مع فريق الدعم',
      bookSession: 'احجز جلسة تدريبية الآن',
      sendMessage: 'أرسل رسالة',
      fullName: 'الاسم الكامل',
      email: 'البريد الإلكتروني',
      phone: 'رقم الهاتف',
      message: 'رسالتك',
      optional: 'اختياري',
      sending: 'جاري الإرسال...',
      send: 'أرسل رسالتك',
      nameInputPlaceholder: 'أدخل اسمك الكامل',
      emailInputPlaceholder: 'example@email.com',
      phoneInputPlaceholder: '+96555000000',
      messageInputPlaceholder: 'اكتب رسالتك هنا...',
      successTitle: 'تم إرسال رسالتك بنجاح',
      successDescription: 'سنقوم بالرد عليك في أقرب وقت ممكن',
    },
    en: {
      title: 'Contact Us',
      description: 'We are happy to hear from you any time! The Darsni Platform team is ready to serve you and answer all your inquiries.',
      contactInfo: 'Contact Information',
      emailLabel: 'Email Address',
      phoneLabel: 'Phone / WhatsApp',
      addressLabel: 'Address',
      emailAddress: 'info@daressny.com',
      phoneNumber: '96560685150',
      address: 'Kuwait - Salmiya',
      socialMedia: 'Follow Us On Social Media',
      supportTeam: 'Contact Support Team',
      bookSession: 'Book a Training Session Now',
      sendMessage: 'Send a Message',
      fullName: 'Full Name',
      email: 'Email Address',
      phone: 'Phone Number',
      message: 'Your Message',
      optional: 'optional',
      sending: 'Sending...',
      send: 'Send Your Message',
      nameInputPlaceholder: 'Enter your full name',
      emailInputPlaceholder: 'example@email.com',
      phoneInputPlaceholder: '+96555000000',
      messageInputPlaceholder: 'Write your message here...',
      successTitle: 'Your message has been sent successfully',
      successDescription: 'We will get back to you as soon as possible',
    }
  };
  
  const currentTranslation = language === 'ar' ? translations.ar : translations.en;

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-12">
        <div className="container mx-auto px-4">
          <ContactHeader 
            title={currentTranslation.title}
            description={currentTranslation.description}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <ContactInfoCard 
              email={currentTranslation.emailAddress}
              phone={currentTranslation.phoneNumber}
              address={currentTranslation.address}
              labels={{
                contactInfo: currentTranslation.contactInfo,
                emailLabel: currentTranslation.emailLabel,
                phoneLabel: currentTranslation.phoneLabel,
                addressLabel: currentTranslation.addressLabel,
                socialMedia: currentTranslation.socialMedia,
                supportTeam: currentTranslation.supportTeam,
                bookSession: currentTranslation.bookSession,
              }}
            />
            
            {/* Contact Form */}
            <ContactForm 
              labels={{
                sendMessage: currentTranslation.sendMessage,
                fullName: currentTranslation.fullName,
                email: currentTranslation.email,
                phone: currentTranslation.phone,
                message: currentTranslation.message,
                optional: currentTranslation.optional,
                sending: currentTranslation.sending,
                send: currentTranslation.send,
                nameInputPlaceholder: currentTranslation.nameInputPlaceholder,
                emailInputPlaceholder: currentTranslation.emailInputPlaceholder,
                phoneInputPlaceholder: currentTranslation.phoneInputPlaceholder,
                messageInputPlaceholder: currentTranslation.messageInputPlaceholder,
                successTitle: currentTranslation.successTitle,
                successDescription: currentTranslation.successDescription,
              }}
            />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
