import React from "react";

function Store({ name, location }) {
  return (
    <div>
      <h3>Store: {name}</h3>
      <h4>location: {location}</h4>
    </div>
  );
}

export default Store;
