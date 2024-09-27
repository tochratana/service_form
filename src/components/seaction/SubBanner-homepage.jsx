const Images = [
  "https://seismic.com/wp-content/uploads/2022/03/How-to-deliver-quality-customer-service-hero@1x.webp",
  "https://www.purshology.com/wp-content/uploads/2022/07/06-SA-US-Header-Customer-Service-vs-Customer-Support-Whats-the-Difference_Tile.png",
  "https://knowledge.hubspot.com/hubfs/customerserviceideas%20%281%29.png",
];

let HeroBanner = () => {
  return (
    <>
      {/* sub banner */}
      <section className="grid grid-cols-1 gap-20 md:gap-0 md:grid-cols-2 place-content-center mb-10  ">
        {/* why choose us */}
        <div className="grid grid-cols-1 gap-4 px-3 ">
          <div className="flex flex-col gap-4 ">
            <p className="font-bold  text-header-2 font-pacifico">
              Why Choose Us?
            </p>
            <p className="font-poppins">
              {" "}
              At Easy Found, we provide trusted local services, ensuring you
              find the best options tailored to your needs, all while supporting
              the community in Cambodia.
            </p>
          </div>
          {/* details row-1 */}
          <div className="grid grid-cols-3 gap-4  items-center justify-center">
            {/* circle */}
            <div className="flex justify-center ">
              <div className=" w-8 h-8 md:w-16 md:h-16 rounded-full  bg-amber-500  flex justify-center items-center">
                <i class="fa-solid fa-check"></i>
              </div>
            </div>
            {/* text-details-description */}
            <div className="col-span-2 grid grid-rows-2 ">
              <div className="relative  ">
                <p className="absolute bottom-0 left-0 mb-2 ml-2 font-bold text-lg md:static md:mb-0 md:ml-0">
                  Tailored Services Listing
                </p>
              </div>
              <div>
                <p className=" font-poppins">
                  We meticulously vet and select local services, ensuring you
                  have access to only the best services options in your area.
                </p>
              </div>
            </div>
          </div>
          {/* details row-2*/}
          <div className="grid grid-cols-3 gap-4  items-center justify-centerbg-orange-400 ">
            {/* circle */}
            <div className="flex justify-center">
              <div className=" w-8 h-8 md:w-16 md:h-16 rounded-full  bg-[#3b82f6] flex justify-center items-center">
                <i class="fa-solid fa-check"></i>
              </div>
            </div>
            {/* text-details-description */}
            <div className="col-span-2 grid grid-rows-2">
              <div className="relative  ">
                <p className="absolute bottom-0 left-0 mb-2 ml-2 font-bold text-lg md:static md:mb-0 md:ml-0">
                  User Reviews
                </p>
              </div>
              <div>
                <p className=" font-poppins ">
                  Our platform features authentic reviews from real customers,
                  helping you make informed decisions based on their
                  experiences.
                </p>
              </div>
            </div>
          </div>
          {/* details row-3 */}
          <div className="grid grid-cols-3 gap-4  items-center justify-center ">
            {/* circle */}
            <div className="flex justify-center">
              <div className=" w-8 h-8 md:w-16 md:h-16 rounded-full  bg-[#EB8921] flex justify-center items-center">
                <i class="fa-solid fa-check"></i>
              </div>
            </div>
            {/* text-details-description */}
            <div className="col-span-2 grid grid-rows-2">
              <div className="relative  ">
                <p className="absolute bottom-0 left-0 mb-2 ml-2 font-bold text-lg md:static md:mb-0 md:ml-0">
                  Community Support
                </p>
              </div>

              <div>
                <p className=" font-poppins">
                  By choosing Easy Found, you’re not just finding services;
                  you’re supporting local businesses and contributing to the
                  growth of your community in Cambodia.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* grid templete */}
        <div className="grid grid-rows-4 grid-cols-4 gap-4 ">
          <div className="grid rounded-xl overflow-hidden col-span-2 row-span-2 bg-amber-400">
            <img
              src={Images[2]}
              className="w-full h-full object-cover"
              alt=""
            />
          </div>
          <div className="grid col-span-2 rounded-xl overflow-hidden row-span-2 bg-amber-400">
            <img
              src={Images[1]}
              className="w-full h-full object-cover"
              alt=""
            />
          </div>
          <div className="grid rounded-xl overflow-hidden col-span-4 row-span-2 bg-amber-400">
            <img
              src={Images[0]}
              className="w-full h-full object-cover"
              alt=""
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroBanner;
