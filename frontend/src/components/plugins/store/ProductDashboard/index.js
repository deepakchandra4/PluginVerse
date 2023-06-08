import React from 'react'
import { BrowserRouter, NavLink, Outlet, Route, Routes } from 'react-router-dom';
import AddProduct from './AddProduct';
import ManageProduct from './ManageProduct';

const ProductDashboard = ({pluginId, userId}) => {
  return (
    <div>
        <BrowserRouter>
        <NavLink className="btn btn-primary" to="/manageproduct" >Manage Product Data</NavLink>
        <NavLink className="btn btn-primary" to="/addproduct" >Add Product Data</NavLink>
            <Routes>
                <Route path="addproduct" element={<AddProduct pluginId={pluginId} userId={userId} />} />
                <Route path="manageproduct" element={<ManageProduct pluginId={pluginId} userId={userId} />} />
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default ProductDashboard;