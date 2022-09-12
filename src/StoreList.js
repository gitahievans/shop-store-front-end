import Store from "./Store";
import React from "react";

function StoreList({ stores }) {
  return (
    <div className="stores-container">
      {stores.map((store) => {
        return (
          <Store key={store.id} name={store.name} location={store.location} />
        );
      })}
    </div>
  );
}

export default StoreList;
