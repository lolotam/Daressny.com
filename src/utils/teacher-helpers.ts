
import { supabase } from "@/integrations/supabase/client";
import { getAuthErrorMessage } from "./auth-helpers";

export const registerTeacher = async (
  email: string,
  password: string,
  fullName: string,
  phoneNumber: string,
  teacherDetails: {
    subjects: string;
    education: string;
    experience: string;
    bio: string;
  }
) => {
  // Register user with Supabase Auth
  const { data, error } = await supabase.auth.signUp({
    email: email,
    password: password,
    options: {
      data: {
        full_name: fullName,
        user_type: 'teacher'
      }
    }
  });
  
  if (error) throw error;
  
  // If account creation successful, try to add additional information
  if (data.user) {
    try {
      // Determine if the user should be an admin (based on email)
      const isAdmin = email === "dr.vet.waleedtam@gmail.com";
      
      // Store additional profile information
      const { error: profileError } = await supabase
        .from('profiles')
        .update({
          phone_number: phoneNumber,
          full_name: fullName,
          is_admin: isAdmin // Set admin status based on email
        })
        .eq('id', data.user.id);
        
      if (profileError) console.error("Profile update error:", profileError);
        
      // Send verification email
      await supabase.functions.invoke("send-verification-email", {
        body: { 
          email: email,
          name: fullName,
          token: data.user.id
        }
      });
    } catch (profileErr) {
      console.error("Error updating profile:", profileErr);
      // Continue since account was created successfully anyway
    }
  
    // Send additional teacher info to admin
    try {
      await supabase.functions.invoke("send-email", {
        body: {
          subject: "طلب انضمام معلم جديد",
          html: `
            <h2>طلب انضمام معلم جديد</h2>
            <p><strong>الاسم:</strong> ${fullName}</p>
            <p><strong>البريد الإلكتروني:</strong> ${email}</p>
            <p><strong>رقم الهاتف:</strong> ${phoneNumber}</p>
            <p><strong>المواد التي يدرسها:</strong> ${teacherDetails.subjects}</p>
            <p><strong>الشهادات والمؤهلات:</strong> ${teacherDetails.education}</p>
            <p><strong>سنوات الخبرة:</strong> ${teacherDetails.experience}</p>
            <p><strong>نبذة تعريفية:</strong> ${teacherDetails.bio}</p>
          `,
          name: fullName,
          email: email,
          phone: phoneNumber,
          type: "teacher",
          details: {
            subjects: teacherDetails.subjects,
            education: teacherDetails.education,
            experience: teacherDetails.experience,
            bio: teacherDetails.bio
          }
        }
      });
    } catch (emailErr) {
      console.error("Error sending admin notification:", emailErr);
      // Continue since account was created successfully anyway
    }
  }
  
  return data;
};
