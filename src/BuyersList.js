import Buyer from "./Buyer";
import React, { useEffect, useState } from "react";

function BuyersList() {
  const [buyers, setBuyers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9292/buyers")
      .then((res) => res.json())
      .then((data) => setBuyers(data));
  }, []);

  return (
    <div>
      {buyers.map((buyer) => {
        return (
          <Buyer
            key={buyer.id}
            name={buyer.name}
            location={buyer.location}
            email={buyer.email}
            phone={buyer.phone}
          />
        );
      })}
    </div>
  );
}
export default BuyersList;

// console.log(buyers);

// let buyer = [];

// Object.keys(buyers).forEach((key) => {
//   buyer = buyer.concat(
//     buyers[key].map((item) => {
//       return (
//         <Buyer
//           key={item.id}
//           name={item.name}
//           location={item.location}
//           phone={item.phone_number}
//           email={item.email}
//         />
//       );
//     })
//   );
// });
