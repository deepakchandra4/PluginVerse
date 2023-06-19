import React from "react";
import { Link, NavLink } from "react-router-dom";
import app_config from "../../config";

const Navbar = () => {
  const { title } = app_config;

  return (
    <header>
      <div className="px-3 py-2 text-bg-dark">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <NavLink className="navbar-brand" to="/main/home">
              <div className="d-flex align-items-center">
                <img src="/logo.png" height={50} alt="" />
                <h3 className="ms-2">{title}</h3>
              </div>
            </NavLink>
            <ul className="nav col-12 col-lg-auto py-2 ms-auto justify-content-center my-md-0 text-small text-white">
              <li className="custom-link">
                <NavLink to="/main/home" className="nav-link text-secondary">
                  <div className="d-flex align-items-center flex-column">
                    <i className="fas fa-home fa-xl d-block"></i>
                    <p className="mb-0 mt-2">Home</p>
                  </div>
                </NavLink>
              </li>
              <li className="custom-link">
                <NavLink to="/main/login" className="nav-link text-secondary">
                  <div className="d-flex align-items-center flex-column">
                    <i className="fa fa-sign-in fa-xl d-block"></i>
                    <i className="" aria-hidden="true"></i>
                    <p className="mb-0 mt-2">Login</p>
                  </div>
                </NavLink>
              </li>
              <li className="custom-link">
                <NavLink to="/main/signup" className="nav-link text-secondary">
                  <div className="d-flex align-items-center flex-column">
                    <i className="fa fa-user-circle fa-xl d-block"></i>
                    <p className="mb-0 mt-2">Signup</p>
                  </div>
                </NavLink>
              </li>
              <li className="custom-link">
                <NavLink to="/main/browse" className="nav-link text-secondary">
                  <div className="d-flex align-items-center flex-column">
                    
                    <i className="fas fa-box fa-xl d-block   "></i>
                    
                    <p className="mb-0 mt-2">Plugins</p>
                  </div>
                </NavLink>
              </li>
              <li className="custom-link">
                <NavLink to="/main/browse" className="nav-link text-secondary">
                  <div className="d-flex align-items-center flex-column">
                    <i className="fas fa-home fa-xl d-block"></i>
                    <p className="mb-0 mt-2">Services</p>
                  </div>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
