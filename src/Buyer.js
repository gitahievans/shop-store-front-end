import React from "react";

function Buyer({ name, location, phone, email }) {
  return (
    <div className="buyer">
      <div className="buyer-details">
        <h4>Name: {name}</h4>
        <h4>Location: {location}</h4>
        <h4>
          Contact:
          <ul>
            <li>Mail: {email}</li>
            <li>Phone: {phone}</li>
          </ul>
        </h4>
      </div>
    </div>
  );
}

export default Buyer;
