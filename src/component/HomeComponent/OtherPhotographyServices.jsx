import React from "react";
import logo1 from "../../assets/home/logo1.png";
import other from "../../assets/home/other.jpg";
import other1 from "../../assets/home/other1 (1).jpg";
import other2 from "../../assets/home/other1 (2).jpg";
import other3 from "../../assets/home/other1 (3).jpg";

const OtherPhotographyServices = () => {
  return (
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
          OTHER PHOTOGRAPHY SERVICES
        </h1>
        <p
          className="text-xl md:text-2xl text-[#000000] max-w-xl mx-auto font-lora"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Looking for a caring, passionate, and creative wedding photographer in
          Kolkata? It’s me!
        </p>
      </div>

      {/* content */}
      <div className="w-11/12 mx-auto mt-10">
        {/* Grid container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1: Bengali Wedding */}
          <div className="card-gradient-border bg-[#FAFAFA] rounded-2xl md:h-[400px] p-2 md:p-0  shadow-lg overflow-hidden relative border border-transparent hover:border-pink-500 transition-all duration-300">
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <div className="w-full sm:w-1/2 h-64 sm:h-[400px]">
                <img
                  src={other}
                  alt="Bengali Wedding"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
              <div className="w-full sm:w-1/2 p-4 sm:p-0 font-lora">
                <h3 className="font-bold text-2xl text-[#000000] mb-2">
                  Bengali Wedding
                </h3>
                <p className="text-[#000000] text-sm mb-6 md:pr-2">
                  Wedding photography is important for your special day. We
                  ensure that not a single precious moment is missed.
                </p>
                <button className="font-semibold text-white py-2 px-6 rounded-full bg-gradient-to-r from-[#FF3692] to-[#804EE6] hover:from-[#804EE6] hover:to-[#FF3692] transition-all duration-300 shadow-md">
                  View Our Works
                </button>
              </div>
            </div>
          </div>

          {/* Card 2: Engagement Photo */}
          <div className="card-gradient-border bg-[#FAFAFA] rounded-2xl shadow-lg overflow-hidden md:h-[400px] p-2 md:p-0 relative border border-transparent hover:border-pink-500 transition-all duration-300">
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <div className="w-full sm:w-1/2 h-64 sm:h-[400px]">
                <img
                  src={other1}
                  alt="Engagement Photo"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
              <div className="w-full sm:w-1/2 p-4 sm:p-0">
                <h3 className="font-bold text-2xl text-[#000000] mb-2">
                  Engagement Photo
                </h3>
                <p className="text-[#000000] text-sm mb-6 md:pr-2">
                  Wedding photography is important for your special day. We
                  ensure that not a single precious moment is missed.
                </p>
                <button className="font-semibold text-white py-2 px-6 rounded-full bg-gradient-to-r from-[#FF3692] to-[#804EE6] hover:from-[#804EE6] hover:to-[#FF3692] transition-all duration-300 shadow-md">
                  View Our Works
                </button>
              </div>
            </div>
          </div>

          {/* Card 3: Annaprashan Shoot */}
          <div className="card-gradient-border bg-[#FAFAFA] rounded-2xl shadow-lg overflow-hidden md:h-[400px] p-2 md:p-0 relative border border-transparent hover:border-pink-500 transition-all duration-300">
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <div className="w-full sm:w-1/2 h-64 sm:h-[400px]">
                <img
                  src={other3}
                  alt="Annaprashan Shoot"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
              <div className="w-full sm:w-1/2 p-4 sm:p-0">
                <h3 className="font-bold text-2xl text-[#000000] mb-2">
                  Annaprashan Shoot
                </h3>
                <p className="text-[#000000] text-sm mb-6 md:pr-2">
                  Wedding photography is important for your special day. We
                  ensure that not a single precious moment is missed.
                </p>
                <button className="font-semibold text-white py-2 px-6 rounded-full bg-gradient-to-r from-[#FF3692] to-[#804EE6] hover:from-[#804EE6] hover:to-[#FF3692] transition-all duration-300 shadow-md">
                  View Our Works
                </button>
              </div>
            </div>
          </div>

          {/* Card 4: Non Bengali Wedding */}
          <div className="card-gradient-border bg-[#FAFAFA] rounded-2xl shadow-lg overflow-hidden md:h-[400px] p-2 md:p-0 relative border border-transparent hover:border-pink-500 transition-all duration-300">
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <div className="w-full sm:w-1/2 h-64 sm:h-[400px]">
                <img
                  src={other2}
                  alt="Non Bengali Wedding"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
              <div className="w-full sm:w-1/2 p-4 sm:p-0">
                <h3 className="font-bold text-2xl text-gray-800 mb-2">
                  Non Bengali Wedding
                </h3>
                <p className="text-[#000000] text-sm mb-6 md:pr-2">
                  Wedding photography is important for your special day. We
                  ensure that not a single precious moment is missed.
                </p>
                <button className="font-semibold text-white py-2 px-6 rounded-full bg-gradient-to-r from-[#FF3692] to-[#804EE6] hover:from-[#804EE6] hover:to-[#FF3692] transition-all duration-300 shadow-md">
                  View Our Works
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* "See All Services" Button */}
        <div className="text-center mt-12">
          <button className="font-bold text-white text-lg py-3 px-8 rounded-full bg-gradient-to-r from-[#FF3692] to-[#804EE6] hover:from-[#804EE6] hover:to-[#FF3692] transition-all duration-300 shadow-lg transform hover:scale-105">
            See All Services
          </button>
        </div>
      </div>
    </section>
  );
};

export default OtherPhotographyServices;
