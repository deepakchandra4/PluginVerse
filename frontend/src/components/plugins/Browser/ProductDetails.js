import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useStoreContext } from './StoreContext';

const ProductDetails = () => {
  const { id } = useParams();
  const { addToCart } = useStoreContext();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  const getProductData = async () => {
    try {
      // Simulate API call
      const mockProduct = {
        id: id,
        name: 'Sample Product',
        price: 49.99,
        description: 'This is a sample product description.',
        image: 'https://via.placeholder.com/300',
        category: 'Electronics',
        brand: 'Sample Brand'
      };
      setProduct(mockProduct);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching product:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getProductData();
  }, [id]); // eslint-disable-line react-hooks/exhaustive-deps

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

  if (!product) {
    return (
      <div className="container mt-5">
        <div className="text-center">
          <h3>Product not found</h3>
        </div>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <img src={product.image} className="img-fluid rounded" alt={product.name} />
        </div>
        <div className="col-md-6">
          <h2>{product.name}</h2>
          <p className="text-muted">{product.brand}</p>
          <h3 className="text-primary">${product.price}</h3>
          <p>{product.description}</p>
          <p><strong>Category:</strong> {product.category}</p>
          <button 
            className="btn btn-primary btn-lg"
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
