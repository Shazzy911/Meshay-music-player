// src/app/(routes)/layout.tsx
import dynamic from "next/dynamic";
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

export default function RoutesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="app">
      <TopBar />
      <div className="main-container">
        <SideBar />
        <main className="page">{children}</main>
      </div>
      <Footer />
      <Player />
    </div>
  );
}
