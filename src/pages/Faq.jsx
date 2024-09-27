import React, { useState } from "react";
import Lottie from "lottie-react";
import animationData from "../components/animations/faq1.json";
const Faq = () => {
  const [selectedFaq, setSelectedFaq] = useState("general"); // State to track the selected FAQ category

  // Function to handle navigation clicks
  const handleFaqClick = (faqType) => {
    setSelectedFaq(faqType);
  };

  return (
    <main className="max-w-screen-xl min-w-80 mx-auto ">
      {/* Section 1 */}
      <section className="flex  overflow-hidden h-screen flex-col items-center px-20 pt-10 pb-8 w-full text-center text-amber-500 border-t border-gray-200 rounded-bl-3xl rounded-br-3xl max-md:px-5 max-md:py-24 max-md:max-w-full">
        <div className="flex flex-col mb-0 max-w-full w-[731px] max-md:mb-2.5 ">
          <h2 className="self-center font-pacifico text-4xl leading-none max-md:max-w-full">
            How can we help You?
          </h2>
          <p className="font-poppins mt-9 text-xl leading-tight max-md:max-w-full">
            Search for our advice and answers with my team real quick or get in
            touch
          </p>
          <Lottie
            animationData={animationData}
            className="h-[500px] pt-10 "
            loop={true}
          ></Lottie>
        </div>
      </section>

      {/* Section 2: Navigation */}
      <section className="flex flex-wrap gap-10 justify-center items-center text-4xl leading-none text-center  text-black whitespace-nowrap mt-10">
        <article
          onClick={() => handleFaqClick("general")}
          className="font-pacifico flex overflow-hidden flex-col justify-center self-stretch px-9 py-12 my-auto text-4xl leading-none bg-white rounded-3xl border-solid border-[3px] border-gray-300 hover:bg-yellow-300 hover:border-yellow-300 transition duration-300 min-w-[240px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] w-[300px] max-md:px-5 cursor-pointer"
        >
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/e05b3e4adf92216b6f86bc4109b046cd01d22b0561b5ddd4090551932fc24107?placeholderIfAbsent=true&apiKey=59e3e73395134231acd3cc9fc0db94c8"
            className="object-contain self-center max-w-full aspect-square w-[120px]"
            alt="FAQ icon"
          />
          <p className="mt-5 mx-auto">General</p>
        </article>

        <article
          onClick={() => handleFaqClick("card")}
          className=" font-pacifico flex overflow-hidden flex-col justify-center self-stretch px-9 py-12 my-auto text-4xl leading-none bg-white rounded-3xl border-solid border-[3px] border-gray-300 hover:bg-yellow-300 hover:border-yellow-300 transition duration-300 min-w-[240px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] w-[300px] max-md:px-5 cursor-pointer"
        >
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/e05b3e4adf92216b6f86bc4109b046cd01d22b0561b5ddd4090551932fc24107?placeholderIfAbsent=true&apiKey=59e3e73395134231acd3cc9fc0db94c8"
            className="object-contain self-center max-w-full aspect-square w-[120px]"
            alt="Card icon"
          />
          <p className="mt-5 mx-auto">Card</p>
        </article>

        <article
          onClick={() => handleFaqClick("individual")}
          className=" font-pacifico flex overflow-hidden flex-col justify-center self-stretch px-9 py-12 my-auto text-4xl leading-none bg-white rounded-3xl border-solid border-[3px] border-gray-300 hover:bg-yellow-300 hover:border-yellow-300 transition duration-300 min-w-[240px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] w-[300px] max-md:px-5 cursor-pointer"
        >
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/e05b3e4adf92216b6f86bc4109b046cd01d22b0561b5ddd4090551932fc24107?placeholderIfAbsent=true&apiKey=59e3e73395134231acd3cc9fc0db94c8"
            className="object-contain self-center max-w-full aspect-square w-[120px]"
            alt="Individual icon"
          />
          <p className="mt-5 mx-auto">Individual</p>
        </article>
      </section>

      {/* FAQ Section */}
      <div className="relative w-full bg-white px-6 pt-10 pb-8 mt-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-2xl sm:rounded-lg sm:px-10">
        <div className="mx-auto px-5">
          <div className="flex flex-col items-center">
            <h2 className="font-pacifico font-black mt-5 text-center text-3xl font-bold tracking-tight md:text-5xl">
              {selectedFaq === "general"
                ? "FAQ"
                : selectedFaq === "card"
                ? "Card FAQ"
                : "Individual FAQ"}
            </h2>
            <p className="mt-3 text-lg text-neutral-500  md:text-xl">
              Frequently asked questions about{" "}
              {selectedFaq === "general"
                ? "general topics"
                : selectedFaq === "card"
                ? "cards"
                : "individual services"}
              .
            </p>
          </div>

          <div className="mx-auto mt-8 grid max-w-xl divide-y divide-neutral-200">
            {/* General FAQ */}
            {selectedFaq === "general" && (
              <>
                <div className="py-5">
                  <details className="group">
                    <summary className="flex cursor-pointer list-none items-center text-black justify-between font-medium">
                      <span>How do I find the best businesses in my area?</span>
                      <span className="transition group-open:rotate-180">
                        <svg
                          fill="none"
                          height="24"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          viewBox="0 0 24 24"
                          width="24"
                        >
                          <path d="M6 9l6 6 6-6"></path>
                        </svg>
                      </span>
                    </summary>
                    <p className="group-open:animate-fadeIn mt-3 text-neutral-600">
                      simply enter your location and the type of service or
                      business you’re looking for in the search bar. You can
                      sort results by ratings, reviews, distance, and more to
                      find the top-rated options near you.
                    </p>
                  </details>
                </div>

                <div className="py-5 font-poppins">
                  <details className="group">
                    <summary className="flex cursor-pointer list-none text-black  items-center justify-between font-medium">
                      <span>
                        How can I submit a new business to the platform?
                      </span>
                      <span className="transition group-open:rotate-180">
                        <svg
                          fill="none"
                          height="24"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          viewBox="0 0 24 24"
                          width="24"
                        >
                          <path d="M6 9l6 6 6-6"></path>
                        </svg>
                      </span>
                    </summary>
                    <p className="group-open:animate-fadeIn mt-3 text-neutral-600">
                      If a business is not listed, you can submit it by going to
                      the "Add a Business" section and filling out the required
                      information, such as business name, location, and service
                      category. Our team will review and approve the listing
                      within 24-48 hours.
                    </p>
                  </details>
                </div>
                <div className="py-5 font-poppins">
                  <details className="group">
                    <summary className="flex cursor-pointer list-none items-center text-black  justify-between font-medium">
                      <span>What do the star ratings mean?</span>
                      <span className="transition group-open:rotate-180">
                        <svg
                          fill="none"
                          height="24"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          viewBox="0 0 24 24"
                          width="24"
                        >
                          <path d="M6 9l6 6 6-6"></path>
                        </svg>
                      </span>
                    </summary>
                    <p className="group-open:animate-fadeIn mt-3 text-neutral-600">
                      Star ratings are based on customer reviews. A 5-star
                      rating means the business or service has received
                      excellent feedback, while lower ratings suggest room for
                      improvement based on users’ experiences.
                    </p>
                  </details>
                </div>
                <div className="py-5 font-poppins">
                  <details className="group">
                    <summary className="flex cursor-pointer list-none text-black  items-center  justify-between font-medium">
                      <span>
                        Can I bookmark businesses I want to visit later?
                      </span>
                      <span className="transition group-open:rotate-180">
                        <svg
                          fill="none"
                          height="24"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          viewBox="0 0 24 24"
                          width="24"
                        >
                          <path d="M6 9l6 6 6-6"></path>
                        </svg>
                      </span>
                    </summary>
                    <p className="group-open:animate-fadeIn mt-3 text-neutral-600">
                      Yes! You can save businesses by clicking the "Save" button
                      on their listing. Saved businesses will be stored in your
                      account so you can access them later.
                    </p>
                  </details>
                </div>
              </>
            )}

            {/* Card FAQ */}
            {selectedFaq === "card" && (
              <>
                <div className="py-5 font-poppins">
                  <details className="group">
                    <summary className="flex cursor-pointer list-none text-black  items-center justify-between font-medium">
                      <span>
                        {" "}
                        How do I promote my business on the platform?
                      </span>
                      <span className="transition group-open:rotate-180">
                        <svg
                          fill="none"
                          height="24"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          viewBox="0 0 24 24"
                          width="24"
                        >
                          <path d="M6 9l6 6 6-6"></path>
                        </svg>
                      </span>
                    </summary>
                    <p className="group-open:animate-fadeIn mt-3 text-neutral-600">
                      Businesses can promote themselves by purchasing
                      advertising packages, which include features like
                      sponsored listings and targeted ads. These packages can
                      help boost visibility in search results and on the
                      homepage.
                    </p>
                  </details>
                </div>

                <div className="py-5 font-poppins">
                  <details className="group">
                    <summary className="flex cursor-pointer text-black list-none items-center justify-between font-medium">
                      <span>
                        What payment methods can businesses use for ads?
                      </span>
                      <span className="transition group-open:rotate-180">
                        <svg
                          fill="none"
                          height="24"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          viewBox="0 0 24 24"
                          width="24"
                        >
                          <path d="M6 9l6 6 6-6"></path>
                        </svg>
                      </span>
                    </summary>
                    <p className="group-open:animate-fadeIn mt-3 text-neutral-600">
                      We accept all major credit cards, including Visa,
                      MasterCard, and American Express, as well as PayPal for
                      businesses purchasing ad space or premium features.
                    </p>
                  </details>
                </div>

                <div className="py-5 font-poppins">
                  <details className="group">
                    <summary className="flex cursor-pointer text-black list-none items-center justify-between font-medium">
                      <span>
                        How does billing work for businesses using premium
                        features?
                      </span>
                      <span className="transition group-open:rotate-180">
                        <svg
                          fill="none"
                          height="24"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          viewBox="0 0 24 24"
                          width="24"
                        >
                          <path d="M6 9l6 6 6-6"></path>
                        </svg>
                      </span>
                    </summary>
                    <p className="group-open:animate-fadeIn mt-3 text-neutral-600">
                      Billing for premium features like ads or enhanced profiles
                      is handled on a monthly subscription basis. You will be
                      charged automatically at the beginning of each billing
                      cycle, and you can manage your subscription through your
                      business dashboard.
                    </p>
                  </details>
                </div>

                <div className="py-5 font-poppins">
                  <details className="group">
                    <summary className="flex cursor-pointer text-black list-none items-center justify-between font-medium">
                      <span>
                        Can I cancel my advertising subscription at any time?
                      </span>
                      <span className="transition group-open:rotate-180">
                        <svg
                          fill="none"
                          height="24"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          viewBox="0 0 24 24"
                          width="24"
                        >
                          <path d="M6 9l6 6 6-6"></path>
                        </svg>
                      </span>
                    </summary>
                    <p className="group-open:animate-fadeIn mt-3 text-neutral-600">
                      Yes, you can cancel your subscription at any time. Once
                      canceled, your premium features will remain active until
                      the end of your current billing cycle.
                    </p>
                  </details>
                </div>
              </>
            )}

            {/* Individual FAQ */}
            {selectedFaq === "individual" && (
              <>
                <div className="py-5 font-poppins text-black">
                  <details className="group ">
                    <summary className="flex  text-black cursor-pointer list-none items-center justify-between font-medium">
                      <span>
                        How do I leave a review for a business I visited?
                      </span>
                      <span className="transition group-open:rotate-180">
                        <svg
                          fill="none"
                          height="24"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          viewBox="0 0 24 24"
                          width="24"
                        >
                          <path d="M6 9l6 6 6-6"></path>
                        </svg>
                      </span>
                    </summary>
                    <p className="group-open:animate-fadeIn mt-3 text-neutral-600">
                      After visiting a business, go to their listing page, click
                      on the "Write a Review" button, and share your experience.
                      You can rate the business, leave comments, and even upload
                      photos.
                    </p>
                  </details>
                </div>

                <div className="py-5 text-black font-poppins">
                  <details className="group">
                    <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                      <span>
                        Can I follow other users to see their reviews?
                      </span>
                      <span className="transition group-open:rotate-180">
                        <svg
                          fill="none"
                          height="24"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          viewBox="0 0 24 24"
                          width="24"
                        >
                          <path d="M6 9l6 6 6-6"></path>
                        </svg>
                      </span>
                    </summary>
                    <p className="group-open:animate-fadeIn mt-3 text-neutral-600">
                      Yes, you can follow other users to see the reviews they
                      post. This is a great way to discover new businesses and
                      read reviews from people you trust.
                    </p>
                  </details>
                </div>

                <div className="py-5  text-black font-poppins">
                  <details className="group">
                    <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                      <span>
                        How do I report a fake or inappropriate review?
                      </span>
                      <span className="transition group-open:rotate-180">
                        <svg
                          fill="none"
                          height="24"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          viewBox="0 0 24 24"
                          width="24"
                        >
                          <path d="M6 9l6 6 6-6"></path>
                        </svg>
                      </span>
                    </summary>
                    <p className="group-open:animate-fadeIn mt-3 text-neutral-600">
                      If you see a review that you believe is fake or violates
                      our community guidelines, click on the "Report" button
                      below the review. Our moderation team will investigate and
                      take action if necessary.
                    </p>
                  </details>
                </div>

                <div className="py-5 text-black font-poppins">
                  <details className="group">
                    <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                      <span>
                        Can I edit my profile and change my preferences?
                      </span>
                      <span className="transition group-open:rotate-180">
                        <svg
                          fill="none"
                          height="24"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          viewBox="0 0 24 24"
                          width="24"
                        >
                          <path d="M6 9l6 6 6-6"></path>
                        </svg>
                      </span>
                    </summary>
                    <p className="group-open:animate-fadeIn mt-3 text-neutral-600">
                      Absolutely. You can customize your profile, update your
                      personal details, and manage your notification preferences
                      by visiting the "Account Settings" section of your
                      profile.
                    </p>
                  </details>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Section 3 */}
      <section className="flex overflow-hidden flex-col justify-center items-center px-64 py-20 max-md:px-5">
        <h2 className=" font-pacifico flex-1 text-3xl leading-7 text-center text-slate-500 max-md:max-w-full mb-4">
          Didn't find the answer to your question?
        </h2>
        <p className="font-poppins text-xl leading-normal max-md:max-w-full mb-6">
          Contact us and we’ll get back to you as soon as possible.
        </p>
        <button className="px-6 py-3.5 text-lg leading-tight text-white  bg-amber-500 rounded-full">
          Contact Us
        </button>
      </section>
    </main>
  );
};

export default Faq;
