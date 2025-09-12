import WeddingFilmFrame from "../assets/home/Frame.png"

 function WeddingFilm() {
  return (
    <section
      className="relative w-full h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('src/assets/home/wedding-filem.png')" }}
    >
      <img
        src={WeddingFilmFrame}
        className="w-full absolute left-0 right-0 -top-3 md:-top-7 lg:-top-12"
        alt="top-img"
      />

      <div className="absolute h-40 border border-white right-5 top-14 hidden lg:block"></div>
      <div className="absolute h-40 border border-white right-[100px] bottom-16 hidden lg:block"></div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 gradient-overlay"></div>

      {/* Content Container */}
      <div className="relative z-10 flex h-full">
        {/* Left Side Content */}
        <div className="flex-1 flex flex-col justify-between p-6 md:p-8 lg:p-12">
          {/* Top Left Content */}
          <div className="text-white flex flex-col items-end text-right md:items-start md:text-left">
            <div className="border border-white w-40 mb-3 hidden md:block"></div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight font-josefin">
              WEEDING
              <br />
              FLIM BY
            </h1>
            <div className="border border-white w-40 mt-3 mb-5 ml-5 hidden md:block"></div>

            {/* Watch Button */}
            <button className="flex items-center space-x-3 bg-white rounded-full px-4 py-2 w-fit">
              <span className="text-[#000000] text-sm md:text-base font-medium font-josefin">Watch It Now</span>
              <div className="bg-red-500 rounded-full p-2">
                <svg className="w-3 h-3 md:w-4 md:h-4 text-white fill-current" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </button>
          </div>

          {/* Bottom area for potential additional content */}
          <div className="hidden md:block"></div>
        </div>

        {/* Right Side - Vertical Text */}
        <div className="hidden lg:flex items-center justify-center p-4 md:p-6 lg:p-8">
          <div className="vertical-text text-white text-2xl md:text-3xl lg:text-4xl xl:text-6xl font-bold tracking-widest md:tracking-wider">
            WEDDING CREW
          </div>
        </div>
      </div>

      {/* Mobile Layout Adjustments */}
      <div className="md:hidden absolute bottom-0 left-0 right-0 p-6">
        <div className="text-white text-center">
          <h2 className="text-xl font-bold mb-4">WEDDING CREW</h2>
        </div>
      </div>
    </section>
  );
}

export default WeddingFilm;
