import BestWeddingPhotographersLogo1 from "../assets/home/logo1.png"
import BestWeddingPhotographersBlog1 from "../assets/home/blogs (1).jpg"
import BestWeddingPhotographersBlog2 from "../assets/home/blogs (2).jpg"
import BestWeddingPhotographersBlog3 from "../assets/home/blogs (3).jpg"
import BestWeddingPhotographersBlog3 from "../assets/home/blogs (3).jpg"


export default function BestWeddingPhotographers() {
  return (
    <section>
      <div className="text-center w-11/12 mx-auto mb-12">
        <div className="flex justify-center mb-4">
          <img
            src={BestWeddingPhotographersLogo1 }
            alt="Camera Icon"
            className="h-14 w-full object-contain"
          />
        </div>
        <h1 className="text-2xl font-lora lg:text-4xl font-bold text-[#131450] mb-2">
          The Best Wedding Photographers in Kolkata offers
        </h1>
        <p className="text-xl md:text-2xl text-[#000000] max-w-xl mx-auto font-lora">
          Capturing timeless moments, weaving stories that touch hearts deeply.
        </p>
        <p className="text-xl md:text-2xl lg:text-4xl font-extrabold gradient-text max-w-2xl mx-auto font-lora">
          A Grand Vision, Creatively Realized
        </p>
      </div>

      {/* content start here */}
      <div className="container mx-auto px-4 relative py-8 overflow-hidden">
        <div className="my-swiper-container swiper-container">
          <div className="swiper-wrapper">
            <div className="swiper-slide my-swiper-slide rounded-lg overflow-hidden shadow-lg">
              <img
                src={BestWeddingPhotographersBlog1}
                alt="Couple from Kolkata"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="swiper-slide my-swiper-slide rounded-lg overflow-hidden shadow-lg">
              <img
                src={BestWeddingPhotographersBlog2}
                alt="Couple from Kolkata"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="swiper-slide my-swiper-slide rounded-lg overflow-hidden shadow-lg">
              <img
                src={BestWeddingPhotographersBlog3}
                alt="Couple from Kolkata"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="swiper-slide my-swiper-slide rounded-lg overflow-hidden shadow-lg">
              <img
                src={BestWeddingPhotographersBlog3}
                alt="Couple from Kolkata"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          <div className="swiper-button-prev"></div>
          <div className="swiper-button-next"></div>
        </div>

        <div className="text-center mt-10">
          <button className="bg-gradient-to-r from-purple-600 to-pink-500 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:from-purple-700 hover:to-pink-600 transition duration-300">
            See Them All
          </button>
        </div>
      </div>
    </section>
  );
}
