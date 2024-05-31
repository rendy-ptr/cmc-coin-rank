import React from "react";
import TableRow from "./TableRow";

function Table({ dataCryptoPerPage, currentPage, itemsPerPage }) {
  const indexOfFirstItem = (currentPage - 1) * itemsPerPage;
  console.log("index of first item", indexOfFirstItem  + 1)
  return (
    <div className="overflow-x-auto">
      <table className="table w-[1050px] mx-auto">
        {/* head */}
        <thead>
          <tr>
            <th> No </th>
            <th> Name </th>
            <th> Price USD</th>
            <th> CMC Rank </th>
            <th> Action </th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {dataCryptoPerPage.map((crypto, index) => (
            <TableRow
              key={index}
              index={indexOfFirstItem + index + 1}
              crypto={crypto}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
