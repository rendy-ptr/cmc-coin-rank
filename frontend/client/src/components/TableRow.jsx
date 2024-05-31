import React from "react";
import { useNavigate } from "react-router-dom";

function TableRow({ index, crypto }) {
  const navigate = useNavigate();

  const detailClick = () => {
    navigate(`/detail/${crypto.slug}`);
    // console.log(crypto);
  }

  return (
    <tr key={index} className="hover">
      <td>{index}</td>
      <td>
        {crypto.name}({crypto.symbol})
      </td>
      <td>
        $
        {crypto.quote.USD.price > 1
          ? crypto.quote.USD.price.toFixed(4)
          : crypto.quote.USD.price.toFixed(11)}
      </td>
      <td>{crypto.cmc_rank}</td>
      <td>
        <button className="btn btn-sm btn-neutral" onClick={detailClick}>See Detail</button>
      </td>
    </tr>
  );
}

export default TableRow;
