import React from "react";

function Store({ name, location }) {
  return (
    <div>
      <h3 className="store-name-tag">
        Store: <span className="store-name">{name}</span>
      </h3>
      <h4 className="store-location-tag">
        Location: <span className="store-location">{location}</span>
      </h4>
    </div>
  );
}

export default Store;
