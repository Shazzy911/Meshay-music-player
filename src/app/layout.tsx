import type { Metadata } from "next";
import localFont from "next/font/local";
import { Poppins } from "next/font/google";
import "normalize.css";
// import "./styles/globals.scss";
import "./styles/globals.scss";
import SideBar from "@/components/common/sidebar/SideBar";
import TopBar from "@/components/common/topbar/TopBar";
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
      <body className={` ${inter.className} ${geistSans.variable} ${geistMono.variable}`}>
        <div className="app">
          <TopBar />
          <div className="container">
            <div className="left_container">
              <SideBar />
            </div>
            <div className="right_container">
              {children}
            </div>
          </div>
        </div>

      </body>
    </html>
  );
}
