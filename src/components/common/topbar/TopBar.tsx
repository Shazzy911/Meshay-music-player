
import style from "./TopBar.module.scss";
import ButtonSec from "@/components/ui/Secondary-button/ButtonSec";
import Search from "@/components/ui/search/Search";
import {  FaBell, FaShoppingCart, FaUserAlt } from "react-icons/fa";

const TopBar = () => {
  return (
    <header className={style.container}>
      <Search/>
      <div className={style.cart_bell_container}>
        <div className={style.bell_cart}>
          <FaBell />
        </div>
        <div className={style.bell_cart}>
          <FaShoppingCart />
        </div>
        <ButtonSec text="Explore Premium"/>
        {/* <div className={style.explore }>
          <p>Explore Premium</p>
        </div> */}
        <div className={style.bell_cart}>
          <FaUserAlt/>
        </div>
      </div>
    </header>
  );
};

export default TopBar;
