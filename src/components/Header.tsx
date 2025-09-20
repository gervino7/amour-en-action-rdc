import { Button } from "@/components/ui/button";
import { Heart, Menu, X } from "lucide-react";
import { useState } from "react";
import logoOngAem from "@/assets/logo-official.jpg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-xl border-b border-border/50 shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3 group cursor-pointer">
            <div className="relative">
              <img 
                src={logoOngAem} 
                alt="Logo ONG-AEM" 
                className="h-14 w-14 object-contain drop-shadow-lg group-hover:scale-110 transition-transform duration-300 animate-glow rounded-full"
              />
              <div className="absolute inset-0 animate-pulse-glow rounded-full opacity-50"></div>
            </div>
            <div>
              <h1 className="text-2xl font-black text-trust-blue bg-gradient-to-r from-trust-blue to-warm-accent bg-clip-text text-transparent">ONG-AEM</h1>
              <p className="text-sm text-muted-foreground font-medium">Amour en Manifestation</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('accueil')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Accueil
            </button>
            <button 
              onClick={() => scrollToSection('mission-vision')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Mission & Vision
            </button>
            <button 
              onClick={() => scrollToSection('equipe')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Équipe
            </button>
            <button 
              onClick={() => scrollToSection('nos-actions')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Projets
            </button>
            <button 
              onClick={() => scrollToSection('partenaires')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Partenaires
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Contact
            </button>
            <Button 
              variant="default" 
              size="sm"
              onClick={() => window.location.href = '/donation'}
            >
              Faire un don
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t pt-4">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('accueil')}
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                Accueil
              </button>
              <button 
                onClick={() => scrollToSection('mission-vision')}
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                Mission & Vision
              </button>
              <button 
                onClick={() => scrollToSection('equipe')}
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                Équipe
              </button>
              <button 
                onClick={() => scrollToSection('nos-actions')}
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                Projets
              </button>
              <button 
                onClick={() => scrollToSection('partenaires')}
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                Partenaires
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                Contact
              </button>
              <Button 
                variant="default" 
                size="sm" 
                className="w-full"
                onClick={() => window.location.href = '/donation'}
              >
                Faire un don
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;