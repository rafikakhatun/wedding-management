import React from "react";
import frameImg from "../assets/home/Frame.png";
import weddingImg from "../assets/home/wedding6.jpg";

const EternalEchoes = () => {
  return (
    <section className="relative pb-10">
      <img
        src={frameImg}
        className="absolute w-full -top-[12px] md:-top-[27px] lg:-top-[50px] left-0 bottom-0"
        alt="top-img"
      />
      <div className="flex flex-col lg:flex-row items-center justify-center py-16 mt-10 px-4 md:px-8 lg:px-16
                     bg-gradient-to-r from-[#FF3692] to-[#804EE6]">
        {/* Left Image */}
        <div
          className="relative w-full lg:w-1/2 flex justify-center mb-8 lg:mb-0 lg:pr-12"
          data-aos="fade-right"
        >
          <div className="relative w-full max-w-lg overflow-hidden rounded-xl shadow-2xl">
            <img
              src={weddingImg}
              alt="Wedding"
              className="h-[300px] w-full object-cover rounded-xl"
            />
          </div>
        </div>

        {/* Right Text */}
        <div
          className="w-full lg:w-1/2 text-white text-center lg:text-left"
          data-aos="fade-left"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-lora">
            Eternal Echoes: <br /> Debayan & Monalisha's Love Story
          </h2>
          <p className="text-base md:text-lg mb-6 leading-relaxed font-josefin">
            In the tapestry of love, Debayan and Monalisha embarked on a mesmerizing
            journey, etching their names in the stars and weaving a love story that
            resonates with timeless elegance. The lens of their pre-wedding shoot
            became the storyteller, capturing the essence of their connection in a
            series of captivating frames that painted a vivid portrait of their love.
          </p>

          <a
            href="#"
            className="bg-white text-[#FF3692] font-semibold py-3 px-8 rounded-full shadow-lg
                       hover:bg-[#FF3692] hover:text-white
                       hover:scale-105 hover:shadow-2xl hover:brightness-110
                       transition duration-300 ease-in-out transform"
          >
            View All Stories
          </a>
        </div>
      </div>
    </section>
  );
};

export default EternalEchoes;
