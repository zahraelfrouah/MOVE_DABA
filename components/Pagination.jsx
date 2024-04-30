import React from "react";

const Pagination = ({
  currentPage,
  itemsPerPage,
  totalItems,
  paginate,
  buttonClassName,
  activeButtonClassName,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  const maxPagesToShow = 5; // Number of pages to show in the slider

  // Calculate the range of page numbers to display based on the current page
  const startPage =
    currentPage <= Math.floor(maxPagesToShow / 2)
      ? 1
      : Math.min(
          currentPage - Math.floor(maxPagesToShow / 2),
          pageNumbers.length - maxPagesToShow + 1
        );
  const endPage = Math.min(startPage + maxPagesToShow - 1, pageNumbers.length);

  return (
    <div className="flex justify-center mt-4">
      <button
        onClick={() => paginate(currentPage - 1)}
        disabled={currentPage === 1}
        className={`px-4 py-2 mx-1 font-semibold text-gray-800 bg-gray-200 rounded-full focus:outline-none ${buttonClassName}`}
      >
        {"<"}
      </button>
      <button
        onClick={() => paginate(currentPage + 1)}
        disabled={currentPage === pageNumbers.length}
        className={`px-4 py-2 mx-1 font-semibold text-gray-800 bg-gray-200 rounded-full focus:outline-none ${buttonClassName}`}
      >
        {`${currentPage}/${pageNumbers.length}`}{" "}
      </button>
      <button
        onClick={() => paginate(currentPage + 1)}
        disabled={currentPage === pageNumbers.length}
        className={`px-4 py-2 mx-1 font-semibold text-gray-800 bg-gray-200 rounded-full focus:outline-none ${buttonClassName}`}
      >
        {">"}
      </button>
    </div>
  );
};

export default Pagination;
