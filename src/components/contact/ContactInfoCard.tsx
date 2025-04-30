
import React from 'react';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin, Instagram, Facebook } from 'lucide-react';

interface ContactInfoCardProps {
  email: string;
  phone: string;
  address: string;
  labels: {
    contactInfo: string;
    emailLabel: string;
    phoneLabel: string;
    addressLabel: string;
    socialMedia: string;
    supportTeam: string;
    bookSession: string;
  };
}

export const ContactInfoCard: React.FC<ContactInfoCardProps> = ({ 
  email, 
  phone, 
  address,
  labels
}) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-8">
      <h2 className="text-2xl font-bold mb-6">{labels.contactInfo}</h2>
      
      <div className="space-y-6">
        <div className="flex items-center gap-4">
          <div className="bg-brand-blue/10 p-3 rounded-full">
            <Mail className="text-brand-blue h-6 w-6" />
          </div>
          <div>
            <p className="font-semibold">{labels.emailLabel}</p>
            <a href={`mailto:${email}`} className="text-brand-blue hover:underline">
              {email}
            </a>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="bg-brand-blue/10 p-3 rounded-full">
            <Phone className="text-brand-blue h-6 w-6" />
          </div>
          <div>
            <p className="font-semibold">{labels.phoneLabel}</p>
            <a href={`tel:${phone}`} className="text-brand-blue hover:underline">
              {phone}
            </a>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="bg-brand-blue/10 p-3 rounded-full">
            <MapPin className="text-brand-blue h-6 w-6" />
          </div>
          <div>
            <p className="font-semibold">{labels.addressLabel}</p>
            <p>{address}</p>
          </div>
        </div>
      </div>
      
      <div className="mt-8">
        <h3 className="font-semibold mb-4">{labels.socialMedia}</h3>
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
          <a href={`https://wa.me/${phone.replace(/[^0-9]/g, '')}`} target="_blank" rel="noopener noreferrer" 
             className="bg-brand-blue/10 p-3 rounded-full hover:bg-brand-blue hover:text-white transition-colors"
             title="تواصل معنا عبر واتساب">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9"/><path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1"/></svg>
          </a>
        </div>
      </div>
      
      <div className="mt-8 space-y-4">
        <Button asChild className="w-full" variant="outline">
          <a href={`https://wa.me/${phone.replace(/[^0-9]/g, '')}`} target="_blank" rel="noopener noreferrer">
            {labels.supportTeam}
          </a>
        </Button>
        <Button asChild className="w-full bg-brand-blue hover:bg-brand-blue/90">
          <a href={`https://wa.me/${phone.replace(/[^0-9]/g, '')}`} target="_blank" rel="noopener noreferrer">
            {labels.bookSession}
          </a>
        </Button>
      </div>
    </div>
  );
};
