"use client";

import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/service/supabaseClient";

export default function Callback() {
  const router = useRouter();
  const hasSynced = useRef(false);

  useEffect(() => {
    // Let Supabase handle the code exchange automatically
    // then listen for the session to appear
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async (event, session) => {
      if (hasSynced.current) return;
      if (!session) return;

      // Only handle these two events
      if (event !== "SIGNED_IN" && event !== "TOKEN_REFRESHED") return;

      hasSynced.current = true;

      const user = session.user;
      const provider = user.app_metadata?.provider;
      const isNewUser =
        event === "SIGNED_IN" && user.created_at === user.last_sign_in_at; // ← detects first-time signup

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/auth/oauth`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          credentials: "include", // ← required to receive and send cookies

          body: JSON.stringify({
            email: user.email,
            name: user.user_metadata?.full_name || user.user_metadata?.name,
            image: user.user_metadata?.avatar_url,
            provider,
            providerAccountId: user.id,
            access_token: session.access_token,
            refresh_token: session.refresh_token,
            isNewUser, // ← send this to backend
          }),
        },
      );

      if (!response.ok) {
        console.error("Backend sync failed:", await response.text());
        router.push("/login");
        return;
      }

      router.push("/"); // ← always go home, both register & login
    });

    return () => subscription.unsubscribe();
  }, [router]);

  return <p>Logging you in...</p>;
}
