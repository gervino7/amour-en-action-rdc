import { Card, CardContent } from "@/components/ui/card";
import { Globe, Heart, Users, Target } from "lucide-react";

const About = () => {
  return (
    <section id="a-propos" className="py-20 bg-section-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
            À propos de notre ONG
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            ONG Amour en Manifestation (ONG-AEM) est une organisation non gouvernementale créée en septembre 2024, 
            dédiée à l'assistance humanitaire aux populations les plus vulnérables de la République Démocratique du Congo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <Card className="text-center p-6 hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <Heart className="h-12 w-12 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Notre Mission</h3>
              <p className="text-muted-foreground">
                Manifester l'amour à travers des actions concrètes d'aide humanitaire
              </p>
            </CardContent>
          </Card>

          <Card className="text-center p-6 hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <Users className="h-12 w-12 text-hope-green mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Notre Vision</h3>
              <p className="text-muted-foreground">
                Un monde où chaque personne a accès aux besoins essentiels de la vie
              </p>
            </CardContent>
          </Card>

          <Card className="text-center p-6 hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <Target className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Nos Valeurs</h3>
              <p className="text-muted-foreground">
                Compassion, transparence, respect de la dignité humaine et engagement
              </p>
            </CardContent>
          </Card>

          <Card className="text-center p-6 hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <Globe className="h-12 w-12 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Notre Impact</h3>
              <p className="text-muted-foreground">
                Améliorer les conditions de vie des communautés les plus démunies
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="bg-white rounded-lg p-8 md:p-12 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-primary">
                Notre engagement pour la RDC
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Basée à Montréal au Canada, notre ONG concentre ses efforts sur les communautés 
                les plus vulnérables de Kinshasa et des régions environnantes en République 
                Démocratique du Congo. Nous croyons fermement que l'amour se manifeste par des 
                actions concrètes et tangibles.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Notre approche se base sur une compréhension profonde des besoins locaux et 
                sur des partenariats durables avec les communautés que nous servons. Chaque 
                projet est conçu pour avoir un impact durable et positif sur la vie des 
                bénéficiaires.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-accent/10 p-3 rounded-full">
                  <Heart className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Assistance alimentaire</h4>
                  <p className="text-sm text-muted-foreground">
                    Distribution de vivres et soutien nutritionnel aux familles dans le besoin
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-hope-green/10 p-3 rounded-full">
                  <Users className="h-6 w-6 text-hope-green" />
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Soins de santé</h4>
                  <p className="text-sm text-muted-foreground">
                    Accès aux soins médicaux essentiels et programmes de prévention sanitaire
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Éducation et formation</h4>
                  <p className="text-sm text-muted-foreground">
                    Programmes éductifs et formation professionnelle pour un développement durable
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;