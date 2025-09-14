import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

// Images
import Frame from "../assets/home/Frame.png";
import Logo from "../assets/home/logo1.png";
import Bg1 from "../assets/home/bg1.png";
import Bg2 from "../assets/home/bg2.png";
import Photo1 from "../assets/home/photo (1).png";
import Photo2 from "../assets/home/photo (2).png";
import Photo3 from "../assets/home/photo (3).png";

export default function PreWeddingShoots() {
  return (
    <section className="pb-10 relative">
      <img
        src={Frame}
        className="absolute -bottom-5 hidden lg:block left-0 right-0 z-20"
        alt="top"
      />
      <div>
        {/* heading text */}
        <div className="text-center w-11/12 mx-auto p-4">
          <div className="flex justify-center mb-4" data-aos="zoom-in">
            <img src={Logo} alt="Camera Icon" className="h-14 w-full object-contain" />
          </div>
          <h1
            className="text-2xl font-lora uppercase lg:text-4xl font-bold text-[#131450] mb-2"
            data-aos="fade-up"
          >
            Pre-Wedding and Wedding Photoshoots
          </h1>
          <p
            className="text-xl md:text-2xl text-[#000000] max-w-xl mx-auto font-lora"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Pre-Wedding and Wedding Photoshoots are no longer just about taking
            pictures—they’re about telling your unique love story.
          </p>
        </div>

        <div className="relative">
          <img
            src={Bg1}
            className="absolute z-10 h-full right-0 top-0 bottom-0"
            alt="background image"
          />
          <img
            src={Bg2}
            className="absolute left-0 h-full z-10 top-0 bottom-0"
            alt="background image"
          />

          {/* Swiper Slider */}
          <Swiper
            modules={[Navigation]}
            navigation={{
              nextEl: ".photo-slider-next",
              prevEl: ".photo-slider-prev",
            }}
            loop={true}
            className="photo-gallery-slider w-11/12 py-16 mx-auto z-20 relative overflow-hidden"
          >
            <SwiperSlide>
              <div className="photo-slide">
                <img
                  src={Photo1}
                  alt="Pre-wedding shoot with a parasol"
                  className="w-full h-80 object-cover rounded-xl"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="photo-slide">
                <img
                  src={Photo2}
                  alt="Bride smiling during sunset"
                  className="w-full h-80 object-cover rounded-xl"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="photo-slide">
                <img
                  src={Photo3}
                  alt="Couple in traditional attire at night"
                  className="w-full h-80 object-cover rounded-xl"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="photo-slide">
                <img
                  src={Photo2}
                  alt="Wedding couple"
                  className="w-full h-80 object-cover rounded-xl"
                />
              </div>
            </SwiperSlide>
          </Swiper>

          {/* Navigation */}
          <div className="photo-slider-prev photo-slider-nav absolute top-1/2 -translate-y-1/2 left-4 cursor-pointer z-30">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </div>

          <div className="photo-slider-next photo-slider-nav absolute top-1/2 -translate-y-1/2 right-4 cursor-pointer z-30">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
