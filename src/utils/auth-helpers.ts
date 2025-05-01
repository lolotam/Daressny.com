
import { supabase } from "@/integrations/supabase/client";

export const validatePasswordMatch = (password: string, confirmPassword: string): boolean => {
  return password === confirmPassword;
};

export const registerStudent = async (
  email: string,
  password: string,
  fullName: string,
  phoneNumber: string
) => {
  // Register user with Supabase Auth
  const { data, error } = await supabase.auth.signUp({
    email: email,
    password: password,
    options: {
      data: {
        full_name: fullName,
        user_type: 'student'
      }
    }
  });
  
  if (error) throw error;
  
  // If account creation successful, try to add additional information
  if (data.user) {
    try {
      // Store additional profile information
      const { error: profileError } = await supabase
        .from('profiles')
        .update({
          phone_number: phoneNumber,
          full_name: fullName
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
  }
  
  return data;
};

export const getAuthErrorMessage = (error: any): string => {
  let errorMessage = "حدث خطأ أثناء التسجيل، يرجى المحاولة مرة أخرى";
  
  if (error.message.includes("already registered") || error.message.includes("duplicate key value")) {
    errorMessage = "البريد الإلكتروني مسجل بالفعل. يرجى استخدام بريد إلكتروني آخر أو تسجيل الدخول.";
  } else if (error.message.includes("weak")) {
    errorMessage = "كلمة المرور ضعيفة جدا. يرجى اختيار كلمة مرور أقوى.";
  } else {
    // Display original error message for debugging
    console.error("Registration error details:", error);
    errorMessage = `خطأ في التسجيل: ${error.message}`;
  }
  
  return errorMessage;
};
