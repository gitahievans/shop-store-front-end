import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <div>
        <Link to="/">
          <h2>Home</h2>
        </Link>
        <Link to="/stores">
          <h2>Store</h2>
        </Link>
        <Link to="/buyers">
          <h2>Buyers</h2>
        </Link>
        <Link to="/orders">
          <h2>Orders</h2>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
