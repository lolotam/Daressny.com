
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ContactHeader } from '@/components/contact/ContactHeader';
import { ContactInfoCard } from '@/components/contact/ContactInfoCard';
import { ContactForm } from '@/components/contact/ContactForm';
import { contactTranslations } from '@/translations/contactTranslations';

const Contact = () => {
  const { language } = useLanguage();
  
  const currentTranslation = language === 'ar' ? contactTranslations.ar : contactTranslations.en;

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
