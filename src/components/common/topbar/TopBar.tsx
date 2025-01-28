import style from "./TopBar.module.scss";
import Button from "@/components/ui/small/button/Button";
import Logo from "@/components/ui/small/logo/Logo";
import Search from "@/components/ui/small/search/Search";
import { FaBell, FaUserAlt } from "react-icons/fa";
import { MdOutlineLogin } from "react-icons/md";
import Menu from "../menu/Menu";
import Link from "next/link";

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
          <FaBell />
        </div>
        <div>
          {4 > 22 ? (
            <Link href={"/user"} className={`${style.icons} ${style.user}`}>
              <FaUserAlt />
            </Link>
          ) : (
            <div style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
              <Link
                href={"/register"}
                className={`${style.icons} ${style.user}`}
              >
                <h4>LogIn</h4>
                <MdOutlineLogin />
              </Link>
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
