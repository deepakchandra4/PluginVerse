import React, { useState } from 'react';

const AddProduct = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    price: '',
    category: '',
    brand: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Product data:', formData);
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title text-center mb-4">Add New Product</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="title" className="form-label">Product Title</label>
                  <input
                    type="text"
                    className="form-control"
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="description" className="form-label">Description</label>
                  <textarea
                    className="form-control"
                    id="description"
                    name="description"
                    rows="3"
                    value={formData.description}
                    onChange={handleInputChange}
                    required
                  ></textarea>
                </div>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="price" className="form-label">Price</label>
                    <input
                      type="number"
                      className="form-control"
                      id="price"
                      name="price"
                      value={formData.price}
                      onChange={handleInputChange}
                      step="0.01"
                      required
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="category" className="form-label">Category</label>
                    <select
                      className="form-control"
                      id="category"
                      name="category"
                      value={formData.category}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">Select Category</option>
                      <option value="electronics">Electronics</option>
                      <option value="clothing">Clothing</option>
                      <option value="books">Books</option>
                      <option value="home">Home & Garden</option>
                    </select>
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="brand" className="form-label">Brand</label>
                  <input
                    type="text"
                    className="form-control"
                    id="brand"
                    name="brand"
                    value={formData.brand}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary w-100">
                  Add Product
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
