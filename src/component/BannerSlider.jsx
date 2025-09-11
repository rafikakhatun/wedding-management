import React from "react";
import banner1 from "../assets/home/banner1.jpg";
import banner2 from "../assets/home/bannar2.jpg";
import banner3 from "../assets/home/bannar3.jpg";

const BannerSlider = () => {
  return (
    <div className="hero-slider-container font-hand pt-[72px] w-full h-screen relative overflow-hidden">
      <div className="swiper-wrapper">
        {/* Slide 1 */}
        <div className="swiper-slide relative">
          <img
            src={banner1}
            alt="Wedding 1"
            className="w-full h-full object-cover"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="slide-content text-4xl lg:text-6xl tracking-wider absolute bottom-[25%] left-[10%] z-10 text-white">
            Best Wedding Photographers In Kolkata
          </div>
        </div>

        {/* Slide 2 */}
        <div className="swiper-slide relative">
          <img
            src={banner2}
            alt="Wedding 2"
            className="w-full h-full object-cover"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="slide-content text-4xl lg:text-6xl tracking-wider absolute bottom-[25%] left-[10%] z-10 text-white">
            Capturing Your Special Moments
          </div>
        </div>

        {/* Slide 3 */}
        <div className="swiper-slide relative">
          <img
            src={banner3}
            alt="Wedding 3"
            className="w-full h-full object-cover"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="slide-content text-4xl lg:text-6xl tracking-wider absolute bottom-[25%] left-[10%] z-10 text-white">
            Your Dream Wedding, Our Lens
          </div>
        </div>
      </div>

      {/* Navigation buttons */}
      <div className="swiper-button-prev"></div>
      <div className="swiper-button-next"></div>
    </div>
  );
};

export default BannerSlider;
