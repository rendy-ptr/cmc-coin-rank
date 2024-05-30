import React from "react";

function Pagination({ itemsPerPage, totalItems, paginate }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="flex justify-center items-cente mt-4">
      <div className="join">
        {pageNumbers.map((number, index) => (
          <button key={index} className="join-item btn" onClick={() => paginate(number)}>{number}</button>
        ))}
      </div>
    </div>
  );
}

export default Pagination;
