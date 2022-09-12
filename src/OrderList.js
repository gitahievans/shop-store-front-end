import Order from "./Order";
import React, { useEffect, useState } from "react";

function OrderList() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9292/orders")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);

  return (
    <>
      <div>
        {orders.map((order) => {
          return (
            <div>
              <Order
                key={order.id}
                name={order.name}
                price={order.price}
                description={order.description}
                ordered={order.date_ordered}
                delivery={order.expected_delivery}
              />
            </div>
          );
        })}
      </div>
      <div>
        <button>Add New Order</button>
      </div>
    </>
  );
}

export default OrderList;
