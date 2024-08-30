import type { Metadata } from "next";
import { Ubuntu, Inter, Roboto , Poppins} from "next/font/google";
import "normalize.css";
import "./styles/globals.scss";
import SideBar from "@/app/UI/sidebar/SideBar";
import TopBar from "@/app/UI/topbar/TopBar";
const inter = Poppins({ subsets: ["latin"],  weight: "400"});

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
      <body className={inter.className}>
        <div className="container">
          <div className="left_container">
            <SideBar />
          </div>
          <div className="right_container">
            <TopBar />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
