import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Building, Handshake, Globe, Users, Mail } from "lucide-react";

const Partners = () => {
  return (
    <section id="partenaires" className="py-20 bg-section-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
            Nos Partenaires
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Notre crédibilité et notre impact sont renforcés par des alliances stratégiques 
            avec des organisations partageant notre vision humanitaire.
          </p>
        </div>

        {/* Partnership Types */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <Card className="text-center p-6 hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <Building className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-primary">Institutions</h3>
              <p className="text-muted-foreground leading-relaxed">
                Collaboration avec des institutions gouvernementales et organismes officiels 
                pour maximiser notre impact humanitaire.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center p-6 hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <Users className="h-12 w-12 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-primary">ONGs Locales</h3>
              <p className="text-muted-foreground leading-relaxed">
                Partenariats avec des organisations locales en RDC pour une meilleure 
                compréhension des besoins communautaires.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center p-6 hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <Globe className="h-12 w-12 text-hope-green mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-primary">Organisations Internationales</h3>
              <p className="text-muted-foreground leading-relaxed">
                Réseau international d'organisations humanitaires pour partager 
                les meilleures pratiques et ressources.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Partnership Benefits */}
        <div className="bg-white rounded-lg p-8 md:p-12 shadow-sm mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-primary">
                Pourquoi Nous Choisir Comme Partenaire
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-full flex-shrink-0">
                    <Handshake className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-primary">Transparence Totale</h4>
                    <p className="text-sm text-muted-foreground">
                      Rapports détaillés et transparence complète sur l'utilisation des fonds et ressources
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-accent/10 p-3 rounded-full flex-shrink-0">
                    <Globe className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-primary">Impact Mesurable</h4>
                    <p className="text-sm text-muted-foreground">
                      Suivi rigoureux des résultats avec des indicateurs de performance clairs
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-hope-green/10 p-3 rounded-full flex-shrink-0">
                    <Users className="h-6 w-6 text-hope-green" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-primary">Expertise Locale</h4>
                    <p className="text-sm text-muted-foreground">
                      Connaissance approfondie du terrain et des besoins spécifiques des communautés
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <Card className="p-6 border-l-4 border-l-primary">
                <h4 className="font-bold text-primary mb-2">Partenariats Institutionnels</h4>
                <p className="text-muted-foreground text-sm">
                  Nous développons actuellement des partenariats avec des institutions 
                  canadiennes et congolaises pour renforcer nos programmes.
                </p>
              </Card>
              
              <Card className="p-6 border-l-4 border-l-accent">
                <h4 className="font-bold text-primary mb-2">Collaborations Locales</h4>
                <p className="text-muted-foreground text-sm">
                  Nous travaillons étroitement avec les leaders communautaires et 
                  organisations locales de Kinshasa.
                </p>
              </Card>
              
              <Card className="p-6 border-l-4 border-l-hope-green">
                <h4 className="font-bold text-primary mb-2">Réseau International</h4>
                <p className="text-muted-foreground text-sm">
                  Notre réseau s'étend à travers le Canada et l'Afrique pour 
                  maximiser notre portée humanitaire.
                </p>
              </Card>
            </div>
          </div>
        </div>

        {/* Call to Partnership */}
        <div className="bg-gradient-to-r from-primary to-accent rounded-lg p-8 md:p-12 text-center text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Devenez Notre Partenaire
          </h3>
          <p className="text-lg mb-8 text-white/90 max-w-2xl mx-auto">
            Rejoignez-nous dans notre mission pour créer un impact durable. Ensemble, 
            nous pouvons transformer des vies et construire des communautés plus fortes.
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
              <Mail className="mr-2 h-5 w-5" />
              Discuter d'un partenariat
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => window.location.href = '/donation'}
              className="border-white text-white hover:bg-white hover:text-primary"
            >
              Soutenir nos actions
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;