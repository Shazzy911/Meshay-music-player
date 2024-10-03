
import style from "./TopBar.module.scss";
import Button from "@/components/ui/button/Button";
import Logo from "@/components/ui/logo/Logo";
import Search from "@/components/ui/search/Search";
import {  FaBell,  FaUserAlt } from "react-icons/fa";
import { RiMenu3Fill } from "react-icons/ri";
const TopBar = () => {
  return (
    <header className={style.container}>
      <Logo/>
      <div className={style.top_search}>
      <Search/>
      </div>
      <section className={style.icons_container}>
        <div className={style.top_button}>

        <Button text="Explore Premium"/>
        </div>
        <div className={style.icons}>
          <FaBell />
        </div>
        <div className={`${style.icons} ${style.user}`}>
          <FaUserAlt/>
        </div>
        <div className={`${style.icons} ${style.menu}`}>
        <RiMenu3Fill />
        </div>
      </section>
    </header>
  );
};

export default TopBar;
