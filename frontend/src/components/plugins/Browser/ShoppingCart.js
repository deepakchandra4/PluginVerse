import React from 'react';
import { useStoreContext } from './StoreContext';

const ShoppingCart = () => {
  const { cart, removeFromCart, updateQuantity } = useStoreContext();

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  if (cart.length === 0) {
    return (
      <div className="container mt-5">
        <div className="text-center">
          <h3>Your cart is empty</h3>
          <p className="text-muted">Add some products to get started!</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Shopping Cart</h2>
      <div className="row">
        <div className="col-md-8">
          {cart.map((item) => (
            <div key={item.id} className="card mb-3">
              <div className="card-body">
                <div className="row align-items-center">
                  <div className="col-md-2">
                    <img src={item.image} className="img-fluid rounded" alt={item.name} />
                  </div>
                  <div className="col-md-4">
                    <h5 className="card-title">{item.name}</h5>
                    <p className="text-muted">${item.price}</p>
                  </div>
                  <div className="col-md-3">
                    <div className="input-group">
                      <button 
                        className="btn btn-outline-secondary"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        disabled={item.quantity <= 1}
                      >
                        -
                      </button>
                      <input 
                        type="number" 
                        className="form-control text-center"
                        value={item.quantity}
                        onChange={(e) => updateQuantity(item.id, parseInt(e.target.value) || 1)}
                        min="1"
                      />
                      <button 
                        className="btn btn-outline-secondary"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="col-md-2">
                    <p className="fw-bold">${(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                  <div className="col-md-1">
                    <button 
                      className="btn btn-danger btn-sm"
                      onClick={() => removeFromCart(item.id)}
                    >
                      <i className="fas fa-trash"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Order Summary</h5>
              <div className="d-flex justify-content-between mb-3">
                <span>Subtotal:</span>
                <span>${calculateTotal().toFixed(2)}</span>
              </div>
              <div className="d-flex justify-content-between mb-3">
                <span>Tax:</span>
                <span>${(calculateTotal() * 0.1).toFixed(2)}</span>
              </div>
              <hr />
              <div className="d-flex justify-content-between mb-3">
                <strong>Total:</strong>
                <strong>${(calculateTotal() * 1.1).toFixed(2)}</strong>
              </div>
              <button className="btn btn-primary w-100">
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
