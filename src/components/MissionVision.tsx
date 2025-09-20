import { Card, CardContent } from "@/components/ui/card";
import { Heart, Users, Target, Globe } from "lucide-react";

const MissionVision = () => {
  return (
    <section id="mission-vision" className="py-20 bg-section-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
            Mission & Vision
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Découvrez pourquoi ONG-AEM existe et quelle est notre vision pour un monde meilleur.
          </p>
        </div>

        {/* Mission & Vision Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <Card className="p-8 hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <div className="flex items-center mb-6">
                <Heart className="h-12 w-12 text-accent mr-4" />
                <h3 className="text-2xl font-bold text-primary">Notre Mission</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Manifester l'amour à travers des actions concrètes d'aide humanitaire 
                en faveur des populations les plus vulnérables de la République Démocratique du Congo. 
                Nous nous engageons à fournir une assistance essentielle dans les domaines de 
                l'alimentation, de la santé, de l'éducation et du soutien communautaire.
              </p>
            </CardContent>
          </Card>

          <Card className="p-8 hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <div className="flex items-center mb-6">
                <Globe className="h-12 w-12 text-hope-green mr-4" />
                <h3 className="text-2xl font-bold text-primary">Notre Vision</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Un monde où chaque personne, indépendamment de sa situation socio-économique, 
                a accès aux besoins essentiels de la vie : nourriture, soins de santé, éducation 
                et dignité humaine. Nous aspirons à créer des communautés autonomes et résilientes 
                capables de prospérer durablement.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Values Section */}
        <div className="bg-white rounded-lg p-8 md:p-12 shadow-sm mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center text-primary">
            Nos Valeurs Fondamentales
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <Heart className="h-8 w-8 text-accent mx-auto mb-3" />
              <h4 className="font-semibold mb-2">Compassion</h4>
              <p className="text-sm text-muted-foreground">
                Nous agissons avec empathie et bienveillance envers tous ceux que nous servons
              </p>
            </div>
            <div className="text-center">
              <Target className="h-8 w-8 text-primary mx-auto mb-3" />
              <h4 className="font-semibold mb-2">Transparence</h4>
              <p className="text-sm text-muted-foreground">
                Nous assurons une gestion transparente de nos ressources et actions
              </p>
            </div>
            <div className="text-center">
              <Users className="h-8 w-8 text-hope-green mx-auto mb-3" />
              <h4 className="font-semibold mb-2">Respect</h4>
              <p className="text-sm text-muted-foreground">
                Nous respectons la dignité humaine et les cultures locales
              </p>
            </div>
            <div className="text-center">
              <Globe className="h-8 w-8 text-accent mx-auto mb-3" />
              <h4 className="font-semibold mb-2">Engagement</h4>
              <p className="text-sm text-muted-foreground">
                Nous nous engageons pour un impact durable et positif
              </p>
            </div>
          </div>
        </div>

        {/* Why We Exist */}
        <div className="bg-gradient-to-r from-primary to-accent rounded-lg p-8 md:p-12 text-center text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-6">
            Pourquoi nous existons
          </h3>
          <p className="text-lg mb-4 text-white/90 max-w-4xl mx-auto leading-relaxed">
            Face aux défis humanitaires en République Démocratique du Congo, nous avons créé ONG-AEM 
            en septembre 2024 pour répondre aux besoins urgents des communautés les plus démunies. 
            Basée à Montréal, notre organisation concentre ses efforts sur Kinshasa et les régions 
            environnantes.
          </p>
          <p className="text-lg text-white/90 max-w-4xl mx-auto leading-relaxed">
            Nous croyons fermement que l'amour se manifeste par des actions concrètes et tangibles, 
            et que chaque geste compte pour améliorer les conditions de vie des populations vulnérables.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;