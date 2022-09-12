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
      <div className="main-order-container">
        <div className="orders-container">
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
        <div className="order-poster">
          <form id="form">
            <label>Add item name</label>
            <input
              className="item-input"
              type="text"
              placeholder="Enter item name"
            />
            <label>Add item price</label>
            <input
              className="item-input"
              type="text"
              placeholder="Enter item price"
            />
            <label>Add item description</label>
            <input
              className="item-input"
              type="text"
              placeholder="Enter item description"
            />
            <button className="post-button">Post Item</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default OrderList;
