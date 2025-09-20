import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface DonationRequest {
  donor_name: string;
  donor_email: string;
  amount: number;
  phone_number?: string;
  message?: string;
  currency?: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabase = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? ""
    );

    const { donor_name, donor_email, amount, phone_number, message, currency = "XOF" }: DonationRequest = await req.json();

    // Create donation record first
    const { data: donation, error: donationError } = await supabase
      .from("donations")
      .insert({
        donor_name,
        donor_email,
        amount,
        phone_number,
        message,
        currency,
        status: "pending"
      })
      .select()
      .single();

    if (donationError) {
      console.error("Error creating donation:", donationError);
      throw new Error("Failed to create donation record");
    }

    // Initialize Paystack transaction
    const paystackResponse = await fetch("https://api.paystack.co/transaction/initialize", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${Deno.env.get("PAYSTACK_SECRET_KEY")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        amount: amount * 100, // Paystack expects amount in kobo
        email: donor_email,
        currency: currency,
        reference: donation.id, // Use our donation ID as reference
        callback_url: `${req.headers.get("origin")}/donation-success`,
        metadata: {
          donor_name,
          phone_number,
          message,
          donation_id: donation.id
        }
      }),
    });

    const paystackData = await paystackResponse.json();

    if (!paystackResponse.ok) {
      console.error("Paystack error:", paystackData);
      throw new Error("Failed to initialize payment");
    }

    // Update donation with Paystack reference
    await supabase
      .from("donations")
      .update({
        paystack_reference: paystackData.data.reference
      })
      .eq("id", donation.id);

    console.log("Payment initialized successfully:", paystackData.data.reference);

    return new Response(JSON.stringify({
      success: true,
      authorization_url: paystackData.data.authorization_url,
      reference: paystackData.data.reference,
      donation_id: donation.id
    }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });

  } catch (error: any) {
    console.error("Error in process-donation function:", error);
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: error.message 
      }),
      {
        status: 500,
        headers: { 
          "Content-Type": "application/json", 
          ...corsHeaders 
        },
      }
    );
  }
};

serve(handler);