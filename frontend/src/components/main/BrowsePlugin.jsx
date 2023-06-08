import React from 'react';
import { NavLink } from 'react-router-dom';
import app_config from '../../config';

const BrowsePlugin = () => {
  const { pluginData } = app_config;
  const generatePlugin = () => {};

  return (
    <div>
      <header
        className="top-header"
        style={{ backgroundImage: `linear-gradient(to right, black, #16004873), url('https://www.skunexus.com/hubfs/essential-ecommerce-website-tools.jpg')` }}
      >
        <div className="container" style={{ padding: '100px 0' }}>
          <h1 className="fw-bold text-white">Custom E-Commerce Plugins</h1>
        </div>
      </header>
      <div className="container">
        <div className="row mt-5">
          {pluginData.map((item, index) => (
            <div className="col-md-4 mb-4">
              <div className="card">
                <img src={item.image} alt="" />
                <div className="card-body">
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                  <NavLink to={'/user/generateplugin/' + index} className="btn btn-success mt-3">
                    Generate Plugin
                  </NavLink>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrowsePlugin;
