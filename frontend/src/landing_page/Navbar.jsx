import React from "react";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg border-bottom bg-white shadow-sm sticky-top">
      <div className="container py-2">
        {/* Logo */}
        <a className="navbar-brand" href="#">
          <img
            src="media/images/logo.svg"
            alt="Zerodha Logo"
            className="img-fluid"
            style={{ maxWidth: "130px" }}
          />
        </a>

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
              <a className="nav-link" href="#">Signup</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Product</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Pricing</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Support</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
