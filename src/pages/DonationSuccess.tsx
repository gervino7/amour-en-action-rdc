import React, { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { CheckCircle, ArrowLeft, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { supabase } from "@/integrations/supabase/client";

const DonationSuccess = () => {
  const [searchParams] = useSearchParams();
  const [isVerifying, setIsVerifying] = useState(true);
  const [verificationStatus, setVerificationStatus] = useState<'success' | 'failed' | 'pending'>('pending');
  
  const reference = searchParams.get('reference');

  useEffect(() => {
    const verifyPayment = async () => {
      if (!reference) {
        setVerificationStatus('failed');
        setIsVerifying(false);
        return;
      }

      try {
        const { data, error } = await supabase.functions.invoke("verify-donation", {
          body: { reference }
        });

        if (error) {
          console.error("Verification error:", error);
          setVerificationStatus('failed');
        } else if (data.success && data.status === 'completed') {
          setVerificationStatus('success');
        } else {
          setVerificationStatus('failed');
        }
      } catch (error) {
        console.error("Verification failed:", error);
        setVerificationStatus('failed');
      } finally {
        setIsVerifying(false);
      }
    };

    verifyPayment();
  }, [reference]);

  if (isVerifying) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary/5 to-secondary/5 flex items-center justify-center p-4">
        <Card className="w-full max-w-md text-center">
          <CardContent className="pt-6">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
            <p>Vérification de votre paiement...</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 to-secondary/5 flex items-center justify-center p-4">
      <Card className="w-full max-w-md text-center shadow-lg">
        <CardHeader>
          <div className="flex justify-center mb-4">
            {verificationStatus === 'success' ? (
              <CheckCircle className="h-16 w-16 text-green-500" />
            ) : (
              <div className="p-4 bg-destructive/10 rounded-full">
                <Heart className="h-8 w-8 text-destructive" />
              </div>
            )}
          </div>
          
          {verificationStatus === 'success' ? (
            <>
              <CardTitle className="text-2xl font-bold text-green-700">
                Don réussi !
              </CardTitle>
              <CardDescription className="text-lg">
                Votre générosité fait la différence
              </CardDescription>
            </>
          ) : (
            <>
              <CardTitle className="text-2xl font-bold text-destructive">
                Problème de paiement
              </CardTitle>
              <CardDescription className="text-lg">
                Une erreur est survenue lors du traitement
              </CardDescription>
            </>
          )}
        </CardHeader>
        
        <CardContent className="space-y-4">
          {verificationStatus === 'success' ? (
            <div className="space-y-4">
              <p className="text-muted-foreground">
                Merci infiniment pour votre don ! Votre contribution nous aide à poursuivre 
                notre mission humanitaire et à apporter de l'aide à ceux qui en ont besoin.
              </p>
              <p className="text-sm text-muted-foreground">
                Vous recevrez bientôt un reçu par email.
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              <p className="text-muted-foreground">
                Le paiement n'a pas pu être traité. Veuillez réessayer ou 
                nous contacter si le problème persiste.
              </p>
              <p className="text-sm text-muted-foreground">
                Référence: {reference || 'Non disponible'}
              </p>
            </div>
          )}
          
          <div className="flex flex-col gap-3 pt-4">
            <Button asChild className="w-full">
              <Link to="/">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Retour à l'accueil
              </Link>
            </Button>
            
            {verificationStatus === 'failed' && (
              <Button asChild variant="outline" className="w-full">
                <Link to="/don">
                  Réessayer le don
                </Link>
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DonationSuccess;