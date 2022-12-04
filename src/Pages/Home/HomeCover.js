import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper";

import CoverOne from "../images/Cover.jpg";
import CoverTwo from "../images/CoverTwo.jpg";
import CoverThree from "../images/CoverThree.jpg";
const HomeCover = () => {
  return (
    <div className="container mx-auto">
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="relative">
            <img className="w-full h-full" src={CoverOne} alt="sliderImage" />
            {/* <button className="absolute top-0 text-2xl text-black">
              Shop Now
            </button> */}
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={CoverTwo} alt="sliderImage" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={CoverThree} alt="sliderImage" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HomeCover;