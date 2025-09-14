import React from "react";

// images import
import Frame from "../assets/home/Frame.png";
//import FooterIcon from "../assets/storie/footericon.png";

 function Footer() {
  return (
    <footer className="bg-[#2F067B] text-white relative overflow-hidden">
      <img
        src={Frame}
        className="w-full hidden lg:block absolute z-20 -top-[50px] left-0 right-0"
        alt="img"
      />

      <div className="container mx-auto px-6 py-12 relative z-10">
        <div className="text-center mb-12" data-aos="fade-down">
          <div className="flex justify-center items-center mb-4">
            <img src="" alt="logo" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Us */}
          <div className="lg:col-span-1" data-aos="fade-up" data-aos-delay="100">
            <h3 className="text-xl font-semibold mb-4">About Us</h3>
            <p className="text-sm leading-relaxed text-purple-100 mb-6">
              Capturing timeless moments, weaving stories that touch people's
              hearts. Use of the best photographer in this region. The emblem of
              dedication to art, his craft and creativity.
            </p>

            <div className="flex space-x-3">
              <a
                href="#"
                className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all duration-300"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all duration-300"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all duration-300"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.689-.073-4.948-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44 1.441-.645 1.441-1.44-.645-1.44-1.441-1.44z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all duration-300"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.525 3.488" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div data-aos="fade-up" data-aos-delay="200">
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
              <a href="#" className="text-purple-100 hover:text-white transition-colors duration-200">Home</a>
              <a href="#" className="text-purple-100 hover:text-white transition-colors duration-200">Testimonials</a>
              <a href="#" className="text-purple-100 hover:text-white transition-colors duration-200">Stories</a>
              <a href="#" className="text-purple-100 hover:text-white transition-colors duration-200">Blogs</a>
              <a href="#" className="text-purple-100 hover:text-white transition-colors duration-200">Films</a>
              <a href="#" className="text-purple-100 hover:text-white transition-colors duration-200">Contact Us</a>
              <a href="#" className="text-purple-100 hover:text-white transition-colors duration-200">Reels</a>
              <a href="#" className="text-purple-100 hover:text-white transition-colors duration-200"></a>
              <a href="#" className="text-purple-100 hover:text-white transition-colors duration-200">Gallery</a>
            </div>
          </div>

          {/* Contact Location */}
          <div data-aos="fade-up" data-aos-delay="300">
            <h3 className="text-xl font-semibold mb-4">Contact Location</h3>
            <div className="text-sm text-purple-100 space-y-2">
              <p>Gopalpur, Asansol, West Bengal</p>
              <p>713304</p>
              <p className="mt-4">
                <span className="block">9832222555 / +91 70260 67966</span>
              </p>
              <p className="mt-2">
                <a
                  href="mailto:support@weddingcrew.in"
                  className="hover:text-white transition-colors duration-200"
                >
                  support@weddingcrew.in
                </a>
              </p>
            </div>
          </div>

          {/* Newsletter */}
          <div data-aos="fade-up" data-aos-delay="400">
            <h3 className="text-xl font-semibold mb-4">Newsletter</h3>
            <p className="text-sm text-purple-100 mb-4">
              Subscribe now for photography tips
            </p>

            <div className="relative">
              <input
                type="email"
                placeholder="Enter Your Email"
                className="w-full px-4 py-3 pr-20 rounded-full bg-white text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-400 text-sm"
              />
              <button className="absolute right-1 top-1 bottom-1 gradient-button px-4 rounded-full text-white font-medium text-sm hover:shadow-lg transition-all duration-300 flex items-center justify-center">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white border-opacity-20 mt-12 pt-6 pb-10 text-center">
        <p className="text-sm text-purple-200">Copyright © 2025 All rights reserved</p>
      </div>

      <img
        src={Frame}
        className="w-full hidden lg:block absolute z-20 -bottom-[62px] left-0 right-0"
        alt="img"
      />
    </footer>
  );
}

export default Footer;
