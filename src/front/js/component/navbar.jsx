import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <Link className="text-warning navbar-brand" to="/">
        <h3>NashvilleAsphalt</h3>
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="text-warning nav-link" to="/contact">
              CONTACT US
            </Link>
          </li>
          <li className="nav-item">
            <Link className="text-warning nav-link" to="/gallery">
              GALLERY
            </Link>
          </li>
          <li className="nav-item">
            <Link className="text-warning nav-link" to="/asphaltcareguide">
              ASPHALT CARE GUIDE
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
