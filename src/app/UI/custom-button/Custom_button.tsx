"use client";

import React, { forwardRef, } from 'react';
import style from "./Custom_button.module.scss";


type CustomButtonProps = {
  value: string;
  svg: any
};

export const CustomButton = forwardRef(({ value, svg, ...props }: CustomButtonProps, ref: React.Ref<HTMLButtonElement>) => {
  return (
    <span ref={ref} className={style.container}>
      {svg}
    </span>
  );
});