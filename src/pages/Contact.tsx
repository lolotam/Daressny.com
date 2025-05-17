
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { ContactLayout } from '@/components/contact/ContactLayout';
import { ContactHeader } from '@/components/contact/ContactHeader';
import { ContactInfoCard } from '@/components/contact/ContactInfoCard';
import { ContactForm } from '@/components/contact/ContactForm';
import { contactTranslations } from '@/translations/contactTranslations';

const Contact = () => {
  const { language } = useLanguage();
  
  const currentTranslation = language === 'ar' ? contactTranslations.ar : contactTranslations.en;

  // Sample data for the contact page - in a real app, this would come from a configuration or API
  const contactInfo = {
    email: 'support@daressny.com',
    phone: '+965 5555 5555',
    address: 'Kuwait City, Kuwait'
  };

  return (
    <ContactLayout>
      <ContactHeader 
        title={currentTranslation.contactTitle}
        description={currentTranslation.contactDescription}
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Information */}
        <ContactInfoCard 
          email={contactInfo.email}
          phone={contactInfo.phone}
          address={contactInfo.address}
          labels={{
            contactInfo: currentTranslation.contactUsToday,
            emailLabel: currentTranslation.emailContact,
            phoneLabel: currentTranslation.phoneContact,
            addressLabel: currentTranslation.visitUs,
            socialMedia: "Social Media",
            supportTeam: "Contact Support Team",
            bookSession: "Book a Session"
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
            optional: "Optional",
            sending: currentTranslation.sending,
            send: currentTranslation.sendNow,
            nameInputPlaceholder: currentTranslation.fullName,
            emailInputPlaceholder: currentTranslation.email,
            phoneInputPlaceholder: currentTranslation.phone,
            messageInputPlaceholder: currentTranslation.message,
            successTitle: currentTranslation.messageSent,
            successDescription: currentTranslation.messageSent
          }}
        />
      </div>
    </ContactLayout>
  );
};

export default Contact;
