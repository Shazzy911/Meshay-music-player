import style from "./TopBar.module.scss";
import Button from "@/components/ui/small/button/Button";
import Logo from "@/components/ui/small/logo/Logo";
import Search from "@/components/ui/small/search/Search";
import { FaMoon } from "react-icons/fa";
import Menu from "../menu/Menu";
import RegisterButton from "@/components/ui/small/register-button/RegisterButton";

const TopBar = () => {
  return (
    <header className={style.container}>
      <Logo />
      <div className={style.top_search}>
        <Search />
      </div>
      <section className={style.icons_container}>
        <div className={style.top_button}>
          <Button text="Explore Premium" navigateTo="/premium" />
        </div>
        <div className={style.icons}>
          <FaMoon />
        </div>
        <RegisterButton />
        <div className={`${style.icons} ${style.menu}`}>
          <Menu />
        </div>
      </section>
    </header>
  );
};

export default TopBar;
