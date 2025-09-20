// Import images
import Logo1 from "../../assets/home/logo1.png";
import Group41 from "../../assets/home/Group 41.png";

 function FAQSection() {
  return (
    <section className="pb-10">
      <div className="w-11/12 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="w-full">
            <div className="text-start mb-5">
              <div className="flex justify-start items-start mb-4" data-aos="zoom-in">
                <img src={Logo1} alt="Camera Icon" className="h-14 object-contain" />
              </div>
              <h1 className="text-2xl font-lora lg:text-4xl font-bold text-[#131450] mb-2" data-aos="fade-up">
                Curious About Something? <br /> Start Here
              </h1>
              <p
                className="text-2xl lg:text-4xl font-bold text-[#000000] font-lora"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                Frequently Asked Questions
              </p>
            </div>
            <div
              className="accordion-container bg-white p-4 rounded-2xl shadow-lg border border-[#FF3692]"
              style={{ height: "450px", overflowY: "auto" }}
            >
              <div className="accordion-item border-b border-gray-200 last:border-b-0">
                <h2>
                  <button
                    type="button"
                    className="accordion-header flex items-center justify-between w-full p-5 font-medium text-left text-white bg-purple-800 rounded-lg"
                  >
                    <span>How do I book a session for the best wedding photography in Kolkata?</span>
                    <svg
                      className="accordion-arrow w-3 h-3 shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      ></path>
                    </svg>
                  </button>
                </h2>
                <div className="accordion-content bg-pink-50">
                  <div className="p-5">
                    <p className="text-gray-600">
                      The easiest way to book a session for the best wedding photography in Kolkata is by visiting Rig
                      Biswas's website and filling out a form on the Join Us page.
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-item border-b border-gray-200 last:border-b-0">
                <h2>
                  <button
                    type="button"
                    className="accordion-header flex items-center justify-between w-full p-5 font-medium text-left text-white bg-purple-800 rounded-lg"
                  >
                    <span>What is the cost of your photography packages?</span>
                    <svg
                      className="accordion-arrow w-3 h-3 shrink-0 transition-transform duration-200"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      ></path>
                    </svg>
                  </button>
                </h2>
                <div className="accordion-content">
                  <div className="p-5">
                    <p className="text-gray-600">
                      We offer various packages to suit different needs and budgets. Please contact us with your
                      requirements for a detailed quote.
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-item border-b border-gray-200 last:border-b-0">
                <h2>
                  <button
                    type="button"
                    className="accordion-header flex items-center justify-between w-full p-5 font-medium text-left text-white bg-purple-800 rounded-lg"
                  >
                    <span>How do I book a session for the best wedding photography in Kolkata?</span>
                    <svg
                      className="accordion-arrow w-3 h-3 shrink-0 transition-transform duration-200"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      ></path>
                    </svg>
                  </button>
                </h2>
                <div className="accordion-content">
                  <div className="p-5">
                    <p className="text-gray-600">
                      The easiest way to book a session is by visiting our website and filling out the contact form. We
                      will get back to you shortly.
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-item border-b border-gray-200 last:border-b-0">
                <h2>
                  <button
                    type="button"
                    className="accordion-header flex items-center justify-between w-full p-5 font-medium text-left text-white bg-purple-800 rounded-lg"
                  >
                    <span>Do you travel for destination weddings?</span>
                    <svg
                      className="accordion-arrow w-3 h-3 shrink-0 transition-transform duration-200"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      ></path>
                    </svg>
                  </button>
                </h2>
                <div className="accordion-content">
                  <div className="p-5">
                    <p className="text-gray-600">
                      Yes, we love destination weddings! We are available to travel worldwide to capture your special
                      day.
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-item border-b border-gray-200 last:border-b-0">
                <h2>
                  <button
                    type="button"
                    className="accordion-header flex items-center justify-between w-full p-5 font-medium text-left text-white bg-purple-800 rounded-lg"
                  >
                    <span>Do you travel for destination weddings?</span>
                    <svg
                      className="accordion-arrow w-3 h-3 shrink-0 transition-transform duration-200"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      ></path>
                    </svg>
                  </button>
                </h2>
                <div className="accordion-content">
                  <div className="p-5">
                    <p className="text-gray-600">
                      Yes, we love destination weddings! We are available to travel worldwide to capture your special
                      day.
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2>
                  <button
                    type="button"
                    className="accordion-header flex items-center justify-between w-full p-5 font-medium text-left text-white bg-purple-800 rounded-lg"
                  >
                    <span>Do you travel for destination weddings?</span>
                    <svg
                      className="accordion-arrow w-3 h-3 shrink-0 transition-transform duration-200"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      ></path>
                    </svg>
                  </button>
                </h2>
                <div className="accordion-content">
                  <div className="p-5">
                    <p className="text-gray-600">
                      Yes, we love destination weddings! We are available to travel worldwide to capture your special
                      day.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-full flex items-center justify-center p-4">
            <div className="w-full max-w-md h-[500px]">
              <img src={Group41} alt="Group41"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FAQSection;
