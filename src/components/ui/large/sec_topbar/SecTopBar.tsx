import style from "./SecTopBar.module.scss";
import Logo from "@/components/ui/small/logo/Logo";

import RegisterButton from "../../small/register-button/RegisterButton";

const SecTopBar = () => {
  return (
    <header className={style.container}>
      <Logo />

      <div className={style.icons_container}>
        <div style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
          <RegisterButton />
        </div>
      </div>
    </header>
  );
};

export default SecTopBar;
