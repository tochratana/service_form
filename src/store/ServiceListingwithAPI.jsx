import { useEffect, useState } from "react";
import { getAllProduct } from "./getAllProduct";
import { ProductCardClone } from "./CardClone";
import Lottie from "lottie-react";
import Loading from "../components/animations/loading.json";
import { SearchBar } from "../components/seaction/searchpage/SearchBar";
import LogoGP from "../assets/img/LogoCP1.png";
import PaginatedProductList from "./Pagenation";

export function TestAPI() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState(""); // Store the selected category
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);

  // Fetch products based on selected category
  const fetchAllProduct = async (category) => {
    setLoading(true);
    const product = await getAllProduct(category); // Fetch products based on selected category
    setData(product);
    setLoading(false);
  };

  // Effect to fetch products when selectedCategory changes
  useEffect(() => {
    fetchAllProduct(selectedCategory); // Fetch products when selectedCategory changes
  }, [selectedCategory]);

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProducts = data.slice(indexOfFirstItem, indexOfLastItem);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <div className="max-w-screen-xl min-w-80 mx-auto p-5 md:p-0">
        <div className="flex flex-col sticky top-[55px] z-10 justify-center md:justify-start">
          <SearchBar onCategorySelect={setSelectedCategory} />{" "}
          {/* Pass category to setSelectedCategory */}
        </div>

        <div className="grid gap-10">
          {loading && (
            <div className="text-center">
              <Lottie
                animationData={Loading}
                className="h-[300px]"
                loop={true}
              />
            </div>
          )}
          {!loading && (
            <>
              {currentProducts.map((product) => (
                <ProductCardClone
                  key={product.id}
                  title={product.name}
                  category={product.category}
                  day={product.working_days}
                  price={product.price}
                  description={product.description}
                  id={product.id}
                  images={product?.image ?? LogoGP}
                />
              ))}

              {/* Pagination Component */}
              <PaginatedProductList
                itemsPerPage={itemsPerPage}
                totalItems={data.length}
                paginate={paginate}
                currentPage={currentPage}
              />
            </>
          )}
        </div>
      </div>
    </>
  );
}
