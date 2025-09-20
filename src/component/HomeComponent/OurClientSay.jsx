import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import logo1 from "../../assets/home/logo1.png";
import profile1 from "../../assets/home/profile1 (1).png";
import profile2 from "../../assets/home/profile1 (2).png";
import profile3 from "../../assets/home/profile1 (3).png";
import groupImg from "../../assets/home/Group (3).png";

export default function OurClientSay() {
  return (
    // WHAT OUR CLIENT SAY start here
    <section className="pb-10">
      {/* heading text */}
      <div className="text-center w-11/12 mx-auto p-4">
        <div className="flex justify-center mb-4" data-aos="zoom-in">
          <img
            src={logo1}
            alt="Camera Icon"
            className="h-14 w-full object-contain"
          />
        </div>
        <h1
          className="text-2xl font-lora uppercase lg:text-4xl font-bold text-[#131450] mb-2"
          data-aos="fade-up"
        >
          WHAT OUR CLIENT SAY
        </h1>
        <p
          className="text-xl md:text-2xl text-[#000000] max-w-xl mx-auto font-lora"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Customer Reviews
        </p>
      </div>

      {/* SVG Definition for the custom card shape */}
      <svg width="0" height="0">
        <defs>
          <clipPath id="bubble-shape-right" clipPathUnits="objectBoundingBox">
            <path d="M0.1,0 H0.9 C0.955,0,1,0.045,1,0.1 V0.8 C1,0.855,0.955,0.9,0.9,0.9 H0.8 L0.75,1 L0.7,0.9 H0.1 C0.045,0.9,0,0.855,0,0.8 V0.1 C0,0.045,0.045,0,0.1,0 Z" />
          </clipPath>
        </defs>
      </svg>

      {/* Swiper Container */}
      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true }}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="py-10 testimonial-swiper-container"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="testimonial-card-wrapper">
            <div className="profile-pic">
              <img src={profile1} alt="Profile Picture" />
            </div>
            <div className="testimonial-card-border">
              <div className="testimonial-card">
                <p className="text-gray-600 text-sm md:text-base pt-4 h-[140px]">
                  Best Photographer I have ever seen, very very cooperative and
                  kindful and the team members are also very helpful they
                  capture very nice eye catching photos.
                </p>
                <div className="flex justify-between items-center my-4">
                  <h3 className="font-semibold text-lg text-gray-800">
                    Dibyendu Salui
                  </h3>
                  <div>
                    <img src={groupImg} alt="Stars" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="testimonial-card-wrapper">
            <div className="profile-pic">
              <img src={profile2} alt="Profile Picture" />
            </div>
            <div className="testimonial-card-border">
              <div className="testimonial-card">
                <p className="text-gray-600 text-sm md:text-base pt-4 h-[140px]">
                  One of the best photographer in this region. The amount of
                  dedication he and his team puts in is amazing. Wish to have
                  such a talented person in the field of photography.
                </p>
                <div className="flex justify-between items-center my-4">
                  <h3 className="font-semibold text-lg text-gray-800">
                    Mohini Das
                  </h3>
                  <div>
                    <img src={groupImg} alt="Stars" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div className="testimonial-card-wrapper">
            <div className="profile-pic">
              <img src={profile3} alt="Profile Picture" />
            </div>
            <div className="testimonial-card-border">
              <div className="testimonial-card">
                <p className="text-gray-600 text-sm md:text-base pt-4 h-[140px]">
                  Great photography and as well as makeup skill I would highly
                  recommend everyone to contact with them. It's a great work
                  experience. Keep the good work. Stay blessed.
                </p>
                <div className="flex justify-between items-center my-4">
                  <h3 className="font-semibold text-lg text-gray-800">
                    Prasun Das
                  </h3>
                  <div>
                    <img src={groupImg} alt="Stars" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 4 */}
        <SwiperSlide>
          <div className="testimonial-card-wrapper">
            <div className="profile-pic">
              <img src={profile2} alt="Profile Picture" />
            </div>
            <div className="testimonial-card-border">
              <div className="testimonial-card">
                <p className="text-gray-600 text-sm md:text-base pt-4 h-[140px]">
                  One of the best photographer in this region. The amount of
                  dedication he and his team puts in is amazing. Wish to have
                  such a talented person in the field of photography.
                </p>
                <div className="flex justify-between items-center my-4">
                  <h3 className="font-semibold text-lg text-gray-800">
                    Mohini Das
                  </h3>
                  <div>
                    <img src={groupImg} alt="Stars" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
    // WHAT OUR CLIENT SAY end here
  );
}
