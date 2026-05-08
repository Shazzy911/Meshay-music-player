"use client";
import React from "react";
import styles from "./Button.module.scss";
import { useRouter } from "next/navigation";

type ButtonProp = React.ComponentPropsWithoutRef<"button"> & {
  variant?: "primary" | "secondary";
}; // This will allow to have acceopt all the button Attribute..
type ButtonType = ButtonProp & {
  style?: React.CSSProperties;

  // borderRadius?: Record<string, number>; // Key should be String ==> Value can be Number...
  text: string;
  navigateTo?: string;
  onClick?: () => void;
};

const Button = ({ text, style, navigateTo, onClick }: ButtonType) => {
  const router = useRouter();

  const handleClick = () => {
    if (navigateTo) {
      router.push(navigateTo);
    }
    if (onClick) {
      onClick();
    }
  };
  return (
    <button className={styles.container} style={style} onClick={handleClick}>
      {text}
    </button>
  );
};

export default Button;
