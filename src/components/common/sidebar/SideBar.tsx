"use client";
import style from "./SideBar.module.scss";
import { sidebar_route_links } from "@/json/route_links";
import Link from "next/link";
import { setMenuOpen } from "@/redux/slices/menuSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import Favorite from "@/components/layout/sidebar-favorite/Favorite";

const SideBar = () => {
  const dispatch = useAppDispatch();
  const menuOpen = useAppSelector((state) => state.menuOpen);
  return (
    <section className={`${style.container} ${menuOpen ? style.active : ""}`}>
      <div className={style.link_container}>
        {sidebar_route_links.map((item) => (
          <Link
            className={style.link}
            key={item.id}
            href={item.route}
            onClick={() => dispatch(setMenuOpen(!menuOpen))}
          >
            <span>{item.icon}</span>
            {item.link}
          </Link>
        ))}
      </div>
      <Favorite />
    </section>
  );
};

export default SideBar;
