import { useState } from "react";

/* eslint-disable react/prop-types */
const Pagination = ({ newsArr, itemsPerPage, onPageChange }) => {
  // console.log(props.newsArr);
  // console.log(props.newsArr.length);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(newsArr.length / itemsPerPage);
  console.log(totalPages);
  let NumberofButtons = totalPages;
  console.log(NumberofButtons);

  const handleNext = () => {
    if (currentPage < totalPages) {
      const newPage = currentPage + 1;
      setCurrentPage(newPage);
      onPageChange(newPage);
    }
  };

  const handlePrev = () => {
    if (currentPage > 1) {
      const newPage = currentPage - 1;
      setCurrentPage(newPage);
      onPageChange(newPage);
    }
  };

  let btnArr = [];
  for (let i = 1; i <= NumberofButtons; i++) {
    btnArr.push(i);
  }
  console.log(btnArr);

  const handleNumberClick = (pageNum) => {
    // console.log(ele);
    setCurrentPage(pageNum);
    onPageChange(pageNum);
  };

  return (
    <div>
      <nav aria-label="Page navigation example">
        <ul className="inline-flex -space-x-px text-sm">
          <li onClick={handlePrev}>
            <button
            disabled = {currentPage ===0}
            className={`flex items-center justify-center px-3 h-8 leading-tight border border-gray-300 rounded-s-lg ${
                currentPage === 1 ? "text-gray-400 bg-gray-200 cursor-not-allowed"
                  : "text-gray-500 bg-white hover:bg-gray-100 hover:text-gray-700"}`}
             
            >
              Previous
            </button>
          </li>
          {btnArr.map((nums, i) => {
            return (
              <li key={i} onClick={() => handleNumberClick(nums)}>
                <button
                  className={`flex items-center justify-center px-3 h-8 leading-tight border border-gray-300 ${
                    nums === currentPage
                      ? "text-white bg-black"
                      : "text-gray-500 bg-white hover:bg-gray-100 hover:text-gray-700"
                  }`}
                >
                  {nums}
                </button>
              </li>
            );
          })}
          <li onClick={handleNext}>
            <button
              disabled={currentPage === totalPages}
              className={`flex items-center justify-center px-3 h-8 leading-tight border border-gray-300 rounded-e-lg ${
                currentPage === totalPages
                  ? "text-gray-400 bg-gray-200 cursor-not-allowed"
                  : "text-gray-500 bg-white hover:bg-gray-100 hover:text-gray-700"
              }`}
            >
              Next
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
