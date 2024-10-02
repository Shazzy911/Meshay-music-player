"use client";

import React, { forwardRef, } from 'react';
import style from "./Button_Navigation.module.scss";


type CustomButtonProps = {
  value: string;
  svg: React.ReactNode;
};

 const Button_Navigation = forwardRef<HTMLSpanElement, CustomButtonProps>(({  svg ,  ...props } , ref) => {

 
  return (
    <span ref={ref} className={style.container} {...props}>
      {svg}
      
    </span>
  );
});
// Optional display name for debugging purposes
Button_Navigation.displayName = "Button_Navigation";


export default Button_Navigation;