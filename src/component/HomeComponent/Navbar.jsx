import { useState } from "react";
import logo from "../../assets/home/logo.png"

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-gradient-to-r from-[#FF3692] to-[#3F13A3] fixed w-full z-50 shadow-lg">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <a href="#" className="text-white text-2xl font-bold">
                    <img src={logo} alt="Wedding Crew Logo" className="h-10" />
                </a>

                {/* Mobile Menu Button */}
                <div className="lg:hidden">
                    <button onClick={toggleMenu} className="text-white focus:outline-none">
                        {/* Hamburger Icon */}
                        {!isOpen ? (
                            <svg
                                className="w-8 h-8"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-4 6h4" />
                            </svg>
                        ) : (
                            // Close Icon
                            <svg
                                className="w-8 h-8"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        )}
                    </button>
                </div>

                {/* Desktop Menu */}
                <div className="hidden lg:flex space-x-8 items-center">
                    <a href="#" className="text-white hover:text-gray-300 transition duration-300">Home</a>
                    <a href="#" className="text-white hover:text-gray-300 transition duration-300">Stories</a>
                    <a href="#" className="text-white hover:text-gray-300 transition duration-300">Wedding Films</a>
                    <a href="#" className="text-white hover:text-gray-300 transition duration-300">Reels</a>
                    <a href="#" className="text-white hover:text-gray-300 transition duration-300">Gallery</a>
                    <a href="#" className="text-white hover:text-gray-300 transition duration-300">About</a>
                    <a href="#" className="text-white hover:text-gray-300 transition duration-300">Testimonials</a>
                    <a href="#" className="text-white hover:text-gray-300 transition duration-300">Contact Us</a>
                </div>

                {/* Social Icons Desktop */}
                <div className="hidden lg:flex space-x-4">
                    <a href="#" className="text-white hover:text-gray-300 transition duration-300">
                        <img src="https://img.icons8.com/ios-glyphs/30/ffffff/facebook-new.png" alt="Facebook" className="h-6 w-6" />
                    </a>
                    <a href="#" className="text-white hover:text-gray-300 transition duration-300">
                        <img src="https://img.icons8.com/ios-glyphs/30/ffffff/twitter.png" alt="Twitter" className="h-6 w-6" />
                    </a>
                    <a href="#" className="text-white hover:text-gray-300 transition duration-300">
                        <img src="https://img.icons8.com/ios-glyphs/30/ffffff/instagram-new.png" alt="Instagram" className="h-6 w-6" />
                    </a>
                    <a href="#" className="text-white hover:text-gray-300 transition duration-300">
                        <img src="https://img.icons8.com/ios-glyphs/30/ffffff/whatsapp.png" alt="WhatsApp" className="h-6 w-6" />
                    </a>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="lg:hidden bg-gradient-to-br from-pink-500 to-purple-800 py-2">
                    <a href="#" className="block text-white px-4 py-2 hover:bg-gray-700 transition duration-300">Home</a>
                    <a href="#" className="block text-white px-4 py-2 hover:bg-gray-700 transition duration-300">Stories</a>
                    <a href="#" className="block text-white px-4 py-2 hover:bg-gray-700 transition duration-300">Wedding Films</a>
                    <a href="#" className="block text-white px-4 py-2 hover:bg-gray-700 transition duration-300">Reels</a>
                    <a href="#" className="block text-white px-4 py-2 hover:bg-gray-700 transition duration-300">Gallery</a>
                    <a href="#" className="block text-white px-4 py-2 hover:bg-gray-700 transition duration-300">About</a>
                    <a href="#" className="block text-white px-4 py-2 hover:bg-gray-700 transition duration-300">Testimonials</a>
                    <a href="#" className="block text-white px-4 py-2 hover:bg-gray-700 transition duration-300">Contact Us</a>
                    <div className="flex justify-center space-x-6 py-3">
                        <a href="#" className="text-white hover:text-gray-300 transition duration-300">
                            <img src="https://img.icons8.com/ios-glyphs/30/ffffff/facebook-new.png" alt="Facebook" className="h-7 w-7" />
                        </a>
                        <a href="#" className="text-white hover:text-gray-300 transition duration-300">
                            <img src="https://img.icons8.com/ios-glyphs/30/ffffff/twitter.png" alt="Twitter" className="h-7 w-7" />
                        </a>
                        <a href="#" className="text-white hover:text-gray-300 transition duration-300">
                            <img src="https://img.icons8.com/ios-glyphs/30/ffffff/instagram-new.png" alt="Instagram" className="h-7 w-7" />
                        </a>
                        <a href="#" className="text-white hover:text-gray-300 transition duration-300">
                            <img src="https://img.icons8.com/ios-glyphs/30/ffffff/whatsapp.png" alt="WhatsApp" className="h-7 w-7" />
                        </a>
                    </div>
                </div>
            )}


        </nav>
    );
};
export default Navbar;
