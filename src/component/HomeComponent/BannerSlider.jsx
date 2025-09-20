import React from "react";
import banner1 from "../../assets/home/banner1.jpg";
import banner2 from "../../assets/home/bannar2.jpg";
import banner3 from "../../assets/home/bannar3.jpg";
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Autoplay, Navigation, EffectFade } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';




const BannerSlider = () => {
    return (
        <div className="hero-slider-container font-hand pt-[72px] w-full h-screen relative overflow-hidden">
            <Swiper modules={[Autoplay,EffectFade,Navigation]}
            loop={true}
            effect="fade"
            autoplay={{
                delay:1000,
                disableOnInteraction:false,
            }}
            navigation={true}
            className="w-full h-full"
             >
                {/* Slide 1 */}
                <SwiperSlide>
                    <img
                        src={banner1}
                        alt="Wedding 1"
                        className="w-full h-full object-cover"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/10"></div>
                    <div className="slide-content font-sans text-4xl lg:text-6xl tracking-wider absolute bottom-[25%] left-[10%] z-10 text-white">
                        Best Wedding Photographers In Kolkata
                    </div>
                </SwiperSlide>

                {/* Slide 2 */}
                <SwiperSlide>
                    <img
                        src={banner2}
                        alt="Wedding 2"
                        className="w-full h-full object-cover"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/10"></div>
                    <div className="slide-content font-sans text-4xl lg:text-6xl tracking-wider absolute bottom-[25%] left-[10%] z-10 text-white">
                        Capturing Your Special Moments
                    </div>
                </SwiperSlide>

                {/* Slide 3 */}
                <SwiperSlide>
                    <img
                        src={banner3}
                        alt="Wedding 3"
                        className="w-full h-full object-cover"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/10"></div>
                    <div className="slide-content font-sans text-4xl lg:text-6xl tracking-wider absolute bottom-[25%] left-[10%] z-10 text-white">
                        Your Dream Wedding, Our Lens
                    </div>
                </SwiperSlide>
            </Swiper>

        </div>
    );
};

export default BannerSlider;
