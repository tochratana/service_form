import Lottie from "lottie-react";
import ImageError from "../../components/animations/Error.json";
export function ErrorPage() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 grid-cols-1 md:grid-cols-2 h-screen">
        {/* image */}
        <div className="grid place-content-center">
          <Lottie animationData={ImageError} className="h-[400px]"></Lottie>
        </div>
        {/* text  */}
        <div className="grid place-content-center  ">
          <div className="grid place-content-center lg:place-content-start  ">
            <h1 className="max-w-2xl mb-4 text-xl font-extrabold tracking-tight leading-none md:text-4xl xl:text-4xl dark:text-black">
              Opp!
            </h1>
          </div>
          <div className="grid place-content-center lg:place-content-start ">
            <h1 className="max-w-2xl mb-4 text-xl font-extrabold tracking-tight leading-none md:text-4xl xl:text-4xl dark:text-black">
              Page Not Found
            </h1>
          </div>
          <div className="grid place-content-center lg:place-content-start ">
            <p className="max-w-2xl line-clamp-2 mb-6 font-light text-black lg:mb-8 md:text-lg lg:text-lg dark:text-black">
              web page your computer is requesting, or trying to access, using
              the URL you provided, cannot be found in the server where the
              website is hosted.
            </p>
          </div>
          {/* <a
            href=""
            className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-500 hover:bg-primary-600 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
          >
            Please Reload
          </a> */}
        </div>
      </div>
    </section>
  );
}
