import React from "react";

function Order({ name, price, description, ordered, delivery }) {
  return (
    <div>
      <h3>Name: {name}</h3>
      <h3>Price: {price}</h3>
      <h3>Description: {description}</h3>
      <h3>Date ordred: {ordered}</h3>
      <h3>Delivery date: {delivery}</h3>
      <button>Remove Order</button>
    </div>
  );
}

export default Order;
