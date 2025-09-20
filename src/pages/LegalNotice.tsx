import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Scale, Shield, FileText, Phone, Mail } from "lucide-react";

const LegalNotice = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Back Button */}
          <div className="mb-8">
            <Button 
              variant="outline" 
              onClick={() => window.history.back()}
              className="flex items-center gap-2"
            >
              <ArrowLeft className="h-4 w-4" />
              Retour
            </Button>
          </div>

          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
              Mentions Légales
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Informations légales et conformité réglementaire de l'ONG Amour en Manifestation
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Organization Identity */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <FileText className="h-6 w-6 text-primary" />
                    Identification de l'Organisation
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Dénomination sociale</h4>
                    <p className="text-muted-foreground">Organisation Non Gouvernementale Amour en Manifestation (ONG-AEM)</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Date de création</h4>
                    <p className="text-muted-foreground">Septembre 2024</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Siège social</h4>
                    <p className="text-muted-foreground">Montréal, Québec, Canada</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Zone d'intervention</h4>
                    <p className="text-muted-foreground">République Démocratique du Congo (principalement Kinshasa et régions environnantes)</p>
                  </div>
                </CardContent>
              </Card>

              {/* Legal Responsibilities */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Scale className="h-6 w-6 text-primary" />
                    Responsabilités Légales
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-primary mb-3">Directrice de Publication</h4>
                    <p className="text-muted-foreground mb-2">Rita KABUNDI - Présidente-Fondatrice</p>
                    <p className="text-muted-foreground">Responsable de l'ensemble des contenus publiés et des activités de l'organisation</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-primary mb-3">Hébergement du Site Web</h4>
                    <p className="text-muted-foreground">Ce site web est hébergé par Lovable (lovable.app)</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-primary mb-3">Conformité Réglementaire</h4>
                    <p className="text-muted-foreground">
                      ONG-AEM respecte les réglementations en vigueur au Canada concernant les organisations 
                      à but non lucratif et les activités humanitaires internationales. Nous nous conformons 
                      également aux réglementations congolaises pour nos activités sur le terrain.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Privacy & Data Protection */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Shield className="h-6 w-6 text-primary" />
                    Protection des Données
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-primary mb-3">Collecte des Données</h4>
                    <p className="text-muted-foreground">
                      Nous collectons uniquement les données personnelles nécessaires à nos activités 
                      humanitaires et à la communication avec nos donateurs et bénévoles. Aucune donnée 
                      n'est vendue ou partagée avec des tiers à des fins commerciales.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-primary mb-3">Utilisation des Données</h4>
                    <p className="text-muted-foreground">
                      Les informations collectées sont utilisées exclusivement pour :
                    </p>
                    <ul className="list-disc list-inside text-muted-foreground mt-2 space-y-1">
                      <li>La gestion des dons et la communication avec les donateurs</li>
                      <li>La coordination des activités humanitaires</li>
                      <li>L'envoi d'informations sur nos programmes et activités</li>
                      <li>Le respect de nos obligations légales et comptables</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-primary mb-3">Droits des Utilisateurs</h4>
                    <p className="text-muted-foreground">
                      Conformément aux lois sur la protection des données, vous disposez d'un droit d'accès, 
                      de rectification et de suppression de vos données personnelles. Pour exercer ces droits, 
                      contactez-nous à l'adresse email indiquée ci-contre.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Intellectual Property */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <FileText className="h-6 w-6 text-primary" />
                    Propriété Intellectuelle
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    L'ensemble du contenu de ce site web (textes, images, logos, vidéos) est la propriété 
                    d'ONG-AEM ou utilisé avec autorisation. Toute reproduction, même partielle, est soumise 
                    à autorisation préalable.
                  </p>
                  <p className="text-muted-foreground">
                    Les images de nos activités humanitaires sont utilisées avec le consentement des personnes 
                    concernées et dans le respect de leur dignité.
                  </p>
                </CardContent>
              </Card>

              {/* Limitation of Liability */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Scale className="h-6 w-6 text-primary" />
                    Limitation de Responsabilité
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    ONG-AEM s'efforce de maintenir l'exactitude des informations publiées sur ce site. 
                    Cependant, elle ne peut garantir l'exactitude, la précision ou l'exhaustivité des 
                    informations mises à disposition. ONG-AEM ne saurait être tenue responsable des 
                    dommages directs ou indirects qui pourraient résulter de l'accès au site ou de 
                    son utilisation.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Contact Information */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Contact Légal</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-sm">Email</p>
                      <p className="text-sm text-muted-foreground break-all">
                        ong.amour.en.manifestation@gmail.com
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-sm">Téléphone</p>
                      <p className="text-sm text-muted-foreground">+1 438-535-6432</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Last Update */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Mise à Jour</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Ces mentions légales ont été mises à jour le{" "}
                    <span className="font-semibold">septembre 2024</span> et peuvent être 
                    modifiées à tout moment pour refléter les changements dans nos 
                    activités ou la réglementation applicable.
                  </p>
                </CardContent>
              </Card>

              {/* Back to Site */}
              <Card>
                <CardContent className="pt-6">
                  <Button 
                    className="w-full" 
                    onClick={() => window.location.href = '/'}
                  >
                    Retour au site principal
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default LegalNotice;