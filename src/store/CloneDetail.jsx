import { ProductCard } from "../components/Product-template";
import {
  RatingBar,
  RatingReview,
  RatingStars,
} from "../components/cards/servicelisting/RatingStar";
import { CarouselImg } from "../components/cards/servicelisting/CarouselImg";
import ServiceListingTitle from "../components/titles/ServiceListing-title";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSingleProduct } from "./getAllProduct";
import LogoGP from "../assets/img/LogoCP1.png";
import Lottie from "lottie-react";
import Loading from "../components/animations/loading.json";
import Test from "../test";
import FeedbackForm from "./Feedbackform";

//for array
const count = 4;
const count2 = 3;

const indexList = Array.from({ length: count }, (_, i) => i + 1);
const comments = [
  "The place prioritizes quality, cleanliness and hygiene, which I appreciated during my visit. Overall, I highly recommend this place to anyone looking for top-notch service! I will definitely come back!",
  "I had a wonderful experience at this Hair Studio! The stylist was professional and attentive, and my haircut turned out exactly as I envisionedd.",
  "This auto repair place provided fast and efficient service, getting my car back on the road in no time. Their attention to detail and professionalism really stood out!",
  "This restaurant offered a fantastic dining experience with delicious dishes and a cozy atmosphere. The service was prompt, and every bite was full of flavor!",
];
const userProfileName = ["Chan Thida", "Siv Ly", "Vichaka", "Yuth"];
const userImage = [
  "https://media.licdn.com/dms/image/v2/C5622AQHT6ohPc59uIA/feedshare-shrink_800/feedshare-shrink_800/0/1662814157519?e=2147483647&v=beta&t=zj-CWlKK6uPlVCwBAlaVDnmAMywpnmAB8wYxYFSTckM",
  "https://writestylesonline.com/wp-content/uploads/2018/11/Three-Statistics-That-Will-Make-You-Rethink-Your-Professional-Profile-Picture-1024x1024.jpg",
  "https://www.befunky.com/images/wp/wp-2021-01-linkedin-profile-picture-after.jpg?auto=avif,webp&format=jpg&width=944",
  "https://i.pinimg.com/280x280_RS/54/ca/56/54ca56d92b8ce5c57ca327fcf42c01c0.jpg",
];
const indexList2 = Array.from({ length: count2 }, (_, i) => i + 1);
const icons = ["fa-wifi"];
let icon = "fa-wifi";
const HorizenralLine = () => (
  <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
);
let CloneDetails = () => {
  const param = useParams();
  console.log("param:", param);
  const id = param.id;
  const [fetchSignleProduct, setFetchSignleProduct] = useState({});
  useEffect(() => {
    const fetchSignleProduct = async () => {
      const product = await getSingleProduct(id);
      console.log("product", product);
      setFetchSignleProduct(product);
    };
    fetchSignleProduct();
  }, []);
  return (
    <>
      {/* title descriptipn */}
      <main className=" max-w-screen-xl min-w-80 mx-auto  p-5  md:p-0 ">
        {/* show image */}
        <section className="grid mb-5 px-10 xl:p-0">
          <ServiceListingTitle name={fetchSignleProduct.name} />
          <CarouselImg
            image={fetchSignleProduct.image}
            name={fetchSignleProduct.name}
          />
          <ProductCard
            image={fetchSignleProduct.image || LogoGP}
            price={fetchSignleProduct.price}
          />
        </section>
        {/* details sections */}
        <section className="grid  grid-cols-1 lg:grid-cols-5 ">
          {/* title */}
          <section className=" col-span-2    p-3 ">
            <div className="grid grid-cols-1">
              {/* owner of that product */}
              <div className="grid grid-cols-2  mb-10">
                <div>
                  <h2 className="font-poppins font-bold text-body">
                    {fetchSignleProduct.name}
                  </h2>
                  {/* liitle details  */}
                  <div className="text-gray-300  grid grid-cols-3 gap-[200px]">
                    <div className="text-body  font-bold">
                      <p>{`Start time:${fetchSignleProduct.start_time}AM`}</p>
                    </div>
                    <div className="text-body font-bold">
                      <p>{`End time:${fetchSignleProduct.end_time}PM`}</p>
                    </div>
                  </div>
                </div>
                {/* image */}
                <div className="flex justify-end itemsc-center">
                  <img
                    className="w-8 h-8  rounded-full  object-contain"
                    src={LogoGP}
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
                        <i class="fa-solid fa-heart"></i>
                      </div>
                      {/* home details */}
                      <div className="font-poppins">
                        {/* title */}
                        <p className="font-bold">Best Quality</p>
                        {/* description */}
                        <p className="text-grey-400">
                          The best recommend of all
                        </p>
                      </div>
                    </div>
                  </div>
                </>
              ))}
              {/* what will this offer*/}
              <HorizenralLine />
              <div className=" font-poppins grid gird-cols-1 mb-10">
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
            </div>

            {/* desctiption */}
            <div className="grid grid-cols-1  mb-10">
              <p className="font-poppins flex md:hidden  text-grey-400">
                {fetchSignleProduct.description}
              </p>
            </div>
            <div className="flex md:hidden">
              <FeedbackForm shopename={fetchSignleProduct.name} />
            </div>
          </section>
          {/* show card */}

          <section className="grid col-span-1 lg:col-span-3   p-10  ">
            <div className="w-full grid place-content-center ">
              {/* price section */}
              <div className=" md:flex hidden mb-10 border-2 rounded-lg p-4 flex flex-col">
                <div className="flex justify-between items-center  ">
                  <span className="font-pacifico font-bold  md:text-5xl mb-5 ">
                    Description
                  </span>{" "}
                  <img src={LogoGP} className="h-[30px] flex " alt="" />
                </div>

                <p className="font-poppins text-grey-400">
                  {fetchSignleProduct.description}
                </p>
              </div>
              {/* send feedback */}
              <div className="hidden md:flex">
                <FeedbackForm shopename={fetchSignleProduct.name} />
              </div>

              <div className="w-full pt-10 px-10 pb-8 bg-gray-100  lg:hidden rounded-3xl">
                {/* price */}
                <div className="text-center mb-6">
                  <div className="grid grid-cols-2">
                    <span className="block text-5xl font-bold text-gray-800 mb-10">
                      ${fetchSignleProduct.price}
                    </span>
                    <h5 className="lg:text-2xl font-semibold ml-10 md:ml-0 text-xs text-gray-800 mb-10">
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
            {/* desctiption */}
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
            <div className="grid grid-cols-2    gap-3 mb-10">
              {/* item1 */}
              {indexList.map((el, i) => (
                <>
                  <div className="border-2 rounded-xl">
                    <div class="max-w-lg  px-6 py-4 rounded-lg ">
                      <div class="flex items-center mb-6">
                        <img
                          src={userImage[i]}
                          alt="Avatar"
                          class="w-12 h-12 rounded-full mr-4"
                        />
                        <div>
                          <div class="font-pacifico text-lg  font-medium ">
                            {userProfileName[i]}
                          </div>
                          <div class="text-gray-500">2 hours ago</div>
                        </div>
                      </div>
                      <p class="font-poppins text-quote leading-relaxed mb-6 line-clamp-3 md:line-clamp-5 lg:line-clamp-none">
                        {comments[i]}
                      </p>
                      <div class="flex justify-between items-center"></div>
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
          <Test id={id} />
        </section>
      </main>
    </>
  );
};
export default CloneDetails;
