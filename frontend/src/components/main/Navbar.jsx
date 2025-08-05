import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useUserContext } from "../../context/UserProvider";

const Navbar = () => {
  const { loggedIn, logout } = useUserContext();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogout = () => {
    logout();
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav className={`navbar navbar-expand-lg navbar-light fixed-top ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container">
          {/* Toggle button */}
          <button
            className="navbar-toggler border-0"
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-controls="navbarSupportedContent"
            aria-expanded={isMobileMenuOpen}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navbar brand */}
          <NavLink className="navbar-brand mt-2 mt-lg-0" to="/main/home">
            <h2 className="gradient-text animate-pulse">PluginVerse</h2>
          </NavLink>

          {/* Collapsible wrapper */}
          <div className={`collapse navbar-collapse ${isMobileMenuOpen ? 'show' : ''}`} id="navbarSupportedContent">
            {/* Left links */}
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink 
                  className="nav-link" 
                  to="/main/home"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <i className="fas fa-home me-2"></i>
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink 
                  className="nav-link" 
                  to="/main/login"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <i className="fas fa-sign-in-alt me-2"></i>
                  Login
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink 
                  className="nav-link" 
                  to="/main/signup"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <i className="fas fa-user-plus me-2"></i>
                  Signup
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink 
                  className="nav-link" 
                  to="/main/browse"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <i className="fas fa-search me-2"></i>
                  Browse Plugins
                </NavLink>
              </li>
            </ul>

            {/* User Profile Section */}
            <div className="d-flex align-items-center">
              {loggedIn ? (
                <div className="dropdown">
                  <button
                    className="dropdown-toggle d-flex align-items-center hidden-arrow glass px-3 py-2 rounded border-0 bg-transparent"
                    id="navbarDropdownMenuAvatar"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <img
                      src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                      className="rounded-circle me-2"
                      height={32}
                      width={32}
                      alt="User Avatar"
                      loading="lazy"
                    />
                    <span className="text-dark fw-medium">Profile</span>
                  </button>
                  <ul
                    className="dropdown-menu dropdown-menu-end glass border-0 shadow-lg"
                    aria-labelledby="navbarDropdownMenuAvatar"
                  >
                    <li>
                      <NavLink 
                        className="dropdown-item d-flex align-items-center" 
                        to="/user/userprofile"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <i className="fas fa-user me-2"></i>
                        My Profile
                      </NavLink>
                    </li>
                    <li>
                      <NavLink 
                        className="dropdown-item d-flex align-items-center" 
                        to="/user/history"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <i className="fas fa-history me-2"></i>
                        My Predictions
                      </NavLink>
                    </li>
                    <li><hr className="dropdown-divider" /></li>
                    <li>
                      <button 
                        className="dropdown-item d-flex align-items-center text-danger" 
                        onClick={handleLogout}
                      >
                        <i className="fas fa-sign-out-alt me-2"></i>
                        Logout
                      </button>
                    </li>
                  </ul>
                </div>
              ) : (
                <div className="d-flex gap-2">
                  <NavLink 
                    to="/main/login" 
                    className="btn btn-secondary btn-sm"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <i className="fas fa-sign-in-alt me-1"></i>
                    Login
                  </NavLink>
                  <NavLink 
                    to="/main/signup" 
                    className="btn btn-primary btn-sm"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <i className="fas fa-user-plus me-1"></i>
                    Sign Up
                  </NavLink>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
      
      {/* Spacer for fixed navbar */}
      <div style={{ height: '80px' }}></div>
    </>
  );
};

export default Navbar;
