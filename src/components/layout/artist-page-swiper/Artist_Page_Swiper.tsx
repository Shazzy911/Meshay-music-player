"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { ComponentProps } from "@/types/function_types";

import "swiper/css/pagination";
import "swiper/css/navigation";
import style from "./Artist_Page_Swiper.module.scss";

// import required modules
import { Autoplay } from "swiper/modules";

const Artist_Page_Swiper: React.FC<ComponentProps> = ({ children }) => {
  return (
    <>
      <Swiper
        direction={"vertical"}
        spaceBetween={30}
        slidesPerView={1} // One slide visible at a time
        centeredSlides={true}
        autoplay={{
          delay: 500000,
          disableOnInteraction: false,
        }}
        mousewheel={{
          thresholdDelta: 50,
          sensitivity: 1,
        }}
        breakpoints={{
          340: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 1,
          },
          1024: {
            slidesPerView: 1,
          },
          1400: {
            slidesPerView: 1,
          },
        }}
        modules={[Autoplay]}
        className={style.swiper}
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

export default Artist_Page_Swiper;
