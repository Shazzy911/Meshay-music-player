"use client";
import style from "./ThemeToggle.module.scss";
import { FaMoon, FaSun } from "react-icons/fa";
import { useTheme } from "@/context/ThemeProvider"; // adjust path

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      className={style.themeToggle}
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
    >
      {theme === "dark" ? <FaSun /> : <FaMoon />}
    </button>
  );
};

export default ThemeToggle;
