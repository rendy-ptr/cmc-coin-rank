import React from "react";
import { useParams } from "react-router-dom";

function DetailTable({ dataCrypto }) {
  const { cryptoSlug } = useParams();
  // console.log(dataCrypto)

  const selectedCrypto = dataCrypto.find(
    (crypto) => crypto.slug === cryptoSlug
  );

  // console.log(selectedCrypto);

  if (!selectedCrypto) return null;

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table w-[1050px] mx-auto">
          {/* head */}
          <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Price</th>
              <th>Volume Change 24h</th>
              <th>Volume 24h</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr className="hover">
              <th>1</th>
              <td>{selectedCrypto.name}({selectedCrypto.symbol})</td>
              <td>
                $
                {selectedCrypto.quote.USD.price > 1
                  ? selectedCrypto.quote.USD.price.toFixed(4)
                  : selectedCrypto.quote.USD.price.toFixed(11)}
              </td>
              {selectedCrypto.quote.USD.volume_change_24h < 0 ? (
                <td className="text-red-500">{selectedCrypto.quote.USD.volume_change_24h}</td>
              ) : (
                <td className="text-green-500">{selectedCrypto.quote.USD.volume_change_24h}</td>
              )}
              <td>${selectedCrypto.quote.USD.volume_24h}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default DetailTable;
