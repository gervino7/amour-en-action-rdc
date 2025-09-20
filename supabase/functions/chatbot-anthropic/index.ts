import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { message } = await req.json();
    
    const anthropicApiKey = Deno.env.get('ANTHROPIC_API_KEY');
    console.log('API Key présente:', !!anthropicApiKey);
    console.log('API Key longueur:', anthropicApiKey?.length);
    console.log('API Key début:', anthropicApiKey?.substring(0, 10));
    
    if (!anthropicApiKey) {
      throw new Error('ANTHROPIC_API_KEY is not configured');
    }

    // Nettoyer la clé API de tout espace supplémentaire
    const cleanApiKey = anthropicApiKey.trim();
    
    console.log('Message reçu:', message);
    console.log('Clé API nettoyée longueur:', cleanApiKey.length);

    const systemPrompt = `Tu es l'assistant virtuel officiel de l'ONG Amour en Manifestation (ONG-AEM), une organisation humanitaire dédiée à l'assistance aux populations les plus vulnérables de la République Démocratique du Congo.

INFORMATIONS SUR L'ONG-AEM :
- Créée en septembre 2024
- Basée à Montréal, Canada
- Concentre ses efforts sur Kinshasa et les régions environnantes en RDC
- Mission : Manifester l'amour à travers des actions concrètes d'aide humanitaire
- Vision : Un monde où chaque personne a accès aux besoins essentiels de la vie
- Valeurs : Compassion, transparence, respect de la dignité humaine et engagement

NOS PROGRAMMES PRINCIPAUX :

1. ASSISTANCE ALIMENTAIRE
   - Distribution de vivres aux familles vulnérables
   - Soutien nutritionnel et denrées de base essentielles
   - Focus sur les communautés les plus démunies

2. FORMATIONS GRATUITES
   - Conduite automobile
   - Esthétique et beauté
   - Photographie et montage vidéo
   - Secrétariat et bureautique
   - Gestion de projets
   - Objectif : Autonomisation des jeunes et développement de compétences

3. SOUTIEN COMMUNAUTAIRE
   - Accompagnement des personnes avec albinisme
   - Soutien aux familles marginalisées
   - Promotion de l'inclusion sociale
   - Lutte contre la stigmatisation

4. SOINS DE SANTÉ
   - Visites médicales dans les communautés
   - Soins aux enfants et familles
   - Sensibilisation aux bonnes pratiques d'hygiène
   - Accès aux soins médicaux essentiels
   - Programmes de prévention sanitaire

APPROCHE DE L'ONG :
- Compréhension profonde des besoins locaux
- Partenariats durables avec les communautés
- Projets conçus pour un impact durable et positif
- Respect de la dignité des bénéficiaires

COORDONNÉES :
- Site web : Site officiel de l'ONG-AEM
- WhatsApp pour contact direct : +2250506803113

INSTRUCTIONS DE RÉPONSE :
- Réponds toujours en français
- Sois chaleureux, empathique et professionnel
- Utilise tes connaissances sur l'aide humanitaire et le développement
- Si on te demande des informations que tu n'as pas, dirige vers le contact WhatsApp
- Encourage les donations et le bénévolat de manière respectueuse
- Mets l'accent sur l'impact positif et l'espoir
- Utilise des exemples concrets de l'aide humanitaire en RDC quand pertinent
- Évite les termes trop techniques, utilise un langage accessible`;

    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'x-api-key': cleanApiKey,
        'Content-Type': 'application/json',
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: 'claude-3-5-sonnet-20241022',
        max_tokens: 1000,
        system: systemPrompt,
        messages: [
          {
            role: 'user',
            content: message
          }
        ]
      })
    });

    console.log('Status de la réponse Anthropic:', response.status);
    console.log('Headers de réponse:', Object.fromEntries(response.headers.entries()));

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Erreur API Anthropic:', errorText);
      throw new Error(`Anthropic API error: ${errorText}`);
    }

    const data = await response.json();
    console.log('Données reçues de Anthropic:', JSON.stringify(data, null, 2));
    const botMessage = data.content[0].text;

    return new Response(JSON.stringify({ 
      message: botMessage,
      success: true 
    }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Error in chatbot function:', error);
    return new Response(JSON.stringify({ 
      error: error.message,
      success: false 
    }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});