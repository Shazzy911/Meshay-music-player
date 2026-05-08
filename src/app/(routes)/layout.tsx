import type { Metadata } from "next";
import dynamic from "next/dynamic";

import Providers from "@/redux/Providers";

import { Fredoka } from "next/font/google";

import "normalize.css";
import "./globals.scss";

import Loader from "@/components/ui/small/loader/Loader";
import Player from "@/components/common/player/Player";

const TopBar = dynamic(() => import("@/components/common/topbar/TopBar"), {
  loading: () => <Loader />,
});

const Footer = dynamic(() => import("@/components/common/footer/Footer"), {
  loading: () => <Loader />,
});

const SideBar = dynamic(() => import("@/components/common/sidebar/SideBar"), {
  loading: () => <Loader />,
});

const fredoka = Fredoka({
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
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={fredoka.className}>
        <Providers>
          <div className="app">
            <TopBar />

            <div className="main-container">
              <SideBar />

              <main className="page">{children}</main>
            </div>

            <Footer />

            <Player />
          </div>
        </Providers>
      </body>
    </html>
  );
}
