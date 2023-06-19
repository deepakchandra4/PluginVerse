import React from 'react';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import BrowseProduct from './BrowseProduct';
import ProductDetails from './ProductDetails';
import { StoreProvider } from './StoreContext';

const Browser = ({ pluginId, userId }) => {
  return (
    <BrowserRouter>
      <StoreProvider>
        <NavLink className="btn btn-primary" to="/browse">
          Product Browser
        </NavLink>
        <Routes>
          <Route path="browse" element={<BrowseProduct pluginId={pluginId} userId={userId} />} />
          <Route path="productdetails/:id" element={<ProductDetails pluginId={pluginId} userId={userId} />} />
        </Routes>
      </StoreProvider>
    </BrowserRouter>
  );
};

export default Browser;
