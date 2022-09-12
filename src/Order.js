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
  const handleDelete = () => {
    fetch(`https://localhost:9292/${orderId}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => onDeleteOrder(order));
  };

  return (
    <div className="order">
      <h3>Name: {name}</h3>
      <h3>Price: {price}</h3>
      <h3>Description: {description}</h3>
      <h3>Date ordred: {ordered}</h3>
      <h3>Delivery date: {delivery}</h3>
      <button onClick={onDeleteOrder}>Remove Order</button>
    </div>
  );
}

export default Order;
