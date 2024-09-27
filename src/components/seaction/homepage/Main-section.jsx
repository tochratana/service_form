import SubBanner from "../SubBanner-homepage";
import CardShowTrending from "../../cards/homepage/Card-show-trending";
let MainSection = () => {
  return (
    <div>
      <main className=" px-[30px] md:px-[100px] ">
        {/* hero banner */}
        <section className=" mt-10 md:mt-0 grid grid-cols-1 md:grid-cols-2 md:p-3 md:gap-4">
          <div className=" flex flex-col justify-center gap-5 ">
            <div className="flex gap-3">
              <i className="fa-solid fa-gears text-xl"></i>
              <p>Service listing website</p>
            </div>
            <div>
              <h1 className="font-bold text-5xl">
                Find your needed <br /> services Today
              </h1>
            </div>
            <div>
              <p>
                Are you ready for searching your favorite services today? you
                are on a right place. <br /> welcome to service listing website
              </p>
            </div>
            {/* show contact people */}
            <div>
              <div className="">
                <div class="flex -space-x-4 rtl:space-x-reverse  w-auto ">
                  <img
                    class="w-10 h-10 border-2 object-cover border-white rounded-full dark:border-gray-800"
                    src="https://www.allprodad.com/wp-content/uploads/2021/03/05-12-21-happy-people.jpg"
                    alt=""
                  />
                  <img
                    class="w-10 h-10 border-2  object-cover border-white rounded-full dark:border-gray-800"
                    src="https://www.allprodad.com/wp-content/uploads/2021/03/05-12-21-happy-people.jpg"
                    alt=""
                  />
                  <img
                    class="w-10 h-10 border-2 object-cover border-white rounded-full dark:border-gray-800"
                    src="https://www.allprodad.com/wp-content/uploads/2021/03/05-12-21-happy-people.jpg"
                    alt=""
                  />
                  <a
                    class="flex items-center justify-center w-10 h-10 text-xs font-medium text-white bg-gray-700 border-2 border-white rounded-full hover:bg-gray-600 dark:border-gray-800"
                    href="#"
                  >
                    +99
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* image  */}
          <div className="">
            <img
              className=" grid place-content-center"
              src={heroBannerIm}
              alt=""
            />
          </div>
        </section>
        <section>
          <SubBanner />
        </section>
        {/* card  */}
        <section>
          <CardShowTrending />
        </section>
      </main>
    </div>
  );
};

export default MainSection;
