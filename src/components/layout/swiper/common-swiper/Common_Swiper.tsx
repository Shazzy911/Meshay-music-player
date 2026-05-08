"use client";

import React from "react";

import style from "./Common_Swiper.module.scss";

import { Autoplay } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { ComponentProps } from "@/types/function_types";

interface Common_Swiper_Type extends ComponentProps {
  delay: number;
}

const Common_Swiper: React.FC<Common_Swiper_Type> = ({ children, delay }) => {
  const slides = React.Children.toArray(children);

  return (
    <Swiper
      slidesPerView={3}
      spaceBetween={5}
      loop={true}
      autoplay={{
        delay,
        disableOnInteraction: false,
      }}
      breakpoints={{
        640: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 10,
        },
        1400: {
          slidesPerView: 6,
          spaceBetween: 8,
        },
      }}
      modules={[Autoplay]}
      className={style.swiper}
      wrapperClass={style.swiperWrapper}
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>{slide}</SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Common_Swiper;
