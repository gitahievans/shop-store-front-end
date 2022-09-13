import React from "react";

function Order({
  order,
  name,
  price,
  description,
  ordered,
  delivery,
  onDeleteOrder,
  orderId,
}) {
  function handleDelete() {
    fetch(`https://store-track-app.herokuapp.com/orders/${orderId}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => onDeleteOrder(order));
  }

  return (
    <div className="order">
      <h3>Name: {name}</h3>
      <h3>Price: {price}</h3>
      <h3>Description: {description}</h3>
      <h3>Date ordred: {ordered}</h3>
      <h3>Delivery date: {delivery}</h3>
      <button onClick={() => handleDelete()}>Remove Order</button>
    </div>
  );
}

export default Order;
