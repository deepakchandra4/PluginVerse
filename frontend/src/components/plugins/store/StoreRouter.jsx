import React from "react";
import { BrowserRouter, Link, Navigate, Route, Routes } from "react-router-dom";
import AddItem from "./AddItem";
import BrowseItem from "./BrowseItem";
import ManageItem from "./ManageItem";
import Navbar from "./Navbar";
import { StoreProvider } from "./StoreContext";
import Cart from "./Cart";

const StoreRouter = () => {
  return (
    <BrowserRouter>
      <StoreProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Navigate to="/additem" />} />
          <Route path="additem" element={<AddItem />} />
          <Route path="browse" element={<BrowseItem />} />
          <Route path="manage" element={<ManageItem />} />
          <Route path="cart" element={<Cart />} />
        </Routes>
      </StoreProvider>
    </BrowserRouter>
  );
};

export default StoreRouter;
