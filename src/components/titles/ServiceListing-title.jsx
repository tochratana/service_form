import { HiOutlineMapPin } from "react-icons/hi2";
import { HiOutlineArrowUpOnSquare } from "react-icons/hi2";

import { HiOutlineHeart } from "react-icons/hi2";
import { RatingBar, RatingReview } from "../cards/servicelisting/RatingStar";

let ServiceListingTitle = ({ name }) => {
  return (
    <>
      <div className="font-poppins grid   grid-cols-1 lg:grid-cols-2 mb-5  ">
        <div className="grid grid-cols-1">
          <h3 className="font-bold mb-3 text-[24px] lg:text[34px]">
            {name || "default name"}
          </h3>
          <div className="grid grid-cols-3 place-content-center gap-3  text-[10px] md:text-subheader">
            <RatingReview />
            <div className="flex row items-center gap-1 ">
              <HiOutlineMapPin />
              <span>N/A</span>
            </div>
            <span>Cambodia, Khmer</span>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 ">
          <div className="flex items-end  justify-center gap-1 ">
            <div className="flex items-center justify-center">
              <HiOutlineArrowUpOnSquare />
              <span>Share</span>
            </div>
          </div>

          <div className="flex items-end  justify-center gap-1 ">
            <div className="flex items-center justify-center">
              <HiOutlineHeart />
              <span>Save</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ServiceListingTitle;
