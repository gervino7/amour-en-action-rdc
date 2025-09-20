import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface VerifyRequest {
  reference: string;
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

    const { reference }: VerifyRequest = await req.json();

    // Verify transaction with Paystack
    const paystackResponse = await fetch(`https://api.paystack.co/transaction/verify/${reference}`, {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${Deno.env.get("PAYSTACK_SECRET_KEY")}`,
        "Content-Type": "application/json",
      },
    });

    const paystackData = await paystackResponse.json();

    if (!paystackResponse.ok) {
      console.error("Paystack verification error:", paystackData);
      throw new Error("Failed to verify payment");
    }

    const transaction = paystackData.data;
    
    // Update donation status based on Paystack response
    const status = transaction.status === "success" ? "completed" : "failed";
    
    const { data: updatedDonation, error: updateError } = await supabase
      .from("donations")
      .update({
        status,
        paystack_transaction_id: transaction.id.toString()
      })
      .eq("paystack_reference", reference)
      .select()
      .single();

    if (updateError) {
      console.error("Error updating donation:", updateError);
      throw new Error("Failed to update donation status");
    }

    console.log("Donation verified and updated:", updatedDonation.id, status);

    return new Response(JSON.stringify({
      success: true,
      status,
      transaction,
      donation: updatedDonation
    }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });

  } catch (error: any) {
    console.error("Error in verify-donation function:", error);
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