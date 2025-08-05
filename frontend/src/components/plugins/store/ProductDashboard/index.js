import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AddProduct from './AddProduct';
import ManageProduct from './ManageProduct';

const ProductDashboard = () => {
  return (
    <Routes>
      <Route path="/add" element={<AddProduct />} />
      <Route path="/manage" element={<ManageProduct />} />
    </Routes>
  );
};

export default ProductDashboard;