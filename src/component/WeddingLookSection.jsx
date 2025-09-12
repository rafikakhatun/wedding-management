import WeddingLookSectionBg1 from "../assets/home/bg1.png"
import WeddingLookSectionBg2 from "../assets/home/bg2.png"


export default function WeddingLookSection() {
  return (
    <div className="min-h-[50vh] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 background-pattern relative">
      <img
        src={WeddingLookSectionBg1}
        className="absolute z-10 h-full right-0 top-0 bottom-0"
        alt="background image"
      />
      <img
        src={WeddingLookSectionBg2}
        className="absolute left-0 h-full z-10 top-0 bottom-0"
        alt="background image"
      />
      <div className="max-w-4xl relative z-20 w-full space-y-8 text-center p-8 md:p-12 lg:p-16">
        <div>
          <h1 className="text-3xl sm:text-4xl text-[#000000] leading-tight">
            Want to make your Wedding look
            <br />
            <span className="gradient-text md:text-5xl lg:text-6xl font-bold">
              Grand, Creative & Unique?
            </span>
          </h1>
          <p className="mt-4 text-base sm:text-lg md:text-xl text-[#000000]">
            Now you don't have to pay a lot.
          </p>
          <p className="mt-2 text-base sm:text-lg md:text-xl text-[#000000]">
            We offer the best Wedding & Pre-wedding Photography services within
            <br className="hidden sm:inline" /> your budget!
          </p>
        </div>

        <div className="mt-10">
          <button
            type="button"
            className="gradient-button text-white font-bold py-3 px-8 rounded-full text-lg md:text-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Book Us Now
          </button>
        </div>
      </div>
    </div>
  );
}