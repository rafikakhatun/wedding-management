import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

import BestWeddingPhotographersLogo1 from "../assets/home/logo1.png";
import BestWeddingPhotographersBlog1 from "../assets/home/blogs (1).jpg";
import BestWeddingPhotographersBlog2 from "../assets/home/blogs (2).jpg";
import BestWeddingPhotographersBlog3 from "../assets/home/blogs (3).jpg";

 function BestWeddingPhotographers() {
  return (
    <section>
      {/* Header Section */}
      <div className="text-center w-11/12 mx-auto mb-12">
        <div className="flex justify-center mb-4">
          <img
            src={BestWeddingPhotographersLogo1}
            alt="Camera Icon"
            className="h-14 w-auto object-contain"
          />
        </div>
        <h1 className="text-2xl font-lora lg:text-4xl font-bold text-[#131450] mb-2">
          The Best Wedding Photographers in Kolkata offers
        </h1>
        <p className="text-xl md:text-2xl text-[#000000] max-w-xl mx-auto font-lora">
          Capturing timeless moments, weaving stories that touch hearts deeply.
        </p>
        <p className="text-xl md:text-2xl lg:text-4xl font-extrabold gradient-text max-w-2xl mx-auto font-lora">
          A Grand Vision, Creatively Realized
        </p>
      </div>

      {/* Swiper Section */}
      <div className="container mx-auto px-4 relative py-8 overflow-hidden">
        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="rounded-lg"
        >
          <SwiperSlide className="rounded-lg overflow-hidden shadow-lg">
            <img
              src={BestWeddingPhotographersBlog1}
              alt="Couple from Kolkata"
              className="w-full h-auto object-cover"
            />
          </SwiperSlide>

          <SwiperSlide className="rounded-lg overflow-hidden shadow-lg">
            <img
              src={BestWeddingPhotographersBlog2}
              alt="Couple from Kolkata"
              className="w-full h-auto object-cover"
            />
          </SwiperSlide>

          <SwiperSlide className="rounded-lg overflow-hidden shadow-lg">
            <img
              src={BestWeddingPhotographersBlog3}
              alt="Couple from Kolkata"
              className="w-full h-auto object-cover"
            />
          </SwiperSlide>

          <SwiperSlide className="rounded-lg overflow-hidden shadow-lg">
            <img
              src={BestWeddingPhotographersBlog3}
              alt="Couple from Kolkata"
              className="w-full h-auto object-cover"
            />
          </SwiperSlide>
        </Swiper>

        {/* Button */}
        <div className="text-center mt-10">
          <button className="bg-gradient-to-r from-purple-600 to-pink-500 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:from-purple-700 hover:to-pink-600 transition duration-300">
            See Them All
          </button>
        </div>
      </div>
    </section>
  );
}
export default BestWeddingPhotographers;
