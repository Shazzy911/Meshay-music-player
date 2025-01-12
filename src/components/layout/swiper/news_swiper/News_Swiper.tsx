"use client";
import style from "./News_Swiper.module.scss";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { ComponentProps } from "@/types/function_types";

import Button_Navigation from "@/components/ui/small/button-navigation/Button_Navigation";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";

const News_Swiper: React.FC<ComponentProps> = ({ children }) => {
  const [isInitialized, setInit] = useState(false);
  // console.log(isInitialized);

  const prevRef = useRef<HTMLSpanElement | null>(null);
  const nextRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    if (isInitialized) return; // Only initialize once

    setInit(true);
  }, [isInitialized]);
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={5}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
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
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1400: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
        // className="mySwiper"
        modules={[Autoplay, Pagination, Navigation]}
        className={style.swiper}
        wrapperClass={style.swiperWrapper}
        slideClass={style.swiperSlide}
        onInit={() => setInit(true)}
      >
        {/* Ensure children is an array before mapping */}
        {Array.isArray(children) ? (
          children.map((child, index) => (
            <SwiperSlide key={index}>{child}</SwiperSlide>
          ))
        ) : (
          <SwiperSlide>{children}</SwiperSlide>
        )}
        <div className={style.navigation}>
          <Button_Navigation
            ref={prevRef}
            svg={<FaArrowLeft />}
            value="Previous"
          />
          <Button_Navigation
            ref={nextRef}
            svg={<FaArrowRight />}
            value="Next"
          />
        </div>
      </Swiper>
    </>
  );
};

export default News_Swiper;
