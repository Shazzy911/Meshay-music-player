"use client";
import style from "./Artist_Swiper.module.scss";
import { Autoplay, Mousewheel } from "swiper/modules";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { ComponentProps } from "@/types/function_types";

const Artist_Swiper: React.FC<ComponentProps> = ({ children }) => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={5}
        loop={true}
        autoplay={{
          delay: 500000,
          disableOnInteraction: false,
        }}
        mousewheel={{
          thresholdDelta: 50,
          sensitivity: 1,
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
        // className="mySwiper"
        modules={[Autoplay, Mousewheel]}
        className={style.swiper}
        wrapperClass={style.swiperWrapper}
        slideClass={style.swiperSlide}
      >
        {/* Ensure children is an array before mapping */}
        {Array.isArray(children) ? (
          children.map((child, index) => (
            <SwiperSlide key={index}>{child}</SwiperSlide>
          ))
        ) : (
          <SwiperSlide>{children}</SwiperSlide>
        )}
      </Swiper>
    </>
  );
};

export default Artist_Swiper;
