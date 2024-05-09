"use client";
import { useSwiper } from 'swiper/react';
import React from 'react';

export const CustomNextButton = ({classes}: any) => {
const swiper = useSwiper();
  
  return (
    <button className={"custom-next-button" && classes} onClick={() => swiper.slideNext()}>
      <svg width="24" height="24" viewBox="0 0 24 24">
        <path d="M13.5 6.5L19 12 13.5 17.5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  );
};


export const CustomPrevButton = ({classes}:any) => {
const swiper = useSwiper();

  return (
    <button className={"custom-prev-button" && classes} onClick={() => swiper.slidePrev()}>
      <svg width="24" height="24" viewBox="0 0 24 24">
        <path d="M10.5 6.5L5 12 10.5 17.5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  );
};