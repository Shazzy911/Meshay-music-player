"use client";

import React, { forwardRef, } from 'react';
import style from "./Slide_button.module.scss";


type CustomButtonProps = {
  value: string;
  svg: React.ReactNode;
};

 const Slide_Button = forwardRef<HTMLSpanElement, CustomButtonProps>(({  svg ,  ...props } , ref) => {

 
  return (
    <span ref={ref} className={style.container} {...props}>
      {svg}
      
    </span>
  );
});
// Optional display name for debugging purposes
Slide_Button.displayName = "Slide_Button";


export default Slide_Button;