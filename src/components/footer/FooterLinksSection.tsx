
import React from 'react';
import { Link } from 'react-router-dom';
import { FooterLink } from './FooterData';

interface FooterLinksSectionProps {
  title: string;
  links: FooterLink[];
}

export const FooterLinksSection: React.FC<FooterLinksSectionProps> = ({ title, links }) => {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-4 text-brand-gold">{title}</h3>
      <div className="flex flex-wrap">
        {links.map((link, index) => (
          <Link 
            key={index} 
            to={link.path} 
            className="mr-4 mb-2 text-sm hover:text-brand-blue transition-colors px-2 py-1 hover:bg-gray-800 rounded"
          >
            {link.name}
          </Link>
        ))}
      </div>
    </div>
  );
};
