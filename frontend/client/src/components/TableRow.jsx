import React from "react";

function TableRow({ index, crypto }) {
  return (
      <tr key={index} className="hover">
        <td>{index}</td>
        <td>
          {crypto.name}({crypto.symbol})
        </td>
        <td>
          ${crypto.quote.USD.price > 1 ? crypto.quote.USD.price.toFixed(4) : crypto.quote.USD.price.toFixed(11)}
        </td>
        <td>{crypto.cmc_rank}</td>
      </tr>
  );
}

export default TableRow;
