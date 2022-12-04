import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

import CoverOne from "../images/Cover.jpg";
import CoverTwo from "../images/CoverTwo.jpg";
import CoverThree from "../images/CoverThree.jpg";
const HomeCover = () => {
  return (
    <div className="container mx-auto bg-[#9CA3AF]">
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="relative">
            <img className="" src={CoverOne} alt="sliderImage" />

            <div className="absolute top-60 left-40">
              <h1 className=" tracking-widest text-5xl uppercase text-white font-Poppins font-bold">
                Luxury Watches
              </h1>
              <h1 className="text-xl mt-5 font-light font-Ubuntu">
                Save on authentic swiss watches!
              </h1>
              <button className="mt-6 bg-green-400 text-white px-6 py-2 rounded-sm">
                Shop Now
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img src={CoverTwo} alt="sliderImage" />
            <div className="absolute top-60 left-40">
              <h1 className=" tracking-widest text-5xl uppercase text-white font-Poppins font-bold">
                Luxury Watches
              </h1>
              <h1 className="text-xl mt-5 font-light font-Ubuntu">
                Save on authentic swiss watches!
              </h1>
              <button className="mt-6 bg-green-400 text-white px-6 py-2 rounded-sm">
                Shop Now
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img src={CoverThree} alt="sliderImage" />
            <div className="absolute top-60 left-40">
              <h1 className=" tracking-widest text-5xl uppercase text-white font-Poppins font-bold">
                Branded T-Shirt
              </h1>
              <h1 className="text-xl mt-5 font-light font-Ubuntu">
                Save on authentic swiss watches!
              </h1>
              <button className="mt-6 bg-green-400 text-white px-6 py-2 rounded-sm">
                Shop Now
              </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HomeCover;
