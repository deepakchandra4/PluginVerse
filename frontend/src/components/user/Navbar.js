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
                    <i class="fas fa-home fa-xl d-block"></i>
                    <p className="mb-0 mt-2">Home</p>
                  </div>
                </NavLink>
              </li>
              <li className="custom-link">
                <NavLink to="/main/login" className="nav-link text-secondary">
                  <div className="d-flex align-items-center flex-column">
                    <i class="fa fa-sign-in fa-xl d-block"></i>
                    <i class="" aria-hidden="true"></i>
                    <p className="mb-0 mt-2">Login</p>
                  </div>
                </NavLink>
              </li>
              <li className="custom-link">
                <NavLink to="/main/signup" className="nav-link text-secondary">
                  <div className="d-flex align-items-center flex-column">
                    <i class="fa fa-user-circle fa-xl d-block"></i>
                    <p className="mb-0 mt-2">Signup</p>
                  </div>
                </NavLink>
              </li>
              <li className="custom-link">
                <NavLink to="/main/customize" className="nav-link text-secondary">
                  <div className="d-flex align-items-center flex-column">
                    <i class="fas fa-pen-alt fa-xl d-block"></i>
                    
                    <p className="mb-0 mt-2">Customize</p>
                  </div>
                </NavLink>
              </li>
              <li className="custom-link">
                <NavLink to="/main/browse" className="nav-link text-secondary">
                  <div className="d-flex align-items-center flex-column">
                    <i class="fas fa-home fa-xl d-block"></i>
                    <p className="mb-0 mt-2">Services</p>
                  </div>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="px-3 py-2 border-bottom">
        <div className="container d-flex flex-wrap justify-content-center">
        
          <div className="text-end">
            <Link to="/main/login" type="button" className="btn btn-light text-dark me-2">
              Login
            </Link>
            <Link to="/main/signup" type="button" className="btn btn-primary">
              Sign-up
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
