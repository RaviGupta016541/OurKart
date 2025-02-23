import React from "react";
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand" href="#">OurKart</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <Link to='/' className="textDecorate">
            <li className="nav-item">
              <a className="nav-link active">Home</a>
            </li>
            </Link>
            <Link to='/about' className="textDecorate">
            <li className="nav-item">
              <a className="nav-link" >About</a>
            </li>
            </Link>
            <Link to='/contact' className="textDecorate">
            <li className="nav-item">
              <a className="nav-link" >Contact Us</a>
            </li>
            </Link>
          </ul>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <button className="btn btn-outline-primary me-3">
                <i className="bi bi-cart"></i> Cart
              </button>
            </li>
            <li className="nav-item">
              <button className="btn btn-primary">Login</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
