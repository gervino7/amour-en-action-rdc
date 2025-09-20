import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Linkedin } from "lucide-react";
import teamVisit from "@/assets/team-visit.jpg";

const Team = () => {
  return (
    <section id="equipe" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
            Notre Équipe
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Rencontrez les personnes dévouées qui dirigent et soutiennent notre mission humanitaire.
          </p>
        </div>

        {/* Leadership Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center text-primary">Leadership</h3>
          
          <div className="max-w-4xl mx-auto">
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="relative h-80 lg:h-auto">
                  <img 
                    src={teamVisit} 
                    alt="Rita KABUNDI, Présidente-Fondatrice d'ONG-AEM"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent lg:hidden"></div>
                </div>
                <CardContent className="p-8 flex flex-col justify-center">
                  <div className="mb-6">
                    <h4 className="text-2xl font-bold text-primary mb-2">Rita KABUNDI</h4>
                    <p className="text-lg text-accent font-semibold mb-4">Présidente-Fondatrice</p>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Visionnaire et leader passionnée, Rita KABUNDI a fondé ONG-AEM avec la conviction 
                      que l'amour doit se manifester par des actions concrètes. Forte de son expérience 
                      dans l'aide humanitaire et son engagement envers les communautés vulnérables, 
                      elle dirige notre organisation avec compassion et détermination.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      Spécialisée dans les formations professionnelles, elle offre personnellement 
                      des cours gratuits en conduite automobile, esthétique, photographie, montage vidéo, 
                      secrétariat et gestion de projets pour autonomiser les jeunes de la RDC.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <Button variant="outline" size="sm">
                      <Mail className="h-4 w-4 mr-2" />
                      Contacter
                    </Button>
                    <Button variant="outline" size="sm">
                      <Phone className="h-4 w-4 mr-2" />
                      +1 438-535-6432
                    </Button>
                  </div>
                </CardContent>
              </div>
            </Card>
          </div>
        </div>

        {/* Team Structure */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center text-primary">Structure Organisationnelle</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">P</span>
                </div>
                <h4 className="text-xl font-semibold mb-2 text-primary">Présidence</h4>
                <p className="text-muted-foreground mb-4">
                  Direction générale et supervision des programmes humanitaires
                </p>
                <p className="text-sm text-accent font-medium">Rita KABUNDI</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-accent">C</span>
                </div>
                <h4 className="text-xl font-semibold mb-2 text-primary">Coordination</h4>
                <p className="text-muted-foreground mb-4">
                  Coordination des actions sur le terrain en RDC
                </p>
                <p className="text-sm text-muted-foreground">Équipe locale Kinshasa</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-hope-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-hope-green">B</span>
                </div>
                <h4 className="text-xl font-semibold mb-2 text-primary">Bénévoles</h4>
                <p className="text-muted-foreground mb-4">
                  Soutien aux missions et programmes spéciaux
                </p>
                <p className="text-sm text-muted-foreground">Réseau international</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Join Us Section */}
        <div className="bg-gradient-to-r from-primary to-accent rounded-lg p-8 md:p-12 text-center text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Rejoignez Notre Équipe
          </h3>
          <p className="text-lg mb-8 text-white/90 max-w-2xl mx-auto">
            Vous partagez notre vision et souhaitez contribuer à notre mission humanitaire ? 
            Nous cherchons toujours des personnes passionnées pour renforcer notre équipe.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="secondary"
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="bg-white text-primary hover:bg-white/90"
            >
              Devenir bénévole
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="border-white text-white hover:bg-white hover:text-primary"
            >
              Nous contacter
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;