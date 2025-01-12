"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { ComponentProps } from "@/types/function_types";

import "swiper/css/pagination";
import "swiper/css/navigation";
import style from "./Artist_Page_Swiper.module.scss";

// import required modules
import { Autoplay, EffectCoverflow } from "swiper/modules";

const Artist_Page_Swiper: React.FC<ComponentProps> = ({ children }) => {
  return (
    <>
      <Swiper
        direction={"vertical"}
        spaceBetween={30}
        slidesPerView={1} // One slide visible at a time
        centeredSlides={true}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        loop={true}
        grabCursor={true} // Allows dragging
        effect="coverflow"
        coverflowEffect={{
          rotate: 40, // Increase rotation
          stretch: 20, // Add spacing between slides
          depth: 150, // Increase depth
          modifier: 2.5, // Control zoom intensity
          slideShadows: true, // Enable shadows
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

export default Artist_Page_Swiper;
