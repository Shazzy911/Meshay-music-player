"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { ComponentProps } from "@/types/function_types";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import style from "./Swiper_Main.module.scss";

// import required modules
import {
  Autoplay,
  Pagination,
  Navigation,
  EffectCoverflow,
} from "swiper/modules";
// import SwiperCore from 'swiper/core'
import { useEffect, useRef, useState } from "react";
import Button_Navigation from "@/components/ui/button-navigation/Button_Navigation";
// SwiperCore.use([Navigation]);

const Swiper_Main: React.FC<ComponentProps> = ({ children }) => {
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
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 500000,
          reverseDirection: true,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
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
        modules={[Autoplay, Pagination, Navigation, EffectCoverflow]}
        className={style.swiper}
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

export default Swiper_Main;

// <!-- Slider main container -->
// <div class="swiper">
//   <!-- Additional required wrapper -->
//   <div class="swiper-wrapper">
//     <!-- Slides -->
//     <div class="swiper-slide">Slide 1</div>
//     <div class="swiper-slide">Slide 2</div>
//     <div class="swiper-slide">Slide 3</div>
//     ...
//   </div>
//   <!-- If we need pagination -->
//   <div class="swiper-pagination"></div>

//   <!-- If we need navigation buttons -->
//   <div class="swiper-button-prev"></div>
//   <div class="swiper-button-next"></div>

//   <!-- If we need scrollbar -->
//   <div class="swiper-scrollbar"></div>
// </div>
