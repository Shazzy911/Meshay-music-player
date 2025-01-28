import style from "./SecTopBar.module.scss";
// import Button from "@/components/ui/button/Button";
import Logo from "@/components/ui/small/logo/Logo";
import { MdOutlineLogin } from "react-icons/md";

import Link from "next/link";

const SecTopBar = () => {
  return (
    <header className={style.container}>
      <Logo />

      <div className={style.icons_container}>
        <div style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
          <Link href={"/login"} className={`${style.icons} ${style.user}`}>
            <h4>LogIn</h4>
            <MdOutlineLogin />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default SecTopBar;
