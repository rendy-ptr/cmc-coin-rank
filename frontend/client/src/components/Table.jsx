import React from "react";
import TableRow from "./TableRow";

function Table({ dataCrypto, currentPage, itemsPerPage }) {
  const indexOfFirstItem = (currentPage - 1) * itemsPerPage;
  // console.log("indexOfFirstItem", indexOfFirstItem);
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
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {dataCrypto.slice(0, 15).map((crypto, index) => (
            <TableRow key={index} index={indexOfFirstItem + index + 1} crypto={crypto} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
