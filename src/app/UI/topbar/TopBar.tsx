import Search from "../search/Search";
import ButtonSec from "../Secondary-button/ButtonSec";
import style from "./TopBar.module.scss";
import { FaSearch, FaBell, FaShoppingCart, FaUserAlt } from "react-icons/fa";

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
