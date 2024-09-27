import React from "react";
import Lottie from "lottie-react";
import animationData from "../components/animations/aboutus.json";
import animationDataGoal from "../components/animations/goal.json";
import animationDataRocket from "../components/animations/rocket.json";
import animationData2 from "../components/animations/online-sales.json";
import AvatarAboutUs from "../components/cards/aboutus/Avatar";
import { Link } from "react-router-dom";
const Name = [
  "Ny Fong",
  "Chea Soriya",
  "Chea Muoyheang",
  "Sam Nisa",
  "Chhim Theara",
  "Oun Mekara",
];
const githubAcc = [
  "https://github.com/Nyfong",
  "https://github.com/Muoyheangchhea",
  "https://github.com/Muoyheangchhea",
  "https://github.com/Muoyheangchhea",
  "https://github.com/Muoyheangchhea",
  "https://github.com/Muoyheangchhea",
];
const roleMember = [
  {
    name: [
      "Frontend Developer",
      "Team leader",
      "Creative Programmer",
      "UxUi Designer",
    ],
  },
  { name: ["Frontend Developer", "Creative Programmer", "UxUi Designer"] },
  {
    name: [
      "Frontend Developer",
      "Creative Programmer",
      "Presenter",
      "UxUi Designer",
    ],
  },
  { name: ["Frontend Developer", "Creative Programmer", "UxUi Designer"] },

  { name: ["Frontend Developer", "Creative Programmer", "UxUi Designer"] },
  { name: ["Frontend Developer", "Creative Programmer", "UxUi Designer"] },
];
const Image = [
  "https://easyfound.automatex.dev/media/uploads/category_766e90b6-4efd-4f45-be42-42e2920730c6.jpg",
  "https://easyfound.automatex.dev/media/uploads/category_6c71b695-3487-47ab-87c9-8c01dc9a2a32.jpg",
  "http://easyfound.automatex.dev/media/uploads/category_dfeae133-e727-4c9c-bab4-e78d77f7ff02.jpg",
  "https://easyfound.automatex.dev/media/uploads/category_bcfa75c3-3964-47f7-ab49-3acca2168750.jpg",
  "https://easyfound.automatex.dev/media/uploads/category_2f852a33-959a-4768-9bf2-0dae1340cc23.jpg",
  "https://easyfound.automatex.dev/media/uploads/category_1c57b7ca-5171-4b4a-b2cc-3f00e3cc4a61.jpg",
];
const Aboutus = () => {
  return (
    <>
      <main className="max-w-screen-xl min-w-80 mx-auto p-5 border-t border-gray-200">
        {/* top section */}
        <section className="grid grid-cols-1   ">
          {/* img */}
          <div>
            <Lottie
              animationData={animationData}
              // animationData={animationDataRocket}
              className="h-[500px] "
              loop={true}
            ></Lottie>
          </div>
          {/* text */}
          <div className="grid place-content-center px-10 lg:px-0">
            <span className="font-poppins text-md md:text-lg">
              helping users make informed decisions while supporting service
              providers by giving them a platform to showcase their expertise.
            </span>
          </div>
        </section>
        {/* seound sec */}
        <section className="grid grid-cols-1 md:grid-cols-2 p-10 lg:px-0">
          <div className="grid place-content-center">
            <p className="font-pacifico text-xl md:text-5xl mb-5">
              Our Mission
            </p>
            <span className="font-poppins">
              Our mission is simple: to provide a seamless experience for users
              to search, compare, and choose the best services based on reviews,
              ratings, and availability. We believe in building trust through
              transparency, helping users make informed decisions while
              supporting service providers by giving them a platform to showcase
              their expertise.
            </span>
          </div>
          <div>
            <Lottie
              animationData={animationData2}
              // animationData={animationData}
              className="h-[300px] md:h-[500px]"
              loop={true}
            ></Lottie>
          </div>
          <div>
            <Lottie
              animationData={animationDataGoal}
              className="h-[300px] md:h-[500px]"
              loop={true}
            ></Lottie>
          </div>
          <div className="grid place-content-center">
            <p className="font-pacifico text-xl md:text-5xl mb-5">Our Goal</p>
            <span className="font-poppins">
              At Service Listing, we aim to make finding the right service
              provider easy and reliable. From plumbers and electricians to
              graphic designers and personal trainers, our platform hosts a wide
              range of services tailored to meet your needs.
            </span>
          </div>
        </section>
        <section className="flex hidden flex-col justify-center items-center  w-full text-black min-h-[450px] max-md:mt-10 max-md:max-w-full">
          <div className="flex flex-col justify-center p-2.5 max-w-full w-[1034px]">
            <div className="flex gap-10 items-center w-full min-h-[345px] max-md:max-w-full">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/ac8df44466733ed06fd33dc2442ee237003aa6d2aaa5e50612e0097398b26665?placeholderIfAbsent=true&apiKey=59e3e73395134231acd3cc9fc0db94c8"
                alt="About Us image"
                className="object-contain self-stretch my-auto rounded-xl aspect-[1.72] min-w-[240px] w-[488px] max-md:max-w-full"
              />
              <div className="flex flex-col self-stretch my-auto min-w-[240px] w-[489px] max-md:max-w-full">
                <div className="flex flex-col max-md:max-w-full">
                  <h2 className="text-2xl font-semibold leading-none max-md:max-w-full">
                    About Us
                  </h2>
                  <p className="mt-5 text-xl leading-7 max-md:max-w-full text-gray-500">
                    Welcome to <strong>Service Listing</strong>, your go-to
                    platform for discovering top-rated services in Cambodia.
                    Whether you need professional help, home services, Bar,
                    Restaurant, or lifestyle support, we connect you with
                    trusted providers. Easily browse and compare options to find
                    the perfect fit. Verified reviews ensure quality and
                    reliability. <strong>Service Listing</strong>—where finding
                    the right service is simple and fast!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-10">
          {/* our sponser */}
          <div className="flex flex-col  justify-center items-center mb-10">
            <div className="mb-12">
              <h2 className="font-manrope font-pacifico text-5xl text-center font-bold  mb-6">
                Our School
              </h2>
            </div>
            <a
              href="https://istad.co/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://easyfound.automatex.dev/media/uploads/category_7ef81c10-543e-4fb2-a4be-dc314bfebe2f.png"
                alt="Antonio image"
                className="w-40 h-40 rounded-full mx-auto transition-all duration-500 object-cover border border-solid border-transparent group-hover:border-indigo-600"
              />
            </a>
          </div>
          {/* our mentor */}
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <h2 className="font-manrope font-pacifico text-5xl text-center font-bold  mb-6">
                Our Mentor
              </h2>
            </div>
            <div className="grid grid-cols-1 min-[500px]:grid-cols-2 md:grid-cols-6 lg:grid-cols-2 gap-8 max-w-xl mx-auto md:max-w-3xl lg:max-w-full">
              <div className="block group md:col-span-2 lg:col-span-1 justify-center just">
                <div className="relative mb-6">
                  <a
                    href="https://github.com/MuyleangIng"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="https://avatars.githubusercontent.com/u/116934056?v=4"
                      alt="Antonio image"
                      className="w-40 h-40 rounded-full mx-auto transition-all duration-500 object-cover border border-solid border-transparent group-hover:border-indigo-600"
                    />
                  </a>
                </div>
                <h4 className="font-poppins text-xl font-semibold text-gray-900 mb-2 capitalize text-center transition-all duration-500 group-hover:text-indigo-600">
                  Ing Muyleang
                </h4>
                <span className="font-pacifico text-gray-500 text-center block transition-all duration-500 group-hover:text-gray-900">
                  Founder
                </span>
              </div>
              <div className="block group md:col-span-2 lg:col-span-1">
                <div className="relative mb-6">
                  <a
                    href="https://github.com/JessicaaSun"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="https://avatars.githubusercontent.com/u/111196908?v=4"
                      alt="Patricia image"
                      className="w-40 h-40 rounded-full mx-auto transition-all duration-500 object-cover border border-solid border-transparent group-hover:border-indigo-600"
                    />
                  </a>
                </div>
                <h4 className=" font-poppins text-xl font-semibold text-gray-900 mb-2 capitalize text-center transition-all duration-500 group-hover:text-indigo-600">
                  Sun Jessica
                </h4>
                <span className="font-pacifico text-gray-500 text-center block transition-all duration-500 group-hover:text-gray-900">
                  Co-Founder
                </span>
              </div>
            </div>
          </div>
        </section>
        {/* our team */}
        <section className="">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10">
              <h2 className="font-pacifico text-5xl text-center font-bold  mb-6">
                Our Team
              </h2>
              <p className="font-poppins text-lg text-gray-500 text-center">
                These people work on making our product best.
              </p>
            </div>

            <div className="flex flex-wrap gap-10 justify-center gap-y-14 max-w-3xl mx-auto lg:max-w-full">
              {/* name */}
              {Name.map((name, index) => (
                <div key={index} className="avatar-item">
                  <AvatarAboutUs
                    Image={Image[index]}
                    name={name}
                    role={roleMember[index].name}
                    github={githubAcc[name]}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="flex flex-col justify-center px-2.5 mt-24 w-full  max-md:mt-10 max-md:max-w-full">
          <div className="flex flex-col px-2.5 pt-2.5 w-full min-h-[803px] max-md:max-w-full">
            <div className="flex flex-col justify-center p-2.5 w-full max-md:max-w-full">
              <div className="flex flex-col w-full max-md:max-w-full mt-[100px]">
                <h2 className="text-4xl leading-none text-center   max-md:max-w-full">
                  <span className="text-black font-pacifico">Contact Us</span>
                </h2>
                <div className="flex flex-col justify-center items-center mt-20 w-full max-md:mt-10 max-md:max-w-full">
                  <div className="flex flex-col max-w-full rounded-none w-[1196px]">
                    <div className="py-2.5 pr-12 pl-2.5 bg-white rounded-xl shadow-2xl max-md:pr-5 max-md:max-w-full">
                      <div className="flex gap-5 max-md:flex-col">
                        <div className="flex flex-col w-[45%] max-md:ml-0 max-md:w-full">
                          <div className="flex flex-col items-start py-10 pr-20 pl-10 mx-auto w-full rounded-xl bg-slate-900 max-md:px-5 max-md:mt-10 max-md:max-w-full">
                            <h3 className="text-3xl font-semibold text-white">
                              Contact Information
                            </h3>
                            <p className="mt-1.5 text-lg text-stone-300">
                              Say something to start a live chat!
                            </p>
                            <address className="flex flex-col gap-12 mt-28 text-base text-white max-md:mt-10">
                              <div className="flex gap-6">
                                <img
                                  loading="lazy"
                                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/0026d46bdf1749a8b11296a6570e90982b939f31bdc5fcf9134d46dc02360e36?placeholderIfAbsent=true&apiKey=59e3e73395134231acd3cc9fc0db94c8"
                                  alt=""
                                  className="object-contain shrink-0 w-6 aspect-square"
                                />
                                <span>
                                  <a
                                    href="tel:+85595990910"
                                    className="text-blue-500 hover:underline"
                                  >
                                    (+855) 95 990 910
                                  </a>
                                  {" | "}
                                  <a
                                    href="tel:+85593990910"
                                    className="text-blue-500 hover:underline"
                                  >
                                    (+855) 93 990 910
                                  </a>
                                </span>
                              </div>
                              <div className="flex gap-6 whitespace-nowrap">
                                <img
                                  loading="lazy"
                                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/c6aa2724deb763f57dd268b19797fc983f1dea1099ad2bb31460a1cac3806a09?placeholderIfAbsent=true&apiKey=59e3e73395134231acd3cc9fc0db94c8"
                                  alt=""
                                  className="object-contain shrink-0 w-6 aspect-square"
                                />
                                <span>
                                  <a
                                    href="mailto:info.istad@gmail.com"
                                    className="text-blue-500 hover:underline"
                                  >
                                    info.istad@gmail.com
                                  </a>
                                </span>
                              </div>
                              <div className="flex gap-6">
                                <img
                                  loading="lazy"
                                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/81e4127eed7f93bde95b5b1db9540c5009389446e08d58597ec3ecf78499f739?placeholderIfAbsent=true&apiKey=59e3e73395134231acd3cc9fc0db94c8"
                                  alt=""
                                  className="object-contain shrink-0 self-start w-6 aspect-square"
                                />
                                <span>
                                  No. 24, St. 562, Sangkat Boeung kak I, Khan
                                  Toul Kork, Phnom Penh, Cambodia
                                </span>
                              </div>
                            </address>
                            <div className="flex gap-6 mt-40 max-md:mt-10">
                              <a href="#" aria-label="Facebook">
                                <img
                                  loading="lazy"
                                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/b46b2eeeb4244f3cb7c148cbf4052c46dbb90419006ca50de1d8c13660c4a1f9?placeholderIfAbsent=true&apiKey=59e3e73395134231acd3cc9fc0db94c8"
                                  alt=""
                                  className="object-contain shrink-0 aspect-square w-[30px]"
                                />
                              </a>
                              <a href="#" aria-label="Twitter">
                                <img
                                  loading="lazy"
                                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/bbacfbbdf8ced6c6cc176fbb94d58b3480aea7da319240526afcabec25e82325?placeholderIfAbsent=true&apiKey=59e3e73395134231acd3cc9fc0db94c8"
                                  alt=""
                                  className="object-contain shrink-0 aspect-square w-[30px]"
                                />
                              </a>
                              <a href="#" aria-label="Instagram">
                                <img
                                  loading="lazy"
                                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/ee31b13533a8fbd5bb2e39169eace2765475713c3132e2183b440de9770d9b07?placeholderIfAbsent=true&apiKey=59e3e73395134231acd3cc9fc0db94c8"
                                  alt=""
                                  className="object-contain shrink-0 aspect-square w-[30px]"
                                />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="p-4 py-6 rounded-lg bg-gray-50 dark:bg-gray-800 md:p-8">
                          <form>
                            <div className="-mx-2 md:items-center md:flex">
                              <div className="flex-1 px-2">
                                <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                                  First Name
                                </label>
                                <input
                                  type="text"
                                  placeholder="John"
                                  className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                                />
                              </div>
                              <div className="flex-1 px-2 mt-4 md:mt-0">
                                <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                                  Last Name
                                </label>
                                <input
                                  type="text"
                                  placeholder="Doe"
                                  className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                                />
                              </div>
                            </div>

                            <div className="mt-4">
                              <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                                Email address
                              </label>
                              <input
                                type="email"
                                placeholder="johndoe@example.com"
                                className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                              />
                            </div>

                            <fieldset className="mt-7 w-full">
                              <legend className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                                Select Subject?
                              </legend>
                              <div className="flex flex-wrap gap-5 mt-5 text-xs leading-loose text-slate-900">
                                <label className="flex gap-2.5">
                                  <input
                                    type="radio"
                                    name="subject"
                                    value="general"
                                    defaultChecked
                                  />
                                  General Inquiry
                                </label>
                                <label className="flex gap-2.5">
                                  <input
                                    type="radio"
                                    name="subject"
                                    value="support"
                                  />
                                  Technical Support
                                </label>
                                <label className="flex gap-2.5">
                                  <input
                                    type="radio"
                                    name="subject"
                                    value="billing"
                                  />
                                  Billing Question
                                </label>
                                <label className="flex gap-2.5">
                                  <input
                                    type="radio"
                                    name="subject"
                                    value="feedback"
                                  />
                                  Feedback
                                </label>
                              </div>
                            </fieldset>

                            <div className="w-full mt-4">
                              <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                                Message
                              </label>
                              <textarea
                                className="block w-full h-32 px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg md:h-56 dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                                placeholder="Message"
                              ></textarea>
                            </div>

                            <button className="w-full px-6 py-3 mt-4 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                              Send message
                            </button>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Aboutus;
