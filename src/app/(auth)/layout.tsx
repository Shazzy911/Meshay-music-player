// app/signup/layout.tsx
import React from "react";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "../(routes)/globals.scss";
import style from "./auth.layout.module.scss";
const inter = Poppins({ subsets: ["latin"], weight: "400" });
export const metadata: Metadata = {
  title: "Meshay Live Show & Music Streaming Platform",
  description: "This is the music application",
};
export default function SignupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={` ${inter.className} ${style.layout}`}>
        {children}
      </body>
    </html>
  );
}
