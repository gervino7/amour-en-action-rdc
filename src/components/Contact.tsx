import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Instagram, Clock, Globe } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-section-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
            Contactez-nous
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Vous souhaitez nous soutenir, devenir bénévole ou en savoir plus sur nos actions ? 
            N'hésitez pas à nous contacter.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <MapPin className="h-6 w-6 text-accent" />
                  <span>Nos bureaux</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-primary mb-1">Bureau principal</h4>
                    <p className="text-muted-foreground">Montréal, QC, Canada</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-1">Zone d'intervention</h4>
                    <p className="text-muted-foreground">Kinshasa, République démocratique du Congo</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <Phone className="h-6 w-6 text-hope-green" />
                  <span>Téléphone</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold text-primary">+1 438-535-6432</p>
                <p className="text-sm text-muted-foreground">Mobile - Disponible en tout temps</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <Mail className="h-6 w-6 text-accent" />
                  <span>Email</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold text-primary break-all">
                  ong.amour.en.manifestation@gmail.com
                </p>
                <p className="text-sm text-muted-foreground">Réponse sous 24-48h</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <Instagram className="h-6 w-6 text-accent" />
                  <span>Réseaux sociaux</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <a 
                  href="https://instagram.com/ongaem_officiel" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-lg font-semibold text-primary hover:text-accent transition-colors"
                >
                  @ongaem_officiel
                </a>
                <p className="text-sm text-muted-foreground">Suivez nos actions sur Instagram</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <Clock className="h-6 w-6 text-hope-green" />
                  <span>Disponibilité</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold text-primary">Toujours ouvert</p>
                <p className="text-sm text-muted-foreground">
                  Nous sommes disponibles 24h/7j pour les urgences humanitaires
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-3">
                <Mail className="h-6 w-6 text-primary" />
                <span>Envoyez-nous un message</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="prenom" className="block text-sm font-medium mb-2">
                      Prénom
                    </label>
                    <Input id="prenom" placeholder="Votre prénom" />
                  </div>
                  <div>
                    <label htmlFor="nom" className="block text-sm font-medium mb-2">
                      Nom
                    </label>
                    <Input id="nom" placeholder="Votre nom" />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <Input id="email" type="email" placeholder="votre.email@exemple.com" />
                </div>
                
                <div>
                  <label htmlFor="telephone" className="block text-sm font-medium mb-2">
                    Téléphone (optionnel)
                  </label>
                  <Input id="telephone" type="tel" placeholder="+1 XXX-XXX-XXXX" />
                </div>
                
                <div>
                  <label htmlFor="sujet" className="block text-sm font-medium mb-2">
                    Sujet
                  </label>
                  <Input id="sujet" placeholder="Objet de votre message" />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <Textarea 
                    id="message" 
                    placeholder="Décrivez votre demande ou comment vous souhaitez nous aider..."
                    rows={6}
                  />
                </div>
                
                <Button className="w-full" size="lg">
                  Envoyer le message
                  <Mail className="ml-2 h-5 w-5" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;