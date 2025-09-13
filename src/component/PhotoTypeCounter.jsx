import React from "react";
//import icon1 from "../assets/storie/icon1 (1).png";
//import icon2 from "../assets/storie/icon1 (2).png";
//import icon3 from "../assets/storie/icon1 (3).png";
//import icon4 from "../assets/storie/icon1 (4).png";

export default function PhotoTypeCounter() {
  return (
    // photo type counter start here
    <section className="bg-white py-10">
      <div className="w-11/12 mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-6">
          {/* card 1 */}
          <div className="gradient-border relative card-wrapper" data-aos="fade-up">
            <div className="gradient-border-inner p-6 pt-12 text-center">
              <div className="icon-container w-16 h-16 mx-auto absolute -top-8 left-1/2 transform -translate-x-1/2 rounded-full border border-red-600 bg-white flex items-center justify-center shadow-lg">
                <img src="" className="w-12 h-12" alt="icon" />
              </div>
              <h3 className="text-xl font-bold text-[#000000] mb-2 mt-4">WEDDINGS</h3>
              <p className="counter text-3xl font-bold gradient-text" data-target="800">
                0+
              </p>
            </div>
          </div>

          {/* card 2 */}
          <div
            className="gradient-border relative card-wrapper"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="gradient-border-inner p-6 pt-12 text-center">
              <div className="icon-container w-16 h-16 mx-auto absolute -top-8 left-1/2 transform -translate-x-1/2 rounded-full border border-red-600 bg-white flex items-center justify-center shadow-lg">
                <img src="" className="w-12 h-12" alt="icon" />
              </div>
              <h3 className="text-xl font-bold text-[#000000] mb-2 mt-4">PRE WEDDINGS</h3>
              <p className="counter text-3xl font-bold gradient-text" data-target="500">
                0+
              </p>
            </div>
          </div>

          {/* card 3 */}
          <div
            className="gradient-border relative card-wrapper"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="gradient-border-inner p-6 pt-12 text-center">
              <div className="icon-container w-16 h-16 mx-auto absolute -top-8 left-1/2 transform -translate-x-1/2 rounded-full border border-red-600 bg-white flex items-center justify-center shadow-lg">
                <img src="" className="w-12 h-12" alt="icon" />
              </div>
              <h3 className="text-xl font-bold text-[#000000] mb-2 mt-4">BABY PHOTOSHOOTS</h3>
              <p className="counter text-3xl font-bold gradient-text" data-target="250">
                0+
              </p>
            </div>
          </div>

          {/* card 4 */}
          <div
            className="gradient-border relative card-wrapper"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="gradient-border-inner p-6 pt-12 text-center">
              <div className="icon-container w-16 h-16 mx-auto absolute -top-8 left-1/2 transform -translate-x-1/2 rounded-full border border-red-600 bg-white flex items-center justify-center shadow-lg">
                <img src="" className="w-12 h-12" alt="icon" />
              </div>
              <h3 className="text-xl font-bold text-[#000000] mb-2 mt-4">CORPORATE</h3>
              <p className="counter text-3xl font-bold gradient-text" data-target="20">
                0+
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    // photo type counter end here
  );
}
