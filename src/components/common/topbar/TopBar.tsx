import style from "./TopBar.module.scss";
import Button from "@/components/ui/button/Button";
import Logo from "@/components/ui/logo/Logo";
import Search from "@/components/ui/search/Search";
import { FaBell, FaUserAlt, FaSignInAlt } from "react-icons/fa";
import Menu from "../menu/Menu";

const TopBar = () => {
  return (
    <header className={style.container}>
      <Logo />
      <div className={style.top_search}>
        <Search />
      </div>
      <section className={style.icons_container}>
        <div className={style.top_button}>
          <Button text="Explore Premium" />
        </div>
        <div className={style.icons}>
          <FaBell />
        </div>
        <div>
          {4 > 2 ? (
            <div className={`${style.icons} ${style.user}`}>
              <FaUserAlt />
            </div>
          ) : (
            <div style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
              <p>Sign In</p>
              <span className={`${style.icons} ${style.user}`}>
                <FaSignInAlt />
              </span>
            </div>
          )}
        </div>
        <div className={`${style.icons} ${style.menu}`}>
          <Menu />
        </div>
      </section>
    </header>
  );
};

export default TopBar;
