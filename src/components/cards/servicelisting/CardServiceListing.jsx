import { HiOutlineMapPin } from "react-icons/hi2";
import { HiOutlineArrowUpOnSquare } from "react-icons/hi2";
import { HiOutlineHeart } from "react-icons/hi2";
import { HiOutlineSquares2X2 } from "react-icons/hi2";
import { CarouselImg } from "./CarouselImg";
import { RatingBar, RatingReview, RatingStars } from "./RatingStar";
import ServiceListingTitle from "../../titles/ServiceListing-title";
import { ProductCard } from "../../Product-template";
import { Link } from "react-router-dom";
const count = 3;
const page = "/detailsListingpage"; // replace with actual page route  // "/productListingpage"; // replace with actual page route  // "/detailsListingpage"; // replace with actual page route  // "/searchpage"; // replace with actual page route  // "/login"; // replace with actual page route  // "/signup"; // replace with actual page route  // "/dashboard"; // replace with actual page route  // "/admin/dashboard"; // replace with actual page route  // "/
const indexList = Array.from({ length: count }, (_, i) => i + 1);
export function CardServiceListing() {
  return (
    <>
      <section>
        {indexList.map((el) => (
          <div key={el}>
            <div className="">
              <ServiceListingTitle />
              <CarouselImg />
              <ProductCard />
              <div className="py-10 hidden lg:grid mt-5">
                <RatingReview />
                <RatingStars />
                <Link
                  to={page}
                  className="border-black border-2 rounded-lg p-2 w-[100px] text-center mt-4"
                >
                  Go to
                </Link>
              </div>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}
