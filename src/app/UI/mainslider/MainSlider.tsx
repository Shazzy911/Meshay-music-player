"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import { ComponentProps } from '@/types/function_types';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import style from './MainSlider.module.scss';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { CustomNextButton, CustomPrevButton } from '../custom-button/Custom_button';


const MainSlider: React.FC<ComponentProps> = ({children}) =>  {
  return (
    <div className={style.container}>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 85000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {/* Ensure children is an array before mapping */}
      {Array.isArray(children) ? (
        children.map((child, index) => (
          <SwiperSlide key={index}>{child}</SwiperSlide>
        ))
      ) : (
        <SwiperSlide>{children}</SwiperSlide>
      )}
      {/* <CustomPrevButton/> */}
      {/* <CustomNextButton/> */}
      </Swiper>
    </div>
  );
}

export default MainSlider;