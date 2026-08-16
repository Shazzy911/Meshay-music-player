// src/app/layout.tsx
import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import { AuthProvider } from "@/context/authProvider";
import { ThemeProvider } from "@/context/ThemeProvider";
import Providers from "@/redux/Providers";
import "normalize.css";
import "./globals.scss";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Meshay Live Show & Music Streaming Platform",
  description: "Music streaming platform",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={outfit.className}>
        <ThemeProvider>
          <AuthProvider>
            <Providers>{children}</Providers>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
