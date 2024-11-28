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
import ReviewCard from '../Review'
import reviewsData from '@/data/Reviews'

// import required modules

export default function SlideShowTestimonios() {
  return (
    <div className=" h-[400px] w-full overflow-hidden rounded-lg lg:w-[500px]">
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
        {reviewsData.map((item, index) => (
          <SwiperSlide key={index} className="relative flex cursor-pointer items-center">
            <ReviewCard
              avatarUrl={item.avatarUrl}
              date={item.date}
              name={item.name}
              comment={item.comment}
              likes={item.likes}
              projectType={item.projectType}
              rating={item.rating}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
