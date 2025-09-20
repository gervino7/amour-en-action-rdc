import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { 
  MessageCircle, 
  Send, 
  X, 
  Bot, 
  User, 
  Phone,
  Sparkles,
  Heart,
  Minimize2,
  Maximize2
} from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/components/ui/use-toast';

interface Message {
  id: string;
  content: string;
  isBot: boolean;
  timestamp: Date;
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: '🌟 Bonjour ! Je suis l\'assistant virtuel de l\'ONG Amour en Manifestation. Comment puis-je vous aider aujourd\'hui ? Vous pouvez me poser des questions sur nos programmes humanitaires, nos formations gratuites, ou tout autre aspect de notre mission en RDC ! ❤️',
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (!inputMessage.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputMessage,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsLoading(true);

    try {
      const { data, error } = await supabase.functions.invoke('chatbot-anthropic', {
        body: { message: inputMessage }
      });

      if (error) throw error;

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: data.message,
        isBot: true,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error('Error sending message:', error);
      toast({
        title: "Erreur",
        description: "Une erreur s'est produite. Veuillez réessayer.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const openWhatsApp = () => {
    const message = encodeURIComponent("Bonjour ! Je souhaite en savoir plus sur les activités de l'ONG Amour en Manifestation et comment je peux contribuer à votre noble mission humanitaire. Merci !");
    const whatsappUrl = `https://wa.me/2250506803113?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  if (!isOpen) {
    return (
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(true)}
          size="lg"
          className="relative bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_100%] animate-[gradient-x_3s_ease-in-out_infinite] text-white shadow-2xl hover:shadow-primary/50 transition-all duration-300 rounded-full h-16 w-16 group hover:scale-110"
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-accent opacity-75 blur-lg animate-pulse"></div>
          <MessageCircle className="h-8 w-8 relative z-10 group-hover:animate-bounce" />
          <Sparkles className="absolute -top-1 -right-1 h-6 w-6 text-yellow-300 animate-spin" />
        </Button>
        
        {/* Floating notification */}
        <div className="absolute bottom-20 right-0 bg-white rounded-lg shadow-xl p-3 max-w-xs animate-fade-in border border-primary/20">
          <div className="flex items-start space-x-2">
            <Bot className="h-5 w-5 text-primary mt-0.5" />
            <div>
              <p className="text-sm font-medium text-gray-900">Assistant ONG-AEM</p>
              <p className="text-xs text-gray-600">Besoin d'aide ? Cliquez pour discuter !</p>
            </div>
            <Heart className="h-4 w-4 text-red-500 animate-pulse" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Card className={`bg-white/95 backdrop-blur-xl border-2 border-primary/20 shadow-2xl transition-all duration-500 ${
        isMinimized ? 'w-80 h-16' : 'w-96 h-[600px]'
      }`}>
        {/* Header */}
        <div className="relative bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_100%] animate-[gradient-x_4s_ease-in-out_infinite] text-white p-4 rounded-t-lg">
          <div className="absolute inset-0 bg-black/10 rounded-t-lg"></div>
          <div className="relative flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <Bot className="h-8 w-8" />
                <div className="absolute inset-0 animate-ping rounded-full bg-white/30"></div>
              </div>
              <div>
                <h3 className="font-bold text-lg">Assistant ONG-AEM</h3>
                <p className="text-sm opacity-90">💬 Toujours là pour vous aider</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMinimized(!isMinimized)}
                className="text-white hover:bg-white/20 p-2"
              >
                {isMinimized ? <Maximize2 className="h-4 w-4" /> : <Minimize2 className="h-4 w-4" />}
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(false)}
                className="text-white hover:bg-white/20 p-2"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {!isMinimized && (
          <>
            {/* Messages */}
            <CardContent className="p-0 h-[420px] flex flex-col">
              <ScrollArea className="flex-1 p-4">
                <div className="space-y-4">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.isBot ? 'justify-start' : 'justify-end'} animate-fade-in`}
                    >
                      <div
                        className={`max-w-[80%] rounded-2xl px-4 py-3 shadow-lg ${
                          message.isBot
                            ? 'bg-gradient-to-r from-gray-100 to-gray-50 text-gray-800 border border-gray-200'
                            : 'bg-gradient-to-r from-primary to-accent text-white'
                        }`}
                      >
                        <div className="flex items-start space-x-2">
                          {message.isBot ? (
                            <Bot className="h-5 w-5 mt-0.5 text-primary" />
                          ) : (
                            <User className="h-5 w-5 mt-0.5" />
                          )}
                          <p className="text-sm leading-relaxed whitespace-pre-wrap">
                            {message.content}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                  {isLoading && (
                    <div className="flex justify-start animate-fade-in">
                      <div className="bg-gray-100 rounded-2xl px-4 py-3 border border-gray-200">
                        <div className="flex items-center space-x-2">
                          <Bot className="h-5 w-5 text-primary" />
                          <div className="flex space-x-1">
                            <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
                            <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                            <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <div ref={messagesEndRef} />
              </ScrollArea>


              {/* Input */}
              <div className="p-4">
                <div className="flex space-x-2">
                  <Input
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Tapez votre message..."
                    disabled={isLoading}
                    className="flex-1 border-primary/20 focus:border-primary"
                  />
                  <Button
                    onClick={handleSendMessage}
                    disabled={!inputMessage.trim() || isLoading}
                    size="sm"
                    className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 transition-all duration-200 hover:scale-105"
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </>
        )}
      </Card>
    </div>
  );
};

export default Chatbot;