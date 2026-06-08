import { supabase } from "@/lib/service/supabaseClient";

const signInWithGoogle = async () => {
  await supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      redirectTo: `${window.location.origin}/callback`,
    },
  });
};
const signInWithGithub = async () => {
  await supabase.auth.signInWithOAuth({
    provider: "github",
    options: {
      redirectTo: `${window.location.origin}/callback`,
    },
  });
};

export const oAuthService = {
  signInWithGoogle,
  signInWithGithub,
};
