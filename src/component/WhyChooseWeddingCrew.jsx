import React from "react";
import logo1 from "../assets/home/logo1.png";
import group28 from "../assets/home/Group 28.png";
import group29 from "../assets/home/Group 29.png";

export default function WhyChooseWeddingCrew() {
  return (
    <section className="pb-10 w-11/12 mx-auto">
      {/* heading text */}
      <div className="text-center w-11/12 mx-auto p-4">
        <div className="flex justify-center mb-4" data-aos="zoom-in">
          <img src={logo1} alt="Camera Icon" className="h-14 w-full object-contain" />
        </div>
        <h1
          className="text-2xl font-lora uppercase lg:text-4xl font-bold text-[#131450] mb-2"
          data-aos="fade-up"
        >
          Why Choose Wedding Crew
        </h1>
        <p
          className="text-xl md:text-2xl text-[#000000] max-w-xl mx-auto font-lora"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Capturing timeless moments, weaving stories that touch hearts deeply.
        </p>
      </div>

      {/* content */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 relative mt-10">
        {/* card 1 */}
        <div className="group bg-white shadow-lg border-b-[3px] border-[#FF3692] text-center relative p-5 rounded-lg transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-2xl cursor-pointer hover:bg-gradient-to-br from-pink-50 to-purple-50 hover:border-[#804EE6]">
          <div className="w-16 h-16 mx-auto absolute -top-8 left-1/2 transform -translate-x-1/2 rounded-full bg-gradient-to-b from-[#FF3692] to-[#804EE6] flex items-center justify-center">
            <img src={group28} className="w-10 h-10" alt="icon" />
          </div>
          <h1 className="text-[#000000] font-bold text-2xl md:text-3xl font-lora mt-10 transition-colors duration-300 group-hover:text-[#6d28d9]">
            Masters of Candid Emotion
          </h1>
          <p className="text-[#000000] text-[17px] my-5 font-josefin transition-colors duration-300 group-hover:text-[#6d28d9]">
            Each frame we create is a brushstroke on the canvas of your wedding narrative, weaving together a tapestry of memories that feel alive.
          </p>
        </div>

        {/* card 2 */}
        <div className="group bg-white shadow-lg border-b-[3px] border-[#FF3692] text-center relative p-5 rounded-lg transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-2xl cursor-pointer hover:bg-gradient-to-br from-pink-50 to-purple-50 hover:border-[#804EE6]">
          <div className="w-16 h-16 mx-auto absolute -top-8 left-1/2 transform -translate-x-1/2 rounded-full bg-gradient-to-b from-[#FF3692] to-[#804EE6] flex items-center justify-center">
            <img src={group29} className="w-10 h-10" alt="icon" />
          </div>
          <h1 className="text-[#000000] font-bold text-2xl md:text-3xl font-lora mt-10 transition-colors duration-300 group-hover:text-[#6d28d9]">
            Architects of Timeless Memories
          </h1>
          <p className="text-[#000000] text-[17px] my-5 font-josefin transition-colors duration-300 group-hover:text-[#6d28d9]">
            We don’t merely take photographs; we curate an exquisite collection of emotions that you’ll cherish for generations.
          </p>
        </div>

        {/* card 3 */}
        <div className="group bg-white shadow-lg border-b-[3px] border-[#FF3692] text-center relative p-5 rounded-lg transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-2xl cursor-pointer hover:bg-gradient-to-br from-pink-50 to-purple-50 hover:border-[#804EE6]">
          <div className="w-16 h-16 mx-auto absolute -top-8 left-1/2 transform -translate-x-1/2 rounded-full bg-gradient-to-b from-[#FF3692] to-[#804EE6] flex items-center justify-center">
            <img src={group28} className="w-10 h-10" alt="icon" />
          </div>
          <h1 className="text-[#000000] font-bold text-2xl md:text-3xl font-lora mt-10 transition-colors duration-300 group-hover:text-[#6d28d9]">
            Skilled Artisans of Detail
          </h1>
          <p className="text-[#000000] text-[17px] my-5 font-josefin transition-colors duration-300 group-hover:text-[#6d28d9]">
            From joyful tears to shared laughter, we scoop up the pearls of every moment with meticulous care, preserving every nuance of your day.
          </p>
        </div>

        {/* card 4 */}
        <div className="group bg-white shadow-lg border-b-[3px] border-[#FF3692] text-center relative p-5 rounded-lg transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-2xl cursor-pointer hover:bg-gradient-to-br from-pink-50 to-purple-50 hover:border-[#804EE6]">
          <div className="w-16 h-16 mx-auto absolute -top-8 left-1/2 transform -translate-x-1/2 rounded-full bg-gradient-to-b from-[#FF3692] to-[#804EE6] flex items-center justify-center">
            <img src={group28} className="w-10 h-10" alt="icon" />
          </div>
          <h1 className="text-[#000000] font-bold text-2xl md:text-3xl font-lora mt-10 transition-colors duration-300 group-hover:text-[#6d28d9]">
            Heart-Led Approach
          </h1>
          <p className="text-[#000000] text-[17px] my-5 font-josefin transition-colors duration-300 group-hover:text-[#6d28d9]">
            Your heartbeats become our guide as we navigate your wedding day with sensitivity, finesse, and an unwavering focus on your unique bond.
          </p>
        </div>

        {/* card 5 */}
        <div className="group bg-white shadow-lg border-b-[3px] border-[#FF3692] text-center relative p-5 rounded-lg transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-2xl cursor-pointer hover:bg-gradient-to-br from-pink-50 to-purple-50 hover:border-[#804EE6]">
          <div className="w-16 h-16 mx-auto absolute -top-8 left-1/2 transform -translate-x-1/2 rounded-full bg-gradient-to-b from-[#FF3692] to-[#804EE6] flex items-center justify-center">
            <img src={group29} className="w-10 h-10" alt="icon" />
          </div>
          <h1 className="text-[#000000] font-bold text-2xl md:text-3xl font-lora mt-10 transition-colors duration-300 group-hover:text-[#6d28d9]">
            Seamless Experience
          </h1>
          <p className="text-[#000000] text-[17px] my-5 font-josefin transition-colors duration-300 group-hover:text-[#6d28d9]">
            As your trusted companions, we ensure that your photography experience is effortless, comforting, and tailored to your vision.
          </p>
        </div>

        {/* card 6 */}
        <div className="group bg-white shadow-lg border-b-[3px] border-[#FF3692] text-center relative p-5 rounded-lg transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-2xl cursor-pointer hover:bg-gradient-to-br from-pink-50 to-purple-50 hover:border-[#804EE6]">
          <div className="w-16 h-16 mx-auto absolute -top-8 left-1/2 transform -translate-x-1/2 rounded-full bg-gradient-to-b from-[#FF3692] to-[#804EE6] flex items-center justify-center">
            <img src={group28} className="w-10 h-10" alt="icon" />
          </div>
          <h1 className="text-[#000000] font-bold text-2xl md:text-3xl font-lora mt-10 transition-colors duration-300 group-hover:text-[#6d28d9]">
            Finest in Asansol & Kolkata
          </h1>
          <p className="text-[#000000] text-[17px] my-5 font-josefin transition-colors duration-300 group-hover:text-[#6d28d9]">
            With years of expertise and countless love stories captured, we’re proud to be among the most sought-after wedding photographers in the region.
          </p>
        </div>

        {/* card 7 */}
        <div className="group bg-white shadow-lg border-b-[3px] border-[#FF3692] text-center relative p-5 rounded-lg transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-2xl cursor-pointer hover:bg-gradient-to-br from-pink-50 to-purple-50 hover:border-[#804EE6]">
          <div className="w-16 h-16 mx-auto absolute -top-8 left-1/2 transform -translate-x-1/2 rounded-full bg-gradient-to-b from-[#FF3692] to-[#804EE6] flex items-center justify-center">
            <img src={group29} className="w-10 h-10" alt="icon" />
          </div>
          <h1 className="text-[#000000] font-bold text-2xl md:text-3xl font-lora mt-10 transition-colors duration-300 group-hover:text-[#6d28d9]">
            Storytellers with a Lens
          </h1>
          <p className="text-[#000000] text-[17px] my-5 font-josefin transition-colors duration-300 group-hover:text-[#6d28d9]">
            Each frame we create is a brushstroke on the canvas of your wedding narrative, weaving together a tapestry of memories that feel alive.
          </p>
        </div>

        {/* card 8 */}
        <div className="group bg-white shadow-lg border-b-[3px] border-[#FF3692] text-center relative p-5 rounded-lg transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-2xl cursor-pointer hover:bg-gradient-to-br from-pink-50 to-purple-50 hover:border-[#804EE6]">
          <div className="w-16 h-16 mx-auto absolute -top-8 left-1/2 transform -translate-x-1/2 rounded-full bg-gradient-to-b from-[#FF3692] to-[#804EE6] flex items-center justify-center">
            <img src={group29} className="w-10 h-10" alt="icon" />
          </div>
          <h1 className="text-[#000000] font-bold text-2xl md:text-3xl font-lora mt-10 transition-colors duration-300 group-hover:text-[#6d28d9]">
            A Fusion of Art and Emotion
          </h1>
          <p className="text-[#000000] text-[17px] my-5 font-josefin transition-colors duration-300 group-hover:text-[#6d28d9]">
            Our lens becomes a portal—where candid candor meets unabashed joy, transforming fleeting moments into eternal treasures.
          </p>
        </div>

        {/* card 9 */}
        <div className="group bg-white shadow-lg border-b-[3px] border-[#FF3692] text-center relative p-5 rounded-lg transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-2xl cursor-pointer hover:bg-gradient-to-br from-pink-50 to-purple-50 hover:border-[#804EE6]">
          <div className="w-16 h-16 mx-auto absolute -top-8 left-1/2 transform -translate-x-1/2 rounded-full bg-gradient-to-b from-[#FF3692] to-[#804EE6] flex items-center justify-center">
            <img src={group29} className="w-10 h-10" alt="icon" />
          </div>
          <h1 className="text-[#000000] font-bold text-2xl md:text-3xl font-lora mt-10 transition-colors duration-300 group-hover:text-[#6d28d9]">
            Commitment to Your Story
          </h1>
          <p className="text-[#000000] text-[17px] my-5 font-josefin transition-colors duration-300 group-hover:text-[#6d28d9]">
            More than photographers, we are passionate storytellers dedicated to celebrating the beauty, depth, and authenticity of your union.
          </p>
        </div>
      </div>
    </section>
  );
}
