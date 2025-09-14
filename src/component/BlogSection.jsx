import React from "react";

// images import
import Logo from "../assets/home/logo1.png";
import Blog1 from "../assets/home/blogs (2).jpg";
import Blog2 from "../assets/home/blogs (3).jpg";
import Blog3 from "../assets/home/blogs (1).jpg";

export default function BlogSection() {
  return (
    <section className="relative pb-10">
      {/* heading text */}
      <div className="text-center w-11/12 mx-auto p-4">
        <div className="flex justify-center mb-4" data-aos="zoom-in">
          <img src={Logo} alt="Camera Icon" className="h-14 w-full object-contain" />
        </div>
        <h1
          className="text-2xl font-lora uppercase lg:text-4xl font-bold text-[#131450] mb-2"
          data-aos="fade-up"
        >
          Latest Photography Blog Posts
        </h1>
        <p
          className="text-xl md:text-2xl text-[#000000] max-w-xl mx-auto font-lora"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Here’s a log of our explorations, that we love to share with you!
        </p>
      </div>

      {/* content start */}
      <div className="w-11/12 mx-auto mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {/* card 1 */}
        <div className="relative">
          <div className="relative z-20">
            <img src={Blog1} className="h-[300px] w-full rounded-2xl" alt="img1" />
            <button className="bg-white px-4 py-1 font-lora text-base text-[#000000] rounded-full absolute top-4 left-4">
              Weeding Photo
            </button>
          </div>
          <div className="relative z-30 border-b-4 border-[#FF3692] -mt-10 w-[90%] mx-auto bg-white shadow-2xl p-5 text-center space-y-3 rounded-2xl">
            <h1 className="font-lora text-[#000000] text-xl">
              Cultural Richness Meets Modern Shots: Documenting Bengali Weddings in Style
            </h1>
            <hr />
            <p className="text-[#000000] text-base">30 Jun, 2025</p>
            <button className="font-semibold text-white py-2 px-6 rounded-full bg-gradient-to-r from-[#FF3692] to-[#804EE6] hover:from-[#804EE6] hover:to-[#FF3692] transition-all duration-300 shadow-md transform hover:scale-105">
              View More Details
            </button>
          </div>
        </div>

        {/* card 2 */}
        <div className="relative">
          <div className="relative z-20">
            <img src={Blog2} className="h-[300px] w-full rounded-2xl" alt="img2" />
            <button className="bg-white px-4 py-1 font-lora text-base text-[#000000] rounded-full absolute top-4 left-4">
              Weeding Photo
            </button>
          </div>
          <div className="relative z-30 border-b-4 border-[#FF3692] -mt-10 w-[90%] mx-auto bg-white shadow-2xl p-5 text-center space-y-3 rounded-2xl">
            <h1 className="font-lora text-[#000000] text-xl">
              Cultural Richness Meets Modern Shots: Documenting Bengali Weddings in Style
            </h1>
            <hr />
            <p className="text-[#000000] text-base">30 Jun, 2025</p>
            <button className="font-semibold text-white py-2 px-6 rounded-full bg-gradient-to-r from-[#FF3692] to-[#804EE6] hover:from-[#804EE6] hover:to-[#FF3692] transition-all duration-300 shadow-md transform hover:scale-105">
              View More Details
            </button>
          </div>
        </div>

        {/* card 3 */}
        <div className="relative">
          <div className="relative z-20">
            <img src={Blog3} className="h-[300px] w-full rounded-2xl" alt="img3" />
            <button className="bg-white px-4 py-1 font-lora text-base text-[#000000] rounded-full absolute top-4 left-4">
              Weeding Photo
            </button>
          </div>
          <div className="relative z-30 border-b-4 border-[#FF3692] -mt-10 w-[90%] mx-auto bg-white shadow-2xl p-5 text-center space-y-3 rounded-2xl">
            <h1 className="font-lora text-[#000000] text-xl">
              Cultural Richness Meets Modern Shots: Documenting Bengali Weddings in Style
            </h1>
            <hr />
            <p className="text-[#000000] text-base">30 Jun, 2025</p>
            <button className="font-semibold text-white py-2 px-6 rounded-full bg-gradient-to-r from-[#FF3692] to-[#804EE6] hover:from-[#804EE6] hover:to-[#FF3692] transition-all duration-300 shadow-md transform hover:scale-105">
              View More Details
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
