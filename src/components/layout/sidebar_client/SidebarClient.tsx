"use client";

import Link from "next/link";

import styles from "./SidebarClient.module.scss";

import { sidebar_route_links } from "@/json/route_links";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { setMenuOpen } from "@/redux/slices/menuSlice";

const SidebarClient = () => {
  const dispatch = useAppDispatch();

  const isMenuOpen = useAppSelector((state) => state.menu.menuOpen);

  const handleCloseMenu = () => {
    dispatch(setMenuOpen(false));
  };

  return (
    <nav className={`${styles.container} ${isMenuOpen ? styles.active : ""}`}>
      {sidebar_route_links.map((item) => (
        <Link
          key={item.id}
          href={item.route}
          className={styles.link}
          onClick={handleCloseMenu}
        >
          <span>{item.icon}</span>
          <span>{item.link}</span>
        </Link>
      ))}
    </nav>
  );
};

export default SidebarClient;
