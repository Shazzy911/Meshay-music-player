import { supabase } from "@/lib/service/supabaseClient";

const signInWithDiscord = async () => {
  await supabase.auth.signInWithOAuth({
    provider: "discord",
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
  signInWithDiscord,
  signInWithGithub,
};
