import React, { useState } from "react";
const PaginatedProductList = ({
  itemsPerPage,
  totalItems,
  paginate,
  currentPage,
}) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="mt-6 ">
      <ul className="pagination flex justify-center space-x-2 ">
        {pageNumbers.map((number) => (
          <li
            key={number}
            className={`page-item ${currentPage === number ? "active" : ""}`}
          >
            <button
              onClick={() => paginate(number)}
              className={`page-link px-3 md:px-4 py-2  rounded-full border ${
                currentPage === number
                  ? "bg-primary-500 text-white"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              } transition-colors duration-300 ease-in-out border-gray-300`}
            >
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default PaginatedProductList;
