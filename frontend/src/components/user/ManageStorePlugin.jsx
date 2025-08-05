import React from 'react';

const ManageStorePlugin = () => {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-10">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title text-center mb-4">Manage Store Plugins</h2>
              <p className="text-muted text-center mb-4">
                Manage and configure your e-commerce store plugins
              </p>
              
              <div className="row">
                <div className="col-md-6 mb-4">
                  <div className="card border-primary">
                    <div className="card-header bg-primary text-white">
                      <h5 className="mb-0">
                        <i className="fas fa-shopping-cart me-2"></i>
                        Cart Management Plugin
                      </h5>
                    </div>
                    <div className="card-body">
                      <p className="text-muted">Status: <span className="badge bg-success">Active</span></p>
                      <p className="text-muted">Version: 1.2.0</p>
                      <div className="d-flex gap-2">
                        <button className="btn btn-sm btn-outline-primary">Configure</button>
                        <button className="btn btn-sm btn-outline-warning">Update</button>
                        <button className="btn btn-sm btn-outline-danger">Disable</button>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="col-md-6 mb-4">
                  <div className="card border-success">
                    <div className="card-header bg-success text-white">
                      <h5 className="mb-0">
                        <i className="fas fa-search me-2"></i>
                        Product Browser Plugin
                      </h5>
                    </div>
                    <div className="card-body">
                      <p className="text-muted">Status: <span className="badge bg-success">Active</span></p>
                      <p className="text-muted">Version: 1.1.5</p>
                      <div className="d-flex gap-2">
                        <button className="btn btn-sm btn-outline-primary">Configure</button>
                        <button className="btn btn-sm btn-outline-warning">Update</button>
                        <button className="btn btn-sm btn-outline-danger">Disable</button>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="col-md-6 mb-4">
                  <div className="card border-warning">
                    <div className="card-header bg-warning text-white">
                      <h5 className="mb-0">
                        <i className="fas fa-boxes me-2"></i>
                        Product Management Plugin
                      </h5>
                    </div>
                    <div className="card-body">
                      <p className="text-muted">Status: <span className="badge bg-secondary">Inactive</span></p>
                      <p className="text-muted">Version: 1.0.8</p>
                      <div className="d-flex gap-2">
                        <button className="btn btn-sm btn-outline-primary">Configure</button>
                        <button className="btn btn-sm btn-outline-warning">Update</button>
                        <button className="btn btn-sm btn-outline-success">Enable</button>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="col-md-6 mb-4">
                  <div className="card border-info">
                    <div className="card-header bg-info text-white">
                      <h5 className="mb-0">
                        <i className="fas fa-credit-card me-2"></i>
                        Payment Processing Plugin
                      </h5>
                    </div>
                    <div className="card-body">
                      <p className="text-muted">Status: <span className="badge bg-success">Active</span></p>
                      <p className="text-muted">Version: 1.3.2</p>
                      <div className="d-flex gap-2">
                        <button className="btn btn-sm btn-outline-primary">Configure</button>
                        <button className="btn btn-sm btn-outline-warning">Update</button>
                        <button className="btn btn-sm btn-outline-danger">Disable</button>
                      </div>
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

export default ManageStorePlugin;