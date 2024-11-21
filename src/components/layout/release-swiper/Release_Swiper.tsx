"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { ComponentProps } from "@/types/function_types";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import style from "./Release_Swiper.module.scss";

// import required modules
import { Autoplay, EffectCoverflow } from "swiper/modules";

const Release_Swiper: React.FC<ComponentProps> = ({ children }) => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 5000000,
          reverseDirection: true,
          disableOnInteraction: false,
        }}
        effect="coverflow"
        coverflowEffect={{
          rotate: 30,
          stretch: 10,
          depth: 100,
          modifier: 2,
          slideShadows: true,
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
        modules={[Autoplay, EffectCoverflow]}
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

export default Release_Swiper;
