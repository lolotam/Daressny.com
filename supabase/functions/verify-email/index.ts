
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.49.4";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface VerifyEmailRequest {
  email: string;
  token: string;
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabaseClient = createClient(
      Deno.env.get("SUPABASE_URL") || "",
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") || ""
    );

    const { email, token }: VerifyEmailRequest = await req.json();
    
    // Verify the email
    const { error } = await supabaseClient.auth.admin.updateUserById(
      token,
      { email_confirm: true }
    );

    if (error) {
      throw error;
    }

    return new Response(
      JSON.stringify({ success: true, message: "تم تأكيد البريد الإلكتروني بنجاح" }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      }
    );
  } catch (error: any) {
    console.error("Error verifying email:", error);
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: error.message || "حدث خطأ أثناء تأكيد البريد الإلكتروني" 
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
});
