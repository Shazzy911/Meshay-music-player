
import style from "./TopBar.module.scss";
import Button from "@/components/ui/button/Button";
import Logo from "@/components/ui/logo/Logo";
import Search from "@/components/ui/search/Search";
import {  FaBell, FaShoppingCart, FaUserAlt } from "react-icons/fa";

const TopBar = () => {
  return (
    <header className={style.container}>
      <Logo/>
      <Search/>
      <section className={style.cart_bell_container}>
        <Button text="Explore Premium"/>
        <div className={style.bell_cart}>
          <FaBell />
        </div>
        <div className={style.bell_cart}>
          <FaShoppingCart />
        </div>
        {/* <div className={style.explore }>
          <p>Explore Premium</p>
        </div> */}
        <div className={style.bell_cart}>
          <FaUserAlt/>
        </div>
      </section>
    </header>
  );
};

export default TopBar;
