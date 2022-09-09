import StoreList from "./StoreList";
import OrderList from "./OrderList";
import BuyersList from "./BuyerList";
import React, { useState, useEffect } from "react";

function App() {
  const [storeItems, setStoreItems] = useState([]);
  const [orderList, setOrderList] = useState([]);
  const [buyerList, setBuyerList] = useState([]);

  return (
    <>
      <StoreList />
      <OrderList />
      <BuyersList />
    </>
  );
}

export default App;
