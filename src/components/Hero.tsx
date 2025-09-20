import { Button } from "@/components/ui/button";
import { ArrowRight, Heart } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";
import logoOngAem from "@/assets/logo-official.jpg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="accueil" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Enhanced Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Assistance humanitaire en RDC" 
          className="w-full h-full object-cover scale-105 animate-fade-in"
        />
        <div className="absolute inset-0 bg-hero-overlay"></div>
        {/* Floating particles effect */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-warm-accent/30 rounded-full animate-float"></div>
          <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-white/40 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 left-3/4 w-1.5 h-1.5 bg-warm-accent/20 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-5xl mx-auto">
          <div className="flex justify-center mb-8 animate-scale-in">
            <div className="relative">
              <img 
                src={logoOngAem} 
                alt="Logo ONG-AEM - L'Amour en manifestation" 
                className="h-32 w-auto max-w-md object-contain drop-shadow-2xl animate-glow bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20"
              />
              <div className="absolute inset-0 animate-pulse-glow rounded-2xl opacity-30"></div>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-tight animate-fade-in-up">
            <span className="block bg-gradient-to-r from-white to-white/90 bg-clip-text text-transparent drop-shadow-2xl">
              Amour en
            </span>
            <span className="block text-warm-accent bg-gradient-to-r from-warm-accent to-accent bg-clip-text text-transparent animate-glow font-extrabold drop-shadow-2xl" style={{animationDelay: '0.3s'}}>
              Manifestation
            </span>
          </h1>
          
          <p className="text-xl md:text-3xl lg:text-4xl mb-12 text-white/95 max-w-4xl mx-auto leading-relaxed animate-fade-in-up font-light" style={{animationDelay: '0.6s'}}>
            Offrir une assistance humanitaire essentielle aux populations les plus démunies de la 
            <span className="font-semibold text-warm-accent"> République Démocratique du Congo</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-slide-in-right" style={{animationDelay: '0.9s'}}>
            <Button 
              size="lg" 
              variant="secondary"
              onClick={() => scrollToSection('nos-actions')}
              className="bg-white/10 backdrop-blur-md text-white border border-white/20 hover:bg-white hover:text-trust-blue transition-all duration-500 hover:scale-105 hover:shadow-2xl px-8 py-4 text-lg font-semibold rounded-full group"
            >
              Découvrir nos actions
              <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => window.location.href = '/donation'}
              className="bg-warm-accent/20 backdrop-blur-md border-2 border-warm-accent text-white hover:bg-warm-accent hover:text-white transition-all duration-500 hover:scale-105 hover:shadow-2xl px-8 py-4 text-lg font-semibold rounded-full group animate-pulse-glow"
            >
              Faire un don
              <Heart className="ml-3 h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
            </Button>
          </div>

          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-center animate-fade-in-up" style={{animationDelay: '1.2s'}}>
            <div className="bg-glass-bg backdrop-blur-xl rounded-2xl p-8 border border-glass-border hover:bg-white/20 transition-all duration-500 hover:scale-105 hover:shadow-2xl group">
              <h3 className="text-4xl font-black mb-3 text-white group-hover:text-warm-accent transition-colors duration-300">2024</h3>
              <p className="text-white/90 text-lg font-medium">Année de création</p>
              <div className="w-12 h-1 bg-warm-accent mx-auto mt-3 rounded-full group-hover:w-16 transition-all duration-300"></div>
            </div>
            <div className="bg-glass-bg backdrop-blur-xl rounded-2xl p-8 border border-glass-border hover:bg-white/20 transition-all duration-500 hover:scale-105 hover:shadow-2xl group">
              <h3 className="text-4xl font-black mb-3 text-white group-hover:text-warm-accent transition-colors duration-300">RDC</h3>
              <p className="text-white/90 text-lg font-medium">Zone d'intervention</p>
              <div className="w-12 h-1 bg-warm-accent mx-auto mt-3 rounded-full group-hover:w-16 transition-all duration-300"></div>
            </div>
            <div className="bg-glass-bg backdrop-blur-xl rounded-2xl p-8 border border-glass-border hover:bg-white/20 transition-all duration-500 hover:scale-105 hover:shadow-2xl group">
              <h3 className="text-4xl font-black mb-3 text-white group-hover:text-warm-accent transition-colors duration-300">100%</h3>
              <p className="text-white/90 text-lg font-medium">Engagement humanitaire</p>
              <div className="w-12 h-1 bg-warm-accent mx-auto mt-3 rounded-full group-hover:w-16 transition-all duration-300"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;