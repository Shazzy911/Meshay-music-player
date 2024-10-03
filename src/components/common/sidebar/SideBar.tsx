"use client";
import { sidebar_route_links } from "@/json/route_links";
import style from "./SideBar.module.scss";
import Link from "next/link";
import Button from "@/components/ui/button/Button";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { setMenuOpen } from "@/redux/slices/menuSlice";

const SideBar = () => {
  const dispatch = useAppDispatch();
  const menuOpen = useAppSelector((state) => state.menuOpen);
  return (
    <div className={`${style.container} ${menuOpen ? style.active : ''}`}>

      <div className={style.link_container}>
        {
          sidebar_route_links.map((item) => (
            <Link className={style.link} key={item.id} href={item.route} onClick={() => dispatch(setMenuOpen(!menuOpen))} ><span>{item.icon}</span>{item.link}</Link>
          ))
        }
      </div>
      <div className={`${style.premium_button} ${style.sidebar_button}`}>
        <Button text="Explore Premium" />
      </div>
      <div className={`${style.discover_button} ${style.sidebar_button}`}>
        <Button text="Discover More" />
      </div>
    </div>
  )
}

export default SideBar