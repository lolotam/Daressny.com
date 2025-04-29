
import { supabase } from "@/integrations/supabase/client";

export interface EmailDetails {
  to?: string;
  subject: string;
  html: string;
  name?: string;
  type?: string;
  email?: string;
  phone?: string;
  details?: Record<string, any>;
}

export const sendEmail = async (emailDetails: EmailDetails): Promise<{ success: boolean; error?: string }> => {
  try {
    // Always send to admin if no recipient is specified
    const to = emailDetails.to || "dr.vet.waleedtam@gmail.com";

    const { error } = await supabase.functions.invoke("send-email", {
      body: {
        to,
        ...emailDetails
      }
    });

    if (error) {
      console.error("Error sending email:", error);
      return { success: false, error: error.message };
    }

    return { success: true };
  } catch (err: any) {
    console.error("Error in sendEmail function:", err);
    return { success: false, error: err.message };
  }
};
