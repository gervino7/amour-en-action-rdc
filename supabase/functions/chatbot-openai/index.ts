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
    
    const openaiApiKey = Deno.env.get('ANTHROPIC_API_KEY');
    console.log('OpenAI API Key présente:', !!openaiApiKey);
    console.log('OpenAI API Key longueur:', openaiApiKey?.length);
    console.log('OpenAI API Key début:', openaiApiKey?.substring(0, 10));
    
    if (!openaiApiKey) {
      throw new Error('OPENAI_API_KEY is not configured');
    }

    // Nettoyer la clé API de tout espace supplémentaire
    const cleanApiKey = openaiApiKey.trim();
    
    console.log('Message reçu:', message);
    console.log('Clé OpenAI nettoyée longueur:', cleanApiKey.length);

    const systemPrompt = `Tu es l'assistant de l'ONG-AEM (Amour en Manifestation), ONG humanitaire en RDC créée en septembre 2024, basée à Montréal.

PROGRAMMES:
• Assistance alimentaire aux familles vulnérables
• Formations gratuites (conduite, esthétique, photo/vidéo, secrétariat)
• Soutien aux personnes avec albinisme et familles marginalisées
• Soins de santé communautaires et hygiène

INSTRUCTIONS:
- Réponses COURTES et PRÉCISES (max 2-3 phrases)
- Français uniquement
- Ton chaleureux mais concis
- Si pas d'info: diriger vers WhatsApp +2250506803113
- Encourager donations/bénévolat sans insister
- Si l'utilisateur exprime un intérêt pour donner ou soutenir financièrement: mentionner "don" ou "donation" dans ta réponse
- Si l'utilisateur veut nous contacter ou avoir des infos de contact: mentionner "contact" dans ta réponse
- Répondre de manière naturelle en incluant ces mots-clés quand approprié`;

    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'x-api-key': cleanApiKey,
        'Content-Type': 'application/json',
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: 'claude-3-5-sonnet-20241022',
        max_tokens: 300,
        system: systemPrompt,
        messages: [
          {
            role: 'user',
            content: message
          }
        ]
      })
    });

    console.log('Status de la réponse OpenAI:', response.status);
    console.log('Headers de réponse:', Object.fromEntries(response.headers.entries()));

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Erreur API OpenAI:', errorText);
      throw new Error(`OpenAI API error: ${errorText}`);
    }

    const data = await response.json();
    console.log('Données reçues de OpenAI:', JSON.stringify(data, null, 2));
    const botMessage = data.content[0].text;

    return new Response(JSON.stringify({ 
      message: botMessage,
      success: true 
    }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Error in OpenAI chatbot function:', error);
    return new Response(JSON.stringify({ 
      error: error.message,
      success: false 
    }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});