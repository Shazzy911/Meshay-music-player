import style from "./SecTopBar.module.scss";
// import Button from "@/components/ui/button/Button";
import Logo from "@/components/ui/small/logo/Logo";
// import { FaHome } from "react-icons/fa";

// import Link from "next/link";

const SecTopBar = () => {
  return (
    <header className={style.container}>
      <Logo />

      <div className={style.icons_container}>
        {/* <div style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
          <Link href={"/"} className={`${style.icons} ${style.user}`}>
            <FaHome />
            <h4>Home</h4>
          </Link>
        </div> */}
      </div>
    </header>
  );
};

export default SecTopBar;
