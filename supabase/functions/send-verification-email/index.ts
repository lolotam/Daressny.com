
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface EmailRequest {
  email: string;
  name: string;
  token: string;
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { email, name, token }: EmailRequest = await req.json();
    
    // Domain of the app
    const appUrl = "https://daressny.com";
    const verificationUrl = `${appUrl}/verify-email?token=${token}&email=${encodeURIComponent(email)}`;

    // Send verification email
    const { data, error } = await resend.emails.send({
      from: "منصة درسني <onboarding@resend.dev>",
      to: [email],
      subject: "تأكيد البريد الإلكتروني | منصة درسني",
      html: `
        <div dir="rtl" style="font-family: Arial, sans-serif; line-height: 1.6;">
          <h2>مرحباً ${name || ''},</h2>
          <p>شكراً لتسجيلك في منصة درسني.</p>
          <p>لإكمال عملية التسجيل، يرجى تأكيد بريدك الإلكتروني من خلال الضغط على الرابط أدناه:</p>
          <p>
            <a href="${verificationUrl}" style="background-color: #4CAF50; color: white; padding: 10px 15px; text-decoration: none; border-radius: 4px; display: inline-block;">
              تأكيد البريد الإلكتروني
            </a>
          </p>
          <p>أو يمكنك نسخ الرابط التالي ولصقه في متصفح الويب:</p>
          <p>${verificationUrl}</p>
          <p>إذا لم تقم بالتسجيل في منصة درسني، يرجى تجاهل هذه الرسالة.</p>
          <p>مع تحيات،<br>فريق منصة درسني</p>
        </div>
      `,
    });

    if (error) {
      throw error;
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
});
