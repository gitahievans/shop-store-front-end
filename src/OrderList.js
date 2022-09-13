import Order from "./Order";
import React, { useEffect, useState } from "react";

function OrderList() {
  const [orders, setOrders] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [buyer_id, setBuyer_id] = useState("");
  const [store_id, setStore_id] = useState("");
  const [date_ordered, setDate_ordered] = useState("");
  const [delivery_date, setDelivery_date] = useState("");

  useEffect(() => {
    fetch("https://store-track-app.herokuapp.com/orders")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    fetch("https://store-track-app.herokuapp.com/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        price: price,
        description: description,
        buyer_id: buyer_id,
        store_id: store_id,
        date_ordered: date_ordered,
        delivery_date: delivery_date,
      }),
    })
      .then((response) => response.json())
      .then((newOrder) => console.log(newOrder));
  }

  const handleDeleteOrder = (deletedOrder) => {
    const updatedList = orders.filter((order) => order.id !== deletedOrder.id);
    setOrders(updatedList);
  };

  return (
    <>
      <div className="main-order-container">
        <div className="orders-container">
          {orders.map((order) => {
            return (
              <div>
                <Order
                  order={order}
                  key={order.id}
                  orderId={order.id}
                  name={order.name}
                  price={order.price}
                  description={order.description}
                  ordered={order.date_ordered}
                  delivery={order.expected_delivery}
                  onDeleteOrder={handleDeleteOrder}
                />
              </div>
            );
          })}
        </div>
        <div className="order-poster">
          <form id="form">
            <label>Add item's name</label>
            <input
              className="item-input"
              type="text"
              placeholder="Enter item name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label>Add item's price</label>
            <input
              className="item-input"
              type="text"
              placeholder="Enter item price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
            <label>Add item's description</label>
            <input
              className="item-input"
              type="text"
              placeholder="Enter item description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <label>Add item's buyer_id</label>
            <input
              className="item-input"
              type="number"
              placeholder="Enter item buyer_id"
              value={buyer_id}
              onChange={(e) => setBuyer_id(e.target.value)}
            />
            <label>Add item's store_id</label>
            <input
              className="item-input"
              type="number"
              placeholder="Enter item store_id"
              value={store_id}
              onChange={(e) => setStore_id(e.target.value)}
            />
            <label>Date ordered</label>
            <input
              className="item-input"
              type="text"
              placeholder="Enter date ordered"
              value={date_ordered}
              onChange={(e) => setDate_ordered(e.target.value)}
            />
            <label>Expected delivery</label>
            <input
              className="item-input"
              type="text"
              placeholder="Enter delivery date"
              value={delivery_date}
              onChange={(e) => setDelivery_date(e.target.value)}
            />
            <button className="post-button" onClick={handleSubmit}>
              Post Item
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default OrderList;
