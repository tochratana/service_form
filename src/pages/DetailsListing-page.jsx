import { ProductCard } from "../components/Product-template";

import {
  RatingBar,
  RatingReview,
  RatingStars,
} from "../components/cards/servicelisting/RatingStar";
import { CarouselImg } from "../components/cards/servicelisting/CarouselImg";
import ServiceListingTitle from "../components/titles/ServiceListing-title";
import Test from "../test";
const count = 4;
const count2 = 10;

const indexList = Array.from({ length: count }, (_, i) => i + 1);
const indexList2 = Array.from({ length: count2 }, (_, i) => i + 1);
const icons = ["fa-wifi"];
let icon = "fa-wifi";
const HorizenralLine = () => (
  <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
);
let DetailListingPage = () => {
  return (
    <>
      {/* title descriptipn */}
      <main className=" max-w-screen-xl min-w-80 mx-auto  p-5  md:p-0 ">
        {/* show image */}
        <section className="grid mb-5 px-10 xl:p-0">
          <ServiceListingTitle />
          <CarouselImg />
          <ProductCard />
        </section>
        {/* details sections */}
        <section className="grid  grid-cols-1 lg:grid-cols-5 ">
          {/* title */}
          <section className=" col-span-3    p-3 ">
            <div className="grid grid-cols-1">
              {/* owner of that product */}
              <div className="grid grid-cols-2  mb-10">
                <div>
                  <h2 className="font-bold text-body">
                    Bordeaux Getaway hosted by Ghazal
                  </h2>
                  {/* liitle details  */}
                  <div className="text-gray-200 grid grid-cols-4">
                    <div className="text-desc">
                      <p>2 beds</p>
                    </div>
                    <div className="text-desc">
                      <p>2 beds</p>
                    </div>
                    <div className="text-desc">
                      <p>2 beds</p>
                    </div>
                    <div className="text-desc">
                      <p>2 beds</p>
                    </div>
                  </div>
                </div>
                {/* image */}
                <div className="flex justify-end itemsc-center">
                  <img
                    className="w-8 h-8 rounded-full object-cover"
                    src="https://www.perfocal.com/blog/content/images/2021/01/Perfocal_17-11-2019_TYWFAQ_100_standard-3.jpg"
                    alt=""
                  />
                </div>
              </div>
              {/* details of that product like one type */}
              {indexList.map((el) => (
                <>
                  <div className="grid   grid-cols-1 mb-10">
                    {/* etire home */}
                    <div className="flex gap-1  ">
                      {/* icons */}
                      <div className="mr-5 ">
                        <i class="fa-solid fa-house"></i>
                      </div>
                      {/* home details */}
                      <div className="">
                        {/* title */}
                        <p className="font-bold">Entire home</p>
                        {/* description */}
                        <p className="text-grey-200">
                          You’ll have the apartment to yourself
                        </p>
                      </div>
                    </div>
                  </div>
                </>
              ))}
            </div>
            {/* desctiption */}
            <div className="grid grid-cols-1  mb-10">
              <p className="text-grey-200">
                Come and stay in this superb duplex T2, in the heart of the
                historic center of Bordeaux. Spacious and bright, in a real
                Bordeaux building in exposed stone, you will enjoy all the
                charms of the city thanks to its ideal location. Close to many
                shops, bars and restaurants, you can access the apartment by
                tram A and C and bus routes 27 and 44. ...
              </p>
            </div>
            <HorizenralLine />
            {/* what will this offer*/}
            <div className="grid gird-cols-1 mb-10">
              <h2 className="font-bold text-body mb-10">What this offer</h2>
              {/* items */}
              {/* item1 */}
              <div className="grid grid-cols-2 gap-2">
                {indexList2.map((el, i) => (
                  <>
                    <div className="flex gap-2 items-center justify-center lg:justify-start">
                      <i class={"fa-solid fa-wifi "}></i>
                      <div>
                        <span>5G</span>
                      </div>
                    </div>
                  </>
                ))}
              </div>
            </div>
          </section>
          {/* show card */}
          <section className="grid col-span-1 lg:col-span-2    p-10 md:p-[60px] ">
            <div className="w-full">
              <div className="w-full pt-10 px-10 pb-8 bg-gray-100 rounded-3xl">
                {/* price */}
                <div className="text-center mb-6">
                  <div className="grid grid-cols-2">
                    <span className="block text-5xl font-bold text-gray-800 mb-10">
                      $15
                    </span>
                    <h5 className="text-2xl font-semibold text-gray-800 mb-10">
                      Standard
                    </h5>

                    <span className="block text-gray-600 font-medium mb-6">
                      per user, per night
                    </span>
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
                    <span className="ml-2 text-gray-800">Priority Support</span>
                  </li>
                  <li className="flex mb-4 items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      className="w-6 h-6 fill-current text-gray-800"
                    >
                      <path d="M7.293 13.293l-3-3a1 1 0 011.414-1.414L8 12.586l8.293-8.293a1 1 0 111.414 1.414l-9 9a1 1 0 01-1.414 0z"></path>
                    </svg>
                    <span className="ml-2 text-gray-800">Exclusive Access</span>
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
          </section>
        </section>
        {/* comment and rate section */}
        <section className="mb-10">
          <HorizenralLine />
          {/* review */}
          <div>
            <RatingReview />
            <RatingStars />
          </div>
          <HorizenralLine />
          {/* comment */}
          <div>
            <div className="grid grid-cols-2 gap-3 mb-10">
              {/* item1 */}
              {indexList.map((el) => (
                <>
                  <div className="">
                    <div class="max-w-lg  px-6 py-4 rounded-lg ">
                      <div class="flex items-center mb-6">
                        <img
                          src="https://randomuser.me/api/portraits/men/97.jpg"
                          alt="Avatar"
                          class="w-12 h-12 rounded-full mr-4"
                        />
                        <div>
                          <div class="text-lg font-medium text-gray-800">
                            John Doe
                          </div>
                          <div class="text-gray-500">2 hours ago</div>
                        </div>
                      </div>
                      <p class="text-quote leading-relaxed mb-6 line-clamp-3 md:line-clamp-5 lg:line-clamp-none">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed sit amet lorem nulla. Donec consequat urna a tortor
                        sagittis lobortis.
                      </p>
                      <div class="flex justify-between items-center">
                        {/* <div>
                            <a
                              href="#"
                              class="text-gray-500 hover:text-gray-700 mr-4"
                            >
                              <i class="far fa-thumbs-up"></i> Like
                            </a>
                            <a
                              href="#"
                              class="text-gray-500 hover:text-gray-700"
                            >
                              <i class="far fa-comment-alt"></i> Reply
                            </a>
                          </div> */}
                        {/* <div class="flex items-center">
                            <a
                              href="#"
                              class="text-gray-500 hover:text-gray-700 mr-4"
                            >
                              <i class="far fa-flag"></i> Report
                            </a>
                            <a
                              href="#"
                              class="text-gray-500 hover:text-gray-700"
                            >
                              <i class="far fa-share-square"></i> Share
                            </a>
                          </div> */}
                      </div>
                    </div>
                  </div>
                </>
              ))}
            </div>
          </div>
          {/* iframe map */}
          <div>
            <iframe
              class="w-full h-[400px] border-2 border-gray-300 rounded-lg"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3908.6314046837374!2d104.89921187567658!3d11.578259843891068!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310951e96d257a6f%3A0x6b66703c5fc0c7cc!2sScience%20and%20Technology%20Advanced%20Development%20Co.%2C%20Ltd.!5e0!3m2!1sen!2skh!4v1726560343607!5m2!1sen!2skh"
              title="Example"
            ></iframe>
          </div>
        </section>
        {/* sugession */}
        <section>
          <Test />
        </section>
      </main>
    </>
  );
};
export default DetailListingPage;
