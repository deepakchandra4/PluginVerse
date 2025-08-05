import React, { useState, useEffect } from 'react';
import { useStoreContext } from './StoreContext';

const BrowseProduct = () => {
  const { addToCart } = useStoreContext();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchItems = async () => {
    try {
      // Simulate API call
      const mockItems = [
        { id: 1, name: 'Product 1', price: 29.99, image: 'https://via.placeholder.com/150' },
        { id: 2, name: 'Product 2', price: 39.99, image: 'https://via.placeholder.com/150' },
        { id: 3, name: 'Product 3', price: 49.99, image: 'https://via.placeholder.com/150' },
      ];
      setItems(mockItems);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching items:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchItems();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

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
      <h2 className="text-center mb-4">Browse Products</h2>
      <div className="row">
        {items.map((item) => (
          <div key={item.id} className="col-md-4 mb-4">
            <div className="card h-100">
              <img src={item.image} className="card-img-top" alt={item.name} />
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">${item.price}</p>
                <button 
                  className="btn btn-primary"
                  onClick={() => addToCart(item)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrowseProduct;
