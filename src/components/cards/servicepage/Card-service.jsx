// prop sample
/*
const props = {
  title : 'Register,
  style: btnstyle,
}

*/

import { Link } from "react-router-dom";

let CardService = ({ imgUrl }) => {
  return (
    <>
      <div>
        <Link
          to="/productListingpage"
          className="group relative block bg-black rounded-lg overflow-hidden"
        >
          <img
            alt=""
            src={imgUrl}
            className="absolute inset-0 h-full w-full  object-cover opacity-75 transition-opacity group-hover:opacity-50"
          />

          <div className="relative p-4 sm:p-6 lg:p-8">
            <p className="text-sm font-medium uppercase tracking-widest text-pink-500">
              Developer
            </p>

            <p className="text-xl font-bold text-white sm:text-2xl">
              Tony Wayne
            </p>

            <div className="mt-32 sm:mt-48 lg:mt-64">
              <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                <p className="text-sm text-white">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Omnis perferendis hic asperiores quibusdam quidem voluptates
                  doloremque reiciendis nostrum harum. Repudiandae?
                </p>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};
export default CardService;
