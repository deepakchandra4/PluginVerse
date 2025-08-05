import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand" href="/">PluginVerse</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="/user/profile">Profile</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/user/plugins">My Plugins</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/user/settings">Settings</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/logout">Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
