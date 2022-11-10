/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

//import components
import SliderCard from "./SliderCard";

//import images
import sliderOne from "../assets/images/slider/slider1.jpg";
import sliderTwo from "../assets/images/slider/slider2.jpg";
import sliderThree from "../assets/images/slider/slider3.jpg";
import sliderFour from "../assets/images/slider/slider4.jpg";
import sliderFive from "../assets/images/slider/slider5.jpg";
import sliderSix from "../assets/images/slider/slider6.jpg";

export default function SliderComponent() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        style={{
          "--swiper-pagination-color": "white",
          "--swiper-pagination-bullet-inactive-color": "#999999",
          "--swiper-pagination-bullet-inactive-opacity": "1",
          "--swiper-pagination-bullet-width": "16px",
          "--swiper-pagination-bullet-height": "4px",
          "--swiper-pagination-bullet-size": "16px",
          "--swiper-pagination-bullet-horizontal-gap": "6px",
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper w-full"
      >
        <SwiperSlide className="flex w-full">
          <SliderCard
            image={sliderOne}
            title="The Robot Sofiane (2019) BluRay 720p"
            year={2019}
          />
          <SliderCard
            image={sliderTwo}
            title="DC Legends Robin (2017) HD 480p"
            year={2017}
          />
        </SwiperSlide>

        <SwiperSlide className="flex">
          <SliderCard
            image={sliderThree}
            title="Fast and Furious 9 (2019) BluRay 1080p"
            year={2019}
          />
          <SliderCard
            image={sliderFour}
            title="The Korean Movie (2014) WEB-Rip 480p"
            year={2014}
          />
        </SwiperSlide>

        <SwiperSlide className="flex">
          <SliderCard
            image={sliderFive}
            title="Death Note (2016) BluRay 1080p"
            year={2016}
          />
          <SliderCard
            image={sliderSix}
            title="The Loki Full Season BluRay 1080p"
            year={2020}
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
