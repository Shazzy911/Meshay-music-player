"use client";

import style from "./SlideButton.module.scss";

interface buttonType {
    text?: string;
}

const slideButton = ({text}:buttonType) => {
  return (
    <button className={style.container}>{text}</button>
  )
}

export default slideButton;