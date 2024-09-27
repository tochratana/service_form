import { HiOutlineSquares2X2 } from "react-icons/hi2";
import { RatingBar } from "./cards/servicelisting/RatingStar";
import { RatingReview } from "./cards/servicelisting/RatingStar";
import animationData2 from "../components/animations/online-sales.json";
import Lottie from "lottie-react";

import LogoGP from "../assets/img/LogoCP1.png";
export let ProductCard = ({ image, price }) => {
  return (
    <>
      <section>
        <div className="flex relative ">
          <div className="lg:flex gap-3">
            <button className="md:bg-white md:border-black text-white md:text-black rounded-lg flex items-center justify-center absolute bot-0 bottom-0 right-5 gap-2 py-2 px-4">
              <HiOutlineSquares2X2 className="text-[32px] md:text[14px]" />
              <span className="hidden md:block text-[14px]">
                Show all photos
              </span>
            </button>
            <div className="lg:grid grid-cols-8  hidden gap-4">
              <div className=" col-span-5 w-full rounded-lg hover:shadow-lg overflow-hidden">
                <img
                  src={image}
                  className="w-full h-full object-cover"
                  alt=""
                />
              </div>
              {/* col 2 column */}
              <div className="col-span-3  rounded-lg overflow-hidden ">
                {/* <Lottie animationData={animationData2} loop={true}></Lottie> */}
                <div className="w-full pt-10 px-10 pb-8 bg-gray-100 rounded-3xl">
                  {/* price */}
                  <div className="text-center mb-6">
                    <div className="grid grid-cols-2">
                      <span className="block text-5xl font-bold text-gray-800 mb-10">
                        $ {price}
                      </span>
                      <h5 className="text-2xl font-semibold text-gray-800 mb-10">
                        Standard
                      </h5>

                      <span className="block text-gray-600 font-medium mb-6"></span>
                    </div>
                    <a
                      href="#"
                      className="relative group inline-block w-full py-4 px-6 text-center text-gray-800 hover:text-gray-50 bg-primary-500 font-semibold rounded-full overflow-hidden transition duration-200"
                    >
                      <div className="absolute top-0 right-full w-full h-full bg-gray-900 transform group-hover:translate-x-full group-hover:scale-102 transition duration-500"></div>
                      <span className="relative">Place in </span>
                    </a>
                  </div>
                  {/* list */}
                  <ul>
                    <li className="flex mb-4 items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        className="w-6 h-6 fill-current text-gray-800"
                      >
                        <path d="M7.293 13.293l-3-3a1 1 0 011.414-1.414L8 12.586l8.293-8.293a1 1 0 111.414 1.414l-9 9a1 1 0 01-1.414 0z"></path>
                      </svg>
                      <span className="ml-2 text-gray-800">
                        Unlimited Features
                      </span>
                    </li>
                    <li className="flex mb-4 items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        className="w-6 h-6 fill-current text-gray-800"
                      >
                        <path d="M7.293 13.293l-3-3a1 1 0 011.414-1.414L8 12.586l8.293-8.293a1 1 0 111.414 1.414l-9 9a1 1 0 01-1.414 0z"></path>
                      </svg>
                      <span className="ml-2 text-gray-800">
                        Enhanced Security
                      </span>
                    </li>
                    <li className="flex mb-4 items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        className="w-6 h-6 fill-current text-gray-800"
                      >
                        <path d="M7.293 13.293l-3-3a1 1 0 011.414-1.414L8 12.586l8.293-8.293a1 1 0 111.414 1.414l-9 9a1 1 0 01-1.414 0z"></path>
                      </svg>
                      <span className="ml-2 text-gray-800">
                        Priority Support
                      </span>
                    </li>
                    <li className="flex mb-4 items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        className="w-6 h-6 fill-current text-gray-800"
                      >
                        <path d="M7.293 13.293l-3-3a1 1 0 011.414-1.414L8 12.586l8.293-8.293a1 1 0 111.414 1.414l-9 9a1 1 0 01-1.414 0z"></path>
                      </svg>
                      <span className="ml-2 text-gray-800">
                        Exclusive Access
                      </span>
                    </li>
                    <li className="flex mb-4 items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        className="w-6 h-6 fill-current text-gray-500"
                      >
                        <path d="M7.293 13.293l-3-3a1 1 0 011.414-1.414L8 12.586l8.293-8.293a1 1 0 111.414 1.414l-9 9a1 1 0 01-1.414 0z"></path>
                      </svg>
                      <span className="ml-2 text-gray-500 line-through">
                        Ad-free Experience
                      </span>
                    </li>
                    <li className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        className="w-6 h-6 fill-current text-gray-800"
                      >
                        <path d="M7.293 13.293l-3-3a1 1 0 011.414-1.414L8 12.586l8.293-8.293a1 1 0 111.414 1.414l-9 9a1 1 0 01-1.414 0z"></path>
                      </svg>
                      <span className="ml-2 text-gray-800">
                        Customization Options
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              {/* col 2 column */}

              {/* col 2 column */}

              {/* col 2 column */}
              {/* <div className="col-span-3 row-span-1 rounded-lg overflow-hidden">
                <img
                  className="w-full h-full object-contain"
                  src={LogoGP}
                  alt=""
                />
              </div> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
