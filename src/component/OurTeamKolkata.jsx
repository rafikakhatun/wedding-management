import React from "react";
import OurTeamImage from "../assets/home/aafeewr 1.png";
import OurTeamLogo from "../assets/home/logo1.png";

 function OurTeamKolkata() {
  return (
    <section className="pb-10">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-5xl mx-auto my-10">
          <p className="text-xl md:text-2xl text-[#131450] font-lora font-bold leading-relaxed">
            Our team of the best Kolkata wedding photographers frames every moment of your special day with utmost care.
            Then, we weave the pictures magically to create value for a lifetime.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <img
              src={OurTeamImage}
              alt="Fragmented wedding moments collage"
              className="w-full h-auto object-contain"
            />
          </div>

          <div className="text-center lg:text-left">
            <div data-aos="zoom-in">
              <img src={OurTeamLogo} alt="Camera Icon" className="h-14 object-contain" />
            </div>

            <h2 className="text-3xl md:text-4xl text-[#131450] font-lora font-bold mb-6">
              Expertly capturing love's moments: Asansol & Kolkata's finest wedding photographers.
            </h2>

            <p className="text-lg text-[#000000] leading-relaxed font-josefin mb-5">
              Step into the enchanting world of Wedding Crew, where the dance of emotions takes center stage, and each
              frame becomes a brushstroke on the canvas of your love story. In the tapestry of weddings, we are not just
              observers; we are architects of memories, capturing the authenticity of every unscripted moment. Our lens
              becomes a portal, transporting you to a realm where candid candor meets unabashed joy, and where tears of
              emotion are crystallized into cherished memories.
            </p>

            <p className="text-lg text-[#000000] leading-relaxed font-josefin">
              As your trusted companions on your D-day, we don’t just click pictures; we curate an exquisite collection
              of emotions. The pulse of your heartbeats becomes our guide, and we navigate the symphony of your love with
              finesse. Like skilled artisans, we scoop up the pearls of emotion, each expression a testament to the beauty
              of the human connection. With meticulous care, we string these moments together, creating a garland that
              encapsulates the essence of your union.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurTeamKolkata;