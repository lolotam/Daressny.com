
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/hooks/use-toast';

interface ContactFormProps {
  labels: {
    sendMessage: string;
    fullName: string;
    email: string;
    phone: string;
    message: string;
    optional: string;
    sending: string;
    send: string;
    nameInputPlaceholder: string;
    emailInputPlaceholder: string;
    phoneInputPlaceholder: string;
    messageInputPlaceholder: string;
    successTitle: string;
    successDescription: string;
  };
}

export const ContactForm: React.FC<ContactFormProps> = ({ labels }) => {
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
        title: labels.successTitle,
        description: labels.successDescription,
      });
      
      setName('');
      setEmail('');
      setPhone('');
      setMessage('');
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-8">
      <h2 className="text-2xl font-bold mb-6">{labels.sendMessage}</h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block mb-2 font-medium">
            {labels.fullName} <span className="text-red-500">*</span>
          </label>
          <Input
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            placeholder={labels.nameInputPlaceholder}
            className="w-full"
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block mb-2 font-medium">
            {labels.email} <span className="text-red-500">*</span>
          </label>
          <Input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder={labels.emailInputPlaceholder}
            className="w-full ltr"
          />
        </div>
        
        <div>
          <label htmlFor="phone" className="block mb-2 font-medium">
            {labels.phone} ({labels.optional})
          </label>
          <Input
            id="phone"
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder={labels.phoneInputPlaceholder}
            className="w-full ltr"
          />
        </div>
        
        <div>
          <label htmlFor="message" className="block mb-2 font-medium">
            {labels.message} <span className="text-red-500">*</span>
          </label>
          <Textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            placeholder={labels.messageInputPlaceholder}
            className="w-full min-h-[150px]"
          />
        </div>
        
        <Button 
          type="submit" 
          className="w-full bg-brand-blue hover:bg-brand-blue/90"
          disabled={isSubmitting}
        >
          {isSubmitting ? labels.sending : labels.send} 
        </Button>
      </form>
    </div>
  );
};
