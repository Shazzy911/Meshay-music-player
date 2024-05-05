import type { Metadata } from "next";
import { Inter } from "next/font/google";
import 'normalize.css';
import "./styles/globals.scss";
import SideBar from "@/app/UI/sidebar/SideBar";
import TopBar from "@/app/UI/topbar/TopBar";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Meshay Music Player",
  description: "This is the music application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="container">
          <SideBar/>
          <div className="rightcontainer">
            <TopBar/>
           {children}
          </div>

        </div>
        
        
        
        </body>
    </html>
  );
}
