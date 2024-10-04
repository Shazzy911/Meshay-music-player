"use client";
import React from 'react'
import styles from "./Button.module.scss"


type ButtonProp = React.ComponentPropsWithoutRef<"button"> & {
  variant? : "primary" | "secondary" ;
}; // This will allow to have acceopt all the button Attribute..
type ButtonType = ButtonProp &{
style?: React.CSSProperties;

// borderRadius?: Record<string, number>; // Key should be String ==> Value can be Number...
text: string;
// clickFunc: () => void;
};

const Button = ({text, style}: ButtonType) => {
  return (
    <button className={styles.container} style={style}>{text}</button>
  )
}

export default Button;