import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import 'swiper/css/pagination';
import { Navigation,Pagination } from 'swiper/modules';

export default function MySwiper() {
  return (
    <>
      <Swiper navigation={true} pagination={true} modules={[Navigation,Pagination]} className="mySwiper">
        <SwiperSlide>
            <div>hjjhnfghdhgfsgfvwfreqfwdqa</div>
        </SwiperSlide>
            <div>hjjhnfghdhgfsgfvwfreqfwdqa</div>
            <SwiperSlide></SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </>
  );
}
