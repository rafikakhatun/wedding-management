import React from "react";
import logo1 from "../assets/home/logo1.png";
import wedding from "../assets/home/wedding.png";
import wedding3 from "../assets/home/wedding3.jpg";
import wedding6 from "../assets/home/wedding6.jpg";
import wedding5 from "../assets/home/wedding5.png";
import wedding2 from "../assets/home/wedding2.jpg";
import wedding4 from "../assets/home/wedding4.png";

const WeddingCrew = () => {
  return (
    <section className="w-11/12 mx-auto p-4 py-12">
      {/* Heading Section */}
      <div className="text-center mb-12">
        <div className="flex justify-center mb-4">
          <img
            src={logo1}
            alt="Camera Icon"
            className="h-14 w-full object-contain"
          />
        </div>
        <h1 className="text-2xl font-lora lg:text-4xl font-bold text-[#131450] mb-2">
          Wedding Crew Photography
        </h1>
        <p className="text-xl md:text-2xl text-[#000000] max-w-xl mx-auto font-lora">
          Capturing timeless moments, weaving stories that touch hearts deeply.
        </p>
      </div>

      {/* Grid Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Card 1 */}
        <div className="group flex flex-col items-center">
          <div className="relative overflow-hidden rounded-lg shadow-lg w-full">
            <img
              src={wedding}
              alt="Pree Wedding"
              className="w-full h-80 object-cover rounded-lg transform transition-all duration-300 group-hover:scale-105 group-hover:brightness-75"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-80"></div>
          </div>
          <div className="mt-4 text-[#000000] font-bold text-xl text-center font-lora">
            Pree Wedding
          </div>
        </div>

        {/* Card 2 */}
        <div className="group flex flex-col items-center">
          <div className="relative overflow-hidden rounded-lg shadow-lg w-full">
            <img
              src={wedding3}
              alt="Wedding"
              className="w-full h-80 object-cover rounded-lg transform transition-all duration-300 group-hover:scale-105 group-hover:brightness-75"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-80"></div>
          </div>
          <div className="mt-4 text-[#000000] font-bold text-xl text-center font-lora">
            Wedding
          </div>
        </div>

        {/* Card 3 */}
        <div className="group flex flex-col items-center">
          <div className="relative overflow-hidden rounded-lg shadow-lg w-full">
            <img
              src={wedding6}
              alt="Engagement Shoot"
              className="w-full h-80 object-cover rounded-lg transform transition-all duration-300 group-hover:scale-105 group-hover:brightness-75"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-80"></div>
          </div>
          <div className="mt-4 text-[#000000] font-bold text-xl text-center font-lora">
            Engagement Shoot
          </div>
        </div>

        {/* Card 4 */}
        <div className="group flex flex-col items-center">
          <div className="relative overflow-hidden rounded-lg shadow-lg w-full">
            <img
              src={wedding5}
              alt="Baby Shoot"
              className="w-full h-80 object-cover rounded-lg transform transition-all duration-300 group-hover:scale-105 group-hover:brightness-75"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-80"></div>
          </div>
          <div className="mt-4 text-[#000000] font-bold text-xl text-center font-lora">
            Baby Shoot
          </div>
        </div>

        {/* Card 5 */}
        <div className="group flex flex-col items-center">
          <div className="relative overflow-hidden rounded-lg shadow-lg w-full">
            <img
              src={wedding2}
              alt="Maternity Shoot"
              className="w-full h-80 object-cover rounded-lg transform transition-all duration-300 group-hover:scale-105 group-hover:brightness-75"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-80"></div>
          </div>
          <div className="mt-4 text-[#000000] font-bold text-xl text-center font-lora">
            Maternity Shoot
          </div>
        </div>

        {/* Card 6 */}
        <div className="group flex flex-col items-center">
          <div className="relative overflow-hidden rounded-lg shadow-lg w-full">
            <img
              src={wedding4}
              alt="Post Wedding"
              className="w-full h-80 object-cover rounded-lg transform transition-all duration-300 group-hover:scale-105 group-hover:brightness-75"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-80"></div>
          </div>
          <div className="mt-4 text-[#000000] font-bold text-xl text-center font-lora">
            Post Wedding
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeddingCrew;
