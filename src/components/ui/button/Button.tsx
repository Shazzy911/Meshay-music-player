"use client";

import style from "./Button.module.scss";

interface buttonType {
    text?: string;
}

const Button = ({text}:buttonType) => {
  return (
    <button className={style.container}>{text}</button>
  )
}

export default Button