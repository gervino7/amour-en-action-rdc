import { Heart, Instagram, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Organization Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Heart className="h-8 w-8 text-accent" />
              <div>
                <h3 className="text-xl font-bold">ONG-AEM</h3>
                <p className="text-sm text-primary-foreground/80">Amour en Manifestation</p>
              </div>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed mb-4">
              Organisation non gouvernementale dédiée à l'assistance humanitaire 
              aux populations les plus démunies de la République Démocratique du Congo.
            </p>
            <p className="text-sm text-primary-foreground/60">
              Créée en septembre 2024
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="#accueil" 
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  Accueil
                </a>
              </li>
              <li>
                <a 
                  href="#mission-vision" 
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  Mission & Vision
                </a>
              </li>
              <li>
                <a 
                  href="#equipe" 
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  Équipe
                </a>
              </li>
              <li>
                <a 
                  href="#nos-actions" 
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  Projets
                </a>
              </li>
              <li>
                <a 
                  href="#partenaires" 
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  Partenaires
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-accent flex-shrink-0" />
                <span className="text-primary-foreground/80 text-sm">
                  Montréal, QC, Canada
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-accent flex-shrink-0" />
                <span className="text-primary-foreground/80 text-sm">
                  +1 438-535-6432
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-accent flex-shrink-0" />
                <span className="text-primary-foreground/80 text-sm break-all">
                  ong.amour.en.manifestation@gmail.com
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Instagram className="h-5 w-5 text-accent flex-shrink-0" />
                <a 
                  href="https://instagram.com/ongaem_officiel" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary-foreground/80 hover:text-accent text-sm transition-colors"
                >
                  @ongaem_officiel
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/60 text-sm">
            © {currentYear} ONG Amour en Manifestation. Tous droits réservés.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-3">
            <a 
              href="/donation" 
              className="text-primary-foreground/40 hover:text-accent text-xs transition-colors"
            >
              Faire un don
            </a>
            <span className="text-primary-foreground/20 hidden sm:inline">•</span>
            <a 
              href="/mentions-legales" 
              className="text-primary-foreground/40 hover:text-accent text-xs transition-colors"
            >
              Mentions légales
            </a>
          </div>
          <p className="text-primary-foreground/40 text-xs mt-2">
            Organisation non gouvernementale • Assistance humanitaire • RDC
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;