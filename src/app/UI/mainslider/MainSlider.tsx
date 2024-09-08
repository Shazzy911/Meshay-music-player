"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import { ComponentProps } from '@/types/function_types';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import style from './MainSlider.module.scss';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
// import SwiperCore from 'swiper/core'
// import { CustomNextButton, CustomPrevButton } from '../custom-button/Custom_button';
import { useRef, useState } from 'react';
import { CustomButton } from '../custom-button/Custom_button';
// SwiperCore.use([Navigation]);

const MainSlider: React.FC<ComponentProps> = ({ children }) => {

  const [_, setInit] = useState(Boolean);

  const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
    <div className={style.container}>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: false,
        }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className={style.Swiper}
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


      <div className={style.pagination_navigation}>
        <CustomButton ref={prevRef} svg={<FaArrowLeft/>} value="Previous" />
        <CustomButton ref={nextRef} svg={<FaArrowRight/>}  value="Next" />

      </div>
      </Swiper>

    </div>
  );
}

export default MainSlider;



