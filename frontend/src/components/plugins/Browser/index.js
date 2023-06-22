import React from 'react';
import { BrowserRouter, NavLink, Navigate, Route, Routes } from 'react-router-dom';
import BrowseProduct from './BrowseProduct';
import ProductDetails from './ProductDetails';
import { StoreProvider } from './StoreContext';
import ShoppingCart from './ShoppingCart';

const Browser = ({ pluginId, userId, includeCart }) => {
  return (
    <BrowserRouter>
      <StoreProvider>
        <NavLink className="btn btn-primary" to="/browse">
          Product Browser
        </NavLink>
        {includeCart && (
          <NavLink className="btn btn-primary" to="/cart">
            Cart Page
          </NavLink>
        )}
        <Routes>
          <Route path="/" element={<Navigate to="/browse" />} />
          <Route path="browse" element={<BrowseProduct pluginId={pluginId} userId={userId} includeCart={includeCart} />} />
          <Route path="productdetails/:id" element={<ProductDetails pluginId={pluginId} userId={userId} includeCart={includeCart} />} />
          <Route path="cart" element={<ShoppingCart pluginId={pluginId} userId={userId} includeCart={includeCart} />} />
        </Routes>
      </StoreProvider>
    </BrowserRouter>
  );
};

export default Browser;
