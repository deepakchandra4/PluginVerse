import React from 'react';
import { NavLink } from 'react-router-dom';
import app_config from '../../config';

const BrowsePlugin = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-12">
          <h2 className="text-center mb-4">Browse Plugins</h2>
          <p className="text-center text-muted">
            Explore our collection of e-commerce plugins and find the perfect solution for your needs.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BrowsePlugin;
