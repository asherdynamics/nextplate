"use client";

import React from 'react'
import Image from 'next/image'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Slider() {
  return (
    <div className="flex justify-center">
                <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
              <SwiperSlide className='flex justify-center items-center w-full max-h-screen'><Image src='/images/banners/nebula-banner.png' alt='nebula banner' width={2400} height={100} className='flex justify-center'></Image></SwiperSlide>
              <SwiperSlide className='bg-red-400'>Slide 2</SwiperSlide>
              <SwiperSlide className='bg-red-400'>Slide 3</SwiperSlide>
              <SwiperSlide className='bg-red-400'>Slide 4</SwiperSlide>
    </Swiper>
              </div>
  )
}


