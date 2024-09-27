import Navbar from "../components/navbar/Navbar";
import UnstickyNavbar from "../components/navbar/UnstickyNavbar";
import {
  SearchBar,
  SearchLocation,
  TagComponent,
} from "../components/seaction/searchpage/SearchBar";
import { SearchCard } from "../components/seaction/searchpage/SearchCard";

// Main SearchPage component
export const SearchPage = () => {
  const count = 10;
  const indexList = Array.from({ length: count }, (_, i) => i + 1);

  return (
    <>
      <div className="flex flex-row mx-auto items-center justify-around">
        <SearchBar />
        <SearchLocation />
      </div>
      <div className="mt-16">
        <div className="flex justify-between max-w-[78%] mx-auto">
          <h3 className="font-bold text-[24px]">Your Browser History</h3>
          <span className="text-red-600 font-semibold underline">Clear All</span>
        </div>
        <div className="flex flex-wrap justify-around max-w-[78%] mx-auto mt-12">
          {indexList.map((el) => (
            <div key={el}>
              <TagComponent />
            </div>
          ))}
        </div>
      </div>
      <div className="mt-20">
        <h3 className="font-bold text-[24px] ml-44">Browse by Category</h3>
        <div className="grid grid-cols-5 gap-2 max-w-[79%] mx-auto my-10">
          {indexList.map((el) => (
            <div key={el}>
              <SearchCard />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SearchPage;
