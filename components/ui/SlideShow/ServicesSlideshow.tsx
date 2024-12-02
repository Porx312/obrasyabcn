"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { Pagination, FreeMode, Autoplay } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./slideshow.css";
import servicesData from "@/data/servicesData";

// import required modules

export default function ServicesSlideShow() {
  return (
    <div className=" h-[300px] w-full overflow-hidden rounded-lg lg:w-[500px]">
      <Swiper
        style={
          {
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
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
          <SwiperSlide
            key={index}
            className="relative flex cursor-pointer items-center"
          >
            <div className="z-10 text-white ">
              <h2 className="text-2xl font-extrabold leading-9 tracking-tight text-white dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl">
                {item.title}
              </h2>
              <p className="text-lg leading-7 text-white  dark:text-white">
                {item.description}
              </p>
            </div>
            <div className="absolute inset-0 z-0">
              <Image
                src={`${item.imgSrc}`}
                alt={item.title}
                layout="fill"
                objectFit="cover"
                priority
              />
              <div className="absolute inset-0 bg-black opacity-50"></div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
