
import React from 'react';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin } from 'lucide-react';
import { ContactInfo } from './FooterData';

interface FooterContactSectionProps {
  info: ContactInfo;
}

export const FooterContactSection: React.FC<FooterContactSectionProps> = ({ info }) => {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-4 text-brand-gold">{info.contactUs}</h3>
      <address className="not-italic">
        <p className="flex items-center gap-2 mb-3">
          <Mail className="h-5 w-5 text-brand-blue" />
          <a href="mailto:info@daressny.com" className="hover:text-brand-blue transition-colors">
            {info.email}
          </a>
        </p>
        <p className="flex items-center gap-2 mb-3">
          <Phone className="h-5 w-5 text-brand-blue" />
          <a href="tel:+96560685150" dir="ltr" className="hover:text-brand-blue transition-colors">
            {info.phone}
          </a>
        </p>
        <p className="flex items-center gap-2 mb-5">
          <MapPin className="h-5 w-5 text-brand-blue" />
          <span>{info.address}</span>
        </p>
        
        <div className="space-y-2">
          <Button asChild className="w-full" variant="outline">
            <a href="https://wa.me/96560685150" target="_blank" rel="noopener noreferrer">
              {info.supportTeam}
            </a>
          </Button>
          <Button asChild className="w-full bg-brand-blue hover:bg-brand-blue/90">
            <a href="https://wa.me/96560685150" target="_blank" rel="noopener noreferrer">
              {info.bookSession}
            </a>
          </Button>
        </div>
      </address>
    </div>
  );
};
