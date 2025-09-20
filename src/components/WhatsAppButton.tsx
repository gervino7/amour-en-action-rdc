import React from 'react';
import { Button } from '@/components/ui/button';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  const openWhatsApp = () => {
    const message = encodeURIComponent("Bonjour ! Je souhaite en savoir plus sur les activités de l'ONG Amour en Manifestation et comment je peux contribuer à votre noble mission humanitaire. Merci !");
    const whatsappUrl = `https://wa.me/2250506803113?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <Button
      onClick={openWhatsApp}
      className="bg-green-500 hover:bg-green-600 text-white transition-all duration-300 group"
    >
      <MessageCircle className="h-5 w-5 mr-2 group-hover:animate-bounce" />
      Contactez-nous sur WhatsApp
    </Button>
  );
};

export default WhatsAppButton;