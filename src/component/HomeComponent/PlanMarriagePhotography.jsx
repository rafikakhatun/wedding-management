import React from "react";
//import formimg from "../assets/storie/formimg.jpg";
import bgImg from "../../assets/home/wedding.png"
import Frame from "../../assets/home/Frame.png";

export default function PlanMarriagePhotography() {
  return (
    // LET'S PLAN YOUR MARRIAGE PHOTOGRAPHY IN KOLKATA NOW!
    <section
      className="relative w-full h-full md:min-h-[488px] my-10 flex items-center justify-center text-center bg-cover bg-center bg-no-repeat z-10"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <img
        src={Frame}
        className="w-full hidden lg:block absolute z-20 -top-[50px] left-0 right-0"
        alt="img"
      />
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      <div
        className="relative z-10 p-4 sm:p-6 md:p-8 lg:p-12 max-w-5xl mx-auto"
        data-aos="zoom-in"
      >
        <h2 className="text-white text-xl md:text-4xl font-bold mb-4 sm:mb-6 leading-tight tracking-wide uppercase font-lora">
          LET'S PLAN YOUR MARRIAGE PHOTOGRAPHY IN KOLKATA NOW!
        </h2>
        <p className="text-white text-base sm:text-lg md:text-xl mb-8 sm:mb-10 leading-relaxed font-lora">
          We offer a range of photography with different price segments. Let us
          know your requirements and budget and discuss everything to get you the
          Best!
        </p>

        <form className="flex flex-col gap-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full bg-white bg-opacity-20 text-white placeholder-gray-200 border border-white py-3 px-5 rounded-full focus:outline-none focus:ring-2 focus:ring-white"
            />
            <input
              type="tel"
              placeholder="Phone/WhatsApp"
              className="w-full bg-white bg-opacity-20 text-white placeholder-gray-200 border border-white py-3 px-5 rounded-full focus:outline-none focus:ring-2 focus:ring-white"
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="date"
              placeholder="Wedding Date"
              className="w-full bg-white bg-opacity-20 text-white placeholder-gray-200 border border-white py-3 px-5 rounded-full focus:outline-none focus:ring-2 focus:ring-white"
            />
            <input
              type="text"
              placeholder="Venue/Location"
              className="w-full bg-white bg-opacity-20 text-white placeholder-gray-200 border border-white py-3 px-5 rounded-full focus:outline-none focus:ring-2 focus:ring-white"
            />
          </div>

          <div className="custom-select-wrapper w-full flex-grow">
            <select className="custom-select w-full bg-white bg-opacity-20 text-white placeholder-gray-200 border border-white py-3 px-5 rounded-full focus:outline-none focus:ring-2 focus:ring-white">
              <option value="" disabled selected className="text-gray-800">
                Select Service
              </option>
              <option value="pre-wedding" className="text-gray-800">
                Pre-Wedding
              </option>
              <option value="wedding" className="text-gray-800">
                Wedding
              </option>
              <option value="videography" className="text-gray-800">
                Videography
              </option>
              <option value="full-package" className="text-gray-800">
                Full Package
              </option>
              <option value="others" className="text-gray-800">
                Others
              </option>
            </select>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="w-fit bg-gradient-to-r from-[#FF3692] to-[#804EE6] text-white font-semibold py-3 px-10 rounded-full shadow-lg hover:scale-105 hover:shadow-xl transition duration-300 ease-in-out transform"
            >
              Submit
            </button>
          </div>
        </form> 
      </div>

      <img
        src={Frame}
        className="w-full hidden lg:block absolute z-20 -bottom-[62px] left-0 right-0"
        alt="img"
      />
    </section>
  );
}
