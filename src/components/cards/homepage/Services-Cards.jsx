import React from "react";

const CardShowService = ({ imgUrl, tagList, setSelectedCategory }) => {
  const handleClick = () => {
    setSelectedCategory(tagList); // Set selected category directly here
  };

  return (
    <div>
      <div
        onClick={handleClick} // Call handleClick when clicked
        className="relative overflow-hidden rounded-3xl cursor-pointer text-2xl font-bold bg-amber-400 grid grid-rows-subgrid row-span-1"
      >
        <div className="z-10 absolute w-full h-full peer"></div>
        <div className="absolute peer-hover:-top-20 peer-hover:-left-16 peer-hover:w-[140%] peer-hover:h-[140%] -top-32 -left-16 w-32 h-44 rounded-full bg-amber-300 transition-all duration-500"></div>
        <div className="absolute flex text-xl text-center items-end justify-end peer-hover:right-0 peer-hover:rounded-b-none peer-hover:bottom-0 peer-hover:items-center peer-hover:justify-center peer-hover:w-full peer-hover:h-full -bottom-32 -right-16 w-36 h-44 rounded-full bg-amber-300 transition-all duration-500">
          {tagList} {/* Ensure this is correctly formatted */}
          <br />
        </div>
        <div className="w-full h-full">
          <img src={imgUrl} className="h-[300px] object-cover" alt="" />
        </div>
      </div>
    </div>
  );
};

export default CardShowService;
