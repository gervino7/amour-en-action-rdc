import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { Heart, CreditCard } from "lucide-react";

interface DonationFormData {
  donor_name: string;
  donor_email: string;
  amount: string;
  phone_number: string;
  message: string;
}

const DonationForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<DonationFormData>({
    donor_name: "",
    donor_email: "",
    amount: "",
    phone_number: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.donor_name || !formData.donor_email || !formData.amount) {
      toast({
        title: "Champs requis",
        description: "Veuillez remplir tous les champs obligatoires.",
        variant: "destructive",
      });
      return;
    }

    const amount = parseFloat(formData.amount);
    if (isNaN(amount) || amount <= 0) {
      toast({
        title: "Montant invalide",
        description: "Veuillez entrer un montant valide.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    try {
      const { data, error } = await supabase.functions.invoke("process-donation", {
        body: {
          donor_name: formData.donor_name,
          donor_email: formData.donor_email,
          amount: amount,
          phone_number: formData.phone_number || null,
          message: formData.message || null,
          currency: "XOF"
        },
      });

      if (error) {
        console.error("Supabase function error:", error);
        throw new Error("Erreur lors du traitement du don");
      }

      if (data.success && data.authorization_url) {
        // Redirect to Paystack payment page
        window.location.href = data.authorization_url;
      } else {
        throw new Error(data.error || "Erreur lors de l'initialisation du paiement");
      }

    } catch (error: any) {
      console.error("Donation error:", error);
      toast({
        title: "Erreur",
        description: error.message || "Une erreur est survenue lors du traitement de votre don.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const quickAmounts = [5000, 10000, 25000, 50000, 100000];

  return (
    <div className="w-full max-w-2xl mx-auto p-6">
      <Card className="shadow-lg">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-primary/10 rounded-full">
              <Heart className="h-8 w-8 text-primary" />
            </div>
          </div>
          <CardTitle className="text-2xl font-bold">Faire un don</CardTitle>
          <CardDescription className="text-lg">
            Votre générosité nous aide à continuer notre mission humanitaire
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="donor_name">Nom complet *</Label>
                <Input
                  id="donor_name"
                  name="donor_name"
                  type="text"
                  placeholder="Votre nom complet"
                  value={formData.donor_name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="donor_email">Email *</Label>
                <Input
                  id="donor_email"
                  name="donor_email"
                  type="email"
                  placeholder="votre@email.com"
                  value={formData.donor_email}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone_number">Numéro de téléphone</Label>
              <Input
                id="phone_number"
                name="phone_number"
                type="tel"
                placeholder="+221 XX XXX XX XX"
                value={formData.phone_number}
                onChange={handleInputChange}
              />
            </div>

            <div className="space-y-4">
              <Label>Montant du don (FCFA) *</Label>
              <div className="grid grid-cols-3 md:grid-cols-5 gap-2 mb-3">
                {quickAmounts.map((amount) => (
                  <Button
                    key={amount}
                    type="button"
                    variant="outline"
                    className="h-12"
                    onClick={() => setFormData(prev => ({ ...prev, amount: amount.toString() }))}
                  >
                    {amount.toLocaleString()} F
                  </Button>
                ))}
              </div>
              <Input
                id="amount"
                name="amount"
                type="number"
                placeholder="Montant personnalisé"
                value={formData.amount}
                onChange={handleInputChange}
                required
                min="100"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Message (optionnel)</Label>
              <Textarea
                id="message"
                name="message"
                placeholder="Laissez un message d'encouragement..."
                rows={3}
                value={formData.message}
                onChange={handleInputChange}
              />
            </div>

            <Button
              type="submit"
              className="w-full h-12 text-lg"
              disabled={isLoading}
            >
              {isLoading ? (
                "Traitement en cours..."
              ) : (
                <>
                  <CreditCard className="mr-2 h-5 w-5" />
                  Procéder au paiement
                </>
              )}
            </Button>

            <div className="text-center text-sm text-muted-foreground">
              <p>Paiement sécurisé via Paystack</p>
              <p>Toutes les principales cartes sont acceptées</p>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default DonationForm;