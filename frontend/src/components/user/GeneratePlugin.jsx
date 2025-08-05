import React from 'react';

const GeneratePlugin = () => {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card">
            <div className="card-body text-center">
              <h2 className="card-title mb-4">Generate Plugin</h2>
              <p className="text-muted mb-4">
                This feature allows you to generate custom plugins for your e-commerce website.
              </p>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <div className="card bg-light">
                    <div className="card-body">
                      <i className="fas fa-shopping-cart fa-3x text-primary mb-3"></i>
                      <h5>Cart Management</h5>
                      <p className="text-muted">Generate plugins for shopping cart functionality</p>
                      <button className="btn btn-primary">Generate</button>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <div className="card bg-light">
                    <div className="card-body">
                      <i className="fas fa-search fa-3x text-success mb-3"></i>
                      <h5>Product Browser</h5>
                      <p className="text-muted">Generate plugins for product browsing</p>
                      <button className="btn btn-success">Generate</button>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <div className="card bg-light">
                    <div className="card-body">
                      <i className="fas fa-boxes fa-3x text-warning mb-3"></i>
                      <h5>Product Management</h5>
                      <p className="text-muted">Generate plugins for product management</p>
                      <button className="btn btn-warning">Generate</button>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <div className="card bg-light">
                    <div className="card-body">
                      <i className="fas fa-credit-card fa-3x text-info mb-3"></i>
                      <h5>Payment Processing</h5>
                      <p className="text-muted">Generate plugins for payment processing</p>
                      <button className="btn btn-info">Generate</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeneratePlugin;
