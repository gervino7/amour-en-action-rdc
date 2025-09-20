import React from 'react';
import { Button } from '@/components/ui/button';
import { MessageCircle, Phone } from 'lucide-react';

const WhatsAppFloat = () => {
  const openWhatsApp = () => {
    const message = encodeURIComponent("Bonjour ! Je souhaite en savoir plus sur les activités de l'ONG Amour en Manifestation et comment je peux contribuer à votre noble mission humanitaire. Merci !");
    const whatsappUrl = `https://wa.me/2250506803113?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="fixed bottom-6 left-6 z-40">
      <Button
        onClick={openWhatsApp}
        size="lg"
        className="relative bg-green-500 hover:bg-green-600 text-white shadow-2xl hover:shadow-green-500/50 transition-all duration-300 rounded-full h-16 w-16 group hover:scale-110"
      >
        <div className="absolute inset-0 rounded-full bg-green-500 opacity-75 blur-lg animate-pulse"></div>
        <MessageCircle className="h-8 w-8 relative z-10 group-hover:animate-bounce" />
      </Button>
      
      {/* Floating notification */}
      <div className="absolute bottom-20 left-0 bg-white rounded-lg shadow-xl p-3 max-w-xs animate-fade-in border border-green-200">
        <div className="flex items-start space-x-2">
          <Phone className="h-5 w-5 text-green-600 mt-0.5" />
          <div>
            <p className="text-sm font-medium text-gray-900">Contactez-nous</p>
            <p className="text-xs text-gray-600">Parlez directement avec notre équipe !</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatsAppFloat;