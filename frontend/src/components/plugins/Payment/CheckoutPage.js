import React, { useState } from 'react';

const CheckoutPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    zipCode: '',
    cardNumber: '',
    expiryDate: '',
    cvv: ''
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
    // Handle checkout logic here
    console.log('Checkout data:', formData);
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title text-center mb-4">Checkout</h2>
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="firstName" className="form-label">First Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="lastName" className="form-label">Last Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="address" className="form-label">Address</label>
                  <input
                    type="text"
                    className="form-control"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="city" className="form-label">City</label>
                    <input
                      type="text"
                      className="form-control"
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="zipCode" className="form-label">ZIP Code</label>
                    <input
                      type="text"
                      className="form-control"
                      id="zipCode"
                      name="zipCode"
                      value={formData.zipCode}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
                <hr />
                <h5>Payment Information</h5>
                <div className="mb-3">
                  <label htmlFor="cardNumber" className="form-label">Card Number</label>
                  <input
                    type="text"
                    className="form-control"
                    id="cardNumber"
                    name="cardNumber"
                    value={formData.cardNumber}
                    onChange={handleInputChange}
                    placeholder="1234 5678 9012 3456"
                    required
                  />
                </div>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="expiryDate" className="form-label">Expiry Date</label>
                    <input
                      type="text"
                      className="form-control"
                      id="expiryDate"
                      name="expiryDate"
                      value={formData.expiryDate}
                      onChange={handleInputChange}
                      placeholder="MM/YY"
                      required
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="cvv" className="form-label">CVV</label>
                    <input
                      type="text"
                      className="form-control"
                      id="cvv"
                      name="cvv"
                      value={formData.cvv}
                      onChange={handleInputChange}
                      placeholder="123"
                      required
                    />
                  </div>
                </div>
                <button type="submit" className="btn btn-primary w-100">
                  Complete Purchase
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
