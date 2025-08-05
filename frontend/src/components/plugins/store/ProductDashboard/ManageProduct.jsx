import React, { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { toast } from 'react-hot-toast';

import { GridToolbarContainer, GridToolbarColumnsButton, GridToolbarFilterButton, GridToolbarDensitySelector, GridToolbarExport } from '@mui/x-data-grid';
import app_config from '../../../../config';
import Swal from 'sweetalert2';

const CustomToolbar = () => {
  return (
    <GridToolbarContainer>
      <GridToolbarColumnsButton />
      <GridToolbarFilterButton />
      <GridToolbarDensitySelector />
      <GridToolbarExport />
    </GridToolbarContainer>
  );
};

const ManageProduct = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchItems = async () => {
    try {
      // Simulate API call
      const mockProducts = [
        { id: 1, title: 'Product 1', price: 29.99, category: 'Electronics', brand: 'Brand A' },
        { id: 2, title: 'Product 2', price: 39.99, category: 'Clothing', brand: 'Brand B' },
        { id: 3, title: 'Product 3', price: 49.99, category: 'Books', brand: 'Brand C' },
      ];
      setProducts(mockProducts);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching products:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchItems();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const handleDelete = (id) => {
    setProducts(products.filter(product => product.id !== id));
  };

  if (loading) {
    return (
      <div className="container mt-5">
        <div className="text-center">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Manage Products</h2>
        <button className="btn btn-primary">
          <i className="fas fa-plus me-2"></i>
          Add New Product
        </button>
      </div>
      
      <div className="row">
        {products.map((product) => (
          <div key={product.id} className="col-md-6 col-lg-4 mb-4">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="text-muted mb-2">{product.brand}</p>
                <p className="text-primary fw-bold mb-2">${product.price}</p>
                <span className="badge bg-secondary mb-3">{product.category}</span>
                
                <div className="d-flex gap-2">
                  <button className="btn btn-sm btn-outline-primary">
                    <i className="fas fa-edit me-1"></i>
                    Edit
                  </button>
                  <button 
                    className="btn btn-sm btn-outline-danger"
                    onClick={() => handleDelete(product.id)}
                  >
                    <i className="fas fa-trash me-1"></i>
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageProduct;
