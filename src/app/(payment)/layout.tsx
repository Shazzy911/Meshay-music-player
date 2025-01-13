// app/signup/layout.tsx
import React from "react";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "../(routes)/globals.scss";
import style from "./payment.layout.module.scss";
import SecTopBar from "@/components/ui/large/sec_topbar/SecTopBar";
const inter = Poppins({ subsets: ["latin"], weight: "400" });
export const metadata: Metadata = {
  title: "Meshay Music Premium Membership",
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
        <div className="app">
          <SecTopBar />
          <div className={style.main_container}>
            <div className="page">{children}</div>
          </div>
        </div>
      </body>
    </html>
  );
}
