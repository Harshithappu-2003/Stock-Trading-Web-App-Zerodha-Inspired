import React from "react";
import {Link} from "react-router-dom";


function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg border-bottom bg-white shadow-sm sticky-top">
      <div className="container py-2">
        {/* Logo */}
        <Link className="navbar-brand" to="/">
          <img
            src="media/images/logo.svg"
            alt="Zerodha Logo"
            className="img-fluid"
            style={{ maxWidth: "130px" }}
          />
        </Link>

        {/* Hamburger Toggle Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarMenu"
          aria-controls="navbarMenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Nav Links */}
        <div className="collapse navbar-collapse justify-content-end" id="navbarMenu">
          <ul className="navbar-nav gap-3">
            <li className="nav-item">
              <Link  className="nav-link" to="/signup">Signup</Link >
            </li>
            <li className="nav-item">
              <Link  className="nav-link" to="/about">About</Link >
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/products">Product</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/pricing">Pricing</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/support">Support</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
