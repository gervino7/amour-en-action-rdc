import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, GraduationCap, Stethoscope, ArrowRight } from "lucide-react";
import aidDistribution from "@/assets/aid-distribution.jpg";
import educationProgram from "@/assets/education-program.jpg";
import medicalCare from "@/assets/medical-care.jpg";

const Actions = () => {
  return (
    <section id="nos-actions" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
            Nos Actions Humanitaires
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Découvrez comment nous mettons l'amour en action à travers nos programmes 
            d'assistance humanitaire en République Démocratique du Congo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <Card className="overflow-hidden hover:shadow-lg transition-shadow group">
            <div className="relative h-48 overflow-hidden">
              <img 
                src={aidDistribution} 
                alt="Distribution d'aide alimentaire"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-4 left-4">
                <Heart className="h-8 w-8 text-white" />
              </div>
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-3 text-primary">Assistance Alimentaire</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Distribution de vivres et soutien nutritionnel aux familles les plus vulnérables. 
                Nous fournissons des denrées de base et organisons des programmes de nutrition.
              </p>
              <Button variant="outline" size="sm" className="w-full">
                En savoir plus
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>

          <Card className="overflow-hidden hover:shadow-lg transition-shadow group">
            <div className="relative h-48 overflow-hidden">
              <img 
                src={educationProgram} 
                alt="Programme éducatif"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-4 left-4">
                <GraduationCap className="h-8 w-8 text-white" />
              </div>
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-3 text-primary">Éducation et Formation</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Programmes éducatifs pour enfants et adultes, formation professionnelle 
                et alphabétisation pour favoriser le développement communautaire durable.
              </p>
              <Button variant="outline" size="sm" className="w-full">
                En savoir plus
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>

          <Card className="overflow-hidden hover:shadow-lg transition-shadow group">
            <div className="relative h-48 overflow-hidden">
              <img 
                src={medicalCare} 
                alt="Soins médicaux"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-4 left-4">
                <Stethoscope className="h-8 w-8 text-white" />
              </div>
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-3 text-primary">Soins de Santé</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Accès aux soins médicaux essentiels, campagnes de vaccination, 
                prévention sanitaire et sensibilisation aux bonnes pratiques d'hygiène.
              </p>
              <Button variant="outline" size="sm" className="w-full">
                En savoir plus
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-primary to-accent rounded-lg p-8 md:p-12 text-center text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Rejoignez-nous dans notre mission
          </h3>
          <p className="text-lg mb-8 text-white/90 max-w-2xl mx-auto">
            Votre soutien peut faire la différence dans la vie de nombreuses familles. 
            Ensemble, manifestons l'amour par des actions concrètes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="secondary"
              className="bg-white text-primary hover:bg-white/90"
            >
              Faire un don
              <Heart className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-primary"
            >
              Devenir bénévole
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Actions;