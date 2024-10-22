import React, { Suspense } from "react";
import Providers from "@/redux/Providers";
import type { Metadata } from "next";
import localFont from "next/font/local";
import { Poppins } from "next/font/google";
import "normalize.css";
import "./styles/globals.scss";
import Loader from "@/components/ui/loader/Loader";

const TopBar = React.lazy(() => import("@/components/common/topbar/TopBar"));
const Footer = React.lazy(() => import("@/components/common/footer/Footer"));
const SideBar = React.lazy(() => import("@/components/common/sidebar/SideBar"));

const inter = Poppins({ subsets: ["latin"], weight: "400" });

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
export const metadata: Metadata = {
  title: "Meshay Live Show & Music Streaming Platform",
  description: "This is the music application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` ${inter.className} ${geistSans.variable} ${geistMono.variable}`}
      >
        <Providers>
          <Suspense fallback={<Loader />}>
            <div className="app">
              <TopBar />
              <div className="main-container">
                <SideBar />

                <div className="page">
                  {children}
                  <Footer />
                </div>
              </div>
            </div>
          </Suspense>
        </Providers>
      </body>
    </html>
  );
}
