
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface EmailRequest {
  to: string;
  subject: string;
  html: string;
  name?: string;
  type?: string;
  email?: string;
  phone?: string;
  details?: Record<string, any>;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { to, subject, html, name, type, email, phone, details }: EmailRequest = await req.json();
    
    // For admin notification
    const adminEmail = "dr.vet.waleedtam@gmail.com";
    
    // إرسال نسخة للإدارة
    const adminEmailResponse = await resend.emails.send({
      from: "درسني <onboarding@resend.dev>",
      to: [adminEmail],
      subject: `${subject} - ${name || email || "مستخدم جديد"}`,
      html: `
        <h2>معلومات ${type === "teacher" ? "المعلم" : "الطالب"} الجديد:</h2>
        <p><strong>الاسم:</strong> ${name || "غير محدد"}</p>
        <p><strong>البريد الإلكتروني:</strong> ${email || "غير محدد"}</p>
        <p><strong>رقم الهاتف:</strong> ${phone || "غير محدد"}</p>
        ${details ? `<h3>تفاصيل إضافية:</h3><pre>${JSON.stringify(details, null, 2)}</pre>` : ""}
        <hr>
        ${html}
      `
    });

    // إرسال تأكيد للمستخدم (إذا كان لديه بريد إلكتروني)
    let userEmailResponse = null;
    if (email) {
      userEmailResponse = await resend.emails.send({
        from: "درسني <onboarding@resend.dev>",
        to: [email],
        subject: "شكراً لتسجيلك في منصة درسني",
        html: `
          <h1>مرحباً ${name || "بك"} في منصة درسني!</h1>
          <p>شكراً لتسجيلك في منصة درسني التعليمية المتكاملة.</p>
          <p>سيتم التواصل معك قريباً من قبل فريق الدعم لدينا.</p>
          <p>مع تحيات فريق منصة درسني</p>
        `
      });
    }

    console.log("Email sent to admin:", adminEmailResponse);
    if (userEmailResponse) {
      console.log("Email sent to user:", userEmailResponse);
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
