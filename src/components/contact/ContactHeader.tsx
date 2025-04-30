
import React from 'react';

interface ContactHeaderProps {
  title: string;
  description: string;
}

export const ContactHeader: React.FC<ContactHeaderProps> = ({ title, description }) => {
  return (
    <div className="text-center mb-12">
      <h1 className="text-4xl font-bold mb-4">{title}</h1>
      <p className="text-gray-600 max-w-2xl mx-auto">
        {description}
      </p>
    </div>
  );
};
