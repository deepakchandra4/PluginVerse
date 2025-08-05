import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-light py-5 mt-5">
      <div className="container">
        <div className="row g-4">
          {/* Company Info */}
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="mb-4">
              <h3 className="gradient-text fw-bold mb-3">PluginVerse</h3>
              <p className="text-muted mb-4">
                Empowering developers and businesses with cutting-edge e-commerce plugins. 
                Transform your online store with our innovative solutions.
              </p>
            </div>
            <div className="d-flex gap-3">
              <button className="btn btn-outline-light btn-sm rounded-circle">
                <i className="fab fa-facebook-f"></i>
              </button>
              <button className="btn btn-outline-light btn-sm rounded-circle">
                <i className="fab fa-twitter"></i>
              </button>
              <button className="btn btn-outline-light btn-sm rounded-circle">
                <i className="fab fa-linkedin-in"></i>
              </button>
              <button className="btn btn-outline-light btn-sm rounded-circle">
                <i className="fab fa-github"></i>
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-lg-2 col-md-6 mb-4">
            <h5 className="fw-bold mb-3">Quick Links</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link to="/main/home" className="text-decoration-none text-muted hover-text-light">
                  <i className="fas fa-chevron-right me-2"></i>
                  Home
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/main/browse" className="text-decoration-none text-muted hover-text-light">
                  <i className="fas fa-chevron-right me-2"></i>
                  Browse Plugins
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/main/login" className="text-decoration-none text-muted hover-text-light">
                  <i className="fas fa-chevron-right me-2"></i>
                  Login
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/main/signup" className="text-decoration-none text-muted hover-text-light">
                  <i className="fas fa-chevron-right me-2"></i>
                  Sign Up
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="col-lg-2 col-md-6 mb-4">
            <h5 className="fw-bold mb-3">Services</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <button className="text-decoration-none text-muted hover-text-light border-0 bg-transparent">
                  <i className="fas fa-shopping-cart me-2"></i>
                  Cart Management
                </button>
              </li>
              <li className="mb-2">
                <button className="text-decoration-none text-muted hover-text-light border-0 bg-transparent">
                  <i className="fas fa-search me-2"></i>
                  Product Browser
                </button>
              </li>
              <li className="mb-2">
                <button className="text-decoration-none text-muted hover-text-light border-0 bg-transparent">
                  <i className="fas fa-boxes me-2"></i>
                  Product Management
                </button>
              </li>
              <li className="mb-2">
                <button className="text-decoration-none text-muted hover-text-light border-0 bg-transparent">
                  <i className="fas fa-credit-card me-2"></i>
                  Payment Processing
                </button>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="col-lg-2 col-md-6 mb-4">
            <h5 className="fw-bold mb-3">Support</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <button className="text-decoration-none text-muted hover-text-light border-0 bg-transparent">
                  <i className="fas fa-question-circle me-2"></i>
                  Help Center
                </button>
              </li>
              <li className="mb-2">
                <button className="text-decoration-none text-muted hover-text-light border-0 bg-transparent">
                  <i className="fas fa-book me-2"></i>
                  Documentation
                </button>
              </li>
              <li className="mb-2">
                <button className="text-decoration-none text-muted hover-text-light border-0 bg-transparent">
                  <i className="fas fa-headset me-2"></i>
                  Contact Us
                </button>
              </li>
              <li className="mb-2">
                <button className="text-decoration-none text-muted hover-text-light border-0 bg-transparent">
                  <i className="fas fa-bug me-2"></i>
                  Report Issues
                </button>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-lg-2 col-md-6 mb-4">
            <h5 className="fw-bold mb-3">Newsletter</h5>
            <p className="text-muted mb-3">Stay updated with our latest plugins and features.</p>
            <div className="input-group mb-3">
              <input
                type="email"
                className="form-control bg-transparent border-light text-light"
                placeholder="Your email"
                aria-label="Email for newsletter"
              />
              <button className="btn btn-primary" type="button">
                <i className="fas fa-paper-plane"></i>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-top border-secondary pt-4 mt-4">
          <div className="row align-items-center">
            <div className="col-md-6 text-center text-md-start">
              <p className="mb-0 text-muted">
                © {currentYear} PluginVerse. All rights reserved.
              </p>
            </div>
            <div className="col-md-6 text-center text-md-end">
              <div className="d-flex justify-content-center justify-content-md-end gap-3">
                <button className="text-decoration-none text-muted hover-text-light border-0 bg-transparent">
                  Privacy Policy
                </button>
                <button className="text-decoration-none text-muted hover-text-light border-0 bg-transparent">
                  Terms of Service
                </button>
                <button className="text-decoration-none text-muted hover-text-light border-0 bg-transparent">
                  Cookie Policy
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;