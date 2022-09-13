import StoreList from "./StoreList";
import OrderList from "./OrderList";
import BuyersList from "./BuyersList";
import Home from "./Home";
import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import { Route, Routes } from "react-router-dom";

function App() {
  const [allItems, setAllItems] = useState([]);
  const [storeItems, setStoreItems] = useState([]);

  useEffect(() => {
    fetch("https://store-track-app.herokuapp.com/store_track")
      .then((res) => res.json())
      .then((appData) => setAllItems(appData));
  }, []);
  // console.log(allItems);

  let stores = allItems.map((item) => {
    return item;
  });

  // let unique = [...new Set(buyers)];
  // console.log(unique);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}>
          Home
        </Route>
        <Route path="/stores" element={<StoreList stores={stores} />}></Route>
        <Route path="/buyers" element={<BuyersList />}></Route>
        <Route path="/orders" element={<OrderList />}></Route>
      </Routes>
    </>
  );
}

export default App;
