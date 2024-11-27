'use client'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import Image from 'next/image'
import { Pagination, Navigation, FreeMode, Autoplay } from 'swiper/modules'
import servicesData from '@/data/servicesData'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

import './slideshow.css'

// import required modules

export default function App() {
  return (
    <div className=" h-[300px] w-[420px] overflow-hidden rounded-lg lg:w-[500px]">
      <Swiper
        style={
          {
            '--swiper-navigation-color': '#fff',
            '--swiper-pagination-color': '#fff',
          } as React.CSSProperties
        }
        spaceBetween={10}
        autoplay={{
          delay: 2000,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Autoplay, Pagination]}
        className="mySwiper2"
      >
        {servicesData.map((item, index) => (
          <SwiperSlide key={index} className="relative flex cursor-pointer items-center">
            <div className="z-10 text-white ">
              <h2 className="text-2xl font-extrabold leading-9 tracking-tight text-white dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl">
                {item.title}
              </h2>
              <p className="text-lg leading-7 text-white  dark:text-white">{item.description}</p>
            </div>
            <Image
              width={1024}
              height={800}
              className="absolute "
              src={`${item.imgSrc}`}
              alt={item.title}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
